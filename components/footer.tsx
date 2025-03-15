"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CollapsibleSection } from "@/components/collapsible-section";
import { SocialLinks } from "@/components/social-links";
import { AppDownload } from "@/components/app-download";
import {
  AndroidIcon,
  AppleIcon,
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  TwitterIcon,
} from "@/assets/icons";

export function Footer() {
  return (
    <>
      {/* Footer - Mobile vs Desktop */}
      <div className="md:hidden px-4">
        {/* Mobile Footer */}
        <div className="mb-8 flex flex-col gap-4">
          <CollapsibleSection title="Games">
            <ul className="space-y-2 pl-2">
              <li>
                <Link href="#" className="text-nepal text-sm hover:text-white">
                  Game 1
                </Link>
              </li>
              <li>
                <Link href="#" className="text-nepal text-sm hover:text-white">
                  Game 2
                </Link>
              </li>
              <li>
                <Link href="#" className="text-nepal text-sm hover:text-white">
                  Game 3
                </Link>
              </li>
              <li>
                <Link href="#" className="text-nepal text-sm hover:text-white">
                  Game 14
                </Link>
              </li>
            </ul>
          </CollapsibleSection>

          <CollapsibleSection title="About">
            <ul className="space-y-2 pl-2">
              <li>
                <Link href="#" className="text-nepal text-sm hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-nepal text-sm hover:text-white">
                  Promotions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-nepal text-sm hover:text-white">
                  VIP
                </Link>
              </li>
              <li>
                <Link href="#" className="text-nepal text-sm hover:text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-nepal text-sm hover:text-white">
                  Awards & Certificates
                </Link>
              </li>
              <li>
                <Link href="#" className="text-nepal text-sm hover:text-white">
                  App
                </Link>
              </li>
            </ul>
          </CollapsibleSection>

          <CollapsibleSection title="Legal Information">
            <ul className="space-y-2 pl-2">
              <li>
                <Link href="#" className="text-nepal text-sm hover:text-white">
                  General Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-nepal text-sm hover:text-white">
                  Responsible Gaming Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-nepal text-sm hover:text-white">
                  Sports Betting Rules
                </Link>
              </li>
              <li>
                <Link href="#" className="text-nepal text-sm hover:text-white">
                  Privacy and Cookies Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-nepal text-sm hover:text-white">
                  Payment Methods
                </Link>
              </li>
              <li>
                <Link href="#" className="text-nepal text-sm hover:text-white">
                  Limits
                </Link>
              </li>
            </ul>
          </CollapsibleSection>
        </div>

        {/* Follow Us - Mobile */}
        <div className="text-center my-5">
          <h3 className="text-white text-base font-medium">Follow Us</h3>
          <SocialLinks />
        </div>

        {/* Help Center - Mobile */}

        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center  bg-tech-azure rounded-[10px] px-7 py-[18px]">
            <div>
              <h3 className="text-white text-[15px] font-medium">
                Help Center
              </h3>
              <p className="text-nepal text-xs">If you have any questions?</p>
            </div>
            <Button className="bg-tech-blue hover:bg-blue-700 text-white text-sm w-[116px] h-[34px] rounded-[10px]">
              GET ANSWERS
            </Button>
          </div>

          {/* App Download - Mobile */}
          <AppDownload />
        </div>
      </div>

      {/* Desktop Footer */}
      <div className="hidden  md:flex justify-between items-start self-stretch">
        {/* Help Center Column */}
        <div className="col-span-1">
          <h2 className="text-white text-2xl font-medium mb-2">Help Center</h2>
          <p className="text-nepal text-[15px] mb-4">
            If you have any questions?
          </p>
          <Button className="bg-tech-blue px-[54px] py-3 hover:bg-blue-700 text-white w-full h-10 mb-8 rounded-[10px]">
            GET ANSWERS
          </Button>

          <div className="flex justify-between">
            <Link
              href="#"
              className="rounded-full  text-white transition-transform hover:scale-110"
            >
              <TelegramIcon className="h-[30px] w-[30px]" />
            </Link>
            <Link
              href="#"
              className="rounded-full  text-white transition-transform hover:scale-110"
            >
              <FacebookIcon className="h-[30px] w-[30px]" />
            </Link>
            <Link
              href="#"
              className="rounded-full  text-white transition-transform hover:scale-110"
            >
              <InstagramIcon className="h-[30px] w-[30px]" />
            </Link>
            <Link
              href="#"
              className="rounded-full  text-white transition-transform hover:scale-110"
            >
              <TwitterIcon className="h-[30px] w-[30px]" />
            </Link>
          </div>
        </div>

        {/* Games Column */}
        <div className="col-span-1">
          <h3 className="text-white text-[15px] font-medium mb-5">Games</h3>
          <ul className="space-y-5">
            <li>
              <Link
                href="#"
                className="text-nepal hover:text-white transition-colors"
              >
                Game 1
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-nepal hover:text-white transition-colors"
              >
                Game 2
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-nepal hover:text-white transition-colors"
              >
                Game 3
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-nepal hover:text-white transition-colors"
              >
                Game 14
              </Link>
            </li>
          </ul>
        </div>

        {/* About Column */}
        <div className="col-span-1">
          <h3 className="text-white text-[15px] font-medium mb-5">About</h3>
          <ul className="space-y-5">
            <li>
              <Link
                href="#"
                className="text-nepal hover:text-white transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-nepal hover:text-white transition-colors"
              >
                Promotions
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-nepal hover:text-white transition-colors"
              >
                VIP
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-nepal hover:text-white transition-colors"
              >
                Help Center
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-nepal hover:text-white transition-colors"
              >
                Awards & Certificates
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-nepal hover:text-white transition-colors"
              >
                App
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Information Column */}
        <div className="col-span-1">
          <h3 className="text-white text-[15px] font-medium mb-5">
            Legal Information
          </h3>
          <ul className="space-y-5">
            <li>
              <Link
                href="#"
                className="text-nepal hover:text-white transition-colors"
              >
                General Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-nepal hover:text-white transition-colors"
              >
                Responsible Gaming Policy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-nepal hover:text-white transition-colors"
              >
                Sports Betting Rules
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-nepal hover:text-white transition-colors"
              >
                Privacy and Cookies Policy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-nepal hover:text-white transition-colors"
              >
                Payment Methods
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-nepal hover:text-white transition-colors"
              >
                Limits
              </Link>
            </li>
          </ul>
        </div>

        {/* App Download Column */}
        <div className="col-span-1 flex flex-col items-end gap-2">
          <Link
            href="#"
            className="bg-blue-chip-io rounded-[8px] p-[10px] flex items-stretch w-full max-w-[160px] hover:bg-tech-darker-blue/80 transition-colors"
          >
            <AppleIcon className="h-[42px] w-[42px] min-w-[42px] text-white" />
            <div className="flex flex-col">
              <span className="text-white text-[15px] font-medium ">
                Bluechip App for Mac OS
              </span>
            </div>
          </Link>

          <div className="flex gap-2 w-full max-w-[160px]">
            <Link
              href="#"
              className="bg-blue-chip-io rounded-[10px] flex flex-col items-center justify-center flex-1 hover:bg-tech-darker-blue/80 transition-colors"
            >
              <AndroidIcon className="h-[42px] w-[42px] min-w-[42px] text-white" />
              <span className="text-nepal text-[15px] font-medium">
                Android
              </span>
            </Link>
            <Link
              href="#"
              className="bg-blue-chip-io rounded-[10px] flex flex-col items-center justify-center flex-1 hover:bg-tech-darker-blue/80 transition-colors"
            >
              <AppleIcon className="h-[42px] w-[42px] min-w-[42px] text-white" />
              <span className="text-nepal text-[15px] font-medium">iOS</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
