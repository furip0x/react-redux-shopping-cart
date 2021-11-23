import styled from 'styled-components'

export const PageWrapper = styled.div`
  position: relative;
`

export const ProductDetail = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 2rem;
  margin-top: 3rem;

  .product-detail-count {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.94rem 2.5rem;
  }

  .product-detail-add {
    font-size: 1.05rem;
    color: #fff;
    font-weight: 700;
    background: #5476f0;
    border-radius: 1rem;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: 0.3s;
  }

  .product-detail-add:hover {
    background: #f05455;
  }
`
export const ProductDetailInfo = styled.div`
  h2 {
    color: #f05455;
    font-size: 2rem;
    font-weight: 700;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.5;
  }
`
