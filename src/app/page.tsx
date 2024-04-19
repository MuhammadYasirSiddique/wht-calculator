import Agentslider from "../components/Agentslider";
import CustomScript from "@/components/CustomScript";
import Features from "@/components/features";
import HomePage from "@/components/homepage";
import Subscription from "@/components/subscription";
import React from "react";

const Home = () => {
  return (
    <div>
      <CustomScript />

      <HomePage />
      <Features />
      <Agentslider />
      <Subscription />
    </div>
  );
};

export default Home;
