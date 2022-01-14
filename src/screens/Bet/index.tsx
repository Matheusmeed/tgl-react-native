import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import GameList from '../../components/GameList';
import { listGames } from '../../shared';
import { theme } from '../../shared/styles/theme';
import { RootState } from '../../store';
import { addGamesInfo, setActualGameInfo } from '../../store/Stock.store';
import { BetTitle, Container, Subtitle } from './styles';

const Bet = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const stock = useSelector((state: RootState) => state.stock);

  useEffect(() => {
    getGamesData();
  }, [dispatch]);

  async function getGamesData() {
    let data = await listGames();
    if (data) {
      dispatch(addGamesInfo(data[0]));
      dispatch(setActualGameInfo(data[1]));
      setLoading(false);
    } else {
      setError(true);
      setLoading(false);
    }
  }

  return (
    <Container>
      <View>
        <BetTitle>
          <Text style={{ color: theme.colors.secondary }}>NEW BET</Text> FOR
          LOTOFÁCIL
        </BetTitle>
      </View>

      <View>
        <Subtitle>Choose a game</Subtitle>
        <GameList />
      </View>
    </Container>
  );
};

export default Bet;
