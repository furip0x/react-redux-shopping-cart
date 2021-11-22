import styled from 'styled-components'

export const CartWrapper = styled.div`
  position: relative;
`

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8rem;
  border-bottom: 1px solid #d9d9d9;
  margin-bottom: 1.4rem;
  padding-bottom: 1.4rem;

  &:last-child {
    border: none;
  }

  @media (max-width: 575px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`
export const ImageWrapper = styled.div`
  display: flex;
  flex: 0 0 50px;
`

export const Image = styled.div`
  width: 100%;

  @media (max-width: 575px) {
    max-height: 200px;
  }
`

export const Details = styled.div`
  flex: 1 1 auto;
`

export const Title = styled.h2`
  flex: 1 1 auto;
`

export const Price = styled.h2`
  font-size: 1.1rem;
  font-weight: 700;
  color: #8b8b8b;
`

export const CartButtons = styled.div`
  display: flex;
  flex: 0 0 max-content;
  flex-direction: column;
  align-items: flex-end;
`

export const RemoveBtn = styled.button`
  display: flex;
  gap: 5px;
  font-size: 1rem;
  color: #f05455;
  background: none;
  border: none;
  border-radius: 0.3rem;
  padding: 0.5rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #fff;
    background: #f05455;
  }
`

export const CartTotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  border-top: 2px solid #000;
  padding-top: 1rem;
`

export const CartTotal = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`

export const ClearCartBtn = styled.button`
  font-size: 1rem;
  color: #fff;
  background: #ee0505;
  border: none;
  border-radius: 0.3rem;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const ContinueLink = styled.div`
  a {
    width: 200px;
    display: block;
    font-size: 1.2rem;
    color: #fff;
    text-align: center;
    background-color: #5476f0;
    border-radius: 0.3rem;
    padding: 0.5rem 1rem;
    margin: 0 auto;
    transition: 0.3s;

    &:hover {
      background-color: #3f58b3;
    }
  }
`
