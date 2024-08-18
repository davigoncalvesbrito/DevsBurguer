import { Router } from 'express';
import { createAddress } from '../controllers/address/createAddress';
import { deleteAddress } from '../controllers/address/deleteAddress';
import { updateAddress } from '../controllers/address/updateAddress';
import { addressValidator } from '../middlewares/address/addressValidator';
import { validationErrorHandler } from '../middlewares/validators/validationErrorHandler';
import { checkUserExists } from '../middlewares/address/checkUserExists';
const router = Router();

router.post(
  '/add/address/:userId',
  checkUserExists,
  addressValidator,
  validationErrorHandler,
  createAddress,
);

router.put(
  '/alter/address/:id',
  checkUserExists,
  addressValidator,
  validationErrorHandler,
  updateAddress,
);

router.delete('/delete/address/:id', deleteAddress);

export default router;
