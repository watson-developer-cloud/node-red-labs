# Discovery service

## Overview
The discovery service makes it possible to prepare and search your unstructured data  in the same was as the Alchemy News prepares and allows search for News.

## Getting Started
Before you can use the service through the node on node-RED you will need to create your discovery environment. Follow the
[Getting Started Guide](https://www.ibm.com/watson/developercloud/doc/discovery/getting-started-tool.shtml) to guide you through the process of
launching the discovery service tooling, creating a collection, and adding content.

## Discovery Flow construction
In this exercise, we will show how create a Discovery Flow. Initially you will use
the Discovery Node to list environments, collections, configurations and run query. Then you will use the Query Builder node to prepare a query to be used by a Discovery
Node.

### List Environments
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
