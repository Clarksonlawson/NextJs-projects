# Use the official Node.js LTS image as the base image
FROM node:lts-alpine

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port your Next.js app will run on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]