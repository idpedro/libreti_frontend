import styled from 'styled-components';

interface CardStyleInterface {
  color?: string;
  priority?: string;
}

export const CardWrapper = styled.div<CardStyleInterface>`
  display: flex;
  flex-direction: column;
  ${(props) => {
    switch (props.priority) {
      case 'normal':
        return "background:#610461; color:var(--text-white);"
      case 'medium':
        return ' background: var(--warning); color:var(--text)';
      case 'high':
        return ' background: var(--danger); color:var(--text-white)';
      default:
        
        break;
    }
  }};
  padding: 1rem;
  margin: 1rem 0.5rem;
  @media (min-width: 1024px) {
    width: 400px;
  }
  @media (min-width: 800px) {
    width: 350px;
  }
  @media (max-width: 520px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  >span{
    font-size:.8rem;
  }
  >span:nth-of-type(2){
    font-size:1rem;
  }
`;
export const Title = styled.h1`
  font-size: 1.3em;
  @media (max-width: 970px) {
    font-size: 1.3em;
  }
`;
export const Description = styled.p`
  word-wrap: break-word;
  text-overflow: ellipsis;
`;
export const Status=styled.div`
  display:flex;
  justify-content:space-between;
  text-transform:capitalize;
`;