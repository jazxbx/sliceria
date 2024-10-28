import { FieldValues, useForm } from 'react-hook-form';

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data: FieldValues) => console.log(data);

  return (
    <div className=' bg-orange flex flex-col items-center p-5 md:p-14'>
      <p className='lg:flex-1 text-5xl font-extrabold text-cream mb-5'>
        Contact Us
      </p>
      <form
        className='bg-white flex-1 p-6 rounded-md md:text-xl flex flex-col gap-5'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <p>
            <label>Customer name:</label>
          </p>
          <input
            {...(register('name'),
            {
              required: 'Name is required',
              minLength: {
                value: 3,
              },
            })}
            className='border border-grey p-1'
          />
        </div>
        <div>
          <p>
            <label>Email:</label>
          </p>
          <input
            {...(register('email'),
            {
              required: 'Email is required',
            })}
            className='border border-grey p-1'
          />
        </div>
        <div>
          <p>
            <label>Message:</label>
          </p>
          <input {...register('message')} className='border border-grey p-1' />
        </div>
        <button type='button' className='bg-yellow'>
          Submit
        </button>
      </form>
    </div>
  );
}
