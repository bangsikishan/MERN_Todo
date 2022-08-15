# MERN_Todo
A web app to store Todo with user authentication.

## Installation
To use this app:
- Download this project to your computer into a directory.
- Install the required packages by typing `npm install` into the command line in both the backend and frontend directory.
- Create a `.env` file inside the backend directory at the same level as server.js.
- Create a `URI` and `SECRET_KEY` inside the `.env` file and enter your own MongoDB URI and secret key. Keep the port at 4000.

Eg (In your .env file):
```
PORT: 4000
URI: <Your_MongoDB URI_Here>
SECRET_KEY: <Your_SecretKey_Here>
```

***Note: You need to have a MongoDB cloud account and NodeJS installed on your computer.***


Signup for MongoDB [here](https://www.mongodb.com/).

Install NodeJS from [here](https://nodejs.org/en/).


## Usage
- In the command line of the backend directory:
```bash
npm run dev
```
- In the command line of the frontend directory:
``` bash
npm start
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
