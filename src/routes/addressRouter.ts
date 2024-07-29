import { Router } from 'express';
import { AddressController } from '../controllers/addressController';

const router = Router();

router.post('/add/address/:userId', AddressController.addAddressToUser);

router.put('/alter/address/:id', AddressController.updateAddress);

router.delete('/delete/address/:id', AddressController.deleteAddress);

export default router;
