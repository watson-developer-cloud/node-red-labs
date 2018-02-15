# Dictophone
## Overview
This starter kit flow demonstrates how to use the Watson Speech to Text Node-RED node in 'Web Socket mode'.

### Prerequisites
You will need version >=0.6.3 of node-red-node-watson installed in Node-RED.

## Application Flow
![Flow](images/full_flow.png)
[Get the flow here](flow.json)

## Flow Description
- `HTTP [get] /transcribe` - sets the app URL as a GET on xxxxx.mybluemix.net/transcribe
- `HTTP Request` - gets the webpage from the ibm-early-programs git repo
- `Reset msg.headers` - sets the header to an empty object ready for the next input
- `HTTP response` - ends HTTP request

- `Websocket STT In` - sets the listener on /wss/stt
- `STT with Sockets` - Speech-to-Text service set with 'streaming mode' on narrowband model
- `Websocket out [ws] /ws/stt` - closes websocket flow
