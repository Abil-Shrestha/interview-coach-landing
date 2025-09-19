"use client";

import Marquee from "@/components/magicui/marquee";
import Section from "@/components/section";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "bg-primary/20 p-1 py-0.5 font-bold text-primary dark:bg-primary/20 dark:text-primary",
        className
      )}
    >
      {children}
    </span>
  );
};

export interface TestimonialCardProps {
  name: string;
  role: string;
  img?: string;
  description: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export const TestimonialCard = ({
  description,
  name,
  img,
  role,
  className,
  ...props // Capture the rest of the props
}: TestimonialCardProps) => (
  <div
    className={cn(
      "mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4",
      // light styles
      " border border-neutral-200 bg-white",
      // dark styles
      "dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
    {...props} // Spread the rest of the props here
  >
    <div className="select-none text-sm font-normal text-neutral-700 dark:text-neutral-400">
      {description}
      <div className="flex flex-row py-1">
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
      </div>
    </div>

    <div className="flex w-full select-none items-center justify-start gap-5">
      <Image
        width={40}
        height={40}
        src={img || ""}
        alt={name}
        className="h-10 w-10 rounded-full ring-1 ring-border ring-offset-4"
      />

      <div>
        <p className="font-medium text-neutral-500">{name}</p>
        <p className="text-xs font-normal text-neutral-400">{role}</p>
      </div>
    </div>
  </div>
);

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    description: (
      <p>
        Practicing with InterviewCoach made my answers tight and confident.{" "}
        <Highlight>I got 2 offers in a month.</Highlight>
      </p>
    ),
  },
  {
    name: "Daniel Nguyen",
    role: "Senior Data Engineer",
    img: "https://randomuser.me/api/portraits/men/52.jpg",
    description: (
      <p>
        The real-time feedback showed me exactly where to improve.{" "}
        <Highlight>My technical rounds became consistent passes.</Highlight>
      </p>
    ),
  },
  {
    name: "Amira Hassan",
    role: "Product Manager",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    description: (
      <p>
        The STAR playbooks and mock interviews were spot on.{" "}
        <Highlight>I finally nailed my PM stories.</Highlight>
      </p>
    ),
  },
  {
    name: "Liam O'Connor",
    role: "Frontend Engineer",
    img: "https://randomuser.me/api/portraits/men/37.jpg",
    description: (
      <p>
        System design prompts and coaching felt real.{" "}
        <Highlight>I passed my on-site after 2 weeks.</Highlight>
      </p>
    ),
  },
  {
    name: "Chen Wei",
    role: "New Grad SWE",
    img: "https://randomuser.me/api/portraits/men/28.jpg",
    description: (
      <p>
        Daily practice with InterviewCoach kept me accountable.{" "}
        <Highlight>Landed my first role out of college.</Highlight>
      </p>
    ),
  },
  {
    name: "Sofia Martinez",
    role: "Data Scientist",
    img: "https://randomuser.me/api/portraits/women/32.jpg",
    description: (
      <p>
        The technical interview prep was outstanding.{" "}
        <Highlight>Confidence went from 3/10 to 9/10.</Highlight>
      </p>
    ),
  },
  {
    name: "James Park",
    role: "Backend Engineer",
    img: "https://randomuser.me/api/portraits/men/85.jpg",
    description: (
      <p>
        Mock interviews felt just like the real thing.{" "}
        <Highlight>Nailed my Google interview!</Highlight>
      </p>
    ),
  },
  {
    name: "Maya Patel",
    role: "UX Designer",
    img: "https://randomuser.me/api/portraits/women/19.jpg",
    description: (
      <p>
        Portfolio presentation practice was game-changing.{" "}
        <Highlight>Got offers from 3 dream companies.</Highlight>
      </p>
    ),
  },
  {
    name: "Alex Kim",
    role: "DevOps Engineer",
    img: "https://randomuser.me/api/portraits/men/62.jpg",
    description: (
      <p>
        System design coaching was incredibly detailed.{" "}
        <Highlight>Finally understood scalability patterns.</Highlight>
      </p>
    ),
  },
  {
    name: "Emma Johnson",
    role: "Full Stack Developer",
    img: "https://randomuser.me/api/portraits/women/71.jpg",
    description: (
      <p>
        Behavioral question practice saved my interviews.{" "}
        <Highlight>Went from nervous to confident storyteller.</Highlight>
      </p>
    ),
  },
  {
    name: "Ryan Chen",
    role: "Machine Learning Engineer",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    description: (
      <p>
        AI feedback was surprisingly accurate and helpful.{" "}
        <Highlight>Improved my explanation skills dramatically.</Highlight>
      </p>
    ),
  },
  {
    name: "Isabella Garcia",
    role: "QA Engineer",
    img: "https://randomuser.me/api/portraits/women/88.jpg",
    description: (
      <p>
        Testing scenarios practice was incredibly realistic.{" "}
        <Highlight>Aced every technical round after this.</Highlight>
      </p>
    ),
  },
];

export default function Testimonials() {
  return (
    <Section
      title="Testimonials"
      subtitle="Real candidates. Real offers."
      className="max-w-8xl"
    >
      <div className="relative mt-6 max-h-screen overflow-hidden">
        <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
          {Array(Math.ceil(testimonials.length / 3))
            .fill(0)
            .map((_, i) => (
              <Marquee
                vertical
                key={i}
                className={cn({
                  "[--duration:60s]": i === 1,
                  "[--duration:30s]": i === 2,
                  "[--duration:70s]": i === 3,
                })}
              >
                {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: Math.random() * 0.8,
                      duration: 1.2,
                    }}
                  >
                    <TestimonialCard {...card} />
                  </motion.div>
                ))}
              </Marquee>
            ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-background from-20%"></div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-background from-20%"></div>
      </div>
    </Section>
  );
}
