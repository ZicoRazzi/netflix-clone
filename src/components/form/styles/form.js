import styled from 'styled-components';

import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.div``;
export const Error = styled.div``;
export const Link = styled(ReachRouterLink)`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
export const Base = styled.div``;
export const Title = styled.h2``;
export const Text = styled.p``;
export const TextSmall = styled.p``;
export const Input = styled.input``;
export const Submit = styled.button``;
