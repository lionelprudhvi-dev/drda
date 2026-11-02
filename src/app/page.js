import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* 1. Top Utility Strip */}
      <header className="sticky top-0 z-50 shadow-md">
        <div className="bg-[#F0F7FF] text-[#002147] py-1.5 px-4 border-b border-[#BAE6FD]">
          <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
            <div className="hidden md:flex items-center gap-3 text-[#475569]">
              <span>Government of Andhra Pradesh</span>
              <span className="w-px h-3 bg-[#BAE6FD]"></span>
              <span className="font-bold text-[#002147]">Vizianagaram District</span>
            </div>

            <div className="flex items-center gap-3 ml-auto">
              <a href="tel:1902" className="flex items-center gap-1 font-bold text-[#002147] hover:text-[#EA580C] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>IVRS: 1902</span>
              </a>
              <span className="w-px h-3 bg-[#BAE6FD]"></span>
              <a href="tel:08954220123" className="hidden sm:flex items-center gap-1 font-semibold text-[#002147] hover:text-[#EA580C] transition-colors">
                <span>08954-220123</span>
              </a>
              <span className="w-px h-3 bg-[#BAE6FD]"></span>
              <div className="flex items-center gap-2 text-[#475569] text-[11px]">
                <Link href="/" className="hover:text-[#002147]">Home</Link>
                <span>|</span>
                <a href="/sitemap" className="hover:text-[#002147]">Sitemap</a>
                <span>|</span>
                <a href="/login" className="hover:text-[#002147]">Login / Sign Up</a>
              </div>
              <button aria-label="Search" className="p-1 text-[#002147] hover:text-[#EA580C]">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </button>
              <button className="flex items-center gap-1 bg-[#E0F2FE] hover:bg-[#BAE6FD] text-[#002147] text-[11px] font-bold px-2.5 py-1 rounded-full transition-colors notranslate">
                <span>తెలుగు</span>
              </button>
            </div>
          </div>
        </div>

        {/* 2. Main White Branding Bar */}
        <div className="bg-white text-[#002147] px-4 py-3 border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <Link className="flex items-center gap-3 min-w-0" href="/">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white overflow-hidden flex-shrink-0 shadow-md border-2 border-[#E2E8F0]">
                <img alt="Government of Andhra Pradesh Emblem" width="56" height="56" className="w-full h-full object-cover" src="/images/ap-emblem.jpg" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] sm:text-xs text-[#475569] font-medium leading-tight">Government of Andhra Pradesh</div>
                <div className="font-black text-sm sm:text-xl text-[#002147] leading-tight tracking-tight">VIZIANAGARAM DISTRICT</div>
                <div className="text-xs text-[#64748B] font-semibold leading-tight">District Rural Development Agency</div>
              </div>
            </Link>
            
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* Golden Yellow Vizianagaram Maps Button */}
              <a href="https://vizianagaram.ap.gov.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 bg-[#FFD22C] hover:bg-[#F59E0B] text-[#0F172A] font-extrabold text-xs px-4 py-2 rounded-full shadow-sm hover:shadow transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Vizianagaram Maps</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </a>
              <a className="hidden md:flex items-center gap-1.5 bg-[#FFD22C] hover:bg-[#F59E0B] text-[#0F172A] font-extrabold text-xs px-3.5 py-2 rounded-full shadow-sm transition-colors" href="/mart">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.1 6h17.8"/><path d="M3.4 5.5a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.7a2 2 0 0 0-.4-1.2l-2-2.7A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/></svg>
                <span>Mart</span>
              </a>
            </div>
          </div>
        </div>

        {/* 3. Clean White Navigation Bar */}
        <nav className="hidden md:block bg-white border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
            <ul className="flex items-center gap-1 py-1">
              {/* Active Home Tab as Golden Yellow Pill */}
              <li>
                <Link className="bg-[#FFD22C] text-[#0F172A] font-extrabold text-xs px-4 py-1.5 rounded-full shadow-sm inline-block" href="/">Home</Link>
              </li>
              <li className="relative group">
                <a className="flex items-center gap-1 text-xs font-semibold px-3 py-2 text-[#002147] hover:text-[#D97706] hover:bg-[#FEF9C3] rounded-full transition-colors" href="/about/drda">
                  About
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </a>
                <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 w-52 overflow-hidden">
                    <a href="/about/drda" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">About DRDA</a>
                    <a href="/about/district" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">District Profile</a>
                    <a href="/about/structure" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">Administrative Structure</a>
                    <a href="/about/whos-who" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">Who&#x27;s Who</a>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <a className="flex items-center gap-1 text-xs font-semibold px-3 py-2 text-[#002147] hover:text-[#D97706] hover:bg-[#FEF9C3] rounded-full transition-colors" href="/citizen-services">
                  Citizen Services
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </a>
                <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 w-56 overflow-hidden">
                    <a href="/citizen-services" className="block px-4 py-2 text-xs font-bold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706] border-b border-gray-50">All Citizen Services</a>
                    <a href="/schemes" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">Explore Schemes</a>
                    <a href="/pgrs" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">Share Concern (PGRS)</a>
                    <a href="/ivrs" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">IVRS Helpline 1902</a>
                    <a href="/knowledge-center" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">Knowledge Center</a>
                    <a href="/events" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">Events &amp; Training</a>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <a className="flex items-center gap-1 text-xs font-semibold px-3 py-2 text-[#002147] hover:text-[#D97706] hover:bg-[#FEF9C3] rounded-full transition-colors" href="/schemes">
                  Schemes
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </a>
                <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 w-52 overflow-hidden">
                    <a href="/schemes" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">Explore Schemes</a>
                    <a href="/knowledge-center" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">Guidelines &amp; Manuals</a>
                    <a href="https://www.myscheme.gov.in" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">myScheme Portal ↗</a>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <a className="flex items-center gap-1 text-xs font-semibold px-3 py-2 text-[#002147] hover:text-[#D97706] hover:bg-[#FEF9C3] rounded-full transition-colors" href="/fpo">
                  Livelihoods
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </a>
                <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 w-56 overflow-hidden">
                    <a href="/fpo" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">FPO Network (15 Mandals)</a>
                    <a href="/success-stories" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">Women Entrepreneurship</a>
                    <a href="/citizen-services" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">One Family One Entrepreneur</a>
                  </div>
                </div>
              </li>
              <li>
                <a className="text-xs font-semibold px-3 py-2 text-[#002147] hover:text-[#D97706] hover:bg-[#FEF9C3] rounded-full transition-colors" href="/media-coverage">Media</a>
              </li>
              <li>
                <a className="text-xs font-semibold px-3 py-2 text-[#002147] hover:text-[#D97706] hover:bg-[#FEF9C3] rounded-full transition-colors" href="/success-stories">Success Stories</a>
              </li>
              <li>
                <a className="text-xs font-semibold px-3 py-2 text-[#002147] hover:text-[#D97706] hover:bg-[#FEF9C3] rounded-full transition-colors" href="/pgrs">Grievances</a>
              </li>
              <li>
                <a className="text-xs font-semibold px-3 py-2 text-[#002147] hover:text-[#D97706] hover:bg-[#FEF9C3] rounded-full transition-colors" href="/dashboard">Dashboard</a>
              </li>
            </ul>

            <a className="flex items-center gap-1.5 bg-[#FFD22C] hover:bg-[#F59E0B] text-[#0F172A] font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-sm transition-colors" href="/mart">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.1 6h17.8"/><path d="M3.4 5.5a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.7a2 2 0 0 0-.4-1.2l-2-2.7A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/></svg>
              <span>Manyam Mart</span>
              <span className="bg-[#002147] text-[#FFD22C] text-[9px] font-bold px-1.5 py-0.5 rounded-full">NEW</span>
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* 4. Hero Section with Warm Morning Sunrise Glow */}
        <section className="relative bg-gradient-to-br from-[#FFFDF7] via-[#FFFBEB] to-[#FEF3C7] text-[#002147] py-14 sm:py-20 overflow-hidden border-b border-[#FDE68A]">
          {/* Subtle Ambient Light Glows */}
          <div className="absolute -top-10 left-1/4 w-96 h-96 bg-[#FEF08A]/35 rounded-full blur-3xl pointer-events-none z-0"></div>

          {/* Right-Side Temple Background Image - Spreads Across Right Side of Hero Div with Smooth Photographic Transition */}
          <div 
            className="absolute right-0 top-0 bottom-0 w-full md:w-3/4 lg:w-[65%] xl:w-[62%] pointer-events-none overflow-hidden z-0 select-none transition-all duration-700 ease-out"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.35) 22%, rgba(0,0,0,0.85) 40%, black 55%, black 88%, rgba(0,0,0,0.6) 96%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.35) 22%, rgba(0,0,0,0.85) 40%, black 55%, black 88%, rgba(0,0,0,0.6) 96%, transparent 100%)'
            }}
          >
            {/* Sunrise Glow Disc behind the temple chariot - Matches Reference Mockup */}
            <div className="absolute right-12 sm:right-28 top-4 sm:top-8 w-52 h-52 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-[#FFD22C]/75 via-[#F59E0B]/40 to-transparent blur-3xl pointer-events-none z-0"></div>

            {/* Temple Heritage Photo - Spreading smoothly across the right side with crisp clarity */}
            <img
              src="/images/hero-temple.jpg"
              alt="Vizianagaram Historic Stone Chariot Heritage"
              className="w-full h-full object-cover object-[center_30%] sm:object-[45%_30%] lg:object-[48%_25%] opacity-95 lg:opacity-100 filter contrast-105 saturate-110 drop-shadow-sm transition-all duration-700 ease-out"
            />

            {/* Bottom Edge Fade: Soft blend into the news ticker border */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FEF3C7] via-[#FEF3C7]/40 to-transparent z-10 pointer-events-none"></div>

            {/* Top Edge Fade: Soft blend into the header border */}
            <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-[#FFFDF7]/80 to-transparent z-10 pointer-events-none"></div>

            {/* Mobile Readability Veil: Active only on narrow mobile screens so dark text remains readable */}
            <div className="absolute inset-0 bg-[#FFFDF7]/75 sm:hidden z-10 pointer-events-none"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 w-full z-10">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Left Column - High-Contrast Text Content */}
              <div className="lg:col-span-7 relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-1 bg-[#F59E0B] rounded-full"></span>
                  <span className="text-[#F59E0B] font-extrabold text-xs uppercase tracking-widest drop-shadow-sm">WELCOME TO</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#002147] tracking-tight leading-none mb-2 drop-shadow-sm">
                  Vizianagaram<br />District
                </h1>

                <div className="text-xl sm:text-2xl font-extrabold text-[#EA580C] tracking-wide mb-4 drop-shadow-sm">
                  People. Progress. Prosperity.
                </div>

                <p className="text-sm sm:text-base text-[#334155] leading-relaxed max-w-xl mb-8 font-medium">
                  A unified platform for district services, government schemes, citizen welfare initiatives and development programs to build a stronger Vizianagaram.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  {/* Golden Yellow Explore Citizen Services Button */}
                  <a href="/citizen-services" className="inline-flex items-center gap-2 bg-[#FFD22C] hover:bg-[#F59E0B] text-[#0F172A] font-extrabold px-6 py-3.5 rounded-full text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
                    <span>Explore Citizen Services</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </a>
                  {/* White / Navy Share Your Concern Button */}
                  <a href="/pgrs" className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#002147] font-bold px-6 py-3.5 rounded-full text-sm border-2 border-[#002147]/20 shadow-sm hover:shadow transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#002147]"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/></svg>
                    <span>Share Your Concern</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Floating Card 'A Connected District' - Layered over temple with crisp readable card */}
              <div className="lg:col-span-5 relative z-10">
                <div className="bg-white/90 sm:bg-white/85 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/80 ring-1 ring-black/5 max-w-md ml-auto transition-all duration-300 hover:bg-white/95">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#0284C7] animate-pulse"></div>
                      <h3 className="font-extrabold text-[#002147] text-sm sm:text-base">A Connected District</h3>
                    </div>
                    <a href="/about/district" className="text-xs font-bold text-[#0284C7] hover:underline flex items-center gap-1">
                      View More →
                    </a>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-50/90 border border-slate-100">
                      <div className="w-9 h-9 rounded-xl bg-[#E0F2FE] flex items-center justify-center text-[#0284C7] flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                      </div>
                      <div>
                        <div className="text-lg font-black text-[#002147] leading-none">19.30 Lakh</div>
                        <div className="text-[11px] text-[#64748B] mt-0.5 font-medium">Population</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-50/90 border border-slate-100">
                      <div className="w-9 h-9 rounded-xl bg-[#FEF3C7] flex items-center justify-center text-[#F59E0B] flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                      </div>
                      <div>
                        <div className="text-lg font-black text-[#002147] leading-none">27</div>
                        <div className="text-[11px] text-[#64748B] mt-0.5 font-medium">Mandals</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-50/90 border border-slate-100">
                      <div className="w-9 h-9 rounded-xl bg-[#FEF3C7] flex items-center justify-center text-[#F59E0B] flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/></svg>
                      </div>
                      <div>
                        <div className="text-lg font-black text-[#002147] leading-none">882</div>
                        <div className="text-[11px] text-[#64748B] mt-0.5 font-medium">Gram Panchayats</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-50/90 border border-slate-100">
                      <div className="w-9 h-9 rounded-xl bg-[#E0F2FE] flex items-center justify-center text-[#0284C7] flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>
                      </div>
                      <div>
                        <div className="text-lg font-black text-[#002147] leading-none">53.21%</div>
                        <div className="text-[11px] text-[#64748B] mt-0.5 font-medium">Literacy Rate</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold text-[#475569]">Quick Links</span>
                    <div className="flex items-center gap-2">
                      <a href="https://meeseva.ap.gov.in" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-50 text-[#002147] border border-gray-200 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors shadow-sm">
                        MeeSeva Services
                      </a>
                      <a href="/schemes" className="bg-[#FFD22C] hover:bg-[#F59E0B] text-[#0F172A] text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm transition-colors">
                        Apply For Certificates
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Latest News Ticker */}
        <div className="bg-[#F0F7FF] border-b border-[#BAE6FD] shadow-sm">
          <div className="max-w-7xl mx-auto flex items-stretch">
            <div className="flex items-center gap-2 bg-[#EA580C] text-white px-3 sm:px-4 py-2 font-bold text-[11px] sm:text-xs uppercase tracking-wide flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"/><path d="M8 6v8"/></svg>
              <span>Latest News</span>
            </div>
            <div className="group flex-1 overflow-hidden flex items-center">
              <div className="flex w-max items-center gap-8 whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused] px-6 text-[#002147] text-xs sm:text-sm font-medium">
                <span>Vizianagaram: New citizen service counters opened at DRDA Office</span>
                <span className="text-gray-300">|</span>
                <span>4,030 women entrepreneurs supported with ₹40.97 Cr credit linkage</span>
                <span className="text-gray-300">|</span>
                <span>15 Farmer Producer Organisations actively empowering 30,430 farmers</span>
                <span className="text-gray-300">|</span>
                <span>IVRS Helpline 1902 operational 24/7 for citizen scheme assistance</span>
              </div>
            </div>
            <a className="hidden sm:flex items-center gap-1 text-[#D97706] hover:text-[#002147] px-4 font-bold text-xs flex-shrink-0 transition-colors" href="/media-coverage">
              More Updates →
            </a>
          </div>
        </div>

        {/* 6. Guided by a public vision (Leadership) */}
        <section className="py-14 bg-[#FFFDF7] border-b border-[#FDE68A]/60">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
              {/* Golden Yellow Bar Highlight */}
              <div className="w-8 h-1 bg-[#FFD22C] rounded-full mx-auto mb-2"></div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#002147] mb-1">Guided by a public vision</h2>
              <p className="text-[#64748B] text-xs sm:text-sm max-w-xl mx-auto">
                Connecting you with essential services, welfare schemes and development priorities for a better Vizianagaram.
              </p>
            </div>

            <div className="relative flex items-center justify-between gap-3">
              {/* Carousel Left Navy Button */}
              <button aria-label="Previous Leaders" className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-[#002147] hover:bg-[#0A2540] text-white shadow-md flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 flex-1">
                {/* Leader 1 */}
                <div className="bg-white rounded-2xl p-4 text-center border border-[#E2E8F0] shadow-sm hover:shadow-lg transition-all flex flex-col items-center">
                  <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-[#FEF9C3] p-1 border-2 border-white shadow-md mb-3">
                    <img src="/leaders/apcm.png" alt="Sri Nara Chandrababu Naidu" className="w-full h-full object-cover rounded-full" />
                  </div>
                  <h3 className="font-bold text-[#002147] text-xs sm:text-sm leading-tight mb-1">Sri Nara Chandrababu Naidu</h3>
                  <p className="text-[#64748B] text-[10px] sm:text-xs leading-tight mb-3 flex-1">Hon&#x27;ble Chief Minister, Andhra Pradesh</p>
                  <a href="/about/structure" className="bg-[#FEF9C3] text-[#002147] hover:bg-[#FFD22C] hover:text-[#0F172A] text-[11px] font-bold px-3 py-1 rounded-full border border-[#FDE68A] transition-colors">
                    Know More →
                  </a>
                </div>

                {/* Leader 2 */}
                <div className="bg-white rounded-2xl p-4 text-center border border-[#E2E8F0] shadow-sm hover:shadow-lg transition-all flex flex-col items-center">
                  <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-[#FEF9C3] p-1 border-2 border-white shadow-md mb-3">
                    <img src="/leaders/serpminister.jpg" alt="Sri Kondapalli Srinivas" className="w-full h-full object-cover rounded-full" />
                  </div>
                  <h3 className="font-bold text-[#002147] text-xs sm:text-sm leading-tight mb-1">Sri Kondapalli Srinivas</h3>
                  <p className="text-[#64748B] text-[10px] sm:text-xs leading-tight mb-3 flex-1">Hon&#x27;ble Minister, MSMEs &amp; SERP, AP</p>
                  <a href="/about/structure" className="bg-[#FEF9C3] text-[#002147] hover:bg-[#FFD22C] hover:text-[#0F172A] text-[11px] font-bold px-3 py-1 rounded-full border border-[#FDE68A] transition-colors">
                    Know More →
                  </a>
                </div>

                {/* Leader 3 */}
                <div className="bg-white rounded-2xl p-4 text-center border border-[#E2E8F0] shadow-sm hover:shadow-lg transition-all flex flex-col items-center">
                  <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-[#FEF9C3] p-1 border-2 border-white shadow-md mb-3">
                    <img src="/leaders/serpceo.webp" alt="Smt. V. Karuna, IAS" className="w-full h-full object-cover rounded-full" />
                  </div>
                  <h3 className="font-bold text-[#002147] text-xs sm:text-sm leading-tight mb-1">Smt. V. Karuna, IAS</h3>
                  <p className="text-[#64748B] text-[10px] sm:text-xs leading-tight mb-3 flex-1">Chief Executive Officer, SERP AP</p>
                  <a href="/about/structure" className="bg-[#FEF9C3] text-[#002147] hover:bg-[#FFD22C] hover:text-[#0F172A] text-[11px] font-bold px-3 py-1 rounded-full border border-[#FDE68A] transition-colors">
                    Know More →
                  </a>
                </div>

                {/* Leader 4 */}
                <div className="bg-white rounded-2xl p-4 text-center border border-[#E2E8F0] shadow-sm hover:shadow-lg transition-all flex flex-col items-center">
                  <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-[#FEF9C3] p-1 border-2 border-white shadow-md mb-3">
                    <img src="/leaders/collector.jpg" alt="Sri S. Ram Sundar Reddy, I.A.S." className="w-full h-full object-cover rounded-full" />
                  </div>
                  <h3 className="font-bold text-[#002147] text-xs sm:text-sm leading-tight mb-1">Sri S. Ram Sundar Reddy, I.A.S.</h3>
                  <p className="text-[#64748B] text-[10px] sm:text-xs leading-tight mb-3 flex-1">District Collector &amp; Magistrate</p>
                  <a href="/about/whos-who" className="bg-[#FEF9C3] text-[#002147] hover:bg-[#FFD22C] hover:text-[#0F172A] text-[11px] font-bold px-3 py-1 rounded-full border border-[#FDE68A] transition-colors">
                    Know More →
                  </a>
                </div>

                {/* Leader 5 */}
                <div className="bg-white rounded-2xl p-4 text-center border border-[#E2E8F0] shadow-sm hover:shadow-lg transition-all flex flex-col items-center col-span-2 sm:col-span-1">
                  <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-[#FEF9C3] p-1 border-2 border-white shadow-md mb-3">
                    <img src="/leaders/project-director.jpg" alt="Smt. Ch. Prabhavathi" className="w-full h-full object-cover rounded-full" />
                  </div>
                  <h3 className="font-bold text-[#002147] text-xs sm:text-sm leading-tight mb-1">Smt. Ch. Prabhavathi</h3>
                  <p className="text-[#64748B] text-[10px] sm:text-xs leading-tight mb-3 flex-1">Project Director, DRDA Vizianagaram</p>
                  <a href="/about/whos-who" className="bg-[#FEF9C3] text-[#002147] hover:bg-[#FFD22C] hover:text-[#0F172A] text-[11px] font-bold px-3 py-1 rounded-full border border-[#FDE68A] transition-colors">
                    Know More →
                  </a>
                </div>
              </div>

              {/* Carousel Right Golden Yellow Button */}
              <button aria-label="Next Leaders" className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-[#FFD22C] hover:bg-[#F59E0B] text-[#0F172A] shadow-md flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
          </div>
        </section>

        {/* 7. District at a glance */}
        <section className="py-14 bg-white border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div>
                {/* Yellow Bar Highlight */}
                <div className="w-8 h-1 bg-[#FFD22C] rounded-full mb-2"></div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#002147]">District at a glance</h2>
                <p className="text-xs sm:text-sm text-[#64748B] mt-0.5">A quick view of Vizianagaram&#x27;s population, administration and infrastructure.</p>
              </div>
              <a href="/dashboard" className="border border-[#FDE68A] hover:bg-[#FEF9C3] text-[#002147] hover:text-[#D97706] font-bold text-xs px-4 py-2 rounded-full transition-colors flex items-center gap-1 shadow-sm">
                <span>View Detailed Statistics</span>
                <span>→</span>
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-6">
              <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-4 text-center hover:border-[#FFD22C] transition-colors">
                <div className="text-[#F59E0B] flex justify-center mb-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#002147]">19.30 Lakh</div>
                <div className="text-[11px] text-[#64748B] mt-0.5">Population</div>
              </div>

              <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-4 text-center hover:border-[#FFD22C] transition-colors">
                <div className="text-[#F59E0B] flex justify-center mb-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/></svg>
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#002147]">3</div>
                <div className="text-[11px] text-[#64748B] mt-0.5">Revenue Divisions</div>
              </div>

              <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-4 text-center hover:border-[#FFD22C] transition-colors">
                <div className="text-[#F59E0B] flex justify-center mb-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#002147]">27</div>
                <div className="text-[11px] text-[#64748B] mt-0.5">Mandals</div>
              </div>

              <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-4 text-center hover:border-[#FFD22C] transition-colors">
                <div className="text-[#F59E0B] flex justify-center mb-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#002147]">882</div>
                <div className="text-[11px] text-[#64748B] mt-0.5">Villages</div>
              </div>

              <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-4 text-center hover:border-[#FFD22C] transition-colors">
                <div className="text-[#F59E0B] flex justify-center mb-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/></svg>
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#002147]">777</div>
                <div className="text-[11px] text-[#64748B] mt-0.5">Panchayats</div>
              </div>

              <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-4 text-center hover:border-[#FFD22C] transition-colors">
                <div className="text-[#F59E0B] flex justify-center mb-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#002147]">53.21%</div>
                <div className="text-[11px] text-[#64748B] mt-0.5">Literacy Rate</div>
              </div>
            </div>

            {/* District Highlights Banner */}
            <div className="bg-gradient-to-r from-[#FFFBEB] via-[#FEF9C3] to-[#FEF3C7] border border-[#FDE68A] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FFD22C] flex items-center justify-center text-[#0F172A] flex-shrink-0 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#002147] text-base">District Highlights</h3>
                  <div className="text-xs text-[#002147] font-semibold mt-0.5">Local institutions, one connected network.</div>
                  <p className="text-xs text-[#64748B] mt-1 max-w-lg">Our district administration works closely with people, communities and stakeholders for inclusive and sustainable development.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-center">
                <div>
                  <div className="font-black text-[#002147] text-base">3</div>
                  <div className="text-[10px] text-[#64748B]">Rev. Divisions</div>
                </div>
                <div>
                  <div className="font-black text-[#002147] text-base">27</div>
                  <div className="text-[10px] text-[#64748B]">Mandals</div>
                </div>
                <div>
                  <div className="font-black text-[#002147] text-base">882</div>
                  <div className="text-[10px] text-[#64748B]">Gram Panchayats</div>
                </div>
                <div>
                  <div className="font-black text-[#002147] text-base">777</div>
                  <div className="text-[10px] text-[#64748B]">Villages</div>
                </div>
                <a href="/about/district" className="bg-[#FFD22C] hover:bg-[#F59E0B] text-[#0F172A] font-extrabold text-xs px-5 py-2.5 rounded-full shadow-sm transition-colors whitespace-nowrap">
                  Explore More →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Progress you can understand (Program Gauges) */}
        <section className="py-14 bg-[#FFFDF7] border-b border-[#FDE68A]/60">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div>
                {/* Yellow Bar Highlight */}
                <div className="w-8 h-1 bg-[#FFD22C] rounded-full mb-2"></div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#002147]">Progress you can understand</h2>
                <p className="text-xs sm:text-sm text-[#64748B] mt-0.5">Real progress. Visible impact. Track how Vizianagaram is moving forward.</p>
              </div>
              <a href="/dashboard" className="border border-[#FDE68A] hover:bg-[#FEF9C3] text-[#002147] hover:text-[#D97706] font-bold text-xs px-4 py-2 rounded-full transition-colors shadow-sm">
                Full Dashboard →
              </a>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Ring 1: Women Empowerment 82% (Golden Yellow) */}
              <div className="bg-white rounded-2xl p-6 text-center border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all">
                <div className="relative w-28 h-28 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="#F1F5F9" strokeWidth="8" fill="transparent" />
                    <circle cx="50" cy="50" r="40" stroke="#FFD22C" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset="45.2" strokeLinecap="round" fill="transparent" />
                  </svg>
                  <span className="absolute text-2xl font-black text-[#002147]">82%</span>
                </div>
                <h3 className="font-bold text-[#002147] text-sm mb-1">Women Empowerment</h3>
                <div className="text-xs font-black text-[#D97706]">2,050 Units</div>
                <p className="text-[11px] text-[#64748B] mt-0.5">Self Help Groups</p>
              </div>

              {/* Ring 2: Skill Development 74% (Sky Blue) */}
              <div className="bg-white rounded-2xl p-6 text-center border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all">
                <div className="relative w-28 h-28 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="#F1F5F9" strokeWidth="8" fill="transparent" />
                    <circle cx="50" cy="50" r="40" stroke="#0284C7" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset="65.3" strokeLinecap="round" fill="transparent" />
                  </svg>
                  <span className="absolute text-2xl font-black text-[#002147]">74%</span>
                </div>
                <h3 className="font-bold text-[#002147] text-sm mb-1">Skill Development</h3>
                <div className="text-xs font-black text-[#0284C7]">3,920 Learners</div>
                <p className="text-[11px] text-[#64748B] mt-0.5">Trained under programs</p>
              </div>

              {/* Ring 3: Farmer Support 89% (Amber Gold) */}
              <div className="bg-white rounded-2xl p-6 text-center border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all">
                <div className="relative w-28 h-28 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="#F1F5F9" strokeWidth="8" fill="transparent" />
                    <circle cx="50" cy="50" r="40" stroke="#F59E0B" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset="27.6" strokeLinecap="round" fill="transparent" />
                  </svg>
                  <span className="absolute text-2xl font-black text-[#002147]">89%</span>
                </div>
                <h3 className="font-bold text-[#002147] text-sm mb-1">Farmer Support</h3>
                <div className="text-xs font-black text-[#EAB308]">820 Farmers</div>
                <p className="text-[11px] text-[#64748B] mt-0.5">Direct farm assistance</p>
              </div>

              {/* Ring 4: Health Services 91% (Deep Royal Blue) */}
              <div className="bg-white rounded-2xl p-6 text-center border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all">
                <div className="relative w-28 h-28 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="#F1F5F9" strokeWidth="8" fill="transparent" />
                    <circle cx="50" cy="50" r="40" stroke="#1D4ED8" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset="22.6" strokeLinecap="round" fill="transparent" />
                  </svg>
                  <span className="absolute text-2xl font-black text-[#002147]">91%</span>
                </div>
                <h3 className="font-bold text-[#002147] text-sm mb-1">Health Services</h3>
                <div className="text-xs font-black text-[#1D4ED8]">95% Coverage</div>
                <p className="text-[11px] text-[#64748B] mt-0.5">Primary health initiatives</p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Citizen Services Section */}
        <section className="py-14 bg-white border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-6 h-1 bg-[#FFD22C] rounded-full"></span>
                  <span className="text-[#EA580C] font-extrabold text-xs uppercase tracking-wider">Citizen Services</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#002147]">Everything you need to take the first step</h2>
                <p className="text-xs sm:text-sm text-[#64748B] mt-0.5">Access key citizen services, submit applications and track your requests — all in one place.</p>
              </div>
              <a href="/citizen-services" className="text-[#D97706] font-bold text-xs hover:underline flex items-center gap-1">
                <span>View All Services</span>
                <span>→</span>
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {/* Service 1: Public Grievance */}
              <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="h-28 bg-slate-100 overflow-hidden relative">
                  <img src="/images/services/service1.jpg" alt="Public Grievance" className="w-full h-full object-cover" />
                </div>
                <div className="p-3.5">
                  <h3 className="font-bold text-[#002147] text-xs sm:text-sm mb-1">Public Grievance</h3>
                  <p className="text-[11px] text-[#64748B] mb-3 leading-relaxed">Register and track your grievances online.</p>
                  <a href="/pgrs" className="text-[#D97706] hover:text-[#002147] font-bold text-[11px] flex items-center gap-1">
                    Open service →
                  </a>
                </div>
              </div>

              {/* Service 2: Government Schemes */}
              <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="h-28 bg-slate-100 overflow-hidden relative">
                  <img src="/images/services/service2.jpg" alt="Government Schemes" className="w-full h-full object-cover" />
                </div>
                <div className="p-3.5">
                  <h3 className="font-bold text-[#002147] text-xs sm:text-sm mb-1">Government Schemes</h3>
                  <p className="text-[11px] text-[#64748B] mb-3 leading-relaxed">Explore welfare schemes and apply online.</p>
                  <a href="/schemes" className="text-[#D97706] hover:text-[#002147] font-bold text-[11px] flex items-center gap-1">
                    Open service →
                  </a>
                </div>
              </div>

              {/* Service 3: Hospitals */}
              <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="h-28 bg-slate-100 overflow-hidden relative">
                  <img src="/images/services/service3.jpg" alt="Hospitals" className="w-full h-full object-cover" />
                </div>
                <div className="p-3.5">
                  <h3 className="font-bold text-[#002147] text-xs sm:text-sm mb-1">Hospitals</h3>
                  <p className="text-[11px] text-[#64748B] mb-3 leading-relaxed">Find government hospitals and health services.</p>
                  <a href="/citizen-services" className="text-[#D97706] hover:text-[#002147] font-bold text-[11px] flex items-center gap-1">
                    Open service →
                  </a>
                </div>
              </div>

              {/* Service 4: Schools & Colleges */}
              <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="h-28 bg-slate-100 overflow-hidden relative">
                  <img src="/images/services/service4.jpg" alt="Schools & Colleges" className="w-full h-full object-cover" />
                </div>
                <div className="p-3.5">
                  <h3 className="font-bold text-[#002147] text-xs sm:text-sm mb-1">Schools &amp; Colleges</h3>
                  <p className="text-[11px] text-[#64748B] mb-3 leading-relaxed">Find educational institutions near you.</p>
                  <a href="/citizen-services" className="text-[#D97706] hover:text-[#002147] font-bold text-[11px] flex items-center gap-1">
                    Open service →
                  </a>
                </div>
              </div>

              {/* Service 5: Tourism */}
              <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-md transition-all col-span-2 sm:col-span-1">
                <div className="h-28 bg-slate-100 overflow-hidden relative">
                  <img src="/images/services/service5.jpg" alt="Tourism" className="w-full h-full object-cover" />
                </div>
                <div className="p-3.5">
                  <h3 className="font-bold text-[#002147] text-xs sm:text-sm mb-1">Tourism</h3>
                  <p className="text-[11px] text-[#64748B] mb-3 leading-relaxed">Explore scenic places in Vizianagaram.</p>
                  <a href="/citizen-services" className="text-[#D97706] hover:text-[#002147] font-bold text-[11px] flex items-center gap-1">
                    Open service →
                  </a>
                </div>
              </div>
            </div>

            {/* Multiple services for your district (Warm Golden Yellow Highlight Banner) */}
            <div className="bg-[#FEF08A] border border-[#FDE047] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFD22C] flex items-center justify-center text-[#0F172A] flex-shrink-0 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#002147] text-sm">Multiple services for your district</h4>
                  <p className="text-xs text-[#002147]/80">To view all district services in one place.</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* White button */}
                <a href="/citizen-services" className="bg-white hover:bg-gray-50 text-[#002147] font-bold text-xs px-4 py-2 rounded-full border border-gray-200 shadow-sm transition-colors">
                  Get Services →
                </a>
                {/* Deep Navy button */}
                <a href="https://vizianagaram.ap.gov.in" target="_blank" rel="noopener noreferrer" className="bg-[#002147] hover:bg-[#0A2540] text-white font-bold text-xs px-5 py-2 rounded-full shadow transition-colors">
                  View Map →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Real people. Practical progress. (Success Stories) */}
        <section className="py-14 bg-[#FFFDF7] border-b border-[#FDE68A]/60">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div>
                <div className="w-8 h-1 bg-[#FFD22C] rounded-full mb-2"></div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#002147]">Real people. Practical progress.</h2>
                <p className="text-xs sm:text-sm text-[#64748B] mt-0.5">Stories from our communities that are building a stronger Vizianagaram.</p>
              </div>
              <a href="/success-stories" className="text-[#D97706] font-bold text-xs hover:underline flex items-center gap-1">
                <span>View All Stories</span>
                <span>→</span>
              </a>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Story 1 */}
              <div className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all">
                <div className="h-44 bg-slate-100 overflow-hidden">
                  <img src="/images/services/service6.jpg" alt="Santhi Mahila Collective" className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#002147] text-base mb-1">Santhi &amp; Mahila Collective</h3>
                  <p className="text-xs text-[#64748B] mb-4 leading-relaxed">A women&#x27;s collective in Vizianagaram empowering rural women through dairy farming and micro-enterprises.</p>
                  <a href="/success-stories" className="text-[#D97706] hover:text-[#002147] font-bold text-xs flex items-center gap-1">
                    Read more →
                  </a>
                </div>
              </div>

              {/* Story 2 */}
              <div className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all">
                <div className="h-44 bg-slate-100 overflow-hidden">
                  <img src="/images/schemes/scheme7.jpg" alt="Sai Farmer Producer Group" className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#002147] text-base mb-1">Sai Farmer Producer Group</h3>
                  <p className="text-xs text-[#64748B] mb-4 leading-relaxed">Supporting farmers for better yields and fair prices across cashew and millet crops.</p>
                  <a href="/success-stories" className="text-[#D97706] hover:text-[#002147] font-bold text-xs flex items-center gap-1">
                    Read more →
                  </a>
                </div>
              </div>

              {/* Story 3 */}
              <div className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all sm:col-span-2 lg:col-span-1">
                <div className="h-44 bg-slate-100 overflow-hidden">
                  <img src="/images/schemes/scheme8.jpg" alt="Naveen&#x27;s Youth Skills Centre" className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#002147] text-base mb-1">Naveen&#x27;s Youth Skills Centre</h3>
                  <p className="text-xs text-[#64748B] mb-4 leading-relaxed">Building skills for a brighter future through technical training and entrepreneurship coaching.</p>
                  <a href="/success-stories" className="text-[#D97706] hover:text-[#002147] font-bold text-xs flex items-center gap-1">
                    Read more →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Value chains with a local future */}
        <section className="py-14 bg-white border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div>
                <div className="w-8 h-1 bg-[#FFD22C] rounded-full mb-2"></div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#002147]">Value chains with a local future</h2>
                <p className="text-xs sm:text-sm text-[#64748B] mt-0.5">Explore support activities for families, entrepreneurs, traders and young people.</p>
              </div>
              <a href="/schemes" className="text-[#D97706] font-bold text-xs hover:underline flex items-center gap-1">
                <span>View All Schemes</span>
                <span>→</span>
              </a>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all">
                <div className="h-32 bg-slate-100 overflow-hidden">
                  <img src="/images/schemes/scheme1.jpg" alt="Women Entrepreneurship" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[#002147] text-xs sm:text-sm mb-1">Women Entrepreneurship</h3>
                  <div className="text-xs font-black text-[#D97706]">2,050 units</div>
                  <p className="text-[11px] text-[#64748B] mt-0.5 mb-3">Self Help Groups</p>
                  <a href="/success-stories" className="text-[#D97706] hover:text-[#002147] font-bold text-[11px]">Read details →</a>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all">
                <div className="h-32 bg-slate-100 overflow-hidden">
                  <img src="/images/schemes/scheme2.jpg" alt="Skill Development" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[#002147] text-xs sm:text-sm mb-1">Skill Development</h3>
                  <div className="text-xs font-black text-[#0284C7]">3,920 learners</div>
                  <p className="text-[11px] text-[#64748B] mt-0.5 mb-3">Trained under programs</p>
                  <a href="/events" className="text-[#D97706] hover:text-[#002147] font-bold text-[11px]">Read details →</a>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all">
                <div className="h-32 bg-slate-100 overflow-hidden">
                  <img src="/images/schemes/scheme3.jpg" alt="Farmer Support" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[#002147] text-xs sm:text-sm mb-1">Farmer Support</h3>
                  <div className="text-xs font-black text-[#EAB308]">820 farmers</div>
                  <p className="text-[11px] text-[#64748B] mt-0.5 mb-3">Agricultural development</p>
                  <a href="/fpo" className="text-[#D97706] hover:text-[#002147] font-bold text-[11px]">Read details →</a>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all">
                <div className="h-32 bg-slate-100 overflow-hidden">
                  <img src="/images/schemes/scheme4.jpg" alt="Health Services" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[#002147] text-xs sm:text-sm mb-1">Health Services</h3>
                  <div className="text-xs font-black text-[#1D4ED8]">95% coverage</div>
                  <p className="text-[11px] text-[#64748B] mt-0.5 mb-3">Primary health initiatives</p>
                  <a href="/citizen-services" className="text-[#D97706] hover:text-[#002147] font-bold text-[11px]">Read details →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 12. One family. One stronger Vizianagaram (Agricultural Green Banner) */}
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-gradient-to-r from-[#14532D] via-[#166534] to-[#15803D] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8">
                  <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-2">
                    One family.<br />One stronger Vizianagaram.
                  </h2>
                  <p className="text-green-100 text-sm sm:text-base max-w-lg mt-3 leading-relaxed">
                    A mission-driven initiative for better opportunities, stronger communities and a brighter future.
                  </p>
                </div>

                <div className="md:col-span-4">
                  <div className="bg-white rounded-2xl p-6 text-center text-[#002147] shadow-xl">
                    <h3 className="font-bold text-xs text-[#64748B] uppercase tracking-wider mb-4">District Empowerment in Numbers</h3>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div>
                        <div className="text-lg font-black text-[#002147]">2,050</div>
                        <div className="text-[10px] text-[#64748B]">Beneficiaries</div>
                      </div>
                      <div>
                        <div className="text-lg font-black text-[#002147]">2,500</div>
                        <div className="text-[10px] text-[#64748B]">Self Help Groups</div>
                      </div>
                      <div>
                        <div className="text-lg font-black text-[#002147]">82%</div>
                        <div className="text-[10px] text-[#64748B]">Coverage</div>
                      </div>
                    </div>
                    {/* Golden Yellow Learn More Button */}
                    <a href="/citizen-services" className="bg-[#FFD22C] hover:bg-[#F59E0B] text-[#0F172A] font-extrabold text-xs px-6 py-2.5 rounded-full shadow transition-colors inline-block w-full">
                      Learn More →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 13. Jump straight to what matters */}
        <section className="py-12 bg-[#FFFDF7] border-t border-[#FDE68A]/60">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-black text-[#002147] mb-1">Jump straight to what matters</h2>
            <p className="text-xs text-[#64748B] mb-6">Quick links to key services, schemes and resources to help you move forward.</p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href="/citizen-services" className="bg-white border border-[#FDE68A] hover:border-[#F59E0B] hover:bg-[#FEF9C3] text-[#002147] font-bold text-xs px-5 py-2.5 rounded-full transition-all shadow-sm">
                Citizen Services →
              </a>
              <a href="/schemes" className="bg-white border border-[#FDE68A] hover:border-[#F59E0B] hover:bg-[#FEF9C3] text-[#002147] font-bold text-xs px-5 py-2.5 rounded-full transition-all shadow-sm">
                Schemes →
              </a>
              <a href="/about/structure" className="bg-white border border-[#FDE68A] hover:border-[#F59E0B] hover:bg-[#FEF9C3] text-[#002147] font-bold text-xs px-5 py-2.5 rounded-full transition-all shadow-sm">
                Departments →
              </a>
              <a href="/pgrs" className="bg-white border border-[#FDE68A] hover:border-[#F59E0B] hover:bg-[#FEF9C3] text-[#002147] font-bold text-xs px-5 py-2.5 rounded-full transition-all shadow-sm">
                Grievances →
              </a>
              <a href="/about/whos-who" className="bg-white border border-[#FDE68A] hover:border-[#F59E0B] hover:bg-[#FEF9C3] text-[#002147] font-bold text-xs px-5 py-2.5 rounded-full transition-all shadow-sm">
                Contact Us →
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 14. Official Deep Navy Footer */}
      <footer className="bg-[#061D3A] text-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-white overflow-hidden flex-shrink-0 shadow-lg border-2 border-white/20">
                <img alt="Government of Andhra Pradesh Emblem" width="48" height="48" className="w-full h-full object-cover" src="/images/ap-emblem.jpg" />
              </div>
              <div>
                <div className="text-gray-400 text-[10px] leading-tight">Government of Andhra Pradesh</div>
                <div className="text-white font-extrabold text-sm leading-tight">VIZIANAGARAM DISTRICT</div>
                <div className="text-[#FFD22C] text-xs font-semibold leading-tight">District Rural Development Agency</div>
              </div>
            </div>
            <p className="text-xs text-gray-400 mb-4 leading-relaxed">
              Empowering rural communities through information, transparency, and digital services. Serving 19.30 lakh citizens across 27 mandals.
            </p>
            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FFD22C] mt-0.5 flex-shrink-0"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Collectorate, Vizianagaram District, Andhra Pradesh – 535002</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FFD22C]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>+91 8922 222221</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FFD22C]"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <span>info@vizianagaram.ap.gov.in</span>
              </div>
            </div>

            {/* Toll-Free Golden Yellow Highlight Badge */}
            <div className="mt-4">
              <a href="tel:18004259889" className="bg-[#FFD22C] hover:bg-[#F59E0B] text-[#002147] font-black text-xs px-5 py-2.5 rounded-full shadow-md inline-flex items-center gap-2 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>1800 425 9889 (Toll Free)</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4 border-b border-gray-700/50 pb-2">Quick Links</h3>
            <ul className="space-y-2 text-xs">
              <li><Link className="hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/"><span className="text-[#FFD22C]">›</span> Home</Link></li>
              <li><a className="hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/about/district"><span className="text-[#FFD22C]">›</span> About District</a></li>
              <li><a className="hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/citizen-services"><span className="text-[#FFD22C]">›</span> Citizen Services</a></li>
              <li><a className="hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/schemes"><span className="text-[#FFD22C]">›</span> Schemes</a></li>
              <li><a className="hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/knowledge-center"><span className="text-[#FFD22C]">›</span> Downloads</a></li>
              <li><a className="hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/media-coverage"><span className="text-[#FFD22C]">›</span> Media</a></li>
              <li><a className="hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/about/whos-who"><span className="text-[#FFD22C]">›</span> Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4 border-b border-gray-700/50 pb-2">Citizen Services</h3>
            <ul className="space-y-2 text-xs">
              <li><a className="hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/pgrs"><span className="text-[#FFD22C]">›</span> Grievance Redressal</a></li>
              <li><a className="hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/citizen-services"><span className="text-[#FFD22C]">›</span> Public Services</a></li>
              <li><a className="hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/ivrs"><span className="text-[#FFD22C]">›</span> RTI Services</a></li>
              <li><a className="hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/events"><span className="text-[#FFD22C]">›</span> Tenders</a></li>
              <li><a className="hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/media-coverage"><span className="text-[#FFD22C]">›</span> Notices</a></li>
              <li><a className="hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="https://vizianagaram.ap.gov.in" target="_blank" rel="noopener noreferrer"><span className="text-[#FFD22C]">›</span> District Portal ↗</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4 border-b border-gray-700/50 pb-2">Follow Us</h3>
            <p className="text-xs text-gray-400 mb-4">Connect with Vizianagaram District on official social channels.</p>
            <div className="flex items-center gap-2 mb-6">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FFD22C] hover:text-[#002147] flex items-center justify-center text-white transition-colors">
                <span className="text-xs font-bold">f</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FFD22C] hover:text-[#002147] flex items-center justify-center text-white transition-colors">
                <span className="text-xs font-bold">yt</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FFD22C] hover:text-[#002147] flex items-center justify-center text-white transition-colors">
                <span className="text-xs font-bold">X</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FFD22C] hover:text-[#002147] flex items-center justify-center text-white transition-colors">
                <span className="text-xs font-bold">in</span>
              </a>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-xs text-gray-300">
              <div className="text-[#FFD22C] font-bold text-xs mb-1">IVRS Toll-Free Support</div>
              <div>Dial <strong className="text-white">1902</strong> anytime for scheme inquiries and complaint status.</div>
            </div>
          </div>
        </div>

        {/* 15. Sub-Footer */}
        <div className="bg-[#021428] border-t border-white/10 py-4 px-4 text-xs text-gray-400">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              © 2026 Vizianagaram District. All Rights Reserved.
            </div>
            <div className="flex items-center gap-4 text-xs">
              <a href="/accessibility" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="/accessibility" className="hover:text-white transition-colors">Terms of Use</a>
              <span>|</span>
              <a href="/sitemap" className="hover:text-white transition-colors">Sitemap</a>
            </div>
            <div className="text-[#0284C7] font-semibold text-xs flex items-center gap-1.5">
              <span>Powered by</span>
              <span className="bg-white text-[#002147] font-black px-1.5 py-0.5 rounded text-[10px] tracking-wider">NIC</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
