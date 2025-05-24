import React from 'react';
import { useTranslation } from 'react-i18next';
import { BookMarked } from 'lucide-react';
import ramsey from '../assets/ramsey.jpg';

const Demo = () => {
  const { t, i18n } = useTranslation('demo');
  const isRTL = i18n.language === 'ar';

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-app-dark">{t('title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t('description')}</p>
        </div>

        <div className="max-w-6xl mx-auto bg-white rounded-xl overflow-hidden shadow-xl border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Video Player */}
            <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-l border-gray-200">
              <div className="bg-gray-800 p-3 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-sm">{t('playerLabel')}</div>
              </div>

              <div className="aspect-video relative">
                <img
                  src={ramsey}
                  alt="Ramsey"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div className="p-4 border-t border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex-1 text-right">
                    <p className="text-sm text-gray-600">{t('videoTitle')}</p>
                  </div>
                  <div>
                    <button className="p-2 rounded-full hover:bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                        <polyline points="16 6 12 2 8 6"></polyline>
                        <line x1="12" y1="2" x2="12" y2="15"></line>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-right">
                  <p className="text-sm text-gray-800">{t('videoDescription')}</p>
                </div>
              </div>
            </div>

            {/* Right Panel */}
            <div className="p-4 text-right">
              <div className="border-b border-gray-200 pb-4 mb-4">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center justify-end gap-2">
                  <span>{t('savedWords.title')}</span>
                  <BookMarked className="h-5 w-5 text-app-primary" />
                </h3>
                {['reintroduce', 'struggling', 'pizzeria'].map((word) => (
                  <div key={word} className="bg-app-light bg-opacity-50 p-2 rounded-lg">
                    <p className="font-medium text-gray-900">{t(`savedWords.${word}.word`)}</p>
                    <p className="text-sm text-gray-600">{t(`savedWords.${word}.translation`)}</p>
                  </div>
                ))}
              </div>

              <h3 className="font-bold text-gray-900 mb-2">{t('quiz.title')}</h3>
              <div className="p-3 border border-gray-200 rounded-lg mb-3">
                <p className="text-sm font-medium mb-2">{t('quiz.question')}</p>
                {['reintroduce', 'rebuild', 'remember'].map((choice, idx) => (
                  <div
                    key={idx}
                    className={`p-2 border ${
                      choice === 'reintroduce' ? 'border-app-primary bg-app-light' : 'border-gray-300 hover:bg-gray-50'
                    } rounded cursor-pointer`}
                  >
                    <p className="text-sm">{t(`quiz.options.${choice}`)}</p>
                  </div>
                ))}
              </div>

              <button className="w-full bg-app-primary text-white py-2 rounded-lg hover:bg-app-secondary transition-colors mt-2">
                {t('button')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;


// export default Demo;
// import React from 'react';
// import { BookMarked } from 'lucide-react';
// import ramsey from '../assets/ramsey.jpg'; 

// const Demo = () => {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold mb-4 text-app-dark">جرب منصتنا التفاعلية</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             شاهد كيف يمكنك تحويل أي فيديو يوتيوب إلى درس تفاعلي لتعلم اللغة الإنجليزية
//             مع ميزات متقدمة تساعدك على التطور بسرعة.
//           </p>
//         </div>

//         <div className="max-w-6xl mx-auto bg-white rounded-xl overflow-hidden shadow-xl border border-gray-200">
//           <div className="grid grid-cols-1 lg:grid-cols-3">
//             <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-l border-gray-200">
//               <div className="bg-gray-800 p-3 text-white flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//                   <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//                   <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                 </div>
//                 <div className="text-sm">English Video Player</div>
//               </div>

//               {/* 👇 Image-Based Video Area with Text Overlay */}
//               <div className="aspect-video relative">
//                 <img
//                   src={ramsey}
//                   alt="Ramsey"
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />
//                 {/* <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
//                   <p className="text-white text-lg font-medium bg-black bg-opacity-60 p-4 rounded-lg leading-relaxed max-w-3xl">
//                     r Italian restaurant attached Gordon knows this restaurant now has to reintroduce itself as the new happening Pizzeria in town thank you very much indeed
//                   </p>
//                 </div> */}
//               </div>

//               <div className="p-4 border-t border-gray-200">
//                 <div className="flex justify-between items-center mb-4">
//                   <div className="flex-1 text-right">
//                     {/* <h3 className="font-bold text-gray-900">Real Life English Lesson</h3> */}
//                     <p className="text-sm text-gray-600">درس إنجليزي من الحياة الواقعية</p>
//                   </div>
//                   <div>
//                     <button className="p-2 rounded-full hover:bg-gray-100">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                         <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
//                         <polyline points="16 6 12 2 8 6"></polyline>
//                         <line x1="12" y1="2" x2="12" y2="15"></line>
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//                 <div className="bg-gray-50 p-3 rounded-lg text-right">
//                   <p className="text-sm text-gray-800">
//                     Gordon Ramsay visits a struggling Italian restaurant that must reinvent itself as the go-to Pizzeria in town.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Right Panel: Vocabulary & Quiz */}
//             <div className="p-4 text-right">
//               <div className="border-b border-gray-200 pb-4 mb-4">
//                 <h3 className="font-bold text-gray-900 mb-2 flex items-center justify-end gap-2">
//                   <span>المفردات المحفوظة</span>
//                   <BookMarked className="h-5 w-5 text-app-primary" />
//                 </h3>
//                 <div className="space-y-2">
//                   <div className="bg-app-light bg-opacity-50 p-2 rounded-lg">
//                     <p className="font-medium text-gray-900">reintroduce</p>
//                     <p className="text-sm text-gray-600">إعادة تقديم</p>
//                   </div>
//                   <div className="bg-app-light bg-opacity-50 p-2 rounded-lg">
//                     <p className="font-medium text-gray-900">struggling</p>
//                     <p className="text-sm text-gray-600"> يواجه صعوبات </p>
//                   </div>
//                   <div className="bg-app-light bg-opacity-50 p-2 rounded-lg">
//                     <p className="font-medium text-gray-900">Pizzeria</p>
//                     <p className="text-sm text-gray-600">مطعم بيتزا</p>
//                   </div>
//                 </div>
//               </div>

//               <h3 className="font-bold text-gray-900 mb-2">الاختبار السريع</h3>
//               <div className="p-3 border border-gray-200 rounded-lg mb-3">
//                 <p className="text-sm font-medium mb-2">أكمل الجملة: "This restaurant has to ______ itself."</p>
//                 <div className="space-y-2">
//                   <div className="p-2 border border-app-primary bg-app-light rounded cursor-pointer">
//                     <p className="text-sm">reintroduce</p>
//                   </div>
//                   <div className="p-2 border border-gray-300 rounded hover:bg-gray-50 cursor-pointer">
//                     <p className="text-sm">rebuild</p>
//                   </div>
//                   <div className="p-2 border border-gray-300 rounded hover:bg-gray-50 cursor-pointer">
//                     <p className="text-sm">remember</p>
//                   </div>
//                 </div>
//               </div>

//               <button className="w-full bg-app-primary text-white py-2 rounded-lg hover:bg-app-secondary transition-colors mt-2">
//                 متابعة التعلم
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Demo;
