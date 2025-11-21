@echo off
echo ========================================
echo SETUP DO PROJETO AGROCONNECT
echo ========================================
echo.

echo [1/3] Configurando Git...
echo Digite seu nome:
set /p GIT_NAME="Nome: "
echo Digite seu email:
set /p GIT_EMAIL="Email: "

git config --global user.name "%GIT_NAME%"
git config --global user.email "%GIT_EMAIL%"

echo.
echo [2/3] Fazendo commit inicial...
cd "C:\Users\GOLDENTEC\OneDrive\Área de Trabalho\Projetos Claude\Site Fazenda PeixeBoi\AgroConnect"
git add .
git commit -m "🚀 Initial commit: AgroConnect - Fazenda Peixe-Boi"

echo.
echo [3/3] Configuracao concluida!
echo.
echo ========================================
echo PROXIMOS PASSOS:
echo ========================================
echo.
echo 1. Criar banco de dados no Neon:
echo    https://console.neon.tech/
echo.
echo 2. Criar repositorio no GitHub:
echo    https://github.com/new
echo.
echo 3. Conectar ao GitHub (substitua SEU_USUARIO):
echo    git remote add origin https://github.com/SEU_USUARIO/fazenda-peixe-boi-agroconnect.git
echo    git push -u origin main
echo.
echo 4. Deploy na Vercel:
echo    https://vercel.com/new
echo.
echo Leia o arquivo DEPLOY_GUIDE.md para instruções detalhadas!
echo.
pause
