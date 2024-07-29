import { CustomValidator } from 'express-validator';
import { Address } from '../../models/address'; // Ajuste o caminho conforme necessário

export const UniqueAddress: CustomValidator = async (value, { req }) => {
  const { bairro, rua, numero, pontoReferencia } = req.body;

  // Converta todos os valores para minúsculas para garantir a comparação insensível ao caso
  const normalizedCidade = value.toLowerCase();
  const normalizedBairro = bairro.toLowerCase();
  const normalizedRua = rua.toLowerCase();
  const normalizedPontoReferencia = pontoReferencia.toLowerCase();

  // Verifique se o endereço já existe para o mesmo usuário
  const existingAddress = await Address.findOne({
    where: {
      cidade: normalizedCidade,
      bairro: normalizedBairro,
      rua: normalizedRua,
      numero,
      pontoReferencia: normalizedPontoReferencia,
    },
  });

  if (existingAddress) {
    return Promise.reject('Este endereço já está cadastrado para este usuário.');
  }
};
