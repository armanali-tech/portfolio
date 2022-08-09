FROM node:lts-alpine
ENV NODE_ENV=production
RUN npm install -g nodemon
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --force --silent && mv node_modules ../
COPY . .
EXPOSE 3000
RUN chown -R node config/index.js
USER node
CMD ["npm", "start"]
