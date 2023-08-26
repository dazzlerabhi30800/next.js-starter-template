import Head from "next/head";
import { useState } from "react";

export default function About() {
  const [name, setName] = useState(null);
  const fetchInfo = async () => {
    const { name } = await fetch("http://localhost:3000/api/hello").then(
      (response) => response.json()
    );
    setName(name);
  };
  return (
    <>
      <Head>
        <title>Starter Template About Page</title>
      </Head>
      About Page
      <button onClick={fetchInfo}>Fetch Info</button>
      {name && <span>{name}</span>}
    </>
  );
}
