import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
  <main>
    <box>
      Imagem
    </box>
    <box>
      Bem vindo
    </box>
    <box>
      Comunidades
    </box>
  </main>
  );
}
