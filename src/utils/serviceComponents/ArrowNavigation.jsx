import { useEffect, useState } from "react";

const action = {
  goTop: (prev) => ({ y: prev.y, x: prev.x - 1 }),
  goBot: (prev) => ({ y: prev.y, x: prev.x + 1 }),
  goLeft: (prev) => ({ y: prev.y - 1, x: prev.x }),
  goRight: (prev) => ({ y: prev.y + 1, x: prev.x }),
};

export const ArrowNavigation = ({ children }) => {
  const [currentFocus, setCurrentFocus] = useState({ y: 0, x: 0 });

  useEffect(() => {
    const navItems = [
      ...document.querySelectorAll("button"),
      ...document.querySelectorAll('input[type="checkbox"]'),
      ...document.querySelectorAll("a"),
    ];

    let sliced = [];

    for (let i = 0; i < navItems.length; i += 3) {
      sliced.push(navItems.slice(i, i + 3));
    }
    function focusHandle(event) {
      const keyPressed = event.key;
      if (keyPressed == "ArrowUp" && currentFocus.x !== 0) {
        setCurrentFocus((prev) => action.goTop(prev));
      }
      if (
        keyPressed == "ArrowDown" &&
        currentFocus.x < sliced[currentFocus.x].length
      ) {
        setCurrentFocus((prev) => action.goBot(prev));
      }
      if (keyPressed == "ArrowLeft" && currentFocus.y !== 0) {
        setCurrentFocus((prev) => action.goLeft(prev));
      }
      if (
        keyPressed == "ArrowRight" &&
        currentFocus.y < sliced[currentFocus.x].length - 1
      ) {
        setCurrentFocus((prev) => action.goRight(prev));
      }
    }

    document.addEventListener("keydown", focusHandle);

    sliced[currentFocus.x][currentFocus.y].focus();

    return () => {
      document.removeEventListener("keydown", focusHandle);
    };
  });

  return children;
};
