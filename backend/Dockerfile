# Usa imagem leve e oficial do Node.js
FROM node:18-alpine

# Cria diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do projeto
COPY . .

# Expõe a porta (ajuste para a porta usada no seu app)
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "start"]
