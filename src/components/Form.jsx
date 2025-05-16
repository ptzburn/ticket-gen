import React from 'react'
import { useForm } from 'react-hook-form'
import InfoIcon from './icons/InfoIcon.jsx'

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm({
    mode: 'onBlur'
  })

  const onSubmit = user => {
    alert(JSON.stringify(user))
    reset()
  }
  return (
    <form
      className="text-white items-center flex flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col mb-5">
        <p>Upload Avatar</p>
        <label
          className="h-30 border-dashed border-1 border-violet-300 rounded-md w-md text-center
        bg-gray-300/10 mt-1 flex items-center justify-center cursor-pointer flex-col"
          htmlFor="upload"
        >
          <div className="border-[0.5px] border-violet-300 rounded-md p-2 bg-gray-500/40 mb-4">
            <img src="/icon-upload.svg" alt="upload icon" />
          </div>
          <p className="text-gray-300 cursor-pointer">
            Drag and drop or click to upload
          </p>
          <input
            type="file"
            name="upload"
            id="upload"
            accept=".jpg,.png"
            hidden
          />
        </label>
        <div className="flex w-md mt-2">
          <img src="/icon-info.svg" alt="info icon" />
          <p className="text-gray-200 text-[11px] ml-2">
            Upload your photo (JPEG or PNG, max size: 500KB)
          </p>
        </div>
      </div>
      <div>
        <p>Full Name</p>

        <input
          className={`input ${errors?.name ? 'border-red-400' : ' border-violet-300'}`}
          type="text"
          placeholder="John Doe"
          {...register('name', {
            required: 'Please enter your full name',
            minLength: {
              value: 5,
              message: 'Full name must be at least 5 characters long'
            }
          })}
        />
        {errors?.name && (
          <div className="text-red-400 text-[11px] mt-2 flex">
            <InfoIcon color={'red'} />
            <p className="ml-2">{errors?.name?.message || 'Error'}</p>
          </div>
        )}
      </div>
      <div className="mt-5">
        <p>Email Address</p>
        <input
          className={`input ${errors?.email ? 'border-red-400' : ' border-violet-300'}`}
          type="string"
          placeholder="example@email.com"
          {...register('email', {
            required: 'Please enter your email address',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Please enter a valid email address'
            }
          })}
        />
        {errors?.email && (
          <div className="text-red-400 text-[11px] mt-2 flex">
            <InfoIcon color={'red'} />
            <p className="ml-2">{errors?.email?.message || 'Error'}</p>
          </div>
        )}
      </div>
      <div className="mt-5 mb-10">
        <p>GitHub Username</p>
        <input
          className={`input ${errors?.username ? 'border-red-400' : ' border-violet-300'}`}
          type="text"
          placeholder="@yourusername"
          {...register('username', {
            required: 'Please enter your GitHub username',
            minLength: {
              value: 4,
              message: 'Username must be at least 4 characters long'
            },
            pattern: {
              value: /^@[\w-]+$/,
              message: 'Username must start with @'
            }
          })}
        />
        {errors?.username && (
          <div className="text-red-400 text-[11px] mt-2 flex">
            <InfoIcon color={'red'} />
            <p className="ml-2">{errors?.username?.message || 'Error'}</p>
          </div>
        )}
      </div>

      <input
        className="border-1 rounded-md h-12 w-md bg-[#f67464] text-black cursor-pointer"
        type="submit"
        value="Generate My Ticket"
        disabled={!isValid}
      />
    </form>
  )
}
export default Form
