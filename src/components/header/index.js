import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import HeaderBG from '../../images/home-bg.jpg';
import ChevronRight from '../../icons/chevron-right.png';
import SearchIconImg from '../../icons/search.png'
import {
  Container,
  Background,
  ButtonLink,
  Hero,
  Title,
  SubTitle,
  Input,
  Button,
  Text,
  Group,
  Link,
  Nav,
  Content,
  Picture,
  Profile,
  Dropdown,
  DropdownProfile,
  Search,
  SearchIcon,
  SearchInput
} from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? (
    <Background
      data-testid="header-bg"
      {...restProps}
      style={{
        backgroundImage: `url(${HeaderBG})`,
      }}
    >
      {children}
    </Background>
  ) : (
    children
  );
}

Header.Frame = function HeaderGroup({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.Nav = function HeaderNav({ children, ...restProps }) {
  return <Nav {...restProps}>{children}</Nav>;
};

Header.Logo = function HeaderLogo({ to, children}) {
  return <ReactRouterLink to={to}>{children}</ReactRouterLink>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
Header.Hero = function HeaderHero({ children, ...restProps }) {
  return <Hero {...restProps}>{children}</Hero>;
};
Header.Title = function HeaderTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Header.SubTitle = function HeaderSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Header.Content = function HeaderForm({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};
Header.Input = function HeaderInput({ children, ...restProps }) {
  return <Input {...restProps} />;
};

Header.Button = function HeaderButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children} <img src={ChevronRight} alt="Try Now" />
    </Button>
  );
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
  const [searchActive, setSearchActive] = useState(false)

  return (
    <Search {...restProps}>
      <SearchIcon onClick={() => setSearchActive((searchActive) => !searchActive)} data-testid="search-click">
        <img src={SearchIconImg} alt="search"/>
      </SearchIcon>
      <SearchInput
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder='Search movies and series'
        active={searchActive}
        data-testid='search-input'
      />
    </Search>
  )
}


Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.DropdownProfile = function HeaderDropdownProfile({ children, ...restProps }) {
  return <DropdownProfile {...restProps}>{children}</DropdownProfile>;
};
Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`../../images/users/${src}.png`} />;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};