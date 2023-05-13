import styled from '@emotion/styled';

export const Votes = styled.ul`
  margin: 0 auto;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  svg {fill: var(--accent);}
  
`;

export const VotesItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  
`;

export const Name = styled.span`
  text-align: left;
  font-size: 24px;
  color: var(--secondary);
`;

export const Rate = styled.span`
  text-align: left;
  font-size: 28px;
  font-weight: 500;
  color: var(--accent);
  margin-left: auto;

`;
