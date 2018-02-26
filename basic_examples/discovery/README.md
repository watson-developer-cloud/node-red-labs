# Lab : Watson Discovery service with Node-RED

## Overview
The Discovery service makes it possible to prepare and search your unstructured data, in the similar way to the deprecated Alchemy News, the Discovery node allows you to create, manage and search the Watson system environment (News in English, Spanish and Korean), as well as any private collections.
Although the node can be used to create and manage your environments and collections, there is tooling provided in the IBM Cloud to create your own discovery environment. Follow the [Getting Started Guide](https://console.bluemix.net/docs/services/discovery/getting-started-tool.html#getting-started-with-the-tooling) to guide you through the process of launching the discovery service tooling, creating a collection, and adding content.

## Node-RED Watson Discovery nodes
There 3 nodes provided for the Watson Discovery service:
1. Discovery Node - list environments, collections, configurations and run queries.
1. Query Builder node - fetches the searchable fields in the collection and allows you to set upto 3 query search items. 
1. Document Loader - will load a document into a collection.
  
## Discovery Flows construction
In this exercise, we will show you how to create several flows to list environments, collections, configurations and run a simple query. Then you will use the Query Builder node to prepare a query to be used by a Discovery Node.

### **List Environments**
Build the following flow.
![Discovery-List-Environments-Flow](images/discovery_lab_list_environments.png)
Configure the Discovery Node to list environments.
![Discovery-List-Environments](images/discovery_lab_list_environments_config.png)
Configure the debug node to display the selected list.
![Discovery-Debug-Environments](images/discovery_lab_list_environments_debug.png)

### Discovery Query Builder Node
The Discovery Query Builder Node can be used to build a query to be used by the
Discovery Node.
Build the following flow.
![Discovery-QueryBuilder-Flow](images/discovery_lab_query_builder.png)
Configure the Query Builder Node to search the News Environment, for the Entities
'Watson' and 'Facebook', with a docSentiment of 'positive'.
![Discovery-QueryBuilder-QBConfig](images/discovery_lab_querybuilder_config.png)
Configure the Discovery Node to limit the search to 5 items, and only the text.
![Discovery-QueryBuilder-DConfig](images/discovery_lab_querybuilder_dconfig.png)
Configure the debug node to display the search results.
![Discovery-Debug-Environments](images/discovery_lab_querybuilder_debug.png)

## Completed Flows
The complete flow is available at [Discovery-Lab](discovery_lab.json).
