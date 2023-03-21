'use client';

// import { ContactInputsProps } from '@/components/ContactForm';

// Post Contact Message example for preview purposes

export const postContactMessage = async (): Promise<boolean> => {
  // return a fake promise with 50% chance of success or failure
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() >= 0.5;
      if (success) {
        resolve(true);
        return true;
      }
      reject(new Error('Failed to post contact message'));
      return false;
    }, 1000);
  });
};

// Post Email Contact Message when needed and environment variables is available

// export const postContactMessage = async (values: ContactInputsProps): Promise<boolean> => {
//   try {
//     const response = await fetch('/api/send-email', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(values),
//     });

//     const data = await response.json();
//     // console.log(data);
//     return true;
//   } catch (error) {
//     // console.error('Server Error:', error);
//     return false;
//   }
// };
