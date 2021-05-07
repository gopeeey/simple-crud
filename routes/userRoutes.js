const userControllers = require('../controllers/userControllers');

const {Router} = require('express');

const userRouter = Router();

userRouter.get('/', userControllers.fetchUsers);
userRouter.get('/:id', userControllers.fetchUserById);
userRouter.put('/:id', userControllers.updateUser);
userRouter.delete('/:id', userControllers.deleteUser);
userRouter.post('/create', userControllers.createUser);

module.exports = userRouter;