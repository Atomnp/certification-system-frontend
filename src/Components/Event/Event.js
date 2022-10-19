import { EventTable } from "./EventTable";

import { SearchBar } from "../Filters";
import { InputField } from "./AddEventForm";
import React, { useState, useEffect } from "react";
import axios from "../../lib/api";
import handle_errors from "../../lib/utils";

function Event({ setLoaderMessage, setToastData, setLoading }) {
  // event id is represented by event name, each events have unique id
  const onDelete = async (event_name) => {
    let res;
    try {
      res = await axios.delete(`/events/${event_name}`);
      setEvents(
        events.filter((e) => {
          return e.name !== event_name;
        })
      );
    } catch (err) {
      handle_errors(err, setToastData, setLoading);
      console.log(err);
    }
  };
  const onEdit = async (edited_event) => {
    let res;
    try {
      res = await axios.post(`/events/${edited_event.name}`, edited_event);
      // events that are not edited
      let rest_events = events.filter((e) => {
        return e.name !== edited_event.name;
      });
      setEvents([rest_events, res.data]);
    } catch (err) {
      handle_errors(err, setToastData, setLoading);
      console.log(err);
    }
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
    } catch (err) {}
  };
  const [events, setEvents] = useState([]);

  useEffect(async () => {
    try {
      setLoading(true);
      let res = await axios.get("events/");
      console.log(res.data);
      setEvents(res.data);
      setLoading(false);
    } catch (err) {
      handle_errors(err, setToastData);
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
