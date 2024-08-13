"use client";

import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type ModalContextType = {
  id: string | null;
  setId: Dispatch<SetStateAction<string | null>>;
};

type ModalProviderProps = {
  children: React.ReactNode;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: ModalProviderProps) {
  const [id, setId] = useState<string | null>(null);

  return (
    <ModalContext.Provider
      value={{
        id,
        setId,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error("useModal must be used within a ModalContext");
  }

  return context;
}
