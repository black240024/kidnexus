
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Users, Target, Handshake } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const partnershipSchema = z.object({
  organizationName: z.string().min(2, 'Organization name must be at least 2 characters'),
  contactName: z.string().min(2, 'Contact name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  website: z.string().url('Please enter a valid website URL').optional().or(z.literal('')),
  organizationType: z.string().min(1, 'Please select organization type'),
  partnershipType: z.array(z.string()).min(1, 'Please select at least one partnership type'),
  organizationSize: z.string().min(1, 'Please select organization size'),
  location: z.string().min(2, 'Please enter your location'),
  description: z.string().min(50, 'Please provide a detailed description (minimum 50 characters)'),
  goals: z.string().min(30, 'Please describe your partnership goals (minimum 30 characters)'),
  resources: z.string().min(20, 'Please describe available resources (minimum 20 characters)'),
  timeline: z.string().min(1, 'Please select a timeline'),
  previousPartnerships: z.string().optional(),
  additionalInfo: z.string().optional()
});

type PartnershipFormData = z.infer<typeof partnershipSchema>;

const PartnershipForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<PartnershipFormData>({
    resolver: zodResolver(partnershipSchema),
    defaultValues: {
      organizationName: '',
      contactName: '',
      email: '',
      phone: '',
      website: '',
      organizationType: '',
      partnershipType: [],
      organizationSize: '',
      location: '',
      description: '',
      goals: '',
      resources: '',
      timeline: '',
      previousPartnerships: '',
      additionalInfo: ''
    }
  });

  const onSubmit = async (data: PartnershipFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/mzzdvlba', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          _subject: 'New Partnership Inquiry - KIDNEXUS',
          partnershipType: data.partnershipType.join(', ')
        }),
      });

      if (response.ok) {
        toast({
          title: "Partnership Inquiry Submitted! 🤝",
          description: "Thank you for your interest in partnering with KIDNEXUS! We'll review your proposal and get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({
        title: "Submission Failed 😢",
        description: "There was an error submitting your partnership inquiry. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const organizationTypes = [
    'Non-Profit Organization',
    'Educational Institution',
    'Government Agency',
    'Corporate/Business',
    'Foundation',
    'International Organization',
    'Community-Based Organization',
    'Religious Organization',
    'Research Institution',
    'Other'
  ];

  const partnershipTypes = [
    'Funding/Sponsorship',
    'Program Implementation',
    'Resource Sharing',
    'Technical Expertise',
    'Venue/Space Provision',
    'Staff Exchange',
    'Research Collaboration',
    'Community Outreach',
    'Advocacy Partnership',
    'Capacity Building'
  ];

  return (
    <Card className="shadow-xl bg-white/95 backdrop-blur-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold text-gray-800 mb-2 flex items-center justify-center">
          <Handshake className="h-8 w-8 mr-3 text-teal-600" />
          Partnership Application 🤝
        </CardTitle>
        <CardDescription className="text-lg text-gray-600">
          Let's explore how we can work together to create magical impact for children! ✨
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Organization Information */}
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Building2 className="h-5 w-5 mr-2 text-teal-600" />
                Organization Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="organizationName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Organization Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Your organization name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="contactName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Primary Contact Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="organization@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number *</FormLabel>
                      <FormControl>
                        <Input placeholder="+254 700 000 000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="https://www.yourorg.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location *</FormLabel>
                      <FormControl>
                        <Input placeholder="City, Country" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <FormField
                  control={form.control}
                  name="organizationType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Organization Type *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select organization type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {organizationTypes.map((type) => (
                            <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, '-')}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="organizationSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Organization Size *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select size" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="201-1000">201-1000 employees</SelectItem>
                          <SelectItem value="1000+">1000+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Partnership Details */}
            <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Target className="h-5 w-5 mr-2 text-orange-600" />
                Partnership Details
              </h3>

              <FormField
                control={form.control}
                name="partnershipType"
                render={() => (
                  <FormItem>
                    <FormLabel>Partnership Type (Select all that apply) *</FormLabel>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {partnershipTypes.map((type) => (
                        <FormField
                          key={type}
                          control={form.control}
                          name="partnershipType"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(type)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, type])
                                      : field.onChange(field.value?.filter((value) => value !== type))
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">
                                {type}
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="mt-6">
                <FormField
                  control={form.control}
                  name="timeline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Timeline *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="immediate">Immediate (1-3 months)</SelectItem>
                          <SelectItem value="short-term">Short-term (3-6 months)</SelectItem>
                          <SelectItem value="medium-term">Medium-term (6-12 months)</SelectItem>
                          <SelectItem value="long-term">Long-term (1+ years)</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Detailed Information */}
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Organization Description *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your organization, mission, and current work..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="goals"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Partnership Goals *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="What do you hope to achieve through this partnership? How does it align with your organization's mission?"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="resources"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Available Resources *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="What resources, expertise, or support can your organization bring to this partnership?"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="previousPartnerships"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Previous Partnerships (Optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about any previous partnerships or collaborations, especially in education or child development..."
                        className="min-h-[80px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="additionalInfo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Information (Optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Any additional information you'd like to share about your organization or partnership ideas..."
                        className="min-h-[80px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-center pt-6">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Handshake className="h-5 w-5 mr-2" />
                    Submit Partnership Inquiry 🚀
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default PartnershipForm;
