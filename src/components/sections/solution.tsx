"use client";

import FlickeringGrid from "@/components/magicui/flickering-grid";
import Ripple from "@/components/magicui/ripple";
import Section from "@/components/section";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const features = [
  {
    title: "Realistic Mock Interviews",
    description:
      "Practice behavioral, technical, and system design interviews in a lifelike environment.",
    className: "hover:bg-red-500/10 transition-all duration-500 ease-out",
    content: <div className="h-32 bg-muted/10 rounded-lg"></div>,
  },
  {
    title: "Actionable AI Feedback",
    description:
      "Get concrete suggestions, structure tips, and examples after every answer.",
    className:
      "order-3 xl:order-none hover:bg-blue-500/10 transition-all duration-500 ease-out",
    content: <div className="h-32 bg-muted/10 rounded-lg"></div>,
  },
  {
    title: "Progress Tracking",
    description:
      "See strengths, gaps, and trends across sessions to focus your prep.",
    className:
      "md:row-span-2 hover:bg-orange-500/10 transition-all duration-500 ease-out",
    content: (
      <>
        <FlickeringGrid
          className="z-0 absolute inset-0 [mask:radial-gradient(circle_at_center,#fff_400px,transparent_0)]"
          squareSize={4}
          gridGap={6}
          color="#000"
          maxOpacity={0.1}
          flickerChance={0.1}
          height={800}
          width={800}
        />
        <div className="h-48 bg-muted/10 rounded-lg ml-12 mt-16"></div>
      </>
    ),
  },
  {
    title: "Custom Question Sets",
    description:
      "Create role‑specific, seniority‑aware question lists for targeted practice.",
    className:
      "flex-row order-4 md:col-span-2 md:flex-row xl:order-none hover:bg-green-500/10 transition-all duration-500 ease-out",
    content: (
      <>
        <Ripple className="absolute -bottom-full" />
        <div className="h-32 bg-muted/10 rounded-lg mt-4"></div>
      </>
    ),
  },
];

export default function Component() {
  return (
    <Section
      title="Solution"
      subtitle="Prepare with realistic practice and coaching"
      description="Generic prep won't cut it. InterviewCoach gives you structured mock interviews, actionable feedback, and clear next steps—so you show up confident and polished."
      className="bg-neutral-100 dark:bg-neutral-900"
    >
      <div className="mx-auto mt-16 grid max-w-sm grid-cols-1 gap-6 text-gray-500 md:max-w-3xl md:grid-cols-2 xl:grid-rows-2 md:grid-rows-3 xl:max-w-6xl xl:auto-rows-fr xl:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={cn(
              "group relative items-start overflow-hidden bg-neutral-50 dark:bg-neutral-800 p-6 rounded-2xl",
              feature.className
            )}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="font-semibold mb-2 text-primary">
                {feature.title}
              </h3>
              <p className="text-foreground">{feature.description}</p>
            </div>
            {feature.content}
            <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-neutral-50 dark:from-neutral-900 pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
