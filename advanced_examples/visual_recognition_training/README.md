# Visual Recogition Training with your own images advanced Lab
## Overview
Version 2 of the Visual Recognition service allows you to build your own image classifications. There is, however, not
yet a node-RED node for this version of the Visual Recognition service. To allow you to use this training capability in
node-RED we have adapted the visual recognition sample application. We show you how to use the sample appplication to create
your own classifications, and our modified version provides an API that you can use to check an image against your visual 
classififier. 

## Training
In this section we show you how to create and train your own new visual recognition classifications. You can do this using 
our modified version of the visual recognition sample 
application [Visual Recognition sample application](https://visual-recognition-moscow.mybluemix.net/)

The sample application has an option that will allow you to create a custom classifier.  

![Use the sample application for image training](images/avr_sample_app_train_option.png)

Each classification needs a minimum of 50 positive and 50 negative images. So for example if you were creating 
classifications for sporting events, then for each event type you would provide 50 positive and 50 negative images. eg.
50 images showing Soccer, 50 images not showing soccer for the Soccer classification. Similary 50 positive and 50 negatives images 
for the Rugby classification. 

![Upload both positive and negative examples](images/avr_sample_image_training.png)

It may take a few minutes for your new classifier to be ready

![Training in progress](images/avr_sample_training_inprogress.png)

Once it is ready you can begin to use your classification. You do, however, need the classifier id. You can get this when 
the test option is displayed

![Visual Recognition Test](images/avr_classifier_test_option.png)

We will be modifying the application to display the classifier id, but for now you can determine the 
id using browser developer tools.

![Browser Developer Tools](images/avr_browser_developer_tools.png)

Switch to the console and type "CLASSIFIER_ID". The console will show you the ID for your Classifier.
![Browser Classifier ID](images/avr_browser_console_classifier_id.png)

## Classification

The first part of the classification flow, displays a form where you are prompted to enter an image url and a classifier id. The id comes from the training you 
completed previously and the image url is the new image that you want to check against your classifier.

![AVR Classification Request Form](images/avr_show_input_form.png)

Where HTML Input Form looks like 
```
<h1>Visual Recognition Demo on Node-RED</h1>
<h2>Type a image URL</h2>
<form  action="{{req._parsedUrl.pathname}}">
    Url: <input type="text" name="url"/><br/>
    Classifier id: <input type="text" name="classifier_id"/><br/>
    <input type="submit" value="Classify"/>
</form>
```

When the response from the form is returned and a url has been specified, then the application can start the process of 
classifying the image as specified in the image url.

![AVR Check Form Input](images/avr_check_input_from_form.png)

If no url has been provided then the form is redisplayed
 
![AVR Check Image Param](images/avr_check_image_param.png)

if a url has been provided then we pass control to a function node

![AVR Prepare REST Call](images/avr_classify_function_node.png)

that caches the image url and sets up a REST call to our classify API.

```
msg.imageurl = encodeURI(msg.payload.url)
msg.url="https://visual-recognition-moscow.mybluemix.net/api/classify?url=" + encodeURI(msg.payload.url)+"&classifier_id=" + encodeURI(msg.payload.classifier_id);
return msg;
```

The API is then called.

![AVR Prepare REST Call](images/avr_rest_call_classify.png)

which will return a json object.

![AVR JSON Response From Classify](images/avr_classify_return_json.png)

We then pass the reponse to a function

![AVR Handle Classify Response](images/avr_handle_classify_response.png)

which sets the headers so that the browser will treat the response as HTML
```
msg.imageclasses = msg.payload;
msg.headers = {'Content-Type' : 'text/html'};
return msg;
```

The return html is then created
![AVR HTML Classification Response](images/avr_classification_html_response.png)

which makes use of mustache templating to iterate over the response and inject the image, classification and confidence
into the response.

```
<h1>Visual Recognition on Node-RED</h1>
{{#imageclasses}}
    {{#images}}
        <div><img src="{{imageurl}}" height='100'/></div>
        <div>{{image}}</div>
        <br/>
        <table border='1'>
            <thead>
                <tr><th>Classifier</th><th>Score</th></tr>
            </thead>
            <tbody>
                {{#scores}}
                    <tr>
                        <td>
                            {{name}}
                        </td>
                        <td>
                            {{score}}
                        </td>
                    </tr>
                {{/scores}} 
                {{^scores}}
                    <tr>
                        <td colspan="2">
                            No match to classification
                        </td>
                    </tr>
                {{/scores}}                
            </tbody>
        </table>
    {{/images}}    
{{/imageclasses}}
```

## Running Application

If you provide an image that doesn't match, then the application will tell you

![AVR No Classification Match](images/avr_no_match.png)

When you provide an image that does match, then you will get a confidence level.

![AVR Classification Match](images/avr_classification_match.png)

If you don't specify a classifier id, then the application will try matching against all its classifications. Only classifications 
that it matches will be returned.

![AVR Classifier Specified](images/avr_no_classifier_input.png)



The completed flow is available at [Visual Recognition Image Classification Flow](avr_classify_image_flow.json)
