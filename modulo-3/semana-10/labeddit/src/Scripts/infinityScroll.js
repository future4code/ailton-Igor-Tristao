// import React, { useState, useEffect } from "react";

// export const useInfinityScroll = () => {
//   const [currentPage, setCurrentPage] = useState(0);

//   useEffect(() => {
//     const intersectionObserver = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.intersectionRatio > 0) {
//           setCurrentPage(
//             (currentPageInsideState) => currentPageInsideState + 5
//           );
//         }
//       });
//     });

//     intersectionObserver.observe(document.querySelector("#sentinela"));

//     return () => intersectionObserver.disconnect();
//   }, [currentPage]);

//   return currentPage;
// };
