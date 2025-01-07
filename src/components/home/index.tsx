import ButtonPr from "../ui/buttonPractice";
import { WishlistIcon } from "../ui/icon/wishlistIcon";
import { CallIcon } from "../ui/icon/callIcon";
import Image from "../ui/image/image";
import IMAGES from "../../../public/images";
import { FooterSvgSelector } from "../ui/icon/svgGeneratorSvgSelector";
import Chip from "../ui/chip/chip";
import { Container } from "../ui/container/container";

const Home = () => {
  return (
    <Container>
      <div>
        <div>
          <ButtonPr size="sm" variant="second">
            Вход
          </ButtonPr>
          <ButtonPr size="md" variant="global">
            регистрация
          </ButtonPr>
          <ButtonPr
            variant="global"
            size="md"
            onClick={() => alert("Заказать")}
          >
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
        <ul>
          <Chip textNumber="0 800 750 643" />
          <Chip textSctring="ПРО НАС" />
          <Chip textSctring="Рус" />
        </ul>
      </div>
    </Container>
  );
};

export default Home;
