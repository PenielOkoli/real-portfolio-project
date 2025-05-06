# 1. Use Node.js official image
FROM node:18-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package files
COPY package.json ./
COPY package-lock.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of the code
COPY . .

# 6. Build the Next.js app
RUN npm run build

# 7. Expose the port
EXPOSE 3000

# 8. Start the app
CMD ["npm", "start"]
