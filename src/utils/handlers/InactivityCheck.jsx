import { useNavigate } from "react-router-dom";

export const InactivityCheck = ({ children }) => {
  const navigate = useNavigate();
  let time = 10;

  const unactivityInteval = setInterval(() => {
    window.location.pathname === "/" && clearInterval(unactivityInteval);
    if (time === 0) {
      clearInterval(unactivityInteval);
      return navigate("/");
    }

    time -= 1;
  }, 1000);
  document.addEventListener("keydown", () => (time = 10));
  document.addEventListener("mousemove", () => (time = 10));
  return children;
};
