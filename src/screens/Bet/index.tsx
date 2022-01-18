import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import GameList from '../../components/GameList';
import GameNumbers from '../../components/GameNumbers';
import { NavigationProps } from '../../components/types/AuthProps';
import { listGames } from '../../shared';
import { theme } from '../../shared/styles/theme';
import { RootState } from '../../store';
import { addGamesInfo, setActualGameInfo } from '../../store/Stock.store';
import { BetTitle, Container, Subtitle, Description } from './styles';

const Bet = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProps>();
  const stock = useSelector((state: RootState) => state.stock);

  useEffect(() => {
    getGamesData();
  }, [dispatch]);

  async function getGamesData() {
    let data = await listGames();
    if (data) {
      dispatch(addGamesInfo(data[0]));
      dispatch(setActualGameInfo(data[1]));
    }
  }

  return (
    <Container>
      {stock.actualGameInfo.type && (
        <>
          <View>
            <BetTitle>
              <Text style={{ color: theme.colors.secondary }}>NEW BET</Text> FOR{' '}
              {stock.actualGameInfo.type.toUpperCase()}
            </BetTitle>
          </View>
          <View>
            <Subtitle>Choose a game</Subtitle>
            <GameList />
          </View>
          <View>
            <Subtitle>Fill your bet</Subtitle>
            <Description>{stock.actualGameInfo.description}</Description>
            <GameNumbers />
          </View>
        </>
      )}
    </Container>
  );
};

export default Bet;
