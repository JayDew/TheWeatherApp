<!-- HEADER -->

# TheWeatherApp

Sample weather application built with Node and Express
<br>



## :ledger: Table of Contents

* [Overview](#book-overview)
* [Features](#beginner-features)
* [Getting started](#checkered_flag-getting-started)
  * [Prerequisites](#prerequisites-gear) 
  * [Installation](#installation-electric_plug)
  * [Run in Docker](#run-in-docker-whale)


## :book: Overview 

*The following repository contains the source code for TheWeatherApp, a sample application build with NodeJS and Express.*


This project is based on 'The Complete Node.JS Developer Course Third Edition' project, available at https://www.udemy.com/course/the-complete-nodejs-developer-course-2/.

## :beginner: Features 

* NodeJS fundamentals
* Express routing
* HBS Templating Engine
    * Data Injection
    * Partials
* API calls from Javascript
* Bootstrap 4

## :checkered_flag: Getting started 
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites :gear:
A step by step series of examples that tell you how to get a development env running.

#### *Start the server*

Install npm and Nodejs

```
$ node --version
$ npm --version
```

Install dependencies 

```
$ sudo npm install
```


Start the server 

```
$ node app.js
```

For more documentation, please consult the Dockerfile present in the application.

### Run in Docker :whale:

Make sure you have [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) installed on you machine.

```sh
$ docker --version
Docker version 19.03.8
```

```sh
$ docker-compose --version
docker-compose version 1.25.0
```

```sh
$ sudo docker build -t <YOUR_NAME>/theweatherapp .
```

```sh
$ sudo docker run -p 3000:3000 <YOUR_NAME>/theweatherapp
```



## :raised_hands: Contributing

Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Merge Request
