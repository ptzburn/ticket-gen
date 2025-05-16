import React from 'react'
import Form from '../components/Form.jsx'

const FormPage = () => {
  return (
    <div className="mt-20">
      <h1>
        <span className="max-w-200">
          Your Journey to Coding Conf 2025 Starts Here!
        </span>
      </h1>
      <p className="text-gray-300 text-center items-center mt-10 mb-15">
        Secure your spot at next year's biggest coding conference.
      </p>
      <Form />
    </div>
  )
}
export default FormPage
