import styled from 'styled-components';


export const Container = styled.div`
    margin-top:15vh;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 0 5vw;
    width: 100%;
`;

export const SearchInput = styled.input`
    font-size:1em;
    &:active,&:focus{
        outline:none;
    }
    color:var(--gray);

`;

export const SearchConteiner = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    border: 2px solid var(--gray);
    border-radius:.3em;
    padding:.3em;
    >svg{
        width:2em;
        fill:var(--gray);
        margin-right:.3em;
        transition:.3s;
    }
    &:hover>svg{
        transform: translateX(-3rem)
    }
`;