import { useState } from "react";

export const DeplayedComponent = ({ children, time }) => {
  const [mount, setMount] = useState(false);

  setTimeout(() => {
    setMount(true);
  }, time);
  if (mount) return children;
};
