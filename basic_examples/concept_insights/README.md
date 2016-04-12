# Concept Insights service

## Overview
The IBM Watson™ Concept Insights service enables you to identify conceptual associations in the content that you provide. Input content is auto-tagged against a concept graph, which is a formal representation of the relationships between concepts that are present in the data. The concept graph used by the Concept Insights service is based on content that has been ingested from the English language Wikipedia.

## Installation of the Concept Insights Nodes
Follow the instructions at [watson contribution nodes](/watson_contribution_nodes/README.md) 
to install the concept insights nodes into your Bluemix instance of Node-RED. 

## Lab 1: Discover TED talks using topics, words or concepts
This lab will use a given flow contained in this directory. Copy the contents of `concept-insights-ted-talks-lab-1.json` to the clipboard. In the Node-RED flow editor, import the flow as follows:


![Import Flow](images/importflow.png)

and paste in the contents of `concept-insights-ted-talks-lab-1.json`. Once imported, click "Deploy" in the top right corner. This flow sets up a HTTP endpoint for your application that returns relevant TED Talks that contain concepts similar to the given search term.  Once deployed, you can visit http://localhost:1880/TEDTalks?concept=computer if running locally or http://<bluemixhostname>.mybluemix.net/TEDTalks?concept=computer to see TED Talks related to the term "Computer". Try changing the concept parameter to see TED Talks relating to different topics. 

### How the flow works
First of all, the incoming HTTP request is parsed and the concept parameter is extracted.

![Extract query term from HTTP request](images/extractquery.png)

Then, the Concept Insights Search Concepts node is used to find concepts related to the given search term. These concepts are returned as an array.

![Find concepts related to query term](images/searchconcepts.png)

The concepts returned are then passed to the Concept Insights Search node where a conceptual search query is performed. This finds all TED Talks that contain concepts specified in the input `msg.concepts`.

![conceptualsearch](images/conceptualsearch.png)

Finally, the result of the conceptual search query is passed to the HTTP response and returned to the user.



