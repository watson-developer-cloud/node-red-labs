# Language Translation

The Language Translation service enables you to translate text from one language to another. These languages are supported:

- The News domain - targeted at news articles and transcripts, it translates English to and from French, Spanish, Portuguese or Arabic.
- The Conversational domain - targeted at conversational colloquialisms, it translates English to and from French, Spanish, Portuguese or Arabic.
- The Patent domain - targeted at technical and legal terminology, it translates Spanish, Portuguese, Chinese, or Korean to English.

To use the Language Translation service in Node-RED you first need to make this service available in a way Node-RED can connect to that service. There are two ways of doing that depending if you use Node-RED in Bluemix or use a local Node-RED instance. Both ways are described here.

**Note**: If you want to do the training part of this lab, then make sure than you select the Trainable plan when creating the service. 

If you are using Node-RED on Bluemix, go to your Node-RED app and click 'add a service or API' This will open a new window where you can select the Language Translation service (Language Identification is part of this service.). Then you click on 'Use' then a screen will show which asks for a restage, click on 'yes' and wait a minute. When the application is started click on the Url to go to your Node-RED application.

If you use a local instance of Node-RED go to the Bluemix catalog and go to the Language Translation service and click on it. Make sure that there is no app bound to this service and click 'Use"

If one of either ways are done, you can continue with the following.

## Translate 

![`LTOverview`](images/lt.jpg)

In this example some random text (in English in this case) is injected, translated (to French) and put the result to the Debug tab. In the following screenshots you can see how the nodes are configured.

The inject node:

![`LTInject`](images/lt_inject.jpg)

You can use any text for this. I put Node-RED in double quotes, otherwise it would be translated as well.

The translation node wil be configured like this. The text in this case is English so select English. Based on your source choose the right domain: News, Conversational or Patent.

![`LTConfig`](images/lt_config.png)

As the translated text will be returned on message.payload, make sure that you select this in de debug node. The output from the debug node will then be:

![`LTOutput`](images/lt_debug.jpg)

You can also copy the code for the flow here and import it from clipboard into Node-RED:

[Language Translation flow](lang_translate_flow.txt)

## Customizing your domain

Are you creating a customer support translator, and do you have company-specific terms that you want dealt with in a certain way in conversations? Are you creating a way for your engineers in one country to look up patent data in another language, and you usually file patents on a specific technology? You can use your own data to create a custom dictionary, and a custom translation model in the Language Translation API.

For this part, we'll see how to send your own glossary using Dropbox.

**Note:** If you haven't done it yet, set up the Dropbox node as shown [here](https://github.com/watson-developer-cloud/node-red-labs/tree/master/utilities/dropbox_setup).

Drag and drop an inject node on your palette, this node won't need any configuration it is just here to start the flow.

Next, add a Dropbox node, put your credentials and the name of your file (or path to your file if it's in a subfolder), your node configuration should look like this:

![`LTConfigDropbox`](images/lt_train_dropbox.png)

The next node is the Language Translation node that will get the file from the Dropbox node and send it to the service.
This node should be configured like this:

![`LTConfigLT`](images/lt_train_config.png)

If you want to add your own parallel corpus or monolingual corpus, upload the right file and select the right option in the language translation dialog.

Finally, drag and drop a debug node and let it set to msg.payload. This will show the model_id of the new file that has been created. 

*The training will be improved later with new nodes allowing to see the state of the training and to delete a previsoulty created domain model.*

You can also copy the code for the flow here and import it from clipboard into Node-RED:

[Language Translation Training flow](lang_train_flow.json)
