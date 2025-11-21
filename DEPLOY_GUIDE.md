# 🚀 Guia Completo de Deploy - AgroConnect

## Passo 1: Criar Banco de Dados no Neon 🗄️

1. Acesse: https://console.neon.tech/
2. Faça login ou crie uma conta (gratuita)
3. Clique em **"Create Project"**
4. Nome do projeto: `fazenda-peixe-boi`
5. Região: escolha a mais próxima (ex: US East)
6. Clique em **"Create Project"**
7. **COPIE a CONNECTION STRING** (vai precisar!)
   - Formato: `postgresql://user:password@host.neon.tech/database`

## Passo 2: Configurar Localmente 💻

1. Na pasta do projeto, crie um arquivo `.env`:

```bash
# Windows (PowerShell)
cd "C:\Users\GOLDENTEC\OneDrive\Área de Trabalho\Projetos Claude\Site Fazenda PeixeBoi\AgroConnect"
notepad .env
```

2. Cole isso no arquivo `.env`:

```env
DATABASE_URL=cole_sua_connection_string_do_neon_aqui
PORT=5000
NODE_ENV=development
```

3. Sincronize o schema do banco:

```bash
npm run db:push
```

4. Teste localmente:

```bash
npm run dev
```

Abra: http://localhost:5000

## Passo 3: Criar Repositório no GitHub 📦

1. Acesse: https://github.com/new
2. Nome do repositório: `fazenda-peixe-boi-agroconnect`
3. Descrição: `Site AgroConnect para Fazenda Peixe-Boi`
4. Deixe **PÚBLICO** (ou privado, como preferir)
5. **NÃO** marque "Initialize with README"
6. Clique em **"Create repository"**

7. No terminal, execute:

```bash
cd "C:\Users\GOLDENTEC\OneDrive\Área de Trabalho\Projetos Claude\Site Fazenda PeixeBoi\AgroConnect"

# Adicionar arquivos
git add .

# Fazer commit
git commit -m "🚀 Initial commit: AgroConnect - Fazenda Peixe-Boi"

# Adicionar remote (SUBSTITUA 'SEU_USUARIO' pelo seu usuário do GitHub)
git remote add origin https://github.com/SEU_USUARIO/fazenda-peixe-boi-agroconnect.git

# Push
git branch -M main
git push -u origin main
```

## Passo 4: Deploy na Vercel 🌐

1. Acesse: https://vercel.com/
2. Faça login com GitHub
3. Clique em **"Add New Project"**
4. Importe o repositório: `fazenda-peixe-boi-agroconnect`
5. Configure:

### Framework Preset
- Selecione: **"Vite"**

### Build Settings
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Environment Variables
Clique em **"Add Environment Variable"** e adicione:

```
DATABASE_URL = cole_sua_connection_string_do_neon
PORT = 5000
NODE_ENV = production
```

6. Clique em **"Deploy"**

## ✅ Pronto! Seu site está no ar!

A Vercel vai gerar uma URL como:
- `https://fazenda-peixe-boi-agroconnect.vercel.app`

### 🎯 Domínio Personalizado (Opcional)

Se quiser usar um domínio próprio (ex: `fazendapeixeboi.com.br`):

1. No painel da Vercel, vá em **"Settings"** > **"Domains"**
2. Adicione seu domínio
3. Siga as instruções para configurar o DNS

---

## 🆘 Problemas Comuns

### Erro: "DATABASE_URL is not defined"
- Verifique se adicionou a variável de ambiente na Vercel
- Vá em Settings > Environment Variables

### Build falhou
- Verifique os logs de build na Vercel
- Certifique-se que `npm run build` funciona localmente

### Banco não conecta
- Verifique se a CONNECTION STRING do Neon está correta
- Certifique-se que tem `?sslmode=require` no final da URL

---

## 📞 Precisa de Ajuda?

Me chame que eu te ajudo em cada passo! 😊
