# ⚡ Quick Start - Coloque o Site no Ar em 10 Minutos!

## 🎯 Passo a Passo Rápido

### 1️⃣ Configure o Git (Execute UMA VEZ)

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

**OU** execute o arquivo: `setup-commands.bat`

---

### 2️⃣ Crie o Banco de Dados (2 minutos)

1. Abra: https://console.neon.tech/
2. Login/Cadastro (grátis)
3. **"Create Project"** → Nome: `fazenda-peixe-boi`
4. **COPIE** a **Connection String** (parece com isso):
   ```
   postgresql://usuario:senha@host.neon.tech/neondb
   ```

---

### 3️⃣ Crie o Repositório no GitHub (1 minuto)

1. Abra: https://github.com/new
2. Nome: `fazenda-peixe-boi-agroconnect`
3. **Público** ou Privado (sua escolha)
4. **NÃO** marque "Initialize with README"
5. Clique **"Create repository"**

6. Execute (substituindo SEU_USUARIO):

```bash
cd "C:\Users\GOLDENTEC\OneDrive\Área de Trabalho\Projetos Claude\Site Fazenda PeixeBoi\AgroConnect"
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/SEU_USUARIO/fazenda-peixe-boi-agroconnect.git
git push -u origin main
```

---

### 4️⃣ Deploy na Vercel (3 minutos)

1. Abra: https://vercel.com/
2. **Login com GitHub**
3. **"Add New Project"**
4. Importe: `fazenda-peixe-boi-agroconnect`
5. Configure:
   - Framework: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. **Environment Variables** → Adicione:
   ```
   DATABASE_URL = cole_a_connection_string_do_neon_aqui
   PORT = 5000
   NODE_ENV = production
   ```
7. **Deploy**! 🚀

---

## ✅ PRONTO! Seu site está no ar!

URL: `https://fazenda-peixe-boi-agroconnect.vercel.app`

---

## 🧪 Testar Localmente (Opcional)

1. Crie arquivo `.env`:
```env
DATABASE_URL=sua_connection_string_do_neon
PORT=5000
NODE_ENV=development
```

2. Rode:
```bash
npm run db:push
npm run dev
```

3. Abra: http://localhost:5000

---

## 📞 Precisa de Ajuda?

- Veja `DEPLOY_GUIDE.md` para instruções detalhadas
- Ou me chame que eu te ajudo! 😊
