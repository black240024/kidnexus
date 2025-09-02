
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
import { Heart, Users, Award, Clock, CheckCircle, Star, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const volunteerSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  age: z.string().min(1, 'Please select your age range'),
  location: z.string().min(2, 'Please enter your location'),
  occupation: z.string().min(2, 'Please enter your occupation'),
  experience: z.string().min(2, 'Please tell us about your experience'),
  volunteerRole: z.string().min(1, 'Please select a volunteer role'),
  availability: z.array(z.string()).min(1, 'Please select at least one availability option'),
  motivation: z.string().min(50, 'Please tell us more about your motivation (minimum 50 characters)'),
  skills: z.string().min(10, 'Please describe your relevant skills'),
  references: z.string().optional(),
  agreement: z.boolean().refine(val => val === true, 'You must agree to the terms')
});

type VolunteerFormData = z.infer<typeof volunteerSchema>;

const Volunteer = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<VolunteerFormData>({
    resolver: zodResolver(volunteerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      age: '',
      location: '',
      occupation: '',
      experience: '',
      volunteerRole: '',
      availability: [],
      motivation: '',
      skills: '',
      references: '',
      agreement: false
    }
  });

  const onSubmit = async (data: VolunteerFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/xdkobgko', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          _subject: 'New Volunteer Application - KIDNEXUS',
          availability: data.availability.join(', ')
        }),
      });

      if (response.ok) {
        toast({
          title: "Application Submitted! 🎉",
          description: "Thank you for your interest in volunteering with KIDNEXUS! We'll review your application and get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({
        title: "Submission Failed 😢",
        description: "There was an error submitting your application. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const volunteerRoles = [
    { value: 'facilitator', label: 'Program Facilitator 👨‍🏫', description: 'Lead hands-on learning sessions' },
    { value: 'mentor', label: 'Mentor 💫', description: 'Provide one-on-one guidance' },
    { value: 'event-support', label: 'Event Support 🎪', description: 'Help with workshops and events' },
    { value: 'technical', label: 'Technical Support 💻', description: 'Assist with technology and digital tools' },
    { value: 'creative', label: 'Creative Arts 🎨', description: 'Support arts and creative activities' },
    { value: 'administrative', label: 'Administrative 📋', description: 'Help with organizational tasks' }
  ];

  const availabilityOptions = [
    'Weekday Mornings (9AM-12PM)',
    'Weekday Afternoons (1PM-5PM)',
    'Weekday Evenings (6PM-8PM)',
    'Saturday Mornings (9AM-12PM)',
    'Saturday Afternoons (1PM-5PM)',
    'Sunday Mornings (9AM-12PM)',
    'Sunday Afternoons (1PM-5PM)',
    'Flexible/As Needed'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 animate-bounce">
            <Star className="h-8 w-8 text-yellow-400" />
          </div>
          <div className="absolute top-20 right-20 animate-pulse">
            <Sparkles className="h-6 w-6 text-purple-400" />
          </div>
          <div className="absolute bottom-10 left-1/4 animate-bounce delay-300">
            <Heart className="h-6 w-6 text-red-400" />
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Volunteer with KIDNEXUS 🌟
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join our magical team and help transform children's lives through play-based learning and innovation! 
            Your skills and passion can make a real difference in Kenyan communities. ✨
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <Users className="h-8 w-8 text-orange-500 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Make Impact</h3>
              <p className="text-sm text-gray-600">Directly contribute to transforming children's lives</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <Award className="h-8 w-8 text-teal-500 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Gain Experience</h3>
              <p className="text-sm text-gray-600">Develop skills in education and social impact</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <Heart className="h-8 w-8 text-pink-500 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Join Community</h3>
              <p className="text-sm text-gray-600">Connect with like-minded changemakers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="shadow-2xl bg-white/95 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-gray-800 mb-2">
                Volunteer Application Form 📝
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Tell us about yourself and how you'd like to contribute to our mission!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your first name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your last name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your.email@example.com" {...field} />
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="age"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Age Range *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your age range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="18-25">18-25 years</SelectItem>
                              <SelectItem value="26-35">26-35 years</SelectItem>
                              <SelectItem value="36-45">36-45 years</SelectItem>
                              <SelectItem value="46-55">46-55 years</SelectItem>
                              <SelectItem value="56+">56+ years</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Location (City/County) *</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Nairobi, Machakos" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="occupation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Occupation *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your current job or field of study" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Volunteer Role Preference */}
                  <FormField
                    control={form.control}
                    name="volunteerRole"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Volunteer Role *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Choose your preferred role" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {volunteerRoles.map((role) => (
                              <SelectItem key={role.value} value={role.value}>
                                {role.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Availability */}
                  <FormField
                    control={form.control}
                    name="availability"
                    render={() => (
                      <FormItem>
                        <FormLabel>Availability (Select all that apply) *</FormLabel>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {availabilityOptions.map((option) => (
                            <FormField
                              key={option}
                              control={form.control}
                              name="availability"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(option)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, option])
                                          : field.onChange(field.value?.filter((value) => value !== option))
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="text-sm font-normal">
                                    {option}
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

                  {/* Experience and Skills */}
                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Relevant Experience *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your experience working with children, education, community work, or related fields..."
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
                    name="skills"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Skills and Talents *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="What skills, talents, or expertise can you bring to KIDNEXUS? (e.g., teaching, arts, technology, sports, languages, etc.)"
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
                    name="motivation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Why do you want to volunteer with KIDNEXUS? *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Share what motivates you to work with children and contribute to our mission..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="references"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>References (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please provide contact information for 1-2 references who can speak to your character and experience..."
                            className="min-h-[80px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Agreement */}
                  <FormField
                    control={form.control}
                    name="agreement"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I agree to the terms and conditions *
                          </FormLabel>
                          <p className="text-sm text-gray-600">
                            I understand that volunteering with KIDNEXUS requires a commitment to child safety, 
                            professionalism, and alignment with our mission and values.
                          </p>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-center pt-6">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-xl text-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <CheckCircle className="h-5 w-5 mr-2" />
                          Submit Application 🚀
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;
