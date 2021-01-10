export const convertDateToPtBR = (date: string): string => {
  if (!date) return '';
  return new Date(date).toLocaleDateString('pt-BR');
};

export const converteLocaleTime = (time: string): string => {
  if (!time) return '';
  return new Date(time).toLocaleTimeString();
};
