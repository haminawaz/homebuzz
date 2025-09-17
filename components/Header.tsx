"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  ChevronDown,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [isStoreDropdownOpen, setIsStoreDropdownOpen] = useState(false);

  // const storeDropdownItems = [
  //   "All Departments",
  //   "Tools & Hardware",
  //   "Building Materials",
  //   "Electrical",
  //   "Plumbing",
  //   "Paint & Supplies",
  //   "Outdoor & Garden",
  //   "Storage & Organization",
  // ];

  const categoryNavItems = [
    "Doors",
    "Furniture",
    "Decor",
    "Building material",
    "Lawn",
    "Ceiling Fans",
    "Garden",
    "Bath & Faucets",
  ];

  return (
    <>
      <header className="bg-[#353B3E] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4 px-12">
            <div className="flex items-center">
              <Image
                src="/logo.svg"
                alt="logo"
                className="object-cover"
                width={100}
                height={100}
                priority
              />
            </div>

            <nav className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
              <a
                href="#"
                className="text-white hover:text-yellow-400 font-medium transition-colors py-2"
              >
                Home
              </a>
              <div className="relative">
                <button
                  className="flex items-center text-white hover:text-yellow-400 font-medium transition-colors py-2"
                  // onMouseEnter={() => setIsStoreDropdownOpen(true)}
                  // onMouseLeave={() => setIsStoreDropdownOpen(false)}
                >
                  Store
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {/* {isStoreDropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg z-50 py-2"
                    onMouseEnter={() => setIsStoreDropdownOpen(true)}
                    onMouseLeave={() => setIsStoreDropdownOpen(false)}
                  >
                    {storeDropdownItems.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )} */}
              </div>
              <a
                href="#"
                className="text-white hover:text-yellow-400 font-medium transition-colors py-2"
              >
                Tutorials
              </a>
              <a
                href="#"
                className="text-white hover:text-yellow-400 font-medium transition-colors py-2"
              >
                Help
              </a>
            </nav>

            <div className="flex items-center space-x-6 gap-12">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-yellow-400 hover:bg-gray-700 p-2"
              >
                <ShoppingCart className="h-5 w-5" />
              </Button>

              <div className="hidden md:flex items-center space-x-4 text-sm">
                <a
                  href="#"
                  className="text-white hover:text-yellow-400 transition-colors font-medium"
                >
                  Sign Up
                </a>
                <a
                  href="#"
                  className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium"
                >
                  Log in
                </a>
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#565c60]">
                  <User className="h-5 w-5 text-white" />
                </div>
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden text-white hover:bg-gray-700 p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-700 py-4">
              {/* Mobile Navigation */}
              <nav className="space-y-2 mb-4">
                <a
                  href="#"
                  className="block text-white hover:text-yellow-400 font-medium py-2 transition-colors"
                >
                  Home
                </a>
                <div className="space-y-1">
                  <button className="block text-white hover:text-yellow-400 font-medium py-2 transition-colors w-full text-left">
                    Store
                  </button>
                  {/* <div className="pl-4 space-y-1">
                    {storeDropdownItems.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block text-gray-300 hover:text-yellow-400 py-1 text-sm transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div> */}
                </div>
                <a
                  href="#"
                  className="block text-white hover:text-yellow-400 font-medium py-2 transition-colors"
                >
                  Tutorials
                </a>
                <a
                  href="#"
                  className="block text-white hover:text-yellow-400 font-medium py-2 transition-colors"
                >
                  Help
                </a>
              </nav>

              {/* Mobile Account */}
              <div className="pt-4 border-t border-gray-700 space-y-2">
                <a
                  href="#"
                  className="block text-white hover:text-yellow-400 transition-colors"
                >
                  Sign Up
                </a>
                <a
                  href="#"
                  className="block text-yellow-400 hover:text-yellow-300 transition-colors"
                >
                  Log in
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="border-b border-gray-200 px-4">
        <div className="max-w-7xl mx-auto px-12">
          <div className="flex items-center justify-center py-3">
            <nav className="hidden lg:flex items-center space-x-3 flex-1">
              {categoryNavItems.map((category) => (
                <a
                  key={category}
                  href="#"
                  className="bg-[#cfd7dc] text-[#353B3E] hover:bg-[#b7bcbf] hover:text-gray-900 px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md"
                >
                  {category}
                </a>
              ))}
            </nav>

            <div className="flex items-center bg-white rounded-full border border-gray-300 px-4 py-2 w-full lg:w-1/5 ml-auto shadow-sm">
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-500 bg-transparent"
              />
              <Search className="h-4 w-4 text-gray-400 ml-2" />
            </div>
          </div>

          <div className="lg:hidden pb-3">
            <div className="flex overflow-x-auto space-x-3 pb-2">
              {categoryNavItems.map((category) => (
                <a
                  key={category}
                  href="#"
                  className="bg-[#cfd7dc] text-[#353B3E] hover:bg-[#b7bcbf] px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors border border-gray-200 shadow-sm"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
