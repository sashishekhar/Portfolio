'use client';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        () => {
          console.log('SUCCESS!');
          form.current?.reset();
        },
        (error) => {
          console.error('FAILED...', error);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input name="user_name" placeholder="Name" required />
      <input name="user_email" placeholder="Email" type="email" required />
      <textarea name="message" placeholder="Message" required />
      <button type="submit">Send</button>
    </form>
  );
};
