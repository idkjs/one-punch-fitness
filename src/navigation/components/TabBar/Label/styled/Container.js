import styled from "styled-components";
import colors from "../../../../../config/colors";

export default styled.View`
  padding-horizontal: 16px;
  background-color: ${({ focused }) =>
    focused ? colors.twentyWhite : "transparent"};
  border-radius: 8px;
  margin-vertical: 8px;
`;
