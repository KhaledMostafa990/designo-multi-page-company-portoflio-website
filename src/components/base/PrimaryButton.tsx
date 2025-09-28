import React from 'react';

export function PrimaryButton({
  children,
  classes,
  onLight,
  onClick,
  disabled,
  type,
}: {
  children: React.ReactNode;
  classes?: string;
  onLight: boolean;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}) {
  const textColor = onLight ? 'text-white' : 'text-black';
  const bgColor = onLight ? 'bg-primary-default' : 'bg-white';
  const hoverColor = onLight ? '' : 'hover:text-white';
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${textColor} ${bgColor} ${hoverColor} text-sm font-medium py-4 px-7 rounded-lg 
                  hover:bg-secondary-default transition-all duration-500 uppercase
                  disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-secondary-default/40
                 ${classes} }`}
      >
        {children}
      </button>
    </>
  );
}
