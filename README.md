# Basic-REST-API
![image](https://github.com/MKPNJoanne/Basic-REST-API/assets/97240800/cfa16fc6-7edd-432a-b757-6bfcfc0d51ca)

**REST API = Representational State Transfer**
*The server responds to CREATE READ UPDATE DELETE requests in a standard way
*For example, https://github.com/users
*In this URL, USERS represents the **resource** that the Server is exposing
*Uses http actions like GET POST PUT DELETE 

*https://github.com/users => GETs a list of the resources | acts on the entire resource

*https://github.com/users => POST action used to create a new resource | acts on the entire resource

*https://github.com/users/1 => GETs the resource with a given ID | Acts on a single resource

*https://github.com/users/1 => PUT update the resource with the gievn ID | Acts on a sngle resource
(PUT corresponds with UPDATE instead of creating this update, an existing)

*https://github.com/users/1 => DELETEs the resources with the given ID | Acts on single resources

What does the RESTful API server response contain?
REST principles require the server response to contain the following main components:

Status line
The status line contains a three-digit status code that communicates request success or failure. For instance, 2XX codes indicate success, but 4XX and 5XX codes indicate errors. 
3XX codes indicate URL redirection.

The following are some common status codes:

**200: Generic success response
201: POST method success response
400: Incorrect request that the server cannot process
404: Resource not found**
Message body
The response body contains the resource representation. The server selects an appropriate representation format based on what the request headers contain. Clients can request information in XML or JSON formats, which define how the data is written in plain text. For example, if the client requests the name and age of a person named John, the server returns a JSON representation as follows:

'{"name":"John", "age":30}

CONCLUSION
****URLs used Represent a resource, and they support creating, reading, updating, and deleting using https actions.****
![image](https://github.com/MKPNJoanne/Basic-REST-API/assets/97240800/76b3296f-84f6-4db6-92af-69cc54a426cd)
