
// import React from 'react';
// import { useTranslation } from 'react-i18next';
// import { Button } from '@/components/ui/button';

// const CTASection = () => {
//   const { t } = useTranslation('cta');

//   return (
//     <section className="py-16 bg-gradient-to-br from-app-primary to-app-secondary text-white">
//       <div className="container mx-auto px-4 text-center">
//         <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto">
//           {t('title')}
//         </h2>
//         <p className="max-w-2xl mx-auto mb-8 text-gray-100">
//           {t('description')}
//         </p>
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//           <Button className="bg-white text-app-primary hover:bg-gray-100 transition-colors py-6 px-8 text-lg">
//             {t('join')}
//           </Button>
//           <Button
//             variant="outline"
//             className="border-white text-white hover:bg-white/10 transition-colors py-6 px-8 text-lg"
//           >
//             {t('learnMore')}
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CTASection;
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  const { t, i18n } = useTranslation('cta');
  const isRTL = i18n.language === 'ar';

  return (
    <section
      className="py-16 bg-gradient-to-br from-app-primary to-app-secondary text-white"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto">
          {t('title')}
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-100">
          {t('description')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="bg-white text-app-primary hover:bg-gray-100 transition-colors py-6 px-8 text-lg">
            {t('join')}
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white/10 transition-colors py-6 px-8 text-lg"
          >
            {t('learnMore')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
