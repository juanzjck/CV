FROM node:14.15.1
#RUN npm install -g create-react-app

#COPY ["package.json","package-lock.json","/usr/src/"]
COPY ["package.json","/usr/src/"]

WORKDIR /usr/src/src

RUN npm i --save --production && npm audit fix

#RUN npm i @apollo/client@3.1.2 --save 

#RUN npm i tsutils@3.17.1 --save

#RUN npm i subscriptions-transport-ws --save

#RUN npm i react-scripts@3.4.3

COPY [".","/usr/src/"]


EXPOSE 3000

CMD ["npm","start"]

