import "./Home.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Carousel from "../carousel/Carousel";
import Repository from "../../api/Repository";
import * as React from "react";
import { Player } from "../../types/Player";

const Home = () => {
  const [players, setPlayers] = React.useState<Player[]>([]);

  const getPlayers = async () => {
    const result = await Repository.getPlayers();
    setPlayers(result);
  };

  if (!players.length) getPlayers();

  // console.log(players);
  return (
    <>
      <Header />
      <div className="content centered-grid">
        <Carousel players={players} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
