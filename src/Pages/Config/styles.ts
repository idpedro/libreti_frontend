import  styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    flex-direction:column;
`;

export const ThemesContent=styled.div`
    display:flex;

`

export const ThemeButton = styled.button`
    color:${(props)=>props.theme.colors.text}
`