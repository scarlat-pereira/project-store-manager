Este projeto contém os requisitos realizados por _[Scarlat Pereira](https://www.linkedin.com/in/scarlatpereira/)_ enquanto estudava na [Trybe](https://www.betrybe.com/) :rocket:

# Project Store Manager

Neste projeto desenvolvi uma API utilizando a arquitetura MSC (model-service-controller)!

A API criada tinha como base um sistema de gerenciamento de vendas no formato dropshipping em que é possível criar, visualizar, deletar e 
atualizar produtos e vendas. Para gestão do banco de dados, utilizei o MySQL. Além disso, a API desenvolvida foi RESTful.

## Arquitetura de Software - MSC

![Captura de tela de 2023-02-25 10-33-20](https://user-images.githubusercontent.com/108958216/221359698-fb05f09f-f043-44c0-82dc-3b82e667dc56.png)

## Demo

![Gravação de tela de 25-02-2023 10_38_36](https://user-images.githubusercontent.com/108958216/221360654-cbac1d19-1e40-412d-8357-dcdc456b356f.gif)

## Instalação do projeto localmente:

 Após cada um dos passos, haverá um exemplo do comando a ser digitado para fazer o que está sendo pedido, caso tenha dificuldades e o exemplo não seja suficiente, não hesite em me contatar em engcivil.scarlat@gmail.com
 
 1. Abra o terminal e crie um diretório no local de sua preferência com o comando **mkdir**:
```javascript
  mkdir projetos
```

2. Entre no diretório que acabou de criar e depois clone o projeto:
```javascript
  cd projetos
  git clone git@github.com:scarlat-pereira/project-store-manager.git
```

3. Acesse o diretório do projeto e depois utilize o comando **npm i** para instalar todas as dependências necessárias:
```javascript
  cd project-store-manager
  npm i
```

- ✨ **Dica:** Caso queira utilizar _Docker_ para rodar os testes localmente e validar as funcionalidades, basta seguir as seguintes instruções:

 **:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**

  > :information_source: Rode os serviços `node` e `db` com o comando `docker-compose up -d`.
  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers;
  - Esses serviços irão inicializar um container chamado `store_manager` e outro chamado `store_manager_db`;
  - A partir daqui você pode rodar o container `store_manager` via CLI ou abri-lo no VS Code.

  >  :information_source: Use o comando `docker exec -it store_manager bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > :information_source: Instale as dependências [**Caso existam**] com `npm install`

  - **:warning: Atenção:** Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

  - **:warning: Atenção:** O **git** dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

  - **:warning: Atenção:** Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.


## Habilidades Desenvolvidas

Neste projeto, desenvolvi as seguintes habilidades:

 - Arquitetar e desenvolver a API com um banco de dados MySQL;
 - Desenvolver endpoints para criar, exibir, atualizar e excluir produtos e vendas;
 - Aplicar testes unitários em cada camada do modelo MSC.

 ## Escopo do Projeto

## 01 - Crie endpoints para listar produtos

- O endpoint para listar produtos deve ser acessível através do caminho (`/products`) e (`/products/:id`);
- Através do caminho `/products`, todos os produtos devem ser retornados;
- Através do caminho `/products/:id`, apenas o produto com o `id` presente na URL deve ser retornado;
- O resultado da listagem deve ser **ordernado** de forma crescente pelo campo `id`;

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

  - **[Será validado que é possível listar todos os produtos]**
    - Ao listar usuários com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:
    ```json
      [
        {
          "id": 1,
          "name": "Martelo de Thor",
        },
        {
          "id": 2,
          "name": "Traje de encolhimento",
        }
        /* ... */
      ]
    ```
  
  - **[Será validado que não é possível listar um produto que não existe]**
    - Se o produto for inexistente o resultado retornado deverá ser conforme exibido abaixo, com um status http `404`:
    ```json
      { "message": "Product not found" }
    ```

  - **[Será validado que é possível listar um produto específico com sucesso]**
    - Ao listar um produto com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:
    ```json
      {
        "id": 1,
        "name": "Martelo de Thor",
      }
    ```

  <br>
</details>

---

## 02 - Desenvolva testes que cubram no mínimo 5% das camadas da sua aplicação

- Seus arquivos de teste devem ficar no diretório `tests/unit`, como é descrito em [Para escrever seus próprios arquivos de teste](#para-escrever-seus-própios-arquivos-de-teste);
- Seus testes da `model` devem fazer mock do banco de dados obrigatóriamente;
- Opcionalmente você pode parar o serviço do `MYSQL` em sua máquina. Para rodar seus teste utilize `npm run test:mocha`;
- Antes de executar os testes da Trybe, seus testes não devem conter erros.

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

  - **[Será validado que a cobertura total das linhas dos arquivos de CADA camada `models`, `services` e `controllers` é maior ou igual a 5%. Ou seja, cada uma das camadas tem de ter, ao menos, 5% de cobertura de testes.]**
  
  - **[Será validado que existe um mínimo de 2 funções em CADA camada `models`, `services` e `controllers`.]**

  <br>
</details>

---

## 03 - Crie endpoint para cadastrar produtos

- O endpoint deve ser acessível através do caminho (`/products`);
- Os produtos enviados devem ser salvos na tabela `products` do banco de dados;
- O corpo da requisição deverá seguir o formato abaixo:
```json
  {
    "name": "ProdutoX"
  }
```

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

  - **[Será validado que é possível cadastrar um produto com sucesso]**
    - Se o produto for criado com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `201`:
    ```json
      {
        "id": 4,
        "name": "ProdutoX"
      }
    ```

  <br>
</details>

---

## 04 - Crie validações para produtos

- O endpoint de produtos deve ser acessível através do caminho (`/products`);
- Lembre-se, o banco de dados não deve ser acessado nas validações iniciais do corpo da requisição;

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

  - **[Será validado que não é possível realizar operações em um produto sem o campo `name`]**
    - Se a requisição não tiver o campo `name`, o resultado retornado deverá ser conforme exibido abaixo, com um status http `400` :
    ```json
      { "message": "\"name\" is required" }
    ```

  - **[Será validado que não é possível realizar operações em um produto com o campo `name` menor que 5 caracteres]**
    - Se a requisição não tiver `name` com pelo menos 5 caracteres, o resultado retornado deverá ser conforme exibido abaixo, com um status http `422`
    ```json
      { "message": "\"name\" length must be at least 5 characters long" }
    ```

  <br>
</details>

---

## 05 - Desenvolva testes que cubram no mínimo 10% das camadas da sua aplicação

- Seus arquivos de teste devem ficar no diretório `tests/unit`, como é descrito em [Para escrever seus próprios arquivos de teste](#para-escrever-seus-própios-arquivos-de-teste);
- Seus testes da `model` devem fazer mock do banco de dados obrigatóriamente;
- Opcionalmente você pode parar o serviço do `MYSQL` em sua máquina. Para rodar seus teste utilize `npm run test:mocha`;
- Antes de executar os testes da Trybe, seus testes não devem conter erros.

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

  - **[Será validado que a cobertura total das linhas dos arquivos de CADA camada `models`, `services` e `controllers` é maior ou igual a 10%. Ou seja, cada uma das camadas tem de ter, ao menos, 10% de cobertura de testes.]**
  
  - **[Será validado que existe um mínimo de 3 funções em CADA camada `models`, `services` e `controllers`.]**

  <br>
</details>

---

## 06 - Crie endpoint para validar e cadastrar vendas

- O endpoint de vendas deve ser acessível através do caminho (`/sales`);
- As vendas enviadas devem ser salvas nas tabelas `sales` e `sales_products` do banco de dados;
- Deve ser possível cadastrar a venda de vários produtos através da uma mesma requisição;
- O corpo da requisição deverá seguir o formato abaixo:
```json
[
  {
    "productId": 1,
    "quantity": 1
  },
  { "productId": 2,
    "quantity": 5
  }
]
```

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

  - **[Será validado que não é possível realizar operações em uma venda sem o campo `productId`]**
  
  - Se alguns itens da requisição não tiver o campo `productId`, o resultado retornado deverá ser conforme exibido abaixo, com um status http `400` :
    ```json
      { "message": "\"productId\" is required" }
    ```
  - **[Será validado que não é possível realizar operações em uma venda sem o campo `quantity`]**
  
    - Se alguns dos itens da requisição não tiver `quantity`, o resultado retornado deverá ser conforme exibido abaixo, com um status http `400` :
    ```json
      { "message": "\"quantity\" is required" }
    ```
  - **[Será validado que não é possível realizar operações em uma venda com o campo `quantity` menor ou igual a 0(Zero)]**
  
    - Se a requisição tiver algum item com o campo `quantity` seja menor ou igual a zero, o resultado retornado deverá ser conforme exibido abaixo, com um status http `422` :
    ```json
      { "message": "\"quantity\" must be greater than or equal to 1" }
    ```
  - **[Será validado que não é possível realizar operações em uma venda com o campo `productId inexistente, em uma requisição com um único item`]**
  
    - Se o campo `productId` do item da requisição não existir no banco de dados, o resultado retornado deverá ser conforme exibido abaixo, com um status http `404` :
    ```json
      { "message": "Product not found" }
    ```
  - **[Será validado que não é possível realizar operações em uma venda com o campo `productId inexistente, em uma requisição com vários itens`]**
  
    - Se a requisição tiver algum item cujo campo `productId` não existe no banco de dados, o resultado retornado deverá ser conforme exibido abaixo, com um status http `404` :
    ```json
      { "message": "Product not found" }
    ```
  - **[Será validado que é possível cadastrar uma venda com sucesso]**
  
    - Se a venda for criada com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `201`:
    ```json
      {
        "id": 4,
        "itemsSold": [
          {
            "productId": 1,
            "quantity": 1
          },
          {
            "productId": 2,
            "quantity": 5
          }
        ]
      }
    ```

  <br>
</details>

---

## 07 - Desenvolva testes que cubram no mínimo 15% das camadas da sua aplicação

- Seus arquivos de teste devem ficar no diretório `tests/unit`, como é descrito em [Para escrever seus próprios arquivos de teste](#para-escrever-seus-própios-arquivos-de-teste);
- Seus testes da `model` devem fazer mock do banco de dados obrigatóriamente;
- Opcionalmente você pode parar o serviço do `MYSQL` em sua máquina. Para rodar seus teste utilize `npm run test:mocha`;
- Antes de executar os testes da Trybe, seus testes não devem conter erros.

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

  - **[Será validado que a cobertura total das linhas dos arquivos de CADA camada `models`, `services` e `controllers` é maior ou igual a 15%. Ou seja, cada uma das camadas tem de ter, ao menos, 15% de cobertura de testes.]**
  
   - **[Será validado que existe um mínimo de 4 funções em CADA camada `models`, `services` e `controllers`.]**

  <br>
</details>

---

## 08 - Crie endpoints para listar vendas

- O endpoint para listar vendas deve ser acessível através do caminho (`/sales`) e (`/sales/:id`);
- Através do caminho `/sales`, todas as vendas devem ser retornadas;
- Através do caminho `/sales/:id`, apenas a venda com o `id` presente na URL deve ser retornada;
- o resultado deve ser **ordernado** de forma crescente pelo campo `saleId`, em caso de empate, **ordernar** também de forma crescente pelo campo `productId`;

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

  - **[Será validado que é possível listar todas as vendas]**
    - Ao listar vendas com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:
    ```json
      [
        {
          "saleId": 1,
          "date": "2021-09-09T04:54:29.000Z",
          "productId": 1,
          "quantity": 2
        },
        {
          "saleId": 1,
          "date": "2021-09-09T04:54:54.000Z",
          "productId": 2,
          "quantity": 2
        }

        /* ... */
      ]
    ```
  
  - **[Será validado que não é possível listar uma venda que não existe]**
    - Se a venda for inexistente o resultado retornado deverá ser conforme exibido abaixo, com um status http `404`:
    ```json
      { "message": "Sale not found" }
    ```

  - **[Será validado que é possível listar uma venda específica com sucesso]**
    - Ao listar uma venda com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:
    ```json
      [
        {
          "date": "2021-09-09T04:54:29.000Z",
          "productId": 1,
          "quantity": 2
        },
        {
          "date": "2021-09-09T04:54:54.000Z",
          "productId": 2,
          "quantity": 2
        }

        /* ... */
      ]
    ```

  <br>
</details>

---

## 09- Desenvolva testes que cubram no mínimo 20% das camadas da sua aplicação

- Seus arquivos de teste devem ficar no diretório `tests/unit`, como é descrito em [Para escrever seus próprios arquivos de teste](#para-escrever-seus-própios-arquivos-de-teste);
- Seus testes da `model` devem fazer mock do banco de dados obrigatóriamente;
- Opcionalmente você pode parar o serviço do `MYSQL` em sua máquina. Para rodar seus teste utilize `npm run test:mocha`;
- Antes de executar os testes da Trybe, seus testes não devem conter erros.

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

  - **[Será validado que a cobertura total das linhas dos arquivos de CADA camada `models`, `services` e `controllers` é maior ou igual a 20%. Ou seja, cada uma das camadas tem de ter, ao menos, 20% de cobertura de testes.]**
  
   - **[Será validado que existe um mínimo de 6 funções em CADA camada `models`, `services` e `controllers`.]**

  <br>
</details>

---

## 10 - Crie endpoint para atualizar um produto

- O endpoint deve ser acessível através do caminho (`/products/:id`);
- Apenas o produto com o `id` presente na URL deve ser atualizado;
- O corpo da requisição deve ser validado igual no cadastro;
- O corpo da requisição deverá seguir o formato abaixo:
```json
  {
    "name": "Martelo do Batman"
  }
```

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>
  
  - **[Será validado que não é possível alterar um produto que não existe]**
    - Se o produto for inexistente o resultado retornado deverá ser conforme exibido abaixo, com um status http `404`:
    ```json
      { "message": "Product not found" }
    ```

  - **[Será validado que é possível alterar um produto com sucesso]**
    - Se o produto for alterado com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:
    ```json
      {
        "id": 1,
        "name": "Martelo do Batman"
      }
    ```

  <br>
</details>

---

## 11 - Desenvolva testes que cubram no mínimo 25% das camadas da sua aplicação

- Seus arquivos de teste devem ficar no diretório `tests/unit`, como é descrito em [Para escrever seus próprios arquivos de teste](#para-escrever-seus-própios-arquivos-de-teste);
- Seus testes da `model` devem fazer mock do banco de dados obrigatóriamente;
- Opcionalmente você pode parar o serviço do `MYSQL` em sua máquina. Para rodar seus teste utilize `npm run test:mocha`;
- Antes de executar os testes da Trybe, seus testes não devem conter erros.

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

  - **[Será validado que a cobertura total das linhas dos arquivos de CADA camada `models`, `services` e `controllers` é maior ou igual a 25%. Ou seja, cada uma das camadas tem de ter, ao menos, 25% de cobertura de testes.]**
  
   - **[Será validado que existe um mínimo de 7 funções em CADA camada `models`, `services` e `controllers`.]**

  <br>
</details>

---

## 12 - Crie endpoint para deletar um produto

- O endpoint deve ser acessível através do caminho (`/products/:id`);
- Apenas o produto com o `id` presente na URL deve ser deletado;

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>
  
  - **[Será validado que não é possível deletar um produto que não existe]**
    - Se o produto for inexistente o resultado retornado deverá ser conforme exibido abaixo, com um status http `404`:
    ```json
      { "message": "Product not found" }
    ```

  - **[Será validado que é possível deletar um produto com sucesso]**
    - Se o produto for deletado com sucesso não deve ser retornada nenhuma resposta, apenas um status http `204`;

  <br>
</details>

> 💬 Em caso de dúvidas, lembre-se de consultar a seção [Diagrama ER, Entidades e Scripts](#diagrama-scripts)

---

# Requisitos Bônus

## 13 - Desenvolva testes que cubram no mínimo 30% das camadas da sua aplicação

- Seus arquivos de teste devem ficar no diretório `tests/unit`, como é descrito em [Para escrever seus próprios arquivos de teste](#para-escrever-seus-própios-arquivos-de-teste);
- Seus testes da `model` devem fazer mock do banco de dados obrigatóriamente;
- Opcionalmente você pode parar o serviço do `MYSQL` em sua máquina. Para rodar seus teste utilize `npm run test:mocha`;
- Antes de executar os testes da Trybe, seus testes não devem conter erros.

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

  - **[Será validado que a cobertura total das linhas dos arquivos de CADA camada `models`, `services` e `controllers` é maior ou igual a 30%. Ou seja, cada uma das camadas tem de ter, ao menos, 30% de cobertura de testes.]**
  
   - **[Será validado que existe um mínimo de 8 funções em CADA camada `models`, `services` e `controllers`.]**
  
  <br>
</details>

---

## 14 - Crie endpoint para deletar uma venda

- O endpoint deve ser acessível através do caminho (`/sales/:id`);
- Apenas a venda com o `id` presente na URL deve ser deletada;

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>
  
  - **[Será validado que não é possível deletar uma venda que não existe]**
    - Se a venda for inexistente o resultado retornado deverá ser conforme exibido abaixo, com um status http `404`:
    ```json
      { "message": "Sale not found" }
    ```

  - **[Será validado que é possível deletar uma venda com sucesso]**
    - Se a venda for deletada com sucesso não deve ser retornada nenhuma resposta, apenas um status http `204`;

  <br>
</details>

---

## 15 - Desenvolva testes que cubram no mínimo 35% das camadas da sua aplicação

- Seus arquivos de teste devem ficar no diretório `tests/unit`, como é descrito em [Para escrever seus próprios arquivos de teste](#para-escrever-seus-própios-arquivos-de-teste);
- Seus testes da `model` devem fazer mock do banco de dados obrigatóriamente;
- Opcionalmente você pode parar o serviço do `MYSQL` em sua máquina. Para rodar seus teste utilize `npm run test:mocha`;
- Antes de executar os testes da Trybe, seus testes não devem conter erros.

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

  - **[Será validado que a cobertura total das linhas dos arquivos de CADA camada `models`, `services` e `controllers` é maior ou igual a 35%. Ou seja, cada uma das camadas tem de ter, ao menos, 35% de cobertura de testes.]**
  
   - **[Será validado que existe um mínimo de 9 funções em CADA camada `models`, `services` e `controllers`.]**

  <br>
</details>

---

## 16 - Crie endpoint para atualizar uma venda

- O endpoint deve ser acessível através do caminho (`/sales/:id`);
- Apenas a venda com o `id` presente na URL deve ser atualizada;
- O corpo da requisição deve ser validado igual no cadastro;
- O corpo da requisição deverá seguir o formato abaixo:

```json
[
  {
    "productId": 1,
    "quantity": 1
  },
  { "productId": 2,
    "quantity": 5
  }
]
```

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>
  
  - **[Será validado que não é possível alterar uma venda que não existe]**
  
    - Se a venda for inexistente o resultado retornado deverá ser conforme exibido abaixo, com um status http `404`:
  
    ```json
      { "message": "Sale not found" }
    ```

  - **[Será validado que é possível alterar uma venda com sucesso]**
  
    - Se a venda for alterada com sucesso não deve ser retornada nenhuma resposta, apenas um status http `200` :
  
    ```json
        "saleId": 1,
        "itemsUpdated": [
          {
            "productId": 1,
            "quantity": 10
          },
          {
            "productId": 2,
            "quantity": 50
          }
        ]
    ```

  <br>
</details>

---

## 17 - Desenvolva testes que cubram no mínimo 40% das camadas da sua aplicação

- Seus arquivos de teste devem ficar no diretório `tests/unit`, como é descrito em [Para escrever seus próprios arquivos de teste](#para-escrever-seus-própios-arquivos-de-teste);
- Seus testes da `model` devem fazer mock do banco de dados obrigatóriamente;
- Opcionalmente você pode parar o serviço do `MYSQL` em sua máquina. Para rodar seus teste utilize `npm run test:mocha`;
- Antes de executar os testes da Trybe, seus testes não devem conter erros.

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

  - **[Será validado que a cobertura total das linhas dos arquivos de CADA camada `models`, `services` e `controllers` é maior ou igual a 40%. Ou seja, cada uma das camadas tem de ter, ao menos, 40% de cobertura de testes.]**
  
   - **[Será validado que existe um mínimo de 10 funções em CADA camada `models`, `services` e `controllers`.]**

  <br>
</details>

---

## 18 - Crie endpoint products/search?q=searchTerm

- O endpoint deve ser acessível através da URL (`products/search`);
- O endpoint deve ser capaz de trazer os produtos baseados no `q`do banco de dados, se ele existir;
- Sua aplicação deve ser capaz de retornar um array de produtos que contenham em seu nome termo passado na URL;
- Sua aplicação deve ser capaz de retornar um array vazio caso nenhum nome satisfaça a busca;
- O query params da requisição deverá seguir o formato abaixo:

```javascript
    http://localhost:PORT/products/search?q=Martelo
```

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

  - **[Será validado que é possível buscar um produto pelo `name`]**
  
   - Se a busca for feita com sucesso, o resultado retornado deverá ser conforme exibido abaixo, com um status http `200` :
 
```json
  // GET /products/search?q=Martelo
[
  {
    "id": 1,
    "name": "Martelo de Thor"
  }
]
```
   - **[Será validado que é possível buscar todos os produtos quando passa a busca vazia]** - Se a buscar for vazia o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:

```json
  // GET /products/search?q=
[
  {
    "id": 1,
    "name": "Martelo de Thor",
  },
  {
    "id": 2,
    "name": "Traje de encolhimento",
  }
  /* ... */
]
```
 
  <br>
</details>

---


## 19 - Desenvolva testes que cubram no mínimo 50% das camadas da sua aplicação

- Seus arquivos de teste devem ficar no diretório `tests/unit`, como é descrito em [Para escrever seus próprios arquivos de teste](#para-escrever-seus-própios-arquivos-de-teste);
- Seus testes da `model` devem fazer mock do banco de dados obrigatóriamente;
- Opcionalmente você pode parar o serviço do `MYSQL` em sua máquina. Para rodar seus teste utilize `npm run test:mocha`;
- Antes de executar os testes da Trybe, seus testes não devem conter erros.

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

  - **[Será validado que a cobertura total das linhas dos arquivos de CADA camada `models`, `services` e `controllers` é maior ou igual a 50%. Ou seja, cada uma das camadas tem de ter, ao menos, 50% de cobertura de testes.]**
   - **[Será validado que existe um mínimo de 11 funções em CADA camada `models`, `services` e `controllers`.]**

  <br>
</details>

---

## 20 - Desenvolva testes que cubram no mínimo 60% das camadas da sua aplicação

- Seus arquivos de teste devem ficar no diretório `tests/unit`, como é descrito em [Para escrever seus próprios arquivos de teste](#para-escrever-seus-própios-arquivos-de-teste);
- Seus testes da `model` devem fazer mock do banco de dados obrigatóriamente;
- Opcionalmente você pode parar o serviço do `MYSQL` em sua máquina. Para rodar seus teste utilize `npm run test:mocha`;
- Antes de executar os testes da Trybe, seus testes não devem conter erros.

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

  - **[Será validado que a cobertura total das linhas dos arquivos de CADA camada `models`, `services` e `controllers` é maior ou igual a 60%. Ou seja, cada uma das camadas tem de ter, ao menos, 60% de cobertura de testes.]**
   - **[Será validado que existe um mínimo de 11 funções em CADA camada `models`, `services` e `controllers`.]**

  <br>
</details>

---
 
