# Node-RED Basics

#Welcome to Node-RED

Node-RED is a visual tool for wiring the Internet of Things, but it can also be used for other types of applications to quickly assemble flows of services.  Node-RED is available as open source and has been implemented by the IBM Emerging Technology organization.
Node-RED provides a browser-based flow editor that makes it easy to wire together flows using the wide range of nodes in the palette. Flows can be then deployed to the runtime in a single-click.
JavaScript functions can be created within the editor using the a rich text editor.
A built-in library allows you to save useful functions, templates or flows for re-use.
The light-weight runtime is built on Node.js, taking full advantage of its event-driven, non-blocking model.

Node-RED is included in the Bluemix Internet of Things starter application, but you can also deploy it as Node.js application separately. To use Node-RED for Internet of Things scenarios you need to add the Internet of Things Foundation service to your Bluemix application. The IoT service allows to register and connect different types of devices. After this you can use the incoming and outgoing MQTT nodes in your flows. Take a look at the existing Bluemix Internet of Things samples. Most of them use Node-RED to define flows where either incoming sensor data from 'things' is handled, e.g. stored in databases, or where commands are sent to devices. 

Node-RED can not only be used for Internet of Things applications, but it is a generic event-processing engine. For example you can use it to listen to events from http, websockets, tcp, Twitter and more and store this data in databases without having to program much if at all. You can also use it for example to implement simple REST APIs. Ryan Baxter provided just last week a Node-RED sample that isn't an IoT app. You can find many other sample flows on the Node-RED website 


Getting Started

This guide will help you get Node-RED installed and running in just a few minutes.

    Installation
    Running
    Adding Nodes
    Upgrading
    Creating your first flow
    Creating your second flow

Using Node-RED

This guide covers how to configure and use Node-RED.

    Configuration
    Securing Node-RED
    How to write Functions
    How to embed Node-RED into an existing Node.js app


For Linux/OS X, if you already have Node.js installed, run:

$ sudo npm install -g node-red
$ node-red

Otherwise, head over to the Getting Started guide.

First you need an instance of Node-RED with Watson services. Therefore you need a Bluemix account. You can get that here: http://www.bluemix.net.

Once you are in Bluemix, go to Catalog and then go to the boilerplate section and select Node-RED Starter, in the next screen, give your application a name and click create.

You need to add the services you want to use to your application. Go to the dashboard and click on your application, then click on Add a Service or API. In the following screen select the service you want to use, and finally click on use. Wait for a moment to restart the application. When the application is started you can click on the URL to open Node-RED.

Another way of using Node-RED is installing it locally, which can be done by following this:

Check out http://nodered.org/docs/getting-started/ for full instructions on getting started.

  sudo npm install -g node-red
  node-red
  Open http://localhost:1880

You have to install the Watson Nodes, which is described here: http://flows.nodered.org/node/node-red-bluemix-nodes and you have to make the services available in Bluemix.

Note that Node-RED in BlueMix will behave slightly differently than Node-RED stand-alone:

The sets of available nodes differ, BlueMix has extra nodes for DB access, but does not expose the File nodes.
Node-RED in bluemix stores its persistent data (flows, libraries, credentials) in the co-installed Cloudant database named nodered. When using a Cloudant node with Node-RED on BlueMix, the list of available instances is automatically listed.
Node-RED in BlueMix has built-in credential management, so you don't have to worry about exposing your services authentication data, they will be filled-in automatically from the sevices' credentialds defined for the application in BlueMix.
Additional nodes in Node-RED on BlueMix are installed through cf and a specific procedure since there is no direct access to the npm package manager. 

