'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, MessageSquare, Phone, User, Clock, MapPin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from './actions';
import { useState } from 'react';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof contactSchema>) {
    setIsSubmitting(true);
    const result = await submitContactForm(values);
    if (result.success) {
      toast({
        title: 'Message Sent!',
        description: `Thank you, ${values.name}. We have received your message and will get back to you shortly.`,
      });
      form.reset();
    } else {
      toast({
        title: 'Submission Failed',
        description: result.message || 'There was an error sending your message. Please try again.',
        variant: 'destructive',
      });
    }
    setIsSubmitting(false);
  }

  return (
    <div className="container mx-auto px-4 py-16 lg:py-24 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            Get In Touch
        </h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
          <div className="space-y-6 text-muted-foreground">
            <div className="flex items-start">
              <MapPin className="h-6 w-6 mr-4 mt-1 text-primary" />
              <div>
                <h3 className="text-lg font-semibold text-foreground">Address</h3>
                <p>123 Luxury Lane, Foodie City, 54321</p>
              </div>
            </div>
             <div className="flex items-start">
              <Mail className="h-6 w-6 mr-4 mt-1 text-primary" />
              <div>
                <h3 className="text-lg font-semibold text-foreground">Email</h3>
                <a href="mailto:contact@anandobrahma.com" className="hover:text-primary">contact@anandobrahma.com</a>
              </div>
            </div>
             <div className="flex items-start">
              <Phone className="h-6 w-6 mr-4 mt-1 text-primary" />
              <div>
                <h3 className="text-lg font-semibold text-foreground">Phone</h3>
                <a href="tel:+1234567890" className="hover:text-primary">(123) 456-7890</a>
              </div>
            </div>
             <div className="flex items-start">
              <Clock className="h-6 w-6 mr-4 mt-1 text-primary" />
              <div>
                <h3 className="text-lg font-semibold text-foreground">Opening Hours</h3>
                <p>Mon - Fri: 6pm - 11pm</p>
                <p>Sat - Sun: 5pm - 12am</p>
              </div>
            </div>
          </div>
          <div className="mt-8 rounded-lg overflow-hidden shadow-lg aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15229.24555896328!2d78.3567702871582!3d17.433096000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e36e138a41%3A0x207755f52861c296!2sAnandobrahma!5e1!3m2!1sen!2sus!4v1724263795537!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        <Card className="border-2 border-border/50">
          <CardHeader>
            <CardTitle className="text-3xl font-headline">Send us a Message</CardTitle>
            <CardDescription>
              Have a question or feedback? We'd love to hear from you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="John Doe" {...field} className="pl-10"/>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="you@example.com" {...field} className="pl-10"/>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Message</FormLabel>
                      <FormControl>
                        <div className="relative">
                            <MessageSquare className="absolute left-3 top-4 h-4 w-4 text-muted-foreground" />
                            <Textarea placeholder="Tell us how we can help..." {...field} className="min-h-[120px] pl-10" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
