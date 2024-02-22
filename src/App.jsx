import "./styles.css";
import Pages from "./Pages/Pages";
import Category from "./Components/Category";
import Search from "./Components/Search";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>deliciousss</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;
const Nav = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 1.8rem;
  }
`;
