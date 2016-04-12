# Tone Analyser service

## Overview

The IBM Watson™ Tone Analyzer Service uses linguistic analysis to detect three types of tones from written text: emotions, social tendencies, and writing style. Emotions identified include things like anger, fear, joy, sadness, and disgust. Identified social tendencies include things from the Big Five personality traits used by some psychologists. These include openness, conscientiousness, extraversion, agreeableness, and emotional range. Identified writing styles include confident, analytical, and tentative.

Input email and other written media into the Tone Analyzer service, and use the results to determine if your writing comes across with the emotional impact, social tone, and writing style that you want your intended audience to see. 

The node is available as a Watson Developer Cloud contribution to Node-RED and needs to be installed. 

## Installation of the Dialog Node

Follow the instructions at [watson contribution nodes](/watson_contribution_nodes/README.md) 
to install the dialog node into your Bluemix instance of Node-RED. 

## How to use the Tone Analyser node ?

Copy an inject node :

![Input to tone analyser node](images/tone_analyser_1.png)

You must provide in Input of the Tone Analyser (msg.payload) either :

- a string
- a Node.js Buffer

The provided Flows file (see below) proposes you amongst 3 differents way to connect the Input of the Tone Analyser node:

- Function node : you directly specify the string in the msg.payload
- Drobox node : you use a Dropbox account that hold the text file you want to be processed
- Buffer : you can provide any text source in binary format, but it should be a Node.js Buffer. (ex : the HTTP REQUEST node using the binary mode)

# Connect a Function node as input

![tone analyser connection](images/tone_analyser_2.png)

# Connect a Dropbox node as input

![tone analyser connection](images/tone_analyser_3.png)

To configure a Dropbox node please follow the [Dropbox nodes setup](https://github.com/watson-developer-cloud/node-red-labs/tree/master/utilities/dropbox_setup) procedure.

# Connect a (Node.js) Buffer as input

You can take a HTTP REQUEST node and configure it such :
- mode : GET
- URL : specify a valid URL where the text file is accessible
- Return : select Binary

![tone analyser connection](images/tone_analyser_4.png)

Drag and drop a Tone Analyser node from the nodes palette, and wire it with your input node.

![tone analyser connection](images/tone_analyser_5.png)

Add a Debug Node, and configure it to msg.response to see only the results data from the Tone Analyser node.

![tone analyser connection](images/tone_analyser_6.png)

Now, configure the options proposed in the Tone Analyser node.

Now configure your Tone Analyser node by selecting in the dropdown list 
- the Tones (All / Emotion / Social / Writing): by default All. 
- the Sentences Flag (True / False) : by default the value is True

Availables options for Tones
![tone analyser configuration 1](images/tone_analyser_7.png)

Availables options for Sentences
![tone analyser configuration 2](images/tone_analyser_8.png)

# Available Flows :
- [Tone Analyser Flow](flow.json) : illustrates all kind of inputs availables for the Tone Analyser node.

<n>Notice</b> : as this flow suggest it, you can also use Dropbox  : How to setup your Node-RED with [Dropbox nodes](https://github.com/watson-developer-cloud/node-red-labs/tree/master/utilities/dropbox_setup)


