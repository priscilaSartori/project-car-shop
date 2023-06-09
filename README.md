<h1 align="center">Project Car Shop</h1>

## Descrição do Projeto
<p align="center">

Desenvolvimento de uma API com CRUD para gerenciar uma concessionária de veículos, aplicando os princípios de Programação Orientada a Objetos (POO) e usando o banco de dados MongoDB através do framework do Mongoose.
<br />

Habilidades desenvolvidas
  - API orientada a objetos
  - NoSQL
</p>

<hr>

<div align="center">
<img src="https://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge"/>
<img src="https://img.shields.io/badge/POO-F7DF1E?style=for-the-badge&logo=POO&logoColor=black"/>
<img src="https://img.shields.io/badge/MongoDB-F7DF1E?style=for-the-badge&logo=MongoDB&logoColor=black"/>
<img src="https://img.shields.io/badge/Mongoose-F7DF1E?style=for-the-badge&logo=Mongoose&logoColor=black"/>
  
</div>

<br />

## Requisitos Obrigatórios

### 01 - Crie a rota /cars onde seja possível cadastrar um carro

- O endpoint deve ser acessível através do caminho (`/cars`);

- Os carros cadastrados devem ser salvos na collection `cars` do banco de dados;

- Os nomes dos arquivos/classes/interfaces devem ser definidos em inglês e seguir a organização/padronização de diretórios e nomenclatura ensinadas na seção;

- Os nomes das classes devem possuir os mesmos nomes dos arquivos; (ex: `Pet.ts` ---> `export default class Pet { }`);

- Os atributos necessários para criar um carro estão na tabela:

| Atributos | Descrição |
| :-------: | :-------- |
| `id`   | _String_ contendo id do veículo |
| `model`   | _String_ contendo modelo do veículo |
| `year`    | _Number_ contendo ano de fabricação do veículo |
| `color`   | _String_ contendo cor principal do veículo |
| `status`  | _Booleano_ contendo status que define se um veículo pode ou não ser comprado _(este atributo deve ser opcional e se não passado, deve ser `false`)_ |
| `buyValue` | _Number_ contendo valor de compra do veículo |
| `doorsQty` | _Number_ contendo quantidade de portas de um carro |
| `seatsQty` | _Number_ contendo quantidade de assentos de um carro |

- O corpo da requisição poderá seguir o formato abaixo:

```json
{
  "model": "Marea",
  "year": 2002,
  "color": "Black",
  "status": true,
  "buyValue": 15.990,
  "doorsQty": 4,
  "seatsQty": 5
}
```

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

  - Será validado que existe uma *interface* de nome `ICar` que representa o contrato usado para cadastrar um carro;
  - Será validado que a *interface* contém os atributos especificados na tabela;
  - Será validado que existe uma *classe* de domínio com o nome `Car` que representa o objeto carro;
  - Será validado que a *classe* de domínio carro contém os atributos: `doorsQty` e `seatsQty` acessíveis apenas a própria classe;
  - Será validado que a *classe* de domínio carro contém os atributos restantes acessíveis a própria classe e suas subclasses;
  - Será validado que a instância da *classe* de domínio carro recebe como parâmetro um objeto do tipo `ICar`;
  - Será validado que é possível cadastrar um carro com sucesso;
    - Deve-se retornar um JSON com as seguintes chaves:
    ```json
      {
        "id": "6348513f34c397abcad040b2",
        "model": "Marea",
        "year": 2002,
        "color": "Black",
        "status": true,
        "buyValue": 15.990,
        "doorsQty": 4,
        "seatsQty": 5
      }
    ```

  <br>
</details>

**⚠️ Atenção**, para o requisito ser avaliado corretamente:
 - A instância de um objeto de domínio deve receber um objeto como parâmetro;
 - As exportações devem ser feitas no formato `export default`;

---

### 02 - Crie o endpoint para listar carros

- O endpoint deve ser acessível através do caminho (`/cars`) e (`/cars/:id`);

- Os carros listados devem vir da collection `cars` do banco de dados;

- Através do caminho `/cars/:id`, apenas o carro com o `id` presente na URL deve ser retornado;

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

  - Será validado que é possível listar todos os carros;
    - Deve-se retornar um JSON com as seguintes chaves: 
      ```json
        [
          {
            "id": "634852326b35b59438fbea2f",
            "model": "Marea",
            "year": 2002,
            "color": "Black",
            "status": true,
            "buyValue": 15.99,
            "doorsQty": 4,
            "seatsQty": 5
          },
          {
            "id": "634852326b35b59438fbea31",
            "model": "Tempra",
            "year": 1995,
            "color": "Black",
            "buyValue": 39,
            "doorsQty": 2,
            "seatsQty": 5
          }
        ]
      ```
  - Será validado que não é possível listar um carro que não existe;
    - Deve-se retornar o `status 404` e um JSON com a seguinte mensagem: 
      ```json
        { "message": "Car not found" }
      ```
  - Será validado que não é possível listar um carro quando o formato do `id` esta inválido;
    - Deve-se retornar o `status 422` e um JSON com a seguinte mensagem: 
      ```json
        { "message": "Invalid mongo id" }
      ```
  - Será validado que é possível listar um carro específico com sucesso;
    - Deve-se retornar um JSON com as seguintes chaves: 
      ```json
        {
          "id": "634852326b35b59438fbea2f",
          "model": "Marea",
          "year": 2002,
          "color": "Black",
          "status": true,
          "buyValue": 15.99,
          "doorsQty": 4,
          "seatsQty": 5
        }
      ```
  <br>
</details>

---

### 03 - Escreva testes para cobrir 30% da camada de Service

- Obrigatoriamente seus arquivos de teste devem ficar no diretório `tests/unit`;

- Obrigatoriamente seus testes devem fazer stub do banco de dados;

- Opcionalmente você pode parar o serviço do `MongoDB` em sua máquina e executar seus teste com o comando `npm run test:mocha`;

- Só será contabilizada a cobertura, se seus testes não conterem erros.

<details open>
  <summary>Os seguintes pontos serão avaliados</summary>

  - Será validado que os testes escritos por você estão sendo executados sem erros;
  - Será validado que existe um mínimo de 3 funções na camada `Services`.
  - Será validado que a cobertura total das linhas dos arquivos da camada `Services` é maior ou igual a 30%;

  <br>
</details>

---

### 04 - Crie a rota /cars/:id onde seja possível atualizar um carro por ID

- O endpoint deve ser acessível através do caminho (`/cars/:id`);

- Apenas o carro com o `id` presente na URL deve ser atualizado;

- O corpo da requisição poderá seguir o formato abaixo:
```json
{
  "model": "Marea",
  "year": 1992,
  "color": "Red",
  "status": true,
  "buyValue": 12.000,
  "doorsQty": 2,
  "seatsQty": 5
}
```

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

  - Será validado que não é possível alterar um carro que não existe;
    - Deve-se retornar o `status 404` e um JSON com a seguinte mensagem: 
      ```json
        { "message": "Car not found" }
      ```
  - Será validado que não é possível alterar um carro quando o formato do `id` esta inválido;
    - Deve-se retornar o `status 422` e um JSON com a seguinte mensagem: 
      ```json
        { "message": "Invalid mongo id" }
      ```
  - Será validado que é possível alterar um carro com sucesso;
    - Deve-se retornar um JSON com as seguintes chaves: 
    ```json
      {
        "id": "634852326b35b59438fbea2f",
        "model": "Marea",
        "year": 1992,
        "color": "Red",
        "status": true,
        "buyValue": 12.000,
        "doorsQty": 2,
        "seatsQty": 5
      }
    ```

  <br>
</details>

---

### 05 - Crie a rota /motorcycles onde seja possível cadastrar uma moto

- O endpoint deve ser acessível através do caminho (`/motorcycles`);

- As motos cadastradas devem ser salvas na collection `motorcycles` do banco de dados;

- Os nomes dos arquivos/classes/interfaces devem ser definidos em inglês e seguir a organização/padronização de diretórios e nomenclatura ensinadas na seção;

- Os nomes das classes devem possuir os mesmos nomes dos arquivos; (ex: `Pet.ts` ---> `export default class Pet { }`);

- *Interface* e *classe de domínio* referentes a carro, obrigatoriamente devem ser refatorados;

- Os atributos necessários para criar uma moto estão na tabela:

| Atributos | Descrição |
| :-------: | :-------- |
| `id`   | _String_ contendo id do veículo |
| `model`   | _String_ contendo modelo do veículo |
| `year`    | _Number_ contendo ano de fabricação do veículo |
| `color`   | _String_ contendo cor principal do veículo |
| `status`  | _Booleano_ contendo status que define se um veículo pode ou não ser comprado _(este atributo deve ser opcional e se não passado, deve ser `false`)_ |
| `buyValue` | _Number_ contendo valor de compra do veículo |
| `category` | _String_ contendo categoria da moto _(opções: `Street`, `Custom` ou `Trail`)_ |
| `engineCapacity` | _Number_ contendo capacidade do motor |

- O corpo da requisição poderá seguir o formato abaixo:
```json
{
  "model": "Honda Cb 600f Hornet",
  "year": 2005,
  "color": "Yellow",
  "status": true,
  "buyValue": 30.000,
  "category": "Street",
  "engineCapacity": 600
}
```

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

  - Será validado que existe uma *interface* de nome `IMotorcycle` que representa o contrato usado para cadastrar uma moto;
  - Será validado que a *interface* contém os atributos especificados na tabela;
  - Será validado que existe uma *interface* de nome `IVehicle` e esta contém os atributos repetidos de carro e moto;
    - _Deve-se refatorar as `Interfaces` se necessário;_
  - Será validado que existe uma *classe* de domínio com o nome `Motorcycle` que representa o objeto moto;
  - Será validado que a *classe* de domínio moto contém os atributos: `category` e `engineCapacity` acessíveis apenas a própria classe;
  - Será validado que a *classe* de domínio moto contém os atributos restantes acessíveis a própria classe e suas subclasses;
  - Será validado que a instância da *classe* de domínio moto recebe como parâmetro um objeto do tipo `IMotorcycle`;
  - Será validado que existe uma *classe* de domínio com o nome `Vehicle` e esta contém os atributos repetidos de carro e moto;
    - _Deve-se refatorar as `Domains` se necessário;_
  - Será validado que a *classe* de domínio veiculo contém os atributos acessíveis a própria classe e suas subclasses;
  - Será validado que existe uma *classe* de nome `AbstractODM` que representa o modelo de comunicação com o banco e ela serve como abstração para as demais;
    - _Deve-se refatorar as `Models` se necessário;_
  - Será validado que é possível cadastrar uma moto com sucesso;
    - Deve-se retornar um JSON com as seguintes chaves:
    ```json
      {
        "id": "6348513f34c397abcad040b2",
        "model": "Honda Cb 600f Hornet",
        "year": 2005,
        "color": "Yellow",
        "status": true,
        "buyValue": 30.000,
        "category": "Street",
        "engineCapacity": 600
      }
    ```

  <br>
</details>

**⚠️ Atenção**, para o requisito ser avaliado corretamente:
 - A instância de um objeto de domínio deve receber um objeto como parâmetro;
 - As exportações devem ser feitas no formato `export default`;
 - Arquivos/códigos feitos para *cars* ~devem~ podem sofrer refatorações;

---

### 06 - Escreva testes para cobrir 60% da camada de Service

- Obrigatoriamente seus arquivos de teste devem ficar no diretório `tests/unit`;

- Obrigatoriamente seus testes devem fazer stub do banco de dados;

- Opcionalmente você pode parar o serviço do `MongoDB` em sua máquina e executar seus teste com o comando `npm run test:mocha`;

- Só será contabilizada a cobertura, se seus testes não conterem erros.

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

  - Será validado que os testes escritos por você estão sendo executados sem erros;
  - Será validado que existe um mínimo de 5 funções na camada `Services`.
  - Será validado que a cobertura total das linhas dos arquivos da camada `Services` é maior ou igual a 60%;

  <br>
</details>

---

### 07 - Crie a rota /motorcycles onde seja possível listar motos

- O endpoint deve ser acessível através do caminho (`/motorcycles`) e (`/motorcycles/:id`);

- As motos listadas devem vir da collection `motorcycles` do banco de dados;

- Através do caminho `/motorcycles/:id`, apenas a moto com o `id` presente na URL deve ser retornada;

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

  - Será validado que é possível listar todas as motos;
    - Deve-se retornar um JSON com as seguintes chaves: 
      ```json
        [
          {
            "id": "634852326b35b59438fbea2f",
            "model": "Honda Cb 600f Hornet",
            "year": 2005,
            "color": "Yellow",
            "status": true,
            "buyValue": 30.000,
            "category": "Street",
            "engineCapacity": 600
          },
          {
            "id": "634852326b35b59438fbea31",
            "model": "Honda Cbr 1000rr",
            "year": 2011,
            "color": "Orange",
            "status": true,
            "buyValue": 59.900,
            "category": "Street",
            "engineCapacity": 1000
          }
        ]
      ```
  - Será validado que não é possível listar uma moto que não existe;
    - Deve-se retornar o `status 404` e um JSON com a seguinte mensagem: 
      ```json
        { "message": "Motorcycle not found" }
      ```
  - Será validado que não é possível listar uma moto quando o formato do `id` esta inválido;
    - Deve-se retornar o `status 422` e um JSON com a seguinte mensagem: 
      ```json
        { "message": "Invalid mongo id" }
      ```
  - Será validado que é possível listar uma moto específica com sucesso;
    - Deve-se retornar um JSON com as seguintes chaves: 
      ```json
        {
          "id": "634852326b35b59438fbea31",
          "model": "Honda Cbr 1000rr",
          "year": 2011,
          "color": "Orange",
          "status": true,
          "buyValue": 59.900,
          "category": "Street",
          "engineCapacity": 1000
        }
      ```
  <br>
</details>

---

## Requisitos Bônus

### 08 - Crie a rota /motorcycles/:id onde seja possível atualizar uma moto por ID

- O endpoint deve ser acessível através do caminho (`/motorcycles/:id`);

- Apenas a moto com o `id` presente na URL deve ser atualizada;

- O corpo da requisição poderá seguir o formato abaixo:

```json
{
  "model": "Honda Cb 600f Hornet",
  "year": 2014,
  "color": "Red",
  "status": true,
  "buyValue": 45.000,
  "category": "Street",
  "engineCapacity": 600
}
```

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

  - Será validado que não é possível alterar uma moto que não existe;
    - Deve-se retornar o `status 404` e um JSON com a seguinte mensagem: 
      ```json
        { "message": "Motorcycle not found" }
      ```
  - Será validado que não é possível alterar uma moto quando o formato do `id` esta inválido;
    - Deve-se retornar o `status 422` e um JSON com a seguinte mensagem: 
      ```json
        { "message": "Invalid mongo id" }
      ```
  - Será validado que é possível alterar uma moto com sucesso;
    - Deve-se retornar um JSON com as seguintes chaves: 
    ```json
      {
        "id": "634852326b35b59438fbea2f",
        "model": "Honda Cb 600f Hornet",
        "year": 2014,
        "color": "Red",
        "status": true,
        "buyValue": 45.000,
        "category": "Street",
        "engineCapacity": 600
      }
    ```

  <br>
</details>

---

### 09 - Escreva testes para cobrir 80% da camada de Service

- Obrigatoriamente seus arquivos de teste devem ficar no diretório `tests/unit`;

- Obrigatoriamente seus testes devem fazer stub do banco de dados;

- Opcionalmente você pode parar o serviço do `MongoDB` em sua máquina e executar seus teste com o comando `npm run test:mocha`;

- Só será contabilizada a cobertura, se seus testes não conterem erros.

<details open>
  <summary>Os seguintes pontos serão avaliados</summary>

  - Será validado que os testes escritos por você estão sendo executados sem erros;
  - Será validado que existe um mínimo de 8 funções na camada `Services`.
  - Será validado que a cobertura total das linhas dos arquivos da camada `Services` é maior ou igual a 80%;

  <br>
</details>

---

## Requisitos não avaliativos

### 10 - Crie a rota /cars/:id onde seja possível excluir um carro por ID

- O endpoint pode ser acessível através do caminho (`/cars/:id`);

- Através do caminho `/cars/:id`, apenas o carro com o `id` presente na URL deve ser excluído;

<details close>

  - Não é possível excluir um carro que não existe;
    - Retorne `status 404` e um JSON com a mensagem: 
      ```json
        { "message": "Car not found" }
      ```
  - Não é possível excluir um carro quando o formato do `id` esta inválido;
    - Retorne `status 422` e um JSON com a mensagem: 
      ```json
        { "message": "Invalid mongo id" }
      ```
  - Ao excluir com sucesso, retorne `status 204` sem body;

  <br>
</details>

---

### 11 - Crie a rota /motorcycles/:id onde seja possível excluir uma moto por ID

- O endpoint pode ser acessível através do caminho (`/motorcycles/:id`);

- Através do caminho `/motorcycles/:id`, apenas a moto com o `id` presente na URL deve ser excluída;

<details close>

  - Não é possível excluir uma moto que não existe;
    - Retorne `status 404` e um JSON com a mensagem: 
      ```json
        { "message": "Motorcycle not found" }
      ```
  - Não é possível excluir uma moto quando o formato do `id` esta inválido;
    - Retorne `status 422` e um JSON com a mensagem: 
      ```json
        { "message": "Invalid mongo id" }
      ```
  - Ao excluir com sucesso, retorne `status 204` sem body;
  <br>
</details>

---

### 12 - Escreva testes de unidade para cobrir 100% da sua aplicação

- Escreva testes para as camadas de `Models`, `Services` e `Controllers` de forma a cobrir 100% das camadas de sua aplicação;

- Se quiser se desafiar, escreva testes de integração também;

- **✨ Dica:** Utilize o comando `npm run test:coverage` para verificar a cobertura de seus testes;

- **✨ Dica:** Não se esqueça que seus arquivos de testes devem ficar no diretório `tests/unit`, ou `tests/integration`;

- **✨ Dica:** Não se esqueça que seus testes devem fazer stub do banco de dados, quando escritos a nível de unidade.
