import { createContext, useState, ReactNode, FC } from "react";

interface ErrorContextType {
  error: boolean;
  setError: (value: boolean) => void;
}

export const ErrorContext = createContext<ErrorContextType>({
  error: false,
  setError: () => {},
});

interface ErrorProviderProps {
  children: ReactNode;
}

export const ErrorProvider: FC<ErrorProviderProps> = ({ children }) => {
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
