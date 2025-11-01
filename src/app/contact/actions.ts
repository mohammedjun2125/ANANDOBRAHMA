'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function submitContactForm(data: z.infer<typeof contactSchema>) {
  const parsedData = contactSchema.safeParse(data);

  if (!parsedData.success) {
    return { success: false, message: 'Invalid data provided.' };
  }

  try {
    // Here you would save the message to a database or send an email.
    console.log('Contact form data received:', parsedData.data);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true };
  } catch (error) {
    console.error('Contact form submission failed:', error);
    return { success: false, message: 'An unexpected error occurred.' };
  }
}
