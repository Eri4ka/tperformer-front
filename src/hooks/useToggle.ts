import { RefObject, useEffect, useRef, useState } from 'react';

type THookReturn<T> = {
  isOpen: boolean;
  handleToggle: () => void;
  targetRef: RefObject<T>;
};

export const useToggle = <T extends HTMLElement>(): THookReturn<T> => {
  const [isOpen, setIsOpen] = useState(false);
  const targetRef = useRef<T>(null);

  const handleToggle = () => setIsOpen((current) => !current);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (targetRef.current && !targetRef.current?.contains(event.target as T)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return { isOpen, handleToggle, targetRef };
};
