# Event Link Rank
## 📝 Descrição

Event Link Rank é um projeto desenvolvido durante o NLW da RocketSeat que permite aos usuários enviar links de convite para outras pessoas. No final do período estipulado, o ranking mostra quais usuários tiveram o maior número de cliques e logins através de seus links.

## 🛠️ Tecnologias Utilizadas
- Back-end: Node.js, Fastify, Zod, Swagger
- Banco de Dados:
   - PostgreSQL: Para armazenamento de usuários
   - Redis: Para armazenamento de cliques
   - Drizzle ORM: Para interação com o PostgreSQL de forma segura e tipada
 
## 🛠️ Pré-requisitos
Antes de instalar e executar o projeto, certifique-se de que você tem:
- Node.js instalado
- Docker e Docker Compose instalados

## 📂 Instalação do Node.js

Se ainda não tem o Node.js instalado, baixe e instale a versão mais recente: [Instalar NodeJs](https://nodejs.org/pt)

## 🚀 Instalação do Projeto

1. Clone o repositório:

```bash
git clone https://github.com/seuusuario/event-link-rank
cd event-link-rank
```
2. Instale as dependências:
```bash
npm install
```
3. Crie suas variáveis de ambiente:
- Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

```bash
PORT=3333
WEB_URL="http://localhost:3000"
POSTGRES_URL="postgresql://<usuario>:<senha>@<host>:<porta>/<nome_do_banco>"
REDIS_URL="redis://localhost:6379"
```
## 📄 Banco de Dados (PostgreSQL e Redis)

1. Suba os contêiners Docker:
```bash
docker-compose up -d
```
2. Verifique se os contêineres estão rodando:
```bash
docker ps
```
## 📅 Executando o Projeto
- Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

## 🔧 Testando a API
A documentação Swagger estará disponível no endpoint `/docs` Ex: http://localhost:3000/docs

## 📋 Estrutura do Banco de Dados
- PostgreSQL:
  - Shema `Subscriptions`
    - id
    - name
    - email
    - created-at
- Redis:
  - Key-Value para armazenar o número de cliques por link

## 🎡 Ranking

O ranking é gerado com base no número de cliques que resultaram em um login bem-sucedido.
