# Use the official Node.js image as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Install a simple web server to serve the built React app
RUN npm install -g serve

# Expose the port the app will run on
EXPOSE 5000

# Start the web server to serve the built app
CMD ["serve", "-s", "build", "-l", "5000"]