import styled from '@emotion/styled';

export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const ButtonItem = styled.li`
  :hover:nth-of-type(1) button {
    background-color: var(--good);
  }

  :hover:nth-of-type(2) button {
    background-color: var(--neutral);
  }

  :hover:nth-of-type(3) button {
    background-color: var(--bad);
  }
`;
