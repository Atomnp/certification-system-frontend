import { EventTable } from "../Components/EventTable";
import { SearchBar } from "../Components/Filters";
import { InputField } from "./AddEventForm";
import React, { useState, useEffect } from "react";
import axios from "../lib/api";

function Event({ setToastData }) {
  // event id is represented by event name, each events have unique id
  const onDelete = async (event_name) => {
    let res;
    try {
      res = await axios.delete(`/events/${event_name}`);
    } catch (err) {
      console.log(err);
    }
    setEvents(
      events.filter((e) => {
        return e.name !== event_name;
      })
    );
  };
  const onEdit = async (edited_event) => {
    let res;
    try {
      res = await axios.post(`/events/${edited_event.name}`, edited_event);
    } catch (err) {
      console.log(err);
    }
    // events that are not edited
    let rest_events = events.filter((e) => {
      return e.name !== edited_event.name;
    });
    setEvents([rest_events, res.data]);
  };

  const addEvent = async (name, desc, date1, date2) => {
    let res;
    try {
      res = await axios.post(
        "/events/",
        JSON.stringify({
          name: name,
          description: desc,
          start_date: date1,
          end_date: date2,
          location: "Kathmandu",
        })
      );
      setEvents([...events, res.data]);
    } catch (err) {
      console.log(err);
      if (err.response.data) {
        setToastData({
          title: "Error",
          message: err.response.data,
          intent: "danger",
        });
      }
    }
  };

  const [events, setEvents] = useState([]);

  useEffect(async () => {
    try {
      let res = await axios.get("events/");
      setEvents(res.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <div style={{ height: "25%" }}>
        <InputField addEvent={addEvent} />
      </div>
      <div style={{ height: "10%" }}>
        {" "}
        <SearchBar />
      </div>
      <div style={{ height: "64%", overflowY: "scroll" }}>
        <EventTable events={events} onDelete={onDelete} onEdit={onEdit} />
      </div>
    </>
  );
}

export default Event;
