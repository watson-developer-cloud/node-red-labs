# Box setup

The Box Node-RED nodes are needed for some of the Watson Labs.  The information in this section describes how to use a Box account and what artifacts are needed to obtain files from the repositories.  
**IBMers - you should _NOT_ use your internal IBM Box account, you must use the external Box website.**

## Setup

Go to [https://app.box.com](https://app.box.com) and create an account.  

Login to the account, click the account icon your name and then Apps.  

![NodeRedStarter](images/BOX-Apps.jpg)

Scroll to where it says "Are You a Developer?"

![NodeRedStarter](images/box_developer_create.png)

Click on 'developers site'.  You might have to create an account also on this site.

Click on the Dashboard button. 

![NodeRedStarter](images/BOX-Get-Started.jpg)

If this is your first time you will see                alternatively you will standard Dashboard

![NodeRedStarter](images/BOX-Create-App.jpg) ![NodeRedStarter](images/BOX-Create-New-App.jpg) 

click on the "Create New App" button

When creating a new app you must first choose the type of app required, select "Custom" and click "Next"

![NodeRedStarter](images/BOX-Custom-App.jpg)

Now you should set the Authentication Method for the App, select "Standard OAuth 2.0" and click "Next"

![NodeRedStarter](images/BOX-Auth-Method.jpg)

Finally you must name your App, provide a unique name for your app and click "Create App" button.

![NodeRedStarter](images/BOX-Name-App.jpg)

Once the app has been created you will see the app has been created then click the "View App" button.

![NodeRedStarter](images/BOX-App-Created.jpg)

**IMPORTANT** : go to your IBM Cloud App and your Node-RED flow Editor. If you have not secured your Node-RED app you need to change the URL

![NodeRedStarter](images/box_developer_bmix_http.png)

Change the URL to have https:// at the front

![NodeRedStarter](images/box_developer_bmix_https.png)

Then go to the place in the Node-RED palette where the Box node is being used (or where you have dragged it to).  

Double-click the Box node and pick the "Add new box-credentials..." and then click the pencil icon to configure the node

![NodeRedStarter](images/box_developer_bmix_node_edit_add.png)

Copy the the whole "https://" line 

![NodeRedStarter](images/box_developer_bmix_redirect_uri.png)

Go back to the Box web site where you are configuring your Box App to add the URL to the Redirect URI

![NodeRedStarter](images/BOX-Credentials.jpg)

At this point copy the client_id and client_secret values - you will use them in the Node-RED Box node

Click "Save Changes"

Go back to the Box config node in Node-RED and enter the client_id and client_secret values 

![NodeRedStarter](images/box_developer_node_red_client_secret.png)

Click "Authenticate with Box" button

Box will show you an option of "Grant access to Box" 

![NodeRedStarter](images/box_developer_node_red_auth_box.png)

Click on the "Grant access to Box" button

![NodeRedStarter](images/box_developer_node_red_authorised.png)

Your Node-RED Box node should now be configured and the only field shown is your Box user name 

![NodeRedStarter](images/box_developer_node_red_configured.png)

Click Add

box_developer_node_red_filename.png

You are now ready to enter a filename which is saved in your Box account.  Click Cancel and move onto the section to load your files into Box.

## Loading files

Go to [https://app.box.com/files](https://app.box.com/files) and login if you haven't already

Click the Upload button and upload the files needed for various labs.  This github has the following files you may use in one of the other Labs :

conversational-agent-application-starter-kit.csv

Exercise_8_end.xml

glossary.tmx

SpaceShuttle.wav

tone_analyser_sample.txt

weatherdatatrain.csv

