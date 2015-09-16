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
sjk

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

## Language Identification

The Language Identification enables you to quickly identify the language text is written in.

![ScreenShot](https://github.com/NodeREDWatson/Watson-Node-Red-Samples/blob/Language-Identification/images/Language%20Identification/LI.jpg)

In this example some random text  is injected, identified by the Watson Language Indetification service and put the result to the Debug tab. In the following screenshots you can see how the nodes are configured.

## Language Translation

The Language Translation service enables you to translate text from one language to another.
These languages are supported:

- The News domain - targeted at news articles and transcripts, it translates English to and from French, Spanish, Portuguese or Arabic.
- The Conversational domain - targeted at conversational colloquialisms, it translates English to and from French, Spanish, Portuguese or Arabic.
- The Patent domain - targeted at technical and legal terminology, it translates Spanish, Portuguese, Chinese, or Korean to English.



![ScreenShot](https://github.com/NodeREDWatson/Watson-Node-Red-Samples/blob/master/images/Language%20Translation/LT.jpg)

In this example some random text (in English in this case) is injected, translated (to French) and put the result to the Debug tab. In the following screenshots you can see how the nodes are configured.

The inject node: 

![ScreenShot](https://github.com/NodeREDWatson/Watson-Node-Red-Samples/blob/master/images/Language%20Translation/LT_Inject.jpg)

You can use any text for this. I put Node-RED in double quotes, otherwise it would be translated as well.

The translation node:

![ScreenShot](https://github.com/NodeREDWatson/Watson-Node-Red-Samples/blob/master/images/Language%20Translation/LT_Config.jpg)

The output from the debug node: 

![ScreenShot](https://github.com/NodeREDWatson/Watson-Node-Red-Samples/blob/master/images/Language%20Translation/LT_Debug.jpg)

you can also copy the code for the flow here and import it from cliboard into Node-RED:

![Language Translation flow](https://github.com/NodeREDWatson/Watson-Node-Red-Samples/blob/Language-Identification/flows/Language%20Translation/LT_flow.txt)


....Work in progress...More to come in a moment...

