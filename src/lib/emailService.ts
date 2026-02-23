import emailjs from '@emailjs/browser';

// Configuration interface for EmailJS
// These values should be updated in your .env file
export const EMAIL_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key',
};

export const sendBookingEmail = async (formData: any) => {
  try {
    // This sends the email using EmailJS
    // You'll need to set up a template in EmailJS dashboard with keys like:
    // {{full_name}}, {{email}}, {{phone}}, {{service}}, {{preferred_date}}, {{message}}
    const result = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      {
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        preferred_date: formData.preferredDate,
        message: formData.message || 'No additional notes provided.',
        // Clinical Metadata
        submission_time: new Date().toLocaleString(),
        location: 'Lagos Island Clinic',
      },
      EMAIL_CONFIG.PUBLIC_KEY
    );

    return { success: true, result };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error };
  }
};
