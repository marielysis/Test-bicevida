import Link from "next/dist/client/link";
import styled from "@emotion/styled";

const Logo = styled.img`
  width: 200px;
  height: 200px;
  margin-left: 6rem;
`; 
const Header = () => {
    return ( 
        <header>
            <div>
                <div>
                <Link href="/">
                    <a><Logo src="/logo-bicevida.svg" alt="logotipo"></Logo></a>
                 </Link>
                </div>
            </div>
        </header>
     );
}
 
export default Header;
