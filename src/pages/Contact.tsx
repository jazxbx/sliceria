import { FieldValues, useForm } from 'react-hook-form';

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    reset();
  };

  return (
    <div className='bg-orange flex flex-col items-center p-5 md:p-14'>
      <p className='lg:flex-1 text-5xl font-extrabold text-cream mb-5'>
        Contact Us
      </p>
      <form
        className='bg-white w-1/3 h-4/6 p-6 rounded-md md:text-xl flex flex-col gap-5'
        onSubmit={handleSubmit(onSubmit)}
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
            <p className='text-red-500'>{errors.name.message as string}</p>
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
            <p className='text-red-500'>{errors.email.message as string}</p>
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
            <p className='text-red-500'>{errors.message.message as string}</p>
          )}
        </div>

        <button type='submit' className='bg-yellow'>
          Submit
        </button>
      </form>
    </div>
  );
}
