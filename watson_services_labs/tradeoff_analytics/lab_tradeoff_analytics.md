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


# Using the Trade-Off Analytics Widget with Node-RED
The Trade-Off Analytics service comes with a very versatile user interface widget which can be used to display the trade-off analytics results and let the user interact with them.

To use it, a web page will need to generated with some javascript code to create the widget and manage its initialization.
One point to keep in mind is that the widget operations, running within the client browser, are mostly asynchronous, so an event-driven chain of handlers should be used to properly initialize the widget.  
Once a problem will have been set client-side on the widget, it will call-back to the `./dilemmas` URL on the Node-RED flow, and optionally on the `./events` URL. The `./dilemmas` URL will call the Watson Tradeoff Analytics service and provide the answer to the widget which then display it and let the user interact with the results.

## Trade-Off Analytics Widget flow construction
The flow to achieve this has three streams:  
![](images/toff_widget_flow.png)

### User-interface serving stream
The stream connected on the `/tofaw` URL will serve a web page containing the TradeOff Analytics Widget HTML and JavaScript initialization code, and for the purpose of the exercise, a ready-made `problem` extracted from a problem object.  
A problem object has 3 attributes, a `subject` string, a `columns` array describing the characteristics of the entities to consider, and a `options` array which represent the user's options (i.e. choices, as rows in the table) for the given problem:  
```HTML
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>Node-RED TradeOff Analytics Widget demo</title>
    <script type="text/javascript" src="http://ta-cdn.mybluemix.net/v1/TradeoffAnalytics.js"></script>
    <script>
    // get the problem object from Node-RED msg.problem
    // note the triple-curly braces syntax to avoid HTML escaping
    var problemObj={{{problem}}};
    
    // This variable will hold the TA client reference
    var taClient;
    
    // This creates the widget. We call asynchronously from the onload of the body
    function loadTradeoffAnalytics() {
		document.body.style.cursor="wait" ;
        taClient = new TradeoffAnalytics(
            {dilemmaServiceUrl: '{{{req._parsedUrl.pathname}}}/dilemmas',
             analyticsEventsUrl: '{{{req._parsedUrl.pathname}}}/events'
            }, 
            'tofaWidget');
        taClient.start(onTAReady);
    }

    // this is called-back when the widget is ready
    function onTAReady() {
        taClient.show(problemObj, onTAShown);
    }

    // this is called-back when the problem has shown in the widget
    function onTAShown() {
		document.body.style.cursor="default";
        taClient.resize();
    }
    
    // trigger the tofa widget setup when window has loaded
    window.onload=loadTradeoffAnalytics;
</script>
</head>
<body>
    <div id="tofaWidget" style="height:100vh"></div>
</body>
</html>
```
  - We include the widget's script located at "http://ta-cdn.mybluemix.net/v1/TradeoffAnalytics.js"
  - The widget initialization starts with the `loadTradeoffAnalytics()` call, triggered by `window.onload`.  
  - This invokes the constructor, with parameters to set the dilemmas and events callback URLs, and the id of the placeholder widget's <div>, 
  - The `start()` method is called, which will asynchronously build the widget and pull its dependencies.
  - On the TAReady event notification, we invoke `show(problem)`.  This will cause the widget to call-back on the server's `tofaw/dilemmas` URL with the problem for resolution.
  - Once the data has come back from the dilemmas server, the widget shows the problem and triggers onTAShown(), which is used to resize the widget to fit.

### Dilemmas serving stream
This flow on `tofaw/dilemmas` will make some parameters adjustments through a `change` node, setting `subject`, `columns` and `options` from the `payload`, storing the incoming `problem` for later use, and then calling the ![tradeoff analytics](images\node-red_tradeoffanalytics.png) through its Node-RED service node. On return, another `change` node will adjust the returned payload parameters's `problem`and `resolution` to fit the format expected by the widget and return it as a JSON object.

### Events serving stream
Notifications of events that happen on the widget will be received on that last stream at `/ tofaw/events`. Currently the flow does not do anything about the events, you can add a debug node to log the contents of the notifications.

## Testing the widget
Deploy the flow and point your browser at `http://xxx.mybluemix.net/tofaw`. Rendering of the widget should start and eventually yield a screen such as:  
![Trade-Off Analysis Widget Screenshot](images\toff_widget_screenshot.png)

## Trade-Off Analytics Widget flow file
The complete flow is in the file [Trade-Off Analytics Widget](TradeOffAnalyticsWidget.json)