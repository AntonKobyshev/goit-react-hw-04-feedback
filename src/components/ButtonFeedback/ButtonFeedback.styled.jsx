import styled from '@emotion/styled';

export const StyledButton = styled.button`
  display: flex;
  gap: 10px;
  align-items: baseline;

  padding: 5px 12px;

  font-size: 24px;
  color: var(--accent);

  background-color: transparent;

  border-radius: 4px;
  border: 1px solid var(--accent);
  box-shadow: var(--main-shadow);

  transition: all 250ms cubic-bezier(0.455, 0.03, 0.515, 0.955);

  cursor: pointer;

  :hover {
    color: var(--bg);
    border: 1px solid transparent;
    box-shadow: var(--main-shadow);
  }

  
`;