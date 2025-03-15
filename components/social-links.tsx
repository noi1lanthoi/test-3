import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  TwitterIcon,
} from "@/assets/icons";
import Link from "next/link";

export function SocialLinks() {
  const socialLinks = [
    {
      icon: <TelegramIcon className="h-[35px] w-[35px]" />,
      href: "#",
      label: "Telegram",
      color: "bg-[#0088cc]",
    },
    {
      icon: <FacebookIcon className="h-[35px] w-[35px]" />,
      href: "#",
      label: "Facebook",
      color: "bg-[#1877f2]",
    },
    {
      icon: <InstagramIcon className="h-[35px] w-[35px]" />,
      href: "#",
      label: "Instagram",
      color: "bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
    },
    {
      icon: <TwitterIcon className="h-[35px] w-[35px]" />,
      href: "#",
      label: "Twitter",
      color: "bg-[#1da1f2]",
    },
  ];

  return (
    <div className="flex justify-center gap-11 my-4">
      {socialLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={`rounded-full text-white transition-transform hover:scale-110`}
          aria-label={link.label}
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
}
