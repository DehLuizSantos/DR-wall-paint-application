import styled, { css } from "styled-components";

export const MainPageWrapper = styled.div`
    ${({theme}) => css`
     background-color: ${theme.colors.background};
     color:${theme.colors.text};
    `}

`
