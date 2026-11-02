'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';

const CLIPPINGS = [
  {
    id: 1,
    src: '/press/clippings/clip-01.jpg',
    source: 'Sakshi',
    topic: 'Super Nari App Rally',
    date: '2026-06-02',
    alt: 'Sakshi — Super Nari App Rally, Vizianagaram District (02 Jun 2026)'
  },
  {
    id: 2,
    src: '/press/clippings/clip-02.jpg',
    source: 'Eenadu',
    topic: 'Super Nari App Rally',
    date: '2026-06-02',
    alt: 'Eenadu — Super Nari App Rally, Vizianagaram District (02 Jun 2026)'
  },
  {
    id: 3,
    src: '/press/clippings/clip-03.jpg',
    source: 'Prajasakti',
    topic: 'Super Nari App Rally',
    date: '2026-06-02',
    alt: 'Prajasakti — Super Nari App Rally, Vizianagaram District (02 Jun 2026)'
  },
  {
    id: 4,
    src: '/press/clippings/clip-04.jpg',
    source: 'Visalandhra',
    topic: 'Super Nari App Rally',
    date: '2026-06-02',
    alt: 'Visalandhra — Super Nari App Rally, Vizianagaram District (02 Jun 2026)'
  },
  {
    id: 5,
    src: '/press/clippings/clip-05.jpg',
    source: 'Eenadu',
    topic: 'One Family One Entrepreneur',
    date: '2026-06-02',
    alt: 'Eenadu — One Family One Entrepreneur, Vizianagaram District (02 Jun 2026)'
  },
  {
    id: 6,
    src: '/press/clippings/clip-06.jpg',
    source: 'Andhra Prabha',
    topic: 'One Family One Entrepreneur',
    date: '2026-06-02',
    alt: 'Andhra Prabha — One Family One Entrepreneur, Vizianagaram District (02 Jun 2026)'
  },
  {
    id: 7,
    src: '/press/clippings/clip-07.jpg',
    source: 'Prajasakti',
    topic: 'One Family One Entrepreneur',
    date: '2026-06-02',
    alt: 'Prajasakti — One Family One Entrepreneur, Vizianagaram District (02 Jun 2026)'
  },
  {
    id: 8,
    src: '/press/clippings/clip-08.jpg',
    source: 'Andhra Jyothy',
    topic: 'One Family One Entrepreneur',
    date: '2026-06-02',
    alt: 'Andhra Jyothy — One Family One Entrepreneur, Vizianagaram District (02 Jun 2026)'
  },
  {
    id: 9,
    src: '/press/clippings/clip-09.jpg',
    source: 'Andhra Jyothy',
    topic: 'One Family One Entrepreneur',
    date: '2026-06-02',
    alt: 'Andhra Jyothy — One Family One Entrepreneur, Vizianagaram District (02 Jun 2026)'
  },
  {
    id: 10,
    src: '/press/clippings/clip-10.jpg',
    source: 'Sakshi',
    topic: 'NTR Bharosa Pensions',
    date: '2026-06-02',
    alt: 'Sakshi — NTR Bharosa Pensions, Vizianagaram District (02 Jun 2026)'
  },
  {
    id: 11,
    src: '/press/clippings/clip-11.jpg',
    source: 'Eenadu',
    topic: 'NTR Bharosa Pensions',
    date: '2026-06-02',
    alt: 'Eenadu — NTR Bharosa Pensions, Vizianagaram District (02 Jun 2026)'
  },
  {
    id: 12,
    src: '/press/clippings/clip-12.jpg',
    source: 'Visalandhra',
    topic: 'NTR Bharosa Pensions',
    date: '2026-06-02',
    alt: 'Visalandhra — NTR Bharosa Pensions, Vizianagaram District (02 Jun 2026)'
  },
  {
    id: 13,
    src: '/press/clippings/clip-13.jpg',
    source: 'Andhra Jyothy',
    topic: 'NTR Bharosa Pensions',
    date: '2026-06-02',
    alt: 'Andhra Jyothy — NTR Bharosa Pensions, Vizianagaram District (02 Jun 2026)'
  },
  {
    id: 14,
    src: '/press/clippings/clip-14.jpg',
    source: 'Eenadu',
    topic: 'NTR Bharosa Pensions',
    date: '2026-06-02',
    alt: 'Eenadu — NTR Bharosa Pensions, Vizianagaram District (02 Jun 2026)'
  },
  {
    id: 15,
    src: '/press/clippings/clip-15.jpg',
    source: 'Andhra Prabha',
    topic: 'NTR Bharosa Pensions',
    date: '2026-06-02',
    alt: 'Andhra Prabha — NTR Bharosa Pensions, Vizianagaram District (02 Jun 2026)'
  },
  {
    id: 16,
    src: '/press/clippings/clip-16.jpg',
    source: 'Andhra Prabha',
    topic: 'NTR Bharosa Pensions',
    date: '2026-06-02',
    alt: 'Andhra Prabha — NTR Bharosa Pensions, Vizianagaram District (02 Jun 2026)'
  }
];

export default function MediaCoveragePage() {
  const [search, setSearch] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedSource, setSelectedSource] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  
  // Lightbox Modal state
  const [activeModalIndex, setActiveModalIndex] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0, panX: 0, panY: 0 });
  const filmstripRef = useRef(null);

  // Topic and Source options with counts
  const topicCounts = useMemo(() => {
    const counts = {};
    CLIPPINGS.forEach(c => {
      counts[c.topic] = (counts[c.topic] || 0) + 1;
    });
    return counts;
  }, []);

  const sourceCounts = useMemo(() => {
    const counts = {};
    CLIPPINGS.forEach(c => {
      counts[c.source] = (counts[c.source] || 0) + 1;
    });
    return counts;
  }, []);

  const dateCounts = useMemo(() => {
    const counts = {};
    CLIPPINGS.forEach(c => {
      counts[c.date] = (counts[c.date] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered clippings
  const filtered = useMemo(() => {
    return CLIPPINGS.filter(clip => {
      if (selectedTopic && clip.topic !== selectedTopic) return false;
      if (selectedSource && clip.source !== selectedSource) return false;
      if (selectedDate && clip.date !== selectedDate) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        const matchTitle = clip.topic.toLowerCase().includes(q);
        const matchSource = clip.source.toLowerCase().includes(q);
        const matchAlt = clip.alt.toLowerCase().includes(q);
        if (!matchTitle && !matchSource && !matchAlt) return false;
      }
      return true;
    });
  }, [search, selectedTopic, selectedSource, selectedDate]);

  // Modal open/close handlers
  const openModal = (index) => {
    setActiveModalIndex(index);
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const closeModal = () => {
    setActiveModalIndex(null);
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const handleNext = () => {
    if (activeModalIndex !== null && filtered.length > 0) {
      setActiveModalIndex((activeModalIndex + 1) % filtered.length);
      setZoom(1);
      setPan({ x: 0, y: 0 });
    }
  };

  const handlePrev = () => {
    if (activeModalIndex !== null && filtered.length > 0) {
      setActiveModalIndex((activeModalIndex - 1 + filtered.length) % filtered.length);
      setZoom(1);
      setPan({ x: 0, y: 0 });
    }
  };

  const zoomIn = () => {
    setZoom(z => Math.min(4, +(z * 1.3).toFixed(2)));
  };

  const zoomOut = () => {
    setZoom(z => {
      const next = +(z / 1.3).toFixed(2);
      if (next <= 1) {
        setPan({ x: 0, y: 0 });
        return 1;
      }
      return next;
    });
  };

  const resetZoom = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeModalIndex === null) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === '+' || e.key === '=') zoomIn();
      if (e.key === '-') zoomOut();
      if (e.key === '0') resetZoom();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalIndex, filtered.length]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (activeModalIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModalIndex]);

  // Scroll active thumbnail into view in filmstrip
  useEffect(() => {
    if (activeModalIndex !== null && filmstripRef.current) {
      const activeThumb = filmstripRef.current.querySelector(`[data-strip="${activeModalIndex}"]`);
      if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeModalIndex]);

  const activeClip = activeModalIndex !== null ? filtered[activeModalIndex] : null;

  return (
    <>
      {/* Top Header */}
      <header className="sticky top-0 z-50 shadow-lg">
        {/* Top Helpline Strip */}
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

        {/* Brand Banner */}
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
                <a className="flex items-center gap-1 text-xs font-medium px-3 py-3.5 transition-colors whitespace-nowrap relative text-[#FFD22C]" href="/press-releases#media-coverage">
                  Media Coverage
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#F59E0B] rounded-full"></span>
                </a>
              </li>
              <li className="relative">
                <a className="flex items-center gap-1 text-xs font-medium px-3 py-3.5 transition-colors whitespace-nowrap relative text-[#002147] hover:text-[#D97706] hover:bg-[#FEF9C3] rounded-full" href="/success-stories">Success Stories</a>
              </li>
              <li className="relative">
                <a className="flex items-center gap-1 text-xs font-medium px-3 py-3.5 transition-colors whitespace-nowrap relative text-[#002147] hover:text-[#D97706] hover:bg-[#FEF9C3] rounded-full" href="/dashboard">Dashboard</a>
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
                <a className="hover:text-white" href="/">Home</a> <span>/</span><span>Media Coverage</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-[#002147] mb-3 tracking-tight flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-megaphone text-[#FFD22C]" aria-hidden="true">
                  <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path>
                  <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path>
                  <path d="M8 6v8"></path>
                </svg>
                Media Coverage
              </h1>
              <p className="text-[#334155] max-w-2xl font-medium">Newspaper clippings featuring DRDA Vizianagaram District from regional & state dailies.</p>
            </div>
          </div>

          {/* Section: #media-coverage */}
          <section id="media-coverage" className="scroll-mt-24 py-14 bg-gradient-to-b from-[#F8FAFC] to-white relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FFD22C] text-[#0F172A]/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#F59E0B]/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-4">
              {/* Header Info & Stats */}
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-9">
                <div>
                  <span className="inline-flex items-center gap-1.5 bg-[#FFFBEB] text-[#D97706] text-xs font-bold px-3 py-1 rounded-full border border-[#FDE68A] mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-newspaper" aria-hidden="true">
                      <path d="M15 18h-5"></path>
                      <path d="M18 14h-8"></path>
                      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"></path>
                      <rect width="8" height="4" x="10" y="6" rx="1"></rect>
                    </svg>
                    In the News
                  </span>
                  <p className="text-sm text-[#64748B] max-w-2xl">
                    Coverage from regional & state dailies. Tap any clipping to open the full-screen reader —<strong className="text-[#002147]"> zoom in, pan</strong> and browse with the filmstrip.
                  </p>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-5">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-extrabold text-[#002147] leading-none">16</span>
                      <span className="text-[11px] text-[#64748B] leading-tight">Press<br />Clippings</span>
                    </div>
                    <span className="w-px h-9 bg-[#E2E8F0]"></span>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-extrabold text-[#002147] leading-none">100%</span>
                      <span className="text-[11px] text-[#64748B] leading-tight">Positive<br />Coverage</span>
                    </div>
                    <span className="w-px h-9 bg-[#E2E8F0]"></span>
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar text-[#002147]" aria-hidden="true">
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </svg>
                      <span className="text-[11px] text-[#64748B] leading-tight font-semibold">As on<br />02 Jun 2026</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Filter Controls Bar */}
              <div className="mb-7 rounded-2xl shadow-md p-3 sm:p-3.5 bg-gradient-to-r from-[#181512] via-[#78350F] to-[#B45309] relative overflow-hidden flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5">
                <div className="pointer-events-none absolute -top-10 -right-6 w-40 h-40 rounded-full bg-[#F59E0B]/15 blur-2xl"></div>
                <span className="relative hidden lg:flex items-center gap-1.5 text-white font-bold text-xs uppercase tracking-wide px-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sliders-horizontal text-[#FFD22C]" aria-hidden="true">
                    <path d="M10 5H3"></path><path d="M12 19H3"></path><path d="M14 3v4"></path><path d="M16 17v4"></path><path d="M21 12h-9"></path><path d="M21 19h-5"></path><path d="M21 5h-7"></path><path d="M8 10v4"></path><path d="M8 12H3"></path>
                  </svg>
                  Filter
                </span>

                {/* Search Input */}
                <div className="relative w-full sm:flex-1 sm:min-w-[150px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" aria-hidden="true">
                    <circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line>
                  </svg>
                  <input
                    type="text"
                    placeholder="Search clippings…"
                    className="w-full pl-9 pr-3 py-2.5 rounded-full border border-transparent bg-white text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFC107]/70"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  {search && (
                    <button
                      onClick={() => setSearch('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-bold"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* Topics Dropdown */}
                <div className="relative w-full sm:w-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sliders-horizontal absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B] pointer-events-none" aria-hidden="true">
                    <path d="M10 5H3"></path><path d="M12 19H3"></path><path d="M14 3v4"></path><path d="M16 17v4"></path><path d="M21 12h-9"></path><path d="M21 19h-5"></path><path d="M21 5h-7"></path><path d="M8 10v4"></path><path d="M8 12H3"></path>
                  </svg>
                  <select
                    className="w-full sm:w-auto appearance-none cursor-pointer pl-9 pr-8 py-2.5 rounded-full border border-transparent bg-white text-sm font-medium text-[#002147] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFC107]/70"
                    value={selectedTopic}
                    onChange={(e) => setSelectedTopic(e.target.value)}
                  >
                    <option value="">All Topics</option>
                    {Object.entries(topicCounts).map(([topic, count]) => (
                      <option key={topic} value={topic}>{topic} ({count})</option>
                    ))}
                  </select>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-[#64748B] pointer-events-none" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
                </div>

                {/* Sources Dropdown */}
                <div className="relative w-full sm:w-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-newspaper absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B] pointer-events-none" aria-hidden="true">
                    <path d="M15 18h-5"></path><path d="M18 14h-8"></path><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"></path><rect width="8" height="4" x="10" y="6" rx="1"></rect>
                  </svg>
                  <select
                    className="w-full sm:w-auto appearance-none cursor-pointer pl-9 pr-8 py-2.5 rounded-full border border-transparent bg-white text-sm font-medium text-[#002147] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFC107]/70"
                    value={selectedSource}
                    onChange={(e) => setSelectedSource(e.target.value)}
                  >
                    <option value="">All Sources</option>
                    {Object.entries(sourceCounts).map(([source, count]) => (
                      <option key={source} value={source}>{source} ({count})</option>
                    ))}
                  </select>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-[#64748B] pointer-events-none" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
                </div>

                {/* Dates Dropdown */}
                <div className="relative w-full sm:w-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B] pointer-events-none" aria-hidden="true">
                    <path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path>
                  </svg>
                  <select
                    className="w-full sm:w-auto appearance-none cursor-pointer pl-9 pr-8 py-2.5 rounded-full border border-transparent bg-white text-sm font-medium text-[#002147] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFC107]/70"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  >
                    <option value="">All Dates</option>
                    {Object.entries(dateCounts).map(([date, count]) => (
                      <option key={date} value={date}>02 Jun 2026 ({count})</option>
                    ))}
                  </select>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-[#64748B] pointer-events-none" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
                </div>

                {/* Count Indicator */}
                <div className="relative flex items-center gap-3 sm:ml-auto pl-1">
                  <span className="text-xs sm:text-sm text-white/85 whitespace-nowrap">
                    Showing <strong className="text-[#FFD22C]">{filtered.length}</strong>/{CLIPPINGS.length}
                  </span>
                </div>
              </div>

              {/* Clippings Grid */}
              {filtered.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="text-gray-400 mb-3">
                    <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-700 mb-1">No clippings found</h3>
                  <p className="text-sm text-gray-500 mb-4">Try clearing your filters or search keywords.</p>
                  <button
                    onClick={() => { setSearch(''); setSelectedTopic(''); setSelectedSource(''); setSelectedDate(''); }}
                    className="bg-[#FFD22C] text-[#0F172A] text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#002147] transition-colors"
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                  {filtered.map((item, index) => (
                    <div key={item.id} className="transition-all duration-300">
                      <button
                        type="button"
                        aria-label={`Enlarge ${item.source}`}
                        onClick={() => openModal(index)}
                        className="shimmer group relative block w-full aspect-[1369/1937] rounded-xl overflow-hidden border border-[#E2E8F0] bg-white shadow-sm hover:shadow-2xl transition-[transform,box-shadow] duration-200 ease-out will-change-transform text-left"
                      >
                        <img
                          alt={item.alt}
                          loading="lazy"
                          className="object-cover object-top w-full h-full transition-transform duration-500 group-hover:scale-105"
                          src={item.src}
                        />

                        {/* Hover Zoom Icon */}
                        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10">
                          <span className="flex items-center justify-center w-11 h-11 rounded-full bg-white/95 text-[#002147] shadow-lg transform group-hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zoom-in" aria-hidden="true">
                              <circle cx="11" cy="11" r="8"></circle>
                              <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
                              <line x1="11" x2="11" y1="8" y2="14"></line>
                              <line x1="8" x2="14" y1="11" y2="11"></line>
                            </svg>
                          </span>
                        </span>

                        {/* Bottom Label Bar */}
                        <span className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between gap-1 bg-gradient-to-t from-black/85 via-black/45 to-transparent px-2.5 pt-7 pb-2">
                          <span className="bg-[#FFD22C] text-[#0F172A] text-[9px] font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap shadow-sm">
                            {item.source}
                          </span>
                          <span className="text-white text-[10px] font-semibold flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar" aria-hidden="true">
                              <path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path>
                            </svg>
                            02 Jun 2026
                          </span>
                        </span>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Media & Press Enquiries Section */}
          <section className="py-10 bg-[#FFD22C] text-[#0F172A] text-white text-center">
            <div className="max-w-xl mx-auto px-4">
              <h2 className="text-xl font-bold mb-2">Media & Press Enquiries</h2>
              <p className="text-[#334155] text-sm mb-4">
                For interviews, official statements, or press accreditation, contact the DRDA Public Relations desk.
              </p>
              <a
                href="tel:08954220123"
                className="inline-flex items-center gap-2 bg-white text-[#002147] hover:bg-[#FEF9C3] font-bold px-6 py-2.5 rounded-full text-sm transition-colors shadow-md"
              >
                Contact DRDA Press Desk
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true">
                  <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Lightbox / Clipping Reader Modal */}
      {activeClip && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col select-none"
          role="dialog"
          aria-modal="true"
          aria-label={`Clipping ${activeModalIndex + 1} of ${filtered.length}`}
        >
          {/* Reader Top Bar */}
          <div className="flex items-center justify-between gap-2 px-4 py-3 text-white flex-shrink-0 border-b border-white/10 bg-black/40">
            <div className="flex items-center gap-2 min-w-0">
              <span className="flex items-center gap-2 text-sm font-semibold bg-white/10 px-3 py-1.5 rounded-full flex-shrink-0">
                {activeModalIndex + 1} / {filtered.length}
              </span>
              <span className="flex items-center gap-1.5 bg-[#FFD22C] text-[#0F172A] text-[11px] font-bold px-2.5 py-1 rounded-full flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-newspaper" aria-hidden="true">
                  <path d="M15 18h-5"></path><path d="M18 14h-8"></path><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"></path><rect width="8" height="4" x="10" y="6" rx="1"></rect>
                </svg>
                {activeClip.source}
              </span>
              <span className="hidden md:inline text-xs text-white/80 truncate">
                {activeClip.topic}
              </span>
              <span className="hidden sm:flex items-center gap-1 text-xs text-white/60 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar" aria-hidden="true">
                  <path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path>
                </svg>
                02 Jun 2026
              </span>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <button
                onClick={zoomOut}
                aria-label="Zoom out"
                title="Zoom out (-)"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zoom-out" aria-hidden="true">
                  <circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line><line x1="8" x2="14" y1="11" y2="11"></line>
                </svg>
              </button>

              <span className="hidden sm:block text-xs font-bold w-12 text-center tabular-nums">
                {Math.round(100 * zoom)}%
              </span>

              <button
                onClick={zoomIn}
                aria-label="Zoom in"
                title="Zoom in (+)"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zoom-in" aria-hidden="true">
                  <circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line><line x1="11" x2="11" y1="8" y2="14"></line><line x1="8" x2="14" y1="11" y2="11"></line>
                </svg>
              </button>

              <button
                onClick={resetZoom}
                aria-label="Reset zoom"
                title="Reset zoom (0)"
                className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rotate-ccw" aria-hidden="true">
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path>
                </svg>
              </button>

              <button
                onClick={closeModal}
                aria-label="Close"
                title="Close (Esc)"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] transition-colors ml-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x" aria-hidden="true">
                  <path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Reader Main Stage */}
          <div
            className="relative flex-1 overflow-hidden flex items-center justify-center select-none"
            onWheel={(e) => {
              if (e.deltaY < 0) zoomIn();
              else zoomOut();
            }}
            onDoubleClick={() => {
              if (zoom > 1) resetZoom();
              else {
                setZoom(2.2);
                setPan({ x: 0, y: 0 });
              }
            }}
            onClick={(e) => {
              if (e.target === e.currentTarget) closeModal();
            }}
          >
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous"
              title="Previous (Left arrow)"
              className="absolute left-2 sm:left-5 z-20 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left" aria-hidden="true">
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </button>

            {/* Transform Container with Pan & Zoom */}
            <div
              className="will-change-transform"
              style={{
                transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                cursor: zoom > 1 ? (isDragging.current ? 'grabbing' : 'grab') : 'zoom-in',
                transition: isDragging.current ? 'none' : 'transform 0.18s ease-out'
              }}
              onPointerDown={(e) => {
                if (zoom <= 1) return;
                isDragging.current = true;
                dragStart.current = {
                  x: e.clientX,
                  y: e.clientY,
                  panX: pan.x,
                  panY: pan.y
                };
                e.target.setPointerCapture?.(e.pointerId);
              }}
              onPointerMove={(e) => {
                if (!isDragging.current) return;
                const dx = e.clientX - dragStart.current.x;
                const dy = e.clientY - dragStart.current.y;
                setPan({
                  x: dragStart.current.panX + dx,
                  y: dragStart.current.panY + dy
                });
              }}
              onPointerUp={() => { isDragging.current = false; }}
              onPointerLeave={() => { isDragging.current = false; }}
            >
              <img
                src={activeClip.src}
                alt={activeClip.alt}
                draggable={false}
                className="max-h-[72vh] max-w-[94vw] object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              aria-label="Next"
              title="Next (Right arrow)"
              className="absolute right-2 sm:right-5 z-20 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right" aria-hidden="true">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>

            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[11px] text-white/50 pointer-events-none bg-black/40 px-3 py-1 rounded-full">
              Scroll / double-click to zoom · drag to pan
            </span>
          </div>

          {/* Bottom Filmstrip */}
          <div
            ref={filmstripRef}
            className="flex-shrink-0 flex items-center gap-2 overflow-x-auto no-scrollbar px-4 py-3 bg-black/60 border-t border-white/10"
          >
            {filtered.map((item, idx) => (
              <button
                key={item.id}
                data-strip={idx}
                onClick={() => {
                  setActiveModalIndex(idx);
                  setZoom(1);
                  setPan({ x: 0, y: 0 });
                }}
                aria-label={`Go to clipping ${idx + 1}`}
                className={`relative flex-shrink-0 w-12 h-16 rounded-md overflow-hidden border-2 transition-all ${
                  idx === activeModalIndex
                    ? 'border-[#F59E0B] scale-105 shadow-md shadow-[#FFC107]/40 ring-1 ring-[#FFC107]'
                    : 'border-transparent opacity-60 hover:opacity-100 hover:scale-102'
                }`}
              >
                <img
                  src={item.src}
                  alt=""
                  className="w-full h-full object-cover object-top"
                />
              </button>
            ))}
          </div>
        </div>
      )}

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
