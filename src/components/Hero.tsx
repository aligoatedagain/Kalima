// import React, { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { useToast } from '@/components/ui/use-toast';
// import emailjs from 'emailjs-com';
// import rogan from '../assets/JoeRogan.jpg';
// import { useTranslation } from 'react-i18next';

// const Hero = () => {
//   const { t } = useTranslation('hero'); // 👈 Loads from hero/ar.json or hero/zh.json
//   const [email, setEmail] = useState('');
//   const { toast } = useToast();
//   const [submittedEmails, setSubmittedEmails] = useState<string[]>([]);

//   useEffect(() => {
//     const stored = localStorage.getItem('submittedEmails');
//     if (stored) setSubmittedEmails(JSON.parse(stored));
//   }, []);

//   const isValidEmail = (email: string) => {
//     const regex = /^[a-zA-Z0-9._%+-]+@(?:gmail\.com|hotmail\.com|yahoo\.com|outlook\.com)$/;
//     return regex.test(email);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const trimmedEmail = email.trim().toLowerCase();

//     if (!isValidEmail(trimmedEmail)) {
//       toast({
//         title: t('invalid_email'),
//         description: t('email_description'),
//         duration: 5000,
//       });
//       return;
//     }

//     if (submittedEmails.includes(trimmedEmail)) {
//       toast({
//         title: t('already_registered'),
//         description: t('already_description'),
//         duration: 5000,
//       });
//       return;
//     }

//     emailjs
//       .send(
//         'service_xsnp95b',
//         'template_9x8e9ld',
//         { email: trimmedEmail },
//         '6J2nYGWVwTzCVfg6Q'
//       )
//       .then(() => {
//         toast({
//           title: t('success_title'),
//           description: t('success_description'),
//           duration: 5000,
//         });
//         const updated = [...submittedEmails, trimmedEmail];
//         setSubmittedEmails(updated);
//         localStorage.setItem('submittedEmails', JSON.stringify(updated));
//         setEmail('');
//       })
//       .catch((error) => {
//         console.error('EmailJS Error:', error);
//         toast({
//           title: t('error'),
//           description: t('error_description'),
//           duration: 5000,
//         });
//       });
//   };

//   return (
//     <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-app-light to-white">
//       <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-center opacity-5 bg-repeat-space"></div>
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//           {/* Text Section */}
//           <div className="text-right animate-fade-in">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-app-dark">
//               {t('headline')}
//             </h1>

//             <p className="text-lg md:text-xl mb-8 text-gray-700">
//               {t('description')}
//             </p>

//             <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mr-auto ml-0">
//               <Input
//                 type="email"
//                 placeholder={t('email_placeholder')}
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="bg-white focus-visible:ring-app-primary"
//                 dir="rtl"
//               />
//               <Button
//                 type="submit"
//                 className="bg-app-primary hover:bg-app-secondary text-white transition-colors"
//               >
//                 {t('join_now')}
//               </Button>
//             </form>
//           </div>

//           {/* Video Preview Section */}
//           <div className="relative animate-fade-in">
//             <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 float-animation">
//               <div className="p-2 bg-gray-800 text-white flex justify-between items-center">
//                 <div className="flex gap-2">
//                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                 </div>
//                 <div className="text-xs">English Learning App</div>
//               </div>
//               <div className="p-4">
//                 <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative">
//                   {rogan && <img src={rogan} alt="Rogan" />}
//                   <div className="absolute inset-0 flex items-center justify-center bg-black/30">
//                     <div className="w-16 h-16 bg-app-primary rounded-full flex items-center justify-center shadow-lg">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-8 w-8 text-white"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       >
//                         <polygon points="5 3 19 12 5 21 5 3" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-4 text-right">
//                   <p className="text-sm text-gray-700 mb-2">{t('subtitle')}</p>
//                   <div className="bg-gray-50 p-3 rounded-md mb-2">
//                     <p className="text-sm">
//                       <span className="text-app-primary font-medium">...</span> in fact in my mind he is great case scenario <span className="text-app-primary font-medium">...</span>
//                     </p>
//                   </div>
//                   <div className="grid grid-cols-2 gap-2 mt-3">
//                     <div className="bg-app-light p-2 rounded-md text-center">
//                       <p className="text-xs">in fact</p>
//                       <p className="text-xs text-gray-600">{t('trans_in_fact')}</p>
//                     </div>
//                     <div className="bg-app-light p-2 rounded-md text-center">
//                       <p className="text-xs">great case scenario</p>
//                       <p className="text-xs text-gray-600">{t('trans_case')}</p>
//                     </div>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import emailjs from 'emailjs-com';
import rogan from '../assets/JoeRogan.jpg';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation('hero');
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  const [submittedEmails, setSubmittedEmails] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('submittedEmails');
    if (stored) setSubmittedEmails(JSON.parse(stored));
  }, []);

  const isValidEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@(?:gmail\.com|hotmail\.com|yahoo\.com|outlook\.com)$/;
    return regex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim().toLowerCase();

    if (!isValidEmail(trimmedEmail)) {
      toast({
        title: t('invalid_email'),
        description: t('email_description'),
        duration: 5000,
      });
      return;
    }

    if (submittedEmails.includes(trimmedEmail)) {
      toast({
        title: t('already_registered'),
        description: t('already_description'),
        duration: 5000,
      });
      return;
    }

    emailjs
      .send(
        'service_xsnp95b',
        'template_9x8e9ld',
        { email: trimmedEmail },
        '6J2nYGWVwTzCVfg6Q'
      )
      .then(() => {
        toast({
          title: t('success_title'),
          description: t('success_description'),
          duration: 5000,
        });
        const updated = [...submittedEmails, trimmedEmail];
        setSubmittedEmails(updated);
        localStorage.setItem('submittedEmails', JSON.stringify(updated));
        setEmail('');
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        toast({
          title: t('error'),
          description: t('error_description'),
          duration: 5000,
        });
      });
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-app-light to-white">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-center opacity-5 bg-repeat-space"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div className="text-right animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-app-dark">
              {t('headline')}
            </h1>

            <p className="text-lg md:text-xl mb-8 text-gray-700">
              {t('description')}
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mr-auto ml-0"
            >
              <Input
                type="email"
                placeholder={t('email_placeholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white focus-visible:ring-app-primary"
                dir="rtl"
              />
              <Button
                type="submit"
                className="bg-app-primary hover:bg-app-secondary text-white transition-colors"
              >
                {t('join_now')}
              </Button>
            </form>
          </div>

          {/* Video Preview Section */}
          <div className="relative animate-fade-in">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 float-animation">
              <div className="p-2 bg-gray-800 text-white flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs">English Learning App</div>
              </div>
              <div className="p-4">
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative">
                  {rogan && <img src={rogan} alt="Rogan" />}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="w-16 h-16 bg-app-primary rounded-full flex items-center justify-center shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-right">
                  <p className="text-sm text-gray-700 mb-2">{t('subtitle')}</p>
                  <div className="bg-gray-50 p-3 rounded-md mb-2">
                    <p className="text-sm">
                      <span className="text-app-primary font-medium">...</span> in fact in my mind he is great case scenario <span className="text-app-primary font-medium">...</span>
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    <div className="bg-app-light p-2 rounded-md text-center">
                      <p className="text-xs">in fact</p>
                      <p className="text-xs text-gray-600">{t('trans_in_fact')}</p>
                    </div>
                    <div className="bg-app-light p-2 rounded-md text-center">
                      <p className="text-xs">great case scenario</p>
                      <p className="text-xs text-gray-600">{t('trans_case')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
