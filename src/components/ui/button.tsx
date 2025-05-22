import { ButtonHTMLAttributes, forwardRef } from 'react';

export const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ children, ...props }, ref) => (
    <button
      ref={ref}
      {...props}
      style={{
        padding: '8px 16px',
        background: '#1f2937',
        color: 'white',
        border: 'none',
        borderRadius: 6,
        cursor: 'pointer',
        ...props.style,
      }}
    >
      {children}
    </button>
  )
);
