#Tradeoff Analytics

The Tradeoff Analytics service helps people optimize their decisions while striking a balance between multiple, often conflicting, objectives, a full description is described here -> 
http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/tradeoff-analytics.html

The objective of this lab is to pass the same data as in the demo (http://tradeoff-analytics-demo.mybluemix.net/) to the Node-RED Watson node and see what results are obtained.

First go to the demo website and select the Phones scenario from the "Select a scenario" drop down

![ScreenShot](images/toff_scenario_phones.png)

Scroll down and paste the table and click on "View / Edit JSON" option

![ScreenShot](images/toff_view_edit_json.png)

Cut/paste the JSON text to a text editor of your choice.

Edit the file and go to the second line (showing "subject: "phone",")

Changes the word "subject" to "payload" and save the file.  Also add the text "msg=" to the first line of the file

![ScreenShot](images/toff_change_json.png)

For an already modified file see ->  [lab_toff_input.txt](lab_toff_input.txt)

Open your Application and add a TradeOff Service to it.  On your Node-RED application click on "Add a Service or API"

![ScreenShot](images/toff_Add_Service.png)

Pick the Tradeoff Analytics service in the Watson section

![ScreenShot](images/toff_Watson_toff_service.png)

Your application will be shown, click "Use" to bind the Tradeoff Analytics service to your application

![ScreenShot](images/toff_Add_Service_Use.png)

You will be prompted to Restage the application, click Restage.  Wait till the you see "Your app is running"

Click on your App link
![ScreenShot](images/toff_Go_to_Node-RED_flow_editor.png)

Click on the "go to your Node-RED flow editor" button

Drag an inject node to the palette

![ScreenShot](images/toff_inject_node.png)

Drag a Function node to the palette

![ScreenShot](images/toff_function_node.png)

Drag the Tradeoff Analytics node to the palette

![ScreenShot](images/toff_tradeoff_node.png)

Finally drag a Debug node to the palette and join the nodes up as shown

![ScreenShot](images/toff_debug_node.png)

Double-click the Inject node and change the payload to Blank

![ScreenShot](images/toff_inject_blank.png)

Double click the Function node and paste the contents of [lab_toff_input.txt](lab_toff_input.txt) to the function

![ScreenShot](images/toff_function_node_paste.png)

Click OK

Double-click the Debug node and change msg.payload to msg.resolution

![ScreenShot](images/toff_debug_node_contents.png)

Click the Deploy button

![ScreenShot](images/toff_deploy.png)

Click on the Debug tab on Node-RED and then return to the palette and click the Inject node so that the flow is triggered

![ScreenShot](images/toff_inject_click.png)

Return to the Debug tab - you should now see the resultant output from the Tradeoff Analytics node

![ScreenShot](images/toff_output.png)

To understand the contents of the output go to ->  [Watson tradeoff](https://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/tradeoff-analytics/inout.shtml) and [Explanation of tradeoff JSON](https://developer.ibm.com/answers/questions/191441/need-explanation-of-solutionperspective-response-f.html)

A complete file of the flows is saved here ->[ lab_toff_flow.json](lab_toff_flow.json)

# [Using the Trade-Off Analytics Widget with Node-RED](..\..\watson_advanced_labs\tradeoff_analytics_widget\lab_tradeoff_analytics_widget.md)
