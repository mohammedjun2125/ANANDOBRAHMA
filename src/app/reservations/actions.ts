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

  const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdVjKj_piOb7ROItsOSX0a2wKxAkLH7rtFLWS6BZK8RFUgg1w/formResponse';
  const GOOGLE_FORM_NAME_ID = 'entry.306566510';
  const GOOGLE_FORM_EMAIL_ID = 'entry.899160195';
  const GOOGLE_FORM_PHONE_ID = 'entry.1811699067';
  const GOOGLE_FORM_DATE_ID = 'entry.388632873';
  const GOOGLE_FORM_TIME_ID = 'entry.1037924307';
  const GOOGLE_FORM_GUESTS_ID = 'entry.1727463639';

  const formData = new FormData();
  formData.append(GOOGLE_FORM_NAME_ID, parsedData.data.name);
  formData.append(GOOGLE_FORM_EMAIL_ID, parsedData.data.email);
  formData.append(GOOGLE_FORM_PHONE_ID, parsedData.data.phone);
  
  const date = parsedData.data.date;
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  formData.append(GOOGLE_FORM_DATE_ID, `${year}-${month}-${day}`);
  
  formData.append(GOOGLE_FORM_TIME_ID, parsedData.data.time);
  formData.append(GOOGLE_FORM_GUESTS_ID, parsedData.data.guests);

  try {
    // We remove `mode: 'no-cors'` to ensure the request is sent correctly,
    // even if it logs a CORS error in the browser console on the client.
    // This is expected behavior when posting to a Google Form from a different origin.
    await fetch(GOOGLE_FORM_ACTION_URL, {
      method: 'POST',
      body: formData,
    });
    
    return { success: true };
  } catch (error) {
    console.error('Error submitting to Google Form:', error);
    return { success: false, message: 'An unexpected error occurred while saving the reservation.' };
  }
}
