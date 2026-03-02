import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: #fff;
  padding: 20px 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    background-color: #f4f5f6;
    padding: 18px 16px;
  }
`;

export const HeaderLogoLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const HeaderLogoImg = styled.img`
  height: 19px;
  width: auto;
  @media (max-width: 768px) {
    height: 14px;
  }
`;

export const HeaderLinksBox = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const HeaderLink = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 170%;
  text-align: center;
  color: #000;
  &.active {
    color: #7334ea;
    border-bottom: 2px solid #7334ea;
  }
  @media (max-width: 768px) {
    font-weight: 600;
    font-size: 12px;
    line-height: 150%;
  }
`;

export const HeaderMobileBtn = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    gap: 8px;
    align-items: center;
    position: relative;
  }
`;

export const HeaderArrowBtn = styled.button`
  background: none;
  border: none;
`;

export const HeaderArrowImg = styled.img`
  height: 7px;
`;

export const MobileMenu = styled.div`
  border: 0.5px solid #999;
  border-radius: 6px;
  padding: 10px;
  width: 138px;
  height: 110px;
  box-shadow: 0 20px 67px -12px rgba(0, 0, 0, 0.13);
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 6px;
  position: absolute;
  top: calc(100% + 11px);
  left: -37px;
`;

export const MobileLink = styled.a`
  display: inline-block;
  border-radius: 24px;
  padding: 7px 13px;
  height: 26px;
  background: #f4f5f6;
  font-weight: 400;
  font-size: 10px;
  text-align: center;
  color: #000;
  &.active {
    background-color: #f1ebfd;
    color: #7334ea;
  }
`;

export const HeaderExit = styled.button`
  width: 49px;
  font-weight: 600;
  font-size: 14px;
  line-height: 170%;
  text-align: center;
  color: #000;
  background: none;
  border: none;
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 150%;
  }
`;
