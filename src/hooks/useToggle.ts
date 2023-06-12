import { useState, useCallback } from 'react';

export const useToggle = () => {
  const [isToggled, setToggle] = useState(false);
  const toggle = useCallback(() => setToggle((prev) => !prev), []);
  return { isToggled, toggle };
};
