
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-app-primary to-app-secondary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto">
          ابدأ رحلتك في تعلم اللغة الإنجليزية بطريقة تفاعلية وممتعة
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-100">
          انضم إلى آلاف المتعلمين الذين يطورون مهاراتهم اللغوية من خلال محتوى يوتيوب الأصلي.
          الآن هو الوقت المناسب لتعلم الإنجليزية بطريقة عملية وفعالة.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            className="bg-white text-app-primary hover:bg-gray-100 transition-colors py-6 px-8 text-lg"
          >
            انضم إلى قائمة الانتظار
          </Button>
          <Button 
            variant="outline"
            className="border-white text-white hover:bg-white/10 transition-colors py-6 px-8 text-lg"
          >
            تعرف على المزيد
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
