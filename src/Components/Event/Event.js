import { EventTable } from "./EventTable";
import { SearchBar } from "../Filters";
import { InputField } from "./AddEventForm";
import React, { useState, useEffect, useContext } from "react";
import axios from "../../lib/api";
import { APIRequestContext } from "../../context";

function Event() {
  const [events, setEvents] = useState([]);
  const { request_handler } = useContext(APIRequestContext);

  useEffect(() => {
    request_handler(async () => {
      let res = await axios.get("events/");
      setEvents(res.data);
    });
  }, []);

  const addEvent = (name, desc, date1, date2) => {
    request_handler(async () => {
      let res = await axios.post(
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
    }, "Event Added Successfully");
  };

  const onDelete = (event_id) => {
    request_handler(async () => {
      let res = await axios.delete(`/events/${event_id}`);
      setEvents(
        events.filter((e) => {
          return e.id !== event_id;
        })
      );
    }, "Event deleted successfully");
  };

  const onEdit = (edited_event, old_event) => {
    request_handler(async () => {
      let res = await axios.put(
        `/events/${old_event.id}/`,
        JSON.stringify(edited_event)
      );
      // events that are not edited
      let rest_events = events.filter((e) => {
        return e.name !== old_event.name;
      });
      setEvents([...rest_events, res.data]);
    }, "Event edited successfully");
  };

  const onMailSend = (event_id, send_all) => {
    request_handler(async () => {
      let res = await axios.post(`/send-email/`, {
        send_all: send_all,
        event: event_id,
      });
      return res;
    });
  };

  return (
    <>
      <div className="add-item-form">
        <InputField addEvent={addEvent} />
      </div>
      <div className="search-and-sort">
        <SearchBar />
      </div>
      <div className="list-view">
        <EventTable
          events={events}
          onDelete={onDelete}
          onEdit={onEdit}
          onMailSend={onMailSend}
        />
      </div>
    </>
  );
}

export default Event;
