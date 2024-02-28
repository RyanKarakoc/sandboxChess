"use client";
import MainMenu from "./Components/MainMenu";
import Header from "./Components/Header";
import { GlobalStateProvider } from "./Components/context/GlobabStateProvider";

export default function home() {
  return (
    <GlobalStateProvider>
      <Header />
      <MainMenu />
    </GlobalStateProvider>
  );
}
