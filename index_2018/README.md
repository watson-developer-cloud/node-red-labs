# Watson on Node-RED at Index 2018

This page is to provide links to the materials for our Watson on Node-RED workshop at Index, 20 - 22 Feb 2018.

![Index](images/index_logo.png)  

**Explore Watson on Node-RED**

*04:00 PM-06:00 PM | Thursday, Feb. 22  Moscone West/Level 2, Room 2006*

Session type: Lab

Track: Programming languages and platforms

All the Watson APIs are available on Node-RED. In this session we will show you how you can make use of the full capabilities of the APIs to create cognitive models and quickly make use of them in real applications with little coding.

## The workshop
In this workshop we will guide you as you build a web application making use of several Watson APIS. You will start by constructing basic components, which you will then assemble into parts, which you will then assemble into an application. We start simple and gradually build a more intricate flow. Please shout out at any point where you are not clear of the instructions. We will be glad to help.  

---

## Getting Started
You will need and instance of Node-RED to start this workshop. This can be an instance running on IBM Cloud, or on your own machine, or on any other platform that
Node-RED supports, for example a Rasberry Pi.

You will also need credentials for Watson services, which you can obtain using your IBM Cloud account. If you are attending the Workshop then we will make some *disposable* credentials available. These will only be good for the day of the workshop, and only given to those attending the workshop.

### Node-RED
If you don't have one already, you will need an instance of Node-RED.

#### IBM cloud
If you are going to be using IBM Cloud, then create either an instance of [The Node-RED Starter](https://console.bluemix.net/catalog/starters/node-red-starter?taxonomyNavigation=apps) or of the [IOT Starter](https://console.bluemix.net/catalog/starters/internet-of-things-platform-starter?taxonomyNavigation=apps)

#### Your own machine
If you are going to be running on your own machine, then let's do this properly.
1. Install nvm
2. Use nvm to install Node.js (Verson 6 a minimum)
3. Use nvm to set the Node.js Version
4. `npm install node-red`
5. `npm start`

#### Watson Nodes
You are going to be making use of the following Watson services.
* Translation
* Speech To Text
* Text To Speech
* Visual Recognition
* Conversation

If you are running on Node-RED, feel free to bind in those services into your instance.

You will need version 0.6.3 of those nodes, so if you already have an instance use the Node-RED `Manage Palette` option to check the version of `node-red-node-watson` installed in your instance. If you don't have a `Manage Palette` option then you are on too old a version. If you have an earlier version of node-red-node-watson, then create a new instance - It will be quicker than using the toolchain.

If you have Node-RED running on your own machine, then use `Manage Palette` to install the nodes.

#### Utility Nodes
You will need some additional nodes in this workshop. Use `Manage Palette` to install.
* node-red-contrib-browser-utils
* node-red-contrib-play-audio
* node-red-contrib-file-buffer
* node-red-contrib-http-multipart


## Components
You are now ready to build the basic components that you will be using in your application.

### Node-RED Hello World
Take an inject node and wire it into a debug node. Configure the Inject node to send a string, and see it appear in the debug panel

### Translation
Add a Watson Translation node in between the inject and debug node. Configure the Translation node to use neural translation and pick a language. Trigger the inject to see the translation.

It is possible to dynamically configure the Watson Translation node, by setting `msg.srclang` and `msg.destlang`. Node-RED [function nodes](https://nodered.org/docs/writing-functions) allow you to add snippets of javascript into the flow. Add a function node upstream of the Translation node and set the source and destination language in the function node.

You can also use Node-RED [Context](https://nodered.org/docs/writing-functions#storing-data) to remember settings. Use a separate flow to set the translation language. Modify your translation flow to use the global context to determine source and destination languages for the translation. Try it out.

The neural translation models all use English, but you can wire two translation nodes to go from for example *Japanese* to *French*. Wire two translation nodes to use English as a hop. Use the global context to determine how your translation initial source and final destination. You will need to add a function node between the two translation nodes.

### Speech In
Create a new tab. Drop a microphone node, delay node and play audio node onto the flow canvas. Wire the microphone to the delay to the play audio. Configure the delay node to delay for 5 seconds. Trigger the microphone node, and hear yourself speaking. This will gauge the quality of your microphone. If it is undecipherable then use a better quality microphone.

Add a Watson Speech to Text node to your flow. Wire the microphone to the Speech to Text node to a debug node. Configure the Speech to Text node for your language. Trigger the microphone and check the transcription.

The Speech to Text node can be dynamically configured by setting `msg.srclang`. Use a function node and the global context to switch the language setting for the Speech to Text node.

Wire the `Speech In` component to the `Translation` component to get a translation.

### Speech out
Create a new tab. Drop an inject node, Watson Text to Speech node and a play audio node onto the flow canvas. Wire the inject node to the Text to Speech node to the play audio node. Configure the Text to Speech for language and voice. Configure the inject node to send a string. Trigger the inject node to hear the text.

The Text to Speech node can be dynamically configured by setting msg.voice. Open the developer console on your browser. In the developer console enter tts.voice. You will see a list of the valid options for voice. Pick a voice and making use of a function node dynamically configure the voice for the speech to text node.

Change the flow such that the voice setting for the Speech to Text node is determined by the Node-RED context.

Wire the `Translation` component to the `Speech Out` component so that you can now hear the translation.

### Conversation
For this you will need a Conversation workspace. If you don't have one, we will provide a prebuilt Conversation that you can import into your Conversation instance.

Create a new tab. Drop an inject node, Watson Conversation node and a debug node onto the flow canvas. Configure the Watson Conversation node for your Conversation Workspace. Also pick the option that allows the Conversation node to manage the conversation context object.

Use the inject node to send in text, and the debug node to see the response.

Connect the `Speech In` component into the `Conversation` component to allow you to speak to your Conversation. Connect the `Speech Out` component to hear the response from the Conversation. Connect the `Translation` component to allow you to converse with the service in another language.

### HTML 


## Parts



## Application


Come back later for more information!
