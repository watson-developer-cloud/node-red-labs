# Natural Language Understanding

## Overview
The Natural Language Classifier is a service that can analyze semantic features of text input, including - categories, concepts, emotion, entities, keywords, metadata, relations, semantic roles, and sentiment.

- [Overview](https://console.bluemix.net/docs/services/natural-language-understanding/index.html) of the Natural Language Understanding service.
- [Demo](https://natural-language-understanding-demo.ng.bluemix.net/) of the service.
- [API reference](https://www.ibm.com/watson/developercloud/natural-language-understanding/api/), which includes helpful information about curl and the SDKs.

## Getting Started
Before you can use the service through the node on node-RED you will need to create an instance of the service in IBM Cloud.

![ScreenShot](images/nlu_service_tile.png)

To bind the new service to your instance of Node-RED select the connections tab for your new service

 ![ScreenShot](images/nlu_connections.png)

and create the connection to your Node-RED instance.

![ScreenShot](images/nlu_create_connection.png)


## Building the Flow

### Required Nodes
Add the following nodes from the palette to your flow canvas

Two Inject nodes.

![ScreenShot](images/nlu_inject_node.png)


A Natural Language Understanding node.

![ScreenShot](images/nlu_nlu_node.png)

A Debug node.

![ScreenShot](images/nlu_debug_node.png)


### Flow Wiring
Wire the nodes together.

![ScreenShot](images/nlu_wiring.png)

### Node configuration
The first inject node will be used to inject a url into the flow.

![ScreenShot](images/nlu_url_inject.png)

The second inject node will be used to inject text into the flow.

![ScreenShot](images/nlu_text_inject.png)

Configure the Natural Language Understanding node for the service
features that you want to detect.

![ScreenShot](images/nlu_nlu_config.png)


Configure the debug node to show the complete msg object.

![ScreenShot](images/nlu_debug_config.png)

### Completed Configuration
You flow should look like

![ScreenShot](images/nlu_config_wiring.png)


## Trying your flow
The output from the URL inject should look like


![ScreenShot](images/nlu_url_response.png)

and the output from the Text inject should look like

![ScreenShot](images/nlu_text_response.png)


## Completed Flows
The complete flow is available at [flows](nlu_flow.json)
