# Simple CRUD App
This is a simple CRUD app written in Node.js

## Root URL
https://gopeeey-simple-crud.herokuapp.com

## Routes
Data stored on the database follow the 'user' model and records
can be obtained from routes under '/users'.

#### POST '/create':
creates a new user record. Takes the following parameters:  
```
{
    name: String,
    email: Sting,
    country: String
}
```  
Example: *https://gopeeey-simple-crud.herokuapp.com/users/create*

#### GET '/':
Fetches all user records in the database  
Example: *https://gopeeey-simple-crud.herokuapp.com/users*

#### GET '/:id':
Fetches a single user whose id is appended to the url  
Example: *https://gopeeey-simple-crud.herokuapp.com/users/609496d99627180004b1a66b*

#### PUT '/:id':
Updates the record of a single user whose id is appended to the url.  
Takes any one of the following parameters  
```
{
    name: String,
    email: Sting,
    country: String
}
```  
Example: *https://gopeeey-simple-crud.herokuapp.com/users/609496d99627180004b1a66b*

#### DELETE '/:id':
Deletes the record of a single user whose id is appended to the url  
Example: *https://gopeeey-simple-crud.herokuapp.com/users/609496d99627180004b1a66b*