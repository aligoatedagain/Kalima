import React from 'react';
import { Link, BookText, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Features = () => {
  const { t, i18n } = useTranslation('features');

  const isRTL = i18n.language === 'ar';

  const featureIcons = [Link, BookText, BookText, TrendingUp];

  const featureItems = t('features', { returnObjects: true }) as {
    title: string;
    description: string;
  }[];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4" dir={isRTL ? 'rtl' : 'ltr'}>
        <h2 className="text-3xl font-bold text-center mb-12 text-app-dark">{t('section_title')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureItems.map((feature, index) => {
            const Icon = featureIcons[index % featureIcons.length];
            return (
              <div
                key={index}
                className="feature-card bg-white p-6 rounded-xl shadow-md border border-gray-100 text-right"
              >
                <div className="bg-app-light inline-flex p-4 rounded-lg mb-4">
                  <Icon className="h-6 w-6 text-app-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-app-dark">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
