import React from "react";
import PageTitle from "../../Sheared/PageTitle/PageTitle";

import Banner from "../Banner/Banner";
import Experts from "../Experts/Experts";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <PageTitle title='title'></PageTitle>
      
      <Banner></Banner>
      <Services></Services>
      <Experts></Experts>
    </div>
  );
};

export default Home;
