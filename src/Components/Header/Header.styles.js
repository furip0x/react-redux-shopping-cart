import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 5;
  background-color: #f05455;
  padding: 0.3rem 0;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const Logo = styled.div`
  flex: 0 0 max-content;

  a {
    font-size: 2rem;
    color: #fff;
  }

  @media (max-width: 575px) {
    a {
      font-size: 1.2rem;
    }
  }
`

export const HeaderNav = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  gap: 1.5rem;
`

export const MainNav = styled.nav`
  ul {
    display: flex;
    align-items: center;
  }

  .main-nav-link {
    position: relative;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 700;
    border-radius: 0.5rem;
    padding: 0.3rem 0.6rem;
    transition: 0.3s;

    &.current {
      color: #bf080a;
      background-color: #fff;
    }
  }

  .main-nav-link:hover {
    background-color: #720304;
  }

  @media (max-width: 575px) {
    .main-nav-link {
      font-size: 1rem;
    }
  }
`

export const CartCount = styled.div`
  position: relative;

  svg {
    width: 1.7rem;
    color: #fff;
    transition: 0.3s;
  }

  &:hover svg {
    color: #720304;
  }

  .amount-container {
    position: absolute;
    top: -0.85rem;
    right: -0.85rem;
    width: 1.5rem;
    height: 1.5rem;
    font-size: 1rem;
    line-height: 1.4rem;
    color: #fff;
    text-align: center;
    border-radius: 50%;
    background: #720304;
    transition: 0.3s;
  }

  &:hover .amount-container {
    color: #720304;
    background-color: #fff;
  }

  /* MEDIA */

  @media (max-width: 575px) {
    svg {
      width: 1.5rem;
    }
  }
`
