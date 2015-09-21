#Tradeoff Analytics

The Tradeoff Analytics service helps people optimize their decisions while striking a balance between multiple, often conflicting, objectives, a full description is described here -> 
http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/tradeoff-analytics.html

The objective of this lab is to pass the same data as in the demo (http://tradeoff-analytics-demo.mybluemix.net/) to the Node-RED Watson node and see what results are obtained.

First go to the demo website and select the Phones scenario from the "Select a scenario" drop down

(image/toff_scenario_phones.png)

Scroll down and paste the table and click on "View / Edit JSON" option

(images/toff_view_edit_json.png)

Cut/paste the JSON text to a text editor of your choice.

Edit the file and go to the secoond line (showing "subject: "phone",")

Changes the word "subject" to "payload" and save the file

Open your Application and add a TradeOff Service to it :
