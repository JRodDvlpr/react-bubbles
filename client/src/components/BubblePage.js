import React, { useState, useEffect } from "react";
// import axios from "axios";
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {useHistory } from 'react-router-dom';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  //resfresh the color bubbles
  const history = useHistory();
  
  const logout = () => {
    localStorage.removeItem('token');
    history.push('/');

  }

  useEffect(() => {

    axiosWithAuth()
      .get("/colors")
      .then (res => {
        console.log("Bubble data retrieved:", res);

        setColorList(res.data);
      })
      .catch (error => {
        console.log("Couldn't retrieve bubble data:", error);
      })

  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} logout={logout} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
