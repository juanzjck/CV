FROM node:14.15.1
#RUN npm install -g create-react-app

#COPY ["package.json","package-lock.json","/usr/src/"]
COPY ["package.json","package-lock.json","/usr/src/"]

WORKDIR /usr/src/src

RUN npm i --save --production && npm audit fix



COPY [".","/usr/src/"]


EXPOSE 3000

CMD ["npm","run","serve:prod"]

