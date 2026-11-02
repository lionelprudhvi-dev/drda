import React from 'react';

export const metadata = {
  title: 'Farmer Producer Organisations (FPOs) | DRDA Vizianagaram District',
  description: '15 FPOs, 30,430 members, ₹9.35 Crore available funds — the FPO ecosystem of Vizianagaram District.',
};

const FPO_DATA = [
  { name: 'Komarada FPO', mandal: 'Komarada', members: '2,200', commodities: 'Exotic Vegetables, Cashew', funds: '₹68L' },
  { name: 'Kurupam FPO', mandal: 'Kurupam', members: '2,100', commodities: 'Turmeric, Ginger, MFP', funds: '₹62L' },
  { name: 'Salur FPO', mandal: 'Salur', members: '2,400', commodities: 'Paddy, Maize, Pulses', funds: '₹72L' },
  { name: 'Vizianagaram FPO', mandal: 'Vizianagaram', members: '2,500', commodities: 'Cashew, Vegetables', funds: '₹75L' },
  { name: 'Seethampeta FPO', mandal: 'Seethampeta', members: '2,000', commodities: 'Bamboo, MFP, Honey', funds: '₹60L' },
  { name: 'Bhamini FPO', mandal: 'Bhamini', members: '1,950', commodities: 'Paddy, Banana, Bamboo', funds: '₹58L' },
  { name: 'Veeraghattam FPO', mandal: 'Veeraghattam', members: '2,100', commodities: 'Cashew, Turmeric', funds: '₹63L' },
  { name: 'Garugubilli FPO', mandal: 'Garugubilli', members: '1,900', commodities: 'MFP, Honey, Tamarind', funds: '₹57L' },
  { name: 'Jiyyammavalasa FPO', mandal: 'Jiyyammavalasa', members: '2,150', commodities: 'Paddy, Pulses', funds: '₹64L' },
  { name: 'Makkuva FPO', mandal: 'Makkuva', members: '2,050', commodities: 'Cashew, Vegetables', funds: '₹61L' },
  { name: 'Gummalaxmipuram FPO', mandal: 'Gummalaxmipuram', members: '2,080', commodities: 'Paddy, Millets', funds: '₹62L' },
  { name: 'Pachipenta FPO', mandal: 'Pachipenta', members: '1,980', commodities: 'Bamboo, MFP', funds: '₹59L' },
  { name: 'Seethanagaram FPO', mandal: 'Seethanagaram', members: '2,200', commodities: 'Banana, Vegetables', funds: '₹66L' },
  { name: 'G.L.Puram FPO', mandal: 'G.L.Puram', members: '2,100', commodities: 'Seed Production, Desi Seeds', funds: '₹63L' },
  { name: 'Bobbili FPO', mandal: 'Bobbili', members: '2,620', commodities: 'Paddy, Cashew, Pulses', funds: '₹80L' },
];

export default function FPOsPage() {
  return (
    <>
      {/* Top Header */}
      <header className="sticky top-0 z-50 shadow-lg">
        {/* Helplines Strip */}
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
                          <a href="/fpo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FEF9C3] transition-colors font-semibold text-[#002147]">FPO Network</a>
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
                <a className="flex items-center gap-1 text-xs font-medium px-3 py-3.5 transition-colors whitespace-nowrap relative bg-[#FFD22C] text-[#0F172A] font-extrabold rounded-full px-3 py-1.5 shadow-sm" href="/livelihood">
                  Livelihoods
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down opacity-70" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#F59E0B] rounded-full"></span>
                </a>
                <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2.5 w-60 overflow-hidden">
                    <a href="/fpo" className="block px-5 py-2.5 text-sm font-semibold text-[#002147] bg-[#FEF9C3]/50 hover:bg-[#FEF08A] transition-colors">FPOs</a>
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
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#F59E0B]/10 blur-3xl pointer-events-none"></div>
            <div className="relative max-w-7xl mx-auto px-4">
              <div className="text-xs text-[#EA580C] font-bold mb-2 flex items-center gap-2">
                <a className="hover:text-white" href="/">Home</a>
                <span>/</span>
                <span>FPOs</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-[#002147] mb-3 tracking-tight">Farmer Producer Organisations</h1>
              <p className="text-[#334155] max-w-2xl font-medium leading-relaxed">
                15 FPOs across all 15 mandals, 30,430 farmer members, and ₹9.35 Crore available funds — powering collective agriculture.
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <section className="py-8 bg-[#1E293B]">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                <div className="bg-[#FFD22C] text-[#0F172A] rounded-xl p-4 text-center text-white">
                  <div className="text-2xl font-extrabold">15</div>
                  <div className="text-xs mt-1 opacity-90">FPOs</div>
                </div>
                <div className="bg-[#2E7D32] rounded-xl p-4 text-center text-white">
                  <div className="text-2xl font-extrabold">3,659</div>
                  <div className="text-xs mt-1 opacity-90">Farmer Producer Groups</div>
                </div>
                <div className="bg-[#F59E0B] rounded-xl p-4 text-center text-white">
                  <div className="text-2xl font-extrabold">921</div>
                  <div className="text-xs mt-1 opacity-90">New FPGs</div>
                </div>
                <div className="bg-[#7C3AED] rounded-xl p-4 text-center text-white">
                  <div className="text-2xl font-extrabold">30,430</div>
                  <div className="text-xs mt-1 opacity-90">Total Members</div>
                </div>
                <div className="bg-[#DB2777] rounded-xl p-4 text-center text-white">
                  <div className="text-2xl font-extrabold">11,240</div>
                  <div className="text-xs mt-1 opacity-90">New Members</div>
                </div>
              </div>
              <div className="mt-3 text-center">
                <span className="inline-block bg-[#FFD22C] text-[#0F172A] font-bold text-sm px-4 py-1.5 rounded-full shadow-sm">
                  Available Funds: ₹9.35 Crore
                </span>
              </div>
            </div>
          </section>

          {/* FPO Activities */}
          <section className="py-14 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-10">
                <span className="inline-block bg-[#FEFCE8] text-[#002147] border border-[#FDE68A] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                  FPO Activities
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#002147] mb-3">What FPOs Do</h2>
                <p className="text-[#64748B] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                  Collective action across the agricultural value chain
                </p>
                <div className="mt-4 h-1 w-16 bg-[#F59E0B] rounded-full mx-auto"></div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm card-hover cursor-pointer p-6 flex gap-4">
                  <div className="w-10 h-10 bg-[#FEFCE8] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-leaf text-[#002147]" aria-hidden="true">
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#002147] mb-1">Commodity Clusters</h3>
                    <p className="text-[#64748B] text-sm leading-relaxed">
                      Organised procurement across cashew, turmeric, ginger, MFP, paddy, bamboo, and exotic vegetables.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm card-hover cursor-pointer p-6 flex gap-4">
                  <div className="w-10 h-10 bg-[#FEFCE8] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up text-[#002147]" aria-hidden="true">
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#002147] mb-1">Market Linkages</h3>
                    <p className="text-[#64748B] text-sm leading-relaxed">
                      Direct connects to retail chains, government procurement, e-commerce platforms, and export markets.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm card-hover cursor-pointer p-6 flex gap-4">
                  <div className="w-10 h-10 bg-[#FEFCE8] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-banknote text-[#002147]" aria-hidden="true">
                      <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                      <circle cx="12" cy="12" r="2"></circle>
                      <path d="M6 12h.01M18 12h.01"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#002147] mb-1">Business Plans</h3>
                    <p className="text-[#64748B] text-sm leading-relaxed">
                      Each FPO has a board-approved business plan with working capital, infrastructure, and revenue targets.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm card-hover cursor-pointer p-6 flex gap-4">
                  <div className="w-10 h-10 bg-[#FEFCE8] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users text-[#002147]" aria-hidden="true">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#002147] mb-1">Member Growth</h3>
                    <p className="text-[#64748B] text-sm leading-relaxed">
                      3,659 existing FPGs + 921 new FPGs onboarded. 30,430 members, with 11,240 new additions.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm card-hover cursor-pointer p-6 flex gap-4">
                  <div className="w-10 h-10 bg-[#FEFCE8] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-leaf text-[#002147]" aria-hidden="true">
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#002147] mb-1">Procurement Activities</h3>
                    <p className="text-[#64748B] text-sm leading-relaxed">
                      Centralised buying of inputs (seeds, fertilisers) to reduce costs; collective selling to improve prices.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm card-hover cursor-pointer p-6 flex gap-4">
                  <div className="w-10 h-10 bg-[#FEFCE8] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up text-[#002147]" aria-hidden="true">
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#002147] mb-1">Value Addition</h3>
                    <p className="text-[#64748B] text-sm leading-relaxed">
                      Cashew processing, millet products, banana fiber, exotic veg — value added before sale for higher margins.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FPO Directory Table */}
          <section className="py-14 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-10">
                <span className="inline-block bg-[#FEFCE8] text-[#002147] border border-[#FDE68A] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                  15 FPOs
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#002147] mb-3">FPO Directory</h2>
                <p className="text-[#64748B] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                  One FPO per mandal covering all 15 mandals of Vizianagaram District
                </p>
                <div className="mt-4 h-1 w-16 bg-[#F59E0B] rounded-full mx-auto"></div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-[#E2E8F0] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#FFD22C] text-[#0F172A] text-white">
                        <th className="text-left px-4 py-3 font-semibold">FPO Name</th>
                        <th className="text-left px-4 py-3 font-semibold">Mandal</th>
                        <th className="text-right px-4 py-3 font-semibold hidden sm:table-cell">Members</th>
                        <th className="text-left px-4 py-3 font-semibold hidden md:table-cell">Main Commodities</th>
                        <th className="text-right px-4 py-3 font-semibold hidden lg:table-cell">Funds</th>
                      </tr>
                    </thead>
                    <tbody>
                      {FPO_DATA.map((fpo, index) => (
                        <tr key={fpo.name} className={index % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'}>
                          <td className="px-4 py-2.5 font-medium text-[#002147]">{fpo.name}</td>
                          <td className="px-4 py-2.5 text-[#64748B]">{fpo.mandal}</td>
                          <td className="px-4 py-2.5 text-right font-semibold text-[#002147] hidden sm:table-cell">{fpo.members}</td>
                          <td className="px-4 py-2.5 text-[#64748B] hidden md:table-cell">{fpo.commodities}</td>
                          <td className="px-4 py-2.5 text-right text-[#002147] font-semibold hidden lg:table-cell">{fpo.funds}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="bg-[#FEFCE8] font-bold">
                        <td className="px-4 py-3 text-[#002147]">Total (15 FPOs)</td>
                        <td className="px-4 py-3 text-[#64748B]">All 15 Mandals</td>
                        <td className="px-4 py-3 text-right text-[#002147] hidden sm:table-cell">30,330</td>
                        <td className="px-4 py-3 hidden md:table-cell text-[#64748B]">Multi-commodity</td>
                        <td className="px-4 py-3 text-right text-[#002147] hidden lg:table-cell">₹9.35 Cr</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Spotlight Section */}
          <section className="py-12 bg-gradient-to-r from-[#002147] via-[#061D3A] to-[#0A2540] text-white">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Spotlight: Exotic Vegetable Project</h2>
                  <p className="text-[#334155] text-sm mb-2">Komarada FPO | Villages: Kandivalasa &amp; Kummarigunta</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full border border-white/30">Colored Capsicum</span>
                    <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full border border-white/30">Broccoli</span>
                    <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full border border-white/30">Zucchini</span>
                    <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full border border-white/30">Cherry Tomato</span>
                    <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full border border-white/30">Red Cabbage</span>
                    <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full border border-white/30">Baby Corn</span>
                  </div>
                  <p className="text-[#334155] text-sm">
                    High-value export-quality exotic vegetables being grown by tribal farmers for premium markets.
                  </p>
                </div>
                <a
                  className="flex items-center gap-2 bg-[#FFD22C] text-[#0F172A] font-bold px-6 py-3 rounded-full hover:bg-[#D97706] transition-colors flex-shrink-0 shadow-lg"
                  href="/livelihood#exotic-vegetables"
                >
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#061D3A] text-gray-400">
        {/* Red Helpline Banner */}
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
            <p className="text-xs text-[#D97706] font-medium italic leading-relaxed">
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
              <li><a className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/"><span className="text-[#D97706] text-xs">›</span> Home</a></li>
              <li><a className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/about/drda"><span className="text-[#D97706] text-xs">›</span> About DRDA</a></li>
              <li><a className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/about/district"><span className="text-[#D97706] text-xs">›</span> District Profile</a></li>
              <li><a className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/schemes"><span className="text-[#D97706] text-xs">›</span> Government Schemes</a></li>
              <li><a className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/press-releases#media-coverage"><span className="text-[#D97706] text-xs">›</span> Media Coverage</a></li>
              <li><a className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/success-stories"><span className="text-[#D97706] text-xs">›</span> Success Stories</a></li>
              <li><a className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/dashboard"><span className="text-[#D97706] text-xs">›</span> Dashboard</a></li>
              <li><a className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/about/whos-who"><span className="text-[#D97706] text-xs">›</span> Who&#x27;s Who</a></li>
              <li><a className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/sitemap"><span className="text-[#D97706] text-xs">›</span> Sitemap</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4 border-b border-gray-800 pb-2">Citizen Services</h3>
            <ul className="space-y-2">
              <li><a className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/pgrs"><span className="text-[#D97706] text-xs">›</span> Share Your Concern (PGRS)</a></li>
              <li><a className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/ivrs"><span className="text-[#D97706] text-xs">›</span> IVRS Services (1902)</a></li>
              <li><a className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/serp"><span className="text-[#D97706] text-xs">›</span> SERP Corner</a></li>
              <li><a className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/fpo"><span className="text-[#D97706] text-xs">›</span> FPO Network</a></li>
              <li><a className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/women-entrepreneurship"><span className="text-[#D97706] text-xs">›</span> Women Entrepreneurship</a></li>
              <li><a className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/one-family-one-entrepreneur"><span className="text-[#D97706] text-xs">›</span> One Family One Entrepreneur</a></li>
              <li><a className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5" href="/community-tourism"><span className="text-[#D97706] text-xs">›</span> Community Tourism</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4 border-b border-gray-800 pb-2">Important Links</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <a href="https://www.ap.gov.in" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D97706] text-xs">›</span> Government of AP
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link opacity-50" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                </a>
              </li>
              <li>
                <a href="https://www.serp.ap.gov.in" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D97706] text-xs">›</span> SERP Andhra Pradesh
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link opacity-50" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                </a>
              </li>
              <li>
                <a href="https://www.myscheme.gov.in/" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D97706] text-xs">›</span> myScheme – National Schemes Portal
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link opacity-50" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                </a>
              </li>
              <li>
                <a href="https://pgrs.ap.gov.in" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D97706] text-xs">›</span> PGRS Portal
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link opacity-50" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                </a>
              </li>
              <li>
                <a href="https://meeseva.ap.gov.in" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D97706] text-xs">›</span> MeeSeva
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link opacity-50" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                </a>
              </li>
              <li>
                <a href="https://treasury.ap.gov.in" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-[#FFD22C] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D97706] text-xs">›</span> AP Treasury
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
