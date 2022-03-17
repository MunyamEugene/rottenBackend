# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /rotten

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
# add app
COPY ./ ./
EXPOSE 5000
RUN npm i
# start app
CMD ["npm", "start"]