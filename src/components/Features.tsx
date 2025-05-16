
import React from 'react';
import { Link, BookText, Bookmark, TrendingUp } from 'lucide-react';

const Features = () => {
  const features = [
    {
      id: 1,
      title: 'الصق رابط يوتيوب',
      description: 'حوّل أي فيديو إلى درس تفاعلي.',
      icon: Link,
    },
    {
      id: 2,
      title: 'ترجمة فورية مع الترجمة النصية',
      description: 'ترجمة الكلمات والعبارات المهمة للعربية تلقائيًا.',
      icon: BookText,
    },
    {
      id: 3,
      title: 'بطاقات تعليمية واختبارات ذكية',
      description: 'اختبر نفسك باستخدام بطاقات وامتحانات مبنية على الفيديو.',
      icon: BookText,
    },
    {
      id: 4,
      title: 'احفظ المفردات وتابع تقدمك',
      description: 'كوّن قائمة كلماتك الشخصية وتابع مستواك مع الوقت.',
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-app-dark">مميزات المنصة</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="feature-card bg-white p-6 rounded-xl shadow-md border border-gray-100 text-right"
            >
              <div className="bg-app-light inline-flex p-4 rounded-lg mb-4">
                <feature.icon className="h-6 w-6 text-app-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-app-dark">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
