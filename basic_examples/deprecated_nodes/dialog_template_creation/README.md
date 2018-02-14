# Dialog Template Creation

## Overview
The dialog service enables automation of a conversation between your application and a user. The node is available
as a Watson Developer Cloud contribution to Node-RED and needs to be installed. 

## Installation of the Dialog Node
Follow the instructions at [watson contribution nodes](/watson_contribution_nodes/README.md) 
to install the dialog node into your IBM Cloud instance of Node-RED. 
*Notice* : in the Watson Node-RED Boilerplate this installation have been already done.

## On IBM Cloud

If you are using Node-RED on IBM Cloud, go to your Node-RED app and click 'add a service or API' This will open a new window where you can select the Watson Dialog service. Then you click on 'Use' a screen will show which asks for a restage, click on 'yes' and wait a minute. When the application is started click on the Url to go to your Node-RED application.

## Create Dialog Template

Copy an inject node.

![Start trigger for dialog template create](images/dialog_template_create_input.png)

Feed the output from the inject node to a HTTP request node.  

![HTTP fetch of dialog template file](images/dialog_template_create_http_file_fetch.png)

Configure the mode for the http request node to fetch a dialog file.

![HTTP file fetch](images/dialog_template_file_fetch.png)

Feed the file into a function node.

![Prepare params for dialog creation](images/create_dialog_service_params.png)

Code up the function node to pass in the file, and to give the dialog template a name.

```
msg.dialog_params = {};
msg.dialog_params["file"] = msg.payload;
msg.dialog_params["dialog_name"] = "Pizza Ordering";
return msg;
``` 

![Dialog Service Param settings](images/create_dialog_param_settings.png)

Feed the output into a dialog service node.

![Dialog Service Node](images/create_dialog_dialog_node.png)

Set the mode for the node to Create Dialog.

![Dialog Service Create Mode](images/create_dialog_dialog_node_configuration.png)


Use a debug node to see the output from the service,

![Dialog service response debug](images/create_dialog_reponse.png)

which will be available on msg.dialog 

![Dialog service response message](images/create_dialog_reponse_msg.png)

If the dialog is create you should see the following response.

![Dialog created dialog id](images/dialog_create_dialigid.png)

If you run the flow again, then you the create should be rejected as a duplicate.

![Dialog duplicate name](images/dialog_create_duplicate.png)

The completed flow is available at [Dialog Template Creation Flow](dialog_template_creation_flow.json).

<n>Notice</b> : you can also use Dropbox instead of using the HTTP Request node : How to setup your Node-RED with [Dropbox nodes](https://github.com/watson-developer-cloud/node-red-labs/tree/master/utilities/dropbox_setup)
