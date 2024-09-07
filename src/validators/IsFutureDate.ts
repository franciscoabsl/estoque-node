export const isFutureDate = (date: Date | string): boolean => {
  const now = new Date();
  const inputDate = new Date(date);

  // Verifica se a data é válida e se é no futuro
  return inputDate > now;
};
