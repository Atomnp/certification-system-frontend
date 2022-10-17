import { CategoryTable } from "./CategoryTable";
import { Loader } from "../Loader";
import { SearchBar } from "../Filters";
import { InputField } from "./AddCategoryForm";
import React, { useState, useEffect } from "react";
import axios from "../../lib/api";

function Category({ setToastData }) {
  const [Loading, setLoading] = React.useState(true);
  // category id is represented by category name, each categories have unique id
  const onDelete = async (category_name) => {
    let res;
    try {
      res = await axios.delete(`/categories/${category_name}`);
      console.log(res);
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
      res = await axios.post(`/categories/${edited_category.name}`, edited_category);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
    // categories that are not edited
    let rest_events = categories.filter((e) => {
      return e.name !== edited_category.name;
    });
    setCategories([rest_events, res.data]);
  };

  const addCategory = async (name, desc) => {
    let res;
    try {
      res = await axios.post(
        "/categories/",
        JSON.stringify({
          name: name,
          description: desc, 
          event:'sf2022',         
          location: "Kathmandu",
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
  useEffect(async () => {
    try {
      setLoading(true);
      // await timeout(10000);
      let res = await axios.get("categories/");
      setLoading(false);
      console.log(res.data);
      setCategories(res.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <InputField addCategory={addCategory} />
      <SearchBar />
      {Loading ? (
        <Loader show={Loading} />
      ) : (
        <CategoryTable events={categories} onDelete={onDelete} onEdit={onEdit} />
      )}
    </>
  );
}

export default Category;
