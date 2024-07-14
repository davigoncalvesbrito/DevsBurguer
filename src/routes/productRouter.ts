import { Router } from 'express';
import { ProductController } from '../controllers/productController';

const router = Router();

// Rotas para CRUD de produtos
router.post('/products', ProductController.createProduct); // Rota para criar produto
router.get('/products/:id', ProductController.getProduct); // Rota para obter produto por ID
router.get('/products', ProductController.getAllProducts); // Rota para obter todos os produtos
router.get('/products/category/:category', ProductController.getProductsByCategory);
router.get('/products/all/categories', ProductController.listCategories);
router.put('/products/:id', ProductController.updateProduct); // Rota para atualizar produto
router.delete('/products/:id', ProductController.deleteProduct); // Rota para deletar produto

export default router;
