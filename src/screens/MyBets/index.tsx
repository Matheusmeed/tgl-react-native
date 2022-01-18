import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import GamesFilter from '../../components/GamesFilter';
import { formatDate, formatPrice, listBet } from '../../shared';
import { RootState } from '../../store';
import { setSelectedGames } from '../../store/Stock.store';
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

  const stock = useSelector((state: RootState) => state.stock);
  const dispatch = useDispatch();

  async function getBets() {
    const data = await listBet(stock.selectedGames);
    if (data) {
      setSavedBets(data);
    }
  }

  useEffect(() => {
    getBets();
  }, [stock.selectedGames]);

  return (
    <Container>
      <GamesFilter disabled={false} />

      <BetInfoDiv>
        {savedBets.length ? (
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
      </BetInfoDiv>
    </Container>
  );
};

export default MyBets;
