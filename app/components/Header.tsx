'use client';

import Link from 'next/link';
import Image from 'next/image';
import { PHONE_NUMBER_LINK, PHONE_NUMBER_FORMATTED } from '../constants';
import logo from '../../public/logo.png';

export default function Header() {
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
              <div className="relative w-36 h-14">
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

            {/* Call Button - Desktop */}
            <a
              href={PHONE_NUMBER_LINK}
              className="hidden md:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-md font-semibold shadow"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us {PHONE_NUMBER_FORMATTED}
            </a>

            {/* Mobile Quick Actions */}
            <div className="lg:hidden md:hidden flex items-center gap-3">
              <div className="text-white leading-tight text-base font-black uppercase">
                <div>Open</div>
                <div className="text-[11px] font-semibold tracking-tight">7 Days a Week</div>
              </div>

              {/* Mail Icon - Mobile */}
              <Link
                href="/quote"
                className="inline-flex items-center justify-center text-green-500 hover:text-green-400 transition-colors"
                aria-label="Email us"
              >
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.236l7.4 6.17a1 1 0 001.2 0L20 8.236V18H4z" />
                </svg>
              </Link>

              {/* Call Icon - Mobile */}
              <a
                href={PHONE_NUMBER_LINK}
                className="inline-flex items-center justify-center text-blue-500 hover:text-blue-400 transition-colors"
                aria-label="Call us"
              >
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l1.83-1.83a1.5 1.5 0 011.54-.36 11.36 11.36 0 003.56.57 1.5 1.5 0 011.5 1.5V20a2 2 0 01-2 2 17 17 0 01-17-17 2 2 0 012-2h1.94a1.5 1.5 0 011.5 1.5 11.36 11.36 0 00.57 3.56 1.5 1.5 0 01-.36 1.54z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
