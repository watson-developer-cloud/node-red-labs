# OK Watson
***Coming Soon***
Link to video description

## Overview


This starter kit flow demonstrates usage of the new version of the <a href="">Watson Conversation</a> node, which simplifies the persistence of the conversation context. (See <a href="https://www.ibm.com/watson/developercloud/doc/conversation/advanced_overview.shtml#advanced_context">here</a> for more detail on Conversation Context).
The flow shows two examples of how conversation context can be set and manipulated to create more complex conversation behaviour.
* <b>Pre-processing</b> the user input to enrich the user question with additional data, such as for example the emotion detected by the <a href="">Tone-Analyser</a> node, and then using that data to direct the conversation dialog path
*  <b>Post-processing</b> of the response provided by Conversations by using set context variables (in this case user preferences) and string processing, for example to allow certain Conversations paths to trigger the sending of a tweet in parallel with providing an answer as normal.

The flow also illustrates the use of the new <a href="">microphone</a> node in conjunction with <a href="">Watson Speech-to-Text</a> and <a href="">Watson Text-to-Speech</a> to test verbal interaction with Watson Conversations directly from within Node-RED.

## Application flow
![OK Watson Flow](img/ok-watson-starter-flow.png)
[OK Watson Flow JSON](ok-watson-starter-flow.json)
 &nbsp;   |  &nbsp;  [Starter Conversation JSON](ok-watson-starter-conversation.json)

## Demo scripts
Once configured (see setup below) follow these steps to test the flow:
1. trigger the 'demos' node in the <b>test txt in</b> group
2. set the demo user's twitter handle in the 'add context' node in the config group on the top left. Make sure not to include the '@'
3. if the demo user already follows the account that is configured in the flow tweet node, the direct messaging preference can optionally be set to true.
<img src=img/setuser.png width=300>


## Flow description
*** config nodes ***
* <b>reset context</b>: trigger the resetting of the saved context variables
* <b>set user details</b>:
Description of the flow process. (to follow)

*** speech in nodes **
* <b>microphone</b>: click right-hand handle once to start recording, click again to stop. On stop, the recording is sent onwards.
* <b>Speech-to-Text</b>: converts spoken input. Performs better on longer sections.
* <b>set payload</b>: simple re-mapping of Speech-to-Text node output to the msg.payload.

*** test txt in ***
* set of triggers pre-configured with demo text to send into the flow.


## Setup Documentation
*** Setup of the starter conversation in Watson Conversations ***
1. Download and save the [OK Watson Starter Conversation JSON](ok-watson-starter-conversation.json).  
2. Add the Watson Conversations Service to your Blumix and note your service credentials.
3. Launch the Watson Conversations GUI. You can  import the OK Watson Starter Conversation workspace by selecting ![icon](importconv.png) and navigating to the JSON file saved in 1. above.
4. Make a note of the workspace ID, which can be accessed under "View details" from the menu on the workspace tile:
<img src=img/workspace.png width=200><img src=img/workspaceid.png width=200>
5. (Optional) to modify the conversation flow, refer to the documentation for the Watson Conversation GUI <a href="https://www.ibm.com/watson/developercloud/doc/conversation/index.shtml">here</a>.

*** Node-RED Flow Setup ***
1. Import the [OK Watson Flow](ok-watson-starter-flow.json) via the clipboard import functionality in Node-RED.
2. In the <img src=img/convnode.png height=20> node on the flow, configure your Watson Conversation Service credentials and Workspace ID as noted above.
3. Set up the <img src=img/tweetnode.png height=25> node with twitter credentials. This will be the account that the OK Watson flow will tweet from. Note that if you want to be able to receive direct messages from this account (see ***set user details*** in the flow description above), you need to follow it first.
4. Obtain Tone-Analyser credentials by adding the service to your bluemix, and configure these in the <img src=img/toneanalysernode.png height=20> node
