'use client';

import { useEffect, useState, useRef } from 'react';
import CustomButton from '@/components/CustomButton';
import CustomInput from '@/components/CustomInput';
import { handleSendEmail } from '@/helpers/sendEmail.helpers';

export default function () {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [emailAlert, setEmailAlert] = useState<{
    success: boolean | null;
    message: string;
  }>({
    success: null,
    message: '',
  });

  useEffect(() => {
    if (emailAlert.success) {
      formRef.current?.reset();
      setTimeout(() => {
        setEmailAlert({
          success: null,
          message: '',
        });
      }, 10000);
    }
  }, [emailAlert]);

  const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, email, message } = e.target as HTMLFormElement;

    ('use server');
    handleSendEmail({
      name: username.value,
      email: email.value,
      message: message.value,
    })
      .then((res) => {
        console.log('data front', res);

        if (res) {
          setEmailAlert({
            success: true,
            message: 'Email sent successfully!',
          });
        } else {
          setEmailAlert({
            success: false,
            message: 'Error to send email!',
          });
        }
      })
      .catch((err) => {
        console.log(err);
        setEmailAlert({
          success: false,
          message: 'Error to send email!',
        });
      });
  };

  return (
    <>
      <article className='lg:max-w-5xl h-[90vh] mx-auto flex flex-col justify-center items-center'>
        {emailAlert.success !== null && (
          <span
            className={`my-5 ${
              emailAlert.success ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {emailAlert.message}
          </span>
        )}
        <form
          ref={formRef}
          className='w-full md:max-w-[70%] space-y-3 py-3 px-4 bg-[#292b36] rounded-lg'
          autoComplete='off'
          onSubmit={handleSend}
        >
          <CustomInput label='Name'>
            <input name='username' className={`rounded-md p-2 outline-none`} />
          </CustomInput>
          <CustomInput label='Email'>
            <input
              name='email'
              type='email'
              className={`rounded-md p-2 outline-none`}
            />
          </CustomInput>
          <CustomInput label='Message'>
            <textarea
              name='message'
              className={`rounded-md p-2 outline-none resize-none`}
              cols={30}
              rows={5}
            ></textarea>
          </CustomInput>

          <div className='flex justify-end'>
            <CustomButton
              type='submit'
              classes='w-20 h-8 md:w-32 md:h-10 group relative inline-block overflow-hidden'
            >
              <span className='absolute top-[15%] md:top-[20%] left-[20%] md:left-[33%] group-hover:-translate-x-[15%] transition duration-300 ease-in-out z-20'>
                Submit
              </span>
              <span className='absolute right-0 top-[15%] md:top-[20%] translate-x-[100%] group-hover:-translate-x-[20%] md:group-hover:-translate-x-[50%] transition duration-300 ease-in-out z-10'>
                &#10141;
              </span>
            </CustomButton>
          </div>
        </form>
      </article>
    </>
  );
}
