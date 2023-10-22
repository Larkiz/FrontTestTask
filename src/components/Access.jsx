import background from "../assets/img/promo-zone_1.png";
import { Link } from "react-router-dom";
import { CloseButton } from "../utils/serviceComponents/CloseBtn";

export const AccessScreen = () => {
  return (
    <>
      <img style={{ position: "absolute", zIndex: -1 }} src={background} />

      <Link to="/" className="close-btn">
        <CloseButton backgroundColor="black" color="white" />
      </Link>
      <div className="access-screen">
        <h1>ЗАЯВКА ПРИНЯТА</h1>
        <p>
          Держите телефон под рукой. <br /> Скоро с Вами свяжется наш менеджер.{" "}
        </p>
      </div>
    </>
  );
};
