

##Language Identification

The Language Identification enables you to quickly identify the language text is written in.

This service can identify many languages: Arabic; Chinese (Simplified); Chinese (Traditional); Cyrillic; Danish; Dutch; English; Farsi; Finnish; French; German; Greek; Hebrew; Hindi; Icelandic; Italian; Japanese; Korean; Norwegian (Bokmal); Norwegian (Nynorsk); Portuguese; Spanish; Swedish; Turkish; Urdu.

![`LIOverview`](images/LI.jpg)

In this example some random text is injected, identified by the Watson Language Identification service and put the result to the Debug tab. In the following screenshots you can see how the nodes are configured.

To use the Language Identification service in Node-RED you first need to make this service available so Node-RED can connect to that.
There are two ways of doing that depending if you use Node-RED in Bluemix or use a local Node-RED instance. Both ways are described here.

If you are using Node-RED on Bluemix, go to your Node-RED app and click 'add a service or API'
This will open a new window where you can select the Language Translation service (we use the Language Translation service because Language Identifiction is part of this service.).
Then you click on 'Use' a screen will show which asks for a restage, click on 'yes' and wait a minute. When the application is started click on the Url to go to your Node-RED application.

If you use a local instance of Node-RED go to the Bluemix catalog and go to the Language Translation service and click on it. Make sure that there is no app bound to this service and click 'Use"

If one of either ways are done, you can continue with the following.

In the following screenshots you can see how the nodes are configured.

The inject node:

![`LIInput`](images/LI_input.jpg)

You can use any text for this.

The Language Identification node does not need any configuration.

To get the correct output set the output to payload.lang. 

![`LIDebug`](images/LI_debug.jpg)

This will display the identified language with a confidence level:

![`LIOutput`](images/LI_output.jpg)

You can also copy the code for the flow here and import it from clipboard into Node-RED:


[Language Identification flow](LI_flow)



