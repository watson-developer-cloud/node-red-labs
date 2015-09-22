
#Welcome to Node-RED

##Introduction

Node-RED is a visual tool for wiring the Internet of Things. It is easy to connect devices, data and api’s (services). It can also be used for other types of applications to quickly assemble flows of services. Node-RED is available as open source and has been implemented by the IBM Emerging Technology organization.
Node-RED provides a browser-based flow editor that makes it easy to wire together flows using the wide range of nodes in the palette. Flows can be then deployed to the runtime in a single-click.
While Node-Red is based on Node.js, JavaScript functions can be created within the editor using a rich text editor.
A built-in library allows you to save useful functions, templates or flows for re-use.

Node-RED is included in the Node-RED starter application, 
<screenshot>

but you can also deploy it as Node.js application separately. 
Node-RED can not only be used for IoT applications, but it is a generic event-processing engine. For example you can use it to listen to events from http, websockets, tcp, Twitter and more and store this data in databases without having to program much if at all. You can also use it for example to implement simple REST APIs. You can find many other sample flows on the Node-RED website <Link to website>

In the labs which can be found here we focus on applications which are making use of IBM Watson’s capabilities.
We have created some labs on how to use the different Watson nodes in Node-RED. 
Nodes are blocks that represent components of a larger system, in Node-RED's case usually the devices, software platforms and web services that are to be connected. Further blocks can be placed in between these components to represent software functions that wrangle and transform the data in transit.

##Getting Started

There are two ways of using Node-RED
-	Node-RED stand alone
-	Node-RED on Bluemix (Bluemix is IBM’s Platform as a Service)
Both ways are described here, but to save time for these labs it is recommended to use Node-RED on Bluemix.

###Installation and running Node-RED

Here is described how to install Node-Red in the stand alone way of working, for Using Node-RED in Bluemix, nothing has to be installed. A Node-RED app has to be deployed. 

NOTE: When you are not using Node-RED stand alone but using Node-RED on Bluemix, skip this part and go to ###Deploy Node-RED on Bluemix


When you have Node.js installed, run:
For Linux/OS X 

$ sudo npm install -g node-red
For Windows

npm install -g node-red

Note: you need to run in a command shell as Administrator,

The default instance of Node-RED does not contain the IBM Watson services which we need in the labs, so the next step is to install these services:

You simply execute this command: npm install node-red-bluemix-nodes

When finished start Node-RED:
For Linux/OS X: 
$ node-red

For Windows
node node_modules/node-red/red.js

 Then open http://localhost:1880


###Deploy Node-RED on Bluemix

This is required when Node-RED is not used stand alone. 
You need a Bluemix account which can be acquired here (ibm.biz/bluemixnl)
When you are logged in got to Catalog and click on the Node-RED starter application.
On the right you must give it a name, which must be unique. Then click Create.
Right now the Node-RED application is being created and deployed. This will take a few minutes. When finished click on the URL, which opens up your Node-RED application.

###Creating your first flow
    



You need to add the services you want to use to your application. Go to the dashboard and click on your application, then click on Add a Service or API. In the following screen select the service you want to use, and finally click on use. Wait for a moment to restart the application. When the application is started you can click on the URL to open Node-RED.

Another way of using Node-RED is installing it locally, which can be done by following this:

Check out http://nodered.org/docs/getting-started/ for full instructions on getting started.



Note that Node-RED in BlueMix will behave slightly differently than Node-RED stand-alone:

The sets of available nodes differ, BlueMix has extra nodes for DB access, but does not expose the File nodes.
Node-RED in bluemix stores its persistent data (flows, libraries, credentials) in the co-installed Cloudant database named nodered. When using a Cloudant node with Node-RED on BlueMix, the list of available instances is automatically listed.
Node-RED in BlueMix has built-in credential management, so you don't have to worry about exposing your services authentication data, they will be filled-in automatically from the sevices' credentialds defined for the application in BlueMix.
Additional nodes in Node-RED on BlueMix are installed through cf and a specific procedure since there is no direct access to the npm package manager.
