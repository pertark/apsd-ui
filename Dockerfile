FROM node:16

WORKDIR /ui

COPY package*.json ./

RUN npm install

# Copy content
COPY . .

RUN npm run build

EXPOSE 80

ENV PORT=80

CMD ["npm", "run", "start"]