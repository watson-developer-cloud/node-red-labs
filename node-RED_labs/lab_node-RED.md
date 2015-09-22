
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

Note that Node-RED in Bluemix will behave slightly differently than Node-RED stand-alone:

The sets of available nodes differ, Bluemix has extra nodes for DB access, but does not expose the File nodes.
Node-RED in Bluemix stores its persistent data (flows, libraries, credentials) in the co-installed Cloudant database named nodered. When using a Cloudant node with Node-RED on BlueMix, the list of available instances is automatically listed.
Node-RED in Bluemix has built-in credential management, so you don't have to worry about exposing your services authentication data, they will be filled-in automatically from the services' credentials defined for the application in Bluemix.


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

Check out http://nodered.org/docs/getting-started/ for full instructions on getting started.


###Deploy Node-RED on Bluemix

This is required when Node-RED is not used stand alone. 
You need a Bluemix account which can be acquired here (ibm.biz/bluemixnl)
When you are logged in got to Catalog and click on the Node-RED starter application.
On the right you must give it a name, which must be unique. Then click Create.
Right now the Node-RED application is being created and deployed. This will take a few minutes. When finished click on the URL, which opens up your Node-RED application.

You can do this part later but for the labs you need to add the (Watson) services, you want to use, to your application. Go to Bluemix and open the dashboard and click on your application, then click on Add a Service or API. In the screen that follows select the service you want to use, and finally click on use. Wait for a moment to restart the application. When the application is started you can click on the URL to open Node-RED. If a service is not added you to the Node-RED application, you will get an error or a node is asking for credentials depending on the type of node.


###Creating your first flow

We will create a Hello World flow.
This program is a very simple flow that prints the message 'Hello World' on the screen. 
Here you can see Node-RED's user interface,  the rounded blocks on the screen are called nodes, which is a visual representation of a piece of JavaScript code to carry out a task.
To build this 'Hello World' flow you need to take the following steps:
1.	Drag an 'inject node' to the canvas
2.	Double click this node to see the options
3.	Use the drop-dwon, to select string for the payload
4.	Type Hello on the second line
(this will cause to inject hello into the flow when clicked on the inject node) and click on ok, to save and close this node.
5.	Add a function node, open it and place this on the first line into the function: msg.payload +=" World".
The complete function should look lie this:
msg.payload +=" World"
return msg;
This will add World to the Payload
You can give this node a name.
6.	Add a debug node
7.	Wire the inject node to the function node and the function node to the debug node.
8.	Press deploy.
Now you have build your first Hello World flow. Test it by clicking on the inject node, you will see some output in the debug window on the right (click on debug to change the view from info to debug).


This inject node is edited to output the string 'Hello'.
Next a function node is dragged on and edited to define a JavaScript function that appends the string ' World' to any message it receives.
These two nodes are then wired together. Most nodes have a grey circle on their left edge, which represents their input port, and on their right edge, which represents their output port. Left clicking and dragging the output port of the 'Hello' node to the input port of the ' World' node connects the two together.
The final stage is to add a Debug node that prints the message it receives in the Debug window. This Debug node is then wired to the output of the ' World' node.
The process is now ready to run and once deployed will display the string 'Hello World' in the Debug box, shown on the right of the screen.
This finished program is an example of what is called a flow in Node-RED.

    


