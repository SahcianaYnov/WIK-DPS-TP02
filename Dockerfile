# Étape 1: Utiliser une image de base avec Node.js
FROM node:16-alpine

# Étape 2: Répertoire
WORKDIR /app

# Étape 3: Copier les fichiers
COPY package*.json ./

# Étape 4: Installer les dépendances
RUN npm install --production

# Étape 5: Copier
COPY . .

# Étape 6: Exposer le port
EXPOSE 3000

# Étape 7: Lancer
CMD ["node", "index.js"]