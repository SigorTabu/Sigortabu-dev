import React from 'react';

// Loading Spinner Component
export default function LoadingSpinner({ size = 'md', text = 'Yükleniyor...', fullScreen = false }) {
  const sizeClasses = {
    sm: 'h-4 w-4 border-2',
    md: 'h-8 w-8 border-3',
    lg: 'h-12 w-12 border-4',
    xl: 'h-16 w-16 border-4'
  };

  const spinner = (
    <div className="flex flex-col items-center justify-center space-y-3">
      <div className={`${sizeClasses[size]} border-primary border-t-transparent rounded-full animate-spin`}></div>
      {text && <p className="text-gray-600 font-medium animate-pulse">{text}</p>}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
        {spinner}
      </div>
    );
  }

  return spinner;
}

// Button Loading State
export function LoadingButton({ 
  loading, 
  children, 
  className = '', 
  disabled = false,
  ...props 
}) {
  return (
    <button
      className={`relative ${className} ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
      disabled={loading || disabled}
      {...props}
    >
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </span>
      )}
      <span className={loading ? 'invisible' : ''}>{children}</span>
    </button>
  );
}

// Inline Loading (küçük spinner)
export function InlineLoading({ className = '' }) {
  return (
    <div className={`inline-block h-4 w-4 border-2 border-primary border-t-transparent rounded-full animate-spin ${className}`}></div>
  );
}

// Skeleton Loading (Placeholder)
export function SkeletonLoader({ lines = 3, className = '' }) {
  return (
    <div className={`space-y-3 animate-pulse ${className}`}>
      {[...Array(lines)].map((_, i) => (
        <div key={i} className="h-4 bg-gray-200 rounded"></div>
      ))}
    </div>
  );
}

