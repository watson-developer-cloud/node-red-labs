#Guidelines

## Code

* The code should follow Watson Developer Cloud [coding guidances](https://github.com/watson-developer-cloud/api-guidelines)
* The code should follow: https://github.com/airbnb/javascript
* 2 spaces identation
* `snake_case`

## Issues

If you encounter an issue with using the labs here, you are welcome to submit
a [bug report](https://github.com/watson_developer_cloud/node-red-labs/issues).
Before that, please search for similar issues. It's possible somebody has already encountered this issue.

## Pull Requests

If you want to contribute to the repository, follow these steps:

1. Fork the repo.
2. Develop code changes.
5. Commit your changes.
6. Push to your fork and submit a pull request.

# Getting start !

The main steps are :
* check pre-requisites on your laptop (Linux, Mac, Windows)
* setup your development environment to use Node-RED on localhost
* coding : modify or create a new node using Node-RED on localhost
* commit your work and pull-request

Note : this procedure have been tested on OS X Yosemite

## Pre-requisites: 

Install a Node version manager if not already done :
- Linux/OS X : use [nvm](https://github.com/creationix/nvm)
- Windows : [nvm-windows](https://github.com/coreybutler/nvm-windows) or [nodist](https://github.com/marcelklehr/nodist)
Example :
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash
```
Using npm, install Node 4 :
```
nvm install 4.0
```
- and use it :
```
nvm use 4.0
```
Notice : npm is provided along with Node.js

## Setup your development environment
Here are the steps to successfully setup your development environment to contribute to this project

- Fork the main [Node-RED Watson project](https://github.com/node-red/node-red-node-watson) using your GitHub account (ex: @ylecleach)
- Create a work directory that will contains the source code of your fork
```
mkdir ~/dev/src ; cd ~/dev/src
git clone https://github.com/ylecleach/node-red-node-watson
```
**Notice** : replace **ylecleach** by your own GitHub ID

- create a npm link to your forked project. This will also build this project dependencies.
```
cd ~/dev/src/node-red-node-watson
npm link
```

- Install Node-RED on localhost, assuming we install it on ~/dev directory (you can install it in another location as you wish)
```
cd ~/dev
npm install node-red
```

- Install your fork project into local Node-RED using npm link:
```
cd ~/dev
npm link node-red-node-watson
```

- Starting Node-RED on localhost
```
cd ~/dev/node_modules/node-red
npm start
```

- open Node-RED on [http://localhost:1880](http://localhost:1880) and check you have the Watson nodes properly installed in the Node-RED palette.

Then you can work on your project locally, update or create nodes, and all you have to do is to stop and start your local Node-RED.

## Modify or Create new Watson nodes

If your want to modify an existing Watson nodes, just search the node in the following file under the node-red /  nodes section :
```
vi ~/dev/src/node-red-node-watson/package.json
```

If you want to add a watson node, then you have to create an entry such as :
```
"watson-dialog": "watson/di.js"
```
using the same name convention. For example the Watson Dialog Node is composed of these two files :
- watson/di.js
- watson/di.html

Please refer to those examples and to the [NodeRED.org](http://nodered.org/docs/creating-nodes/) documentation.

