import { Router } from 'express';
import { createProduct } from '../controllers/product/createProduct';
import { getProduct } from '../controllers/product/getProduct';
import { getAllProduct } from '../controllers/product/getAllProduct';
import { listCategories } from '../controllers/product/listCategories';
import { getProductByCategory } from '../controllers/product/getProductByCategory';
import { updateProduct } from '../controllers/product/updateProduct';
import { deleteProduct } from '../controllers/product/deleteProduct';
import { productValidator } from '../middlewares/product/productValidator';

const productRouter = Router();

/***  ROTAS GET  ***/
productRouter.get('/products/:id', getProduct); // Listar produtos pelo  ID
productRouter.get('/products', getAllProduct); // Listar  todos os produtos
productRouter.get('/products/category/:category', getProductByCategory); // Lista uma categoria especifica
productRouter.get('/products/all/categories', listCategories); // Listar todas as categorias existentes

/***  ROTAS POST  ***/
productRouter.post('/products', productValidator, createProduct); // Rota para criar produto

/***  ROTAS PUT  ***/
productRouter.put('/products/:id', productValidator, updateProduct); // Rota para atualizar produto

/***  ROTAS DELETE ***/
productRouter.delete('/products/:id', deleteProduct); // Rota para deletar produto

export default productRouter;
