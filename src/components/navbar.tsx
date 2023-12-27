'use client'


// import Link from 'next/link';
// import { useState, useEffect } from 'react';
// import {  usePathname } from 'next/navigation';




// export default function Navbar() {
//   const [navbar, setNavbar] = useState(false);
  
  // const [activeLink, setActiveLink] = useState('');
  // const pathname = usePathname();

//   useEffect(() => {
//     setActiveLink(pathname);
//   }, [pathname]);

  

//   return (
//     <div>
      
//       <nav className="w-full bg-zinc-200 text-gray-600 hover:text-black shadow-lg">
//         <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
//           <div>
//             <div className="flex items-center justify-between py-3 md:py-5 md:block">
//               <a href="#">
//                 <h2 className="text-2xl font-bold">WHT Calculator</h2>
//               </a>
//               <div className="md:hidden">
//                 <button
//                   className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
//                   onClick={() => setNavbar(!navbar)}
//                 >
//                   {navbar ? (
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="w-6 h-6"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   ) : (
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="w-6 h-6 "
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       strokeWidth={2}
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M4 6h16M4 12h16M4 18h16"
//                       />
//                     </svg>
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div>
//             <div
//               className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
//                 navbar ? 'block' : 'hidden'
//               }`}
//             >
//               <ul className="items-center justify-center text-gray-600 hover:text-black space-y-8 md:flex md:space-x-6 md:space-y-0">
//                 <li className={activeLink === '/' ? 'text-blue-500 hover:text-blue-700' : ''}>
//                   <Link href="/">
//                     Home
//                   </Link>
//                 </li>
//                 <li className={activeLink === '/salary' ? 'text-blue-500 hover:text-blue-700  ' : ''}>
//                   <Link href="/salary">
//                     Salary
//                   </Link>
//                 </li>
//                 <li className={activeLink === '/nonsalary' ? 'text-blue-500 hover:text-blue-700' : ''}>
//                   <Link href="/nonsalary">
//                     Non-Salary
//                   </Link>
//                 </li>
                
//               </ul>
//             </div>
//           </div>
//         </div>
//       </nav>
      
//     </div>
//   );
// }













'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {  usePathname } from 'next/navigation';

export default function Home() {
  const [navbar, setNavbar] = useState(false);
  const [screen, setScreen] = useState()
  const [activeLink, setActiveLink] = useState('');
  const pathname = usePathname();


  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);
  // console.log(activeLink)




  return (
    <div>
      <nav className={`w-full bg-slate-200  shadow ${navbar ? 'fixed top-0 slide-right' : 'relative'}`}>
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
                <h2 className="text-2xl text-gray-700 hover:text-black  font-bold">WHT Calculator</h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-600 hover:text-black"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-600 hover:text-blacke"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
              <div className={`relative ${navbar ? 'block slide-right' : 'hidden' } md:block mx-5 ml-auto `}>
                        <span className="absolute inset-y-0 left-0  flex items-center py-4">
                            <button
                                type="submit"
                                className="p-2 focus:outline-none focus:ring"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </span>
                        <input
                            type="search"
                            name="Search"
                            placeholder="Search..."
                            className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
                        />
                    </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block slide-right z-50' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center text-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className=  {activeLink === '/salary' ? 'text-blue-600 font-bold hover:text-blue-700' : 'text-gray-600 hover:text-black'}>
                  <Link href="/salary">Salary</Link>
                </li>
                <li className={activeLink === '/property' ? 'text-blue-600 font-bold hover:text-blue-700' :'text-gray-600 hover:text-black'}>
                  <Link href="/property">Property</Link>
                </li>
                <li className={activeLink === '/business' ? 'text-blue-600 font-bold hover:text-blue-700' : 'text-gray-600 hover:text-black'}>
                  <Link href="/business">Business</Link>
                </li>
                <li className={activeLink === '/other' ? 'text-blue-600 font-bold hover:text-blue-700' : 'text-gray-600 hover:text-black'}>
                  <Link href="/other">Other</Link>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .slide-right {
          animation: slide-right 0.5s ease-in-out;
          right: 0;
          z-index: 1000
        }

        @keyframes slide-right {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .slide-left {
          animation: slide-left 0.5s ease-in-out;
          right: 0;
          z-index: 1000
        }

        @keyframes slide-left {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0%);
          }
        }


      `}</style>
    </div>
  );
}




