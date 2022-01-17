import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { alertInfo, alertSuccess } from '../../shared/helpers/Functions';
import { RootState } from '../../store';
import { setCartBetContent, setSelectedNumbers } from '../../store/Stock.store';
import {
  ContainerGameButtons,
  ContainerGameNumber,
  GameBtn,
  GameBtnText,
  GameNumberButton,
  GameNumberButtonText,
} from './styles';

const GameNumbers = () => {
  const stock = useSelector((state: RootState) => state.stock);
  const dispatch = useDispatch();
  let numbers: number[] = [];

  useEffect(() => {
    dispatch(setSelectedNumbers([]));
  }, [stock.actualGameInfo, dispatch]);

  function renderNumbers() {
    for (let i = 1; i <= stock.actualGameInfo.range; i++) {
      numbers.push(i);
    }

    function handleNumberClick(num: number) {
      if (stock.selectedNumbers.includes(num)) {
        let newArray = [...stock.selectedNumbers];
        newArray.splice(newArray.indexOf(num), 1);
        dispatch(setSelectedNumbers([...newArray]));
      } else {
        if (stock.actualGameInfo.max_number === stock.selectedNumbers.length) {
          alertInfo(
            `Você já escolheu ${stock.actualGameInfo.max_number} números!`
          );
        } else {
          dispatch(setSelectedNumbers([...stock.selectedNumbers, num]));
        }
      }
    }

    return numbers.map((num) => {
      return (
        <GameNumberButton
          color={
            stock.selectedNumbers.includes(num)
              ? stock.actualGameInfo.color
              : ''
          }
          onPress={() => handleNumberClick(num)}
          key={num}
        >
          <GameNumberButtonText>
            {num.toString().length === 2 ? num : '0' + num}{' '}
          </GameNumberButtonText>
        </GameNumberButton>
      );
    });
  }

  function clearGame() {
    dispatch(setSelectedNumbers([]));
  }

  function completeGame() {
    if (stock.selectedNumbers.length === stock.actualGameInfo.max_number) {
      alertInfo(`Você já escolheu ${stock.actualGameInfo.max_number} números!`);
    } else {
      let randomNumbers: number[] = [];
      let total =
        stock.actualGameInfo.max_number - stock.selectedNumbers.length;
      let range = stock.actualGameInfo.range;

      while (randomNumbers.length < total) {
        let random = Math.floor(Math.random() * range + 1);

        if (!randomNumbers.includes(random)) {
          if (!stock.selectedNumbers.includes(random)) {
            randomNumbers.push(random);
          }
        }
      }
      dispatch(
        setSelectedNumbers([...stock.selectedNumbers, ...randomNumbers])
      );
    }
  }

  function handleAddToCart() {
    if (stock.selectedNumbers.length < stock.actualGameInfo.max_number) {
      alertInfo(
        `Você precisa escolher mais ${stock.selectedNumbers.length} número(s)`
      );
    } else {
      clearGame();

      dispatch(
        setCartBetContent({
          selectedNumbers: stock.selectedNumbers,
          gameName: stock.actualGameInfo.type,
          gameColor: stock.actualGameInfo.color,
          gamePrice: stock.actualGameInfo.price,
        })
      );
    }

    alertSuccess(`Aposta ${stock.actualGameInfo.type} adicionada ao carrinho!`);
  }

  return (
    <>
      <ContainerGameNumber>{renderNumbers()}</ContainerGameNumber>
      <ContainerGameButtons>
        <GameBtn onPress={() => completeGame()}>
          <GameBtnText>Complete Game</GameBtnText>
        </GameBtn>
        <GameBtn onPress={() => clearGame()}>
          <GameBtnText>Clear Game</GameBtnText>
        </GameBtn>
        <GameBtn onPress={() => handleAddToCart()}>
          <GameBtnText>Add to cart</GameBtnText>
        </GameBtn>
      </ContainerGameButtons>
    </>
  );
};

export default GameNumbers;
