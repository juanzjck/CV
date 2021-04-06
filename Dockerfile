FROM node:14.15.1
#RUN npm install -g create-react-app

#COPY ["package.json","package-lock.json","/usr/src/"]
COPY ["package.json","package-lock.json","/usr/src/"]

WORKDIR /usr/src

RUN npm i --save  && npm audit fix

COPY [".","/usr/src/"]

RUN npm run build

EXPOSE 5000

CMD ["npm","run","serve:prod"]

