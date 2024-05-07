import { createContext, useState, FC } from "react";
import { ChildrenProps, ErrorContextType } from "../../Type";

export const ErrorContext = createContext<ErrorContextType>({
  error: false,
  setError: () => {},
});

export const ErrorProvider: FC<ChildrenProps> = ({ children }) => {
  const [error, setError] = useState(false);

  const setErrorState = (value: boolean) => {
    setError(value);
  };

  return (
    <ErrorContext.Provider value={{ error, setError: setErrorState }}>
      {children}
    </ErrorContext.Provider>
  );
};
