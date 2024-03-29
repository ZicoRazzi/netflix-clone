import React, { createContext, useContext, useState } from 'react'
import { Container, Title, Item, Body, Header, Inner } from './styles/accordion'
import IconClose from '../../icons/close-slim.png'
import IconOpen from '../../icons/add.png'

const ToggleContext = createContext()

export default function Accordion({ children, ...restProps}) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  )
}

Accordion.Title = function AccordionTitle({ children, ...restProps}) {
  return <Title { ...restProps }>{children}</Title>
}



Accordion.Item = function AccordionItem({ children, ...restProps}) {
  const [toggleShow, setToggleShow] = useState(false)

  return (
  <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
    <Item { ...restProps }>{children}</Item>
  </ToggleContext.Provider>
  )
}

Accordion.Header = function AccordionHeader({ children, ...restProps}) {
const { toggleShow, setToggleShow } = useContext(ToggleContext)

  return <Header onClick={() => setToggleShow((toggleShow) => !toggleShow)} { ...restProps }>
    {children}
    {toggleShow ? (
      <img src={IconClose} /> 
    ) : (
      <img src={IconOpen}  /> 

    )}
    </Header>
}

Accordion.Body = function AccordionBody({ children, ...restProps}) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext)


  return toggleShow ? <Body { ...restProps }>{children}</Body> : null;
}