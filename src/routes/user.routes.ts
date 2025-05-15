import { Router } from 'express';
import { deleteAllUsers, deleteUserById, getUserById, addUser, getUsersWithPagination } from '../controllers/user.controller';
import { wrapAsync } from '../utils/wrapAsync';


const router = Router();

router.delete('/users', wrapAsync(deleteAllUsers));
router.get('/users', wrapAsync(getUsersWithPagination));
router.delete('/users/:userId', wrapAsync(deleteUserById));
router.get('/users/:userId', wrapAsync(getUserById));
router.put('/users', wrapAsync(addUser));

export default router;
