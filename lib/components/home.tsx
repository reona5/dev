import React from "react";
import Profile from "./profile";

const Home = () => {
  return (
    <div className="home">
      <Profile />

      <style tsx>{`
        .home {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default Home;
