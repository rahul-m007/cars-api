# Cars API
***
A simple cars api setup with stucture to expand features."

## Prerequisite
***
* The developer / tester is required to have MYSQL setup in their system.

## Installation
***
To start using this api system, follow the following instructions. 

* create a database with name 'test' in MYSQL.
```
$ git clone https://github.com/rahul-m007/cars-api
$ cd carsApi
$ npm install
```
* change db config in config/env.js
* replace current config with your config - database, username, password and host. Usually host is 'localhost'.
```
$ npm start
```
Note: To test this application you can use any api testing tool. Postman is my personal favourite.

## REST API
***
### [C] Create / Add a car

#### Request
`POST /api/admin/car`

    {
        "brand" : "Shelby",
        "model" : "Cobra",
        "engineType" : "Petrol",
        "year" : "1966"
    }

#### Response
    {
        "id": 1,
        "brand": "Shelby",
        "model": "Cobra",
        "engineType": "Petrol",
        "year": "1966",
        "updatedAt": "2022-03-17T17:19:57.636Z",
        "createdAt": "2022-03-17T17:19:57.636Z"
    }

***

### [R] Read / Get a car info

#### Request
`GET /api/admin/car/1`  -> where 1 is the car id

#### Response
    {
        "id": 1,
        "brand": "Shelby",
        "model": "Cobra",
        "engineType": "Petrol",
        "year": "1966",
        "updatedAt": "2022-03-17T17:19:57.636Z",
        "createdAt": "2022-03-17T17:19:57.636Z"
    }

***

### [U] Update a car info
#### Request
`PUT /api/admin/car/1` -> where 1 is the car id

    {
        "brand" : "Shelby",
        "model" : "Cobra",
        "engineType" : "Diesel",
        "year" : "1968"
    }

#### Response

    {
        "message": "successfully updated a car with id = 1"
    }
***
### [D] Delete a car info
#### Request
`DELETE /api/admin/car/1` -> where 1 is the car id

#### Response
    {
        "message": "successfully deleted a car with id = 1"
    }
***
### [S] Search for car info
#### Request
`POST /api/admin/car/search`

    {
        "brand" : "Shelby"
    }

or

    {
        "year" : "1978"
    }

#### Response
    {
        "id": 1,
        "brand": "Shelby",
        "model": "Cobra",
        "engineType": "Petrol",
        "year": "1978",
        "updatedAt": "2022-03-17T17:19:57.636Z",
        "createdAt": "2022-03-17T17:19:57.636Z"
    }

***

## Status Codes
* 200 - Success
* 422 - Input Error returning after validation
* 400 - General Input Error | Active
* 500 - Server internal Error | Inactive


## Things to NOTE
* we can achieve a result in multiple methods, it doesn't make any one method superior.
* Here I have choosen to use [Sequelize]("https://sequelize.org/"), an ORM which is generally a prefered choice among the dev community and many companies.
* We can move the env.js config data to the system env.

* EDGE CASES: Currently the project is not handling certain edge cases like duplicate data, empty data, authentication, etc, we can do so after recognising all required edge cases.

* Fresh Start: The project starts clean by dropinng the table everytime the project restarts.To keep the previous data in db change 'force' to false in the sequelize sync.
ie, line 15 in server.js 