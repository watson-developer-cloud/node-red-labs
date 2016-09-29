# OK Watson
***Coming Soon***
Link to video description

## Overview


This starter kit flow demonstrates usage of the new version of the <a href="">Watson Conversation</a> node, which simplifies the persistence of the conversation context. (See <a href="">here</a> for more detail on Conversation Context).
The flow shows two examples of how conversation context can be set and manipulated to create more complex conversation behaviour.
* <b>Pre-processing</b> the user input to enrich the user question with additional data, such as for example the emotion detected by <a href="">Tone-Analyser</a>, and then using that data to direct the conversation dialog path
*  <b>Post-processing</b> of the response provided by Conversations by using set context variables (in this case user preferences) and string processing, for example to allow certain Conversations paths to trigger the sending of a tweet in parallel with providing an answer as normal.

The flow also illustrates the use of the new <a href="">microphone</a> node in conjunction with <a href="">Watson Speech-to-Text</a> and <a href="">Watson Text-to-Speech</a> to test verbal interaction with Watson Conversations directly from within Node-RED.

## Application flow
![OK Watson Flow](ok-watson-starter-flow.png)
[OK Watson Flow JSON](ok-watson-starter-flow.json)
 &nbsp;   |  &nbsp;  [Starter Conversation JSON](ok-watson-starter-conversation.json)

## Flow description
Description of the flow process. (to follow)

## Setup Documentation
*** Setup of the starter conversation in Watson Conversations ***
1. Download and save the [OK Watson Starter Conversation JSON](ok-watson-starter-conversation.json).  
2. Add the Watson Conversations Service to your Blumix and note your service credentials.
3. Launch the Watson Conversations GUI. You can  import the OK Watson Starter Conversation workspace by selecting ![icon](importconv.png) and navigating to the JSON file saved in 1. above.
4. Make a note of the workspace ID, which can be accessed under "View details" from the menu on the workspace tile:
![workspaceID](workspace.png)

*** Node-RED Flow Setup ***
1. Import the ![OK Watson Flow](ok-watson-starter-flow.json) via the clipboard import functionality in Node-RED.
2. ...
