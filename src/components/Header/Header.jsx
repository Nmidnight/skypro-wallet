import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  HeaderContainer,
  HeaderLogoLink,
  HeaderLogoImg,
  HeaderLinksBox,
  HeaderLink,
  HeaderExit,
  HeaderMobileBtn,
  HeaderArrowBtn,
  HeaderArrowImg,
  MobileMenu,
  MobileLink,
  MobileMenuButton,
} from "./Header.styled";
import logo from "../../assets/header-logo.svg";
import arrow from "../../assets/header-arrow.svg";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext/useAuth";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { authLogout } = useAuth();

  const handleLogout = () => {
    authLogout();
    setIsOpen(false);
    navigate("/signin", { replace: true });
  };

  const location = useLocation();
  const onlyLogoPath = ["/signin", "/signup"];
  const showOnlyLogo = onlyLogoPath.includes(location.pathname);
  const getCurrentLocation = () => {
    switch (location.pathname) {
      case "/":
        return "Мои расходы";
      case "/analysis":
        return "Анализ расходов";
      case "/analysis/calendar":
        return "Анализ расходов";
      default:
        return "";
    }
  };

  return (
    <HeaderContainer>
      <HeaderLogoLink as={Link} to="/">
        <HeaderLogoImg src={logo} alt="Логотип" />
      </HeaderLogoLink>
      {!showOnlyLogo && (
        <>
          <HeaderLinksBox>
            <HeaderLink as={NavLink} to="/" end>
              Мои расходы
            </HeaderLink>
            <HeaderLink as={NavLink} to="/analysis">
              Анализ расходов
            </HeaderLink>
          </HeaderLinksBox>
          <HeaderMobileBtn>
            <HeaderLink as={NavLink} to={location.pathname} end>
              {getCurrentLocation()}
            </HeaderLink>
            <HeaderArrowBtn onClick={toggleMenu}>
              <HeaderArrowImg src={arrow} alt="Открыть меню" />
            </HeaderArrowBtn>
            {isOpen && (
              <MobileMenu>
                <MobileLink as={NavLink} to="/" end onClick={() => setIsOpen(false)}>
                  Мои расходы
                </MobileLink>
                <MobileLink
                  as={Link}
                  to="/#new-expense"
                  onClick={() => setIsOpen(false)}
                >
                  Новый расход
                </MobileLink>
                <MobileLink
                  as={NavLink}
                  to="/analysis"
                  onClick={() => setIsOpen(false)}
                >
                  Анализ расходов
                </MobileLink>
                <MobileMenuButton type="button" onClick={handleLogout}>
                  Выйти
                </MobileMenuButton>
              </MobileMenu>
            )}
          </HeaderMobileBtn>
          <HeaderExit onClick={handleLogout}>Выйти</HeaderExit>
        </>
      )}
    </HeaderContainer>
  );
}
