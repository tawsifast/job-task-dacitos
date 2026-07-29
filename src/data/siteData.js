import {
  Wrench,
  Sparkles,
  Shield,
  Building2,
  Leaf,
  Bug,
  Headphones,
  Car,
  Waves,
  ClipboardCheck,
  Users,
  Award,
  Clock,
  BarChart3,
  Eye,
  Target,
  Heart,
  Star,
  Quote,
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Requirements", href: "/requirements" },
  { label: "Our Strength", href: "/our-strength" },
  { label: "Our Clients", href: "/our-clients" },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

export const stats = [
  { value: "20M+", label: "Sq. Ft. Managed", desc: "Across IT Parks & Corporates" },
  { value: "15,000+", label: "Workforce", desc: "In-house trained professionals" },
  { value: "200+", label: "Enterprise Clients", desc: "Trusted by top organizations" },
  { value: "PAN India", label: "Operational Reach", desc: "Key presence in major hubs" },
];

export const services = [
  {
    icon: Wrench,
    title: "MEP & Technical Engineering",
    desc: "Comprehensive operations for Mechanical, Electrical, Plumbing, HVAC, and STP/WTP water treatment plants. Our certified technicians ensure 24/7 operational efficiency.",
    badge: "Hard Services",
    span: "lg:col-span-2",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
    details: [
      "HVAC System Maintenance & Repair",
      "Electrical Panel & Distribution Management",
      "Plumbing & Sanitary Installations",
      "STP & WTP Operations",
      "Fire Fighting Systems",
      "Energy Optimization Audits",
    ],
  },
  {
    icon: Sparkles,
    title: "Smart Housekeeping & Janitorial",
    desc: "Eco-friendly deep cleaning, facade cleaning, and mechanized floor care for commercial spaces. We use advanced equipment and green cleaning solutions.",
    badge: "Soft Services",
    span: "lg:col-span-1",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
    details: [
      "Daily Office Cleaning",
      "Deep Cleaning Services",
      "Facade & Window Cleaning",
      "Floor Scrubbing & Polishing",
      "Waste Management",
      "Sanitization & Disinfection",
    ],
  },
  {
    icon: Shield,
    title: "24/7 Security & Escort Force",
    desc: "Trained security personnel, fire safety drills, CCTV monitoring, and executive escort services. All guards are ex-service personnel or certified professionals.",
    badge: "Protection",
    span: "lg:col-span-1",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80",
    details: [
      "Armed & Unarmed Guarding",
      "CCTV Surveillance",
      "Access Control Systems",
      "Fire Safety Drills",
      "Executive Escort Services",
      "Perimeter Security",
    ],
  },
  {
    icon: Building2,
    title: "Corporate & Tenant Support",
    desc: "Help desk management, parking operations, swimming pool & clubhouse facility management for corporate parks and residential complexes.",
    badge: "Operations",
    span: "lg:col-span-2",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    details: [
      "Help Desk Management",
      "Parking Management",
      "Swimming Pool Maintenance",
      "Clubhouse Operations",
      "Event Support Services",
      "Tenant Relationship Management",
    ],
  },
  {
    icon: Leaf,
    title: "Landscaping & Gardening",
    desc: "Professional horticulture services, lawn maintenance, garden design, and green space management for campuses and corporate parks.",
    badge: "Soft Services",
    span: "lg:col-span-1",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    details: [
      "Lawn Maintenance",
      "Garden Design & Installation",
      "Tree Trimming & Pruning",
      "Irrigation Systems",
      "Seasonal Plantings",
      "Green Wall Maintenance",
    ],
  },
  {
    icon: Bug,
    title: "Pest Control Services",
    desc: "Integrated pest management with safe, eco-friendly treatments for commercial and residential properties. Regular inspections and preventive measures.",
    badge: "Specialized",
    span: "lg:col-span-2",
    image: "https://images.unsplash.com/photo-1632935318671-9cb8c88f50a0?w=600&q=80",
    details: [
      "General Pest Control",
      "Termite Treatment",
      "Rodent Management",
      "Fumigation Services",
      "Mosquito Control",
      "Preventive Maintenance Plans",
    ],
  },
];

export const clients = [
  "Tech Mahindra", "Infosys", "Wipro", "HCL", "L&T", "Amazon",
  "Google", "Microsoft", "Dell", "IBM", "Cognizant", "Accenture",
];

export const benefits = [
  {
    icon: ClipboardCheck,
    title: "Site-Specific SOPs",
    desc: "Detailed checklists and SOPs tailored for every service at each site.",
  },
  {
    icon: BarChart3,
    title: "Regular Audits",
    desc: "Internal team audits on EHS, Security, Technical, Fire & Safety, and Compliance.",
  },
  {
    icon: Clock,
    title: "Backup Staff Availability",
    desc: "Standby staff to handle emergencies and absenteeism without service disruption.",
  },
  {
    icon: Users,
    title: "Yearly Training Calendar",
    desc: "Conducted by dedicated Training Officers with structured annual programs.",
  },
  {
    icon: Award,
    title: "Risk Assessment",
    desc: "Equipment risk assessments and recommended measures reviewed periodically.",
  },
  {
    icon: Headphones,
    title: "AMC Tracking & Negotiations",
    desc: "Annual Maintenance Contract management and cost-optimized vendor negotiations.",
  },
];

export const extendedBenefits = [
  ...benefits,
  {
    icon: Heart,
    title: "Staff Welfare Programs",
    desc: "Diwali sweets, gifts on RD/ID, rewards, 2 lakh insurance, 10k funeral expenses, ranker student awards up to 1 lakh.",
  },
  {
    icon: Eye,
    title: "Coordination & Supervision",
    desc: "Annual shutdown maintenance supervision and mobilization coordination.",
  },
  {
    icon: Target,
    title: "Liaison with Government Agencies",
    desc: "Professional liaison for all regulatory and compliance matters.",
  },
  {
    icon: Star,
    title: "Power Saving & Manpower Optimization",
    desc: "Site improvement plans including power saving methods and manpower optimization to reduce costs.",
  },
];

export const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Facility Head, Tech Mahindra",
    text: "AmazePMS has been instrumental in maintaining our Hyderabad campus. Their attention to detail and proactive approach sets them apart.",
  },
  {
    name: "Priya Sharma",
    role: "Operations Director, Infosys",
    text: "We've partnered with AmazePMS for over 5 years. Their integrated service model ensures seamless facility operations across our sites.",
  },
  {
    name: "Anil Verma",
    role: "VP Administration, Wipro",
    text: "The level of professionalism and technical expertise AmazePMS brings is outstanding. Highly recommend their MEP and housekeeping teams.",
  },
];

export const galleryCategories = [
  { id: "all", label: "All" },
  { id: "security", label: "Security" },
  { id: "housekeeping", label: "Housekeeping" },
  { id: "technical", label: "Technical" },
  { id: "landscaping", label: "Landscaping" },
];

export const galleryImages = [
  { src: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80", category: "security", title: "Security Personnel on Duty" },
  { src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80", category: "housekeeping", title: "Professional Cleaning Services" },
  { src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80", category: "technical", title: "Technical Maintenance" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80", category: "landscaping", title: "Garden Maintenance" },
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80", category: "technical", title: "Building Operations" },
  { src: "https://images.unsplash.com/photo-1632935318671-9cb8c88f50a0?w=600&q=80", category: "housekeeping", title: "Pest Control Treatment" },
  { src: "https://images.unsplash.com/photo-1541888946425-d81bb46b70a0?w=600&q=80", category: "technical", title: "Infrastructure Management" },
  { src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80", category: "security", title: "Warehouse Security" },
  { src: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=80", category: "landscaping", title: "Corporate Park Landscaping" },
];

export const careers = [
  {
    title: "Security Supervisor",
    location: "Hyderabad",
    type: "Full-time",
    department: "Security",
    description: "Oversee security operations, manage guard shifts, conduct training and ensure compliance with safety protocols.",
  },
  {
    title: "HVAC Technician",
    location: "Bangalore",
    type: "Full-time",
    department: "Technical",
    description: "Maintain and repair HVAC systems, perform preventive maintenance, and troubleshoot technical issues.",
  },
  {
    title: "Housekeeping Manager",
    location: "Chennai",
    type: "Full-time",
    department: "Housekeeping",
    description: "Manage housekeeping team, schedule cleaning operations, maintain inventory and quality standards.",
  },
  {
    title: "Electrical Engineer",
    location: "Hyderabad",
    type: "Full-time",
    department: "Technical",
    description: "Handle electrical maintenance, panel management, energy audits, and team supervision.",
  },
];

export const footerLinks = {
  quick: [
    { label: "Our Clients", href: "/our-clients" },
    { label: "Careers", href: "/careers" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
  ],
  menu: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Our Strength", href: "/our-strength" },
  ],
};
