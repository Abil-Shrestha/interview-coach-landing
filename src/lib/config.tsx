import { Icons } from "@/components/icons";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import Image from "next/image";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "InterviewCoach",
  description: "Ace your interviews with AI",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://tryinterviewcoach.com",
  keywords: ["SaaS", "Template", "Next.js", "React", "Tailwind CSS"],
  links: {
    email: "sydney@tryinterviewcoach.com",
    twitter: "https://twitter.com/magicuidesign",
    discord: "https://discord.gg/87p2vpsat5",
    github: "https://github.com/magicuidesign/magicui",
    instagram: "https://instagram.com/magicuidesign/",
  },
  header: [
    {
      trigger: "Product",
      content: {
        main: {
          icon: (
            <Image
              src="/logo.png"
              alt="InterviewCoach"
              width={24}
              height={24}
              className="h-6 w-6"
            />
          ),
          title: "InterviewCoach",
          description: "Practice mock interviews with AI feedback.",
          href: "/#how-it-works",
        },
        items: [
          {
            href: "/#features",
            title: "Features",
            description: "Mock interviews, feedback, tracking, and more.",
          },
          {
            href: "/#problem",
            title: "Problem",
            description: "What's hard about interview prep today.",
          },
          {
            href: "/#pricing",
            title: "Pricing",
            description: "Simple plans to get you job‑ready.",
          },
        ],
      },
    },
    {
      trigger: "Resources",
      content: {
        items: [
          {
            title: "Blog",
            href: "/blog",
            description: "Tips and playbooks for better interviews.",
          },
          {
            title: "How it works",
            href: "/#how-it-works",
            description: "See how InterviewCoach helps you improve.",
          },
          {
            title: "FAQ",
            href: "/#faq",
            description: "Common questions, answered.",
          },
        ],
      },
    },
    {
      href: "/blog",
      label: "Blog",
    },
  ],
  pricing: [
    {
      name: "BETA ACCESS",
      href:
        process.env.NEXT_PUBLIC_APP_SUBDOMAIN ||
        "https://app.tryinterviewcoach.com",
      price: "Free",
      period: "during beta",
      yearlyPrice: "Free",
      features: [
        "Unlimited mock interviews",
        "AI-powered feedback",
        "Question bank access",
        "Progress tracking",
        "All interview types",
        "Early access to new features",
      ],
      description: "Join our beta and help shape the future of interview prep",
      buttonText: "Join Beta",
      isPopular: true,
    },
  ],
  faqs: [
    {
      question: "What is InterviewCoach?",
      answer: (
        <span>
          InterviewCoach is a platform that helps you build and manage your
          interview preparation with AI-powered coaching. It provides tools and
          services to streamline your practice and improve your performance.
        </span>
      ),
    },
    {
      question: "How can I get started with InterviewCoach?",
      answer: (
        <span>
          You can get started with InterviewCoach by signing up for an account
          on our website, creating your first practice interview, and following
          our quick-start guide. We also offer tutorials and documentation to
          help you along the way.
        </span>
      ),
    },
    {
      question: "What types of interviews does InterviewCoach support?",
      answer: (
        <span>
          InterviewCoach supports a wide range of interview formats, including
          behavioral, technical, and system design practice. We continuously
          update our prompts and feedback models to support the latest hiring
          trends.
        </span>
      ),
    },
    {
      question: "Is InterviewCoach suitable for beginners?",
      answer: (
        <span>
          Yes, InterviewCoach is designed to be user-friendly for both beginners
          and experienced professionals. We offer intuitive interfaces, curated
          question banks, and learning resources to help users of all skill
          levels practice effectively.
        </span>
      ),
    },
    {
      question: "What kind of support does InterviewCoach provide?",
      answer: (
        <span>
          InterviewCoach provides comprehensive support including documentation,
          video tutorials, a community forum, and dedicated customer support. We
          also offer premium support plans for teams with more complex needs.
        </span>
      ),
    },
  ],
  footer: [
    {
      title: "Product",
      links: [
        { href: "/#features", text: "Features", icon: null },
        { href: "/#pricing", text: "Pricing", icon: null },
        { href: "/#how-it-works", text: "How It Works", icon: null },
        { href: "/#testimonials", text: "Testimonials", icon: null },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "#", text: "About Us", icon: null },
        { href: "#", text: "Careers", icon: null },
        { href: "/blog", text: "Blog", icon: null },
        { href: "#", text: "Contact", icon: null },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "#", text: "Community", icon: null },
        { href: "#", text: "Support", icon: null },
        { href: "#", text: "Privacy Policy", icon: null },
        { href: "#", text: "Terms of Service", icon: null },
      ],
    },
    {
      title: "Social",
      links: [
        {
          href: "#",
          text: "Twitter",
          icon: <FaTwitter />,
        },
        {
          href: "#",
          text: "Instagram",
          icon: <RiInstagramFill />,
        },
        {
          href: "#",
          text: "Youtube",
          icon: <FaYoutube />,
        },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
