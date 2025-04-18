import {Router} from 'express';
import {usuarios, cadastro, login} from '../controllers/userController.js';
import usuarioLogado from '../middlewares/usuarioLogado.js';

const router = Router();

// Mensagem de abertura
router.get('/', (req, res) => {res.send('<h1 style="font-family: monospace">SERVIDOR RODANDO</h1>')});

// Lista de usuários
router.get('/usuarios', usuarios);

// Cadastra usuário
router.post('/usuarios/cadastrar', cadastro);

// Loga usuário
router.post('/usuarios/login', usuarioLogado, login);

export default router;