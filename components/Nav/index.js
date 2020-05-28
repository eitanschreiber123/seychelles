import Link from 'next/link'
import styled from 'styled-components'
const Wrapper = styled.nav`
  padding: 15px;
  display: flex;
  background: #000000;
  a {padding: 0 15px;color: #FFF;}
`
const Nav = () => (
  <Wrapper>
    <Link href='/'><a>home</a></Link> |
    <Link href='/cart' prefetch><a>cart</a></Link>
  </Wrapper>
)
export default Nav
