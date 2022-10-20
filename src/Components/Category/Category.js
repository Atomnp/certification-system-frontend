import { CategoryTable } from "./CategoryTable";
import { SearchBar } from "../Filters";
import { InputField } from "./AddCategoryForm";
import React, { useState, useEffect } from "react";
import axios from "../../lib/api";
import { BrowserRouter as Router, useParams } from "react-router-dom";

function Category({ setToastData, setLoading }) {
  let { event_id } = useParams();
  // category id is represented by category name, each categories have unique id
  const onDelete = async (category_name) => {
    let res;
    try {
      res = await axios.delete(`/categories/${category_name}`);
    } catch (err) {
      console.log(err);
    }
    setCategories(
      categories.filter((e) => {
        return e.name !== category_name;
      })
    );
  };
  const onEdit = async (edited_category) => {
    let res;
    try {
      res = await axios.post(
        `/category/${edited_category.name}`,
        edited_category
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }

    // categories that are not edited
    let rest_categories = categories.filter((e) => {
      return e.name !== edited_category.name;
    });
    setCategories([rest_categories, res.data]);
  };

  const addCategory = async (name, desc) => {
    let res;
    try {
      res = await axios.post(
        "/categories/",
        JSON.stringify({
          name: name,
          description: desc,
          event: event_id,
        })
      );
      setCategories([...categories, res.data]);
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
  const [categories, setCategories] = useState([]);
  //   async function timeout(delay: number) {
  //     return new Promise( res => setTimeout(res, delay) );
  // }
  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        // await timeout(10000);
        let res = await axios.get(`categories?event_id=${event_id}`);
        console.log("res.data", res.data);
        setLoading(false);
        setCategories(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <InputField addCategory={addCategory} />
      <SearchBar />

      <CategoryTable
        categories={categories}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    </>
  );
}

export default Category;
