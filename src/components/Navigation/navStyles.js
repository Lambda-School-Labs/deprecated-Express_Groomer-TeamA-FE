import styled from 'styled-components';

const Title = styled.h1`
  padding: 0;
  font-size: 2.5rem;
  color: #ffffff;
`;

const Nav = styled.nav`
  width: 100%;
  border-bottom: 2px solid #bababa;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background-color: #006161;
  color: #ffffff;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    justify-content: center;
    height: 55px;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 30%;

  .nav-links {
    text-decoration: none;
    color: #ffffff;
    padding: 18px 10px;
    &:hover {
      color: #ffa500;
    }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    justify-content: flex-start;
    position: fixed;
    background-color: #006161;
    opacity: 0.75;
    z-index: 19;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding: 3.5rem 1rem 2rem 1rem;
    transition: transform 0.3s ease-in-out;
  }
`;

const Burger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    border: 1px solid black;
    background-color: white;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export { Title, Nav, NavLinks, Burger };
