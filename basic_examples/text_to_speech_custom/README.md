# Text to Speech Customization

Note: This lab assumes you have prior knowledge of the Text to Speech Service and/or have completed the [Text to Speech lab](https://github.com/watson-developer-cloud/node-red-labs/tree/master/basic_examples/text_to_speech). You will need a Bluemix account with a Node-RED app connected to the Text to Speech service to complete this lab.

##Introduction
The text to speech customization feature has been introduced so that the service can learn specific words and phrases unique to your use case which it otherwise would not know, for example abbreviations, acronyms and local dialect.

The language model customization interface of the text to speech service is currently only available for US English and Japanese.

This lab demonstrates how to create a sample customization. You will create a customization and add words to convert your text to speech. The customization will demonstrate differences in pronunciation of words between the American accent and the British accent.

## On Bluemix
Make sure you have installed the node-red-node-watson palette by clicking ‘Manage Palette’ under settings in the Node-RED editor. Click the ‘Install’ tab and search for node-red-node-watson then click install. Verify that the version is 0.4.38 or higher.

![`Manage_Palette`](Images/Manage_Palette.jpg)

Ensure that in the package.json file for your Node-RED application the version for node-red-node-watson is set to at least 0.4.37. (Access this from the application overview page on Bluemix. Under 'Continous Delivery' in the bottom right hand corner, click 'Add Git Repo' if you haven't previously used the function or ‘Edit Code’. Navigate to the package.json file and update the line according to the image below. You will need to stop your application and restart it after saving the package.json file).

![`Intro_Edit_Code`](Images/Intro_Edit_Code.jpg)

## Step 1 - Create Customization

Start by adding 3 inject nodes and 3 text to speech custom builder nodes and 1 debug node. Join them together so that your flow looks like the following example:

![`Step_1_Overview`](Images/Step_1_Overview.jpg)

You do not need to configure the inject nodes. For the first text to speech node, configure it like this:

![`Step_1_Create_Customization`](Images/Create_Customization.jpg)

This will create the customization ‘Bluemix TTS’ using US English as the language. You can choose your own model names and descriptions.

Configure the second text to speech node like this:

![`Step_1_List_Customizations`](Images/List_Customization.jpg)

This will list the customizations you have created in the debug tab.

The next step is to configure the debug node. The final customization node will be configured afterwards. Change the output to ‘complete msg object’ and press ‘Done’.

![`Step_1_Debug_Node`](Images/Debug.jpg)

This allows you to view the full results of the inject nodes.

Deploy your application and click the inject node for ‘Create Customization’ and then ‘Get Customization’.

In the debug tab you should see two ‘msg : Object’s. Expand the bottom one and look for ‘customization_id’. This is your customization so make a note of the id as you will need it for the following steps.

![`Step_1_List_Customization_Results`](Images/List_Customization_Results.jpg)

Edit the final text to speech custom node by changing the ‘Detect’ field to ‘Get Customization’ and paste in the Customization ID you made a note of from the debug tab in the last step.

![`Step_1_Get_Customization`](Images/Get_Customization.jpg)

Deploy the application.

This completes the first step.

## Step 2 - Add Words

In this step, add 1 file inject node, 2 inject nodes and 3 more text to speech custom build nodes and join them to the debug node to look like the example below.

![`Step_2_Overview`](Images/Step_2_Overview.jpg)

You do not need to do anything with the file inject or inject node.

For the text to speech node that is joined to the file inject node, name it ‘Add Words’, change the ‘Detect’ field to ‘Add Words’ and paste in the Customization ID.

![`Step_2_Add_Words`](Images/Add_Words.jpg)

This will allow you to upload your customized words.

For the second text to speech node, name it ‘Get Words’, change the ‘Detect’ field to ‘Get Words’ and paste in the Customization ID.

![`Step_2_Get_Words`](Images/Get_Words.jpg)

For the final speech to text node, name it ‘Delete Word’, change ‘Detect’ to ‘Delete Word’ and paste in the Customization ID.

![`Step_2_Delete_Word`](Images/Delete_Word.jpg)

Deploy your application.

This completes the second step.

## Step 3 - Test It Out

To test out the customization, add 2 inject nodes, 2 text to speech nodes, 1 function node and 1 play audio node from the output section. Join them together as follows:

![`Step_3_Overview`](Images/Step_3_Overview.jpg)

In both inject nodes, add the following text into the payload, selecting ‘az’ from the drop down menu.

`In my schedule today, I am taking my car into the garage and buying a bouquet of flowers to put in the vase,   If I get time I will visit the zoo to look at the zebras`

![`Step_3_Inject_Nodes`](Images/Inject_nodes.jpg)

For one of the text to speech nodes, name it ‘Without Customization’ and configure as follows:

![`Step_3_Without_Customization`](Images/Without_Customization.jpg)

This will convert text to speech without using the customization you created in the previous steps.

For the other text to speech node, name it ‘With Customization’ and configure as follows:

![`Step_3_With_Customization`](Images/With_Customization.jpg)

This will convert text to speech into the British accent with the customization you have created in the previous steps.

For the function node, enter the following text:

`msg.payload = msg.speech;
return msg;`

This is needed because the text that you will enter needs to be passed on in msg.payload but the audio transcription is returned as msg.speech.

You do not need to do anything with the play audio node.


Deploy the application.


Inject the TTS_Words file into the ‘file inject’ node. Use the [.txt](TTS_Words_Windows.txt) for Windows or [.json](TTS_Words_MacOS.json) for Mac OS.

Click the inject node for ‘Without Customization’ and listen to the response.

Now click the inject node for ‘With Customization’. You should hear a difference in the words from the American accent (without customization) to the British accent (with customization).


This completes the lab.

The complete flow is available [here](TTS_Flow.json)
