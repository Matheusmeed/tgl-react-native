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
