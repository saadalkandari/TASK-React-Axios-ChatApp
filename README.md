# 💬 Chatting website

## Objectives

In this task, you are going to build a chat app 😍. There is an already built in backend that is already prepared, and all what you have to do, is just use the apis to make this front end alive! You are going to use all end-points in the end of this file.

The main purpose of this exercise is to use `Axios` in Front End.

## First things first

1. Fork and clone [this repository](https://github.com/joincoded/Task-React-Axios-FE) to your `development` folder
2. `cd ` to the folder
3. `npm install`
4. `npm start`

## Instructions

1. Install Axios `npm install axios`
2. in App.js `import axios from "axios"`

## 🚪 Fetch rooms

1. a state for rooms is created for you in App.js
2. in App.js create a fetchRooms function ( make sure to use : async , await, try and catch )
3. fetchRooms should be triggered once App is rendered
4. don't forget to setRooms based on the response coming from the API

## ➕ Create a room

1. a createRoom function has been created in App.js
2. pass it to ChatRoomList component
3. then pass it to CreateRoomModel component
4. in CreateRoomModel a room state has been created for you
5. fix the missing code in : handleChange, handleSubmit (read the comments they have hints)
6. in App.js complete createRoom function ( make sure to use : async , await, try and catch )
7. dont forget to add the new room to the list of rooms

## ❌ Delete a room

1. A `deleteRoom` function has been created in App.js
2. pass it to ChatRoomList component
3. then pass it to ChatRoomItem component
4. in ChatRoomItem fix the missing code in : handleDelete (read the comments they have hints)
5. in App.js complete deleteRoom function ( make sure to use : async , await, try and catch )
6. don't forget to delete the room from the list of rooms

# 🤼‍♂️ Challenge

- Update and create messages using the given APIs

## here are all the APIs

| Title           | Method   | Endpoint                                                        | Data required                   |
| --------------- | -------- | --------------------------------------------------------------- | ------------------------------- |
| Fetch all rooms | `GET`    | `https://coded-task-axios-be.herokuapp.com/rooms`               |                                 |
| Create a room   | `POST`   | `https://coded-task-axios-be.herokuapp.com/rooms`               | `title`, `image`, `description` |
| Update a room   | `PUT`    | `https://coded-task-axios-be.herokuapp.com/rooms/${roomId}`     | `title`, `image`, `description` |
| Delete a room   | `DELETE` | `https://coded-task-axios-be.herokuapp.com/rooms/${roomId}`     |                                 |
| Create a msg    | `POST`   | `https://coded-task-axios-be.herokuapp.com/rooms/msg/${roomId}` | `msg`                           |
