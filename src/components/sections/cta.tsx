import { Icons } from "@/components/icons";
import Section from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export default function CtaSection() {
  return (
    <Section
      id="cta"
      title="Ready to practice smarter?"
      subtitle="Start practicing free today."
      className="bg-primary/10 rounded-xl py-16"
    >
      <div className="flex flex-col w-full sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
        <Link
              href={`${
                process.env.NEXT_PUBLIC_APP_SUBDOMAIN ||
                "https://app.tryinterviewcoach.com"
              }/login`}
          className={cn(
            buttonVariants({ variant: "default" }),
            "w-full sm:w-auto text-background"
          )}
        >
          Get started for free
        </Link>
      </div>
    </Section>
  );
}
