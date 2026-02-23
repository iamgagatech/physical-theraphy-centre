export const emailTemplates = {
  bookingConfirmation: {
    subject: "Confirmed: Your Clinical Assessment at Physical Therapy Centre",
    body: `
Dear [Patient Name],

Thank you for choosing Physical Therapy Centre. We have received your booking request for [Service Name].

Your preliminary appointment details:
Date: [Date]
Time: [Time] - To be confirmed by our clinic manager
Location: 12B Admiralty Way, Victoria Island, Lagos Island

What to Expect:
- A 60-minute comprehensive assessment.
- Discussion of your clinical history and goals.
- Initial physical evaluation and movement screen.

Next Steps:
Our clinic manager will call you shortly at [Phone Number] to finalize your time slot and provide arrival instructions.

Best regards,
Clinical Team
Physical Therapy Centre Lagos
    `
  },
  reminder: {
    subject: "Reminder: Your Appointment Tomorrow at PT Centre",
    body: `
Hi [Patient Name],

This is a reminder for your physiotherapy appointment tomorrow at [Time].

Location: 12B Admiralty Way, Victoria Island (Near [Landmark]).

Quick Tips for Tomorrow:
1. Wear comfortable/loose clothing.
2. Arrive 10 minutes early for check-in.
3. Bring any relevant medical reports or imaging (X-ray/MRI).

If you need to reschedule, please call us at +234 800 123 4567 as soon as possible.

See you tomorrow,
Physical Therapy Centre
    `
  },
  followUp: {
    subject: "How is your recovery progressing?",
    body: `
Hello [Patient Name],

It's been a few days since your last session at Physical Therapy Centre. We wanted to check in and see how you're feeling.

Recovery is a journey, and staying consistent with your prescribed clinical movements is key to long-term results.

If you have any questions about your home exercise plan or if you've noticed any new symptoms, please don't hesitate to reach out.

Ready for your next milestone? You can book your follow-up session here: [Link]

Stay moving,
Dr. Oluwatosin Ade
Principal Physiotherapist
    `
  }
};
