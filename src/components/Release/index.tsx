import { Styled } from './Release.styles';

export const Release = () => {
  return (
    <Styled.Content>
      <Styled.Title>Comunicado Importante:</Styled.Title>
      <Styled.Text>
        Nos permitimos informarles que, mientras adelantamos el proceso de
        reubicación de nuestra oficina física, nuestra empresa continuará
        prestando sus servicios de manera legal y totalmente válida a través de
        canales virtuales.
        <Styled.Link href="/aviso-importante.pdf" target="_blank">
          más info
        </Styled.Link>
      </Styled.Text>
    </Styled.Content>
  );
};
