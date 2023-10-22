import { useEffect, useState } from "react";
import background from "../assets/img/promo-zone_1.png";
import { InputMask } from "primereact/inputmask";
import { KeyboardButton } from "../utils/serviceComponents/KeyboardButton";
import { eraseInput } from "../utils/handlers/inputHandle";
import { keyboardInput } from "../utils/handlers/inputHandle";
import { handleInput } from "../utils/handlers/inputHandle";
import { Link, useNavigate } from "react-router-dom";
import { CloseButton } from "../utils/serviceComponents/CloseBtn";

export const PromoScreen = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState("7");
  const [submitState, setSubmitState] = useState(true);
  const [checkedCheckbox, setChecked] = useState(false);
  const numberContext = { value, setValue };

  if (value.length > 11) {
    setValue((prev) => prev.slice(0, 11));
  }

  useEffect(() => {
    document.addEventListener("keydown", (e) =>
      keyboardInput(e, numberContext)
    );
  }, []);

  useEffect(() => {
    if (value.length === 11 && checkedCheckbox) {
      setSubmitState(false);
    } else {
      setSubmitState(true);
    }
  });

  return (
    <>
      <img style={{ position: "absolute", zIndex: -1 }} src={background} />
      <Link to="/" className="close-btn">
        <CloseButton />
      </Link>
      <div className="promo-form">
        <h1>Введите ваш номер мобильного телефона</h1>
        <InputMask
          disabled
          autoClear={false}
          value={value}
          id="inputNumber"
          className="phone-input"
          mask="+9(999) 999-99-99"
          placeholder="+_(___) ___-__-__"
        ></InputMask>
        <p style={{ fontWeight: 500 }}>
          и с Вами свяжется наш менеждер для дальнейшей консультации
        </p>
        <div className="keyboard">
          <KeyboardButton onClick={() => handleInput(1, numberContext)}>
            1
          </KeyboardButton>
          <KeyboardButton onClick={() => handleInput(2, numberContext)}>
            2
          </KeyboardButton>
          <KeyboardButton onClick={() => handleInput(3, numberContext)}>
            3
          </KeyboardButton>
          <KeyboardButton onClick={() => handleInput(4, numberContext)}>
            4
          </KeyboardButton>
          <KeyboardButton onClick={() => handleInput(5, numberContext)}>
            5
          </KeyboardButton>
          <KeyboardButton onClick={() => handleInput(6, numberContext)}>
            6
          </KeyboardButton>
          <KeyboardButton onClick={() => handleInput(7, numberContext)}>
            7
          </KeyboardButton>
          <KeyboardButton onClick={() => handleInput(8, numberContext)}>
            8
          </KeyboardButton>
          <KeyboardButton onClick={() => handleInput(9, numberContext)}>
            9
          </KeyboardButton>
          <KeyboardButton onClick={() => handleInput(0, numberContext)}>
            0
          </KeyboardButton>
          <button
            onClick={() => eraseInput(numberContext)}
            className="erase-btn grid-item-style"
          >
            СТЕРЕТЬ
          </button>
        </div>
        <div className="checkbox-input">
          <input
            type="checkbox"
            id="pers"
            onKeyDown={(e) => e.key === "Enter" && setChecked(!checkedCheckbox)}
            onChange={() => {
              setChecked(!checkedCheckbox);
            }}
            checked={checkedCheckbox}
          />
          <label htmlFor="pers">
            Согласие на обработку персональных данных
          </label>
        </div>

        <button
          disabled={submitState}
          onClick={() => navigate("/access")}
          className="btn-submit"
        >
          <b>ПОДТВЕРДИТЬ НОМЕР</b>
        </button>
      </div>
    </>
  );
};
