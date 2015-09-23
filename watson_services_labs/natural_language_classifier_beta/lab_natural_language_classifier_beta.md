#Natural Language Classifier (beta, no Node-RED node exists)

The Natural Language Classifier is a beta Service (as of Sept 2015) but it would be useful to describe how to create the steps to use it since it offers some cognitive learning features.

##Creating a populated NLC Service
 TO DO :
 Toolkit install in Bmix, training with csv file (curl), confirming ready and sending question (curl)
##Using the NLC Service from Node-RED (using HTTP Request)

##Using the NLC Service from Node-RED (using Node-RED node : TBC)


![ScreenShot](images/fe_Add_Service.png)

Pick the Alchemy API Service in the Watson section

![ScreenShot](images/fe_service.png)

Your application will be shown, click "Use" to bind the Alchemy API Service to your application

![ScreenShot](images/fe_Add_Service_Use.png)

You will be prompted to Restage the application, click Restage.  Wait till the you see "Your app is running"

Click on your App link

![ScreenShot](images/fe_app_link.png)

Click on the "go to your Node-RED flow editor" button

![ScreenShot](fe_go_to_Node-RED_flow_editor.png)

Drag an Inject node to the palette

![ScreenShot](images/fe_inject_node.png)

Drag a Function node to the palette

![ScreenShot](images/fe_function_node.png)

Drag a Alchemy API node to the palette

![ScreenShot](images/fe_node.png)

Finally drag a Debug node to the palette

![ScreenShot](images/fe_debug_node.png)

Join the nodes as shown below

![ScreenShot](images/fe_join_nodes.png)

Double-click the Inject node and change the payload to Blank
![ScreenShot](images/fe_inject_blank.png)

Copy the following text to your clipboard (hightlight, ctrl-c)

**AlchemyAPI uses natural language processing, artificial intelligence, deep learning and massive-scale web crawling to power it's text analysis capabilities. Try entering your own text in this text box to see what knowledge AlchemyAPI can extract from your unstructured data.**

Double-click the Function node and past the text "msg.payload=" (including the double quote) in front of the text :

![ScreenShot](images/fe_function_text_front.png)

Now end the line with another double quote and semi-colon :

![ScreenShot](images/fe_function_text_end_semicolon.png)

Double-click the Alchemy API Feature Extract node and tick all options 

![ScreenShot](images/fe_node_tick_all.png)

Finally double-click the Debug node and change "payload" to "features"

![ScreenShot](images/fe_debug_node_change.png)

Click the Deploy button

![ScreenShot](images/fe_deploy.png)
 
Click on the Debug Tab below the Deploy button to show the debug window.

Go back to the palette and click the Inject node "inject" button 

![ScreenShot](images/fe_inject_button.png)

Look in the Debug tab and you will see a JSON object of the analysis of the text sent to the AlchemyAPI node

![ScreenShot](images/fe_debug_result.png)

If you need to send custom parameters along with each feature, set those parameters as children of the msg.alchemy_options object - this is not going to be covered in this lab

NOTE : a URL can be specified instead of a text input 

Drag a HTTP request node to the palette

![ScreenShot](images/fe_http_req.png)

Connect an Inject node to the HTTP request node, set the Inject node to Blank and join it the the HTTP request node.  Join the HTTP request node to the AlchemyAPI Feature Extract node

![ScreenShot](images/fe_http_join.png)

Double-click the HTTP request node and enter ibm.com to the URL field

![ScreenShot](images/fe_http_url.png)

Click the Deploy button and then the Inject button connected to the HTTP request node.  You should see an output in the Debug Tab

![ScreenShot](images/fe_node_ibm_url.png)

Go to [http://www.alchemyapi.com/products/demo/alchemylanguage](http://www.alchemyapi.com/products/demo/alchemylanguage) and pick the Enter your new URL option and enter ibm.com and click "Try it!"   Scroll down to see a Visual representation of the results

![ScreenShot](images/fe_alchemy_web_demo_own_url.png)

Click the JSON button and you will see the same text as was shown in the Debug Tab of Node-RED

![ScreenShot](images/fe_alchemy_web_demo_own_url_json.png)

The flows for this lab are here -> [flows](lab_alchemy_api_feature_extraction_flows.json)