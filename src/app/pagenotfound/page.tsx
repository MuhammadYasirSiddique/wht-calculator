// // pages/404.js
// import React from 'react';
// import { useRouter } from 'next/router';

// const Custom404 = () => {
//   const router = useRouter();
//   const { pathname } = router;

//   // Check if the route is either "/salary" or "/nonsalary"
//   const isSpecialRoute = pathname === '/salary' || pathname === '/nonsalary';

//   // Render a custom message for the special routes, otherwise show the default 404 message
//   return (
//     <div>
//       <h1>404 - Page Not Found</h1>
//       {isSpecialRoute ? (
//         <p>Sorry, the page you are looking for does not exist.</p>
//       ) : (
//         <p>This is a custom 404 page for routes other than salary and nonsalary</p>
//       )}
//     </div>
//   );
// };

// export default Custom404;


import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page