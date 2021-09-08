# API de Produtos
----

## Descrição

**Objetivo**: Desenvolver uma API para gerenciar um CRUD de Produtos e persistir os dados utilizando Docker, o banco escolhido para a integração foi o mysql.

----

## Como executar

```docker-compose up -d``` para criar as imagens do node e do banco mysql

```docker exec -it app bash``` para executar e entrar na imagem do node

```npm install``` para instalar as dependências

```npm start``` para iniciar a API

----

## Como criar a tabela no banco

Existem algumas formas de modelar o banco, podendo utilizar o comando ```docker exec -it db bash``` e utilizando comandos do mysql para a modelagem, mas a forma que eu recomendo é utilizando a modelagem do banco que está nomeada como "modelagem-produtos.mwb" e inserir pelo mysql workbench, pois é possivel acessar o banco pelo endereço ```localhost:3306```

Modelagem:

![ScreenShot](https://github.com/LuizSergioAR/API_produtos/blob/main/imagens/banco.png)

----

### Rotas Read

- Retorna todos os produtos cadastrados

> Método: GET
>
> Endpoint: http://localhost:3000/produtos/

Retorno esperado:

![ScreenShot](https://github.com/LuizSergioAR/API_produtos/blob/main/imagens/Retorno_get_todos.png)

- Retorna o produto a partir do ID correspondente

> Método: GET
>
> Endpoint: http://localhost:3000/produtos/<id\> 

Retorno esperado:

![ScreenShot](https://github.com/LuizSergioAR/API_produtos/blob/main/imagens/Retorno_get_um.png)
 
### Rotas Create

- Criar um produto
 
> Método: POST
> 
> Endpoint: http://localhost:3000/produtos/
 
__Exemplo de corpo__:

```json
{
    "nome" : "cinto",
    "preco": 29.90
}
```

Retorno esperado:

![ScreenShot](https://github.com/LuizSergioAR/API_produtos/blob/main/imagens/Retorno_post.png)

----

### Rotas Update
 
- Atualizar todos os dados de um produto
 
> Método: PATCH
> 
> Endpoint: http://localhost:3000/produtos/<id\> 
 
__Exemplo de corpo__:

```json
{
    "nome" : "cinto marrom",
    "preco": 29.90
}
```

Retorno esperado:

![ScreenShot](https://github.com/LuizSergioAR/API_produtos/blob/main/imagens/Retorno_patch.png)
 
----
 
### Rotas Delete
 
- Remover um produto
 
> Método : DELETE
> 
> Endpoint: http://localhost:3000/produtos/<id\>

Retorno esperado:

![ScreenShot](https://github.com/LuizSergioAR/API_produtos/blob/main/imagens/Retorno_delete.png)
