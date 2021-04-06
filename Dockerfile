FROM node:14.15.1
#RUN npm install -g create-react-app

#COPY ["package.json","package-lock.json","/usr/src/"]
COPY ["package.json","package-lock.json","/usr/src/"]

WORKDIR /usr/src/src

RUN npm i --save  && npm audit fix

RUN npm run build

COPY [".","/usr/src/"]


EXPOSE 5000

CMD ["npm","run","serve:prod"]

