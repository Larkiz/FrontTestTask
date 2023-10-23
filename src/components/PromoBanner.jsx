import video from "../assets/video/test.mp4";
import qrCode from "../assets/img/qr_code.png";
import { DeplayedComponent } from "../utils/serviceComponents/DeplayedComponent";
import { Link } from "react-router-dom";

export const PromoBanner = () => {
  // const
  return (
    <>
      <DeplayedComponent time={1000}>
        <div className="promo-banner">
          <p>ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ СОБАКУ!</p>
          <img src={qrCode} />
          <p>Сканируйте QR-код для получения дополнительной информации</p>
          <Link to="promo">
            <button autoFocus className="promo-banner-btn">
              ОК
            </button>
          </Link>
        </div>
      </DeplayedComponent>
      <video autoPlay="True" loop="True" muted="True">
        <source src={video} type="" />
      </video>
    </>
  );
};
