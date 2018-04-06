#  Lab: Language Identification with Node-RED

## Overview
This lab is a simplified version of the [Language Translator](../basic_examples/language_translator/README.md) lab, showcasing only the 'identification' part of the Language Translator service.

The Language Identification functionality allows you to quickly identify the language that text is written in. For the up-to-date list of identifiable languages, visit the documentation [here](https://console.bluemix.net/docs/services/language-translator/identifiable-languages.html).

### Prerequisites and setup
To get the Language Translator service credentials on IBM Cloud automatically filled-in by Node-RED, you should connect the Language Translator service to the Node-RED application in IBM Cloud.

![TranslatorSerivce](images/language_translator_service.png)

Please refer to the [Node-RED setup lab](/introduction_to_node_red/README.md) for instructions.

## Language Identification Flow Construction
In this exercise, you will create a simple flow which will input random text, the Translator service will identify the language and output the result in the debug window. The complete flow will look like this:

![`Flow`](images/flow.png)

Add an inject node, language identify node and a debug node to the canvas and link them together.

Edit the inject node and change the payload to a string. Enter some text into the field, for example: `What language is this?`.

![`InjectNode`](images/inject_node.png)

The Language Identification node does not need any configuration.

Single click the Language Identification node and view the info tab. Here you will see that the output for the identified language with the highest confidence level is msg.lang

![`Info`](images/lang_identify_info.png)

To get the correct output in the debug tab, set the debug node output to `msg.lang`.

![`Debug`](images/debug.png)

### Testing the flow
Deploy the application, initiate the inject node and view the result in the debug tab.

![`Result`](images/result.png)

In this result with the text `What language is this?`, the service is 78% confident it is English.

Try entering text in a different language in the Inject node to view different results.

## Flow Source
The complete flow is available [here](lang_identification_flow.json).

## Watson Language Translator Documentation
To find more information on the Watson Language Translator underlying service, visit these webpages:
- [Language Translator Documentation](https://console.bluemix.net/docs/services/language-translator/index.html)
- [Language Translator API Documentation](https://www.ibm.com/watson/developercloud/language-translator/api/v2)
