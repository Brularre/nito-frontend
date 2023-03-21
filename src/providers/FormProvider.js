import { FormContext } from '../contexts/FormContext';

export default function FormProvider({
  children,
  inputValues,
  setInputValues,
  errors,
  setErrors,
}) {
  const contextValues = {
    inputValues,
    setInputValues,
    errors,
    setErrors,
  };

  return (
    <FormContext.Provider value={contextValues}>
      {children}
    </FormContext.Provider>
  );
}
