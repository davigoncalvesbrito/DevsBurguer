import moment from 'moment-timezone';

// Função para formatar datas no horário de Brasília
export function formatDateToBrazilianTime(date: Date | string): string {
  return moment(date).tz('America/Sao_Paulo').format('DD-MM-YYYY HH:mm:ss');
}
