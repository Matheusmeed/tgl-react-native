import { showMessage } from 'react-native-flash-message';

export const formatDate = (data: string) => {
  let formattedDate = new Date(data).toLocaleDateString('pt-br', {
    timeZone: 'UTC',
  });
  return formattedDate;
};

export const formatPrice = (value: number) => {
  let formattedPrice = value.toLocaleString('pt-br', {
    minimumFractionDigits: 2,
  });
  return formattedPrice;
};

export const alertDanger = (message: string, description?: string) => {
  showMessage({
    icon: 'danger',
    type: 'danger',
    message: message,
    description: description,
    duration: 2500,
    hideStatusBar: true,
    floating: true,
  });
};

export const alertWarning = (message: string, description?: string) => {
  showMessage({
    icon: 'warning',
    type: 'warning',
    message: message,
    description: description,
    duration: 2500,
    hideStatusBar: true,
    floating: true,
    style: { elevation: 2 },
  });
};
export const alertSuccess = (message: string, description?: string) => {
  showMessage({
    icon: 'success',
    type: 'success',
    message: message,
    description: description,
    duration: 2000,
    hideStatusBar: true,
    floating: true,
  });
};
