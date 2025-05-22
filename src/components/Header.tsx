
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-800 flex items-center gap-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="font-semibold">العربية</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </Button>
          </div>

          <div className="flex items-center">
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9b87f5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide"
              >
                <path d="m4 6 8 8L20 6" />
              </svg>
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-app-primary to-app-bright">
                Kalima
              </h1>
            </div>
          </div>

          <div className="hidden md:flex gap-4 items-center">
            {/* <a href="#" className="text-gray-800 hover:text-app-primary transition-colors">
              كيف يعمل
            </a>
            <a href="#" className="text-gray-800 hover:text-app-primary transition-colors">
              المميزات
            </a>
            <a href="#" className="text-gray-800 hover:text-app-primary transition-colors">
              الأسعار
            </a>
            <a href="#" className="text-gray-800 hover:text-app-primary transition-colors">
              عن المنصة
            </a> */}
            <Button 
              className="bg-app-primary hover:bg-app-secondary text-white transition-colors"
            >
              انضم الآن
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-3 items-start text-right">
              <a href="#" className="block w-full py-2 text-gray-800 hover:text-app-primary transition-colors">
                كيف يعمل
              </a>
              <a href="#" className="block w-full py-2 text-gray-800 hover:text-app-primary transition-colors">
                المميزات
              </a>
              <a href="#" className="block w-full py-2 text-gray-800 hover:text-app-primary transition-colors">
                الأسعار
              </a>
              <a href="#" className="block w-full py-2 text-gray-800 hover:text-app-primary transition-colors">
                عن المنصة
              </a>
              <Button 
                className="bg-app-primary hover:bg-app-secondary text-white transition-colors w-full mt-2"
              >
                انضم الآن
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
