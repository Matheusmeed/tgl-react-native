import { TitleTGL, Container, For } from './styles';

const Title = () => {
  return (
    <Container>
      <TitleTGL>
        The {'\n'}
        Greatest {'\n'}
        App
      </TitleTGL>
      <For>for</For>
      <TitleTGL>LOTTERY</TitleTGL>
    </Container>
  );
};

export default Title;
