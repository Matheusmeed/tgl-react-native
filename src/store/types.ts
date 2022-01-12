type userType = { name: string; email: string; created_at: string };
type tokenType = { token: string; type: string };

type gameType = {
  id: number;
  type: string;
  description: string;
  range: number;
  price: number;
  max_number: number;
  color: string;
};

// Tipagem das Actions

interface IUserInfoAction {
  payload: {
    user: userType;
    token: tokenType;
  };
}

interface IChangeUserName {
  payload: string;
}

interface IGameListAction {
  payload: {
    min_cart_value: number;
    types: [gameType];
  };
}

interface IActualGameInfoAction {
  payload: gameType;
}

interface ISelectedNumbersAction {
  payload: number[];
}

interface IBetContentAction {
  payload: IBetContent;
}

interface IbetListAction {
  payload: IBetList;
}

//Tipagens para o InitialState

interface IBetContent {
  selectedNumbers: number[];
  gameName: string;
  gameColor: string;
  gamePrice: number;
}

interface IBetList {
  selectedNumbers: number[];
  gameName: string;
  gameColor: string;
  gamePrice: number;
}

interface IInitialState {
  userInfo: {
    user: userType;
    token: tokenType;
  };

  gamesInfo: {
    min_cart_value: number;
    types: [gameType];
  };

  actualGameInfo: gameType;
  selectedGames: string[];
  selectedNumbers: number[];
  cartBetContent: IBetContent;
  betList: IBetList[];
  resetToken: string;
}

export type {
  IInitialState,
  IBetList,
  IBetContent,
  IbetListAction,
  IBetContentAction,
  IUserInfoAction,
  IActualGameInfoAction,
  ISelectedNumbersAction,
  IGameListAction,
  IChangeUserName,
};
