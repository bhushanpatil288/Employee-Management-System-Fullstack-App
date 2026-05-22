import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from "./common";

const SIDEBAR_MENU_ITEMS = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Add employees",
    path: "/add-employees"
  },
  {
    name: "Employees List",
    path: "/employees-list"
  }
]

function Sidebar({ onClose }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className='w-full h-full bg-white border-r border-slate-200 flex flex-col shadow-sm'>
      <div className='p-6 border-b border-slate-100 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <div className='w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xl'>
            E
          </div>
          <h2 className='text-xl font-bold text-slate-800 tracking-tight'>Employee Hub</h2>
        </div>
        {/* Mobile close button inside sidebar */}
        <button
          onClick={onClose}
          className="lg:hidden p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>

      <nav className='flex-1 px-4 py-6 overflow-y-auto'>
        <ul className='flex flex-col gap-1.5'>
          {SIDEBAR_MENU_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => onClose && onClose()}
                  className={`flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium ${isActive
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className='p-4 border-t border-slate-100'>
        <Button
          onClick={() => {
            if (onClose) onClose();
            navigate("/logout");
          }}
          className="w-full bg-white border border-slate-200 hover:bg-red-50 hover:text-red-600 hover:border-red-100 text-slate-700 font-medium py-2.5 rounded-lg transition-all duration-200 shadow-sm text-sm"
        >
          Logout
        </Button>
      </div>
    </aside>
  )
}

export default Sidebar