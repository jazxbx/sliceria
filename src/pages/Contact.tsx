import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [success, setSuccess] = useState(false);

  const postData = async (data: FieldValues) => {
    try {
      const res = await fetch(
        'https://sliceria-4c00c-default-rtdb.firebaseio.com/contact.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      if (!res.ok) {
        throw new Error('Failed to save data');
      }

      // console.log('Data saved successfully:', data);
      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  return (
    <div className='bg-orange flex flex-col items-center p-5 md:p-14'>
      <p className='lg:flex-1 text-5xl font-extrabold text-cream mb-5'>
        Contact Us
      </p>
      {success && (
        <p className='text-green-600 bg-yellow p-2 rounded-md my-5'>
          Submitted successfully!
        </p>
      )}
      <form
        className='bg-white lg:w-1/3 h-4/6 p-6 rounded-md md:text-xl flex flex-col gap-5'
        onSubmit={handleSubmit(postData)}
      >
        <div>
          <p>
            <label>Customer name:</label>
          </p>
          <input
            {...register('name', {
              required: 'Name is required',
              minLength: {
                value: 3,
                message: 'Name must be at least 3 characters',
              },
            })}
            className='border border-grey p-1 w-full'
          />
          {errors.name?.message && (
            <p className='text-red-500 text-sm'>
              {errors.name.message as string}
            </p>
          )}
        </div>

        <div>
          <p>
            <label>Email:</label>
          </p>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Please enter a valid email',
              },
            })}
            className='border border-grey p-1 w-full'
          />
          {errors.email?.message && (
            <p className='text-red-500 text-sm'>
              {errors.email.message as string}
            </p>
          )}
        </div>

        <div>
          <p>
            <label>Message:</label>
          </p>
          <textarea
            {...register('message', {
              required: 'Message is required',
            })}
            className='border border-grey p-1 w-full'
          />
          {errors.message && (
            <p className='text-red-500 text-sm'>
              {errors.message.message as string}
            </p>
          )}
        </div>

        <button type='submit' className='bg-yellow rounded-lg p-3'>
          Submit
        </button>
      </form>
    </div>
  );
}
