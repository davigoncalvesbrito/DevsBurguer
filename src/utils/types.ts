export interface CreateUserInput {
  name: string;
  phone: string;
  password: string;
}

export interface ProductAttributes {
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  available: boolean;
  quantityAvailable: number;
  ingredients?: string[];
}

export interface CreateAddressInput {
  cidade: string;
  bairro: string;
  rua: string;
  number: string;
  pontoReferencia?: string; // ponto de referência (opcional)
}
