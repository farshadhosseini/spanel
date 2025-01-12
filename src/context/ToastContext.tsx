import { createContext, useContext, useState, PropsWithChildren } from "react";

interface ToastContextType {
  showMessage: (msg: string) => void;
}

interface IToastProps extends PropsWithChildren { }

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<IToastProps> = ({ children }) => {
  const [message, setMessage] = useState<string>('');
  const [show, setShow] = useState<boolean>(false);

  const showMessage = (msg: string) => {
    setMessage(msg);
    setShow(true);

    setTimeout(() => setShow(false), 3000);
  };

  return (
    <ToastContext.Provider value={{ showMessage }}>
      {children}
      {show && (
        <div className="font-yekan fixed left-4 bottom-4 bg-green-700 py-4 px-6 rounded-md text-white shadow-lg animate-bounce">
          {message}
        </div>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  return useContext(ToastContext) as ToastContextType;
};