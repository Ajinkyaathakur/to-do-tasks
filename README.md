
## Installation
- 1.Navigate to the project directory:    cd tasks-api
- 2.Install the dependencies:      npm install
- 3.Start the server:      node index.js
- 4.Open PostMan and make a request to http://localhost:3000/tasks/

## Sample to-do Tasks Added

| id |      Title     |                                 Description                                          | 
|----|----------------|--------------------------------------------------------------------------------------|
|  1 |Design Website | Design a landing page for a Real Estate Website                                      | 
|  2 |Create API     | Create an API using Node.js and postman for CRUD (create / insert / update / delete) | 


## Endpoints
1.	`GET /tasks`: Retrieve a list of all tasks. 
2.	`GET /tasks/:id`: Retrieve a specific task by ID. 
3.	`POST /tasks`: Create a new task. 
4.	`PUT /tasks/:id`: Update an existing task by ID. 
5.	`DELETE /tasks/:id`: Delete a task by ID. 

## Screenshots

Here are some screenshots of the project:


Get /tasks-
![API_Endpoint_Get](https://github.com/Ajinkyaathakur/to-do-tasks/assets/149994043/511b5159-6e4d-4871-914f-bac617fc80f4)

Get /tasks/:id-
![API_Endpoint_Get_id](https://github.com/Ajinkyaathakur/to-do-tasks/assets/149994043/edb2045a-8fef-42c0-8e60-4edc545ef2b9)

Post /tasks-
![API_Endpoint_Post](https://github.com/Ajinkyaathakur/to-do-tasks/assets/149994043/6b182f97-3c9e-4ab7-a423-54a420f31374)

Put /tasks-
![API_Endpoint_Put](https://github.com/Ajinkyaathakur/to-do-tasks/assets/149994043/0b4154e1-cf0e-4495-b1fd-da4473dd6a57)

Delete /tasks-
![API_Endpoint_Delete](https://github.com/Ajinkyaathakur/to-do-tasks/assets/149994043/9db414db-6a38-45d9-a6cb-d9d434b827dd)


**Error Handling**

Get /tasks/:id-
![API_Endpoint_Get_id](https://github.com/Ajinkyaathakur/to-do-tasks/assets/149994043/a897973a-2f8c-4d54-81b4-f413050681a9)

Post /tasks-
![API_Endpoint_Post](https://github.com/Ajinkyaathakur/to-do-tasks/assets/149994043/95021e75-cfd2-4d4b-9590-50195e1940c4)

Put /tasks-
![API_Endpoint_Put](https://github.com/Ajinkyaathakur/to-do-tasks/assets/149994043/4c5b438d-2c54-4346-bf4d-ab34884e2963)


Delete /tasks-
![API_Endpoint_Delete](https://github.com/Ajinkyaathakur/to-do-tasks/assets/149994043/b95730aa-1e57-43c7-92e8-b74e35d8b5f5)

## Sample Requests

1.	`GET /tasks`: Retrieve a list of all tasks.
     - **Request** GET  http://localhost:3000/tasks/
     - **Response:**    [
                          {
                              "id": 1,
                                "title": "Design Website",
                                  "description": "Design a landing page for a Real Estate Website"
                          },
                          {
                               "id": 2,
                                "title": "Create API",
                          "description": "Create an API using Node.js and postman for CRUD (create / insert / update / delete)"
                          }
                      ]
2.	`GET /tasks/:id`: Retrieve a specific task by ID.
	- **Request** GET  http://localhost:3000/tasks/1
     - **Response:**    {
                            "id": 1,
                            "title": "Design Website",
                             "description": "Design a landing page for a Real Estate Website"
                        }
3.	`POST /tasks`: Create a new task. 
     - **Request** POSt  http://localhost:3000/tasks/
     - **Body:raw**     {
                              "id": 1,
                                "title": "Design Website",
                                  "description": "Design a landing page for a Real Estate Website"
                        }
     - **Response:**    {
                              "id": 3,
                              "title": "Design Website",
                               "description": "Design a landing page for a Real Estate Website"
                        }
4.	`PUT /tasks/:id`: Update an existing task by ID. 
     - **Request** PUT  http://localhost:3000/tasks/1
     - **Body:raw**   {
                            "title": "Changed the description",
                            "description": "Updated the description"
                      }
     - **Response:**    [
                          {
                              "id": 1,
                                "title": "Design Website",
                                  "description": "Design a landing page for a Real Estate Website"
                          },
                          {
                               "id": 2,
                                "title": "Create API",
                          "description": "Create an API using Node.js and postman for CRUD (create / insert / update / delete)"
                          }
                      ]
5.	`DELETE /tasks/:id`: Delete a task by ID.
     - **Request** Delete  http://localhost:3000/tasks/1
     - **Response:**    {
                              "message": "Task Deleted Successfully"
                        }












