'use client';

import React, { createContext, useContext, useState } from 'react';

type AlertType = 'success' | 'error' | string;

export interface AlertContextProps {
  type: AlertType;
  isOpen: boolean;
  message: string;
  onOpen: (type: AlertType, message: string) => void;
  onClose: () => void;
}

const AlertContext = createContext<AlertContextProps>({
  type: '',
  isOpen: false,
  message: '',
  onOpen: () => {},
  onClose: () => {},
});

export const AlertProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState({
    isOpen: false,
    type: 'success',
    message: '',
  });

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: (type: AlertType, message: string) => setState({ isOpen: true, type, message }),
        onClose: () => setState({ isOpen: false, message: '', type: state.type }),
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
