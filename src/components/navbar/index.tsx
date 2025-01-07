import { Link } from "react-router-dom";
import Chip from "../ui/chip/chip";
import ButtonPr from "../ui/buttonPractice";
import styled from "styled-components";
import { Container } from "../ui/container/container";

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 30px;
  list-style-type: none;
`;

const Navbar = () => {
  return (
    <Container>
      <NavbarContainer>
        <Menu>
          <li className="menu__list">
            <Link to="/phone-number">
              <Chip textNumber="0 800 750 643" />
            </Link>
          </li>
          <li className="menu__list">
            <Link to="/about">
              <Chip textNumber="ПРО НАС" />
            </Link>
          </li>
          <li className="menu__list">
            <Link to="/prices">ЦЕНЫ</Link>
          </li>
          <li className="menu__list">
            <Link to="/contact">КОНТАКТЫ</Link>
          </li>
        </Menu>
        <div>
          <ButtonPr size="sm" variant="second">
            Вход
          </ButtonPr>
          <ButtonPr size="md" variant="global">
            регистрация
          </ButtonPr>
        </div>
        <Link to="/phone-number">
          <Chip textSctring="РУС" />
        </Link>
      </NavbarContainer>
    </Container>
  );
};

export default Navbar;
