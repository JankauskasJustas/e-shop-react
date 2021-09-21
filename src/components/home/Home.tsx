import "./Home.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Carousel from "../carousel/Carousel";
import Repository from "../../api/Repository";
import PlayerList from "../players/PlayerList";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setActivePlayerId, setStatePlayers } from "../../state/actions";

const Home = () => {
  const dispatch = useDispatch();

  const getPlayers = useCallback(
    (searchQuery?: string) => {
      Repository.getPlayers(searchQuery).then((res) => {
        dispatch(setStatePlayers(res));

        if (res.length) {
          dispatch(setActivePlayerId(res[0].id as number));
        }
      });
    },
    [dispatch]
  );

  return (
    <>
      <Header />
      <Carousel />
      <PlayerList filterPlayers={getPlayers} refetchPlayers={getPlayers} />
      <Footer />
    </>
  );
};

export default Home;
