import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/index';
import { setActualGameInfo } from '@store/Stock.store';
import { Container, GameButton, GameButtonText } from './styles';

const GameList = () => {
  const stock = useSelector((state: RootState) => state.stock);
  const dispatch = useDispatch();

  function renderGames() {
    return stock.gamesInfo.types.map((el) => {
      if (el.id === stock.actualGameInfo.id) {
        return (
          <GameButton color2={el.color} key={el.id + el.type}>
            <GameButtonText>{el.type}</GameButtonText>
          </GameButton>
        );
      } else {
        return (
          <GameButton
            onPress={() => {
              dispatch(setActualGameInfo(el));
            }}
            color={el.color}
            key={el.id}
          >
            <GameButtonText color={el.color}>{el.type}</GameButtonText>
          </GameButton>
        );
      }
    });
  }

  return <Container>{renderGames()}</Container>;
};

export default GameList;
