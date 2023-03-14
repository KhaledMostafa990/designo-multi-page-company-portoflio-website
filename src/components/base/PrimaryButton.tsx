import React from 'react';

export function PrimaryButton({
  children,
  classes,
  onLight,
}: {
  children: React.ReactNode;
  classes?: string;
  onLight: boolean;
}) {
  const textColor = onLight ? 'text-white' : 'text-black';
  const bgColor = onLight ? 'bg-primary-default' : 'bg-white';
  const hoverColor = onLight ? '' : 'hover:text-white';
  return (
    <>
      <button
        className={`${textColor} ${bgColor} ${hoverColor} text-sm font-medium py-4 px-7 rounded-lg 
                  hover:bg-secondary-default transition-all duration-500 uppercase
                 ${classes} }`}
      >
        {children}
      </button>
    </>
  );
}
