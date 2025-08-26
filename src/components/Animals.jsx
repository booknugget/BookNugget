// src/components/Animals.jsx
export const Owl = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="3"/>
    <circle cx="22" cy="26" r="6" fill="currentColor"/>
    <circle cx="42" cy="26" r="6" fill="currentColor"/>
    <path d="M16 40c6 8 26 8 32 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export const Fox = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 6l10 14 16 4-8 12 2 16-12-6-8 12-8-12-12 6 2-16-8-12 16-4L32 6z" 
      stroke="currentColor" strokeWidth="3" fill="none"/>
  </svg>
);

export const Elephant = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="32" r="14" stroke="currentColor" strokeWidth="3"/>
    <rect x="42" y="22" width="14" height="20" rx="7" stroke="currentColor" strokeWidth="3"/>
    <circle cx="26" cy="30" r="3" fill="currentColor"/>
  </svg>
);

export const Dolphin = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 36c8-14 26-18 40-10-2 6-6 14-20 18 0 4 0 10 4 12" 
      stroke="currentColor" strokeWidth="3" fill="none"/>
  </svg>
);
