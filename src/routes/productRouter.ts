import { Router } from 'express';
import { ProductController } from '../controllers/productController';
import { productValidator } from '../middlewares/product/productValidator';

const router = Router();

/***  ROTAS GET  ***/
router.get('/products/:id', ProductController.getProduct); // Listar produtos pelo  ID
router.get('/products', ProductController.getAllProducts); // Listar  todos os produtos
router.get('/products/category/:category', ProductController.getProductsByCategory); // Lista uma categoria especifica
router.get('/products/all/categories', ProductController.listCategories); // Listar todas as categorias existentes

/***  ROTAS POST  ***/
router.post('/products', productValidator, ProductController.createProduct); // Rota para criar produto

/***  ROTAS PUT  ***/
router.put('/products/:id', productValidator, ProductController.updateProduct); // Rota para atualizar produto

/***  ROTAS DELETE ***/
router.delete('/products/:id', ProductController.deleteProduct); // Rota para deletar produto

export default router;
