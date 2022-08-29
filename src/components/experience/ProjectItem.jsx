import styled, {css} from "styled-components";

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
  margin: 40px 15px;
  border: 1px solid var(--color-primary-variant);
  border-radius: 2rem;

  ${props => props.animated && css`
    &:hover {
      transform: translateY(-40px);
      transition: 0.5s;
      border-color: var(--color-primary-variant);
    }
  `}
`;

export default Item