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

Changes the word "subject" to "payload" and save the file.  For an already modified file see ->  ([toff_JSON_input.tx](toff_JSON_input.txt)t)

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

Drag an inject noe





