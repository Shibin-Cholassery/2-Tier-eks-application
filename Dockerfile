FROM node:14 AS ui-build
WORKDIR /usr/src/app
COPY Frontend/ ./Frontend/
RUN cd Frontend && npm install @angular/cli && npm install && npm run build

FROM node:14 AS server-build
WORKDIR /home/jenkins/Docker/Backend
COPY --from=ui-build /usr/src/app/Frontend/dist ./Frontend/dist
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY app.js .
COPY queries.js .
EXPOSE 3000

CMD ["node", "app.js"]
