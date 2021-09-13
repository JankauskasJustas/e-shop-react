import { Player } from "../types/Player";

class Repository {
    static getPlayers(): Promise<Player[]> {
        return fetch("http://localhost:4000/players").then((res) => res.json());
    }

    static insertPlayer(player: Player) {
        return fetch("http://localhost:4000/players", {
            method: "POST",
            body: JSON.stringify({
                name: player.name,
                surname: player.surname,
                fullName: `${player.name} ${player.surname}`,
                img: player.img,
                jerseys: player.jerseys,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        }).then((res) => res.json());
    }

    static updatePlayer(player: Player, id: number) {
        return fetch(`http://localhost:4000/players/${id}`, {
            method: "PUT",
            body: JSON.stringify({
                name: player.name,
                surname: player.surname,
                fullName: `${player.name} ${player.surname}`,
                img: player.img,
                jerseys: player.jerseys,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        }).then((res) => res.json());
    }

    static deletePlayer(id: number) {
        return fetch(`http://localhost:4000/players/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        }).then((res) => res.json());
    }
}

export default Repository;