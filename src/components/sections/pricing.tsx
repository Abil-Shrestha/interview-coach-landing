"use client";

import Section from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { siteConfig } from "@/lib/config";
import useWindowSize from "@/lib/hooks/use-window-size";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function PricingSection() {
  const [isMonthly, setIsMonthly] = useState(true);
  const { isDesktop } = useWindowSize();

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <Section
      title="Get Started"
      subtitle="Currently free during our beta phase"
    >
      <div className="flex justify-center mb-10">
        <div className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
          🚀 Beta Launch Special - Everything Free!
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          {siteConfig.pricing.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 100,
                damping: 30,
                delay: 0.2,
              }}
              className={cn(
                `rounded-2xl border-[2px] border-primary p-8 bg-background text-center relative shadow-lg`,
                "transform hover:scale-105 transition-transform duration-200"
              )}
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-green-600 py-1 px-4 rounded-full flex items-center shadow-lg">
                <FaStar className="text-white text-sm" />
                <span className="text-white ml-1 font-sans font-semibold text-sm">
                  Beta Access
                </span>
              </div>
              <div>
                <p className="text-base font-semibold text-muted-foreground">
                  {plan.name}
                </p>
                <p className="mt-6 flex items-center justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-foreground">
                    {isMonthly ? plan.price : plan.yearlyPrice}
                  </span>
                  {plan.period !== "Next 3 months" && (
                    <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">
                      / {plan.period}
                    </span>
                  )}
                </p>

                <p className="text-xs leading-5 text-green-600 font-medium">
                  No credit card required
                </p>

                <ul className="mt-5 gap-2 flex flex-col">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <hr className="w-full my-4" />

                <Link
                  href={plan.href}
                  className={cn(
                    buttonVariants({
                      variant: "default",
                    }),
                    "group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter",
                    "bg-primary text-white hover:bg-primary/90 transition-all duration-300 ease-out"
                  )}
                >
                  {plan.buttonText}
                </Link>
                <p className="mt-6 text-xs leading-5 text-muted-foreground">
                  {plan.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-muted-foreground text-sm">
          🎯 Help us improve by being an early user • 📈 Get grandfathered
          pricing when we launch
        </p>
      </div>
    </Section>
  );
}
