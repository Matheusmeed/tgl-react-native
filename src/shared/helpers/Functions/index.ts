import moment from 'moment';
import { showMessage } from 'react-native-flash-message';

export const formatDate = (data: string) => {
  let formattedDate = moment(new Date(data)).format('DD/MM/YYYY');
  return formattedDate;
};

export const formatPrice = (value: number) => {
  let formattedValue = value.toFixed(2).toString().replace('.', ',');
  return formattedValue;
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
  });
};

export const alertSuccess = (message: string, description?: string) => {
  showMessage({
    icon: 'success',
    type: 'success',
    message: message,
    description: description,
    duration: 1400,
    hideStatusBar: true,
    floating: true,
  });
};

export const alertInfo = (message: string, description?: string) => {
  showMessage({
    icon: 'info',
    type: 'info',
    message: message,
    description: description,
    duration: 2000,
    hideStatusBar: true,
    floating: true,
  });
};
