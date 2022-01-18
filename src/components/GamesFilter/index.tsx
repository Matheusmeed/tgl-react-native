import React from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setSelectedGames } from '../../store/Stock.store';
import { Container, GameFilterBtn, GameFilterBtnText } from './styles';

interface IGamesFilterProps {
  disabled: boolean;
}

const GamesFilter = (props: IGamesFilterProps) => {
  const stock = useSelector((state: RootState) => state.stock);
  const dispatch = useDispatch();

  function addSelectedGame(gameName: string) {
    dispatch(setSelectedGames([...stock.selectedGames, gameName]));
  }

  function removeSelectedGame(gameName: string) {
    if (stock.selectedGames.includes(gameName)) {
      let newArr = [...stock.selectedGames];
      newArr.splice(newArr.indexOf(gameName), 1);

      dispatch(setSelectedGames(newArr));
    }
  }

  return (
    <Container>
      {stock.gamesInfo.types.map((game) => {
        let color;
        if (!props.disabled) {
          color = game.color;
        } else {
          color = '';
        }

        if (stock.selectedGames.includes(game.type)) {
          return (
            <GameFilterBtn
              disabled={props.disabled ? true : false}
              color={props.disabled ? '#e0dfdf' : null}
              theme={game.color}
              key={game.id}
              onPress={() => {
                if (!props.disabled) removeSelectedGame(game.type);
              }}
            >
              <GameFilterBtnText>{game.type}</GameFilterBtnText>
            </GameFilterBtn>
          );
        } else {
          return (
            <GameFilterBtn
              disabled={props.disabled ? true : false}
              color={props.disabled ? '#e0dfdf' : color}
              theme='white'
              key={game.id}
              onPress={() => {
                if (!props.disabled) {
                  addSelectedGame(game.type);
                }
              }}
            >
              <GameFilterBtnText color={props.disabled ? '#e0dfdf' : color}>
                {game.type}
              </GameFilterBtnText>
            </GameFilterBtn>
          );
        }
      })}
    </Container>
  );
};

export default GamesFilter;
