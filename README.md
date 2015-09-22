# Watson-Node-Red-examples

A collection of examples on how to use the Watson nodes in Node-RED.

These Watson nodes are used:

- Language Identification
- Language Translation
- [Personality insights](watson_services_labs/personality_insights/lab_personality_insights.md)
- Speech to Text
- [Text to Speech](watson_services_labs/text_to_speech/lab_text_to_speech.md)
- [Tradeoff Analytics](watson_services_labs/tradeoff_analytics/lab_tradeoff_analytics.md)
- [Visual Recognition](watson_services_labs/visual_recognition/lab_visual_recognition.md)
- [Alchemy Vision](watson_services_labs/alchemy_api_image_analysis/lab_alchemy_api_image_analysis.md)
- [Alchemy Feature Extraction](watson_services_labs/alchemy_api_feature_extraction/lab_alchemy_api_feature_extraction.md)

First you need an instance of Node-RED with Watson services. Therefore you need a Bluemix account. You can get that here: http://www.bluemix.net.

Once you are in Bluemix, go to Catalog and then go to the boilerplate section and select Node-RED Starter, in the next screen, give your application a name and click create.

You need to add the services you want to use to your application. Go to the dashboard and click on your application, then click on Add a Service or API. In the following screen select the service you want to use, and finally click on use. Wait for a moment to restart the application. When the application is started you can click on the URL to open Node-RED.

Another way of using Node-RED is installing it locally, which can be done by following this:

Check out http://nodered.org/docs/getting-started/ for full instructions on getting started.

    sudo npm install -g node-red
    node-red
    Open http://localhost:1880
    
You have to install the Watson Nodes, which is described here: http://flows.nodered.org/node/node-red-bluemix-nodes
and you have to make the services available in Bluemix.

DESCRIBE THAT

Note that Node-RED in BlueMix will behave slightly differently than Node-RED stand-alone:

1. The sets of available nodes differ, BlueMix has extra nodes for DB access, but does not expose the `File` nodes.
2. Node-RED in bluemix stores its persistent data (flows, libraries, credentials) in the co-installed Cloudant database named
`nodered`. When using a Cloudant node with Node-RED on BlueMix, the list of available instances is automatically listed.
3. Node-RED in BlueMix has built-in credential management, so you don't have to worry about exposing your services authentication data, they will be filled-in automatically from the sevices' credentialds defined for the application in BlueMix.
4. Additional nodes in Node-RED on BlueMix are installed through cf and a specific procedure since there is no direct access to the npm package manager.
## Language Identification

The Language Identification enables you to quickly identify the language text is written in.

This service can identify many languages: Arabic; Chinese (Simplified); Chinese (Traditional); Cyrillic; Danish; Dutch; English; Farsi; Finnish; French; German; Greek; Hebrew; Hindi; Icelandic; Italian; Japanese; Korean; Norwegian (Bokmal); Norwegian (Nynorsk); Portuguese; Spanish; Swedish; Turkish; Urdu. 

![ScreenShot](https://github.com/NodeREDWatson/Watson-Node-Red-Samples/blob/Language-Identification/images/Language%20Identification/LI.jpg)

In this example some random text  is injected, identified by the Watson Language Indentification service and put the result to the Debug tab. In the following screenshots you can see how the nodes are configured.

In the following screenshots you can see how the nodes are configured.

The inject node: 

![ScreenShot](https://github.com/NodeREDWatson/Watson-Node-Red-Samples/blob/master/images/Language%20Translation/LT_Inject.jpg)

You can use any text for this.

The Language Identification node does not need any configuration

And this is the output:

![ScreenShot](https://github.com/NodeREDWatson/Watson-Node-Red-Samples/blob/Language-Identification/images/Language%20Identification/LI_output.jpg)

You can also copy the code for the flow here and import it from clipboard into Node-RED:

![Language Identification flow](https://github.com/NodeREDWatson/Watson-Node-Red-Samples/blob/Language-Identification/files/Language%20Identification/LI_flow)
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

You can also copy the code for the flow here and import it from clipboard into Node-RED:

![Language Translation flow](https://github.com/NodeREDWatson/Watson-Node-Red-Samples/blob/Language-Identification/files/Language%20Translation/LT_flow.txt)


....Work in progress...More to come in a moment...


<<<<<<< HEAD
The IBM Watson Personality Insights service uses linguistic analytics to infer cognitive and social characteristics, including Big Five, Values, and Needs, from communications that the user makes available, such as email, text messages, tweets, forum posts, and more, go to https://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/personality-insights.html for a full description and demo

The objective is to send the Personality Insights node the same data as for the demo (https://watson-pi-demo.mybluemix.net/) and to show the JSON object and its values match those of the demo

Create a new application using the Node-RED starter boilerplate option in Bluemix

Click on the icon of the application

Pick “Add a Service or API” and click the Personality Insights node under Watson section.  Make sure your Application is listed and click on Use.  Click on Restage.

Drag an inject node to the palette.

Drag the personality insights node to the palette.

Drag a debug node to the palette.

Join them as shown below

![ScreenShot](https://github.com/NodeREDWatson/Watson-Node-Red-Samples/blob/master/images/Personality%20Insights/2015-09-16%2014_07_07-Node-RED%20_%20wnrpi.mybluemix.net.png)

Double-click the debug node and replace ‘payload’ to ‘insights’. Also change “to” to “debug tab and console”

Double-click the inject node and change Payload to string.  Go to https://github.com/NodeREDWatson/Watson-Node-Red-Samples/blob/master/files/Personality%20Insights/Personal%20Insights%20input%20text.txt and open the file and pasts the text to the blank field below the Payload field (this is the same text that is used in the demo).

Open a command line on your laptop and login to Bluemix with your username/password.  Navigate to the organisation and space to where your application is located.

Type **cf logs app_name**

where **app_name** is the name of your application.  Return to the Node-RED palette.

Click the Deploy button

Click on the debug tab to the top right of the palette.

Click the button next to the inject node.  

You will see an output in the debug tab starting with '{ [msg.insights] : object }' followed by the JSON object.  NOTE : you will not be able to see the full object

![ScreenShot](https://github.com/NodeREDWatson/Watson-Node-Red-Samples/blob/master/images/Personality%20Insights/pi_debug_node_output.png)

Go back to the command prompt and see that the full object has been shown. 

![ScreenShot](https://github.com/NodeREDWatson/Watson-Node-Red-Samples/blob/master/images/Personality%20Insights/Command%20Prompt%20-%20cf%20%20logs%20WNRPI.png)

Compare the items in the JSON object to those of the demo for Message Insights - you can see that the values shown are the same (or very similar).
=======

