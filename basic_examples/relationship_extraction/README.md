#Relationship Extraction

NOTE : This Lab is still under constructions - DO NOT USE for the moment

Relationship Extraction leverages Watson machine learning technologies. The API can analyze news articles and use statistical modeling to perform linguistic analysis of the input text. It then finds spans of text and clusters them together to form entities, before finally extracting the relationships between them.  

Documentation -> [https://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/relationship-extraction.html](https://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/relationship_extraction.html)

Demo -> [http://ibmlaser.mybluemix.net/siredemo.html](http://ibmlaser.mybluemix.net/siredemo.html)

Open your Application and add the Relationship extraction Service to your application.  Got to you Node-RED application and click on "Add a Service or API"

![ScreenShot](images/re_add_service.png)

Pick the Relationship  section

![ScreenShot](images/re_service.png)

Your application will be shown, click "Use" to bind the Alchemy API Service to your application

![ScreenShot](images/re_add_service_use.png)

You will be prompted to Restage the application, click Restage.  Wait till the you see "Your app is running"

Click on your App link

![ScreenShot](images/re_app_link.png)

Click on the "go to your Node-RED flow editor" button

![ScreenShot](images/re_go_to_node_red_flow_editor.png)

Drag an Inject node to the palette

![ScreenShot](images/re_inject_node.png)

Drag a Relationship Extract node to the palette

![ScreenShot](images/re_node.png)

Finally drag a Debug node to the palette

![ScreenShot](images/re_debug_node.png)

Join the nodes as shown below

![ScreenShot](images/re_join_nodes.png)

Open this file NOT DONE YET

Double-click the Inject node and change the payload to Blank
NOT DONE YET

Copy the following text to your clipboard (hightlight, ctrl-c)

**AlchemyAPI uses natural language processing, artificial intelligence, deep learning and massive-scale web crawling to power it's text analysis capabilities. Try entering your own text in this text box to see what knowledge AlchemyAPI can extract from your unstructured data.**
