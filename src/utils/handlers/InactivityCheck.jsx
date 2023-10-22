import { useNavigate } from "react-router-dom";

export const InactivityCheck = ({ children }) => {
  const navigate = useNavigate();
  let time = 10;

  const unactivityInteval = setInterval(() => {
    if (time === 0) {
      clearInterval(unactivityInteval);
      return navigate("/");
    }

    time -= 1;
  }, 1000);
  document.addEventListener("keypress", () => (time = 10));
  document.addEventListener("mousemove", () => (time = 10));

  return children;
};
