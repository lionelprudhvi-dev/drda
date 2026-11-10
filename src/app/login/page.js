'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState('citizen'); // 'citizen' or 'officer'
  const [authMode, setAuthMode] = useState('otp'); // 'otp' or 'password'
  
  // Citizen form state
  const [mobileNumber, setMobileNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [otpTimer, setOtpTimer] = useState(30);
  const [citizenPassword, setCitizenPassword] = useState('');

  // Officer form state
  const [employeeId, setEmployeeId] = useState('');
  const [officerPassword, setOfficerPassword] = useState('');
  const [officerRole, setOfficerRole] = useState('bpm');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaCode, setCaptchaCode] = useState('7K9P2');

  // UI state
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Refresh Captcha on demand
  const refreshCaptcha = () => {
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(result);
    setCaptchaInput('');
  };

  // Handle OTP Countdown Timer
  useEffect(() => {
    let interval = null;
    if (otpSent && otpTimer > 0) {
      interval = setInterval(() => {
        setOtpTimer((prev) => prev - 1);
      }, 1000);
    } else if (otpTimer === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [otpSent, otpTimer]);

  const handleSendOtp = (e) => {
    if (e) e.preventDefault();
    setErrorMessage('');
    if (mobileNumber.length !== 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setOtpSent(true);
      setOtpTimer(30);
    }, 700);
  };

  const handleFillDemo = (type) => {
    setErrorMessage('');
    if (type === 'citizen') {
      setActiveTab('citizen');
      setMobileNumber('9848012345');
    } else {
      setActiveTab('officer');
      setEmployeeId('VZM-BPM-1402');
      setOfficerPassword('••••••••');
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) value = value.slice(-1);
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleCitizenSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    
    if (authMode === 'otp') {
      const fullOtp = otp.join('');
      if (fullOtp.length !== 6) {
        setErrorMessage('Please enter the complete 6-digit OTP sent to your phone.');
        return;
      }
    } else {
      if (!citizenPassword) {
        setErrorMessage('Please enter your password.');
        return;
      }
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setLoginSuccess({
        role: 'Citizen / SHG Member',
        identifier: `+91 ${mobileNumber.slice(0, 2)}******${mobileNumber.slice(-2)}`,
        message: 'Welcome to DRDA Vizianagaram Citizen Services Portal.'
      });
    }, 900);
  };

  const handleOfficerSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!employeeId.trim()) {
      setErrorMessage('Please enter your Employee ID or CFMS Code.');
      return;
    }
    if (!officerPassword) {
      setErrorMessage('Please enter your department security password.');
      return;
    }
    if (captchaInput.trim().toUpperCase() !== captchaCode) {
      setErrorMessage('Security Captcha does not match. Please try again.');
      refreshCaptcha();
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const roleMap = {
        bpm: 'Block Project Manager (BPM)',
        cc: 'Cluster Coordinator (CC)',
        dpm: 'District Project Manager (DPM)',
        pd: 'Project Director / Additional PD'
      };
      setLoginSuccess({
        role: roleMap[officerRole] || 'Department Officer',
        identifier: `ID: ${employeeId.toUpperCase()}`,
        message: 'Department credentials verified. Connecting to DRDA Management Console.'
      });
    }, 900);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF7] text-[#002147]">
      {/* 1. Official Government Top Utility Bar */}
      <header className="sticky top-0 z-50 shadow-md">
        <div className="bg-[#002147] text-white py-1.5 px-4 text-xs font-medium border-b border-[#BAE6FD]/15">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 bg-[#FFD22C] text-[#0F172A] font-extrabold text-[10px] px-2 py-0.5 rounded shadow-sm">
                GOVERNMENT OF ANDHRA PRADESH
              </span>
              <span className="hidden sm:inline text-white/80">Vizianagaram District Single Sign-On</span>
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
            <Link className="flex items-center gap-3 min-w-0" href="/drda/">
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
              <Link href="/drda/" className="flex items-center gap-1.5 bg-[#FFFDF7] hover:bg-[#FEF9C3] text-[#002147] font-bold text-xs px-4 py-2 rounded-full border border-gray-200 shadow-sm transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                <span>Back to Home</span>
              </Link>
              <a href="tel:1902" className="hidden sm:flex items-center gap-1.5 bg-[#FFD22C] hover:bg-[#F59E0B] text-[#0F172A] font-extrabold text-xs px-3.5 py-2 rounded-full shadow-sm transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>Helpline: 1902</span>
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
              <li className="relative group">
                <a className="flex items-center gap-1 text-xs font-semibold px-3 py-2 text-[#002147] hover:text-[#D97706] hover:bg-[#FEF9C3] rounded-full transition-colors" href="/drda/about/drda">
                  About
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </a>
                <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 w-56 overflow-hidden">
                    <a href="/drda/about/drda" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">About DRDA</a>
                    <a href="/drda/about/district" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">District Profile</a>
                    <a href="/drda/about/structure" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">Administrative Structure</a>
                    <a href="/drda/about/whos-who" className="block px-4 py-2 text-xs font-semibold text-[#002147] hover:bg-[#FEFCE8] hover:text-[#D97706]">Who&#x27;s Who</a>
                  </div>
                </div>
              </li>
              <li>
                <Link className="text-xs font-semibold px-3 py-2 text-[#002147] hover:text-[#D97706] hover:bg-[#FEF9C3] rounded-full transition-colors" href="/drda/citizen-services">Citizen Services</Link>
              </li>
              <li>
                <Link className="text-xs font-semibold px-3 py-2 text-[#002147] hover:text-[#D97706] hover:bg-[#FEF9C3] rounded-full transition-colors" href="/drda/schemes">Schemes</Link>
              </li>
              <li>
                <Link className="text-xs font-semibold px-3 py-2 text-[#002147] hover:text-[#D97706] hover:bg-[#FEF9C3] rounded-full transition-colors" href="/drda/livelihood">Livelihoods</Link>
              </li>
              <li>
                <Link className="text-xs font-semibold px-3 py-2 text-[#002147] hover:text-[#D97706] hover:bg-[#FEF9C3] rounded-full transition-colors" href="/drda/success-stories">Success Stories</Link>
              </li>
              <li>
                <Link className="text-xs font-semibold px-3 py-2 text-[#002147] hover:text-[#D97706] hover:bg-[#FEF9C3] rounded-full transition-colors" href="/drda/pgrs">Grievances</Link>
              </li>
              <li>
                <Link className="text-xs font-semibold px-3 py-2 text-[#002147] hover:text-[#D97706] hover:bg-[#FEF9C3] rounded-full transition-colors" href="/drda/dashboard">Dashboard</Link>
              </li>
            </ul>

            <Link href="/drda/login" className="flex items-center gap-1.5 bg-[#FFD22C] text-[#0F172A] font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <span>Single Sign-On</span>
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content Area with Panoramic Background Image & Lighting */}
      <main className="flex-1 py-10 sm:py-16 relative overflow-hidden bg-gradient-to-br from-[#FFFDF7] via-[#FFFBEB] to-[#FEF3C7]">
        {/* Layer 1: Historic Temple Chariot Panoramic Background with Smooth Soft Mask */}
        <div 
          className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
          style={{
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.12) 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.12) 60%, transparent 100%)'
          }}
        >
          <img
            src="/drda/images/hero-temple.jpg"
            alt="Vizianagaram Historic Heritage Chariot"
            className="w-full h-full object-cover object-[center_25%] opacity-25 filter contrast-110 saturate-125"
          />
          {/* Subtle Warm Amber Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFFDF7]/95 via-[#FFFDF7]/80 to-[#FEF3C7]/90"></div>
        </div>

        {/* Layer 2: Floating Golden Sunrise Halo Orbs */}
        <div className="absolute -top-24 right-1/4 w-[550px] h-[550px] bg-gradient-to-tr from-[#FFD22C]/30 via-[#F59E0B]/20 to-transparent rounded-full blur-3xl pointer-events-none z-0"></div>
        <div className="absolute -bottom-20 left-10 w-[450px] h-[450px] bg-gradient-to-br from-[#FFD22C]/25 via-[#FEF08A]/35 to-transparent rounded-full blur-3xl pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Breadcrumb Strip */}
          <div className="flex items-center gap-2 text-xs text-[#EA580C] font-bold mb-6 uppercase tracking-wider">
            <Link className="hover:underline text-[#002147]" href="/drda/">Home</Link>
            <span>/</span>
            <span className="text-[#EA580C]">Unified Login &amp; Authentication Portal</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Column: Visual Showcase Card with Women Empowerment Photo & Stats */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#FDE68A] bg-gradient-to-br from-[#002147] via-[#061D3A] to-[#021428] text-white p-7 sm:p-9 flex flex-col justify-between h-full">
                {/* Internal Glow Sphere */}
                <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#FFD22C]/15 rounded-full blur-3xl pointer-events-none"></div>

                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 bg-[#FFD22C] text-[#0F172A] font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] animate-ping"></span>
                      Direct Beneficiary Architecture
                    </span>
                    <span className="text-white/60 text-xs font-semibold">e-Pragati &amp; SERP AP</span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight mb-3">
                    Empowering Rural Communities Across Vizianagaram
                  </h1>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-medium mb-6">
                    Log in to verify Stree Nidhi credit limits, track YSR Aasara &amp; Cheyutha direct bank transfers, manage Village Organizations, and monitor field operations.
                  </p>

                  {/* Visual Showcase: Rural Women Empowerment Photo Banner */}
                  <div className="relative rounded-2xl overflow-hidden border-2 border-[#FFD22C]/40 shadow-xl mb-6 group">
                    <div 
                      className="relative h-48 sm:h-56 w-full overflow-hidden"
                      style={{
                        maskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)'
                      }}
                    >
                      <img
                        src="/drda/images/women-empowerment.jpg"
                        alt="Rural Women Self-Help Groups in Vizianagaram Raising Hands"
                        className="w-full h-full object-cover object-[center_32%] filter contrast-105 saturate-115 transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#002147] via-transparent to-transparent opacity-85"></div>
                    </div>

                    {/* Floating Info Overlay on Image */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <div className="bg-[#002147]/90 backdrop-blur-md border border-[#FFD22C]/50 text-[#FFD22C] px-3 py-1 rounded-full text-xs font-black shadow-md flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#EA580C]"></span>
                        <span>19,918+ Self-Help Groups</span>
                      </div>
                      <div className="bg-white/90 backdrop-blur-md text-[#002147] px-2.5 py-0.5 rounded-full text-[11px] font-extrabold shadow-md">
                        100% Digital Ledgers
                      </div>
                    </div>
                  </div>

                  {/* 4 Impact Stat Cards */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-3.5 hover:bg-white/15 transition-colors">
                      <div className="text-xl font-black text-[#FFD22C]">1,84,200+</div>
                      <div className="text-[11px] text-gray-300 font-medium">Rural Women Members</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-3.5 hover:bg-white/15 transition-colors">
                      <div className="text-xl font-black text-[#FFD22C]">₹850+ Cr</div>
                      <div className="text-[11px] text-gray-300 font-medium">Annual Credit Linkage</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-3.5 hover:bg-white/15 transition-colors">
                      <div className="text-xl font-black text-[#FFD22C]">15 Mandals</div>
                      <div className="text-[11px] text-gray-300 font-medium">Block Managers (BPMs)</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-3.5 hover:bg-white/15 transition-colors">
                      <div className="text-xl font-black text-[#FFD22C]">967 VOs</div>
                      <div className="text-[11px] text-gray-300 font-medium">Village Organizations</div>
                    </div>
                  </div>
                </div>

                {/* Footer Security Strip */}
                <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#FFD22C]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    <span>Citizen Toll-Free Helpline: <strong className="text-white">1902</strong></span>
                  </div>
                  <div className="text-[11px] text-gray-400">
                    Collectorate Compound, Vizianagaram
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: The High-Converting Interactive Login Card */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-[#FDE68A] p-6 sm:p-9 relative">
                {/* Header Tag & Quick Fill Demo Buttons */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#D97706]">
                    <span className="w-2 h-2 rounded-full bg-[#EA580C]"></span>
                    <span>Unified Authentication</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleFillDemo('citizen')}
                      className="text-[11px] font-bold text-[#002147] hover:text-[#D97706] bg-[#FEF9C3] px-2.5 py-1 rounded-full border border-[#FDE68A] transition-colors"
                      title="Auto-fill sample citizen mobile number"
                    >
                      Demo Citizen
                    </button>
                    <button
                      type="button"
                      onClick={() => handleFillDemo('officer')}
                      className="text-[11px] font-bold text-[#002147] hover:text-[#D97706] bg-[#F1F5F9] px-2.5 py-1 rounded-full border border-gray-200 transition-colors"
                      title="Auto-fill sample department credentials"
                    >
                      Demo Staff
                    </button>
                  </div>
                </div>

                {/* Role Switcher Tabs */}
                <div className="flex bg-[#F1F5F9] p-1.5 rounded-2xl mb-6 shadow-inner">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab('citizen');
                      setErrorMessage('');
                      setLoginSuccess(null);
                    }}
                    className={`flex-1 py-3 text-xs sm:text-sm font-black rounded-xl transition-all flex items-center justify-center gap-2 ${
                      activeTab === 'citizen'
                        ? 'bg-[#002147] text-[#FFD22C] shadow-md'
                        : 'text-[#64748B] hover:text-[#002147]'
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    <span>Citizen / SHG Member</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab('officer');
                      setErrorMessage('');
                      setLoginSuccess(null);
                    }}
                    className={`flex-1 py-3 text-xs sm:text-sm font-black rounded-xl transition-all flex items-center justify-center gap-2 ${
                      activeTab === 'officer'
                        ? 'bg-[#002147] text-[#FFD22C] shadow-md'
                        : 'text-[#64748B] hover:text-[#002147]'
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10"/><path d="M7 12h10"/><path d="M7 17h10"/></svg>
                    <span>Official / Staff</span>
                  </button>
                </div>

                {/* Success Alert Banner */}
                {loginSuccess && (
                  <div className="mb-6 p-4 bg-emerald-50 border-2 border-emerald-300 rounded-2xl text-emerald-900 shadow-sm animate-fadeIn">
                    <div className="flex items-center gap-2 font-black text-sm mb-1 text-emerald-800">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                      Authentication Successful
                    </div>
                    <div className="text-xs text-emerald-700 leading-relaxed mb-3">
                      Signed in as <strong>{loginSuccess.role}</strong> ({loginSuccess.identifier}). {loginSuccess.message}
                    </div>
                    <div className="flex items-center gap-2">
                      <Link
                        href="/drda/dashboard"
                        className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all inline-flex items-center gap-1.5 shadow-sm"
                      >
                        <span>Access My Dashboard</span>
                        <span>→</span>
                      </Link>
                      <button
                        onClick={() => setLoginSuccess(null)}
                        className="text-xs text-emerald-700 hover:underline px-2 py-1 font-semibold"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}

                {/* Error Alert Banner */}
                {errorMessage && (
                  <div className="mb-6 p-3.5 bg-red-50 border-2 border-red-200 rounded-2xl text-red-700 text-xs font-bold flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* TAB 1: Citizen & SHG Member Login Form */}
                {activeTab === 'citizen' && (
                  <form onSubmit={handleCitizenSubmit} className="space-y-5">
                    {/* Mode Switcher: OTP vs Password */}
                    <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                      <span className="text-xs font-bold text-[#64748B]">Verification Method:</span>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setAuthMode('otp');
                            setErrorMessage('');
                          }}
                          className={`text-xs font-bold px-3 py-1 rounded-full transition-all ${
                            authMode === 'otp'
                              ? 'bg-[#FFD22C] text-[#0F172A] shadow-sm'
                              : 'bg-gray-100 text-[#64748B] hover:text-[#002147]'
                          }`}
                        >
                          OTP to Mobile
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setAuthMode('password');
                            setErrorMessage('');
                          }}
                          className={`text-xs font-bold px-3 py-1 rounded-full transition-all ${
                            authMode === 'password'
                              ? 'bg-[#FFD22C] text-[#0F172A] shadow-sm'
                              : 'bg-gray-100 text-[#64748B] hover:text-[#002147]'
                          }`}
                        >
                          Password
                        </button>
                      </div>
                    </div>

                    {/* Mobile Number Input */}
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-[#002147] mb-1.5">
                        Registered Mobile Number / Aadhaar Linked
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded border border-gray-200">
                          +91
                        </span>
                        <input
                          type="tel"
                          maxLength={10}
                          value={mobileNumber}
                          onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                          placeholder="Enter 10-digit mobile number"
                          className="w-full pl-16 pr-4 py-3 bg-[#F8FAFC] border-2 border-[#E2E8F0] focus:border-[#FFD22C] focus:bg-white rounded-xl text-sm font-bold text-[#002147] outline-none transition-colors"
                          disabled={otpSent}
                        />
                        {mobileNumber.length === 10 && !otpSent && (
                          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-emerald-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-[#64748B] mt-1.5">
                        Enter the phone number linked to your SHG group, Village Organization, or MeeSeva card.
                      </p>
                    </div>

                    {/* OTP Mode Sub-flow */}
                    {authMode === 'otp' && (
                      <>
                        {!otpSent ? (
                          <button
                            type="button"
                            onClick={handleSendOtp}
                            disabled={isLoading || mobileNumber.length !== 10}
                            className="w-full py-3.5 bg-[#FFD22C] hover:bg-[#F59E0B] disabled:bg-gray-200 disabled:text-gray-400 text-[#0F172A] font-black rounded-xl text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                          >
                            {isLoading ? (
                              <span>Dispatching 6-Digit OTP...</span>
                            ) : (
                              <>
                                <span>Get 6-Digit Verification OTP</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                              </>
                            )}
                          </button>
                        ) : (
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <label className="text-xs font-black uppercase tracking-wider text-[#002147]">
                                Enter 6-Digit OTP Code
                              </label>
                              <button
                                type="button"
                                onClick={() => {
                                  setOtpSent(false);
                                  setOtp(['', '', '', '', '', '']);
                                }}
                                className="text-xs text-[#EA580C] hover:underline font-bold"
                              >
                                Change Mobile
                              </button>
                            </div>

                            {/* 6 OTP Input Boxes */}
                            <div className="flex justify-between gap-2">
                              {otp.map((digit, idx) => (
                                <input
                                  key={idx}
                                  id={`otp-input-${idx}`}
                                  type="text"
                                  maxLength={1}
                                  value={digit}
                                  onChange={(e) => handleOtpChange(idx, e.target.value)}
                                  onKeyDown={(e) => {
                                    if (e.key === 'Backspace' && !digit && idx > 0) {
                                      const prevInput = document.getElementById(`otp-input-${idx - 1}`);
                                      if (prevInput) prevInput.focus();
                                    }
                                  }}
                                  className="w-11 sm:w-12 h-12 sm:h-13 text-center text-lg font-black bg-[#F8FAFC] border-2 border-[#E2E8F0] focus:border-[#FFD22C] focus:bg-white rounded-xl text-[#002147] outline-none transition-colors"
                                />
                              ))}
                            </div>

                            <div className="flex items-center justify-between text-xs text-[#64748B]">
                              <span>
                                {otpTimer > 0 ? (
                                  <>Resend OTP in <strong className="text-[#002147]">{otpTimer}s</strong></>
                                ) : (
                                  <button
                                    type="button"
                                    onClick={handleSendOtp}
                                    className="text-[#002147] font-bold hover:underline"
                                  >
                                    Resend OTP Now
                                  </button>
                                )}
                              </span>
                              <span className="text-[11px] text-gray-400">Demo Code: Any 6 digits</span>
                            </div>

                            <button
                              type="submit"
                              disabled={isLoading}
                              className="w-full py-3.5 bg-[#002147] hover:bg-[#061D3A] text-[#FFD22C] font-black rounded-xl text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                            >
                              {isLoading ? (
                                <span>Verifying Secure OTP...</span>
                              ) : (
                                <>
                                  <span>Verify &amp; Enter Portal</span>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                                </>
                              )}
                            </button>
                          </div>
                        )}
                      </>
                    )}

                    {/* Password Mode Sub-flow */}
                    {authMode === 'password' && (
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <label className="text-xs font-black uppercase tracking-wider text-[#002147]">
                              Password
                            </label>
                            <a href="#forgot" onClick={(e) => { e.preventDefault(); alert("Please contact your Mandal BPM or Call Toll-Free 1902 to reset your password."); }} className="text-xs text-[#EA580C] hover:underline font-bold">
                              Forgot Password?
                            </a>
                          </div>
                          <input
                            type="password"
                            value={citizenPassword}
                            onChange={(e) => setCitizenPassword(e.target.value)}
                            placeholder="Enter your citizen account password"
                            className="w-full px-4 py-3 bg-[#F8FAFC] border-2 border-[#E2E8F0] focus:border-[#FFD22C] focus:bg-white rounded-xl text-sm font-bold text-[#002147] outline-none transition-colors"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isLoading}
                          className="w-full py-3.5 bg-[#FFD22C] hover:bg-[#F59E0B] text-[#0F172A] font-black rounded-xl text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                        >
                          {isLoading ? (
                            <span>Authenticating...</span>
                          ) : (
                            <>
                              <span>Login with Password</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                            </>
                          )}
                        </button>
                      </div>
                    )}

                    <div className="pt-2 text-center text-xs text-[#64748B]">
                      Need assistance with SHG enrollment?{' '}
                      <Link href="/drda/about/structure" className="text-[#002147] font-bold hover:underline">
                        Locate your Mandal Block Office
                      </Link>
                    </div>
                  </form>
                )}

                {/* TAB 2: Department Official / Staff Form */}
                {activeTab === 'officer' && (
                  <form onSubmit={handleOfficerSubmit} className="space-y-4">
                    {/* Role Selection */}
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-[#002147] mb-1.5">
                        Operational Designation
                      </label>
                      <select
                        value={officerRole}
                        onChange={(e) => setOfficerRole(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border-2 border-[#E2E8F0] focus:border-[#FFD22C] focus:bg-white rounded-xl text-xs font-bold text-[#002147] outline-none transition-colors"
                      >
                        <option value="bpm">Block Project Manager (BPM) - Mandal Level</option>
                        <option value="cc">Cluster Coordinator (CC) - Gram Panchayat</option>
                        <option value="dpm">District Project Manager (DPM) - DRDA Wing</option>
                        <option value="pd">Project Director (PD) / Additional PD</option>
                      </select>
                    </div>

                    {/* Employee ID / CFMS */}
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-[#002147] mb-1.5">
                        Officer CFMS ID / Employee Code
                      </label>
                      <input
                        type="text"
                        value={employeeId}
                        onChange={(e) => setEmployeeId(e.target.value)}
                        placeholder="e.g. VZM-BPM-1402 or CFMS109482"
                        className="w-full px-4 py-3 bg-[#F8FAFC] border-2 border-[#E2E8F0] focus:border-[#FFD22C] focus:bg-white rounded-xl text-sm font-bold text-[#002147] outline-none transition-colors"
                      />
                    </div>

                    {/* Password */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-xs font-black uppercase tracking-wider text-[#002147]">
                          Department Security Password
                        </label>
                        <a href="#help" onClick={(e) => { e.preventDefault(); alert("Contact DRDA IT Nodal Officer at Collectorate Vizianagaram or email pd-drda-vzm@ap.gov.in"); }} className="text-xs text-[#EA580C] hover:underline font-bold">
                          Reset via IT Cell
                        </a>
                      </div>
                      <input
                        type="password"
                        value={officerPassword}
                        onChange={(e) => setOfficerPassword(e.target.value)}
                        placeholder="Enter your DRDA departmental password"
                        className="w-full px-4 py-3 bg-[#F8FAFC] border-2 border-[#E2E8F0] focus:border-[#FFD22C] focus:bg-white rounded-xl text-sm font-bold text-[#002147] outline-none transition-colors"
                      />
                    </div>

                    {/* Security Captcha */}
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-[#002147] mb-1.5">
                        Security Verification Code (Captcha)
                      </label>
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-r from-slate-900 to-[#002147] text-[#FFD22C] px-5 py-2.5 rounded-xl font-mono text-lg font-black tracking-widest select-none shadow-inner border border-slate-700 flex items-center justify-center">
                          {captchaCode}
                        </div>
                        <button
                          type="button"
                          onClick={refreshCaptcha}
                          className="p-2.5 bg-gray-100 hover:bg-gray-200 text-[#002147] rounded-xl transition-colors"
                          title="Generate new captcha code"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>
                        </button>
                        <input
                          type="text"
                          maxLength={5}
                          value={captchaInput}
                          onChange={(e) => setCaptchaInput(e.target.value)}
                          placeholder="Type code"
                          className="flex-1 px-4 py-2.5 bg-[#F8FAFC] border-2 border-[#E2E8F0] focus:border-[#FFD22C] focus:bg-white rounded-xl text-sm font-bold text-[#002147] uppercase outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Security Disclaimer */}
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-[11px] text-amber-900 leading-tight">
                      <strong>Security Note:</strong> All access events and operations are logged in compliance with AP IT Security Policy 2024. Unauthorized access is punishable under the IT Act 2000.
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-3.5 bg-[#002147] hover:bg-[#061D3A] text-[#FFD22C] font-black rounded-xl text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <span>Validating Department Credentials...</span>
                      ) : (
                        <>
                          <span>Sign in to Officer Console</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </>
                      )}
                    </button>
                  </form>
                )}

                {/* Footer Security Compliance Indicator */}
                <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between text-[11px] text-[#64748B]">
                  <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    <span>256-Bit SSL Encrypted</span>
                  </div>
                  <div className="text-gray-500 font-semibold">NIC &amp; e-Pragati AP Gateway</div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
