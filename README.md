
**Basic-REST-API: Learning the Fundamentals**
![image](https://github.com/MKPNJoanne/Basic-REST-API/assets/97240800/6009bd1b-f332-4e1e-8300-22389fcab9e0)

This  provides a comprehensive overview of REST APIs (Representational State Transfer), By understanding REST principles, you can effectively interact with various web services and build robust applications.

**What is a REST API?**

A REST API is a standardized way for web applications to communicate with each other. It uses the HTTP protocol and familiar verbs like GET, POST, PUT, and DELETE to perform actions on resources. Think of it as a waiter taking your order (creating or updating a resource) or bringing you your food (retrieving a resource).

**Understanding the Basics:**

**Resources**: Represent specific entities like users, products, orders, etc., accessible through URLs.
-**HTTP** verbs: Used to perform actions on resources:
  -**GET**: Retrieves information about a resource.
  -**POST**: Creates a new resource.
  -**PUT**: Updates an existing resource.
  -**DELETE**: Deletes a resource.
**Status codes**: Communicate the success or failure of a request. Common codes include:
  -200: Success
  -201: Resource created successfully
  -400: Bad request
  -404: Resource not found
**Response body**: Contains the requested data in formats like JSON or XML.

Consider the GitHub API as an example:

-**https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28** This URL represents the "users" resource.

-GET **https://docs.github.com/en/rest/users/users?apiVersion=2022-11-2**8 This request retrieves a list of all users.

-POST **https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28** This request creates a new user.

-**https://docs.github.com/en/rest/users/users?apiVersion=2022-11-2**8 This URL specifies a      single user with ID 1.

-GET **https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28** This request          retrieves information about user 1.

-PUT **https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28** This request updates  user 1's information.

-DELETE **https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28** This request       deletes user 1.

Bonus Resources:

-**RESTful API Design:** https://restfulapi.net/
-**REST Client Extension:**
  https://marketplace.visualstudio.com/items?itemName=humao.rest-client

**Let's embark on your journey to mastering REST APIs!**
