# Watson-Node-Red-examples

A collection of examples on how to use the Watson nodes in Node-RED.

These Watson nodes are used:

- Language Identification
- Language Translation
- Personality insights
- Speech to Text
- Text to Speech
- Tradeoff Analytics
- Visual Recognition


First you need an instance of Node-RED with Watson services. Therefore you need a Bluemix account. You can get that here: http://www.bluemix.net.

Once you are in Bluemix, go to Catalog and then go to the boilerplate section and select Node-RED Starter, in the next screen, give your appication a name and click create.

You need to add the services you want to use to your appication. Go to the dashboard and click on your application, then click on Add a Service or API. In the folowing screen select the service you want to use, and finally click on use. Wait for a moment to restart the application. When the application is started you can click on the URL to open Node-RED.

Another way of using Node-RED is installing it locally, which can be done by folowing this:

Check out http://nodered.org/docs/getting-started/ for full instructions on getting started.



    sudo npm install -g node-red
    node-red
    Open http://localhost:1880
    
You have to install the Watson Nodes, which is described here: http://flows.nodered.org/node/node-red-bluemix-nodes
and you have to make the services available in Bluemix.

DESCRIBE THAT

Note that Node-RED in BlueMix will behave slightly differently than Node-RED stand-alone:
 1. The set of nodes available is different, BlueMix has extra nodes for DB access, but does not expose the `File` nodes.
 2. Node-RED in bluemix stores its persistent data (flows, libraries, credentials) in the co-installed Cloudant database named
`nodered`. When using a Cloudant node with Node-RED on BlueMix, the list of available instances is automatically listed.
 3. Node-RED in BlueMix has built-in credential management, so you don't have to worry about exposing your services authentication data, they will be filled-in automatically from the sevices' credentialds defined for the application in BlueMix.

## Language Translation

The Language Translation service enables you to translate text from one language to another.




....Work in progress...More to come in a moment...

#Personality Insights

Description of Personality Insights and link to demo  -> https://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/personality-insights.html

Create a new application using the Node-RED starter boilerplate option in Bluemix.

Click on the icon of the application

Pick “Add a Service or API” and click the Personality Insights node under Watson section.  Make sure your Application is listed and click on Use.  Click on Restage.

Drag a inject node to the palette.

Drag the personality insights node to the palette.

Drag a debug node to the palette.

Join them as shown below

Double-click the debug node and replace ‘payload’ to ‘insights’. Also change “to” to “debug tab and console”

Double-click the inject node and change Payload to string.  Go to ??? and past the text to the blank field below the Payload field (this is the same text that is used in the demo).

Click the Deploy button
