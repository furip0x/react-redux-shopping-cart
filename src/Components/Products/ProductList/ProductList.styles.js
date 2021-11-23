import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
`
export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 380px), 1fr));
  gap: 2.5rem;
`
