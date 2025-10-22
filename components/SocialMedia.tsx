import { Facebook, Film, Github, Linkedin, Slack, X, Youtube } from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { cn } from "@/lib/utils";
import Link from "next/link";
interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}
const socialLink = [
  {
    title: "Youtube",
    href: "https://x.com/animationtv98",
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    title: "X/Twitter",
    href: "https://x.com/animationtv98",
    icon: <X className="w-5 h-5" />,
  },
  {
    title: "Facebook",
    href: "https://x.com/animationtv98",
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    title: "Tik Tok",
    href: "https://x.com/animationtv98",
    icon: <Film className="w-5 h-5" />,
  },
];

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {socialLink?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                key={item?.title}
                target="_blank"
                rel="noopener noreferrer"
                href={item?.href}
                className={cn(
                  "p-2 border rounded-full hover:text-green-400 hover:border-atv-tercero hoverEffect",
                  iconClassName
                )}
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-white text-white font-semibold",
                tooltipClassName
              )}
            >
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;