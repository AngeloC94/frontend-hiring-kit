export const formatDateIT = (date) => {
  const formattedData = new Date(date).toLocaleDateString('it-IT')
  return formattedData;
};


