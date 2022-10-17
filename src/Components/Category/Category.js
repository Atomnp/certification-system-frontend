import { EventTable } from "./CategoryTable";
import { Loader } from "../Loader";
import { SearchBar } from "../Filters";
import { InputField } from "./AddCategoryForm";
import React, { useState, useEffect } from "react";
import axios from "../../lib/api";

function Event({ setToastData }) {
  const [Loading, setLoading] = React.useState(true);
  // event id is represented by event name, each events have unique id
  const onDelete = async (event_name) => {
    let res;
    try {
      res = await axios.delete(`/events/${event_name}`);
      console.log(res);
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
      console.log(res);
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
      if (err.response.data) {
        setToastData({
          title: "Error",
          message: err.response.data,
          intent: "danger",
        });
        console.log(JSON.stringify(err));
      }
    }
  };
  const [events, setEvents] = useState([]);
  //   async function timeout(delay: number) {
  //     return new Promise( res => setTimeout(res, delay) );
  // }
  useEffect(async () => {
    try {
      setLoading(true);
      // await timeout(10000);
      let res = await axios.get("events/");
      setLoading(false);
      console.log(res.data);
      setEvents(res.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <InputField addEvent={addEvent} />
      <SearchBar />
      {Loading ? (
        <Loader show={Loading} />
      ) : (
        <EventTable events={events} onDelete={onDelete} onEdit={onEdit} />
      )}
    </>
  );
}

export default Event;