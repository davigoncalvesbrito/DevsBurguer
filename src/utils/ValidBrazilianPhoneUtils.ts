export function isValidBrazilianPhoneNumberFormat(phone: string): boolean {
  // Verifica se o telefone está no formato brasileiro válido 9xxxx-xxxx
  const phoneRegex = /^\d{2}9\d{8}$/; // Formato: XX9YYYYYYYY (XX é o DDD, 9 é o dígito inicial, YYYYYYYY é o número)

  return phoneRegex.test(phone);
}
