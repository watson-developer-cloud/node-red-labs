# Dialog service

## Overview
The dialog service enables automation of a conversation between your application and a user. The node is available
as a Watson Developer Cloud contribution to Node-RED and needs to be installed. 

## Installation of the Dialog Node
Follow the instructions at [watson contribution nodes](/watson_contribution_nodes/README.md) 
to install the dialog node into your Bluemix instance of Node-RED. 

## List available dialogs
The first part of the flow is to generate a list of the available dialogs. 

Copy an inject node.

![Input to dialog list](images/dialog_list_input.png)

Feed the output from the inject node to a dialog node.

![dialog node for list of dialogs](images/dialog_list_dialog_node.png)

Configure the mode for the dialog node to list the available dialogs.

![configure the list dialog node](images/dialog_list_dialog_node_properties.png)

Send the output to a debug node.

![dialog list output node](images/dialog_list_output.png)

The list is available at msg.dialog.

![dialog list output node](images/dialog_list_output_properties.png)

If you haven't registered any dialogs then the output list will be empty.

![dialog empty list output node](images/dialog_list_results_no_dialogs.png)

Either follow [Dialog Template Creation](../dialog_template_creation/README.md) or use
the dialog tool [dialog tool](https://github.com/watson-developer-cloud/dialog-tool) to register
your dialogs. 

![dialog tool](images/dialog_dialog_tool.png)

Once you have registered dialogs, then they will show up.

![dialog list output node](images/dialog_list_results_found_dialogs.png)

Make a node of the dialog IDs you will need these for the next step.

## Start a Dialog Conversation
When the dialog ID is known, a conversation can be started.

Add a new inject node.

![dialog input start conversation](images/dialog_start_input.png)

Configure the input to send a string as the conversation starter.

![dialog input start text](images/dialog_start_input_properties.png)

Add a new dialog node.

![dialog start dialog](images/dialog_start_dialog.png)
 
Configure the node to start the conversation, setting the dialog id.

![dialog start dialog properties](images/dialog_start_dialog_properties.png)

Send the output to a debug node.

![dialog start output](images/dialog_start_output.png)

The salutation response from the dialog is available at msg.dialog.

![dialog start output properties](images/dialog_start_output_properties.png)

The salutation response from the dialog is available at msg.dialog.

![dialog start salutation](images/dialog_start_results.png)

Make a note of the client ID and the converstaion ID. You will need these to continue the conversation.

## Continue a Conversation
With the client ID and conversation ID dialog ID you can continue a conversation, the state and properties
will be remembered by the service. 

Add a new inject node.

![dialog input converse](images/dialog_converse_input.png)

Add a new dialog node, setting the mode, dialog ID, client ID, and conversation ID.

![dialog input converse](images/dialog_converse_dialog.png)

Send the output to a debug node. 

![dialog input converse](images/dialog_converse_output.png)

Where you will be able to see the response from the dialog service. 

![dialog input converse](images/dialog_converse_results.png)

## Delete a Dialog
This mode enables you to delete a Dialog given its Dialog ID. To do so, just add the Dialog ID in the node configuration.

![delete a dialog : input](images/dialog_delete_input.png)

Send the output to a debug node

![delete a dialog : output](images/dialog_delete_output.png)

## Delete all Dialogs
This mode enables you to delete all Dialogs associated to the underlying Watson Dialog service instance. <b>Use it with caution as the deletion is permanent</b>

![delete all dialogs : input](images/dialog_delete_all_input.png)

Send the output to a debug node

![delete all dialogs : output](images/dialog_delete_all_output.png)


The completed flow is available at [Dialog Flow](dialog_flow.json)
A new flow that illustrates all available Dialog Node Modes is available at [Dialog Flow2](dialog_flow2.json), and proposes an automated Simulation of a Dialog Creation, Starting and following a Conversation. This second flow also shows you the 2 two new modes <b>Delete a Dialog</b>, and <b>Delete All Dialogs</b>.
