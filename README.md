Desafio AVB — Sistema de Autenticação

Sistema de autenticação completo com login, cadastro, logout e rotas privadas protegidas com JWT. O projeto utiliza cookies HTTP-only para segurança e segue boas práticas de arquitetura com separação clara entre rotas, controladores e serviços.

🚀 Tecnologias Utilizadas
Back-end

TypeScript

Node.js + Express

MongoDB

Mongoose (ODM)

Front-end

HTML

CSS

JavaScript (Vanilla)
→ Os arquivos do front-end ficam em: src/public/

🔐 Funcionalidades

Cadastro de usuário

Login

Logout

Rotas privadas com verificação de token

Cookies HTTP-only para armazenar o JWT

Senhas criptografadas (bcrypt)

🛡️ Segurança Implementada

Senhas armazenadas com hash (bcrypt)

JWT gerado com jsonwebtoken

Token enviado em cookie HTTP-only, mais seguro que:

localStorage

sessionStorage

Isso evita que scripts maliciosos acessem o token via JavaScript, reduzindo riscos de XSS.

📁 Estrutura do Projeto

Abaixo está a estrutura exata baseada no seu diretório:

backend_mongodb/
│
├── dist/                     # Arquivos compilados do TypeScript
├── node_modules/
├── package.json
├── tsconfig.json
│
└── src/
    ├── index.ts              # Ponto de entrada da aplicação
    ├── config/               # Configurações (ex: conexão MongoDB)
    ├── controller/           # Lógica das rotas
    ├── middleware/           # Middlewares (ex: verificação de token)
    ├── models/               # Models (schemas do Mongoose)
    ├── routes/               # Arquivos de rotas
    ├── service/              # Regras de negócio
    ├── utils/                # Funções utilitárias
    ├── @types/               # Tipagens personalizadas
    │
    └── public/               # 🟦 Front-end (HTML, CSS, JS)
        ├── css/
        ├── js/
        ├── images/
        └── páginas HTML (login, cadastro, etc)

✔️ Como funciona o fluxo de autenticação

Usuário envia email + senha

Backend valida credenciais

Gera um JWT

Envia ao cliente via cookie HTTP-only

Rotas privadas verificam o token antes de permitir acesso
