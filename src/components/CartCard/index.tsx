import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import {
  BetInfoDiv,
  Card,
  Container,
  GameInfoDiv,
  GameName,
  LineView,
  ListView,
  RemoveButton,
  SaveButton,
  SaveText,
  Title,
  TotalDiv,
} from './styles';
import {
  clearBetList,
  clearCartBetContent,
  setBetList,
  setSelectedGames,
} from '@store/Stock.store';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/index';
import { alertDanger, formatPrice, newBet, theme } from '@shared/index';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '@components/types/AuthProps';

const CartCard = () => {
  const stock = useSelector((state: RootState) => state.stock);
  const dispatch = useDispatch();
  const navigation: NavigationProps = useNavigation();

  useEffect(() => {
    if (stock.cartBetContent !== undefined && stock.cartBetContent.gameName) {
      let retorno = false;

      stock.betList.forEach((bet) => {
        if (bet.gameName) {
          if (
            bet.gameName === stock.cartBetContent.gameName &&
            bet.selectedNumbers.toString() ===
              stock.cartBetContent.selectedNumbers.toString()
          ) {
            retorno = true;
          }
        }
        dispatch(clearCartBetContent());
      });
      if (retorno) {
        alertDanger('Essa aposta já foi adicionada ao carrinho!');
      } else {
        dispatch(setBetList(stock.cartBetContent));
      }
    }
  }, [stock.cartBetContent, stock.betList, dispatch]);

  function removeBet(gameName: string, selectedNumbers: string) {
    stock.betList.forEach((bet) => {
      if (
        gameName === bet.gameName &&
        selectedNumbers === bet.selectedNumbers.toString()
      ) {
        let newArray = [...stock.betList];
        newArray.splice(newArray.indexOf(bet), 1);
        dispatch(clearBetList([...newArray]));
      }
    });
  }

  function total() {
    let total = 0;
    stock.betList.map((bet) => {
      if (typeof bet.gamePrice === 'number') {
        return (total += bet.gamePrice);
      } else {
        return '';
      }
    });
    return formatPrice(total);
  }

  async function handleSave() {
    if (stock.betList.length === 1) {
      alertDanger(
        'Seu carrinho está vazio!',
        'Adicione suas apostas para poder salvá-las'
      );
    } else {
      const games: [{ game_id: number; numbers: number[] }] = [
        { game_id: 0, numbers: [] },
      ];

      stock.betList.forEach((bet) => {
        if (bet.gameName) {
          stock.gamesInfo.types.forEach((game) => {
            if (bet.gameName === game.type) {
              games.push({ game_id: game.id, numbers: bet.selectedNumbers });
            }
          });
        }
      });
      games.shift();
      const data = await newBet(games, stock.gamesInfo.min_cart_value);

      if (data) {
        dispatch(clearBetList([{}]));
        navigation.navigate('My Bets');
      }
      dispatch(setSelectedGames([]));
    }
  }

  return (
    <Container>
      <Card>
        <Title style={{ paddingBottom: 5 }}>CART</Title>

        <ListView>
          {stock.betList.length > 1 ? (
            stock.betList.map((el) => {
              if (el.gameName) {
                return (
                  <LineView key={Math.random()}>
                    <RemoveButton
                      onPress={() =>
                        removeBet(el.gameName, el.selectedNumbers.toString())
                      }
                    >
                      <Text>
                        <Ionicons
                          name='trash-outline'
                          size={24}
                          color={theme.colors.primary}
                        />
                      </Text>
                    </RemoveButton>
                    <BetInfoDiv color={el.gameColor}>
                      <View
                        style={{
                          width: 210,
                        }}
                      >
                        <Text>
                          {el.selectedNumbers && el.selectedNumbers.join(', ')}
                        </Text>
                      </View>
                      <GameInfoDiv>
                        <View>
                          <GameName style={{ color: el.gameColor }}>
                            {el.gameName}
                            {'   '}
                          </GameName>
                        </View>
                        <Text>
                          R$ {el.gamePrice && formatPrice(el.gamePrice)}
                        </Text>
                      </GameInfoDiv>
                    </BetInfoDiv>
                  </LineView>
                );
              }
              return;
            })
          ) : (
            <Text style={{ padding: 10 }}>
              Você ainda não adicionou apostas ao seu carrinho, escolha o seu
              jogo favorito e faça a sua aposta!
            </Text>
          )}
        </ListView>

        <TotalDiv>
          <Title>TOTAL: R$ {stock.betList.length > 1 ? total() : '0,00'}</Title>
        </TotalDiv>

        <SaveButton onPress={handleSave}>
          <SaveText>
            Save <AntDesign name='arrowright' size={24} color='#27c383' />
          </SaveText>
        </SaveButton>
      </Card>
    </Container>
  );
};

export default CartCard;
