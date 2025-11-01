import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="200" height="40" viewBox="0 0 200 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="'Playfair Display', serif" fontSize="24" fill="hsl(var(--primary))">
        ANANDOBRAHMA
      </text>
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.4 3.3 4.4s-1.4 1.4-3.3 1.4c-1 .8-2.1 1.4-3.3 1.4-1.6 0-2.8-.8-4.4-.8-1.6 0-2.8.8-4.4.8s-2.8-.8-4.4-.8-2.8.8-4.4.8-1.4-1.4-1.4-1.4s1.4-1.4 3.3-1.4c1.9 0 3.3-1.4 3.3-1.4s-1.4-1.4-3.3-1.4c-1.9 0-3.3 1.4-3.3 1.4s1.4-2.9 3.3-4.4C6.4 4.8 5 4 5 4s1.4.8 2.8.8c1.4 0 2.8-.8 2.8-.8s1.4.8 2.8.8c1.4 0 2.8-.8 2.8-.8s1.4.8 2.8.8c1.4 0 2.8-.8 2.8-.8z" />
    </svg>
  );
}
