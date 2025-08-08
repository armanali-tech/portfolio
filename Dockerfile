# This is a Dockerfile for a Node.js application.
FROM node:18.18.2
# Set the working directory
WORKDIR /app
# Copy package.json and package-lock.json
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy the rest of the application code
COPY . .
# ENV Port 8080
ENV PORT=8080
# Expose the port the app runs on
EXPOSE 8080
# Start the application
CMD ["npm", "start"]
# To build a Docker image
# docker build -t portfolio .
# To run a Docker container
# docker run -p 8089:8080 portfolio