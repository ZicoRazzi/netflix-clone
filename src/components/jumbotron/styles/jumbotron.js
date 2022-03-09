import styled from 'styled-components/macro';

export const Inner = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Container = styled.div``;

export const Pane = styled.div`
  width: 50%;

  @media (max-width: 100px) {
    width: 100%;
  }
`;
export const Title = styled.h1`
  font-size: 5rem;
  line-height: 1.1;
  margin-bottom: 8px;
`;
export const SubTitle = styled.h2`
  font-size: 2.6rem;
  font-weight: normal;
  line-height: normal;
`;
export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
