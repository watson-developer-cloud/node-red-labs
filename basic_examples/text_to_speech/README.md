# Watson Text to Speech with Node-RED Lab
### Overview
The Watson Text-To-Speech (TTS) service produces an audio file from literal text.
The spoken text can be emitted with a choice of voices and languages.

> **Ensure you have added TTS service to your NodeRed App in IBM Cloud**


### Node-RED Watson TTS node
The Node-RED node provides a very easy wrapper node that takes a text string as input and produces a binary buffer holding the spoken text audio stream in `.wav` format.
The selection of language and voice are made through  the node's properties editor.

### Basic TTS Flow
In this first exercise, we will show how to simply produce a `.wav` file from input text through a simple web page generated using a Node-RED flow.

The first part of the flow will take text input from a web invocation and return the spoken text `.wav` file:

1. Open the Node-RED Flow Editor and create a new flow by clicking the '+' on the top right corner. Let's call it `TTS Web` 
2. Add an ![`HTTPInput`](/introduction_to_node_red/images/node_red_httpinput.png) node to collect the incoming speech request. Set the `URL` property of this node to `/talk/sayit` This URL will be exposed below our BlueMix main URL.
![TTS Lab 1 ScreenShot 1](images/tts_lab_1_set_http_node.png)
When invoked with query parameters such as `?text_to_say=Hello`, they will be added as properties on the `msg.payload` object. 
3. Add a ![`change`](/introduction_to_node_red/images/node_red_change.png) node to 
extract the query parameter `msg.payload.text_to_say` and set it as the `msg.payload`.

![TTS Lab 1 ScreenShot 2](images/tts_lab_2_edit_change_node.png)
We do this because the TTS node uses the text in the `msg.payload` as input.
4. Now add a ![`Watson TTS`](images/node_red_watson_tts.png) node. This node will generate the binary `wav` stream content to the `msg.speech` property.
![TTS Lab 1 ScreenShot 3](images/tts_lab_3_edit_tts.png)

5. The properties of the TTS node will let you select the Language and Voice to use.

6. Add another ![`change`](/introduction_to_node_red/images/node_red_change.png) node to extract the `msg.speech` and place it in `msg.payload`. 
![TTS Lab 1 ScreenShot 4](images/tts_lab_4_edit_change.png)

7. We will set the `HTTP response headers` by setting the `msg.headers` to the literal string 
value `[{ 'Content-Type': 'audio/wav'}]`. This is required in order to let browsers know that this 
is an audio file and not HTML. Add a ![`Function`](/introduction_to_node_red/images/node_red_function.png) node 
with the following code:  
```javascript
msg.headers={ 'Content-Type': 'audio/wav'};
return msg;
```
![EditSetHeadFunc](images/tts_lab_5_edit_set_header_func.png)  
This is required in order to properly set the HTTP headers so that the response can be identified as audio in Wave format by the receiving browser.
8. Finally, add a  ![`HTTP Response`](/introduction_to_node_red/images/node_red_httpresponse.png) node. This 
node will simply return what's in the payload to the HTTP response.
The completed flow should look like:
![TTS Lab 1 ScreenShot 6](images/tts_lab_6_completed_simple_flow.png)

The flow code for this is in [TTS-Lab-Basic](tts_lab_basic.json).

_Now try the flow:_

* Open a new tab or window in your browser, and direct it to `http://xxxx.mybluemix.net/talk/sayit?text_to_say=Hello`
* This should prompt you to save a file.
Depending on how your browser is configured, it may save it automatically or prompt for a name and location. In any case, store or rename it with the `.wav` extension on your local file system. 
* Then locate that file from windows explorer and open it with Windows Media Player.

### TTS Flow - enhancements: Input Parameter Checking
This flow has a caveat, which is that the flow will fail when the `text_to_say` query parameter is not set.

So, we will introduce a `switch` node between the `[get]` and `change` nodes. This node will check if `msg.payload.text_to_say` is set, and otherwise divert to a `template` node that will simply set the payload to a error text.
![TTS Lab 1 ScreenShot X1](images/tts_lab_x1.png)
You'll notice that adding the second `otherwise` rule has created a second output handle for the `switch` node, we'll connect this to a `template` node and then to the `HTML Response` node.
![TTS Lab 1 ScreenShot X2](images/tts_lab_x2.png)
The template node simply outputs a HTML message in a h1 header.
Flow for this can be found in [TTS-Lab-Basic](tts_lab_with_param_check.json)
The final flow will look like:
![TTS Lab 1 ScreenShot X3](images/tts_lab_x3.png)

#### TTS Interactive Web UI
As an extension, we can build a flow that will present a dialog to the user with a prompt to enter the text to say, and return a HTML page with an <audio> tag which will play the generated audio.

For this, the basic flow which converts a text into speech audio wav file can be leveraged, and complemented with a HTTP web interaction. This is depicted in the flow as below::
>
![TTS Lab Web Page](images/tts_lab_web_page.png)
We added a new `HTTP input` node, listening on the `/talk` URL, and modified the text-to-wav HTTP URL to `/talk/sayit` so that it doesn't conflict with the previous Lab. The `choice` node checks for the text_to_say query parameter, and when not present outputs a simple web page using the `GetTextToSay` template:
```HTML
    <h1>Enter text to Say</h1>
       <form action="{{req._parsedUrl.pathname}}" method="get">
          <input type="text" name="text_to_say" id="" value="{{payload.text_to_say}}" />
          <input type="submit" value="Say it!"/>
       </form>
```
![TTS-Lab-WebPage_Details1.png](images/tts_lab_web_page_details1.png)

When a text_to_say query parameter is set, we generate an HTML page with a \<audio> tag that refers to the `/talk/sayit` URL to get the audio `wav` file:
```HTML
    <h1>You want to say</h1>
    <p><q>{{payload}}</q></p>
    <p>Hear it:</p>
    <audio controls autoplay>
      <source src="{{req._parsedUrl.pathname}}/sayit?text_to_say={{payload.text_to_say}}" type="audio/wav">
        Your browser does not support the audio element.
    </audio>
    <form action="{{req._parsedUrl.pathname}}">
        <input type="text" name="text_to_say" id="" value="{{payload.text_to_say}}" />
        <input type="submit" value="Try Again" />
    </form>
```
![TTS-Lab-WebPage_Details2.png](images/tts_lab_web_page_details2.png)

The complete flow is available at [TTS-Lab-WebPage](tts_lab_webpage.json).

To run it, point your browser to  `/http://xxxx.mybluemix.net/talk` and enter some text.

## Text to Speech Documentation

To have more information on the Watson Language Translator underlying service, you can check these two reference :
- [Text to Speech Documentation](https://console.bluemix.net/docs/services/text-to-speech/index.html)
- [Text to Speech API Documentation](https://www.ibm.com/watson/developercloud/text-to-speech/api/v1/)
