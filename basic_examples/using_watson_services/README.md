# Using Watson Services

To use any Watson service inside Node-RED you will need to instantiate an instance of the service from 
IBM Cloud. The services can then either be bound or unbound to your Node-RED
application. If they are bound then when you add the service node to your flow you will not see options to enter
credentials as they are obtained by Node-RED from IBM Cloud.

![`BoundAlchemyService`](images/uws_bound_alchemy_service.png)

When you add a node for a service that you have not bound into your application then you will be prompted to provide 
service credentials.

![`UnboundPIService`](images/uws_unbound_pi_service.png)

You obtain these service credentials from IBM Cloud. Select the unbound service in your IBM Cloud dashboard

![`UnboundIBM CloudService`](images/uws_unbound_bluemix_service.png)

to see the service credentials

![`UnboundServiceCredentials`](images/uws_unbound_service_credentials.png)