# Use Node.js LTS version as base image
FROM node:18

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the application port
EXPOSE 3000

# Start the NestJS application
CMD ["npm", "run", "start"]
