import React from 'react';
import Search from '../../components/Search';
import NavBar from '../../components/NavBar';
import { Container ,Title} from './styles';
import OSCard, { OSCardInterface } from './OsCard';
import clients from './OSTemplate';

const OsList: React.FC = () => {
    return (
        <>
            <Title>Concluidas</Title>
            <OSPending osCards={clients} />
        </>
    )
}

const OSPending: React.FC<{ osCards: OSCardInterface[] }> = ({ children, osCards }) => {
    return (
        <>
            <Container>
                {osCards.map((os: OSCardInterface) => {
                    return (
                        <OSCard key={os.id} {...os} />
                    )
                })}
            </Container>
        </>
    )
}


const Os: React.FC = () => {
    return (
        <>
            <NavBar />
            <Search />
            <OsList />
        </>
    )
}




export default Os;
