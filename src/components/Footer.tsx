
import React from 'react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-app-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-right">
          <div>
            <h3 className="text-xl font-bold mb-4">تعلّم اللغة</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-app-primary transition-colors">المقاطع المقترحة</a></li>
              <li><a href="#" className="hover:text-app-primary transition-colors">قوائم المفردات</a></li>
              <li><a href="#" className="hover:text-app-primary transition-colors">الاختبارات</a></li>
              <li><a href="#" className="hover:text-app-primary transition-colors">مستويات اللغة</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">عن المنصة</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-app-primary transition-colors">من نحن</a></li>
              <li><a href="#" className="hover:text-app-primary transition-colors">فريق العمل</a></li>
              <li><a href="#" className="hover:text-app-primary transition-colors">الشروط والأحكام</a></li>
              <li><a href="#" className="hover:text-app-primary transition-colors">سياسة الخصوصية</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">المساعدة</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-app-primary transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="#" className="hover:text-app-primary transition-colors">الدعم الفني</a></li>
              <li><a href="#" className="hover:text-app-primary transition-colors">تواصل معنا</a></li>
              <li><a href="#" className="hover:text-app-primary transition-colors">الاقتراحات</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">انضم الآن</h3>
            <p className="mb-4 text-gray-300">اشترك في قائمة الانتظار للحصول على إشعار عند إطلاق المنصة</p>
            <div className="flex flex-col gap-2">
              <Button variant="outline" className="border-app-primary text-app-primary hover:bg-app-primary hover:text-white transition-colors w-full">
                انضم إلى قائمة الانتظار
              </Button>
            </div>
            <div className="mt-4 flex gap-4 justify-end">
              <a href="#" className="hover:text-app-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="hover:text-app-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-app-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400">جميع الحقوق محفوظة © {new Date().getFullYear()} Kalima</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
