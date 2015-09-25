#Create a table from the Alchemy Api features

This lab is an extension of this [Alchemy Feature Extraction lab](../../watson_services_labs/alchemy_api_feature_extraction/lab_alchemy_api_feature_extraction.md).
           

With this extended lab you can easily see what the output of the different features of the Alchemy API Feature Extract node is.
With just a few minor changes you can have a different output.

The final flow looks like this:

![`AlchemyOverview](images/AApi-table-overview.jpg)

First set up a 'http in' node like this:

![`Alchemyhttpin](images/AApi-table-hhtpin.jpg)

In have put in resp as this is the response page. but you can add anything.

You can access this page via {http://XXXX.mybluemix.net/resp} where XXXX is the name of your app.

The next node is a 'Switch' node. in the follwoing image you cansee how it is configured:

![`Alchemyhswitch](images/AApi-table-switch.jpg)

