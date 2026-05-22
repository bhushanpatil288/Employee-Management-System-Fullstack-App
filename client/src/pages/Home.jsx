

function Home() {
  return (
    <div className="p-6 lg:p-10 max-w-5xl mx-auto h-full flex flex-col justify-center">
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-14 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
          Welcome to Employee Hub
        </h1>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
          The modern, all-in-one platform to manage your workforce efficiently. Add new team members, 
          track employee details, and streamline your daily human resources operations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
          <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100/50 transition-all hover:shadow-md">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Centralized Directory</h3>
            <p className="text-slate-600">Keep all your employee information securely organized in one accessible place.</p>
          </div>
          <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100/50 transition-all hover:shadow-md">
            <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Seamless Management</h3>
            <p className="text-slate-600">Easily add, update, or remove personnel records in just a few simple clicks.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;