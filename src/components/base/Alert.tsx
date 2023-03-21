'use client';

import { useAlertContext } from '@/data/AlertContext';

/**
 * This is a global component that uses context to display a global alert message.
 */
export default function Alert() {
  const { isOpen, type, message, onClose } = useAlertContext();
  const isSuccess = type === 'success';

  const toggleAlert = () => {
    onClose();
  };

  return isOpen ? (
    <div className="fixed top-0 left-0 h-screen w-screen bg-dark-grey/70" onClick={toggleAlert}>
      <div
        className={`absolute top-[25%] left-[50%] z-50 translate-x-[-50%] rounded-lg text-center text-light-grey ${
          isSuccess ? ' bg-green-500' : ' bg-red-600'
        } py-8 px-6`}
      >
        <p>{isSuccess ? 'All good!' : 'Oops!'}</p>
        <p>{message ?? ''}</p>
      </div>
    </div>
  ) : null;
}
