import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import GamesFilter from '../../components/GamesFilter';
import { formatDate, formatPrice, listBet } from '../../shared';
import { RootState } from '../../store';
import { styles } from './styles';
import {
  BetInfoDiv,
  Container,
  OwnBet,
  OwnBetInfo,
  OwnBetNumbers,
  OwnBetTitle,
} from './styles';

interface ISavedBets {
  choosen_numbers: string;
  created_at: string;
  price: number;

  id: number;
  type: {
    id: number;
    type: string;
  };
}

type savedBets = ISavedBets[];

const MyBets = () => {
  const [savedBets, setSavedBets] = useState<savedBets>([]);
  const [loading, setLoading] = useState(true);

  const stock = useSelector((state: RootState) => state.stock);

  async function getBets() {
    const data = await listBet(stock.selectedGames);
    if (data) {
      setSavedBets(data);
    }
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    getBets();
  }, [stock.selectedGames]);

  return (
    <Container>
      <GamesFilter disabled={savedBets.length ? false : true} />

      <BetInfoDiv>
        <View style={{ alignItems: 'center' }}>
          {loading ? (
            <Text>Loading...</Text>
          ) : savedBets.length ? (
            savedBets.map((bet) => {
              let color;
              stock.gamesInfo.types.map((el) => {
                if (bet.type.type === el.type) {
                  color = el.color;
                }
                return;
              });

              let choosenNumbers = bet.choosen_numbers.replace(/,/g, ', ');
              let price = formatPrice(bet.price);
              let data = formatDate(bet.created_at);

              if (bet.type.type) {
                return (
                  <OwnBet key={bet.id} color={color} style={styles.shadow}>
                    <OwnBetNumbers>{choosenNumbers}</OwnBetNumbers>
                    <OwnBetInfo>
                      {data} - (R$ {price})
                    </OwnBetInfo>
                    <OwnBetTitle color={color}>{bet.type.type}</OwnBetTitle>
                  </OwnBet>
                );
              } else return;
            })
          ) : (
            <Text>
              Você ainda não tem apostas salvas... Vá para a tela de apostas,
              adicione suas apostas ao carrinho e salve-as.
            </Text>
          )}
        </View>
      </BetInfoDiv>
    </Container>
  );
};

export default MyBets;
