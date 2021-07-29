FROM node:16

WORKDIR /ui

# Copy content
COPY . .

RUN npm install

RUN npm run build

CMD ["npm", "run", 'start']