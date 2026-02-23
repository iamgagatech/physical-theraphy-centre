import { Service, Post, Testimonial } from "../types";

export const services: Service[] = [
  {
    id: "1",
    slug: "sports-injury-rehabilitation",
    title: "Sports Injury Rehabilitation",
    description: "Personalized recovery protocols for athletes of all levels, focusing on rapid return to sport.",
    longDescription: "Our sports injury rehabilitation program is designed to get you back to the activities you love as quickly and safely as possible. We use evidence-based assessments to identify the root cause of your injury and develop a comprehensive plan that includes manual therapy, progressive loading exercises, and functional training. Our goal is not just to fix the injury, but to optimize your performance to prevent future setbacks.",
    icon: "Activity",
    faqs: [
      {
        question: "How soon can I start rehabilitation after an injury?",
        answer: "Rehabilitation can often begin within 48-72 hours post-injury, depending on the severity and clinical presentation. Early movement is key to preventing secondary complications and accelerating tissue healing."
      },
      {
        question: "Do you offer sport-specific training?",
        answer: "Yes, our clinicians are trained in functional sport-specific assessments to ensure your recovery is tailored to the demands of your specific sport."
      }
    ],
    benefits: [
      "Customized recovery timelines",
      "Injury prevention education",
      "Advanced gait and movement analysis",
      "Neuromuscular re-education"
    ]
  },
  {
    id: "2",
    slug: "chronic-pain-management",
    title: "Chronic Pain Management",
    description: "Empowering you to regain control over persistent pain through modern neuroscience and clinical movement.",
    longDescription: "Chronic pain is complex and requires more than just a quick fix. We utilize a multi-modal approach combining pain neuroscience education with graded exercise therapy and manual techniques. By addressing both the physical and psychological components of pain, we help you break the cycle of fear-avoidance and return to a life of meaning and activity.",
    icon: "Heart",
    faqs: [
      {
        question: "Is chronic pain just in my head?",
        answer: "Absolutely not. All pain is real. However, chronic pain is often driven by a sensitized nervous system rather than ongoing tissue damage. Our therapy addresses this sensitization."
      }
    ],
    benefits: [
      "Pain neuroscience education",
      "Graded motor imagery",
      "Life-quality focus",
      "Evidence-led symptom management"
    ]
  },
  {
    id: "3",
    slug: "post-surgical-rehab",
    title: "Post-Surgical Rehab",
    description: "Evidence-led protocols to maximize surgical outcomes and restore full functional capacity.",
    longDescription: "The success of your surgery depends heavily on what happens next. Our post-surgical rehabilitation programs follow clinically proven protocols to manage swelling, restore range of motion, and rebuild strength. Whether you've had a joint replacement, ligament repair, or spinal surgery, we work closely with your surgeon to ensure a smooth and effective recovery journey.",
    icon: "Stethoscope",
    faqs: [
      {
        question: "Do you communicate with my surgeon?",
        answer: "Yes, we prioritize clinical collaboration and can provide progress reports to your surgeon to ensure alignment on your recovery milestones."
      }
    ],
    benefits: [
      "Surgeon-aligned protocols",
      "Safe and controlled mobilization",
      "Edema management",
      "Restoration of full range of motion"
    ]
  },
  {
    id: "4",
    slug: "neurological-rehab",
    title: "Neurological Rehab",
    description: "Specialized therapy for stroke, Parkinson's, and other neurological conditions to improve mobility and independence.",
    longDescription: "Neurological conditions require a specialized understanding of neuroplasticity. Our team provides intensive therapy aimed at retraining the brain and body to work together efficiently. We focus on functional independence, balance training, and gait improvement to help you navigate your world with confidence and dignity.",
    icon: "Brain",
    faqs: [],
    benefits: [
      "Balance and stability focus",
      "Neuroplasticity-based exercises",
      "ADL training",
      "Family and caregiver education"
    ]
  },
  {
    id: "5",
    slug: "workplace-ergonomics",
    title: "Workplace Ergonomics",
    description: "Preventing repetitive strain and workplace injuries through structural optimization and clinical assessment.",
    longDescription: "Modern work environments often lead to postural strain and repetitive stress. Our ergonomics service includes individual and corporate assessments to optimize your workspace, improve posture, and provide clinical exercise interventions that counteract the sedentary nature of office work.",
    icon: "Clipboard",
    faqs: [],
    benefits: [
      "Reduced neck and back pain",
      "Increased productivity",
      "Workstation optimization",
      "Posture correction drills"
    ]
  }
];

export const blogPosts: Post[] = [
  {
    id: "1",
    slug: "avoiding-surgery-for-lower-back-pain",
    title: "Avoiding Surgery: When Physical Therapy is the Better Path",
    excerpt: "Learn how modern evidence suggests that physical therapy can be as effective as surgery for many common back conditions.",
    content: "Content about back pain and surgery avoidance...",
    category: "Knowledge",
    date: "2023-11-20",
    author: "Dr. Oluwatosin Ade",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "2",
    slug: "recovery-after-knee-replacement",
    title: "The First 6 Weeks: Post-Knee Replacement Recovery",
    excerpt: "What to expect and how to maximize your recovery after a total knee replacement surgery.",
    content: "Content about knee recovery...",
    category: "Rehab",
    date: "2023-12-05",
    author: "Chioma Okoro",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "3",
    slug: "ergonomics-for-remote-workers",
    title: "Remote Work Pain? 5 Tips for Your Lagos Home Office",
    excerpt: "How to set up your desk in a Lagos apartment to avoid chronic neck and shoulder pain.",
    content: "Content about ergonomics...",
    category: "Wellness",
    date: "2024-01-12",
    author: "Babatunde Johnson",
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Emeka Nwosu",
    role: "Marathon Runner",
    content: "After being told I needed surgery for my knee, the team at PT Centre helped me recover through strength training alone. I'm now back to running without pain. Life-changing results!",
    rating: 5
  },
  {
    id: "2",
    name: "Fatima Yusuf",
    role: "Business Executive",
    content: "The environment is so serene and professional. The clinicians are extremely knowledgeable and took the time to explain my condition properly.",
    rating: 5
  },
  {
    id: "3",
    name: "Kolawole Adams",
    role: "Post-op Patient",
    content: "Expert care and compassionate staff. My recovery from hip surgery was much faster than my doctor expected thanks to their evidence-based approach.",
    rating: 5
  }
];
