# Lab: Speech to Text Customization
## Overview
The Speech to Text customization feature has been introduced so the service can learn specific input that is unique to your use case. It is then trained based on pronunciations of unusual words within the input which it otherwise would not know, for example medical terms.

The language model customization interface of the Speech to Text service is available in US English, UK English, Japanese, Korean and Spanish.

## Node-RED Watson Speech to Text node
The Node-RED ![`STT-C`](images/stt-c_node.png) node provides an easy wrapper node to create customizations for Speech to Text.

## Watson Speech to Text Customization Flow
This lab demonstrates how to create a sample customization.

The steps follow the usage model for working with Speech to text customization:
1.	Create a custom language model
2.	Add data from corpora to the custom language model
3.	Add words to the custom language model
4.	Train the custom language model
5.	Use the custom language model in a recognition request

For more information on the steps, view the documentation [here](https://console.bluemix.net/docs/services/speech-to-text/custom.html).

### Prerequisites and setup
This lab assumes you have prior knowledge of the Speech to Text Service and/or have completed the [Speech to Text lab](https://github.com/watson-developer-cloud/node-red-labs/tree/master/basic_examples/speech_to_text).

You will need an IBM Cloud account with a Node-RED application. To get the Speech to Text service credentials on IBM Cloud automatically filled-in by Node-RED, you should connect the Speech to Text service to the Node-RED application in IBM Cloud.

![STTSerivce](images/stt_service.png)

Please refer to the [Node-RED setup lab](/introduction_to_node_red/README.md) for instructions.

A microphone is needed in this lab. You need to install the node-red-browser-utils node using the 'Manage Palette' tool. See the 'Importing Flows' section on this [webpage](/introduction_to_node_red/README.md) for more information.

## Building the flow
### Step 1 - Create a Custom Language Model
Start by adding 3 inject nodes, 3 speech to text custom builder nodes and one debug node. Join them together like the following example:

![`StepOneOverview`](images/step_one.png)

You do not need to configure the inject nodes.

The first STT Customization node is configured like this:

![`CreateCustomization`](images/create_customization.png)

You can set your own names for the Custom Model Name and Custom Model Description. This creates the customization using the desired model.

The List Customization node is configured like this:

![`ListCustomizations`](images/list_customizations.png)

This node allows you to view the customizations you have created.

The next step is to configure the debug node. The final customization node will be configured afterwards. Change the output to ‘complete msg object’ and press ‘Done’.

![`DebugNode`](images/debug.png)

This allows you to view the full results of the inject nodes.

Deploy your application and click the inject node for ‘Create Customization’ and then ‘Get Customization’.

In the debug tab you should see two messages. Expand the first one and look for ‘customization_id’. This is your customization so make a note of the id as you will need it for the following steps.

![`CustomizationID`](images/customization_id.png)

If you have created more than one customization, expanding the second message down to 'customizations' will list the information about all customizations associated with your account.

Edit the final speech to text custom node by changing the ‘Detect’ field to ‘Get Customization’ and paste in the Customization ID you made a note of from the debug tab in the last step.

![`GetCustomization`](images/get_customization.png)

Deploy the application and inject the timestamp for Get Customization. Your customization should show up in the debug tab and have a status of 'pending'.

This completes the first step.

### Step 2 - Add Data From Corpora To The Custom Language Model
In this step, add 1 file inject node, 2 inject nodes and 3 more speech to text custom build nodes and join them to the debug node to look like the example below.

![`StepTwoOverview`](images/step_two.png)

You do not need to do anything with the file inject or inject nodes.

In the speech to text node next to 'File Inject',  name it ‘Add Corpus’, change the ‘Detect’ field to ‘Add Corpus’. Paste in the customization ID you used in the previous step. Give the corpus a name in the final field.

![`AddCorpus`](images/add_corpus.png)

**Note:
The Corpus Name will not work with spaces.
You can choose whether to select the 'Allow Overwite' checkbox. If you leave it unchecked, you will not be able to add another Corpus to this customization.**

In the second speech to text node editor, call this ‘Get Corpora’ and change the ‘Detect’ field to ‘Get Corpora’. Again paste in the Customization ID and select ‘Done’.

![`GetCorpora`](images/get_corpora.png)

In the third speech to text node, call this ‘Train’ and change the ‘Detect’ field to ‘Detect’ and paste in the Customization ID.

![`Step_Two_Train`](images/train_model.png)

Deploy your application.

Download the healthcare.txt. file from [here](healthcare.txt) to use as the Corpus.

Inject the healthcare.txt file into the file inject node before ‘Add Corpus’. You may have to wait a while for the corpus to be processed.

Click the timestamp before ‘Get Corpora’ and then press the timestamp before ‘Train’.

In the debug tab, open the object for ‘Get Corpora’. Open ‘Corpora’ and then ‘0: object’ until you find the status. The status needs to read ‘analyzed' before you can test out the function.

![`GetCorporaResult`](images/get_corpora_result.png)

This completes the second step.

### Step 3 - Add Words To The Custom Language Model

For this step, add 1 file inject node and 1 speech to text custom build node. Join these together and to the debug node.

![`StepThreeOverview`](images/step_three.png)

You do not need to configure the file inject node. For the speech to text node, call it ‘Add Words’, change the ‘Detect’ field to ‘Add Words’ and paste in the Customization ID. Click ‘Done’ and deploy your app.

![`AddWords`](images/add_words.png)

Download the words file (either [.txt](words.txt) for Windows or [.json](words.json) for Mac OS). The file includes pronunciation for ‘NSAIDs’.

Inject the words file you downloaded into the 'Add Words' flow.

This completes step 3.

### Step 4 - Train The Custom Language Model
Click the timestamp for ‘Train’ and wait for it to finish processing.

### Step 5 - Use The Custom Language Model In A Recognition Request
You will now compare the difference between customized and non-customized results.

To do this, add 2 microphone nodes, 2 speech to text nodes and 2 debug nodes and join them together to look like the example below. This can be above or below the existing nodes.

**Note: At this point it is a good idea to refresh the page as the speech to text node may not present the ‘Language Customization’ field which you will need. This is because the node fetches the models on the initial load to determine what is available. This does not get automatically updated.**

![`Step5Overview`](images/step_five.png)

You do not need to do anything with the microphone nodes. For the first speech to text node, name it 'Non-Customized', choose your language (either US English, UK English, Japanese, Korean or Spanish), select 'None' as the language customization and select ‘Broadband Model’ for quality. This will give you results without the customization.

![`Non-customized`](images/non-customized.png)

For the second speech to text node, choose your language (either US English, UK English, Japanese, Korean or Spanish). Change the quality 'Broadband Model' and then select the language customization you created in step 1 from the drop down box.

![`Customized`](images/customized.png)

For one of the debug nodes, set the output to msg.transcription. This will output the text converted from speech.  

![`msg.transcription`](images/msg.transcription.png)

And the change other debug node output to msg.fullresult. This will output the full result of the speech to text function including confidence level and whether the output is final (showing true if final, false if not).

![`msg.transcription`](images/msg.fullresult.png)

Deploy your application.

Test the speech to text non-customized function by speaking a line from the healthcare.txt file (preferably using words that are difficult to pronounce), as an example “Nonsteroidal anti-inflammatory drugs NSAIDs, such as aspirin and ibuprofen, are another common cause.” Take note of the output in the debug tab.

![`TestResult1`](images/non-customized_test.png)

Repeat the question using the customized function.

![`TestResult2`](images/customized_test.jpg)

If you compare the confidence rating in these results, the highest confidence should come from the customized model.

This completes the lab.

## Flow Source
The complete flow is available [here](STT_Flow.json).

## Speech to Text Documentation
To find more information on the Watson Speech to Text underlying service, visit these webpages :
- [STT Documentation](https://console.bluemix.net/docs/services/speech-to-text/custom.html#customization)
- [STT API Documentation](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/)
