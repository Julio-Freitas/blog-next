export const convertDateToPtBR = (date: string): string => {
  if (!date) return '';
  return new Date(date).toLocaleDateString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
  });
};

export const converteLocaleTime = (time: string) => {
  if (!time) return '';
  return new Date(time).toLocaleTimeString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    hour: '2-digit',
    minute: '2-digit',
  });
};
