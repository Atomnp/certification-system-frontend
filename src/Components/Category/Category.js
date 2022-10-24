import { CategoryTable } from "./CategoryTable";
import { SearchBar } from "../Filters";
import { InputField } from "./AddCategoryForm";
import React, { useState, useEffect, useContext } from "react";
import axios from "../../lib/api";
import { useParams } from "react-router-dom";
import { APIRequestContext } from "../../context";

function Category() {
  const [categories, setCategories] = useState([]);
  const { request_handler } = useContext(APIRequestContext);
  let { event_id } = useParams();

  useEffect(() => {
    request_handler(async () => {
      let res = await axios.get(`categories?event_id=${event_id}`);
      setCategories(res.data);
    });
  }, []);

  const onDelete = (category_id) => {
    request_handler(async () => {
      await axios.delete(`/categories/${category_id}`);
      setCategories(
        categories.filter((cat) => {
          return cat.id !== category_id;
        })
      );
    });
  };

  const onEdit = (edited_category, old_category) => {
    request_handler(async () => {
      let res = await axios.put(
        `/categories/${old_category.id}/`,
        JSON.stringify({
          name: edited_category.name,
          event: event_id,
        })
      );
      // categories that are not edited
      let rest_categories = categories.filter((e) => {
        return e.name !== old_category.name;
      });
      setCategories([...rest_categories, res.data]);
    }, "Category edited successfully");
  };
  // const addCategory = async (name,desc) => {
  const addCategory = (name) => {
    request_handler(async () => {
      let res = await axios.post(
        "/categories/",
        JSON.stringify({
          name: name,
          // description: desc,
          event: event_id,
        })
      );
      setCategories([...categories, res.data]);
    }, "Category Created Successfully");
  };

  const onMailSend = (category_id, send_all) => {
    request_handler(async () => {
      let res = await axios.post(`/send-email/`, {
        send_all: send_all,
        category: category_id,
      });
      return res;
    });
  };

  return (
    <>
      <div className="add-item-form">
        <InputField addCategory={addCategory} />
      </div>
      <div className="search-and-sort">
        <SearchBar />
      </div>
      <div className="list-view">
        <CategoryTable
          event_id={event_id}
          categories={categories}
          onDelete={onDelete}
          onEdit={onEdit}
          onMailSend={onMailSend}
        />
      </div>
    </>
  );
}

export default Category;
