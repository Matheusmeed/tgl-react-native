import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { listGames } from '../../shared';
import { RootState } from '../../store';
import { addGamesInfo, setActualGameInfo } from '../../store/Stock.store';
import { Container, GameButton, GameButtonText } from './styles';

const GameList = () => {
  const stock = useSelector((state: RootState) => state.stock);
  const dispatch = useDispatch();

  function renderGames() {
    return stock.gamesInfo.types.map((el) => {
      if (el.id === stock.actualGameInfo.id) {
        return (
          <GameButton theme={el.color} key={el.id}>
            <GameButtonText>{el.type}</GameButtonText>
          </GameButton>
        );
      } else {
        return (
          <GameButton
            onPress={() => {
              dispatch(setActualGameInfo(el));
            }}
            // color={el.color}
            key={el.id}
          >
            <GameButtonText>{el.type}</GameButtonText>
          </GameButton>
        );
      }
    });
  }

  return <Container>{renderGames()}</Container>;
};

export default GameList;