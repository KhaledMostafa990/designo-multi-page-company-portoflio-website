import { PrimaryButton } from "@/components/base";

interface ContactInputsProps {
  name: string;
  email: string;
  message: string;
  phone: string;
  button: string;
}

export function ContactForm({ formInputs }: { formInputs: ContactInputsProps }) {
  return (
    <form className='flex flex-col items-center justify-center gap-8 px-8 xl:items-start xl:pl-20 xl:flex-1'>

      <InputControl>
        <label className='bg-transparent text-white' htmlFor="name">{formInputs.name}</label>
        <input className="h-5 bg-transparent text-white  focus:outline-none focus:border-b-2 focus:border-white " type="text" name="name" id="name" />
      </InputControl>

      <InputControl>

        <label className='bg-transparent text-white' htmlFor="email">{formInputs.email}</label>
        <input className="h-5 bg-transparent text-white  focus:outline-none focus:border-b-2 focus:border-white " type="email" name="email" id="email" />
      </InputControl>

      <InputControl>

        <label className='bg-transparent text-white' htmlFor="phone">{formInputs.phone}</label>
        <input className="h-5 bg-transparent text-white  focus:outline-none focus:border-b-2 focus:border-white " type="tel" name="phone" id="phone" />
      </InputControl>

      <InputControl>

        <label className='bg-transparent text-white' htmlFor="message">{formInputs.message}</label>
        <textarea className='h-24 bg-transparent text-white  focus:outline-none focus:border-b-2 focus:border-white' name="message" id="message" cols={30} rows={10} />
      </InputControl>

      <PrimaryButton onLight={false} classes={'ml-auto px-12'}>{formInputs.button}</PrimaryButton>
    </form>
  );
}

function InputControl({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-full flex flex-col gap-2 border-b-2 border-white/20'>
      {children}
    </div>
  );
}
