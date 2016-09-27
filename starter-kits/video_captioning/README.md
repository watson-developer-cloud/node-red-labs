# Video Captioning
**Coming Soon**

Link to video description

## Overview

Uses the FFmpeg nodes (<a href="">FFmpeg-Conversion</a> and <a href="">FFmpeg-Silence-Detect</a>) and Watson Speech-to-Text to create live captions for a video stream.

The UI allows a user to load up a video file (eg. Ted Talk) and send the URL to a Node-RED flow.

Node-RED will:
* Download the video
* Convert the video into an audio buffer
* Perform silence detection on the audio
* Split the audio into sentences based on silences
* Convert audio sentence to text using Speech-to-Text
* Save results to global transcription context

The UI will then poll the global transcription context to access new transcriptions and stitches the sentences back together and displays them at the correct time.

## Application flow
Link to json file

## Flow description

Load UI:

* `HTTP-In` (GET) : receives GET request on `/tv`
* `HTTP-Request` : sends GET request to Github to get HTML content
* `Change` : delete `msg.headers`
* `HTTP-Out` : send HTTP response

Transcription Flow:

* `HTTP-In` (POST) : receives URL
* `Change` : set `msg.payload` to URL
* `FFmpeg-Conversion` : downloads video and converts it into a .wav buffer and sets it to `msg.buffer`
* `Change` : set `msg.payload` to `msg.buffer`
* `FFmpeg-Silence-Detect` : performs silence detection and splits buffer into sentences, `msg.timesplit` contains the start and end times of the sentences in seconds, eg. `[0, 17]`, `msg.buffer` contains the buffer for that sentence
* `Change` : set `msg.payload` to `msg.buffer`
* `Speech-to-Text` : convert buffer into text
* `Change` : set `msg.payload` to `msg.transcription`
* `Function` : push transcription to `global.transcription`

Poll Transcription:

* `HTTP-In` (GET) : receives GET request on `/transcription`
* `Change` : set `msg.payload` to `global.transcription`
* `HTTP-Out` : send HTTP reponse
