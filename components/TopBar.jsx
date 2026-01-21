'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { User, LogOut, ChevronDown } from 'lucide-react';

export default function TopBar() {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    if (confirm('Are you sure you want to logout?')) {
      setShowDropdown(false);
      router.push('/login');
    }
  };

  return (
    <div className="fixed top-0 left-64 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 z-30">
      {/* Left side - can add breadcrumbs or page title here */}
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-semibold text-gray-900">Faculty Dashboard</h2>
      </div>

      {/* Right side - Profile Dropdown */}
      <div className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white text-sm font-bold">
            RK
          </div>
          <div className="text-left">
            <p className="text-sm font-medium text-gray-900">Dr. Rajesh Kumar</p>
            <p className="text-xs text-gray-500">Physics Faculty</p>
          </div>
          <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
        </button>

        {/* Dropdown Menu */}
        {showDropdown && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-40"
              onClick={() => setShowDropdown(false)}
            />
            
            {/* Dropdown */}
            <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50 overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <p className="text-sm font-medium text-gray-900">Dr. Rajesh Kumar</p>
                <p className="text-xs text-gray-500 mt-1">rajesh.kumar@institute.edu</p>
              </div>
              
              <Link
                href="/profile"
                onClick={() => setShowDropdown(false)}
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
              >
                <User className="w-5 h-5 text-primary-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">View Profile</p>
                  <p className="text-xs text-gray-500">Manage your account</p>
                </div>
              </Link>
              
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-danger-50 transition-colors duration-200 text-left border-t border-gray-100"
              >
                <LogOut className="w-5 h-5 text-danger-600" />
                <div>
                  <p className="text-sm font-medium text-danger-700">Logout</p>
                  <p className="text-xs text-danger-600">Sign out of your account</p>
                </div>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
