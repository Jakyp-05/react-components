import IMAGES from "../public/images/index";

import ButtonPr from "./components/ui/buttonPractice";
import Image from "./components/ui/image/image";

import { WishlistIcon } from "./components/ui/icon/wishlistIcon";
import { CallIcon } from "./components/ui/icon/callIcon";
import { FooterSvgSelector } from "./components/ui/icon/svgGeneratorSvgSelector";

function App() {
  return (
    <div>
      <div>
        <ButtonPr size="sm" variant="second">
          Вход
        </ButtonPr>
        <ButtonPr size="md" variant="global">
          регистрация
        </ButtonPr>
        <ButtonPr variant="global" size="md" onClick={() => alert("Заказать")}>
          Заказать
        </ButtonPr>
        <ButtonPr
          variant="global"
          size="xl"
          onClick={() => alert("Зарегистрироваться")}
        >
          Зарегистрироваться
        </ButtonPr>
        <ButtonPr
          variant="second"
          size="xl"
          onClick={() => alert("Узнать больше")}
        >
          Узнать больше
        </ButtonPr>
        <ButtonPr
          variant="global"
          size="2xl"
          onClick={() => alert("Попробовать Бесплатно")}
        >
          Попробовать Бесплатно
        </ButtonPr>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          columnGap: "20px",
        }}
      >
        <WishlistIcon />
        <CallIcon />
      </div>
      <div>
        <Image
          src={IMAGES.imgOne}
          alt="one"
          className="image"
          width={200}
          height={200}
        />
        <Image
          src={IMAGES.imgTwo}
          alt="two"
          className="image"
          width={300}
          height={200}
        />
        <Image
          src={IMAGES.imgThree}
          alt="three"
          className="image"
          width={200}
          height={200}
        />
      </div>
      <div>
        <FooterSvgSelector id="facebook" />
        <FooterSvgSelector id="twitter" />
        <FooterSvgSelector id="google" />
        <FooterSvgSelector id="instagram" />
        <FooterSvgSelector id="you-tube" />
      </div>
    </div>
  );
}

export default App;
