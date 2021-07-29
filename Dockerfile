FROM node:16

WORKDIR /ui

# Copy content
COPY . .

RUN npm install

RUN npm run build

EXPOSE 80

ENV PORT=80

CMD ["npm", "run", "start"]