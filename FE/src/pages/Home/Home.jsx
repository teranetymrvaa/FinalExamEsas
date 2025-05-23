import React from "react";
import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/products";
import Blogs from "../../components/Blogs/Blogs";
import Instagram from "../../components/Instagram/Instagram";
import Title from "../../components/Title/Title";
import Beauty from "../../components/Beauty/Beauty";

function Home() {
  return (
    <>
      <title>Home</title>
      <Hero />
      <Products />
      <Beauty />
      <Blogs />
      <Instagram />
      <Title />
    </>
  );
}

export default Home;
