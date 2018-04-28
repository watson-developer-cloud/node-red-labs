#  Lab: Watson Visual Recognition with Node-RED
## Overview
The Watson  Visual Recognition service allows to analyze the contents of an image and produce a series of text classifiers with a confidence index.

## Node-RED Watson Visual Recognition node
The Node-RED ![`VisualRecognition`](images/node_red_watson_visual_recognition.png) node provides a very easy wrapper node that takes an image URL or binary stream as input, and produces a set of image labels as output.

## Watson Visual Recognition Flow construction
In this exercise, we will show you how to simply generate the labels from an image URL.

### Prerequisites and setup
To get the Visual Recognition service credentials on IBM Cloud automatically filled-in by Node-RED, you should connect the Visual Recognition service to the Node-RED application in IBM Cloud.

![](images/reco_lab_visual_recognition_service.png)

Please refer to the [Node-RED setup lab](/introduction_to_node_red/README.md) for instructions.

### Building the flow
The flow will present a simple web page with a text field of where to input the image's URL, then submit it to Watson Visual Recognition. It will output the labels that have been found on the reply Web page.
![Reco-Lab-VisualRecognitionFlow.png](images/reco_lab_visual_recognition_flow.png)
The nodes required to build this flow are:

 - A ![`HTTPInput`](/introduction_to_node_red/images/node_red_httpinput.png) node, configured with a `/reco` URL
 - A ![`switch`](/introduction_to_node_red/images/node_red_switch.png) node which will test for the presence of the `imageurl` query parameter:
   ![Reco-Lab-Switch-Node-Props](images/reco_lab_switch_node_props.png)
 - A first ![template](/introduction_to_node_red/images/node_red_template.png) node, configured to output an HTML input field and suggest a few selected images taken from the main Watson Visual Recognition demo web page:
```HTML
<html>
    <head>
        <title>Watson Visual Recognition on Node-RED</title>
    </head>
    <body>
    <h1>Welcome to the Watson Visual Recognition Demo on Node-RED</h1>
        <h2>Select an image URL</h2>
        <form  action="{{req._parsedUrl.pathname}}">
            <img src="https://raw.githubusercontent.com/watson-developer-cloud/visual-recognition-nodejs/master/public/images/samples/1.jpg" height='100'/>
            <img src="https://raw.githubusercontent.com/watson-developer-cloud/visual-recognition-nodejs/master/public/images/samples/2.jpg" height='100'/>
            <img src="https://raw.githubusercontent.com/watson-developer-cloud/visual-recognition-nodejs/master/public/images/samples/3.jpg" height='100'/>
            <img src="https://raw.githubusercontent.com/watson-developer-cloud/visual-recognition-nodejs/master/public/images/samples/4.jpg" height='100'/>
            <br/>Copy above image location URL or enter any image URL:<br/>
            <input type="text" name="imageurl"/>
            <input type="submit" value="Analyze"/>
        </form>
    </body>
</html>
```
![Reco-Lab-Template1-Node-Props](images/reco_lab_template1_node_props.png)

- A ![change](/introduction_to_node_red/images/node_red_change.png) node (named `Extract img URL` here) to extract the `imageurl` query parameter from the web request and assign it to the payload to be provided as input to the Visual Recognition node:
![Reco-Lab-Change_and_Reco-Node-Props](images/reco_lab_change_and_reco_node_props.png)

 - The ![Watson Visual Recognition](images/node_red_watson_visual_recognition.png) node. Make sure that the credentials are setup from IBM Cloud, i.e. that the service is bound to the application. This can be verified by checking that the properties for the Visual Recognition node are clear:

 ![Visual Recognition node properties](images/reco_lab_visual_recognition_service_credentials.png)

 - And a final  ![`template`](/introduction_to_node_red/images/node_red_template.png) node linked to the ![`HTTPResponse`](/introduction_to_node_red/images/node_red_httpresponse.png) output node. The template will format the output returned from the Visual Recognition node into an HTML table for easier reading:
```HTML
<html>
    <head><title>Watson Visual Recognition on Node-RED</title></head>
    <body>
        <h1>Node-RED Watson Visual Recognition output</h1>
        <p>Analyzed image: {{payload}}<br/><img src="{{payload}}" height='100'/></p>
        <table border='1'>
            <thead><tr><th>Name</th><th>Score</th></tr></thead>
        {{#result.images.0.classifiers.0.classes}}
        <tr><td><b>{{class}}</b></td><td><i>{{score}}</i></td></tr>
        {{/result.images.0.classifiers.0.classes}}
        </table>
        <form  action="{{req._parsedUrl.pathname}}">
            <input type="submit" value="Try again"/>
        </form>
    </body>
</html>
```
![Reco-Lab-TemplateReport-Node-Props](images/reco_lab_templatereport_node_props.png)  
Note that the HTML snippet above has been simplified and stripped out of non-essential HTML tags, the completed flow solution has a complete HTML page.

### Testing the flow
To run the web page, point your browser to  `/http://xxxx.mybluemix.net/reco` and enter the URL of some  image.
The URL of the pre-selected images can be copied to clipboard and pasted into the text field.

The Watson Visual Recognition API will return an array with the recognized features, which will be formatted in a HTML table by the template:

![Visual RecognitionScreenshot ](images/reco_lab_visual_recognition_screenshot.png)

### Flow source
The complete flow is available [here](reco_lab_web_page.json).

## Visual Recognition Documentation
To find more information on the Watson Visual Recognition underlying service, visit these webpages :
- [Visual Recognition Documentation](https://console.bluemix.net/docs/services/visual-recognition/index.html#about)
- [Visual Recognition API Documentation](https://www.ibm.com/watson/developercloud/visual-recognition/api/v3/)
