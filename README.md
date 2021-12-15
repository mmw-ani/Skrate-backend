# Skrate-Backend

## This is complete documentation of Backend Assignment API

## Libraries/ Packages Used

### 1. `mongoose` 
It is used to create Schema based model and increase productivity

### 2. `dotenv`
Access env file in other files

### 3. `uid`
It is used to generate random Unique Indentifier

### 4. `nodemon`
It restarts the server when there is any change in source code

**Validated Each User input**

<hr />

## API Documentation
`GET` /user/all
- Read the complete user list
> Sample request :
```
  GET https://skrate-backend.herokuapp.com/user/all
```
> Successful response 
```
  {
    "data":[
      {
        "username":"animesh",
        "userId":"1e2b8117d0387c73"
      },
      {
        ...
      }
    ]
  }
```
<br >

`POST` /user/new
- Create new user
> Sample request :
```
  POST https://skrate-backend.herokuapp.com/user/new
  Content-type:application/json
  
  {
    "username":"animesh"
  }
```
> Successful response 
```
  {
    "uid":"1e2b8117d0387c73"
  }
```
<br>

`GET` /user/:username
- Get user details
> Sample request :
```
  GET https://skrate-backend.herokuapp.com/user/animesh
```
> Successful response 
```
  {
    "username":"animesh",
    "userId":"1e2b8117d0387c73"
  }
```
<br>

`GET` /user/:username/meetings
- Get user meetings
> Sample request :
```
  GET https://skrate-backend.herokuapp.com/user/animesh/meetings
```
> Successful response 
```
  {
    "data":[
            {
              "userId1":"6180826083d20d9e",
              "username1":"animesh2",
              "userId2":"1e2b8117d0387c73",
              "username2":"animesh",
              "date":"2021-12-15T20:36:24.971Z",
              "meetingId":"09e7c55d1e509bf2030f"
            },
            {
              ...
            }
           ]
  }
```
<br>

`POST` /meetings/new
- Create new meeting
> Sample request :
```
  POST https://skrate-backend.herokuapp.com/meetings/new
  Content-type:application/json
  
  {
    "uid1":"6180826083d20d9e",
    "uid2":"1e2b8117d0387c73",
    "date":"2021-12-15T20:36:24.971+00:00"
  }
```
> Successful response 
```
  {
    "meetingId":"09e7c55d1e509bf2030f"
  }
```
<br>

`GET` /meetings/all
- Get all meetings
> Sample request :
```
  GET https://skrate-backend.herokuapp.com/meetings/all
```
> Successful response 
```
  {
    "data":[
               {
                 "uid1":"6180826083d20d9e",
                 "username1":"animesh2",
                 "uid2":"1e2b8117d0387c73",
                 "username2":"animesh",
                 "meetingId":"09e7c55d1e509bf2030f",
                 "date":"2021-12-15T20:36:24.971Z"}
               },
               {...}
           ]
  }
```
<br>

`GET` /meetings/:meetingId
- Get specific meeting detail
> Sample request :
```
  GET https://skrate-backend.herokuapp.com/meetings/09e7c55d1e509bf2030f
```
> Successful response 
```

  {"data":
          {
            "uid1":"6180826083d20d9e",
            "username1":"animesh2",
            "uid2":"1e2b8117d0387c73",
            "username2":"animesh",
            "meetingId":"09e7c55d1e509bf2030f",
            "date":"2021-12-15T20:36:24.971Z"}
          }
  }
```
<br>

<hr>

## Run the project locally 
## 1. Clone the `Skrate-backend` project
```
git clone https://www.github.com/mmw-ani/Skrate-backend.git
```
## 2. Create .env file and set a variable MONGO_URI
```
// .env file example
MONGODB_URI = "your_mongo_db_url"
```
## 3. Install package dependencies 
Open the terminal
```
cd Skrate-backend
npm install
```
## 4. Start development Server
```
npm start
```
> Backend server runs on localhost:3001 by default
