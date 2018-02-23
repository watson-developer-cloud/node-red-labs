# Lab: Watson Language Translator with Node-RED

## Overview
The Language Translator service can identify language of a text or provides domain-specific translation between languages. Currently, three domains are available. For best results, a domain that matches the content to be translated should be chosen. The service includes a new Glossary-Based Customization function, which requires the Translator service to be connected via the advanced plan.

To get the latest on languages and domains supported please refer the latest documentation [Language Translator Documentation](https://console.bluemix.net/docs/services/language-translator/index.html)

To get the Watson Translator service credentials on IBM Cloud automatically filled-in by Node-RED, you should connect the service to the Node-RED application in IBM Cloud.

## Node-RED Watson Language Translator nodes
The Node-RED ![`Translator`](images/translator-nodes.png) nodes provide a set of easy wrapper nodes to 
* translate text within a domain or
* identify the language of a text.
the service will also provide a confidence level of it's result.

## Watson Translator Flow Construction
In this exercise we have 5 basic flows using the Identify or Translator nodes broken into 3 sections
1. Translate text
2. Identify the language
3. Managing Custom Models 
   * Create a custom model
   * Get the Status of a model
   * Delete an existing model

## Building the Translator flow 

![`translator-flow`](images/translator-flow.jpg)

In this example some text (in English in this case) is injected, translated (to French) and put the result to the Debug tab. In the following screenshots you can see how the nodes are configured.

### The first inject node:

![`tf-inject01`](images/tf-inject01.jpg)

You can use any text for this node. I have used 
> Hello I am Watson. I am very happy to translate you this message. Have a lovely day. Bye.

**Tips** : use double quotes for terms you do not want to be translated by Watson.

### The language translator node:

![`tf-translate`](images/tf-translate.jpg)

If you use the given text then set the node parameters
* Mode = Translate
* Domains = Conversational
* Source = English 
* Target = French

### The Debug node: 
As the translated text will be returned on message.payload, make sure that you select this in the Debug node. The output from the debug node will then be:

![`tf-debug01`](images/tf-debug01.jpg)

It is also possible to change the config dynamically, 
### duplicate the Inject node 

### Add a function node:

![`tf-function`](images/tf-function.jpg) 

and set 
* msg.srclang = 'en'
* msg.destlang = 'es'
this will translate your text from English to Spanish. 

You can also copy the code for the flow here and import it from clipboard into Node-RED:

[Language Translator flow](language_translator-flow.txt)

## Building the Identify flow
This example will have 3 inputs with different languages. The language identify flow should look like 

![`identify-flow`](images/identify-flow.jpg)

### First inject node
Add an inject node to the canvas. Double-click the node, then change the name to identify the block, change the input type to string   and add your required text. I have used the English text:

> Give me one good reason why I should never make a change

![`if-en-inject`](images/if-en-inject.jpg) 

### Second inject node
Add another inject node to the canvas. Double-click the node, then change the name to identify the block, change the input type to string and add your required text. I have used the Afrikaans text: 

> As jy in die bende wil wees, moet jy cool wees, soos pappa!

![`if-af-inject`](images/if-af-inject.jpg) 

### Third inject node
Add another inject node to the canvas. Double-click the node, then change the name to identify the block, change the input type to string and add your required text. I have used the Italian text: 

> Dovresti solo spegnere le dannate porte!

![`if-it-inject`](images/if-it-inject.jpg) 

### Add the Language Identification node
Drag and drop a Language Identification node from the nodes palette, and wire it to your input node. It does not require any modification.

### Add first debug node
Drag and drop a debug node from the nodes palette, and wire it to your Language Identification node. Double-click the node, then change the output to msg.lang. This will give you primary language identified.

### Add second debug node
Drag and drop a debug node from the nodes palette, and wire it to your Language Identification node. Double-click the node, then change the output to msg.languages. This will give you an array of all languages identified in order of the confidence level.

You can also copy the code for the flow here and import it from clipboard into Node-RED:

[identify-flow](identify-flow.txt)

## Building flows to customize your domain

This example will show 3 flows to train a custom domain, get the status of a domain and delete custom models. The custom model flows should look like 

![`custom-models`](images/custom-models.jpg)

**Note**: If you want to do the training part of this lab, then make sure than you select the **Advanced plan** when creating the service. 

Are you creating a customer support translator, and do you have company-specific terms that you want dealt with in a certain way in conversations? Are you creating a way for your engineers in one country to look up patent data in another language, and you usually file patents on a specific technology? You can use your own data to create a custom dictionary, and a custom translation model in the Watson Language Translator API.

**Note:** If you haven't done it yet, set up the Dropbox node as shown [here](https://github.com/watson-developer-cloud/node-red-labs/tree/master/utilities/dropbox_setup).

### Training

Drag and drop an inject node on your palette, this node won't need any configuration it is just here to start the flow. However I have named my example Create.

#### Add a Dropbox node 
Put your credentials and the name of your file (or path to your file if it's in a subfolder), your node configuration should look like this:

![`cm-dropbox-complete`](images/cm-dropbox-complete.jpg)

Dropbox setup documentation : [here](https://github.com/watson-developer-cloud/node-red-labs/tree/master/utilities/dropbox_setup).

Note: You can get a sample TMX file from the documentation [here](https://console.bluemix.net/docs/services/language-translator/customizing.html).

Download the TMX file  [here](https://raw.githubusercontent.com/watson-developer-cloud/node-red-labs/master/utilities/box_setup/glossary.tmx).

#### Add a Language Translator node 
To get the file from the Dropbox node and send it to the service. This node should be configured 
* Mode = Train
* Base Model = English to French 
* File type = Forced Glossary

![`cm-train`](images/cm-train.jpg)

#### Add debug node
Drag and drop a debug node and set to msg.payload. This will show the model_id of the new file that has been created. You will need this if you want use the model elsewhere.

### Get the status of a model

**Note:** In order to get the status of a model you've sent for training, you'll need to provide its ID. This was would output from the Training flow, make sure that you've saved it somewhere. 

Drag and drop an inject node on your palette, this node won't need any configuration it is just here to start the flow. However I have named my example Status.

#### Add a Language Translator node 
This node should be configured 
* Mode = Get Status
* Model ID = use the model-id from the training flow 

![`cm-status`](images/cm-status.jpg)

#### Add debug node
Drag and drop a debug node and let it set to msg.payload. This will give you the status of the model, it can be either:

 - training - Training is still in progress.
 - queued@<#> - Training has not yet started and the model is in the queue. The # indicates the number of your model in the queue.
 - error - Training did not complete because of an error.
 - available - Training is completed, and the service is now available to use with your custom translation model.
 
### Delete a model

**Note:** In order to get the status of a model you've sent for training, you'll need to provide its ID. This was would output from the Training flow, make sure that you've saved it somewhere.

Drag and drop an inject node on your palette, this node won't need any configuration it is just here to start the flow. However I have named my example Delete.

#### Add a Language Translator node 
This node should be configured 
* Mode = Delete
* Model ID = use the model-id from the training flow 

![`cm-delete`](images/cm-delete.jpg)

#### Add debug node
Drag and drop a debug node and let it set to msg.payload. This will only return an error if the model couldn't be deleted (modelid not found).

### Available Flows

- Building the Translator flow ![`translator-flow`](translator-flow.json)
- Building the Identify flow ![`identify-flow`](identify-flow.json) 
- Building flows to customize your domain ![`training-flow`](training-flow.json)

## Language Translator Documentation

To have more information on the Watson Language Translator underlying service, you can check these two references :
- [Language Translator Documentation](https://console.bluemix.net/docs/services/language-translator/index.html)
- [Language Translator API Documentation](https://www.ibm.com/watson/developercloud/language-translator/api/v2)
