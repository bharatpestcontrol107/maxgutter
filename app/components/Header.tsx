'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { PHONE_NUMBER_LINK, PHONE_NUMBER_FORMATTED } from '../constants';
import logo from '../../public/logo.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full z-50">
      {/* Top Announcement Bar */}
      <div className="w-full bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Contact your nearest technician | OPEN 7 DAYS A WEEK</span>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <a href={PHONE_NUMBER_LINK} className="hover:underline">Request a Call</a>
            <a href={PHONE_NUMBER_LINK} className="hover:underline">Help Centre</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="w-full bg-linear-to-b from-gray-900 to-black text-white shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition">
              <div className="relative w-36 h-15">
                <Image src={logo} alt="Max logo" fill className="object-contain" />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/" className="hover:text-blue-400 transition">Home</Link>
              <Link href="/about" className="hover:text-blue-400 transition">About</Link>
              <Link href="/services" className="hover:text-blue-400 transition">Services</Link>
              <Link href="/quote" className="hover:text-blue-400 transition">Contact</Link>
            </nav>

            {/* Call Button */}
            <a
              href={PHONE_NUMBER_LINK}
              className="hidden md:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-md font-semibold shadow"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us {PHONE_NUMBER_FORMATTED}
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-white/10"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10">
            <nav className="flex flex-col px-4 py-4 gap-3 text-white">
              <Link href="/" className="py-2 hover:text-blue-400">Home</Link>
              <Link href="#about" className="py-2 hover:text-blue-400">About</Link>
              <Link href="#blog" className="py-2 hover:text-blue-400">Blog</Link>
              <Link href="/services" className="py-2 hover:text-blue-400">Services</Link>
              <Link href="/quote" className="py-2 hover:text-blue-400">Contact</Link>
              <a href={PHONE_NUMBER_LINK} className="mt-2 inline-flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-md font-semibold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us {PHONE_NUMBER_FORMATTED}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

