FROM node:alpine As development
WORKDIR /app
COPY ./package.json ./
RUN npm i
COPY . .
CMD [ "npm", "run", "dev" ]