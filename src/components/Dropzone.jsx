import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import UploadIcon from './icons/UploadIcon.jsx'
import InfoIcon from './icons/InfoIcon.jsx'

const Dropzone = () => {
  const [file, setFile] = useState(null)
  const [error, setError] = useState('')

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (acceptedFiles?.length) {
      setFile(
        Object.assign(acceptedFiles[0], {
          preview: URL.createObjectURL(acceptedFiles[0])
        })
      )
      setError('')
    }

    if (rejectedFiles?.length) {
      setError(rejectedFiles[0].errors[0].message)
    }
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/png': ['.png']
    },
    maxFiles: 1,
    maxSize: 500 * 1000
  })

  const removeFile = () => {
    setFile(null)
  }

  return (
    <div {...getRootProps({})}>
      <div className="h-30 border-dashed border-1 border-violet-300 rounded-md lg:w-md w-sm text-center bg-gray-300/10 mt-1 flex items-center justify-center cursor-pointer flex-col">
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-gray-300">Drop your avatar here ...</p>
        ) : (
          <>
            {file ? (
              <>
                <div className="border-[0.5px] border-violet-300 rounded-md p-2 bg-gray-500/40 mb-4">
                  <img
                    className="max-h-[30px] max-w-[30px]"
                    src={file.preview}
                    alt={file.name}
                  />
                  <button type="button" onClick={() => removeFile()}>
                    x
                  </button>
                </div>
                <p className="text-gray-300 text-sm">{file.name}</p>
              </>
            ) : (
              <>
                <div className="border-[0.5px] border-violet-300 rounded-md p-2 bg-gray-500/40 mb-4">
                  <UploadIcon />
                </div>
                <p className="text-gray-300">
                  Drag and drop or click to upload
                </p>
              </>
            )}
          </>
        )}
      </div>
      <div className="flex w-sm lg:w-md mt-2">
        {error ? (
          <>
            <InfoIcon color={'red'} />
            <p className="text-red-400 text-[11px] ml-2">{error}</p>
          </>
        ) : (
          <>
            <InfoIcon color={'white'} />
            <p className="text-gray-200 text-[11px] ml-2">
              Upload your photo (JPEG or PNG, max size: 500KB)
            </p>
          </>
        )}
      </div>
    </div>
  )
}

export default Dropzone
