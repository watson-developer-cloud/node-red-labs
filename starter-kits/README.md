# Node-RED Starter-kits
This is a collection of sample apps using the Watson nodes in [Node-RED](nodered.org). The apps are starter kit examples of
how to create apps using Node-RED and the [Watson Nodes](https://github.com/watson-developer-cloud/node-red-labs).

There are 12 applications exploring the capabilities of Watson Developer Cloud in Node-RED.
Each kit comes with a video introduction, which shows each application in use.

1. [Interpreter](interpreter/README.md) - uses Speech to Text, Language Translator and Text to Speech to translate audio from a microphone into a different language.

2. [Video Captioning](video_captioning/README.md) - uses Speech to Text, Language Translator and FFMPEG nodes to add captioning to a video.

3. [Breaking News](breaking_news/README.md) - uses Discovery and Tone Analyzer to search Twitter for related news categories and displays tweets and tone analysis in a dashboard.

4. [Selfie Training](selfie_training/README.md) - uses Visual Recognition to train the system on an individuals 'selfie' and subsequently recognize them.

5. [OK Watson](ok_watson/README.md) - uses Speech to Text, Language Translator, Watson Assistant, Tone Analyzer and Text to Speech.

6. [Accessibility](accessibility/README.md) - uses Visual Recognition and Text to Speech to convert written documents into audio.

7. [Dashboard Translation](dashboard_translation/README.md) - uses Language Translator and dashboard to create a friendly UI for language translator.

8. [Selfie Description](selfie_description/README.md) - uses Visual Recognition, camera and file buffer to capture a static image from a video clip.

9. [Dictaphone](dictaphone/README.md) - uses Speech to Text with websockets.

10. [TTSaudio](text_to_speech_audio/README.md) - uses Text to Speech to play audio through the browser.

11. [Babelfish](babelfish/README.md) - uses Speech to Text, Language Translator and Text to Speech to select an input language and translate into a different language through the web browser.

12. [Aide](aide/README.md) - uses Speech to Text, Watson Assistant and Text to Speech to interact with a chat bot through speech or typing.


## Set up Instructions
To make use of some of the starter kit applications, you will need some extra Node-RED nodes. The easiest way
to get them is to use the 'Manage Palette' option in Node-RED to install the following community nodes:
- `node-red-contrib-browser-utils`
- `node-red-contrib-media-utils`
- `node-red-contrib-play-audio`
- `node-red-dashboard`
