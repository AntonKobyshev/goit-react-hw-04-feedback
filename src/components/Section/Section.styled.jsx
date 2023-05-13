import styled from '@emotion/styled';

export const Container = styled.section`
  max-width: 100%;
  padding: 24px;
  text-align: center;
  box-shadow: var(--main-shadow);
  &:not(:last-child) {
    margin-bottom: 36px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 36px;
  color: var(--primary);
`;
