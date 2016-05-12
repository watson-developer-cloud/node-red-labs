# Watson-Node-Red-examples

Collection of examples on how to use the Watson nodes in [Node-RED](http://nodered.org/) (Basic and advanced labs). The basic labs are simple standalone examples of how to call each individual Watson Node-RED nodes and the advanced labs are where different Watson Node-RED nodes are combined to create more complex applications.

To use these nodes you first have to set up your environment.
The information on [this page](/introduction_to_node_red/README.md) will get you started in a few minutes. It helps you with:

- setting up your environment
- build your first 'Hello World' flow
- additional information on the non-Watson Nodes you use in the labs

Some nodes in Node-RED make use of the same service in Bluemix, like:
- The Language Identification and Language Translation nodes make use of the Language Translation service in Bluemix.  
- The Feature extract and image analysis nodes make use of the Alchemy API service in Bluemix

You can find different labs in this project:

- [Introduction to Node-RED](/introduction_to_node_red/README.md) (same link as above)
- [Basic Labs using Watson nodes](/basic_examples/README.md) show how to invoke nodes from a simple flow
- [Advanced Labs using multiple Watson nodes](/advanced_examples/README.md) show how to extend or combine where different nodes and services
- [Watson Contribution Nodes](/watson_contribution_nodes/README.md) how to add watson developer cloud contribution nodes to Node-RED

Feel free to use this content, please let us know what you think of it! :bowtie:
## Region
All the labs have been tested against the US South region but have not been fully tested against any other region. Most labs will work in other regions but there are some Watson utilities (eg. Natural Language Classifier Toolkit) that only work in the US South region. 

## Contributing
You want to contribute to this project? Please follow those intructions on [this page](/CONTRIBUTING.md).
If you would like to contribute by updating or creating new nodes for the Watson Developer Cloud API, 
then switch to the [node-red-node-watson](http://github.com/watson-developer-cloud/node-red-node-watson) project.

## License

MIT. Full license text is available in [LICENSE](LICENSE).
