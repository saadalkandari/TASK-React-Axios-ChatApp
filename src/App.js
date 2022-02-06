import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ChatRoom from "./components/ChatRoom";
import ChatRoomsList from "./components/ChatRoomsList";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

const App = () => {
  const [rooms, setRooms] = useState([]);

  const fetchRooms = async (response) => {
    try {
      response = await axios.get(
        "https://coded-task-axios-be.herokuapp.com/rooms"
      );
      setRooms(response.data);
      //serRooms([...rooms, response.data])
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const createRoom = async (newRoom, response) => {
    // to do : call BE to create a room

    try {
      response = await axios.post(
        "https://coded-task-axios-be.herokuapp.com/rooms",
        newRoom
      );

      setRooms([...rooms, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRoom = async (id) => {
    // to do : call BE to delete a room
    try {
      await axios.delete(
        `https://coded-task-axios-be.herokuapp.com/rooms/${id}`
      );
      setRooms(rooms.filter((room) => room.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="__main">
      <div className="main__chatbody">
        <center>
          <Routes>
            <Route
              path="/room/:roomSlug"
              element={<ChatRoom rooms={rooms} />}
            />
            <Route
              exact
              path="/"
              element={
                <ChatRoomsList
                  deleteRoom={deleteRoom}
                  createRoom={createRoom}
                  rooms={rooms}
                />
              }
            />
          </Routes>
        </center>
      </div>
    </div>
  );
};

export default App;
