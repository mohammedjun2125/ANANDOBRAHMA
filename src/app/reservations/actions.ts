'use server';

import { z } from 'zod';

const reservationSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  date: z.date(),
  time: z.string(),
  guests: z.string(),
});

export async function makeReservation(data: z.infer<typeof reservationSchema>) {
  const parsedData = reservationSchema.safeParse(data);

  if (!parsedData.success) {
    return { success: false, message: 'Invalid data provided.' };
  }

  try {
    // Here you would typically save the data to a database like Firestore.
    // e.g., await db.collection('reservations').add(parsedData.data);
    console.log('Reservation data received:', parsedData.data);
    
    // And trigger an email confirmation, e.g., via a Firebase Function.
    // For this example, we'll just simulate success.
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true };
  } catch (error) {
    console.error('Reservation failed:', error);
    return { success: false, message: 'An unexpected error occurred.' };
  }
}
