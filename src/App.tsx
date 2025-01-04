import Button from "./components/ui/button/button";
import ButtonPr from "./components/ui/buttonPractice";

function App() {
  return (
    <div>
      <Button variant="success" size="sm">
        Success Button
      </Button>
      <Button variant="danger" size="md">
        Danger Button
      </Button>
      <Button variant="warning" size="lg">
        Warning Button
      </Button>
      <Button variant="primary">Primary Button</Button>
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
  );
}

export default App;
