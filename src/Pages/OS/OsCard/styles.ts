import styled from 'styled-components';

interface CardStyleInterface {
  priority?: string;
}

export const CardWrapper = styled.div<CardStyleInterface>`
  display: flex;
  flex-direction: column;
  ${(props) => {
    switch (props.priority) {
      case 'normal':
        return `
          background:var(--info);
          color:var(--textDark);
          &>div:nth-last-child(1){border-top:.15rem solid var(--texDark);}         
         `;
      case 'medium':
        return `
        background: var(--warning);
        color:var(--textDark);
        &>div:nth-last-child(1){border-top:.15rem solid var(--textDark);}
        `;
      case 'high':
        return `
          background: var(--danger);
          color:var(--text);
          &>div:nth-last-child(1){border-top:.15em solid var(--text);} 
        `;
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
  > span {
    font-size: 0.8rem;
  }
  > span:nth-of-type(2) {
    font-size: 1rem;
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
export const Status = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.6rem 0 ;
  margin-top:.6rem;
  text-transform: capitalize;
  &>:nth-child(1){
    font-weight:bold;
  }
`;
