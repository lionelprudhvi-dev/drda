import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'About DRDA | District Rural Development Agency, Vizianagaram',
  description: 'Learn about the District Rural Development Agency (DRDA), Vizianagaram – its vision, mission, core mandates, and grassroots community empowerment initiatives.',
};

export default function AboutDRDA() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* 1. Official Top Utility Bar */}
      <header className="sticky top-0 z-50 shadow-md">
        <div className="bg-[#002147] text-white py-1.5 px-4 text-xs font-medium">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 bg-[#FFD22C] text-[#0F172A] font-extrabold text-[10px] px-2 py-0.5 rounded">
                OFFICIAL PORTAL
              </span>
              <span className="hidden sm:inline text-white/80">Government of Andhra Pradesh</span>
            </div>

            <div className="flex items-center gap-4">
              <a href="tel:08922276222" className="hidden sm:flex items-center gap-1 text-white/80 hover:text-[#FFD22C] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                08922-276222
              </a>
              <a href="tel:1902" className="flex items-center gap-1 text-[#FFD22C] font-bold hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                IVRS: 1902
              </a>
              <span className="w-px h-3.5 bg-white/20"></span>
              <button className="flex items-center gap-1 bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded text-[11px] font-semibold transition-colors" title="Switch language">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                తెలుగు
              </button>
            </div>
          </div>
        </div>

        {/* 2. Main Identity Header */}
        <div className="bg-white text-[#002147] px-4 py-3 border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <Link className="flex items-center gap-3 min-w-0" href="/">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white overflow-hidden flex-shrink-0 shadow-md border-2 border-[#E2E8F0]">
                <img alt="Government of Andhra Pradesh Emblem" width="56" height="56" className="w-full h-full object-cover" src="/drda/images/ap-emblem.jpg" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs text-[#475569] font-medium leading-tight">Government of Andhra Pradesh</div>
                <div className="font-black text-sm sm:text-xl text-[#002147] leading-tight tracking-tight">VIZIANAGARAM DISTRICT</div>
                <div className="text-xs text-[#64748B] font-semibold leading-tight">District Rural Development Agency</div>
              </div>
            </Link>
            
            <div className="flex items-center gap-3 flex-shrink-0">
              <a href="https://vizianagaram.ap.gov.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 bg-[#FFD22C] hover:bg-[#F59E0B] text-[#0F172A] font-extrabold text-xs px-4 py-2 rounded-full shadow-sm hover:shadow transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Vizianagaram Maps</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </a>
              <a className="hidden md:flex items-center gap-1.5 bg-[#FFD22C] hover:bg-[#F59E0B] text-[#0F172A] font-extrabold text-xs px-3.5 py-2 rounded-full shadow-sm transition-colors" href="/drda/mart">
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
              <li>
                <Link className="text-xs font-semibold px-3 py-2 text-[#002147] hover:text-[#D97706] hover:bg-[#FEF9C3] rounded-full transition-colors inline-block" href="/">Home</Link>
              </li>
              {/* Active About Dropdown */}
              <li className="relative group">
                <a className="flex items-center gap-1 bg-[#FFD22C] text-[#0F172A] font-extrabold text-xs px-4 py-1.5 rounded-full shadow-sm transition-colors" href="/drda/about/drda">
                  About
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </a>
                <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 w-56 overflow-hidden">
                    <a href="/drda/about/drda" className="block px-4 py-2 text-xs font-bold text-[#002147] bg-[#FEF9C3] hover:text-[#D97706] border-l-4 border-[#002147]">About DRDA</a>
                    <a href="/drda/about/district" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">District Profile</a>
                    <a href="/drda/about/structure" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">Administrative Structure</a>
                    <a href="/drda/about/whos-who" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">Who&#x27;s Who</a>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <a className="flex items-center gap-1 text-xs font-semibold px-3 py-2 text-[#002147] hover:text-[#D97706] hover:bg-[#FEF9C3] rounded-full transition-colors" href="/drda/citizen-services">
                  Citizen Services
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </a>
                <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 w-56 overflow-hidden">
                    <a href="/drda/citizen-services" className="block px-4 py-2 text-xs font-bold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706] border-b border-gray-50">All Citizen Services</a>
                    <a href="/drda/schemes" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">Explore Schemes</a>
                    <a href="/drda/pgrs" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">Share Concern (PGRS)</a>
                    <a href="/drda/ivrs" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">IVRS Helpline 1902</a>
                    <a href="/drda/knowledge-center" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">Knowledge Center</a>
                    <a href="/drda/events" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">Events &amp; Training</a>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <a className="flex items-center gap-1 text-xs font-semibold px-3 py-2 text-[#002147] hover:text-[#D97706] hover:bg-[#FEF9C3] rounded-full transition-colors" href="/drda/schemes">
                  Schemes
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </a>
                <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 w-56 overflow-hidden">
                    <a href="/drda/schemes" className="block px-4 py-2 text-xs font-bold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706] border-b border-gray-50">All Welfare Schemes</a>
                    <a href="/drda/schemes" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">YSR Cheyutha</a>
                    <a href="/drda/schemes" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">YSR Aasara</a>
                    <a href="/drda/schemes" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">Stree Nidhi Credit</a>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <a className="flex items-center gap-1 text-xs font-semibold px-3 py-2 text-[#002147] hover:text-[#D97706] hover:bg-[#FEF9C3] rounded-full transition-colors" href="/drda/livelihood">
                  Livelihoods
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </a>
                <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 w-56 overflow-hidden">
                    <a href="/drda/fpo" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">FPO Network</a>
                    <a href="/drda/livelihood" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">Micro-Enterprises</a>
                    <a href="/drda/mart" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">Manyam Products</a>
                  </div>
                </div>
              </li>
              <li>
                <a className="text-xs font-semibold px-3 py-2 text-[#002147] hover:text-[#D97706] hover:bg-[#FEF9C3] rounded-full transition-colors" href="/drda/media-coverage">Media</a>
              </li>
              <li>
                <a className="text-xs font-semibold px-3 py-2 text-[#002147] hover:text-[#D97706] hover:bg-[#FEF9C3] rounded-full transition-colors" href="/drda/success-stories">Success Stories</a>
              </li>
              <li>
                <a className="text-xs font-semibold px-3 py-2 text-[#002147] hover:text-[#D97706] hover:bg-[#FEF9C3] rounded-full transition-colors" href="/drda/pgrs">Grievances</a>
              </li>
              <li>
                <a className="text-xs font-semibold px-3 py-2 text-[#002147] hover:text-[#D97706] hover:bg-[#FEF9C3] rounded-full transition-colors" href="/drda/dashboard">Dashboard</a>
              </li>
            </ul>

            <a className="flex items-center gap-1.5 bg-[#FFD22C] hover:bg-[#F59E0B] text-[#0F172A] font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-sm transition-colors" href="/drda/mart">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.1 6h17.8"/><path d="M3.4 5.5a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.7a2 2 0 0 0-.4-1.2l-2-2.7A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/></svg>
              <span>Manyam Mart</span>
              <span className="bg-[#002147] text-[#FFD22C] text-[9px] font-bold px-1.5 py-0.5 rounded-full">NEW</span>
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Page Hero Banner with Women Empowerment Photo */}
        <section className="relative bg-gradient-to-br from-[#FFFDF7] via-[#FFFBEB] to-[#FEF3C7] text-[#002147] py-12 sm:py-16 overflow-hidden border-b border-[#FDE68A]">
          {/* Subtle Ambient Light Glows */}
          <div className="absolute -top-10 left-1/4 w-96 h-96 bg-[#FEF08A]/35 rounded-full blur-3xl pointer-events-none z-0"></div>

          {/* Right-Side Women Empowerment Background Image - Smooth Opaque Photographic Transition */}
          <div 
            className="absolute right-0 top-0 bottom-0 w-full md:w-3/4 lg:w-[60%] xl:w-[56%] pointer-events-none overflow-hidden z-0 select-none transition-all duration-700 ease-out"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.35) 22%, rgba(0,0,0,0.85) 42%, black 58%, black 88%, rgba(0,0,0,0.6) 96%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.35) 22%, rgba(0,0,0,0.85) 42%, black 58%, black 88%, rgba(0,0,0,0.6) 96%, transparent 100%)'
            }}
          >
            {/* Sunrise Warmth Glow behind women collective */}
            <div className="absolute right-10 sm:right-24 top-6 w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-[#FFD22C]/70 via-[#F59E0B]/35 to-transparent blur-3xl pointer-events-none z-0"></div>

            {/* Rural Women Collective Photo */}
            <img
              src="/drda/images/women-empowerment.jpg"
              alt="Rural Women Self-Help Groups Empowerment in Vizianagaram"
              className="w-full h-full object-cover object-[center_35%] sm:object-[60%_35%] opacity-90 lg:opacity-95 filter contrast-105 saturate-110 drop-shadow-sm transition-all duration-700 ease-out"
            />

            {/* Bottom Edge Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#FEF3C7] via-[#FEF3C7]/40 to-transparent z-10 pointer-events-none"></div>

            {/* Top Edge Fade */}
            <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-[#FFFDF7]/80 to-transparent z-10 pointer-events-none"></div>

            {/* Mobile Readability Veil: Active on small screens so text letters remain 100% visible and undisturbed */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFFDF7]/95 via-[#FFFDF7]/85 to-[#FFFDF7]/45 sm:hidden z-10 pointer-events-none"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 z-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs text-[#EA580C] font-bold mb-3 uppercase tracking-wider drop-shadow-sm">
                <Link className="hover:underline text-[#002147]" href="/">Home</Link>
                <span>/</span>
                <span className="text-[#EA580C]">About DRDA</span>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-1.5 bg-[#FFD22C] rounded-full"></span>
                <span className="text-xs font-black uppercase tracking-widest text-[#D97706] drop-shadow-sm">Rural Transformation &amp; Empowerment</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002147] tracking-tight leading-tight mb-4 drop-shadow-sm">
                About DRDA
              </h1>

              <p className="text-sm sm:text-base text-[#334155] leading-relaxed font-semibold drop-shadow-sm max-w-xl">
                District Rural Development Agency (DRDA), Vizianagaram — driving rural prosperity through grassroots women collectives, sustainable livelihood creation, and convergent poverty alleviation.
              </p>

              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
                <div className="bg-white/90 backdrop-blur-md border border-[#FDE68A] rounded-xl p-3 shadow-sm">
                  <div className="text-lg font-black text-[#002147]">19,918</div>
                  <div className="text-[11px] text-[#64748B] font-medium">Active SHGs</div>
                </div>
                <div className="bg-white/90 backdrop-blur-md border border-[#FDE68A] rounded-xl p-3 shadow-sm">
                  <div className="text-lg font-black text-[#002147]">1,84,200+</div>
                  <div className="text-[11px] text-[#64748B] font-medium">Rural Women</div>
                </div>
                <div className="bg-white/90 backdrop-blur-md border border-[#FDE68A] rounded-xl p-3 shadow-sm">
                  <div className="text-lg font-black text-[#002147]">15 Mandals</div>
                  <div className="text-[11px] text-[#64748B] font-medium">Full Coverage</div>
                </div>
                <div className="bg-white/90 backdrop-blur-md border border-[#FDE68A] rounded-xl p-3 shadow-sm">
                  <div className="text-lg font-black text-[#002147]">967 VOs</div>
                  <div className="text-[11px] text-[#64748B] font-medium">Village Orgs</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Navigation Strip */}
        <div className="bg-[#FFFDF7] border-b border-[#FDE68A]/60 py-3">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-2">
            <Link href="/about/drda" className="text-xs font-bold px-4 py-1.5 rounded-full bg-[#FFD22C] text-[#0F172A] shadow-sm">
              About DRDA
            </Link>
            <Link href="/about/district" className="text-xs font-semibold px-4 py-1.5 rounded-full border border-gray-200 hover:bg-[#FEF9C3] hover:text-[#002147] transition-colors">
              District Profile
            </Link>
            <Link href="/about/structure" className="text-xs font-semibold px-4 py-1.5 rounded-full border border-gray-200 hover:bg-[#FEF9C3] hover:text-[#002147] transition-colors">
              Administrative Structure
            </Link>
            <Link href="/about/whos-who" className="text-xs font-semibold px-4 py-1.5 rounded-full border border-gray-200 hover:bg-[#FEF9C3] hover:text-[#002147] transition-colors">
              Who&#x27;s Who
            </Link>
            <Link href="/serp" className="text-xs font-semibold px-4 py-1.5 rounded-full border border-gray-200 hover:bg-[#FEF9C3] hover:text-[#002147] transition-colors">
              SERP Corner
            </Link>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
            <div className="bg-[#FFFDF7] rounded-2xl border-2 border-[#FDE68A] p-7 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="w-2 h-full bg-[#FFD22C] absolute left-0 top-0"></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#FEF08A] flex items-center justify-center text-[#D97706]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m10 15 5-3-5-3v6Z"/></svg>
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#EA580C]">Strategic Direction</span>
                  <h2 className="text-2xl font-black text-[#002147]">Our Vision</h2>
                </div>
              </div>
              <p className="text-[#334155] leading-relaxed text-sm sm:text-base font-medium">
                To promote sustainable rural livelihoods, eliminate chronic poverty, and dramatically enhance the quality of life for every rural household across Vizianagaram district through self-governing community institutions, financial self-reliance, and women-led rural enterprises.
              </p>
            </div>

            <div className="bg-[#FFFDF7] rounded-2xl border-2 border-[#FDE68A] p-7 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="w-2 h-full bg-[#EA580C] absolute left-0 top-0"></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#FFEDD5] flex items-center justify-center text-[#EA580C]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#D97706]">Operational Mandate</span>
                  <h2 className="text-2xl font-black text-[#002147]">Our Mission</h2>
                </div>
              </div>
              <p className="text-[#334155] leading-relaxed text-sm sm:text-base font-medium">
                Enable holistic socio-economic empowerment through seamless convergence of state and central welfare schemes. Mobilize rural women into vibrant Self-Help Groups, provide institutional credit linkages, foster micro-entrepreneurship, and deliver doorstep governance to every village.
              </p>
            </div>
          </div>
        </section>

        {/* Roles & Responsibilities Grid */}
        <section className="py-14 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-xs font-black uppercase tracking-widest text-[#D97706] bg-[#FEF08A] px-3 py-1 rounded-full mb-2">
                Core Pillars
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#002147] tracking-tight">Roles &amp; Responsibilities</h2>
              <p className="text-[#64748B] text-sm sm:text-base mt-2">
                DRDA Vizianagaram serves as the district&#x27;s primary nodal agency orchestrating multi-sector rural transformation
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm hover:shadow-md hover:border-[#FFD22C] transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#FEF9C3] text-[#D97706] flex items-center justify-center font-black mb-3">
                  01
                </div>
                <h3 className="font-extrabold text-base text-[#002147] mb-2">Rural Development Schemes</h3>
                <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
                  Executing flagship central and state rural development programs, livelihood infrastructure, community sanitation, and village public assets.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm hover:shadow-md hover:border-[#FFD22C] transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#FEF9C3] text-[#D97706] flex items-center justify-center font-black mb-3">
                  02
                </div>
                <h3 className="font-extrabold text-base text-[#002147] mb-2">Livelihood &amp; Enterprise</h3>
                <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
                  Incubating women-run micro-enterprises, dairy cooperatives, organic agriculture clusters, and establishing marketing channels through Manyam Mart.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm hover:shadow-md hover:border-[#FFD22C] transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#FEF9C3] text-[#D97706] flex items-center justify-center font-black mb-3">
                  03
                </div>
                <h3 className="font-extrabold text-base text-[#002147] mb-2">Women Empowerment</h3>
                <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
                  Mobilizing rural women into 19,918+ Self-Help Groups, Village Organizations, and Mandal Samakhyas, nurturing grassroots leadership and financial literacy.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm hover:shadow-md hover:border-[#FFD22C] transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#FEF9C3] text-[#D97706] flex items-center justify-center font-black mb-3">
                  04
                </div>
                <h3 className="font-extrabold text-base text-[#002147] mb-2">Skill &amp; Youth Placement</h3>
                <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
                  Conducting residential vocational training, DDU-GKY youth skilling, IT and healthcare certifications, and facilitating corporate job placements.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm hover:shadow-md hover:border-[#FFD22C] transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#FEF9C3] text-[#D97706] flex items-center justify-center font-black mb-3">
                  05
                </div>
                <h3 className="font-extrabold text-base text-[#002147] mb-2">Financial Inclusion</h3>
                <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
                  Enabling collateral-free institutional bank linkages, Stree Nidhi credit lines, YSR Vaddi Leni Runalu (zero-interest loans), and micro-insurance.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm hover:shadow-md hover:border-[#FFD22C] transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#FEF9C3] text-[#D97706] flex items-center justify-center font-black mb-3">
                  06
                </div>
                <h3 className="font-extrabold text-base text-[#002147] mb-2">Welfare Monitoring</h3>
                <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
                  Digital tracking and verification of major welfare schemes including YSR Aasara, YSR Cheyutha, and social security pensions through real-time dashboards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Numbers Section */}
        <section className="py-14 bg-white border-y border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <span className="inline-block text-xs font-black uppercase tracking-widest text-[#D97706] bg-[#FEF08A] px-3 py-1 rounded-full mb-2">
              Ground Reality
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#002147] tracking-tight mb-2">Our Cumulative Impact</h2>
            <p className="text-[#64748B] text-sm max-w-xl mx-auto mb-10">Measurable milestones achieved across rural communities in Vizianagaram</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-[#FFFDF7] rounded-2xl border-2 border-[#FDE68A] px-4 py-8 shadow-sm">
                <div className="text-3xl sm:text-4xl font-black mb-2 text-[#002147]">19,918</div>
                <div className="text-[#64748B] text-xs sm:text-sm font-semibold">Active SHG Groups</div>
              </div>
              <div className="bg-[#FFFDF7] rounded-2xl border-2 border-[#FDE68A] px-4 py-8 shadow-sm">
                <div className="text-3xl sm:text-4xl font-black mb-2 text-[#EA580C]">1,84,200+</div>
                <div className="text-[#64748B] text-xs sm:text-sm font-semibold">Women Beneficiaries</div>
              </div>
              <div className="bg-[#FFFDF7] rounded-2xl border-2 border-[#FDE68A] px-4 py-8 shadow-sm">
                <div className="text-3xl sm:text-4xl font-black mb-2 text-[#002147]">15</div>
                <div className="text-[#64748B] text-xs sm:text-sm font-semibold">Mandals Covered</div>
              </div>
              <div className="bg-[#FFFDF7] rounded-2xl border-2 border-[#FDE68A] px-4 py-8 shadow-sm">
                <div className="text-3xl sm:text-4xl font-black mb-2 text-[#D97706]">1,248</div>
                <div className="text-[#64748B] text-xs sm:text-sm font-semibold">Villages Reached</div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Action Navigation Grid */}
        <section className="py-12 bg-gradient-to-r from-[#FFFBEB] via-[#FEF08A]/40 to-[#FFFBEB]">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-lg font-black text-[#002147] mb-6">Explore Key Portals &amp; Sections</h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/about/district" className="inline-flex items-center gap-2 bg-white hover:bg-[#FFD22C] text-[#002147] font-bold text-xs px-5 py-2.5 rounded-full border border-gray-200 shadow-sm transition-all">
                <span>District Profile</span>
                <span className="text-[#D97706]">→</span>
              </Link>
              <Link href="/about/structure" className="inline-flex items-center gap-2 bg-white hover:bg-[#FFD22C] text-[#002147] font-bold text-xs px-5 py-2.5 rounded-full border border-gray-200 shadow-sm transition-all">
                <span>Organizational Structure</span>
                <span className="text-[#D97706]">→</span>
              </Link>
              <Link href="/about/whos-who" className="inline-flex items-center gap-2 bg-white hover:bg-[#FFD22C] text-[#002147] font-bold text-xs px-5 py-2.5 rounded-full border border-gray-200 shadow-sm transition-all">
                <span>Who&#x27;s Who Directory</span>
                <span className="text-[#D97706]">→</span>
              </Link>
              <Link href="/schemes" className="inline-flex items-center gap-2 bg-white hover:bg-[#FFD22C] text-[#002147] font-bold text-xs px-5 py-2.5 rounded-full border border-gray-200 shadow-sm transition-all">
                <span>Welfare Schemes</span>
                <span className="text-[#D97706]">→</span>
              </Link>
              <Link href="/pgrs" className="inline-flex items-center gap-2 bg-white hover:bg-[#FFD22C] text-[#002147] font-bold text-xs px-5 py-2.5 rounded-full border border-gray-200 shadow-sm transition-all">
                <span>Lodge Grievance</span>
                <span className="text-[#D97706]">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Official 4-Column Deep Navy Footer */}
      <footer className="bg-[#002147] text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-white overflow-hidden flex-shrink-0 shadow-lg border-2 border-white/20">
                <img alt="Government of Andhra Pradesh Emblem" width="48" height="48" className="w-full h-full object-cover" src="/drda/images/ap-emblem.jpg" />
              </div>
              <div>
                <div className="text-gray-400 text-[10px] leading-tight">Government of Andhra Pradesh</div>
                <div className="text-white font-extrabold text-sm leading-tight">VIZIANAGARAM DISTRICT</div>
                <div className="text-[#FFD22C] text-xs font-semibold leading-tight">District Rural Development Agency</div>
              </div>
            </div>
            <p className="text-xs text-gray-400 mb-4 leading-relaxed">
              District Rural Development Agency (DRDA), Collectorate Compound, Vizianagaram, Andhra Pradesh - 535002.
            </p>
            <div className="text-xs text-gray-400 space-y-1">
              <div>Phone: +91 8922 276222</div>
              <div>Email: pd-drda-vzm@ap.gov.in</div>
            </div>
            <div className="mt-4 inline-flex items-center gap-2 bg-[#FFD22C] text-[#0F172A] font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>1800 425 9889</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-extrabold text-xs uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFD22C]"></span>
              Quick Links
            </h4>
            <ul className="text-xs space-y-2 text-gray-300">
              <li><Link className="hover:text-[#FFD22C] transition-colors" href="/">Home</Link></li>
              <li><Link className="hover:text-[#FFD22C] transition-colors" href="/about/drda">About Us</Link></li>
              <li><Link className="hover:text-[#FFD22C] transition-colors" href="/about/district">District Profile</Link></li>
              <li><Link className="hover:text-[#FFD22C] transition-colors" href="/about/structure">Administrative Structure</Link></li>
              <li><Link className="hover:text-[#FFD22C] transition-colors" href="/about/whos-who">Who&#x27;s Who</Link></li>
              <li><Link className="hover:text-[#FFD22C] transition-colors" href="/citizen-services">Citizen Services</Link></li>
              <li><Link className="hover:text-[#FFD22C] transition-colors" href="/dashboard">Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-extrabold text-xs uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFD22C]"></span>
              Citizen Services
            </h4>
            <ul className="text-xs space-y-2 text-gray-300">
              <li><Link className="hover:text-[#FFD22C] transition-colors" href="/pgrs">Public Grievances (PGRS)</Link></li>
              <li><Link className="hover:text-[#FFD22C] transition-colors" href="/ivrs">IVRS Helpline 1902</Link></li>
              <li><Link className="hover:text-[#FFD22C] transition-colors" href="/schemes">YSR Cheyutha &amp; Aasara</Link></li>
              <li><Link className="hover:text-[#FFD22C] transition-colors" href="/fpo">FPO Network</Link></li>
              <li><Link className="hover:text-[#FFD22C] transition-colors" href="/knowledge-center">Downloads &amp; Guidelines</Link></li>
              <li><Link className="hover:text-[#FFD22C] transition-colors" href="/feedback">Feedback Form</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-extrabold text-xs uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFD22C]"></span>
              External Portals
            </h4>
            <ul className="text-xs space-y-2 text-gray-300 mb-5">
              <li><a className="hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="https://vizianagaram.ap.gov.in" target="_blank" rel="noopener noreferrer"><span className="text-[#FFD22C]">›</span> Vizianagaram Portal ↗</a></li>
              <li><a className="hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="https://www.ap.gov.in" target="_blank" rel="noopener noreferrer"><span className="text-[#FFD22C]">›</span> Government of AP ↗</a></li>
              <li><a className="hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="https://www.serp.ap.gov.in" target="_blank" rel="noopener noreferrer"><span className="text-[#FFD22C]">›</span> SERP AP ↗</a></li>
              <li><a className="hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="https://meeseva.ap.gov.in" target="_blank" rel="noopener noreferrer"><span className="text-[#FFD22C]">›</span> MeeSeva Portal ↗</a></li>
            </ul>

            <a href="tel:1902" className="inline-flex items-center gap-2 bg-[#FFD22C] hover:bg-[#F59E0B] text-[#0F172A] font-extrabold text-xs px-4 py-2.5 rounded-full shadow transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>Call Helpline: 1902</span>
            </a>
          </div>
        </div>

        <div className="border-t border-[#002147] bg-[#021428] text-gray-400 text-xs py-4">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>© 2026 Vizianagaram District, Andhra Pradesh. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <a href="/drda/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <span className="text-gray-600">•</span>
              <a href="/drda/terms" className="hover:text-white transition-colors">Terms of Use</a>
              <span className="text-gray-600">•</span>
              <a href="/drda/sitemap" className="hover:text-white transition-colors">Sitemap</a>
            </div>
            <div className="text-[11px] text-[#FFD22C] font-semibold">Designed for Andhra Pradesh Citizens</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
