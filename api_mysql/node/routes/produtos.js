const express = require('express')
const router = express.Router()

const Controle_produtos = require('../controllers/controle_produtos')

router.get('/', Controle_produtos.GetProdutos)
router.post('/', Controle_produtos.PostProduto)
router.get('/:id_produto', Controle_produtos.GetUmProduto)
router.patch('/:id_produto', Controle_produtos.UpdateProdutos)
router.delete('/:id_produto', Controle_produtos.DeleteProduto)


module.exports = router