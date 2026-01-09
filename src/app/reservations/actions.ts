'use server';

// This file is not currently used for reservations but is kept
// in case you want to re-implement server-side submissions in the future.

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
  console.log("This function is not currently connected to the form.");
  console.log("Form data received:", data);
  return { success: true };
}
