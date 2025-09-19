import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { IoMenuSharp } from "react-icons/io5";

export default function drawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger>
        <IoMenuSharp className="text-2xl" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="px-6">
          <div className="">
            <Link
              href="/"
              title="brand-logo"
              className="relative mr-6 flex items-center space-x-2"
            >
              <Image
                src="/logo.png"
                alt={siteConfig.name}
                width={40}
                height={40}
                className="w-auto h-[40px]"
              />
              <span className="font-bold text-xl">{siteConfig.name}</span>
            </Link>
          </div>
          <nav>
            <ul className="mt-7 text-left">
              {siteConfig.header.map((item, index) => (
                <li key={index} className="my-3">
                  {item.trigger ? (
                    <span className="font-semibold">{item.trigger}</span>
                  ) : (
                    <Link href={item.href || ""} className="font-semibold">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </DrawerHeader>
        <DrawerFooter>
          <Link
            href={`${
              process.env.NEXT_PUBLIC_APP_SUBDOMAIN ||
              "https://app.tryinterviewcoach.com"
            }/login`}
            className={buttonVariants({ variant: "outline" })}
          >
            Login
          </Link>
          <Link
            href={`${
              process.env.NEXT_PUBLIC_APP_SUBDOMAIN ||
              "https://app.tryinterviewcoach.com"
            }/signup`}
            className={cn(
              buttonVariants({ variant: "default" }),
              "w-full sm:w-auto text-background"
            )}
          >
            Get Started for Free
          </Link>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
