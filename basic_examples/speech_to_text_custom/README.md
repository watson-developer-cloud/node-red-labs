# Speech to Text Customization

Note: This lab assumes you have prior knowledge of the Speech to Text Service and/or have completed the [Speech to Text lab](https://github.com/watson-developer-cloud/node-red-labs/tree/master/basic_examples/speech_to_text). You will need a Bluemix account with a Node-RED application connected to the Speech to Text service to complete this lab.

##Introduction
The speech to text customization feature has been introduced so the service can learn specific input that is unique to your use case. It is then trained based on pronunciations of unusual words within the input which it otherwise would not know, for example medical terms.

The language model customization interface of the Speech to Text service is currently only available for US English and Japanese.

This lab demonstrates how to create a sample customization.

The steps follow the usage model for working with Speech to text customization:
1.	Create a custom language model
2.	Add data from corpora to the custom language model
3.	Add words to the custom language model
4.	Train the custom language model
5.	Use the custom language model in a recognition request

For more information on the steps, view the documentation [here](https://www.ibm.com/watson/developercloud/doc/speech-to-text/custom.shtml).  

## On Bluemix
Make sure you have installed the node-red-node-watson palette by clicking ‘Manage Palette’ under settings in the Node-RED editor. Click the ‘Install’ tab and search for node-red-node-watson then click install. Verify that the version is 0.4.37 or higher.

![`Manage_Palette`](Images/Manage_Palette.jpg)

Ensure that in the package.json file for your Node-RED application the version for node-red-node-watson is set to at least 0.4.37. (Access this from the application overview page on Bluemix. Under 'Continous Delivery' in the bottom right hand corner, click 'Add Git Repo' if you haven't previously used the function or ‘Edit Code’. Navigate to the package.json file and update the line according to the image below. You will need to stop your application and restart it after saving the package.json file).

![`Edit_Code`](Images/Intro_Edit_Code.jpg)

## Step 1 - Create a Custom Language Model

Start by adding 3 inject nodes, 3 speech to text custom builder nodes and one debug node. Join them together like the following example:

![`Step_One_Overview`](Images/Step_1_Overview.jpg)

You do not need to configure the inject nodes.

The Create Customization node is configured like this:

![`Step_One_Create_Customization`](Images/Step_1_Create_Customization.jpg)

You can set your own names for the Custom Model Name and Custom Model Description. This creates the customization using the desired model.

The List Customization node is configured like this:

![`Step_One_List_Customizations`](Images/Step_1_List_Customizations.jpg)

This node allows you to view the customizations you have created.

The next step is to configure the debug node. The final customization node will be configured afterwards. Change the output to ‘complete msg object’ and press ‘Done’.

![`Step_One_Debug_Node`](Images/Step_1_Debug_Node.jpg)

This allows you to view the full results of the inject nodes.

Deploy your application and click the inject node for ‘Create Customization’ and then ‘Get Customization’.

In the debug tab you should see two ‘msg : Object’s. Expand the bottom one and look for ‘customization_id’. This is your customization so make a note of the id as you will need it for the following steps.

![`Step_One_Debug_Tab`](Images/Step_1_Debug_Tab.jpg)

Edit the final speech to text custom node by changing the ‘Detect’ field to ‘Get Customization’ and paste in the Customization ID you made a note of from the debug tab in the last step.

![`Step_One_Get_Customization`](Images/Step_1_Get_Customization.jpg)

Deploy the application.

This completes the first step.

## Step 2 - Add Data From Corpora To The Custom Language Model

In this step, add 1 file inject node, 2 inject nodes and 3 more speech to text custom build nodes and join them to the debug node to look like the example below.

![`Step_Two_Overview`](Images/Step_2_Overview.jpg)

You do not need to do anything with the file inject or inject node.

In the speech to text node next to 'File Inject',  name it ‘Add Corpus’, change the ‘Detect’ field to ‘Add Corpus’ and paste in the customization ID you used in the previous step. Give the corpus a name in the final field. Note: the Corpus Name will not work with spaces. You can choose whether to select the 'Allow Overwite' checkbox. If you leave it unchecked, you will not be able to add another Corpus to this customization.

![`Step_Two_Add_Corpus`](Images/Step_2_Add_Corpus.jpg)

In the second speech to text node editor, call this ‘Get Corpora’ and change the ‘Detect’ field to ‘Get Corpora’. Again paste in the Customization ID and select ‘Done’.

![`Step_Two_Get_Corpora`](Images/Step_2_Get_Corpora.jpg)

In the third speech to text node, call this ‘Train’ and change the ‘Detect’ field to ‘Detect’ and paste in the Customization ID.

![`Step_Two_Train`](Images/Step_2_Train.jpg)

Deploy your application.

Download the healthcare.txt. file from [here](healthcare.txt) to use as the Corpus.

Inject the healthcare.txt file into the file inject node before ‘Add Corpus’. You may have to wait a while for the corpus to be processed.

Click the timestamp before ‘Get Corpora’ and then press the timestamp before ‘Train’.

In the debug tab, open the object for ‘Get Corpora’. Open ‘Corpora’ and then ‘0: object’ until you find the status. The status needs to read ‘analyzed' before you can test out the function.

![`Step_Two_Get_Corpora_Output`](Images/Step_2_Get_Corpora_Output.jpg)

This completes the second step.

## Step 3 - Add Words To The Custom Language Model

For this step, add 1 file inject node and 1 speech to text custom build node. Join these together and to the debug node.

![`Step_Three_Overview`](Images/Step_3_Overview.jpg)

You do not need to configure the file inject node. For the speech to text node, call it ‘Add Words’, change the ‘Detect’ field to ‘Add Words’ and paste in the Customization ID. Click ‘Done’ and deploy your app.

![`Step_Three_Add_Words`](Images/Step_3_Add_Words.jpg)

Download the words file (either [.txt](words.txt) for Windows or [.json](words.json) for Mac OS). The file includes pronunciation for ‘NSAIDs’. You will use this file in step 5.

This completes step 3.

## Step 4 - Train The Custom Language Model

Click the timestamp for ‘Train’ and wait for it to finish processing.

## Step 5 - Use The Custom Language Model In A Recognition Request

You will now compare the difference between customized and non-customized results.

To do this, add 2 microphone nodes, 2 speech to text nodes and 2 debug nodes and join them together to look like the example below. This can be above or below the existing nodes. At this point it is a good idea to refresh the page as the speech to text node may not present the ‘Language Customization’ field which you will need. This is because the node fetches the models on the initial load to determine what is available. This does not get automatically updated.

![`Step_5_Overview`](Images/Step_5_Overview.jpg)

You do not need to do anything with the microphone nodes. For the first speech to text node, name it 'Non-Customized', choose your language (either US English or Japanese) and select 'None' as the language customization. Select ‘Broadband Model’ for quality and check the continuous box. This will give you results without the customization.

![`Step_5_Non-customized`](Images/Step_5_Non-Customized.jpg)

For the second speech to text node, you must select US English or Japanese as these are currently only supported for the customization. Choose the language customization you created in step 1 from the drop down box. Select ‘Broadband Model’ for quality and check the continuous box.

![`Step_5_Speech_To_Text`](Images/Step_5_Speech_to_Text.jpg)

For one of the debug tabs, set the output to msg.transcription. This will output the text converted from speech.  

![`Step_5_msg.transcription`](Images/Step_5_msg.transcription.jpg)

And the other debug tab output to msg.fullresult. This will output the full result of the speech to text function including confidence level and whether the output is final (showing true if final, false if not).

![`Step_5_msg.transcription`](Images/Step_5_msg.fullresult.jpg)

Deploy your application.

Test the speech to text non-customized function by speaking a line from the healthcare.txt file (preferably using words that are difficult to pronounce), as an example “Nonsteroidal anti-inflammatory drugs NSAIDs, such as aspirin and ibuprofen, are another common cause.” Take note of the output from Watson in the debug tab.

![`Step_5_Test_result1`](Images/Step_5_Test_Result1.jpg)

Repeat the question using the customized function.

![`Step_5_Test_Result`](Images/Step_5_Test_Result2.jpg)

Next, inject the words file you downloaded (either .txt or .json) in Step 3 to the 'Add Words' inject node and repeat the same sentence. The word 'NSAIDs' is elaborated on in the file.

If you compare the confidence rating in these results, the highest confidence should come once the words were added.

This completes the lab.

The complete flow is available [here](STT_Flow.json)
