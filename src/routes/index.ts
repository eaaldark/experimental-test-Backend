import {Router} from 'express';
const router = Router();
import { insertItem, getList, homePage } from '../controllers/index.controller'

router.get('/', homePage);
router.get('/list', getList);
router.post('/insert', insertItem);

export default router;