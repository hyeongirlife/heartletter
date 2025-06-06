import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.primary};
  text-decoration: none;
  
  &:hover {
    text-decoration: none;
    color: ${props => props.theme.primary};
  }
`;

const HeartIcon = styled(FaHeart)`
  margin-right: 0.5rem;
  color: ${props => props.theme.primary};
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.textLight};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
  
  &:hover {
    color: ${props => props.theme.primary};
    text-decoration: none;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo to="/">
          <HeartIcon />
          하트레터
        </Logo>
        <Nav>
          <NavLink to="/">홈</NavLink>
          <NavLink to="/create">편지 작성</NavLink>
          <NavLink to="/my-letters">내 편지함</NavLink>
          <NavLink to="/about">소개</NavLink>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
