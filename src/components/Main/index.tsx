import * as S from './styles';

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem  e React Avançado escrito ao lado."
    />
    <S.Title>React Brabo</S.Title>
    <S.Description>TypeScript, ReactJS, NextJS</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Dev de frente para uma tela com código"
    />
  </S.Wrapper>
);

export default Main;
