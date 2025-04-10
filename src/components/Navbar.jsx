import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../AuthContext";
import {
  faSearch,
  faUser,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px 0;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  background: var(--dark-color);
  color: var(--light-color);
  margin-bottom: 30px;
`;
const Logo = styled.div`
  width: 120px;
  img {
    width: 100%;
  }
`;
const Menuarea = styled.ul`
  display: flex;
  gap: 20px;
`;
const Searchbox = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  input {
    border: none;
    background: none;
    transition: all 0.3s;
    color: var(--light-color);
    &::placeholder {
      font-size: 1.4rem;
      text-indent: 10px;
      opacity: 1;
      transition: all 0.3s;
      color: var(--light-color);
    }
    &:focus {
      outline: none;
      border-bottom: 1px solid var(--light-color);
      &::placeholder {
        opacity: 0;
      }
    }
  }
  svg {
    cursor: pointer;
  }
`;
const LoginAuth = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
`;
const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
  gap: 20px;
`;
const ToggleButton = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  cursor: pointer;
`;
const SideMenu = styled.div`
  width: ${({ width }) => width}px;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background: var(--dark-color);
  color: var(--light-color);
  overflow: hidden;
  transition: all 0.3s;
  z-index: 1;
  svg {
    position: absolute;
    top: 30px;
    right: 30px;
    font-size: 2rem;
    cursor: pointer;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 40px;
    font-size: 1.8rem;
    padding: 70px 30px;
    li {
      cursor: pointer;
    }
  }
`;

const menuList = [
  "여성",
  "남성",
  "추천",
  "브랜드",
  "베스트",
  "신제품",
  "이벤트",
  "슈퍼 세일",
];
const Navbar = () => {
  const { authenticate, setAuthenticate } = useAuth();
  const [width, setWidth] = useState(0);
  const navigate = useNavigate();
  const onCheckEnter = (e) => {
    if (e.key === "Enter") {
      navigate(`?q=${e.target.value}`);
    }
  };
  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <Container>
      <Logo>
        <Link to={"/"}>
          <img
            src="https://image.msscdn.net/display/images/2024/07/19/3a7caf3364184181a3cae5741f91464f.png"
            alt="musinsa"
          />
        </Link>
      </Logo>
      <Menuarea className="menu">
        {menuList.map((item, i) => (
          <li key={i}>
            <a href="#">{item}</a>
          </li>
        ))}
      </Menuarea>
      <HeaderTop>
        {authenticate ? (
          <LoginAuth
            onClick={() => {
              setAuthenticate(false);
              navigate("/");
            }}
          >
            <FontAwesomeIcon icon={faUser} />
            <span>로그아웃</span>
          </LoginAuth>
        ) : (
          <LoginAuth onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <span>로그인</span>
          </LoginAuth>
        )}
        <Searchbox>
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="제품검색" onKeyUp={onCheckEnter} />
        </Searchbox>
      </HeaderTop>
      <SideMenu width={width}>
        <FontAwesomeIcon icon={faClose} onClick={() => setWidth(0)} />
        <ul className="side-menu-list">
          {menuList.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
      </SideMenu>
      <ToggleButton>
        <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
      </ToggleButton>
    </Container>
  );
};

export default Navbar;
