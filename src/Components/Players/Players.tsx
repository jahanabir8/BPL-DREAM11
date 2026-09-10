import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { PlayersType } from "../Type/PlayersType";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

export interface PlayersProps {
  playersDataPromise: Promise<PlayersType[]>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

export default function Players({
  playersDataPromise,
  coin,
  setCoin,
}: PlayersProps) {
  const players = use(playersDataPromise);

  const [buttonType, setButtonType] = useState("Available");
  const [choosenPlayers, setChoosenPlayers] = useState<PlayersType[]>([]);

  const handleButtonType = (type: "Available" | "Selected") => {
    setButtonType(type);
  };

  const handleSelectedPlayers = (player: PlayersType) => {
    const selectedAllPlayers: PlayersType[] = [...choosenPlayers, player];
    setChoosenPlayers(selectedAllPlayers);
  };

  const handleRemovePlayer = (player: PlayersType) => {
    const updatedPlayers = choosenPlayers.filter(
      (p) => p.id !== player.id
    );
    setChoosenPlayers(updatedPlayers);
    const newCoin = coin + player.price;
    setCoin(newCoin);
  };


  return (
    <div className="max-w-330 mx-auto mt-8">
      <div className="flex justify-between items-center mb-9">
        <h4 className="text-[35px] font-semibold">
          {buttonType === "Available"
            ? `Available Players ${players.length}`
            : ` Selected Players ${choosenPlayers.length}/6`}
        </h4>
        <div>
          <button
            onClick={() => handleButtonType("Available")}
            className={`btn ${buttonType === "Available" ? "bg-[#E7FE29]" : ""} rounded-[10px] rounded-r-none`}
          >
            Available
          </button>
          <button
            onClick={() => handleButtonType("Selected")}
            className={`btn rounded-[10px] rounded-l-none ${buttonType === "Selected" ? "bg-[#E7FE29]" : ""}`}
          >
            Selected {choosenPlayers.length}
          </button>
        </div>
      </div>
            {buttonType === "Available" ? (
        <AvailablePlayers
          coin={coin}
          setCoin={setCoin}
          players={players}
          choosenPlayers={choosenPlayers}
          handleSelectedPlayers={handleSelectedPlayers}
        ></AvailablePlayers>
      ) : (
        <SelectedPlayers coin={coin} setCoin={setCoin} handleRemovePlayer={handleRemovePlayer} choosenPlayers={choosenPlayers}></SelectedPlayers>
      )}
    </div>
  );
}