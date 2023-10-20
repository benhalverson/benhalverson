FROM node:18-buster

WORKDIR /app

# Copy dependency definitions
COPY package*.json /app/

# Install dependecies
RUN npm i

# Get all the code needed to run the app
COPY . .

RUN npm run build

# Expose the port the app runs in
EXPOSE 3000

CMD ["npm", "start"]