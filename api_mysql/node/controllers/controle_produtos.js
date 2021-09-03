const mysql = require('../mysql')

exports.GetProdutos = async (req, res, next) => {

    try {

        const result = await mysql.execute("SELECT * FROM produtos;")

        const response = {

            quantidade: result.length,
            produtos: result.map(prod => {

                return {
                    id_produto: prod.id_produtos,
                    nome: prod.nome,
                    preco: prod.preco,
                    request: {
                        tipo: 'GET',
                        descricao: 'Retorna os dados desse produto',
                        url: 'http://localhost:3000/produtos/' + prod.id_produtos
                    }
                }
            })
        }

        return res.status(200).send(response)

    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.PostProduto = async (req, res, next) => {

    try {

        const result = await mysql.execute('INSERT INTO produtos (nome, preco) VALUES (?,?)',
            [req.body.nome, req.body.preco])

        const response = {

            mensagem: 'Produto inserido com sucesso',
            produtoCriado: {

                id_produto: result.id_produtos,
                nome: req.body.nome,
                preco: req.body.preco,
                request: {
                    tipo: 'GET',
                    descricao: 'Retorna todos produtos',
                    url: 'http://localhost:3000/produtos/'
                }
            }
        }

        return res.status(201).send(response)


    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.GetUmProduto = async (req, res, next) => {

    try {

        const result = await mysql.execute('SELECT * FROM produtos WHERE id_produtos = ?;',
            [req.params.id_produto])

        if (result.length == 0) {

            return res.status(404).send({
                mensagem: 'Não foi encontado um produto com esse ID'
            })

        }

        const response = {

            produto: {
                id_produto: result[0].id_produtos,
                nome: result[0].nome,
                preco: result[0].preco,
                request: {
                    tipo: 'GET',
                    descricao: 'Retorna todos produtos',
                    url: 'http://localhost:3000/produtos/'
                }
            }
        }

        return res.status(200).send(response)

    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.UpdateProdutos = async (req, res, next) => {

    try {

        const result = await mysql.execute('UPDATE produtos SET nome = ?, preco = ? WHERE id_produtos = ?;',
            [req.body.nome, req.body.preco, req.params.id_produto])

        if (result.changedRows == 0) {

            return res.status(404).send({
                mensagem: 'Não foi encontado um produto com esse ID ou os dados inseridos são os mesmos desse produto'
            })
        }

        const response = {

            mensagem: 'Produto atualizado com sucesso',
            produtoAtualizado: {

                id_produto: req.body.id_produtos,
                nome: req.body.nome,
                preco: req.body.preco,
                request: {
                    tipo: 'GET',
                    descricao: 'Retorna os dados de um produto específico',
                    url: 'http://localhost:3000/produtos/' + req.params.id_produto
                }
            }
        }

        return res.status(202).send(response)

    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.DeleteProduto = async (req, res, next) => {

    try {

        const result = await mysql.execute('DELETE FROM produtos WHERE id_produtos = ?',
            [req.params.id_produto])

        if (result.affectedRows == 0) {

            return res.status(404).send({
                mensagem: 'Não foi encontado um produto com esse ID'
            })
        }

        const response = {

            mensagem: 'Produto removido com sucesso',
            request: {

                tipo: 'POST',
                descricao: 'Insere um produto',
                url: 'http://localhost:3000/produtos/',
                body: {
                    nome: 'String',
                    preco: 'Number'

                }
            }
        }

        return res.status(201).send(response)
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}
