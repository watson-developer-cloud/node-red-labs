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

Objective is to send the Personality Insights node the right data for it to return a JSON object which is the same as that used in the demo (see link to this lower in this section)

Create a new application using the Node-RED starter boilerplate option in Bluemix

Click on the icon of the application

Pick “Add a Service or API” and click the Personality Insights node under Watson section.  Make sure your Application is listed and click on Use.  Click on Restage.

Drag an inject node to the palette.

Drag the personality insights node to the palette.

Drag a debug node to the palette.

Join them as shown below

![ScreenShot](https://github.com/NodeREDWatson/Watson-Node-Red-Samples/blob/master/images/Personality%20Insights/2015-09-16%2014_07_07-Node-RED%20_%20wnrpi.mybluemix.net.png)

Double-click the debug node and replace ‘payload’ to ‘insights’. Also change “to” to “debug tab and console”

Double-click the inject node and change Payload to string.  Go to ?? and open the file and pasts the text to the blank field below the Payload field (this is the same text that is used in the demo).

Open a command line on your laptop and login to Bluemix with your username/password.  Navigate to the organisation and space to where your application is located.

Type 'cf logs <app_name>' where <app_name> is the name of your application.  Return to the Node-RED palette.

Click the Deploy button

Click on the debug tab to the top right of the palette.

Click the button next to the inject node.  

You will see an output in the debug tab starting with '{ [msg.insights] : object }' followed by the JSON object.  NOTE : you will not be able to see the full object

![ScreenShot](https://github.com/NodeREDWatson/Watson-Node-Red-Samples/blob/master/images/Personality%20Insights/Command%20Prompt%20-%20cf%20%20logs%20WNRPI.png)

Go back to the command prompt and see that the full object has been shown. 
![ScreenShot](https://github.com/NodeREDWatson/Watson-Node-Red-Samples/blob/master/images/Personality%20Insights/pi_debug_node_output.png)

Compare the items in the JSON object to those of the demo for Message Insights - you can see that the values shown are the same (or very similar).
