import { useEffect, useState } from "react";

const objectTrans = {
  one: { left: null, right: "two", top: "access", bot: "four" },
  two: { left: "one", right: "three", top: "access", bot: "five" },
  three: { left: "two", right: "close", top: "access", bot: "six" },
  four: { left: null, right: "five", top: "one", bot: "seven" },
  five: { left: "four", right: "six", top: "two", bot: "eight" },
  six: { left: "five", right: "close", top: "three", bot: "nine" },
  seven: { left: null, right: "eight", top: "four", bot: "erase" },
  eight: { left: "seven", right: "nine", top: "five", bot: "erase" },
  nine: { left: "eight", right: "close", top: "six", bot: "zero" },
  zero: { left: "erase", right: "close", top: "nine", bot: "pers" },
  erase: { left: null, right: "zero", top: "eight", bot: "pers" },
  pers: { left: null, right: "close", top: "erase", bot: "access" },
  access: { left: null, right: "close", top: "pers", bot: "one" },
  close: { left: "three", right: null, top: "access", bot: "three" },
};

export const ArrowNavigation = ({ children }) => {
  const [current, setCurrent] = useState("one");
  const [prevent, setPrevent] = useState(null);
  useEffect(() => {
    function focusHandle(event) {
      const keyPressed = event.key;
      setPrevent(current);
      if (keyPressed == "ArrowLeft") {
        objectTrans[current].left !== null &&
          setCurrent(objectTrans[current].left);
      }
      if (keyPressed == "ArrowRight") {
        objectTrans[current].right !== null &&
          setCurrent(objectTrans[current].right);
      }
      if (keyPressed == "ArrowDown") {
        objectTrans[current].bot !== null &&
          setCurrent(objectTrans[current].bot);
      }
      if (keyPressed == "ArrowUp") {
        objectTrans[current].top !== null &&
          setCurrent(objectTrans[current].top);
      }
    }

    document.addEventListener("keydown", focusHandle);
    try {
      document.getElementById(current).focus();
    } catch (error) {
      const idBtnArr = Object.keys(objectTrans);

      idBtnArr.forEach((id) => {
        document.getElementById(id) !== null && setCurrent(id);
      });
    }

    return () => {
      document.removeEventListener("keydown", focusHandle);
    };
  });
  return children;
};
