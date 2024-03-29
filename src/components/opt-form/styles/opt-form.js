import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;
  text-align: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 60px;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 60px;
  background: #e50914;
  color: white;
  padding: 0 32px;
  font-size: 26px;
  border: 0;
  cursor: pointer;

  &:hover{
    background: #f40612;
  }

  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
  }
    img{
      margin-left: 10px;
      filter: brightness(0) invert(1);
      width: 24px;

      @media (max-width: 1000px) {
        width: 16px;
      }
    }
`

export const Text = styled.p`
  color: white;
  font-size: 1.2rem;
  margin-top: 3rem;
`

