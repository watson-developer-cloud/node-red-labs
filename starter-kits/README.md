# Node-RED-Starter-kits
This is a collection of sample apps using the Watson nodes in [Node-RED](nodered.org). The apps are starter kit examples of
how to create apps using Node-RED and the [Watson Nodes](https://github.com/watson-developer-cloud/node-red-labs).

Seven new apps exploring the capabilities of Watson Developer Cloud in Node-RED.
Each kit comes with a video introduction, which shows each application in use.

1. [Interpreter](interpreter/README.md)

2. [Video Captioning](video_captioning/README.md)

3. [Breaking News](breaking_news/README.md)

4. [Selfie Training](selfie_training/README.md)

5. [OK Watson](ok_watson/README.md)

6. [Accessibility](accessibility/README.md)

7. [Dashboard Translation](dashboard_translation/README.md)


## Set up Instructions
video instructions to come

To make use of the starter kit applications, you will need some extra node-RED nodes. The easiest way
to get them is to start from our [custom boilerplate starter](https://github.com/watson-developer-cloud/node-red-bluemix-starter)

Otherwise add the following to your package.json, to pull in the extra nodes.
````
    "node-red-contrib-browser-utils":"0.x",
    "node-red-contrib-media-utils":"0.x",
    "node-red-contrib-play-audio": "2.0.x",
````
