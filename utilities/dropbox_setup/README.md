# Dropbox setup

For many of the Watson Labs the Dropbox and Box Node-RED nodes are used.  The information in this section describes how to create a Dropbox account and what artifacts are needed to obtain files from the repositories.

##Setup

Go to[ http://dropbox.com]( http://dropbox.com) and create an account

Go to the Home location and then scroll to the bottom of the page until you see the Help Privacy together 

![NodeRedStarter](images/dropbox_option.png)

Click on the ellipses

![NodeRedStarter](images/dropbox_developers_option.png)

Click on 'Create your app'

![NodeRedStarter](images/dropbox_create_app01.png)

In 'Choose an API' select 'Dropbox API'
In 'Choose the type of access you need' select 'Full Dropbox'

Accept the terms and Click Submit - you should be presented another window 

![NodeRedStarter](images/dropbox_create_app01.png)

![NodeRedStarter](images/dropbox_app.png)

Click on Show option

![NodeRedStarter](images/dropbox_api_keys.png)

Record the 'App key' and 'App secret' values - you will need these in other Labs.

Scroll down until you see 'Generate access token', click on the Generate button

![NodeRedStarter](images/dropbox_generate_token.png)

![NodeRedStarter](images/dropbox_generate_token_show.png)

Record the token value - again you will use this in combination with the 'App key' and 'App secret' values.

##Loading files

Open another browser and download and save to your local system the following files

[weatherdatatrain.csv](weather_data_train.csv)

[conversational-agent-application-starter-kit.csv](conversational-agent-application-starter-kit.csv)


In Dropbox go to the Home page and then right click and pick Upload and upload the files

![NodeRedStarter](images/dropbox_upload.png) 

![NodeRedStarter](images/dropbox_files.png)









