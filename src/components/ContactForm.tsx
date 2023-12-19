"use client"
import React, { useState } from 'react';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);

    const formData = {
      name: event.target.name.value.trim(),
      email: event.target.email.value.trim(),
      message: event.target.message.value.trim(),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully');
        // reset the formS
        event.target.reset();
      } else {
        setStatus('Error sending message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full z-10 max-w-md mx-auto font-raleway flex flex-col items-center justify-center">
      <div className="w-full flex flex-col my-4">
        <label className="font-bold text-gray-800" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          minLength={3}
          maxLength={150}
          required
          className="z-10 p-4 bg-gray-50 border border-gray-100 "
          autoComplete="off"
          id="name"
        />
      </div>
      <div className="z-10 w-full flex flex-col my-4">
        <label className="z-10 font-bold text-gray-800" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          minLength={5}
          maxLength={150}
          required
          className="z-10 p-4 bg-gray-50 border border-gray-100 "
          autoComplete="off"
          id="email"
        />
      </div>
      <div className="z-10 w-full flex flex-col my-4">
        <label className="z-10 font-bold text-gray-800" htmlFor="message">
          Message
        </label>
        <textarea
          rows={4}
          required
          minLength={10}
          maxLength={500}
          name="message"
          className="z-10 w-full p-4 bg-gray-50 border border-gray-100"
        />
      </div>
      <div className='flex items-center justify-center'>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 w-40 bg-gray-900 disabled:bg-gray-400 disabled:text-gray-100 text-white font-medium z-10 ">
          {loading ? "Sending...." : "Send Message"}
        </button>
      </div>
      {status && (
        <div className="z-10 mt-2 text-sm text-gray-800">{status}</div>
      )}
    </form>
  );
};

export default ContactForm;
