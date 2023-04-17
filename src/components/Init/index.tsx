import { Container, Background, Source, Content, Title, Text, Subtitle, Button, BackgroundTop } from './styles'
import background from '../../assets/image/background.png'
import mobile from '../../assets/image/mobile.png'

export default function Header() {
  return (
    <Container>

      <picture>
        <Source srcSet={mobile} media='(max-width: 700px)' />
        <Background srcSet={background} />
      </picture>
      <Content>
      <BackgroundTop></BackgroundTop>
        <Title>Bife de Hambúrguer Grelhado</Title>
        <Text>Pedido especial somente nas <span>TERÇAS</span> toda semana</Text>
        <Subtitle>Compre 3 e Leve o 4° <span>GRÁTIS!</span></Subtitle>
        <Button href='#pages'>PEDIR AGORA</Button>
      </Content>
    </Container>
  )
}
