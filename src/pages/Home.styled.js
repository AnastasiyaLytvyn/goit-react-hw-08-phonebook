import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  margin-top: 32px;
  padding: 10px;

  @media screen and (min-width: 768px) {
    padding: 16px;
  }
`;

export const Text = styled.p`
  width: 150px;
  color: #ffebcd;
  font-size: 16px;
  font-weight: 400;
  text-shadow: 0.5px 0px 0.5px #2f4f4f;

  @media screen and (min-width: 768px) {
    width: 350px;
    font-size: 22px;
  }
`;
