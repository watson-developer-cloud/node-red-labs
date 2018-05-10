# Lab: Text to Speech Customization with Node-RED

## Overview
The text to speech customization feature has been introduced so that the service can learn specific words and phrases unique to your use case which it otherwise would not know, for example abbreviations, acronyms and local dialect.

For the up-to-date list of supported languages, visit the documentation [here](https://console.bluemix.net/docs/services/text-to-speech/custom-intro.html#customIntro).

This lab demonstrates how to create a sample customization. You will create a customization and add words to convert your text to speech. The customization will demonstrate differences in pronunciation of words between the American accent and the British accent.

> Note: This lab assumes you have prior knowledge of the Text to Speech Service and/or have completed the [Text to Speech lab](https://github.com/watson-developer-cloud/node-red-labs/tree/master/basic_examples/text_to_speech).


### Prerequisites and setup
To get the Text to Speech service credentials on IBM Cloud automatically filled-in by Node-RED, you should connect the Text to Speech service to the Node-RED application in IBM Cloud.

![TTSSerivce](images/tts_service.png)

Please refer to the [Node-RED setup lab](/introduction_to_node_red/README.md) for instructions.

## Text to Speech Customization Flow

### Step 1 - Create Customization
Start by adding 3 inject nodes and 3 text to speech custom builder nodes and 1 debug node. Join them together so that your flow looks like the following example:

![`Step_1_Overview`](Images/Step_1_Overview.jpg)

You do not need to configure the inject nodes. For the first text to speech node, configure it like this:

![`Step_1_Create_Customization`](Images/tts_create.png)

This will create the customization ‘Custom01’ using US English as the language. You can choose your own model names and descriptions.

Configure the second text to speech node like this:

![`Step_1_List_Customizations`](Images/tts_list.png)

This will list the customizations you have created in the debug tab.

The next step is to configure the debug node. The final customization node will be configured afterwards. Change the output to ‘complete msg object’ and press ‘Done’.

![`Step_1_Debug_Node`](Images/debug.png)

This allows you to view the full results of the inject nodes.

Deploy your application and click the inject node for ‘Create Customization’ and then ‘Get Customization’.

In the debug tab you should see two messages. Expand the second message one and look for `customization_id`. This is your customization. Make a note of the ID as you will need it for the following steps.

![`Step_1_List_Customization_Results`](Images/list_customization.png)

Edit the final text to speech custom node by changing the ‘Detect’ field to ‘Get Customization’ and paste in the Customization ID you made a note of from the debug tab in the last step.

![`Step_1_Get_Customization`](Images/get_customization.png)

Deploy the application.

This completes the first step.

## Step 2 - Add Words
In this step, add 1 file inject node, 2 inject nodes and 3 more text to speech custom build nodes and join them to the debug node to look like the example below.

![`Step_2_Overview`](Images/Step_2_Overview.jpg)

You do not need to do anything with the file inject or inject nodes.

For the text to speech node that is joined to the file inject node, name it ‘Add Words’, change the ‘Detect’ field to ‘Add Words’ and paste in the Customization ID.

![`Step_2_Add_Words`](Images/add_words.png)

This will allow you to upload your customized words.

For the second text to speech node, name it ‘Get Words’, change the ‘Detect’ field to ‘Get Words’ and paste in the Customization ID.

![`Step_2_Get_Words`](Images/get_words.png)

For the final speech to text node, name it ‘Delete Words’, change ‘Detect’ to ‘Delete Word’ and paste in the Customization ID.

![`Step_2_Delete_Word`](Images/delete_words.png)

Deploy your application.

This completes the second step.

## Step 3 - Set Up Output
To test out the customization, add 2 inject nodes, 2 text to speech nodes, 1 function node and 1 play audio node from the output section. Join them together as follows:

![`Step_3_Overview`](Images/Step_3_Overview.jpg)

In both inject nodes, add the following text into the payload as a string:

`In my schedule today, I am taking my car into the garage and buying a bouquet of flowers to put in the vase. If I get time I will visit the zoo to look at the zebras`

![`Step_3_Inject_Nodes`](Images/inject_text.png)

For one of the text to speech nodes, name it ‘Without Customization’ and configure as follows:

![`Step_3_Without_Customization`](Images/without_customization.png)

This will convert text to speech without using the customization you created in the previous steps.

For the other text to speech node, name it ‘With Customization’ and configure as follows:

![`Step_3_With_Customization`](Images/with_customization.png)

This will convert text to speech into the UK British accent with the customization you have created in the previous steps.

For the function node, enter the following text to format the output correctly for the play audio node:
```JAVASCRIPT
msg.payload = msg.speech;
return msg;
```
You do not need to configure the play audio node.

## Testing the Flow
Deploy the application.

Inject the TTS_Words file into the ‘file inject’ node. Use the [.txt](TTS_Words_Windows.txt) for Windows or [.json](TTS_Words_MacOS.json) for Mac OS.

Click the inject node for ‘Without Customization’ and listen to the response.

Now initiate the inject node for ‘With Customization’. You should hear a difference in the words from the American accent (without customization) to the British accent (with customization).

## Flow Source
The complete flow is available [here](TTS_Flow.json).

## Text to Speech Documentation
To find more information on the Watson Text to Speech underlying service, visit these webpages :
- [TTS Documentation](https://console.bluemix.net/docs/services/text-to-speech/index.html#about)
- [TTS API Documentation](https://www.ibm.com/watson/developercloud/text-to-speech/api/v1/)
