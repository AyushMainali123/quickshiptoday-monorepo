import { cn } from "@/lib/utils";
import Link from "next/link";

interface FooterProps {
  hideFooterLinks?: boolean;
}

export default function Footer({ hideFooterLinks }: FooterProps) {
  return (
    <footer className="h-100 bg-indigo-100">
      <div className="container px-4 py-8">
        {!hideFooterLinks && (
          <nav className="-mx-5 -my-2  text-xs text-gray-500 hover:text-gray-900">
            <div className="flex flex-wrap justify-center gap-y-2 px-3 py-2">
              <Link
                href="https://quickshiptoday.com/section/why-we-made-it"
                className="px-3"
              >
                Why We Built It
              </Link>
              <Link href="https://quickshiptoday.com/blog" className="px-3">
                Blog
              </Link>
              <Link
                href="https://quickshiptoday.com/section/privacy"
                className="px-3"
              >
                Privacy
              </Link>
              <Link
                href="https://quickshiptoday.com/section/terms-of-service"
                className="px-3"
              >
                Terms
              </Link>
              <Link
                href="https://quickshiptoday.com/section/contact"
                className="px-3"
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
        <p
          className={cn(
            "text-center text-xs text-gray-500",
            !hideFooterLinks && "mt-6 "
          )}
        >
          &copy; 2023 Quick Ship Today, LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
