import ButtonPr from "./components/ui/buttonPractice";
import { CallIcon } from "./components/ui/icon/callIcon";
import { WishlistIcon } from "./components/ui/icon/wishlistIcon";

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
    </div>
  );
}

export default App;
