"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useModal } from "@/context/ModalProvider";
import Button from "@/components/common/Button";

type ModalProps = {
  children: React.ReactNode;
};

export default function Modal({ children }: ModalProps) {
  const { setId } = useModal();

  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return mount
    ? createPortal(
        <div className="flex justify-center items-center fixed top-0 left-0 w-screen h-screen bg-grey-3/[0.75] dark:bg-grey-0/[0.75] z-50">
          <div className="flex flex-col bg-white rounded-xl tablet:w-[500px] w-[330px] p-5 space-y-8">
            {children}
            <div className="self-end">
              <Button
                text="Close"
                onClick={() => setId(null)}
                color="black"
              />
            </div>
          </div>
        </div>,
        document.getElementById("modal")!
      )
    : null;
}
