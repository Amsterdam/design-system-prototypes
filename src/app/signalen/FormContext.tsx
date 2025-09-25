import { createContext, useContext, useState } from 'react'

const FormContext = createContext(null)

export const useFormContext = () => {
  return useContext(FormContext)
}

export function FormProvider({ children }) {
  const [formData, setFormData] = useState({})

  const updateFormData = (updatedData) => {
    setFormData((prevData) => ({ ...prevData, ...updatedData }))
  }

  return <FormContext.Provider value={{ formData, updateFormData }}>{children}</FormContext.Provider>
}
