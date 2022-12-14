import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdEmail, MdLock, MdModeEdit } from 'react-icons/md';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {api} from '../../services/api';

import {Header} from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Column, Container, CriarText, HaveAccount, RegisterAccount, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles';
import { IFormData } from './types';

const schema = yup.object({
    name: yup.string().required('Campo obrigatório'),
    email: yup.string().email('email não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
}).required();

const Register = () => {

    const navigate = useNavigate();

    const handleClickLogin = () => {
        navigate('/login')
    }

    const { control, handleSubmit, formState: {errors} } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async (formData : IFormData) => {
        try{
            const {data} = await api.get(`user?name=${formData.name}&users?email=${formData.email}&senha=${formData.password}`);
            if(data.length === 1) {
                navigate('/feed')
            } else {
                alert('Nome, Email ou senha inválidos')
            }
        }catch{
            alert('Houve um erro, tente novamente.')
        }
    };

    return ( <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias 
                        e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Comece agora grátis</TitleLogin>
                        <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="name" errorMessage={errors?.name?.message} control={control} placeholder='Nome completo' leftIcon={<MdModeEdit />} />
                            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder='E-mail' leftIcon={<MdEmail />} />
                            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder='Senha' type="password" leftIcon={<MdLock />} />
                            <Button title="Criar minha conta" variant="secondary" type="submit" />
                        </form>
                        <RegisterAccount>
                            Ao clicar em "criar minha conta grátis", declaro que aceito as
                            Políticas de Privacidade e os Termos de Uso da DIO.
                        </RegisterAccount>
                        <Row>
                            <HaveAccount title="Já tenho conta.">Já tenho conta.</HaveAccount>
                            <CriarText title="Fazer login" onClick={handleClickLogin} >Fazer Login</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
    </>)
}

export default Register;