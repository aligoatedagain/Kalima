
// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { useTranslation } from 'react-i18next';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { t, i18n } = useTranslation();

//   const toggleLanguage = () => {
//     const newLang = i18n.language === 'ar' ? 'zh' : 'ar';
//     i18n.changeLanguage(newLang);
//   };

//   return (
//     <header className="bg-white shadow-sm sticky top-0 z-50">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center py-4">
//           {/* Language Switch Button */}
//           <div className="flex items-center">
//             <Button
//               variant="ghost"
//               size="sm"
//               className="text-gray-800 flex items-center gap-1"
//               onClick={toggleLanguage}
//             >
//               <span className="font-semibold">
//                 {i18n.language === 'ar' ? 'العربية' : '中文'}
//               </span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide"
//               >
//                 <path d="m6 9 6 6 6-6" />
//               </svg>
//             </Button>
//           </div>

//           {/* Logo */}
//           <div className="flex items-center">
//             <div className="flex gap-1">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="#9b87f5"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide"
//               >
//                 <path d="m4 6 8 8L20 6" />
//               </svg>
//               <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-app-primary to-app-bright">
//                 Kalima
//               </h1>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex gap-4 items-center">
//             <a href="#" className="text-gray-800 hover:text-app-primary transition-colors">
//               {t('howItWorks')}
//             </a>
//             <a href="#" className="text-gray-800 hover:text-app-primary transition-colors">
//               {t('features')}
//             </a>
//             <a href="#" className="text-gray-800 hover:text-app-primary transition-colors">
//               {t('pricing')}
//             </a>
//             <a href="#" className="text-gray-800 hover:text-app-primary transition-colors">
//               {t('about')}
//             </a>
//             <Button className="bg-app-primary hover:bg-app-secondary text-white transition-colors">
//               {t('joinNow')}
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="lucide"
//             >
//               <line x1="4" x2="20" y1="12" y2="12" />
//               <line x1="4" x2="20" y1="6" y2="6" />
//               <line x1="4" x2="20" y1="18" y2="18" />
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Navigation Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden py-4 border-t border-gray-100">
//             <div className="flex flex-col gap-3 items-start text-right">
//               <a href="#" className="block w-full py-2 text-gray-800 hover:text-app-primary transition-colors">
//                 {t('howItWorks')}
//               </a>
//               <a href="#" className="block w-full py-2 text-gray-800 hover:text-app-primary transition-colors">
//                 {t('features')}
//               </a>
//               <a href="#" className="block w-full py-2 text-gray-800 hover:text-app-primary transition-colors">
//                 {t('pricing')}
//               </a>
//               <a href="#" className="block w-full py-2 text-gray-800 hover:text-app-primary transition-colors">
//                 {t('about')}
//               </a>
//               <Button className="bg-app-primary hover:bg-app-secondary text-white transition-colors w-full mt-2">
//                 {t('joinNow')}
//               </Button>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;



import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  const { t, i18n } = useTranslation('header');

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-app-primary">FluentFriend</h1>

        {/* Language Dropdown */}
        <div className="relative w-52">
          <select
            onChange={handleLanguageChange}
            value={i18n.language}
            className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm shadow-md focus:outline-none focus:ring-2 focus:ring-app-primary focus:border-app-primary transition text-gray-700 w-full"
          >
            <option value="en">🇬🇧 English</option>
            <option value="ar">🇸🇦 العربية</option>
            <option value="zh">🇨🇳 中文</option>
            <option value="es">🇪🇸 Español</option>
            <option value="pt">🇵🇹 Português</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none h-4 w-4" />
        </div>
      </div>
    </header>
  );
};

export default Header;
