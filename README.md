## Getting Started 🚀

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites 📋

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [NPM](http://npmjs.com)) installed on your computer.

Also, you can use [Yarn](https://yarnpkg.com/) instead of NPM ☝️

## Setup 🔧

From your command line, first clone Dev Portfolio:

```bash
# Clone the repository
$ git clone https://github.com/toprate425/common-portfolio.git

# Move into the repository
$ cd common-portfolio

# Remove the current origin repository
$ git remote remove origin
```

After that, you can install the dependencies either using NPM or Yarn.

Using NPM: Simply run the below commands.

```bash
# Install dependencies
$ npm install --force

# Start the development server
$ npm start
```

Using Yarn: Be aware of that you'll need to delete the `package-lock.json` file if exists before executing the below commands.

```bash
# Install dependencies
$ yarn

# Start the development server
$ yarn start
```

Once your server has started, go to this url `http://localhost:3000/` to see the portfolio locally.
The page will reload if you make edits.

---
## License 📄

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

