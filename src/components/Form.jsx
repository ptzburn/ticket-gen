import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import InfoIcon from './icons/InfoIcon.jsx'
import Dropzone from './Dropzone.jsx'
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid }
  } = useForm({
    mode: 'onBlur'
  })
  const navigate = useNavigate()

  const onSubmit = data => {
    const formData = {
      name: data.name,
      email: data.email,
      username: data.username,
      avatar: data.avatar
        ? {
            name: data.avatar.name,
            size: data.avatar.size,
            type: data.avatar.type,
            preview: data.avatar.preview
          }
        : null
    }

    if (localStorage.getItem('firstLoadDone') !== null) {
      localStorage.removeItem('firstLoadDone')
    }

    navigate('/ticket', { state: formData })
    reset()
  }
  return (
    <form
      className="text-white items-center flex flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-5 block">
        <p>Upload Avatar</p>
        <Controller
          name="avatar"
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, value } }) => (
            <Dropzone onChange={onChange} value={value} />
          )}
        />
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
        className="border-1 rounded-md h-12 lg:w-md w-sm bg-[#f67464] text-black cursor-pointer hover:bg-rose-300"
        type="submit"
        value="Generate My Ticket"
        disabled={!isValid}
      />
    </form>
  )
}
export default Form
