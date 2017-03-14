# Natural Language Understanding

## Overview
The Natural Language Classifier is a service that can analyze semantic features of text input, including - categories, concepts, emotion, entities, keywords, metadata, relations, semantic roles, and sentiment.

- [Overview](https://www.ibm.com/watson/developercloud/doc/natural-language-understanding/) of the Natural Language Understanding service.
- [Demo](https://natural-language-understanding-demo.mybluemix.net/) of the service.
- [API reference](https://www.ibm.com/watson/developercloud/natural-language-understanding/api/), which includes helpful information about curl and the SDKs.

## Getting Started
Before you can use the service through the node on node-RED you will need to create an instance of the service in Bluemix.

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

A function node.

![ScreenShot](images/nlu_inject_node.png)

A Natural Language Understanding node.

![ScreenShot](images/nlu_nlu_node.png)

A Debug node.

![ScreenShot](images/nlu_debug_node.png)


### Flow Wiring
Wire the nodes together.

![ScreenShot](images/nlu_wiring.png)

### Node configuration


## Completed Flows
The complete flow is available at ...
