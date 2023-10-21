import Link from 'next/link';
import { useRouter } from 'next/router';


function NavigationBar() {
  const router = useRouter();
  const pages = ['/Create0', '/Create1', '/Create2', '/Create3', '/Create4', '/Home', '/Edit_profile', '/Login', '/Profile']; // Define your pages here
  const currentPageIndex =pages.indexOf(router.pathname);

  return (
    <div style={{ position: 'fixed', bottom: '0', width: '100%', display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
      
      {currentPageIndex > 0 && (
        <Link href={pages[currentPageIndex - 1]}>
          <a>← Previous</a>
        </Link>
      )}

      {currentPageIndex < pages.length - 1 && (
        <Link href={pages[currentPageIndex + 1]}>
          <a>Next →</a>
        </Link>
      )}
      
    </div>
  );
}

export default NavigationBar;



// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function NavigationBar() {
//   // const navigate = useNavigate();
//   const pages = ['/Create0', '/Create1', '/Create2', '/Create3', '/Create4', '/Home', '/Edit_profile', '/Login', '/Profile'];
//   const currentPageIndex = pages.indexOf(window.location.pathname);

//   return (
//     <div style={{ position: 'fixed', bottom: '0', width: '100%', display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
      
//       {currentPageIndex > 0 && (
//         <button onClick={() => navigate(pages[currentPageIndex - 1])}>
//           ← Previous
//         </button>
//       )}

//       {currentPageIndex < pages.length - 1 && (
//         <button onClick={() => navigate(pages[currentPageIndex + 1])}>
//           Next →
//         </button>
//       )}
      
//     </div>
//   );
// }

// export default NavigationBar;

