# Sending a file to Watson Recongition for classification

Note: This lab assumes you have prior knowledge of the Visual Recognition Service and/or have completed the [Visual Recognition lab](https://github.com/watson-developer-cloud/node-red-labs/tree/master/basic_examples/visual_recognition). You will need a Bluemix account with a Node-RED application connected to the Visual Recognition service to complete this lab.

## Overview
This flow will allow you to create a webpage, select a picture from your file system and submit it into Node-RED. You will receive the image classifications both on the webpage and in the Node-RED debug tab. The lab makes use of an HTTP Multipart node and a file buffer node.

## Step 1 - Create the HTML webpage
Add an http input, template node and http response node to the Node-RED canvas and wire them together.
![`HTTP Flow`](images/http_in_flow.png)

Double click on the HTTP in node and configure it as follows:
![`HTTP In Settings`](images/http_in_settings.png)

Double click on the template node. Name the node 'Form and Response Template' and paste in the html from [here](files/form_response_template.js)

## Step 2 - Install the Nodes
Click on options in the top right corner of the Node-RED instance and click 'Manage Palette'
![`Manage Palette`](images/manage_palette.png)

Click install and search for file-buffer. Then install the node.

![`File Buffer Install`](images/file_buffer.png)

After it has installed, search for node-red-contrib-http-multpart and install that node.

## Step 3 - Build the Full Flow
Add to the canvas:
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

Double click on the function node. Name the node 'Determine File Path' and paste in the code from [here](files/determine_file_path.js)

For the File Buffer node, ensure that it is set to 'buffer' rather than 'stream'.
![`File Buffer Settings`](images/buffer_settings.png)

Configure the settings for the Visual Recongition Node. If you have bound your Node-RED application to your Visual Recongition service, you will not need to enter an API key. If you haven't bound them, enter the API key. Make sure that the 'Detect' field is set to 'Classify an Image'.

![`Visual Recognition Settings`](images/visual_recognition_settings.png)

For the debug node, change the output from msg.paylodad to msg.result.
![`Debug Settings`](images/debug_settings.png)

Deploy the application and test the flows out by going to: https://<your_application>.<region>.mybluemix.net/homepage and uploading an image. After uploading the image and pressing submit. The webpage should redirect to /classify and in the Node-RED debug tab, the same classifications.

![`Webpage Results`](images/webpage_results.png)
![`Debug Results`](images/debug_results.png)

The final flow is shown below and can be downloaded from [here](files/full_flow.js).
![`Final Flow`](images/final_flow.png)
