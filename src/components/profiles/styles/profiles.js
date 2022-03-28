import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem auto;
  max-width: 80%;
`
export const Title = styled.h1`
  color: #fff;
  width: 100%;
  font-size: 48px;
  font-weight: 500;
  text-align: center;
`

export const List = styled.ul`
  display: flex;
  flex-direction: row;
`

export const Name = styled.p`
  text-overflow: ellipsis;
  color: #808080;
  font-size: 16px;

  &:hover{
    font-weight: bold;
    color: #e5e5e5;
  }

`

export const Picture = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  border: 3px solid black;
  cursor: pointer;
`

export const Item = styled.li`
  max-height: 200px;
  max-width: 200px;
  text-align: center;
  margin-right: 30px;
  
  &:hover > ${Picture} {
    border: 3px solid white;
  }

  &:hover ${Name} {
    font-weight: bold;
    color: #fff;
  }
  &::last-of-type {
    margin-right: 0;
  }

`