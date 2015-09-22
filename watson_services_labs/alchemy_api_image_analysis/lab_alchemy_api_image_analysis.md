<<<<<<< HEAD
#  Node-RED Alchemy Vision (Image Analysis) Lab
## Overview
The Alchemy Vision service allows to analyse the contents of an image and extract features from it. The Face Detection service is able to identify multiple faces within the image, and determine their gender and age with a confidence score, and identify celebrities.

### Node-RED Alchemy Image Analysis (Vision) node
The Node-RED ![`Alchemy Image Analysis`](images/node-red_Alchemy_Image_Analysis.png) node provides a very easy wrapper node that takes an image URL or binary stream as input, and produces a array of detected faces , age, bounding box, gender and name.

### Basic Alchemy Image Analysis Flow
In this exercise, we will show how to simply generate the face recognition data from an image URL. The structure of the flow is very similar to the Watson Visual Recognition flow.  
The flow will present a simple Web page with a text field where to input the image's URL, then submit it to Alchemy Image Analysis, and output the faces that have been found on the reply Web page.

![AlchVis-FaceDetectionFlow](images/AlchVis-FaceDetectionFlow.png)  
The nodes required to build this flow are:

 - A ![`HTTPInput`](images/node-red/HTTPInput.png) node, configured with a `/alchvision` URL
 - A ![`switch`](images/node-red/switch.png) node which will test for the presence of the `imageurl` query parameter:  
   ![AlchVis-Lab-Switch-Node-Props](images/AlchVision/AlchVis-Lab-Switch-Node-Props.png)
 - A first ![template](images/node-red/template.png) node, configured to output an HTML input field and suggest a few selected images taken from official sources:
```HTML
<h1>Welcome to the Alchemy Vision Face Detection Demo on Node-RED</h1>
<H2>Select an image</H2>
<form  action="{{req._parsedUrl.pathname}}">
    <img src="http://www.ambafrance-mt.org/local/cache-vignettes/L945xH539/family_photo8851-b0e9b.jpg" height='100'/>
    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/34th_G8_summit_member_20080707.jpg" height='100'/>
    <img src="http://demo1.alchemyapi.com/images/vision/politicians.jpg" height='100'/>
        <br/>Copy above image location URL or enter any image URL:<br/>
    Image URL: <input type="text" name="imageurl"/>
    <input type="submit" value="Analyze"/>
</form>
```
![AlchVis-Lab-TemplatePrompt-Node-Props](images/AlchVision/AlchVis-Lab-TemplatePrompt-Node-Props.png)

 - The ![`Alchemy Image Analysis`](images/node-red/Alchemy_Image_Analysis.png) node, preceded by a ![change](images/node-red/change.png) node to extract the `imageurl` query parameter from the web request and assign it to the payload to be provided as input to the Alchemy Image Analysis node:
 
![AlchVis-Lab-Change_and_IA-Node-Props](images/AlchVision/AlchVis-Lab-Change_and_IA-Node-Props.png)

 - And a final  ![`template`](images/node-red/template.png) node linked to the ![`HTTPResponse`](images/node-red/HTTPResponse.png) output node. The template will format the output returned from the Image Analysis node into an HTML table for easier reading:
```HTML
    <h1>Alchemy Image Analysis</h1>
    <p>Analyzed image: {{payload}}<br/><img id="alchemy_image" src="{{payload}}" height="50"/></p>
    {{^result}}
        <P>No Face detected</P>
    {{/result}}
    <table border='1'>
        <thead><tr><th>Age Range</th><th>Score</th><th>Gender</th><th>Score</th><th>Name</th></tr></thead>
        {{#result}}<tr>
            <td><b>{{age.ageRange}}</b></td><td><i>{{age.score}}</i></td>
            <td>{{gender.gender}}</td><td>{{gender.score}}</td>
            {{#identity}}<td>{{identity.name}} ({{identity.score}})</td>{{/identity}}
        </tr>{{/result}}
    </table>
    <form  action="{{req._parsedUrl.pathname}}">
        <input type="submit" value="Try again"/>
    </form>
```
![AlchVis-Lab-TemplateReport-Node-Props](images/AlchVision/AlchVis-Lab-TemplateReport-Node-Props.png)

To run the web page, point your browser to  `/http://xxxx.mybluemix.net/alchvision` and enter the URL of some  image. The URL of the listed images can be copied to clipboard and pasted into the text field.  
The complete flow is available at [AlchVis-Lab-WebPage](flows/AlchVision/AlchVis-Lab-WebPage.json).

#### Extended Alchemy Vision Face Detection Lab:
The Alchemy Vision API also yields the bounding rectangle for the detected faces, so we can enhance  the HTML page with some JavaScript and canvas to highlight these. The HTML page code for the 'Report Faces' template would need to be updated with the following snippet:  
```HTML
```
This enhanced flow is available at  
[AlchVis-Lab-WebPageFaceBoxes](flows/AlchVision/AlchVis-Lab-WebPageFaceBoxes.json).
=======
#Alchemy API Image Analysis

Lab instructions TO DO
>>>>>>> master
