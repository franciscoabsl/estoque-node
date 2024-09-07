# Use a imagem oficial do Node.js como imagem base
FROM node:18

# Define o diretório de trabalho
WORKDIR /src/app

# Copie o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos do projeto
COPY . .

# Compile o código TypeScript (se aplicável)
RUN npm run build

# Exponha a porta em que o aplicativo vai rodar
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["node", "dist/app.js"]
