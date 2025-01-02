



import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getFCP(onPerfEntry);
    getLCP(onPerfEntry);
    getTTFB(onPerfEntry);
  }
};

export default reportWebVitals;



// reportWebVitals.js
// export function reportWebVitals(onPerfEntry) {
//   if (onPerfEntry && onPerfEntry instanceof Function) {
//     import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
//       getCLS(onPerfEntry);
//       getFID(onPerfEntry);
//       getFCP(onPerfEntry);
//       getLCP(onPerfEntry);
//       getTTFB(onPerfEntry);
//     });
//   }
// }

// export default reportWebVitals;


// reportWebVitals.js

// const reportWebVitals = (onPerfEntry) => {
//     if (onPerfEntry && onPerfEntry instanceof Function) {
//       import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
//         getCLS(onPerfEntry);
//         getFID(onPerfEntry);
//         getFCP(onPerfEntry);
//         getLCP(onPerfEntry);
//         getTTFB(onPerfEntry);
//       });
//     }
//   };
  
 
  