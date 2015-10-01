# Node-RED Alchemy Vision image-to-speech advanced Lab
## Overview
In this lab we will explore how Node-RED rapid prototyping capabilities allow to easily combine several Watson services into a single application using Node-RED rapid prototyping capabilities.  

This lab will focus on bringing audio to the previously developed Alchemy Vision Enhanced lab ([alchemy_image_analysis_enh](/advanced_examples/alchemy_image_analysis_thumbs/README.md)), 
by reusing the service developed in the Text_to_Speech lab ([lab_text_to_speech](/basic_examples/text_to_speech/README.md))

The Alchemy Vision API returns a wealth of information when celebrities' faces are detected on an image, including their names and related web URLs. We will use this input, presented in the `identity` attribute to speak up the names.

## Prerequisite
The text-to-speech audio service should be deployed at the `/tts/sayit` URL, using the flow from the TTS lab at [tts_lab_with_param_check.json](/basic_examples/text_to_speech/tts_lab_with_param_check.json)

We will then modify the Alchemy Vision Enhanced lab flow to add simple audio to it, so the base of this lab will be the flow from [alchvis_lab_webfaces_thumbs.json](/advanced_examples/alchemy_image_analysis_thumbs/alchvis_lab_webfaces_thumbs.json)

## Flow building
 - Import into a new flow from the [alchvis_lab_webfaces_thumbs.json](/advanced_examples/alchemy_image_analysis_thumbs/alchvis_lab_webfaces_thumbs.json) flow.
 - To avoid URL conflicts, rename the HTTP Input node URL's to `/alchvoice`, deploy and test that this works.
 - To add the audio playback capability, we will simply use the HTML `<audio>` tag, similarly to what has been done in the web TTS lab.
 - Edit the `Report Faces` template node. We will add a column to that table, which will conditionally add an audio tag to speak out the names of the personalities when identified by the Alchemy Vision API.  We'll add a `Say it!` column to the table:
 ```HTML
 <th rowspan='2'>Say it</th>
```
and populate it with an audio tag that refers to the previously built TTS flow when the identity attribute is set:  
```HTML
<td><audio src="/talk/sayit?text_to_say={{identity.name}}" controls></audio></td>
```

Start the lab flow by pointing at `./alchvoice`URL, the output table will show additional audio controls for recognized personalities:  
![alch_image_to_speech_screenshot](images/alchvis_image_to_speech_screenshot.png)

The completed flow is available at [alchvis_image_to_speech.json](alchvis_image_to_speech.json)
