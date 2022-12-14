import styled from "styled-components";

export const Container = styled.main `
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Wrapper = styled.div `
    max-width: 300px;
    margin-left: 300px;
`

export const Column = styled.div `
    flex: 1;
`

export const Row = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
`

export const Title = styled.h2 `
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 50%;
    margin-bottom: 20px;
    line-height: 44px;
    color: #fff;
`

export const TitleLogin = styled.p `
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;
    width: 110%;
`

export const SubtitleLogin = styled.p `
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;
`

export const RegisterAccount = styled.p `
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 20px;
    color: #fff;
    margin-top: 10px;
    width: 120%;
`

export const HaveAccount = styled.p `
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #fff;
`

export const CriarText = styled.p `
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #286149;
    margin-left: 5px;
    cursor: pointer;
`