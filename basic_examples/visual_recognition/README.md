#  Lab: Watson Visual Recognition with Node-RED
## Overview
The Watson  Visual Recognition service allows to analyse the contents of an image and produce a series of text classifiers with a confidence index.

## Node-RED Watson Visual Recognition node
The Node-RED ![`VisualRecognition`](images/node_red_watsonvisualrecognition.png) node provides a very easy wrapper node that takes an image URL or binary stream as input, and produces a set of image labels as output.

## Watson Visual Recognition Flow construction
In this exercise, we will show how to simply generate the labels from an image URL.

### Prerequisites and setup
To get the service credentials automatically filled-in by Node-RED from the BlueMix credentials, the Visual Recognition Service should be bound to the Node-RED application in BlueMix.

![](images/reco_lab_visualrecognitionservice.png)

Please refer to the [Node-RED setup lab](../../node_RED_labs/lab_node_RED.md) for instructions.

### Building the flow
The flow will present a simple Web page with a text field where to input the image's URL, then submit it to Watson Visual Recognition, and output the labels that have been found on the reply Web page.
![Reco-Lab-VisualRecognitionFlow.png](images/reco_lab_visualrecognitionflow.png)
The nodes required to build this flow are:

 - A ![`HTTPInput`](../../node_RED_labs/images/node_red_httpinput.png) node, configured with a `/reco` URL
 - A ![`switch`](../../node_RED_labs/images/node_red_switch.png) node which will test for the presence of the `imageurl` query parameter:
   ![Reco-Lab-Switch-Node-Props](images/reco_lab_switch_node_props.png)
 - A first ![template](../../node_RED_labs/images/node_red_template.png) node, configured to output an HTML input field and suggest a few selected images taken from the main Watson Visual Recognition demo web page:
```HTML
    <h1>Welcome to the Watson Visual Recognition Demo on Node-RED</h1>
    <h2>Select an image URL</h2>
    <form  action="{{req._parsedUrl.pathname}}">
        <img src="http://visual-recognition-demo.mybluemix.net/images/horses.jpg" height='100'/>
        <img src="http://visual-recognition-demo.mybluemix.net/images/73388.jpg" height='100'/>
        <img src="http://visual-recognition-demo.mybluemix.net/images/26537.jpg" height='100'/>
        <img src="http://visual-recognition-demo.mybluemix.net/images/4068.jpg" height='100'/>
        <br/>Copy above image location URL or enter any image URL:<br/>
        <input type="text" name="imageurl"/>
        <input type="submit" value="Analyze"/>
    </form>
```
![Reco-Lab-Template1-Node-Props](images/reco_lab_template1_node_props.png)
 
- A ![change](../../node_RED_labs/images/node_red_change.png) node (named `Extract img URL` here) to extract the `imageurl` query parameter from the web request and assign it to the payload to be provided as input to the Visual Recognition node:
![Reco-Lab-Change_and_Reco-Node-Props](images/reco_lab_change_and_reco_node_props.png)

 - The ![Watson Visual Recognition](images/node_red_watsonvisualrecognition.png) node. Make sure that the credentials are setup from bluemix, i.e. that the service is bound to the application. This can be verified by checking that the properties for the Visual Recognition node are clear:
 ![Visual Recognition node properties](images/reco_lab_visual_recognition_service_credentials.png)

 - And a final  ![`template`](../../node_RED_labs/images/node_red_template.png) node linked to the ![`HTTPResponse`](../../node_RED_labs/images/node_red_httpresponse.png) output node. The template will format the output returned from the Visual Recognition node into an HTML table for easier reading:
```HTML
    <h1>Node-RED Watson Visual Recognition output</h1>
    <p>Analyzed image: {{payload}}<br/><img src="{{payload}}" height='100'/></p>
    <table border='1'>
        <thead><tr><th>Name</th><th>Score</th></tr></thead>
        {{#labels}}
          <tr><td><b>{{label_name}}</b></td><td><i>{{label_score}}</i></td></tr>
        {{/labels}}
    </table>
    <form  action="{{req._parsedUrl.pathname}}">
        <input type="submit" value="Try again"/>
    </form>
```
![Reco-Lab-TemplateReport-Node-Props](images/reco_lab_templatereport_node_props.png)  
Note that the HTML snippet above has been simplified and stripped out of non-essential HTML tags, the completed flow solution has a complete HTML page.

### Testing the flow
To run the web page, point your browser to  `/http://xxxx.mybluemix.net/reco` and enter the URL of some  image.
The URL of the pre-selected images can be copied to clipboard and pasted into the text field.

The Watson Visual Recognition API will return an array with the recognized features, which will be formatted in a HTML table by the template:
![Visual RecognitionScreenshot ](images/reco_lab_visualrecognition_screenshot.png)

### Flow source
The complete flow is available at [Reco-Lab-WebPage](Reco_Lab_WebPage.json).
