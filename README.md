# 🐂 AgroConnect - Fazenda Peixe-Boi

Plataforma web para gestão e venda de animais (bovinos, equinos, ovinos, caprinos).

## 🚀 Stack Tecnológica

- **Frontend**: React 18 + Vite + Tailwind CSS
- **Backend**: Express + TypeScript
- **Database**: PostgreSQL (Neon Database)
- **ORM**: Drizzle
- **Deploy**: Vercel

## 📦 Estrutura do Projeto

```
├── client/          # Frontend React
│   └── src/
│       ├── pages/   # Páginas da aplicação
│       └── components/
├── server/          # Backend Express
│   ├── index.ts     # Servidor principal
│   └── routes.ts    # Rotas da API
├── shared/          # Código compartilhado
│   └── schema.ts    # Schema do banco de dados
└── package.json
```

## 🗄️ Schema do Banco de Dados

### Tabela: animals
- Informações sobre animais (bovinos, equinos, ovinos, caprinos)
- Campos: nome, categoria, raça, idade, sexo, peso, preço, descrição, imagem

### Tabela: contacts
- Formulário de contato do site
- Campos: nome, email, telefone, interesse, mensagem

## ⚙️ Configuração Local

1. **Instalar dependências** (já feito ✅)
```bash
npm install
```

2. **Configurar variáveis de ambiente**

Crie um arquivo `.env` na raiz com:
```env
DATABASE_URL=sua_url_do_neon_aqui
PORT=5000
NODE_ENV=development
```

3. **Sincronizar schema do banco**
```bash
npm run db:push
```

4. **Rodar em desenvolvimento**
```bash
npm run dev
```

O site estará em: http://localhost:5000

## 🌐 Deploy na Vercel

### Configuração recomendada:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Development Command**: `npm run dev`

### Variáveis de Ambiente necessárias:
```
DATABASE_URL=sua_url_do_neon_database
PORT=5000
NODE_ENV=production
```

## 📝 Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build de produção
- `npm run start` - Rodar produção
- `npm run check` - Type checking
- `npm run db:push` - Sincronizar schema do banco

## 🔧 Próximos Passos

Veja o arquivo `DEPLOY_GUIDE.md` para instruções detalhadas de deploy.
