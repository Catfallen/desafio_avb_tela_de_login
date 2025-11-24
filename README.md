# **Desafio AVB — Sistema de Autenticação**

Sistema de autenticação completo com login, cadastro, logout e rotas privadas protegidas com JWT.  
O projeto utiliza cookies HTTP-only para segurança e segue boas práticas de arquitetura com separação clara entre rotas, controladores e serviços.

---

## 🚀 **Tecnologias Utilizadas**

### **Back-end**
- **TypeScript**
- **Node.js + Express**
- **MongoDB**
- **Mongoose (ODM)**

### **Front-end**
- **HTML**
- **CSS**
- **JavaScript (Vanilla)**  
→ Os arquivos do front-end ficam em: `src/public/`

---

## 🔐 **Funcionalidades**

- Cadastro de usuário  
- Login  
- Logout  
- Rotas privadas protegidas com token  
- Cookies **HTTP-only** para armazenar o JWT  
- Criptografia de senhas com bcrypt

---

## 🛡️ **Segurança Implementada**

- Senhas armazenadas usando **hash com bcrypt**
- JWT gerado com **jsonwebtoken**
- Token enviado em cookie **HTTP-only**, mais seguro que:
  - `localStorage`
  - `sessionStorage`

Isso evita que scripts maliciosos acessem o token via JavaScript, reduzindo riscos de XSS.

---

## ✔️ **Fluxo de Autenticação**

1. Usuário envia email + senha  
2. Backend valida credenciais  
3. Um **JWT** é gerado  
4. O token é enviado ao cliente via **cookie HTTP-only**  
5. Rotas privadas verificam o token antes de permitir acesso  

---


