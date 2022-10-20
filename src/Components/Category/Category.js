import { CategoryTable } from "./CategoryTable";
import { SearchBar } from "../Filters";
import { InputField } from "./AddCategoryForm";
import React, { useState, useEffect } from "react";
import axios from "../../lib/api";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import handle_errors from "../../lib/utils";

function Category({ setToastData, setLoading }) {
  let { event_id } = useParams();
  // category id is represented by category name, each categories have unique id
  const onDelete = async (category_id) => {
    let res;
    try {
      setLoading(true);
      res = await axios.delete(`/categories/${category_id}`);
      setCategories(
        categories.filter((cat) => {
          return cat.id !== category_id;
        })
      );
      setLoading(false);
      setToastData({
        title: "Success",
        message: "Category Deleted successfully",
        intent: "success",
      });
    } catch (err) {
      handle_errors(err, setToastData, setLoading);
      console.log(err);
    }
  };
  const onEdit = async (edited_category, old_category) => {
    let res;
    try {
      setLoading(true);
      res = await axios.post(
        `/category/${edited_category.name}`,
        JSON.stringify(edited_category)
      );
      let rest_categories = categories.filter((e) => {
        return e.name !== edited_category.name;
      });
      setCategories([rest_categories, res.data]);
      setLoading(false);
      setToastData({
        title: "Success",
        message: "Category Edited successfully",
        intent: "success",
      });
      console.log(res);
    } catch (err) {
      handle_errors(err, setToastData, setLoading);
      console.log(err);
    }

    // categories that are not edited
  };

  const addCategory = async (name, desc) => {
    let res;
    try {
      setLoading(true);
      res = await axios.post(
        "/categories/",
        JSON.stringify({
          name: name,
          description: desc,
          event: event_id,
        })
      );
      setCategories([...categories, res.data]);
      setLoading(false);
      setToastData({
        title: "Success",
        message: "Category Edited successfully",
        intent: "success",
      });
    } catch (err) {
      console.log(err);
      handle_errors(err, setToastData, setLoading);
    }
  };
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        // await timeout(10000);
        let res = await axios.get(`categories?event_id=${event_id}`);
        console.log("res.data", res.data);
        setLoading(false);
        setCategories(res.data);
      } catch (err) {
        handle_errors(err, setToastData, setLoading);
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <InputField addCategory={addCategory} />
      <SearchBar />
      <div style={{ height: "64%", overflowY: "scroll" }}>
        <CategoryTable
          categories={categories}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      </div>
    </>
  );
}

export default Category;
