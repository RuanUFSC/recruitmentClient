# Dockerfile
FROM node:20

# Criar diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependências
COPY package.json package-lock.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código
COPY . .

# Expor a porta do Nuxt.js
EXPOSE 3000

# Comando para iniciar o Nuxt.js
CMD ["npm", "run", "dev"]
