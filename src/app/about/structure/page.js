import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Administrative Structure | DRDA Vizianagaram District',
  description: 'Administrative hierarchy, governance framework, and operational wings of District Rural Development Agency (DRDA), Vizianagaram.',
};

export default function AdministrativeStructure() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#002147]">
      {/* Official Government Portal Header */}
      <header className="sticky top-0 z-50 shadow-md">
        {/* 1. Helplines Strip */}
        <div className="bg-[#002147] text-white py-1.5 px-4 text-xs font-medium">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline text-white/80">Andhra Pradesh Citizen Portal</span>
              <span className="hidden md:inline text-white/40">|</span>
              <span className="text-[#FFD22C] font-semibold">Toll Free: 1800 425 9889</span>
            </div>
            <div className="flex items-center gap-3">
              <a href="tel:08954220123" className="hidden sm:flex items-center gap-1 text-white/90 hover:text-[#FFD22C] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>08954-220123</span>
              </a>
              <span className="hidden sm:inline text-white/40">|</span>
              <a href="tel:1902" className="flex items-center gap-1 text-white/90 hover:text-[#FFD22C] transition-colors">
                <span className="bg-[#EA580C] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">IVRS</span>
                <span>1902</span>
              </a>
              <span className="text-white/40">|</span>
              <button className="flex items-center gap-1 text-white/90 hover:text-[#FFD22C] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                <span>తెలుగు</span>
              </button>
            </div>
          </div>
        </div>

        {/* 2. Main White Branding Bar */}
        <div className="bg-white text-[#002147] px-4 py-3 border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <Link className="flex items-center gap-3 min-w-0" href="/drda/">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white overflow-hidden flex-shrink-0 shadow-md border-2 border-[#E2E8F0]">
                <img alt="Government of Andhra Pradesh Emblem" width="56" height="56" className="w-full h-full object-cover" src="/drda/images/ap-emblem.jpg" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] sm:text-xs text-[#475569] font-medium leading-tight">Government of Andhra Pradesh</div>
                <div className="font-black text-sm sm:text-xl text-[#002147] leading-tight tracking-tight">VIZIANAGARAM DISTRICT</div>
                <div className="text-xs text-[#64748B] font-semibold leading-tight">District Rural Development Agency</div>
              </div>
            </Link>
            
            <div className="flex items-center gap-3 flex-shrink-0">
              <a href="https://vizianagaram.ap.gov.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 bg-[#FFD22C] hover:bg-[#F59E0B] text-[#0F172A] font-extrabold text-xs px-4 py-2 rounded-full shadow-sm hover:shadow transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Vizianagaram Maps</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
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
                <Link className="text-xs font-semibold px-3 py-2 text-[#002147] hover:text-[#D97706] hover:bg-[#FEF9C3] rounded-full transition-colors inline-block" href="/drda/">Home</Link>
              </li>
              {/* Active About Dropdown */}
              <li className="relative group">
                <a className="flex items-center gap-1 bg-[#FFD22C] text-[#0F172A] font-extrabold text-xs px-4 py-1.5 rounded-full shadow-sm transition-colors" href="/drda/about/drda">
                  About
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </a>
                <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 w-56 overflow-hidden">
                    <a href="/drda/about/drda" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">About DRDA</a>
                    <a href="/drda/about/district" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">District Profile</a>
                    <a href="/drda/about/structure" className="block px-4 py-2 text-xs font-bold text-[#002147] bg-[#FEF9C3] hover:text-[#D97706] border-l-4 border-[#002147]">Administrative Structure</a>
                    <a href="/drda/about/whos-who" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">Who&#x27;s Who</a>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <a className="flex items-center gap-1 text-xs font-semibold px-3 py-2 text-[#002147] hover:text-[#D97706] hover:bg-[#FEF9C3] rounded-full transition-colors" href="/drda/citizen-services">
                  Citizen Services
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </a>
                <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 w-52 overflow-hidden">
                    <a href="/drda/schemes" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">Explore Schemes</a>
                    <a href="/drda/knowledge-center" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">Guidelines &amp; Manuals</a>
                    <a href="https://www.myscheme.gov.in" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">myScheme Portal ↗</a>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <a className="flex items-center gap-1 text-xs font-semibold px-3 py-2 text-[#002147] hover:text-[#D97706] hover:bg-[#FEF9C3] rounded-full transition-colors" href="/drda/fpo">
                  Livelihoods
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </a>
                <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 w-56 overflow-hidden">
                    <a href="/drda/fpo" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">FPO Network (15 Mandals)</a>
                    <a href="/drda/success-stories" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">Women Entrepreneurship</a>
                    <a href="/drda/citizen-services" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">One Family One Entrepreneur</a>
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

            {/* Mobile Readability Veil */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFFDF7]/95 via-[#FFFDF7]/85 to-[#FFFDF7]/45 sm:hidden z-10 pointer-events-none"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 z-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs text-[#EA580C] font-bold mb-3 uppercase tracking-wider drop-shadow-sm">
                <Link className="hover:underline text-[#002147]" href="/drda/">Home</Link>
                <span>/</span>
                <Link className="hover:underline text-[#002147]" href="/drda/about/drda">About</Link>
                <span>/</span>
                <span className="text-[#EA580C]">Administrative Structure</span>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-1.5 bg-[#FFD22C] rounded-full"></span>
                <span className="text-xs font-black uppercase tracking-widest text-[#D97706] drop-shadow-sm">Institutional Governance</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002147] tracking-tight leading-tight mb-4 drop-shadow-sm">
                Administrative Structure
              </h1>

              <p className="text-sm sm:text-base text-[#334155] leading-relaxed font-semibold drop-shadow-sm max-w-xl">
                The operational hierarchy, executive leadership, and multi-tier community coordination framework of District Rural Development Agency (DRDA), Vizianagaram.
              </p>

              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
                <div className="bg-white/90 backdrop-blur-md border border-[#FDE68A] rounded-xl p-3 shadow-sm">
                  <div className="text-lg font-black text-[#002147]">1 Project Director</div>
                  <div className="text-[11px] text-[#64748B] font-medium">Executive Head</div>
                </div>
                <div className="bg-white/90 backdrop-blur-md border border-[#FDE68A] rounded-xl p-3 shadow-sm">
                  <div className="text-lg font-black text-[#002147]">4 Wings</div>
                  <div className="text-[11px] text-[#64748B] font-medium">Functional DPMs</div>
                </div>
                <div className="bg-white/90 backdrop-blur-md border border-[#FDE68A] rounded-xl p-3 shadow-sm">
                  <div className="text-lg font-black text-[#002147]">15 Mandals</div>
                  <div className="text-[11px] text-[#64748B] font-medium">Block Managers</div>
                </div>
                <div className="bg-white/90 backdrop-blur-md border border-[#FDE68A] rounded-xl p-3 shadow-sm">
                  <div className="text-lg font-black text-[#002147]">19,918 SHGs</div>
                  <div className="text-[11px] text-[#64748B] font-medium">Grassroots Teams</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Navigation Strip */}
        <div className="bg-[#FFFDF7] border-b border-[#FDE68A]/60 py-3">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-2">
            <Link href="/drda/about/drda" className="text-xs font-semibold px-4 py-1.5 rounded-full border border-gray-200 hover:bg-[#FEF9C3] hover:text-[#002147] transition-colors">
              About DRDA
            </Link>
            <Link href="/drda/about/district" className="text-xs font-semibold px-4 py-1.5 rounded-full border border-gray-200 hover:bg-[#FEF9C3] hover:text-[#002147] transition-colors">
              District Profile
            </Link>
            <Link href="/drda/about/structure" className="text-xs font-bold px-4 py-1.5 rounded-full bg-[#FFD22C] text-[#0F172A] shadow-sm">
              Administrative Structure
            </Link>
            <Link href="/drda/about/whos-who" className="text-xs font-semibold px-4 py-1.5 rounded-full border border-gray-200 hover:bg-[#FEF9C3] hover:text-[#002147] transition-colors">
              Who&#x27;s Who
            </Link>
          </div>
        </div>

        {/* Interactive Org Tree Section */}
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <div className="w-8 h-1 bg-[#FFD22C] rounded-full mx-auto mb-2"></div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#002147] mb-2">Institutional Hierarchy Tree</h2>
              <p className="text-xs sm:text-sm text-[#64748B] max-w-xl mx-auto">
                From district policy direction down to grassroots village execution — a synchronized public administration network.
              </p>
            </div>

            {/* Tree Flow */}
            <div className="flex flex-col items-center">
              
              {/* Level 1: Apex Governance */}
              <div className="w-full max-w-md bg-[#002147] text-white rounded-2xl p-5 text-center shadow-xl border-2 border-[#FFD22C] relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFD22C] text-[#0F172A] text-[10px] font-black px-3 py-0.5 rounded-full uppercase tracking-wider shadow">
                  Apex District Authority
                </span>
                <div className="text-base sm:text-lg font-black text-white">District Collector &amp; District Magistrate</div>
                <div className="text-xs text-[#FFD22C] font-bold mt-1">Chairman, General Body &amp; Executive Committee</div>
                <div className="text-[11px] text-gray-300 mt-2">Overall administrative supervision, inter-departmental convergence &amp; sanctioning</div>
              </div>

              {/* Connector line */}
              <div className="w-1 h-8 bg-[#002147]"></div>

              {/* Level 2: Executive Head */}
              <div className="w-full max-w-md bg-white border-2 border-[#002147] rounded-2xl p-5 text-center shadow-lg relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#002147] text-[#FFD22C] text-[10px] font-black px-3 py-0.5 rounded-full uppercase tracking-wider">
                  Executive Head
                </span>
                <div className="text-base sm:text-lg font-black text-[#002147]">Project Director (DRDA)</div>
                <div className="text-xs text-[#EA580C] font-extrabold mt-0.5">Smt. Ch. Prabhavathi</div>
                <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed">
                  Head of DRDA Vizianagaram; executes district poverty reduction strategies, SERP guidelines, and livelihood missions.
                </p>
              </div>

              {/* Connector line */}
              <div className="w-1 h-8 bg-[#002147]"></div>

              {/* Level 3: Additional Leadership & Finance */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
                <div className="bg-[#FFFDF7] border-2 border-[#FDE68A] rounded-2xl p-4 text-center shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#FEF9C3] text-[#D97706] font-black flex items-center justify-center mx-auto mb-2 text-xs">APD</div>
                  <div className="font-extrabold text-[#002147] text-sm">Additional Project Director</div>
                  <div className="text-xs text-[#64748B] mt-0.5">Operational Coordination &amp; Review</div>
                </div>

                <div className="bg-[#FFFDF7] border-2 border-[#FDE68A] rounded-2xl p-4 text-center shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#FEF9C3] text-[#D97706] font-black flex items-center justify-center mx-auto mb-2 text-xs">FO</div>
                  <div className="font-extrabold text-[#002147] text-sm">District Finance Officer</div>
                  <div className="text-xs text-[#64748B] mt-0.5">Budget, Accounts &amp; Statutory Audit</div>
                </div>
              </div>

              {/* Connector line with split */}
              <div className="w-1 h-8 bg-[#64748B]"></div>
              
              {/* Level 4: Functional Wings (District Programme Managers - DPMs) */}
              <div className="w-full">
                <div className="text-center mb-3">
                  <span className="bg-[#002147] text-white text-[11px] font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    District Programme Managers (DPMs) — Functional Wings
                  </span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Wing 1 */}
                  <div className="bg-white border border-[#E2E8F0] hover:border-[#FFD22C] rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-xl bg-[#FEF9C3] flex items-center justify-center text-[#D97706] mx-auto mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    </div>
                    <div className="font-extrabold text-[#002147] text-sm">DPM – NRLM &amp; IB</div>
                    <div className="text-xs text-[#D97706] font-bold mt-0.5">Institution Building</div>
                    <p className="text-[11px] text-[#64748B] mt-1.5 leading-tight">SHG mobilization, Village Organisations &amp; Mandal Samakhyas</p>
                  </div>

                  {/* Wing 2 */}
                  <div className="bg-white border border-[#E2E8F0] hover:border-[#FFD22C] rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] flex items-center justify-center text-[#0284C7] mx-auto mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                    </div>
                    <div className="font-extrabold text-[#002147] text-sm">DPM – Livelihoods</div>
                    <div className="text-xs text-[#0284C7] font-bold mt-0.5">Farm &amp; Non-Farm</div>
                    <p className="text-[11px] text-[#64748B] mt-1.5 leading-tight">15 FPO networks, cashew/millet clusters &amp; micro-enterprises</p>
                  </div>

                  {/* Wing 3 */}
                  <div className="bg-white border border-[#E2E8F0] hover:border-[#FFD22C] rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-xl bg-[#DCFCE7] flex items-center justify-center text-[#15803D] mx-auto mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                    </div>
                    <div className="font-extrabold text-[#002147] text-sm">DPM – Financial Inclusion</div>
                    <div className="text-xs text-[#15803D] font-bold mt-0.5">Credit &amp; Insurance</div>
                    <p className="text-[11px] text-[#64748B] mt-1.5 leading-tight">Bank linkages, Stree Nidhi, YSR Aasara &amp; Cheyutha credit</p>
                  </div>

                  {/* Wing 4 */}
                  <div className="bg-white border border-[#E2E8F0] hover:border-[#FFD22C] rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-xl bg-[#F3E8FF] flex items-center justify-center text-[#7E22CE] mx-auto mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                    </div>
                    <div className="font-extrabold text-[#002147] text-sm">DPM – Skills &amp; Training</div>
                    <div className="text-xs text-[#7E22CE] font-bold mt-0.5">Youth Placements</div>
                    <p className="text-[11px] text-[#64748B] mt-1.5 leading-tight">DDU-GKY centres, vocational training &amp; job drives</p>
                  </div>
                </div>
              </div>

              {/* Connector line */}
              <div className="w-1 h-8 bg-[#64748B]"></div>

              {/* Level 5: Mandal Field Administration */}
              <div className="w-full bg-[#FFFDF7] border-2 border-[#FDE68A] rounded-2xl p-5 shadow-sm">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <div className="text-xs font-black uppercase tracking-wider text-[#D97706]">Mandal Tier Operations</div>
                    <div className="text-lg font-black text-[#002147]">15 Block Programme Managers (BPMs) &amp; APMs</div>
                    <div className="text-xs text-[#64748B] mt-0.5">Stationed in each Mandal Parishad Development Office (MPDO) across all 15 mandals</div>
                  </div>
                  <div className="bg-[#FFD22C] text-[#0F172A] font-extrabold text-xs px-4 py-2 rounded-full shadow-sm flex-shrink-0">
                    15 Mandals Covered 100%
                  </div>
                </div>
              </div>

              {/* Connector line */}
              <div className="w-1 h-8 bg-[#64748B]"></div>

              {/* Level 6: Cluster & Village Community Network */}
              <div className="w-full bg-[#002147] text-white rounded-2xl p-6 shadow-xl border-t-4 border-[#FFD22C]">
                <div className="text-center mb-6">
                  <div className="text-xs font-black uppercase tracking-widest text-[#FFD22C]">Grassroots Community Network</div>
                  <div className="text-xl sm:text-2xl font-black text-white mt-1">Village Organisations &amp; Self Help Groups</div>
                  <p className="text-xs text-gray-300 max-w-xl mx-auto mt-1">
                    The core pillar of rural development: community-owned and community-managed institutions reaching the last mile.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                    <div className="text-2xl font-black text-[#FFD22C]">200+</div>
                    <div className="text-xs font-bold text-white mt-0.5">Cluster Coordinators (CCs)</div>
                    <div className="text-[10px] text-gray-300 mt-1">On-ground mentors guiding village federations</div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                    <div className="text-2xl font-black text-[#FFD22C]">967</div>
                    <div className="text-xs font-bold text-white mt-0.5">Village Organisations (VOs)</div>
                    <div className="text-[10px] text-gray-300 mt-1">Gram Panchayat level federation of SHGs</div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                    <div className="text-2xl font-black text-[#FFD22C]">19,918</div>
                    <div className="text-xs font-bold text-white mt-0.5">Self Help Groups (SHGs)</div>
                    <div className="text-[10px] text-gray-300 mt-1">Over 2.1 Lakh rural women empowered</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Governance & Convergence Principles */}
        <section className="py-14 bg-[#FFFDF7] border-t border-[#FDE68A]/60">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <div className="w-8 h-1 bg-[#FFD22C] rounded-full mx-auto mb-2"></div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#002147]">Three Pillars of Administrative Delivery</h2>
              <p className="text-xs sm:text-sm text-[#64748B] max-w-xl mx-auto mt-1">
                How DRDA ensures transparent, accountable, and citizen-first governance.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-[#FEF9C3] flex items-center justify-center text-[#D97706] mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h3 className="font-extrabold text-[#002147] text-base mb-2">Statutory Governance</h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  DRDA operates under the Society Registration Act with a General Body headed by the District Collector and an Executive Committee that reviews scheme implementation on a monthly basis.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-[#E0F2FE] flex items-center justify-center text-[#0284C7] mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </div>
                <h3 className="font-extrabold text-[#002147] text-base mb-2">Multi-Tier Field Operations</h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Block Programme Managers operate directly in mandals with MPDOs, while Cluster Coordinators support Gram Panchayats to ensure every eligible rural family is brought under welfare coverage.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-[#DCFCE7] flex items-center justify-center text-[#15803D] mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/></svg>
                </div>
                <h3 className="font-extrabold text-[#002147] text-base mb-2">Inter-Agency Convergence</h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  DRDA anchors seamless convergence with Agriculture, Animal Husbandry, Civil Supplies, Lead District Bank, and SERP AP to multiply the economic impact of state welfare initiatives.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Official Deep Navy Footer */}
      <footer className="bg-[#061D3A] text-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <li><Link className="hover:text-[#FFD22C] transition-colors" href="/drda/">Home</Link></li>
              <li><Link className="hover:text-[#FFD22C] transition-colors" href="/drda/about/drda">About Us</Link></li>
              <li><Link className="hover:text-[#FFD22C] transition-colors" href="/drda/about/district">District Profile</Link></li>
              <li><Link className="hover:text-[#FFD22C] transition-colors" href="/drda/about/structure">Administrative Structure</Link></li>
              <li><Link className="hover:text-[#FFD22C] transition-colors" href="/drda/about/whos-who">Who&#x27;s Who</Link></li>
              <li><Link className="hover:text-[#FFD22C] transition-colors" href="/drda/citizen-services">Citizen Services</Link></li>
              <li><Link className="hover:text-[#FFD22C] transition-colors" href="/drda/dashboard">Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-extrabold text-xs uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFD22C]"></span>
              Citizen Services
            </h4>
            <ul className="text-xs space-y-2 text-gray-300">
              <li><Link className="hover:text-[#FFD22C] transition-colors" href="/drda/pgrs">Public Grievances (PGRS)</Link></li>
              <li><Link className="hover:text-[#FFD22C] transition-colors" href="/drda/ivrs">IVRS Helpline 1902</Link></li>
              <li><Link className="hover:text-[#FFD22C] transition-colors" href="/drda/schemes">YSR Cheyutha &amp; Aasara</Link></li>
              <li><Link className="hover:text-[#FFD22C] transition-colors" href="/drda/fpo">FPO Network</Link></li>
              <li><Link className="hover:text-[#FFD22C] transition-colors" href="/drda/knowledge-center">Downloads &amp; Guidelines</Link></li>
              <li><Link className="hover:text-[#FFD22C] transition-colors" href="/drda/feedback">Feedback Form</Link></li>
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
