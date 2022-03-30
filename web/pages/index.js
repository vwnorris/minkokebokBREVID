import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1>Hei</h1>
    </div>
  );
}

const Melding = () => {
  let name = "Victor";
  return <p>Dette er en melding til deg! {name}</p>;
};
