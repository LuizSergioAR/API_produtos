# API de Produtos
----

## Descrição

**Objetivo**: Desenvolver uma API para gerenciar um CRUD de Produtos utilizando Docker, o banco escolhido para a integração foi o mysql.

----

## Como executar

docker-compose up -d para criar as imagens do node e do banco mysql

docker exec -it app bash para executar e entrar na imagem do node

npm install para instalar as dependências

npm start para iniciar a API

----

## Como criar a tabela no banco

Existem algumas formas de modelar o banco, podendo utilizar o comando docker exec -it db bash e utilizando comandos do mysql para a modelagem, mas a forma que eu recomendo é utilizando a modelagem do banco que está nomeada como "modelagem-produtos.mwb" e inserir pelo mysql workbench, pois é possivel acessar o banco pela porta localhost:3306

Modelagem:

![ScreenShot](https://github.com/LuizSergioAR/API_produtos/blob/main/banco.png)

----

### Rotas Read

- Retorna todos os produtos cadastrados

> Método: GET
>
> Endpoint: http://localhost:3000/produtos/

- Retorna o produto a partir do ID correspondente

> Método: GET
>
> Endpoint: http://localhost:3000/produtos/<id\> 
 
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

----

### Rotas Update
 
- Atualizar todos os dados de um produtos
 
> Método: PUT
> 
> Endpoint: http://localhost:3000/produtos/<id\> 
 
__Exemplo de corpo__:

```json
{
    "nome" : "cinto marrom",
    "preco": 29.90
}
```
 
----
 
### Rotas Delete
 
- Remover um produto
 
> Método : DELETE
> 
> Endpoint: http://localhost:3000/produtos/<id\>
