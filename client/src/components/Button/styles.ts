import styled, { css } from 'styled-components'
import { darken, lighten, rgba } from 'polished'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: none;
    white-space: nowrap;
    cursor: pointer;

    border-radius: ${theme.border.radius};

    font-size: ${theme.font.sizes.small};

    display: inline-flex;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: -0.01em;

    transition: all 0.3s;

    &:focus {
      box-shadow: 0 0 0 2px ${rgba(darken(0.1, theme.colors.secondary), 0.4)};
    }

    :hover {
      background: ${lighten(0.06, theme.colors.primary)};
    }
  `}
`
