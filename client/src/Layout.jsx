import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { useState } from 'react';

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className='flex h-screen w-full bg-slate-50 relative'>
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 z-20 lg:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar - hidden on mobile unless open */}
      <div className={`fixed inset-y-0 left-0 z-30 transform lg:static lg:translate-x-0 transition-transform duration-300 w-[280px] lg:w-1/6 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      <main className='flex-1 flex flex-col h-screen overflow-hidden w-full lg:w-5/6'>
        {/* Mobile Header with Hamburger Menu */}
        <div className="lg:hidden p-4 bg-white border-b border-slate-200 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className='w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-lg'>
              E
            </div>
            <h1 className="text-lg font-bold text-slate-800 tracking-tight">Employee Hub</h1>
          </div>
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors border border-slate-200 bg-white shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;