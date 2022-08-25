Assignment 3. Services Interaction
Imagine that we have two services - ServiceA and ServiceB. Both services have to communicate with each other in some way.

Given this information, please answer following questions:
    1) What options do we have to establish such communication?
    2) For each option describe what are the pros and cons of this solution?
    3) For each option describe what are the cases the solution fits best?
------------------------------------------------------------------------------------------------------------------------------------------
1) There are multiple options available for this solution. Here are some example of the solutions:
- a. Will Dockerize both the service in a same network, and outside world communication with these if are not required so will not publish the ports.
- b. Both the services are available to connect each other via rest apis

2) By the help of containerizations,
- a.
  - i) If we choose to go with default docker setup the have a new network with the default driver 'bridge' which provide us the flexibility of DNS resolver, thus if the services with in the same network,
they can each communicate each other with "<service_name>:<container_port>" option, as there we will only publish the ports if and only if the services need outside traffic to redirect with in the conrtainer, otherwise we can say it maintain the privacy and security but the problem with this is the "Horizontal Scaling", thus we can only go with "Vertical Scaling" option. 

  - ii) If we choose to go with docker Swarm we have overlay driver instead of bridge, on top of 2.(a)(i) we can also able to leverage the benifits of Horizontal Scaling instead of Vertical Scaling.
By the help of Quorum((N/2)+1) where N is the no of Manager Nodes we can easily scale the system by Managers(odd nos) & Workers(odd/even no) design principle

    The process describe in a.i & a.ii will also provide the low latency while communicating each other.

- b. if both the services are available to connect each other via rest apis, there might need some precautions:
  - IP whitelisting if they are on different servers
  - Configure the same origin policy so that they only response to the only known requests
  - In case of lambdas we need to configure the resource policies, iam policies

  Problems & Solutions:

  - as they are on different servers so there is a risk that outside traffic may came to this, so in this situation we can use the VPC
  - Latency will be increased
  - If they are on the same server and assuming that no port opend by the help of security groups, in the server became unavailable due to some reason we lost both the services.

3. As I mentioned in point no 2. we can build a list of solutions based on the usecase we have, every solution may containts it's own pros and cons.

