import styled, { withTheme } from "styled-components";

const SearchBox = styled.input`
  width: 100%;
  margin-bottom: 5px;
  border: 0;
  border-bottom: 2px  ${props => props.theme.primaryColor} solid;
`;

export default withTheme(SearchBox);
