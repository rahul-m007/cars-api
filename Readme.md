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