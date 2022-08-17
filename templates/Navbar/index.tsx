import React from "react";
import * as S from "./styles";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <S.NavbarContainer>
      <S.NavbarWhapper>
        <Link href={"/"}>
          <div className="navbar-logo">
            <h2>DR Wall Paint</h2>
          </div>
        </Link>
      </S.NavbarWhapper>
    </S.NavbarContainer>
  );
};

export default Navbar;
