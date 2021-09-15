import "./Home.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Carousel from "../carousel/Carousel";
import Repository from "../../api/Repository";
import { Player } from "../../types/Player";
import PlayerList from "../players/PlayerList";
import { useCallback, useEffect, useState } from "react";

const Home = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [activePlayer, setActivePlayer] = useState<Player>(players[0]);

  const getPlayers = useCallback(
    (searchQuery?: string) => {
      console.log("Query: ", searchQuery);
      Repository.getPlayers(searchQuery).then((res) => {
        console.log(res);
        setPlayers(res);

        if (res.length) {
          setActivePlayer(res[0]);
        }
      });
    },
    [setActivePlayer, setPlayers]
  );

  return (
    <>
      <Header />
      <Carousel activePlayer={activePlayer} />
      <PlayerList
        filterPlayers={getPlayers}
        refetchPlayers={getPlayers}
        onActivePlayerChange={(player) => setActivePlayer(player)}
        players={players}
        activePlayer={activePlayer}
      />
      <Footer />
    </>
  );
};

export default Home;
