interface CreateUserInput {
  name: string;
  phone: string;
  password: string;
  address: string;
}

export { CreateUserInput };

interface ProductAttributes {
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  available: boolean;
  quantityAvailable: number;
  ingredients?: string[];
}

export { ProductAttributes };
