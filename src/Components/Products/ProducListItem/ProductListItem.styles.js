import styled from 'styled-components'

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background-color: #f9f9f9;
  border-radius: 1rem;
  padding: 2rem;
  transition: 0.1s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 0 2px #000;
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  flex: 0 0 140px;

  img {
    width: 100%;
  }

  @media (max-width: 575px) {
    flex: 0 0 120px;
  }
`

export const Image = styled.img`
  width: 100%;
`

export const ImageOverlay = styled.div`
  position: absolute;
  inset: -3px;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 700;
  color: #333;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(2px);
  transition: 0.3s;
  opacity: 0;

  ${ImageWrapper}:hover & {
    opacity: 1;
  }
`

export const Details = styled.div`
  flex: 1 1 auto;
`

export const Title = styled.h2`
  color: #333;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
`

export const Price = styled.div`
  color: #f05455;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 2rem;
`

export const AddToCartBtn = styled.button`
  font-size: 1rem;
  color: #fff;
  font-weight: 700;
  background: #5476f0;
  border-radius: 1rem;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #f05455;
  }
`
