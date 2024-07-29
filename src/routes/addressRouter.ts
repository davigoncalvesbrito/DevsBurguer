import { Router } from 'express';
import { AddressController } from '../controllers/addressController';
import { addressValidator } from '../middlewares/address/addressValidator';
import { validationErrorHandler } from '../middlewares/validators/validationErrorHandler';
import { checkUserExists } from '../middlewares/address/checkUserExists';
const router = Router();

router.post(
  '/add/address/:userId',
  checkUserExists,
  addressValidator,
  validationErrorHandler,
  AddressController.addAddressToUser,
);

router.put(
  '/alter/address/:id',
  checkUserExists,
  addressValidator,
  validationErrorHandler,
  AddressController.updateAddress,
);

router.delete('/delete/address/:id', AddressController.deleteAddress);

export default router;
