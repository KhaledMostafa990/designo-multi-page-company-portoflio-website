'use client';
import Image from "next/image";
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { PrimaryButton } from "@/components/base";
import { CountryCode, isValidPhoneNumber, } from 'libphonenumber-js';
import errorIcon from '/public/assets/contact/desktop/icon-error.svg';
import { useState } from "react";

export interface ContactInputsProps {
  name: string;
  email: string;
  message: string;
  phone: string;
  button?: string;
}

const avaliableCountryLisr = [
  { value: "EG", label: "Egypt" },
  { value: 'US', label: 'United States' },
  { value: 'Uk', label: 'United Kingdom' },
  { value: 'CA', label: 'Canada' },
  { value: "AU", label: "Australia" },
  { value: 'MX', label: 'Mexico' },
  { value: 'AR', label: 'Argentina' },
  { value: 'BR', label: 'Brazil' },
]
export function ContactForm({ formInputs }: { formInputs: ContactInputsProps }) {

  const [country, setCountry] = useState<CountryCode>('EG');

  const ContactFormSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().min(20).max(200).required('Message is required'),
    phone: Yup.string().test('Valid phone number', 'Invalid Phone number', (value) => {
      if (!value) return false;
      const phoneNumber = value.replace(/[^\d]/g, "");
      console.log(phoneNumber)
      if (!isValidPhoneNumber(phoneNumber, country)) return false;
      return true;
    }).required('Phone number is required'),
  });

  const handleContactSubmit = async (values: ContactInputsProps, { setSubmitting }: FormikHelpers<ContactInputsProps>) => {
    try {
      const data = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
      alert('Thank you for your message! We will be in touch soon.');
      setSubmitting(false);
    } catch (error) {
      console.error(error);
      alert('Oops! Something went wrong. Please try again later.');
      setSubmitting(false);
    }
  }
  const validateInput = (input: string, getFieldMeta: any) => {
    return (getFieldMeta(input).touched && !getFieldMeta(input).error) ? true : false;
  }
  return (
    <Formik
      initialValues={{ name: '', email: '', phone: '', message: '' }}
      validationSchema={ContactFormSchema}
      onSubmit={handleContactSubmit}
    >
      {({ isSubmitting, getFieldMeta }) => (
        <Form className='flex flex-col items-center justify-center gap-8 px-8 xl:items-start xl:pl-20 xl:flex-1'>
          <InputControl>
            <label className='bg-transparent text-white' htmlFor="name">{formInputs.name}</label>
            <Field
              className={` h-5 bg-transparent text-white  border-b-2 border-transparent focus:outline-none  focus:border-white placeholder:text-white/60 placeholder:italic 
              ${validateInput('name', getFieldMeta) && 'border-white'}`}
              type="text"
              name="name"
              id="name"
              placeholder={'John Doe'}
            />
            <ErrorMessageWrapper input="name" />
          </InputControl>

          <InputControl>
            <label className='bg-transparent text-white' htmlFor="email">{formInputs.email}</label>
            <Field
              className={` h-5 bg-transparent text-white  border-b-2 border-transparent focus:outline-none  focus:border-white placeholder:text-white/60 placeholder:italic 
              ${validateInput('email', getFieldMeta) && 'border-white'}`}
              type="email"
              name="email"
              id="email"
              placeholder={'john@gmail.com'}
            />
            <ErrorMessageWrapper input="email" />
          </InputControl>

          <InputControl>
            <label className='bg-transparent text-white' htmlFor="phone">{formInputs.phone}</label>

            <select className="h-full bg-transparent text-white focus:outline-none  focus:border-white" name="country" id="country" value={country} onChange={(e) => setCountry(e.target.value as CountryCode)}>
              {avaliableCountryLisr.map((country) => (
                <option className='text-dark-grey' key={country.value} value={country.value}>{country.label}</option>
              ))}
            </select>

            <Field
              className={` h-5 bg-transparent text-white  border-b-2 border-transparent focus:outline-none  focus:border-white placeholder:text-white/60 placeholder:italic 
              ${validateInput('phone', getFieldMeta) && 'border-white'}`}
              type="text"
              name="phone"
              id="phone"
              placeholder={'+1 202-555-0134'}
            />
            <ErrorMessageWrapper input="phone" />
          </InputControl>

          <InputControl>
            <label className='bg-transparent text-white' htmlFor="message">{formInputs.message}</label>
            <Field
              as='textarea'
              className={`h-28 bg-transparent text-white  border-b-2 border-transparent focus:outline-none  focus:border-white placeholder:text-white/60 placeholder:italic 
              ${validateInput('message', getFieldMeta) && 'border-white'}`}
              id="message"
              name="message"
              placeholder={'How can we help you?'}
              cols={10}
              rows={10}
            />
            <ErrorMessageWrapper input="message" />
          </InputControl>

          <PrimaryButton onLight={false} classes={'ml-auto px-12'}>
            {isSubmitting ? 'Sending...' : formInputs.button}
          </PrimaryButton>
        </Form>
      )}
    </Formik>
  );
}

function InputControl({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`relative w-full flex flex-col gap-3 border-b-2 border-white/20 ${className}`}>
      {children}
    </div>
  );
}

function ErrorMessageWrapper({ input }: { input: string }) {
  return (
    <div className='text-white text-xs italic absolute bottom-2 right-0 flex gap-3 items-center'>
      <ErrorMessage name={input}>
        {msg => <> {msg} <Image src={errorIcon} alt='error icon' width={16} height={16} /></>}
      </ErrorMessage>
    </div>
  );

}