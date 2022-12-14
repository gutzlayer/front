
import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';
import Card from '../../components/Card';
import Userinfo from '../../components/UserInfo';

const Feed = () => {
    return ( <>
            <Header autenticado={true}/>
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighlight># Top 5 da semana</TitleHighlight>
                    <Userinfo percentual={94} nome="Gustavo Silva" image="https://avatars.githubusercontent.com/u/61244062?v=4" />
                    <Userinfo percentual={81} nome="Gustavo Silva" image="https://avatars.githubusercontent.com/u/61244062?v=4" />
                    <Userinfo percentual={66} nome="Gustavo Silva" image="https://avatars.githubusercontent.com/u/61244062?v=4" />
                    <Userinfo percentual={45} nome="Gustavo Silva" image="https://avatars.githubusercontent.com/u/61244062?v=4" />
                    <Userinfo percentual={35} nome="Gustavo Silva" image="https://avatars.githubusercontent.com/u/61244062?v=4" />
                </Column>
            </Container>
    </>)
}

export default Feed;