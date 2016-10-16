# Language Translator

The Language Translator service enables you to translate text from one language to another. See Watson Translator API for supported languages list, and for the default domains proposed.

To use the Language Translator service in Node-RED you first need to make this service available in a way Node-RED can connect to that service. There are two ways of doing that depending if you use Node-RED in Bluemix or use a local Node-RED instance. Both ways are described here.

**Note**: If you want to do the training part of this lab, then make sure than you select the **Trainable plan** when creating the service. 

If you are using Node-RED on Bluemix, go to your Node-RED app and click 'add a service or API' This will open a new window where you can select the Language Translator service (Language Identification is part of this service.). Then you click on 'Use' then a screen will show which asks for a restage, click on 'yes' and wait a minute. When the application is started click on the Url to go to your Node-RED application.

If one of either ways are done, you can continue with the following.

## Translate 

![`LTOverview`](images/lt.png)

In this example some random text (in English in this case) is injected, translated (to French) and put the result to the Debug tab. In the following screenshots you can see how the nodes are configured.

The inject node:

![`LTInject`](images/lt_inject.png)

You can use any text for this. I put Node-RED in double quotes, otherwise it would be translated as well.

The language translator node wil be configured like this. The text in this case is English so select English. Based on your source choose the right domain: News, Conversational or Patent.

![`LTConfig`](images/lt_config.png)

As the translated text will be returned on message.payload, make sure that you select this in de debug node. The output from the debug node will then be:

![`LTOutput`](images/lt_debug.png)

You can also copy the code for the flow here and import it from clipboard into Node-RED:

[Language Translator flow](language_translator_flow.txt)

## Identify languages

You can also use the new language identify node to identify one or more language in a text.

![`LTIdenOverview`](images/lt_identify_overview.png)

The inject node:

![`LTIdenInject`](images/lt_identify_inject.png)

You can use any text for this.

The language identify node does not need to be configured.

The output will show the detected language(s) with the level of confidence.

![`LTIdenOutput`](images/lt_identify_output.png)

Node output :

- msg.lang : The identified language with the highest confidence level
- msg.languages : array of identified languages with the language 5-letter ISO language code with the associated confidence score

You can also copy the code for the flow here and import it from clipboard into Node-RED:

[Language Translator Identify flow](language_identify_flow.txt)


## Customizing your domain

Are you creating a customer support translator, and do you have company-specific terms that you want dealt with in a certain way in conversations? Are you creating a way for your engineers in one country to look up patent data in another language, and you usually file patents on a specific technology? You can use your own data to create a custom dictionary, and a custom translation model in the Watson Language Translator API.

For this part, we'll see how to send your own glossary using Dropbox.

**Note:** If you haven't done it yet, set up the Dropbox node as shown [here](https://github.com/watson-developer-cloud/node-red-labs/tree/master/utilities/dropbox_setup).

### Training

Drag and drop an inject node on your palette, this node won't need any configuration it is just here to start the flow.

Next, add a Dropbox node, put your credentials and the name of your file (or path to your file if it's in a subfolder), your node configuration should look like this:

![`LTConfigDropbox`](images/lt_train_dropbox.png)

Dropbox setup documentation : [here](https://github.com/watson-developer-cloud/node-red-labs/tree/master/utilities/dropbox_setup).

Note: You can get a sample TMX file from the documentation [here](https://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/language-translation/customizing.shtml).

Download the TMX file  [here](https://raw.githubusercontent.com/watson-developer-cloud/node-red-labs/master/utilities/box_setup/glossary.tmx).

The next node is the Language Translator node that will get the file from the Dropbox node and send it to the service.
This node should be configured like this with Base Model set to English to French and File type to Forced Glossary:

![`LTConfigLT`](images/lt_train_config.png)

If you want to add your own parallel corpus or monolingual corpus, upload the right file and select the right option in the language translator node dialog.

Finally, drag and drop a debug node and let it set to msg.payload. This will show the model_id of the new file that has been created. 

[Language Translator Training flow](lang_train_flow.json)

### Get the status of a model

![`LTStatusOverview`](images/lt_status_overview.png)

Note: In order to get the status of a model you've sent for training, you'll need to provide its ID. Make sure that you've saved it somewhere. 

Drag and drop an inject node on your palette, this node won't need any configuration it is just here to start the flow.

After, put a Language Translator node, set its action to "Get status" and provide the ID of the model you want to get the status of, as shown below:

![`LTStatusLT`](images/lt_status_lt.png)

Finally, drag and drop a debug node and let it set to msg.payload. This will give you the status of the model, it can be either:

 - training - Training is still in progress.
 - queued@<#> - Training has not yet started and the model is in the queue. The # indicates the number of your model in the queue.
 - error - Training did not complete because of an error.
 - available - Training is completed, and the service is now available to use with your custom translation model.
 
 [Language Translation Get Status flow](lang_getstatus_flow.json)

### Delete a model

![`LTDeleteOverview`](images/lt_delete_overview.png)

Note: In order to get the status of a model you've sent for training, you'll need to provide its ID. Make sure that you've saved it somewhere. 

Drag and drop an inject node on your palette, this node won't need any configuration it is just here to start the flow.

After, put a Language Translation node, set its action to "Get status" and provide the ID of the model you want to get the status of, as shown below:

![`LTDeleteLT`](images/lt_delete_lt.png)

Finally, drag and drop a debug node and let it set to msg.payload. This will only return an error if the model couldn't be deleted (modelid not found).

 [Language Translation Get Status flow](lang_delete_flow.json)

### Available Flows

- [Language Translator and Identify Complete flow](lang_complete_flow.json) : illustrates the 3 nodes : language translator, language identify, and language translator util.

