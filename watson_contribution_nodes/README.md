# Installing Watson Developer Cloud Contribution Nodes 

## Node-RED Bluemix Boilerplate
We are working with the distributers of the Node-RED boilerplate on Bluemix to incorporate the Watson service nodes from the 
Watson Developer Cloud. In the meantime follow these instructions to install node-RED nodes that offer a richer set of 
Watson capabilities.  

## Overview
A more complete set of Watson services nodes are available from the Watson Developer Cloud. If you wish to use these nodes
you will need to modify Node-RED dependencies. These instructions show how to install these contribution nodes into 
your Node-RED instance on Bluemix. Alternatively you can deploy from 
the [node red bluemix starter repository](https://github.com/watson-developer-cloud/node-red-bluemix-starter), which 
brings in these nodes, along with box and dropbox nodes that the sample flows make use of to feed data into the Watson nodes. 

## Modify Node-RED Dependencies.
On the Bluemix console, select your Node-RED application. At the top right you will see an "ADD GIT" button.

![Add GIT Option](images/contribution-add-git.png)

Click on this button. This will create a GIT repository for your Node-RED instance. Once the repository has been created, the
"ADD GIT" button will be replaced with an "Edit Code" button. 

![Edit Code Option](images/contribution-edit-code.png)

Click on the Edit button. The file that you will be changing is "package.json". 

![Package json file](images/contribution-package-json-file.png)

Select the file. 

![Package json file before changes](images/contribution-package-json-file.before.png)

Replace the line for node-red-node-watson with a line pointing at the git home for 
the contribution nodes from Watson Developer Cloud. Add the npm modules for the dropbox and box nodes. 

![Package json file after changes](images/contribution-package-json-file.after.png)

The change is 

```
	 "node-red-node-watson":"https://github.com/watson-developer-cloud/node-red-node-watson.git",
          
	 "node-red-node-dropbox":"0.x",
	 "node-red-node-box":"0.x"	 
	 
```

Remember the comma separators at the end of each line except for the last. Save your changes

![Package json save changes](images/contribution-package-json-file-save.png)

Deploy your changes

![Deploy changes](images/contribution-deploy.png)

Wait for Node-RED to restart

![Node RED application running](images/contribution-running.png)

The updated nodes will then be available for you to use on the palette.



