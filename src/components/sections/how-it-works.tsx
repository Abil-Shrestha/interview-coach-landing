"use client";

import { useState, useEffect } from "react";
import Section from "@/components/section";
import HowItWorksVisual from "@/components/how-it-works-visual";
import { Sparkles, Upload, Zap } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "1. Choose Your Role",
    content:
      "Pick behavioral, technical, or system design practice tailored to your role and level.",
    icon: <Upload className="w-6 h-6 text-primary" />,
  },
  {
    id: 2,
    title: "2. Practice with AI",
    content:
      "Answer questions in realistic mock interviews and stay on track with guided prompts.",
    icon: <Zap className="w-6 h-6 text-primary" />,
  },
  {
    id: 3,
    title: "3. Review Feedback",
    content:
      "Get structured feedback, examples, and next steps to improve with every session.",
    icon: <Sparkles className="w-6 h-6 text-primary" />,
  },
];

export default function Component() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Section title="How it works" subtitle="Get job‑ready in 3 steps">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Left side - Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex items-start gap-4 p-6 rounded-lg transition-all duration-300 ${
                index === currentStep
                  ? "bg-primary/5 border-2 border-primary/20"
                  : "bg-muted/20 border-2 border-transparent"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                  index <= currentStep
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {step.icon}
              </div>
              <div>
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    index === currentStep
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`text-base leading-relaxed ${
                    index === currentStep
                      ? "text-foreground/80"
                      : "text-muted-foreground/60"
                  }`}
                >
                  {step.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Visual */}
        <div className="flex justify-center">
          <HowItWorksVisual currentStep={currentStep} />
        </div>
      </div>
    </Section>
  );
}
