'use client';

import React, { useState } from 'react';

// Data for Charts
const SHG_GROWTH_DATA = [
  { year: '2020', shgs: 14200, members: 158000 },
  { year: '2021', shgs: 15800, members: 172000 },
  { year: '2022', shgs: 17200, members: 190000 },
  { year: '2023', shgs: 18600, members: 207000 },
  { year: '2024', shgs: 19500, members: 216000 },
  { year: '2025', shgs: 19918, members: 220759 },
];

const BENEFICIARY_DISTRIBUTION = [
  { name: 'Women / SHG (NRLM)', value: 38, color: '#DB2777' },
  { name: 'FPO Farmers', value: 22, color: '#2E7D32' },
  { name: 'Women Entrepreneurs', value: 18, color: '#B45309' },
  { name: 'Tribal Welfare', value: 14, color: '#7C3AED' },
  { name: 'Others', value: 8, color: '#FFC107' },
];

const PROGRAM_ACHIEVEMENT = [
  { p: 'W.Entrep.', t: 3645, a: 4030, name: 'Women Entrep.' },
  { p: 'PMEGP', t: 100, a: 125, name: 'PMEGP' },
  { p: 'Seed Cap.', t: 230, a: 223, name: 'Seed Capital' },
  { p: 'PMFME', t: 100, a: 34, name: 'PMFME' },
];

const FPO_GROWTH_DATA = [
  { year: '2022', fpos: 8, members: 18500 },
  { year: '2023', fpos: 11, members: 23200 },
  { year: '2024', fpos: 14, members: 28100 },
  { year: '2025', fpos: 15, members: 30430 },
];

export default function DashboardPage() {
  const [hoveredShg, setHoveredShg] = useState(null);
  const [hoveredDonut, setHoveredDonut] = useState(null);
  const [hoveredProg, setHoveredProg] = useState(null);
  const [hoveredFpo, setHoveredFpo] = useState(null);
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <>
      {/* Top Header */}
      <header className="sticky top-0 z-50 shadow-lg">
        {/* Helpline Strip */}
        <div className="bg-[#002147] text-white py-1.5 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-end gap-3">
            <a href="tel:08954220123" className="hidden sm:flex items-center gap-1 text-xs text-white/80 hover:text-[#F59E0B] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> 08954-220123
            </a>
            <a href="tel:1902" className="flex items-center gap-1 text-xs text-white/80 hover:text-[#F59E0B] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> IVRS: 1902
            </a>
            <span className="w-px h-4 bg-white/20"></span>
            <div className="flex items-center gap-1">
              <a className="relative w-8 h-8 flex items-center justify-center text-white/80 hover:text-[#F59E0B] transition-colors" aria-label="Wishlist" href="/mart/wishlist">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart" aria-hidden="true"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
              </a>
              <button className="relative w-8 h-8 flex items-center justify-center text-white/80 hover:text-[#F59E0B] transition-colors" aria-label="Open cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart" aria-hidden="true"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
              </button>
            </div>
            <button className="flex items-center gap-1.5 bg-white/15 hover:bg-white/25 text-white text-xs font-semibold px-2.5 py-1.5 rounded-full border border-white/20 transition-colors notranslate" aria-label="Switch to తెలుగు" title="Switch to తెలుగు">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg><span>తెలుగు</span>
            </button>
          </div>
        </div>

        {/* Branding Bar */}
        <div className="bg-white text-[#002147] px-4 py-3 border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <a className="flex items-center gap-3 min-w-0" href="/">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white overflow-hidden flex-shrink-0 shadow-md border-2 border-[#E2E8F0]">
                <img alt="Government of Andhra Pradesh Emblem" width="56" height="56" decoding="async" className="w-full h-full object-cover" src="/images/ap-emblem.jpg" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] sm:text-xs text-[#475569] font-medium leading-tight">Government of Andhra Pradesh</div>
                <div className="font-black text-sm sm:text-xl text-[#002147] leading-tight tracking-tight">District Rural Development Agency</div>
                <div className="text-xs text-[#64748B] font-semibold leading-tight">Vizianagaram District</div>
              </div>
            </a>
            <div className="flex items-center gap-2 flex-shrink-0">
              <a className="md:hidden flex items-center gap-1.5 bg-[#FFD22C] text-[#0F172A] font-bold text-xs px-3 py-2 rounded-full shadow animate-mart-glow" href="/mart">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag animate-mart-bob" aria-hidden="true"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg> Mart
              </a>
              <button className="md:hidden text-[#002147] p-1 flex-shrink-0" aria-label="Toggle menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu" aria-hidden="true"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:block bg-white border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
            <ul className="flex items-center">
              <li className="relative">
                <a className="flex items-center gap-1 text-xs font-medium px-3 py-3.5 transition-colors whitespace-nowrap relative text-[#002147] hover:text-[#D97706] hover:bg-[#FEF9C3] rounded-full" href="/">Home</a>
              </li>
              <li className="relative group">
                <a className="flex items-center gap-1 text-xs font-medium px-3 py-3.5 transition-colors whitespace-nowrap relative text-[#002147] group-hover:text-[#D97706] group-hover:bg-[#FEF9C3] rounded-full" href="/about/drda">
                  About
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down opacity-70" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
                </a>
                <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 w-56 overflow-hidden">
    <a href="/about/drda" className="block px-4 py-2.5 text-xs font-bold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706] border-b border-gray-50">About DRDA</a>
    <a href="/about/district" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">District Profile</a>
    <a href="/about/structure" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">Administrative Structure</a>
    <a href="/about/whos-who" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">Who&#x27;s Who</a>
  </div>
</div>
              </li>
              <li className="relative group">
                <a className="flex items-center gap-1 text-xs font-medium px-3 py-3.5 transition-colors whitespace-nowrap relative text-[#002147] group-hover:text-[#D97706] group-hover:bg-[#FEF9C3] rounded-full" href="/citizen-services">
                  Citizen Services
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down opacity-70" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
                </a>
                <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 w-64">
                    <a href="/citizen-services" className="block px-4 py-2 text-sm font-bold text-[#002147] hover:bg-[#FEF9C3] transition-colors border-b border-gray-50">All Citizen Services</a>
                    <div className="relative group/sub1">
                      <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-default">
                        Schemes & Learning
                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </div>
                      <div className="absolute left-full top-0 opacity-0 invisible group-hover/sub1:opacity-100 group-hover/sub1:visible transition-all duration-200 z-50">
                        <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 w-48 ml-1">
                          <a href="/schemes" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FEF9C3] transition-colors">Explore Schemes</a>
                          <a href="/knowledge-center" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FEF9C3] transition-colors">Knowledge Center</a>
                          <a href="/events" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FEF9C3] transition-colors">Events & Training</a>
                        </div>
                      </div>
                    </div>
                    <div className="relative group/sub2">
                      <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-default">
                        Grievance & Support
                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </div>
                      <div className="absolute left-full top-0 opacity-0 invisible group-hover/sub2:opacity-100 group-hover/sub2:visible transition-all duration-200 z-50">
                        <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 w-56 ml-1">
                          <a href="/pgrs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FEF9C3] transition-colors">Share Your Concern (PGRS)</a>
                          <a href="/ivrs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FEF9C3] transition-colors">IVRS Services (1902)</a>
                          <a href="/feedback" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FEF9C3] transition-colors">Feedback</a>
                        </div>
                      </div>
                    </div>
                    <div className="relative group/sub3">
                      <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-default">
                        Information & Transparency
                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </div>
                      <div className="absolute left-full top-0 opacity-0 invisible group-hover/sub3:opacity-100 group-hover/sub3:visible transition-all duration-200 z-50">
                        <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 w-48 ml-1">
                          <a href="/fpo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FEF9C3] transition-colors">FPO Network</a>
                          <a href="/community-tourism" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FEF9C3] transition-colors">Community Tourism</a>
                        </div>
                      </div>
                    </div>
                    <a href="/contact" className="block px-4 py-2 text-sm font-bold text-[#002147] hover:bg-[#FEF9C3] transition-colors border-t border-gray-50">Contact Directory</a>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <a className="flex items-center gap-1 text-xs font-medium px-3 py-3.5 transition-colors whitespace-nowrap relative text-[#002147] group-hover:text-[#D97706] group-hover:bg-[#FEF9C3] rounded-full" href="/schemes">
                  Schemes
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down opacity-70" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
                </a>
                <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 w-48 overflow-hidden">
                    <a href="/schemes" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FEF9C3] hover:text-[#002147] transition-colors">Explore Schemes</a>
                    <a href="/knowledge-center" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FEF9C3] hover:text-[#002147] transition-colors">Knowledge Center</a>
                    <a href="/events" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FEF9C3] hover:text-[#002147] transition-colors">Events & Training</a>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <a className="flex items-center gap-1 text-xs font-medium px-3 py-3.5 transition-colors whitespace-nowrap relative text-[#002147] group-hover:text-[#D97706] group-hover:bg-[#FEF9C3] rounded-full" href="/livelihood">
                  Livelihoods
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down opacity-70" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
                </a>
                <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2.5 w-60 overflow-hidden">
                    <a href="/fpo" className="block px-5 py-2.5 text-sm font-semibold text-[#002147] hover:bg-[#FEF9C3] hover:text-[#002147] transition-colors">FPOs</a>
                    <a href="/women-entrepreneurship" className="block px-5 py-2.5 text-sm font-semibold text-[#002147] hover:bg-[#FEF9C3] hover:text-[#002147] transition-colors">Women Entrepreneurship</a>
                    <a href="/one-family-one-entrepreneur" className="block px-5 py-2.5 text-sm font-semibold text-[#002147] hover:bg-[#FEF9C3] hover:text-[#002147] transition-colors">One Family One Entrepreneur</a>
                    <a href="/livelihood" className="block px-5 py-2.5 text-sm font-semibold text-[#002147] hover:bg-[#FEF9C3] hover:text-[#002147] transition-colors">Livelihood Projects</a>
                    <a href="/community-tourism" className="block px-5 py-2.5 text-sm font-semibold text-[#002147] hover:bg-[#FEF9C3] hover:text-[#002147] transition-colors">Community Tourism</a>
                    <a href="/serp" className="block px-5 py-2.5 text-sm font-semibold text-[#002147] hover:bg-[#FEF9C3] hover:text-[#002147] transition-colors">SERP Corner</a>
                  </div>
                </div>
              </li>
              <li className="relative">
                <a className="flex items-center gap-1 text-xs font-medium px-3 py-3.5 transition-colors whitespace-nowrap relative text-[#002147] hover:text-[#D97706] hover:bg-[#FEF9C3] rounded-full" href="/press-releases#media-coverage">Media Coverage</a>
              </li>
              <li className="relative">
                <a className="flex items-center gap-1 text-xs font-medium px-3 py-3.5 transition-colors whitespace-nowrap relative text-[#002147] hover:text-[#D97706] hover:bg-[#FEF9C3] rounded-full" href="/success-stories">Success Stories</a>
              </li>
              <li className="relative">
                <a className="flex items-center gap-1 text-xs font-medium px-3 py-3.5 transition-colors whitespace-nowrap relative text-[#FFD22C]" href="/dashboard">
                  Dashboard
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#F59E0B] rounded-full"></span>
                </a>
              </li>
            </ul>
            <a className="group flex items-center gap-2 bg-[#FFD22C] hover:bg-[#F59E0B] text-[#0F172A] font-extrabold text-sm pl-3 pr-4 py-1.5 my-1.5 rounded-full shadow-md animate-mart-glow transition-colors" href="/mart">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag animate-mart-bob" aria-hidden="true"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
              <span>Manyam Mart</span>
              <span className="flex items-center gap-0.5 bg-[#002147] text-[#FFD22C] text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles" aria-hidden="true"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg> NEW
              </span>
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="min-h-screen">
          {/* Hero Banner */}
          <div className="bg-gradient-to-br from-[#FFFDF7] via-[#FFFBEB] to-[#FEF3C7] text-[#002147] py-12 sm:py-16 relative overflow-hidden border-b border-[#FDE68A]">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-xs text-[#EA580C] font-bold mb-2 flex items-center gap-2">
                <a className="hover:text-white" href="/">Home</a> <span>/</span><span>Dashboard</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-[#002147] mb-3 tracking-tight">Transparency Dashboard</h1>
              <p className="text-[#334155] max-w-2xl font-medium">
                Official program KPIs and impact metrics for DRDA Vizianagaram District — real data, zero placeholders.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FACC15] rounded-full animate-pulse"></span>
                <span className="text-[#EA580C] text-xs">Data updated: May 2026 | Source: DRDA Vizianagaram District MIS</span>
              </div>
            </div>
          </div>

          {/* KPI Strip 1: District Profile */}
          <section className="py-6 bg-[#1E293B]">
            <div className="max-w-7xl mx-auto px-4">
              <p className="text-white/60 text-xs uppercase tracking-widest mb-3 font-semibold">District Profile</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-white/15 rounded-xl p-4 text-center text-white border border-white/20">
                  <div className="text-2xl font-extrabold leading-tight">9.25L</div>
                  <div className="text-xs mt-1 opacity-85">Total Population</div>
                </div>
                <div className="bg-white/15 rounded-xl p-4 text-center text-white border border-white/20">
                  <div className="text-2xl font-extrabold leading-tight">15</div>
                  <div className="text-xs mt-1 opacity-85">Mandals</div>
                </div>
                <div className="bg-white/15 rounded-xl p-4 text-center text-white border border-white/20">
                  <div className="text-2xl font-extrabold leading-tight">967</div>
                  <div className="text-xs mt-1 opacity-85">Villages</div>
                </div>
                <div className="bg-white/15 rounded-xl p-4 text-center text-white border border-white/20">
                  <div className="text-2xl font-extrabold leading-tight">3,659</div>
                  <div className="text-xs mt-1 opacity-85">Area (Sq Km)</div>
                </div>
              </div>
            </div>
          </section>

          {/* KPI Strip 2: SERP Ecosystem */}
          <section className="py-6 bg-[#FFD22C] text-[#0F172A]">
            <div className="max-w-7xl mx-auto px-4">
              <p className="text-white/60 text-xs uppercase tracking-widest mb-3 font-semibold">SERP Ecosystem</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-white/15 rounded-xl p-4 text-center text-white border border-white/20">
                  <div className="text-2xl font-extrabold leading-tight">19,918</div>
                  <div className="text-xs mt-1 opacity-85">SHGs</div>
                </div>
                <div className="bg-white/15 rounded-xl p-4 text-center text-white border border-white/20">
                  <div className="text-2xl font-extrabold leading-tight">2,20,759</div>
                  <div className="text-xs mt-1 opacity-85">SHG Members</div>
                </div>
                <div className="bg-white/15 rounded-xl p-4 text-center text-white border border-white/20">
                  <div className="text-2xl font-extrabold leading-tight">567</div>
                  <div className="text-xs mt-1 opacity-85">Village Orgs</div>
                </div>
                <div className="bg-white/15 rounded-xl p-4 text-center text-white border border-white/20">
                  <div className="text-2xl font-extrabold leading-tight">15</div>
                  <div className="text-xs mt-1 opacity-85">Mandal Samakhyas</div>
                </div>
              </div>
            </div>
          </section>

          {/* KPI Strip 3: Women Entrepreneurship */}
          <section className="py-6 bg-[#DB2777]">
            <div className="max-w-7xl mx-auto px-4">
              <p className="text-white/60 text-xs uppercase tracking-widest mb-3 font-semibold">Women Entrepreneurship</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-white/15 rounded-xl p-4 text-center text-white border border-white/20">
                  <div className="text-2xl font-extrabold leading-tight">4,030</div>
                  <div className="text-xs mt-1 opacity-85">Units Achieved</div>
                </div>
                <div className="bg-white/15 rounded-xl p-4 text-center text-white border border-white/20">
                  <div className="text-2xl font-extrabold leading-tight">110.56%</div>
                  <div className="text-xs mt-1 opacity-85">Achievement %</div>
                </div>
                <div className="bg-white/15 rounded-xl p-4 text-center text-white border border-white/20">
                  <div className="text-2xl font-extrabold leading-tight">125</div>
                  <div className="text-xs mt-1 opacity-85">PMEGP Units</div>
                </div>
                <div className="bg-white/15 rounded-xl p-4 text-center text-white border border-white/20">
                  <div className="text-2xl font-extrabold leading-tight">223</div>
                  <div className="text-xs mt-1 opacity-85">Seed Capital Units</div>
                </div>
              </div>
            </div>
          </section>

          {/* KPI Strip 4: FPO Ecosystem */}
          <section className="py-6 bg-[#2E7D32]">
            <div className="max-w-7xl mx-auto px-4">
              <p className="text-white/60 text-xs uppercase tracking-widest mb-3 font-semibold">FPO Ecosystem</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-white/15 rounded-xl p-4 text-center text-white border border-white/20">
                  <div className="text-2xl font-extrabold leading-tight">15</div>
                  <div className="text-xs mt-1 opacity-85">FPOs</div>
                </div>
                <div className="bg-white/15 rounded-xl p-4 text-center text-white border border-white/20">
                  <div className="text-2xl font-extrabold leading-tight">30,430</div>
                  <div className="text-xs mt-1 opacity-85">FPG Members</div>
                </div>
                <div className="bg-white/15 rounded-xl p-4 text-center text-white border border-white/20">
                  <div className="text-2xl font-extrabold leading-tight">921</div>
                  <div className="text-xs mt-1 opacity-85">New FPGs</div>
                </div>
                <div className="bg-white/15 rounded-xl p-4 text-center text-white border border-white/20">
                  <div className="text-2xl font-extrabold leading-tight">₹9.35Cr</div>
                  <div className="text-xs mt-1 opacity-85">Available Funds</div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Target vs Achievement Table */}
          <section className="py-14 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-8">
                <span className="inline-block bg-[#FEFCE8] text-[#002147] border border-[#FDE68A] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                  Program Achievements
                </span>
                <h2 className="text-2xl font-bold text-[#002147]">Target vs Achievement</h2>
              </div>
              <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#FFD22C] text-[#0F172A] text-white">
                        <th className="text-left px-4 py-3 font-semibold">Program</th>
                        <th className="text-right px-4 py-3 font-semibold">Target</th>
                        <th className="text-right px-4 py-3 font-semibold">Achieved</th>
                        <th className="text-right px-4 py-3 font-semibold hidden sm:table-cell">%</th>
                        <th className="px-4 py-3 hidden md:table-cell">Progress</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-4 py-3 font-medium text-[#002147]">Women Entrepreneurship</td>
                        <td className="px-4 py-3 text-right text-[#64748B]">3645</td>
                        <td className="px-4 py-3 text-right font-bold text-[#002147]">4030</td>
                        <td className="px-4 py-3 text-right hidden sm:table-cell">
                          <span className="bg-[#DB2777] text-white text-xs font-bold px-2 py-0.5 rounded-full">110.56%</span>
                        </td>
                        <td className="px-4 py-3 hidden md:table-cell">
                          <div className="w-full bg-[#E2E8F0] rounded-full h-2">
                            <div className="bg-[#DB2777] h-2 rounded-full" style={{ width: '100%' }}></div>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-[#F8FAFC]">
                        <td className="px-4 py-3 font-medium text-[#002147]">PMEGP</td>
                        <td className="px-4 py-3 text-right text-[#64748B]">100</td>
                        <td className="px-4 py-3 text-right font-bold text-[#002147]">125</td>
                        <td className="px-4 py-3 text-right hidden sm:table-cell">
                          <span className="bg-[#FFD22C] text-[#0F172A] text-white text-xs font-bold px-2 py-0.5 rounded-full">125%</span>
                        </td>
                        <td className="px-4 py-3 hidden md:table-cell">
                          <div className="w-full bg-[#E2E8F0] rounded-full h-2">
                            <div className="bg-[#FFD22C] text-[#0F172A] h-2 rounded-full" style={{ width: '100%' }}></div>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 font-medium text-[#002147]">PMFME</td>
                        <td className="px-4 py-3 text-right text-[#64748B]">100</td>
                        <td className="px-4 py-3 text-right font-bold text-[#002147]">34</td>
                        <td className="px-4 py-3 text-right hidden sm:table-cell">
                          <span className="bg-[#F59E0B] text-white text-xs font-bold px-2 py-0.5 rounded-full">34%</span>
                        </td>
                        <td className="px-4 py-3 hidden md:table-cell">
                          <div className="w-full bg-[#E2E8F0] rounded-full h-2">
                            <div className="bg-[#F59E0B] h-2 rounded-full" style={{ width: '34%' }}></div>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-[#F8FAFC]">
                        <td className="px-4 py-3 font-medium text-[#002147]">Seed Capital</td>
                        <td className="px-4 py-3 text-right text-[#64748B]">230</td>
                        <td className="px-4 py-3 text-right font-bold text-[#002147]">223</td>
                        <td className="px-4 py-3 text-right hidden sm:table-cell">
                          <span className="bg-[#7C3AED] text-white text-xs font-bold px-2 py-0.5 rounded-full">96.96%</span>
                        </td>
                        <td className="px-4 py-3 hidden md:table-cell">
                          <div className="w-full bg-[#E2E8F0] rounded-full h-2">
                            <div className="bg-[#7C3AED] h-2 rounded-full" style={{ width: '96.96%' }}></div>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 font-medium text-[#002147]">Seed Capital Recovery</td>
                        <td className="px-4 py-3 text-right text-[#64748B]">100%</td>
                        <td className="px-4 py-3 text-right font-bold text-[#002147]">98.59%</td>
                        <td className="px-4 py-3 text-right hidden sm:table-cell">
                          <span className="bg-[#2E7D32] text-white text-xs font-bold px-2 py-0.5 rounded-full">98.59%</span>
                        </td>
                        <td className="px-4 py-3 hidden md:table-cell">
                          <div className="w-full bg-[#E2E8F0] rounded-full h-2">
                            <div className="bg-[#2E7D32] h-2 rounded-full" style={{ width: '98.59%' }}></div>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-[#F8FAFC]">
                        <td className="px-4 py-3 font-medium text-[#002147]">Bamboo Mission</td>
                        <td className="px-4 py-3 text-right text-[#64748B]">100%</td>
                        <td className="px-4 py-3 text-right font-bold text-[#002147]">100%</td>
                        <td className="px-4 py-3 text-right hidden sm:table-cell">
                          <span className="bg-[#059669] text-white text-xs font-bold px-2 py-0.5 rounded-full">100%</span>
                        </td>
                        <td className="px-4 py-3 hidden md:table-cell">
                          <div className="w-full bg-[#E2E8F0] rounded-full h-2">
                            <div className="bg-[#059669] h-2 rounded-full" style={{ width: '100%' }}></div>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 font-medium text-[#002147]">IFC Farmers Benefitted</td>
                        <td className="px-4 py-3 text-right text-[#64748B]">3,000</td>
                        <td className="px-4 py-3 text-right font-bold text-[#002147]">3003</td>
                        <td className="px-4 py-3 text-right hidden sm:table-cell">
                          <span className="bg-[#D97706] text-white text-xs font-bold px-2 py-0.5 rounded-full">100%</span>
                        </td>
                        <td className="px-4 py-3 hidden md:table-cell">
                          <div className="w-full bg-[#E2E8F0] rounded-full h-2">
                            <div className="bg-[#D97706] h-2 rounded-full" style={{ width: '100%' }}></div>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-[#F8FAFC]">
                        <td className="px-4 py-3 font-medium text-[#002147]">Community Tourism Employment</td>
                        <td className="px-4 py-3 text-right text-[#64748B]">10</td>
                        <td className="px-4 py-3 text-right font-bold text-[#002147]">10</td>
                        <td className="px-4 py-3 text-right hidden sm:table-cell">
                          <span className="bg-[#DB2777] text-white text-xs font-bold px-2 py-0.5 rounded-full">100%</span>
                        </td>
                        <td className="px-4 py-3 hidden md:table-cell">
                          <div className="w-full bg-[#E2E8F0] rounded-full h-2">
                            <div className="bg-[#DB2777] h-2 rounded-full" style={{ width: '100%' }}></div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Cashew Processing Value Chain Snapshot */}
          <section className="py-12 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold text-[#002147]">Cashew Processing – Value Chain Snapshot</h2>
                <p className="text-[#64748B] text-sm">Vizianagaram Market Yard</p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <div className="bg-[#FFFBEB] border-[#FDE68A] border rounded-xl p-4 text-center min-w-[150px]">
                  <div className="font-bold text-[#002147]">42,669 Kg</div>
                  <div className="text-xs text-[#64748B] mt-0.5">Raw Cashew Procured</div>
                </div>
                <span className="text-2xl text-[#64748B] font-bold">→</span>
                <div className="bg-[#E3F2FD] border-[#90CAF9] border rounded-xl p-4 text-center min-w-[150px]">
                  <div className="font-bold text-[#002147]">₹64.85 Lakhs</div>
                  <div className="text-xs text-[#64748B] mt-0.5">Procurement Cost</div>
                </div>
                <span className="text-2xl text-[#64748B] font-bold">→</span>
                <div className="bg-[#FEFCE8] border-[#A5D6A7] border rounded-xl p-4 text-center min-w-[150px]">
                  <div className="font-bold text-[#002147]">10,152 Kg</div>
                  <div className="text-xs text-[#64748B] mt-0.5">Processed Output</div>
                </div>
                <span className="text-2xl text-[#64748B] font-bold">→</span>
                <div className="bg-[#FEFCE8] border-[#A5D6A7] border rounded-xl p-4 text-center min-w-[150px]">
                  <div className="font-bold text-[#002147]">₹77.64 Lakhs</div>
                  <div className="text-xs text-[#64748B] mt-0.5">Total Sales</div>
                </div>
                <span className="text-2xl text-[#64748B] font-bold">→</span>
                <div className="bg-[#FFFBEB] border-[#FDE68A] border rounded-xl p-4 text-center min-w-[150px]">
                  <div className="font-bold text-[#002147]">₹1.03 Lakhs</div>
                  <div className="text-xs text-[#64748B] mt-0.5">Net Profit</div>
                </div>
              </div>
              <div className="text-center mt-4">
                <span className="bg-[#DB2777] text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-sm">
                  20 Tribal Youth Employed
                </span>
              </div>
            </div>
          </section>

          {/* Section: Interactive Program Analytics Charts */}
          <section className="py-12 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4 space-y-8">
              {/* Row 1: SHG Growth Bar Chart & Beneficiary Donut Chart */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Chart 1: SHG Formation Growth */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E2E8F0]">
                  <h3 className="font-bold text-[#002147] mb-0.5">SHG Formation Growth – Vizianagaram District</h3>
                  <p className="text-[#64748B] text-xs mb-4">Number of SHGs formed 2020–2025</p>

                  <div className="relative h-[240px] w-full">
                    {/* SVG Bar Chart */}
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 500 240">
                      {/* Grid Lines */}
                      {[0, 5000, 10000, 15000, 20000].map((val, i) => {
                        const y = 200 - (val / 22000) * 175;
                        return (
                          <g key={i}>
                            <line x1="45" y1={y} x2="480" y2={y} stroke="#E2E8F0" strokeDasharray="3 3" />
                            <text x="38" y={y + 3} textAnchor="end" fontSize="10" fill="#94A3B8">
                              {val.toLocaleString()}
                            </text>
                          </g>
                        );
                      })}

                      {/* Bars */}
                      {SHG_GROWTH_DATA.map((d, i) => {
                        const barWidth = 42;
                        const x = 70 + i * 68;
                        const barHeight = (d.shgs / 22000) * 175;
                        const y = 200 - barHeight;
                        const isHov = hoveredShg === i;

                        return (
                          <g
                            key={d.year}
                            className="cursor-pointer transition-all duration-200"
                            onMouseEnter={() => setHoveredShg(i)}
                            onMouseLeave={() => setHoveredShg(null)}
                          >
                            <rect
                              x={x}
                              y={y}
                              width={barWidth}
                              height={barHeight}
                              fill={isHov ? '#78350F' : '#B45309'}
                              rx="4"
                              ry="4"
                              className="transition-colors duration-150"
                            />
                            <text
                              x={x + barWidth / 2}
                              y="218"
                              textAnchor="middle"
                              fontSize="11"
                              fill="#64748B"
                              fontWeight="500"
                            >
                              {d.year}
                            </text>
                            {/* Value label on top */}
                            <text
                              x={x + barWidth / 2}
                              y={y - 6}
                              textAnchor="middle"
                              fontSize="10"
                              fill={isHov ? '#B45309' : '#64748B'}
                              fontWeight={isHov ? '700' : '500'}
                            >
                              {d.shgs.toLocaleString()}
                            </text>
                          </g>
                        );
                      })}
                    </svg>

                    {/* Tooltip */}
                    {hoveredShg !== null && (
                      <div className="absolute top-2 right-4 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg pointer-events-none">
                        <span className="font-semibold">{SHG_GROWTH_DATA[hoveredShg].year}:</span> {SHG_GROWTH_DATA[hoveredShg].shgs.toLocaleString()} SHGs
                      </div>
                    )}
                  </div>
                </div>

                {/* Chart 2: Beneficiary Distribution by Program */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E2E8F0]">
                  <h3 className="font-bold text-[#002147] mb-0.5">Beneficiary Distribution by Program</h3>
                  <p className="text-[#64748B] text-xs mb-4">Percentage of beneficiaries across programs</p>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 h-[240px]">
                    {/* Donut Chart SVG */}
                    <div className="relative w-[180px] h-[180px] flex-shrink-0">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        {BENEFICIARY_DISTRIBUTION.reduce((acc, seg, idx) => {
                          const prevCumulative = idx === 0 ? 0 : acc[idx - 1].cumulative + acc[idx - 1].value;
                          acc.push({ ...seg, cumulative: prevCumulative });
                          return acc;
                        }, []).map((seg, idx) => {
                          const strokeDasharray = `${seg.value * 2.83} 283`;
                          const strokeDashoffset = `-${seg.cumulative * 2.83}`;
                          const isHov = hoveredDonut === idx;

                            return (
                              <circle
                                key={seg.name}
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                                stroke={seg.color}
                                strokeWidth={isHov ? "16" : "13"}
                                strokeDasharray={strokeDasharray}
                                strokeDashoffset={strokeDashoffset}
                                className="cursor-pointer transition-all duration-200"
                                onMouseEnter={() => setHoveredDonut(idx)}
                                onMouseLeave={() => setHoveredDonut(null)}
                              />
                            );
                          })}
                      </svg>
                      {/* Center label */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <span className="text-xl font-extrabold text-[#002147]">
                          {hoveredDonut !== null ? `${BENEFICIARY_DISTRIBUTION[hoveredDonut].value}%` : '100%'}
                        </span>
                        <span className="text-[10px] text-[#64748B] uppercase tracking-wider font-semibold">
                          {hoveredDonut !== null ? 'Share' : 'Coverage'}
                        </span>
                      </div>
                    </div>

                    {/* Donut Legend */}
                    <div className="flex-1 space-y-2 text-xs w-full">
                      {BENEFICIARY_DISTRIBUTION.map((item, idx) => (
                        <div
                          key={item.name}
                          className={`flex items-center justify-between px-2 py-1 rounded transition-colors cursor-pointer ${
                            hoveredDonut === idx ? 'bg-gray-100 font-bold' : ''
                          }`}
                          onMouseEnter={() => setHoveredDonut(idx)}
                          onMouseLeave={() => setHoveredDonut(null)}
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></span>
                            <span className="text-[#334155]">{item.name}</span>
                          </div>
                          <span className="font-extrabold" style={{ color: item.color }}>{item.value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2: Target vs Achieved & FPO Member Growth */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Chart 3: Program Achievement – Target vs Achieved */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E2E8F0]">
                  <div className="flex items-center justify-between mb-0.5">
                    <h3 className="font-bold text-[#002147]">Program Achievement – Target vs Achieved</h3>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="flex items-center gap-1 text-[#64748B]">
                        <span className="w-2.5 h-2.5 bg-[#E2E8F0] rounded-sm"></span> Target
                      </span>
                      <span className="flex items-center gap-1 text-[#002147] font-semibold">
                        <span className="w-2.5 h-2.5 bg-[#FFD22C] text-[#0F172A] rounded-sm"></span> Achieved
                      </span>
                    </div>
                  </div>
                  <p className="text-[#64748B] text-xs mb-4">Key program data for Vizianagaram District</p>

                  <div className="relative h-[240px] w-full">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 500 240">
                      {/* Grid Lines */}
                      {[0, 1000, 2000, 3000, 4000].map((val) => {
                        const y = 200 - (val / 4500) * 175;
                        return (
                          <g key={val}>
                            <line x1="45" y1={y} x2="480" y2={y} stroke="#E2E8F0" strokeDasharray="3 3" />
                            <text x="38" y={y + 3} textAnchor="end" fontSize="10" fill="#94A3B8">
                              {val}
                            </text>
                          </g>
                        );
                      })}

                      {/* Grouped Bars */}
                      {PROGRAM_ACHIEVEMENT.map((d, i) => {
                        const groupX = 65 + i * 105;
                        const barWidth = 24;
                        const tHeight = (d.t / 4500) * 175;
                        const tY = 200 - tHeight;
                        const aHeight = (d.a / 4500) * 175;
                        const aY = 200 - aHeight;
                        const isHov = hoveredProg === i;

                        return (
                          <g
                            key={d.p}
                            className="cursor-pointer"
                            onMouseEnter={() => setHoveredProg(i)}
                            onMouseLeave={() => setHoveredProg(null)}
                          >
                            {/* Target Bar */}
                            <rect
                              x={groupX}
                              y={tY}
                              width={barWidth}
                              height={tHeight}
                              fill="#E2E8F0"
                              rx="3"
                              ry="3"
                            />
                            {/* Achieved Bar */}
                            <rect
                              x={groupX + barWidth + 4}
                              y={aY}
                              width={barWidth}
                              height={aHeight}
                              fill={isHov ? '#78350F' : '#B45309'}
                              rx="3"
                              ry="3"
                              className="transition-colors duration-150"
                            />
                            {/* X-axis label */}
                            <text
                              x={groupX + barWidth + 2}
                              y="218"
                              textAnchor="middle"
                              fontSize="11"
                              fill="#64748B"
                              fontWeight="500"
                            >
                              {d.p}
                            </text>
                          </g>
                        );
                      })}
                    </svg>

                    {hoveredProg !== null && (
                      <div className="absolute top-2 right-4 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg pointer-events-none">
                        <span className="font-bold">{PROGRAM_ACHIEVEMENT[hoveredProg].name}</span>: Target {PROGRAM_ACHIEVEMENT[hoveredProg].t.toLocaleString()} | Achieved {PROGRAM_ACHIEVEMENT[hoveredProg].a.toLocaleString()}
                      </div>
                    )}
                  </div>
                </div>

                {/* Chart 4: FPO Member Growth */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E2E8F0]">
                  <div className="flex items-center justify-between mb-0.5">
                    <h3 className="font-bold text-[#002147]">FPO Member Growth</h3>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="flex items-center gap-1 text-[#002147] font-semibold">
                        <span className="w-2.5 h-2.5 bg-[#2E7D32] rounded-full"></span> FPO Members
                      </span>
                      <span className="flex items-center gap-1 text-[#FFD22C] font-semibold">
                        <span className="w-2.5 h-2.5 bg-[#F59E0B] rounded-full"></span> No. of FPOs
                      </span>
                    </div>
                  </div>
                  <p className="text-[#64748B] text-xs mb-4">Total FPO members across all 15 FPOs</p>

                  <div className="relative h-[240px] w-full">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 500 240">
                      {/* Grid Lines */}
                      {[0, 10000, 20000, 30000].map((val) => {
                        const y = 200 - (val / 35000) * 175;
                        return (
                          <g key={val}>
                            <line x1="50" y1={y} x2="480" y2={y} stroke="#E2E8F0" strokeDasharray="3 3" />
                            <text x="42" y={y + 3} textAnchor="end" fontSize="10" fill="#94A3B8">
                              {val.toLocaleString()}
                            </text>
                          </g>
                        );
                      })}

                      {/* Line 1: FPO Members */}
                      <path
                        d="M 100,107 L 210,84 L 320,60 L 430,48"
                        fill="none"
                        stroke="#2E7D32"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      {/* Line 2: FPOs count (scaled visually) */}
                      <path
                        d="M 100,160 L 210,145 L 320,130 L 430,125"
                        fill="none"
                        stroke="#FFC107"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      {/* Points */}
                      {FPO_GROWTH_DATA.map((d, i) => {
                        const x = 100 + i * 110;
                        const yMem = 200 - (d.members / 35000) * 175;
                        const yFpo = 200 - (d.fpos / 20) * 100;
                        const isHov = hoveredFpo === i;

                        return (
                          <g
                            key={d.year}
                            className="cursor-pointer"
                            onMouseEnter={() => setHoveredFpo(i)}
                            onMouseLeave={() => setHoveredFpo(null)}
                          >
                            <circle cx={x} cy={yMem} r={isHov ? 7 : 5} fill="#2E7D32" stroke="white" strokeWidth="2" />
                            <circle cx={x} cy={yFpo} r={isHov ? 6 : 4} fill="#FFC107" stroke="white" strokeWidth="2" />
                            <text x={x} y="218" textAnchor="middle" fontSize="11" fill="#64748B" fontWeight="500">
                              {d.year}
                            </text>
                          </g>
                        );
                      })}
                    </svg>

                    {hoveredFpo !== null && (
                      <div className="absolute top-2 right-4 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg pointer-events-none">
                        <span className="font-bold">{FPO_GROWTH_DATA[hoveredFpo].year}:</span> {FPO_GROWTH_DATA[hoveredFpo].members.toLocaleString()} Members · {FPO_GROWTH_DATA[hoveredFpo].fpos} FPOs
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Row 3: SHG Members Growth Line Chart */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E2E8F0]">
                <div className="flex items-center justify-between mb-0.5">
                  <h3 className="font-bold text-[#002147]">SHG Members Growth – 2020 to 2025</h3>
                  <span className="flex items-center gap-1.5 text-xs text-[#DB2777] font-semibold">
                    <span className="w-2.5 h-2.5 bg-[#DB2777] rounded-full"></span> SHG Members
                  </span>
                </div>
                <p className="text-[#64748B] text-xs mb-4">Total SHG members in Vizianagaram District reaching 2,20,759</p>

                <div className="relative h-[220px] w-full">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 700 220">
                    {/* Grid Lines */}
                    {[140000, 160000, 180000, 200000, 220000].map((val) => {
                      const y = 180 - ((val - 140000) / 90000) * 150;
                      return (
                        <g key={val}>
                          <line x1="60" y1={y} x2="680" y2={y} stroke="#E2E8F0" strokeDasharray="3 3" />
                          <text x="52" y={y + 3} textAnchor="end" fontSize="10" fill="#94A3B8">
                            {val.toLocaleString()}
                          </text>
                        </g>
                      );
                    })}

                    {/* Gradient under line */}
                    <defs>
                      <linearGradient id="shgGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#DB2777" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#DB2777" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    <path
                      d="M 90,150 L 205,127 L 320,97 L 435,68 L 550,53 L 665,45 L 665,180 L 90,180 Z"
                      fill="url(#shgGradient)"
                    />

                    {/* Line */}
                    <path
                      d="M 90,150 L 205,127 L 320,97 L 435,68 L 550,53 L 665,45"
                      fill="none"
                      stroke="#DB2777"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* Dots */}
                    {SHG_GROWTH_DATA.map((d, i) => {
                      const x = 90 + i * 115;
                      const y = 180 - ((d.members - 140000) / 90000) * 150;
                      const isHov = hoveredMember === i;

                      return (
                        <g
                          key={d.year}
                          className="cursor-pointer"
                          onMouseEnter={() => setHoveredMember(i)}
                          onMouseLeave={() => setHoveredMember(null)}
                        >
                          <circle cx={x} cy={y} r={isHov ? 7 : 5} fill="#DB2777" stroke="white" strokeWidth="2" />
                          <text x={x} y="200" textAnchor="middle" fontSize="11" fill="#64748B" fontWeight="500">
                            {d.year}
                          </text>
                          <text x={x} y={y - 8} textAnchor="middle" fontSize="10" fill={isHov ? '#DB2777' : '#94A3B8'} fontWeight="600">
                            {d.members.toLocaleString()}
                          </text>
                        </g>
                      );
                    })}
                  </svg>

                  {hoveredMember !== null && (
                    <div className="absolute top-2 right-4 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg pointer-events-none">
                      <span className="font-bold">{SHG_GROWTH_DATA[hoveredMember].year}:</span> {SHG_GROWTH_DATA[hoveredMember].members.toLocaleString()} SHG Members
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Dark Footer */}
      <footer className="bg-[#061D3A] text-gray-400">
        {/* Helplines Strip */}
        <div className="bg-[#DC2626] text-white py-2 px-4">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[10px] sm:text-xs font-semibold">
            <span className="opacity-80">📞 Helplines:</span>
            <a href="tel:1902" className="flex items-center gap-1 hover:text-yellow-300 transition-colors whitespace-nowrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> 1902 (Free)
            </a>
            <a href="tel:08954220123" className="flex items-center gap-1 hover:text-yellow-300 transition-colors whitespace-nowrap hidden sm:flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> 08954-220123
            </a>
            <a href="tel:18004250808" className="flex items-center gap-1 hover:text-yellow-300 transition-colors whitespace-nowrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> Toll Free: 1800-425-0808
            </a>
          </div>
        </div>

        {/* 4 Column Directory */}
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-full bg-white overflow-hidden flex-shrink-0 shadow-lg border-2 border-white/20">
                <img alt="Government of Andhra Pradesh Emblem" loading="lazy" width="56" height="56" className="w-full h-full object-cover" src="/images/ap-emblem.jpg" />
              </div>
              <div>
                <div className="text-gray-400 text-[10px] leading-tight">Government of Andhra Pradesh</div>
                <div className="text-white font-bold text-sm leading-tight">District Rural Development Agency</div>
                <div className="text-[#FFD22C] text-xs font-semibold leading-tight">Vizianagaram District</div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-3 leading-relaxed">
              Empowering rural communities through information, transparency, and digital services. Serving 9.25 lakh citizens across 15 mandals and 967 villages.
            </p>
            <p className="text-xs text-[#FFD22C] font-medium italic leading-relaxed">
              “Information to Every Citizen, Opportunity to Every Household, Development for Every Village.”
            </p>
            <div className="mt-4 space-y-1.5">
              <div className="flex items-start gap-2 text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin text-[#FFD22C] mt-0.5 flex-shrink-0" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>DRDA Office, Collectorate Complex, Vizianagaram, Vizianagaram District, AP – 535003</span>
              </div>
              <a href="tel:08954220123" className="flex items-center gap-2 text-xs hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone text-[#FFD22C]" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> 08954-220123
              </a>
              <a href="mailto:drda-vzm@ap.gov.in" className="flex items-center gap-2 text-xs hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail text-[#FFD22C]" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg> drda-vzm@ap.gov.in
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4 border-b border-gray-800 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/"><span className="text-[#FFD22C] text-xs">›</span> Home</a></li>
              <li><a className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/about/drda"><span className="text-[#FFD22C] text-xs">›</span> About DRDA</a></li>
              <li><a className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/about/district"><span className="text-[#FFD22C] text-xs">›</span> District Profile</a></li>
              <li><a className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/schemes"><span className="text-[#FFD22C] text-xs">›</span> Government Schemes</a></li>
              <li><a className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/press-releases#media-coverage"><span className="text-[#FFD22C] text-xs">›</span> Media Coverage</a></li>
              <li><a className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/success-stories"><span className="text-[#FFD22C] text-xs">›</span> Success Stories</a></li>
              <li><a className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/dashboard"><span className="text-[#FFD22C] text-xs">›</span> Dashboard</a></li>
              <li><a className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/about/whos-who"><span className="text-[#FFD22C] text-xs">›</span> Who&#x27;s Who</a></li>
              <li><a className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/sitemap"><span className="text-[#FFD22C] text-xs">›</span> Sitemap</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4 border-b border-gray-800 pb-2">Citizen Services</h3>
            <ul className="space-y-2">
              <li><a className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/pgrs"><span className="text-[#FFD22C] text-xs">›</span> Share Your Concern (PGRS)</a></li>
              <li><a className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/ivrs"><span className="text-[#FFD22C] text-xs">›</span> IVRS Services (1902)</a></li>
              <li><a className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/serp"><span className="text-[#FFD22C] text-xs">›</span> SERP Corner</a></li>
              <li><a className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/fpo"><span className="text-[#FFD22C] text-xs">›</span> FPO Network</a></li>
              <li><a className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/women-entrepreneurship"><span className="text-[#FFD22C] text-xs">›</span> Women Entrepreneurship</a></li>
              <li><a className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/one-family-one-entrepreneur"><span className="text-[#FFD22C] text-xs">›</span> One Family One Entrepreneur</a></li>
              <li><a className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/community-tourism"><span className="text-[#FFD22C] text-xs">›</span> Community Tourism</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4 border-b border-gray-800 pb-2">Important Links</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <a href="https://www.ap.gov.in" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5">
                  <span className="text-[#FFD22C] text-xs">›</span> Government of AP
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link opacity-50" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                </a>
              </li>
              <li>
                <a href="https://www.serp.ap.gov.in" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5">
                  <span className="text-[#FFD22C] text-xs">›</span> SERP Andhra Pradesh
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link opacity-50" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                </a>
              </li>
              <li>
                <a href="https://www.myscheme.gov.in/" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5">
                  <span className="text-[#FFD22C] text-xs">›</span> myScheme – National Schemes Portal
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link opacity-50" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                </a>
              </li>
              <li>
                <a href="https://pgrs.ap.gov.in" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5">
                  <span className="text-[#FFD22C] text-xs">›</span> PGRS Portal
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link opacity-50" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                </a>
              </li>
              <li>
                <a href="https://meeseva.ap.gov.in" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5">
                  <span className="text-[#FFD22C] text-xs">›</span> MeeSeva
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link opacity-50" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                </a>
              </li>
              <li>
                <a href="https://treasury.ap.gov.in" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5">
                  <span className="text-[#FFD22C] text-xs">›</span> AP Treasury
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link opacity-50" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                </a>
              </li>
            </ul>
            <a href="tel:1902" className="flex items-center gap-2 bg-[#FFD22C] text-[#0F172A] hover:bg-[#002147] text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-colors w-fit">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
              Call IVRS Helpline: 1902
            </a>
          </div>
        </div>

        {/* Bottom Rights Strip */}
        <div className="border-t border-gray-800 bg-[#021428]">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
            <span>© 2026 DRDA Vizianagaram District. Government of Andhra Pradesh. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <a className="hover:text-gray-400 transition-colors" href="/accessibility">Accessibility</a>
              <a className="hover:text-gray-400 transition-colors" href="/sitemap">Sitemap</a>
              <span className="text-gray-700">Designed for citizens.</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
