import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#353B3E] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <Image
              src="/footer-logo.svg"
              alt="Schneider Logo"
              width={120}
              height={40}
              className="mb-4"
            />
            <p className="text-sm text-white-400">
              12345 Valley Ave 1, Seattle,
              <br />
              WA
            </p>
            <p className="mt-0 text-sm text-white-400">(800) 123-45-67</p>
            <p className="mt-0 text-sm text-white-400">(800) 123-45-67</p>
            <p className="text-sm text-[#FBCA36] flex items-center gap-2 mt-4">
              <Mail className="w-4 h-4" /> mail@mail.com
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <p className="text-sm text-white-400 mb-4">Let’s get connected!</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:opacity-80">
                <Facebook className="w-8 h-8" fill="#879095" stroke="none" />
              </a>
              <a href="#" className="hover:opacity-80">
                <Twitter className="w-8 h-8" fill="#879095" stroke="none" />
              </a>
              <a href="#" className="hover:opacity-80">
                <Instagram className="w-8 h-8 text-[#879095]" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Sign up for our newsletter</h4>
            <p className="text-sm text-white-400 mb-4">
              Get $10 off your next purchase.
            </p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Your e-mail"
                className="rounded-none bg-transparent"
              />
              <Button className="rounded-none bg-yellow-400 text-black hover:bg-yellow-500">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#879095]">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center">
          <div className="w-1/2 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Policy statement
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie usage
            </a>
          </div>
          <div className="w-1/2 text-sm text-gray-400 hover:text-white transition-colors">
            <span>© 2020 Copyright</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
