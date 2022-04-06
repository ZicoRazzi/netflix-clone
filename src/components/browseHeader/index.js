import React from 'react'
import { Background, Feature, Text, Title, PlayButton } from './styles/browse-header'

export default function BrowseHeader({ children, ...restProps }) {
  return (
    <Background{...restProps}>
      {children}
    </Background>
  )
}

BrowseHeader.Feature = function BrowseHeaderFuture({ children, ...restProps}) {
  return <Feature {...restProps}>{children}</Feature>
}

BrowseHeader.Text = function BrowseHeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

BrowseHeader.Title = function BrowseHeaderTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

BrowseHeader.PlayButton = function BrowseHeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>
}