# Lab: Sending a file to Watson Recognition for classification

## Overview
This flow will allow you to create a webpage, select a picture from your file system and submit it into the Visual Recognition service via Node-RED. You will receive the image classifications both on the webpage and in the Node-RED debug tab. The lab makes use of an HTTP Multipart node and a file buffer node.

### Prerequisites and setup
This lab assumes you have prior knowledge of the Visual Recognition Service and/or have completed the [Visual Recognition lab](/basic_examples/visual_recognition.README.md).

Before starting this lab, you should:
- have an IBM Cloud account
- created an instance of Node-RED
- created a Visual Recognition service in IBM Cloud

Please refer to the [Node-RED setup lab](/introduction_to_node_red/README.md) for instructions.

## Step 1 - Create the HTML webpage
Add a HTTP input, template node and HTTP response node to the Node-RED canvas and wire them together.
![`HTTP Flow`](images/http_in_flow.png)

Double click on the HTTP in node and configure it as follows:
![`HTTP In Settings`](images/http_in_settings.png)

Double click on the template node and name the node 'Form and Response Template'. Paste in the following HTML:  

```HTML
<html>
    <body>
       <form action="/classify" method="post" enctype="multipart/form-data">
           <input type="file" name="pic" accept="image/*"><br>
           <input type="submit" value="Submit">
       </form>
       <div>Classifications:</div>
       <div>
           {{#result}}
           <table>
           <tr>
               <th>Class</th>
               <th>Score</th>
               <th>Type</th>
           </tr>
           {{#images}}
           {{#.}}
           {{#classifiers}}
           {{#.}}
           {{#classes}}
           {{#.}}
               <tr>
                   <td>{{class}}</td>
                   <td>{{score}}</td>
                   <td>{{&type_hierarchy}}</td>
               </tr>
           {{/.}}
           {{/classes}}
           {{/.}}
           {{/classifiers}}
           {{/.}}
           {{/images}}
           </table>
           {{/result}}
       </div>
    </body>
</html>
```

## Step 2 - Install new nodes
In Node-RED, go to `Options` and `Manage Palette`.

Click install and search for `node-red-contrib-file-buffer`. Then install the node.

![`File Buffer Install`](images/file_buffer.png)

After it has installed, search for `node-red-contrib-http-multpart` and install that node.

![`HTTP Multipart Install`](images/http_multipart_node.png)

## Step 3 - Build the Full Flow
Add on to the canvas:
- HTTP Multipart Node
- Function Node
- File Buffer Node
- Visual Recognition Node
- Debug Node

and wire them together as follows:
![`Full Flow`](images/full_flow.png)

## Step 4 - Configure the nodes
Double click on the HTTP Multipart node and configure it as follows:
![`HTTP Multipart Settings`](images/http_multipart_settings.png)

Double click on the function node. Name the node 'Determine File Path' and paste in the following code:
```JavaScript
if (msg.req.files) {
    var files = Object.keys(msg.req.files);
    msg.payload = msg.req.files[files[0]][0].path;
}
return msg;
```

For the File Buffer node, ensure that it is set to 'buffer' rather than 'stream'.
![`File Buffer Settings`](images/buffer_settings.png)

Configure the settings for the Visual Recognition Node. If you haven't bound your Node-RED application to your Visual Recongition service, you need to enter an API key. Make sure that the 'Detect' field is set to `Classify an Image`.

![`Visual Recognition Settings`](images/visual_recognition_settings.png)

For the debug node, change the output from msg.payload to msg.result.
![`Debug Settings`](images/debug_settings.png)

Deploy the application and test the flows out by going to: `https://<your_application>.<region>.mybluemix.net/homepage` and uploading an image from your file system. After uploading the image and pressing submit, the webpage should redirect to /classify with the image classifications and in the Node-RED debug tab, you should see the same classifications.

![`Webpage Results`](images/webpage_results.png)
![`Debug Results`](images/debug_results.png)

The final flow is shown below and can be downloaded [here](files/full_flow.json).
![`Final Flow`](images/final_flow.png)
