
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { Star, Heart, Sparkles } from 'lucide-react';

interface ApprenticeshipFormData {
  fullName: string;
  email: string;
  phone: string;
  age: string;
  education: string;
  interests: string;
  experience: string;
  motivation: string;
  availability: string;
}

const ApprenticeshipForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ApprenticeshipFormData>({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      age: '',
      education: '',
      interests: '',
      experience: '',
      motivation: '',
      availability: ''
    }
  });

  const onSubmit = async (data: ApprenticeshipFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mzzdvlba', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          formType: 'Apprenticeship Application'
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-xl p-8 text-center animate-fade-in">
        <div className="text-6xl mb-4 animate-bounce">🎉</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Application Submitted Successfully! ✨</h3>
        <p className="text-gray-600 mb-6">
          Thank you for your interest in becoming a KIDNEXUS apprentice! We'll review your application and get back to you soon. 🌟
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          className="bg-gradient-to-r from-orange-500 to-teal-500 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          Submit Another Application 🚀
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden">
      <div className="absolute top-4 right-4 animate-pulse">
        <Star className="h-6 w-6 text-yellow-400" />
      </div>
      <div className="absolute bottom-4 left-4 animate-bounce">
        <Heart className="h-5 w-5 text-pink-400" />
      </div>
      <div className="absolute top-1/2 right-8 animate-pulse delay-300">
        <Sparkles className="h-4 w-4 text-purple-400" />
      </div>

      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Join Our Apprenticeship Program! 🌟
        </h3>
        <p className="text-gray-600 mb-6 text-center">
          Ready to learn, grow, and make a difference in children's lives? Apply to become a KIDNEXUS apprentice! ✨
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="fullName"
                rules={{ required: "Full name is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name 👤</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                rules={{ 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address 📧</FormLabel>
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
                rules={{ required: "Phone number is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number 📱</FormLabel>
                    <FormControl>
                      <Input placeholder="+254 700 000 000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="age"
                rules={{ required: "Age is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Age 🎂</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Your age" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="education"
              rules={{ required: "Educational background is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Educational Background 🎓</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., High School Graduate, University Student, etc." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="interests"
              rules={{ required: "Interests are required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Areas of Interest 🎨</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your interests in education, child development, innovation, etc."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Relevant Experience 💼</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Any experience working with children, volunteering, or relevant skills (optional)"
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
              rules={{ required: "Motivation statement is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Why Do You Want to Join KIDNEXUS? 💫</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Share your motivation for joining our mission to empower children through education"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="availability"
              rules={{ required: "Availability is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Availability ⏰</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="When are you available? (e.g., weekends, after school, specific days/times)"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-orange-500 to-teal-500 hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg py-6"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Submitting Application... ✨
                </>
              ) : (
                'Submit Application 🚀'
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ApprenticeshipForm;
