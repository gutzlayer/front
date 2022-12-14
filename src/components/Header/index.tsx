import React from 'react';
import logo from '../../assets/logo-dio.png';
import Button from '../Button';
import { IHeader } from './types';

import {
    BuscarInputContainer,
    Container,
    Input,
    Logo,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles';
import { useNavigate } from 'react-router-dom';


const Header = ({autenticado}: IHeader) => {

    const navigate = useNavigate();

    const handleClickRegister = () => {
    navigate('/register')
    }

    const handleClickLogin = () => {
        navigate('/login')
    }

    const handleClickHome = () => {
        navigate('/')
    }

  return (
    <Wrapper>
        <Container>
            <Row>
                <Logo src={logo} alt="Logo" onClick={handleClickHome}/>
                {autenticado ? (
                    <>
                        <BuscarInputContainer>
                            <Input placeholder='Buscar...'/>
                        </BuscarInputContainer>
                        <Button title="Cadastrar" />
                        <Menu>LiveCode</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null }
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src='https://avatars.githubusercontent.com/u/61244062?v=4' />
                ) : (
                    <>
                        <MenuRight onClick={handleClickHome}>Home</MenuRight>
                        <Button title="Entrar" onClick={handleClickLogin} />
                        <Button title="Cadastrar" onClick={handleClickRegister}/>
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }