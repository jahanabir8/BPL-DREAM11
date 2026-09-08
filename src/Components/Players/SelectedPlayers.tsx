import React from "react";
import type { PlayersType } from "../Type/PlayersType";
import SPlayer from "./SPlayer";

interface selectedPlayerProps {
  choosenPlayers: PlayersType[];
}

const SelectedPlayers = ({ choosenPlayers }: selectedPlayerProps) => {
  return (
    <div>
      {choosenPlayers.map((choosenPlayer: PlayersType) => (
        <SPlayer key={choosenPlayer.id} player={choosenPlayer} />
      ))}
      {choosenPlayers.length === 0 ? (
        <p className="text-center text-gray-400"> No players selected yet </p>
      ) : choosenPlayers.length < 6 ? (
        <button className="btn btn-primary bg-[#E7FE29] text-black border-none outline-none">Add More Player</button>
      ) : (
        <p className="text-center text-gray-400">
          {" "}
          You have selected maximum players{" "}
        </p>
      )}
    </div>
  );
};

export default SelectedPlayers;
