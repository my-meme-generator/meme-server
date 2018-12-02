# Memerables Server

Memerables is a meme generator application developed for a Web Development class at [Portland State University](https://www.pdx.edu/).

## Getting Started

These instructions will you get a copy of the project up and running on your local machine for development purposes.

### Prerequisites Windows

What you need to run meme-server on Windows 10.

- Install [MongoDb](https://www.mongodb.com/download-center/community) and [Node.js](https://nodejs.org/en/). 
  - You can find a good MongoDb installation tutorial [here](https://www.youtube.com/watch?v=FwMwO8pXfq0&t=662s).

### Running Application

- Download the repository.
- In Windows, open Command Terminal and run the command `mongod` (traverse to MongoDb's bin directory first if path not added to environment variables).
- In Windows, open second Command Terminal, wait for `waiting for connections on port ...` message on first terminal, then run the command `mongo`.
- In Visual Studio Code, run the command `npm i` to install node_modules.
- Run the command `npm i express --save`.
- In Visual Studio Code, run the command `node server.js` to start the server.

## Built With

- [Visual Studio Code](https://code.visualstudio.com) - Code editor
- [MongoDb](https://www.mongodb.com/download-center/community) - Database
- [Express](https://expressjs.com/) - Web framework
- [Node.js](https://nodejs.org/en/) - Run-time environment

## License

This program is licensed under the "MIT License". Please see the file LICENSE in the source distribution of this software for license terms.

## Author

- Cole Phares - [zedzorander](https://github.com/zedzorander)
  