#Language Translation
Language Translation

The Language Translation service enables you to translate text from one language to another. These languages are supported:

- The News domain - targeted at news articles and transcripts, it translates English to and from French, Spanish, Portuguese or Arabic.
- The Conversational domain - targeted at conversational colloquialisms, it translates English to and from French, Spanish, Portuguese or Arabic.
- The Patent domain - targeted at technical and legal terminology, it translates Spanish, Portuguese, Chinese, or Korean to English.

To use the Language Translation service in Node-RED you first need to make this service available in a way Node-RED can connect to that service. There are two ways of doing that depending if you use Node-RED in Bluemix or use a local Node-RED instance. Both ways are described here.

If you are using Node-RED on Bluemix, go to your Node-RED app and click 'add a service or API' This will open a new window where you can select the Language Translation service (Language Identification is part of this service.). Then you click on 'Use' then a screen will show which asks for a restage, click on 'yes' and wait a minute. When the application is started click on the Url to go to your Node-RED application.

If you use a local instance of Node-RED go to the Bluemix catalog and go to the Language Translation service and click on it. Make sure that there is no app bound to this service and click 'Use"

If one of either ways are done, you can continue with the following.

![`LTOverview`](images/LT.jpg)

In this example some random text (in English in this case) is injected, translated (to French) and put the result to the Debug tab. In the following screenshots you can see how the nodes are configured.

The inject node:

![`LTInject`](images/LT_Inject.jpg)

You can use any text for this. I put Node-RED in double quotes, otherwise it would be translated as well.

The translation node wil be configured like this. The text in this case is English so select English. Based on your source choose the right domain: News or Conversational.

![`LTConfig`](images/LT_Config.jpg)

As the translated text will be returned on message.payload, make sure that you select this in de debug node. The output from the debug node will then be:

![`LTOutput`](images/LT_Debug.jpg)

You can also copy the code for the flow here and import it from clipboard into Node-RED:

Language Translation flow

