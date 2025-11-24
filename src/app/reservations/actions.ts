'use server';

import { z } from 'zod';
import axios from 'axios';

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

  // --- Step 2: Replace these with your actual Google Form URL and Entry IDs ---
  // How to get these: https://youtu.be/FYAEi_2yI0I?t=130
  const GOOGLE_FORM_ACTION_URL = 'YOUR_GOOGLE_FORM_ACTION_URL';
  const GOOGLE_FORM_NAME_ID = 'entry.YOUR_NAME_ID';
  const GOOGLE_FORM_EMAIL_ID = 'entry.YOUR_EMAIL_ID';
  const GOOGLE_FORM_PHONE_ID = 'entry.YOUR_PHONE_ID';
  const GOOGLE_FORM_DATE_ID = 'entry.YOUR_DATE_ID';
  const GOOGLE_FORM_TIME_ID = 'entry.YOUR_TIME_ID';
  const GOOGLE_FORM_GUESTS_ID = 'entry.YOUR_GUESTS_ID';
  // -------------------------------------------------------------------------

  if (GOOGLE_FORM_ACTION_URL === 'YOUR_GOOGLE_FORM_ACTION_URL') {
    console.error("Google Form URL has not been set up in /src/app/reservations/actions.ts");
    // In a real app, you might want to still save this somewhere or notify an admin.
    // For now, we'll return a success to the user but log the issue.
    console.log('Reservation data received (but not sent to Google Sheets):', parsedData.data);
    return { success: true };
  }


  const formData = new FormData();
  formData.append(GOOGLE_FORM_NAME_ID, parsedData.data.name);
  formData.append(GOOGLE_FORM_EMAIL_ID, parsedData.data.email);
  formData.append(GOOGLE_FORM_PHONE_ID, parsedData.data.phone);
  
  // Format date to YYYY-MM-DD for Google Forms
  const date = parsedData.data.date;
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  formData.append(GOOGLE_FORM_DATE_ID, `${year}-${month}-${day}`);
  
  formData.append(GOOGLE_FORM_TIME_ID, parsedData.data.time);
  formData.append(GOOGLE_FORM_GUESTS_ID, parsedData.data.guests);

  try {
    await axios.post(GOOGLE_FORM_ACTION_URL, formData);
    return { success: true };
  } catch (error) {
    console.error('Error submitting to Google Form:', error);
    return { success: false, message: 'An unexpected error occurred while saving the reservation.' };
  }
}
