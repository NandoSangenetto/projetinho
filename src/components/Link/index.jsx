import { Link as RouterLink } from "@reach/router";
import styled, { withTheme } from "styled-components";

const Link = styled(RouterLink)`
  display: block;
  padding: 3px 0;
  text-decoration: none;
  color: ${props => props.theme.primaryColor};
  :hover {
    opacity: 0.7;
  }
`;
export default withTheme(Link);
