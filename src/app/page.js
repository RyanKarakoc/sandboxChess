'use client'
import  { useState } from "react";
import Menu from "./Components/Button";
import Header from "./Components/Header";


export default function home() {
  const [navigation, setNavigation] = useState("")
  return<>
    <Header />
  <Menu navigation={navigation} setNavigation={setNavigation}/>
  </>


}
