import { useState, type Dispatch, type SetStateAction } from "react";
import type { PlayersType } from "../Type/PlayersType";

interface PlayerProps{
  player: PlayersType;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>
  handleSelectedPlayers: (player: PlayersType)=>void
}

const PlayerCard = ({ player, coin, setCoin, handleSelectedPlayers }: PlayerProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleButtonSelected = (select: boolean) => {
    
    
    const newCoin = coin - player.price
    if(newCoin > 0){
      setCoin(newCoin)
      setIsSelected(select);
      handleSelectedPlayers(player)
    } else{
      alert('You are out of coins')
    }
  };

  return (
    <div className="card bg-base-100 shadow-sm p-6 border border-gray-200 rounded-2xl">
      {/* Player Image */}
      <figure className="h-64 overflow-hidden rounded-2xl">
        <img
          src={player.img}
          alt={player.PlayerName}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="card-body px-0 pb-0">
        {/* Player Name */}
        <div className="flex items-center gap-3">
          <div className="text-3xl text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path
                fillRule="evenodd"
                d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0
                3.75 3.75 0 0 1-7.5 0ZM3.75 20.25a8.25
                8.25 0 0 1 16.5 0 .75.75 0 0 1-.75.75H4.5
                a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-bold">{player.PlayerName}</h2>
        </div>

        {/* Country & Player Type */}
        <div className="flex justify-between items-center mt-5">
          <div className="flex items-center gap-3 text-gray-500 text-lg">
            <span className="text-2xl">⚑</span>
            <span>{player.origin}</span>
          </div>

          <span className="bg-gray-100 px-4 py-2 rounded-xl text-gray-700">
            {player.playerType}
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-5"></div>

        {/* Rating */}
        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold text-lg">Rating</span>

          <div className="text-yellow-400">★★★★★</div>
        </div>

        {/* Batting Style */}
        <div className="flex justify-between mb-4 text-lg">
          <span className="font-medium">Batting</span>

          <span className="text-gray-500">{player.battingStyle}</span>
        </div>

        {/* Bowling Style */}
        <div className="flex justify-between mb-5 text-lg">
          <span className="font-medium">Bowling</span>

          <span className="text-gray-500">{player.bowlingStyle}</span>
        </div>

        {/* Price + Button */}
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">Price: ${player.price}</span>

          <button
            onClick={() => handleButtonSelected(true)}
            className="btn bg-white border border-gray-300 rounded-xl px-5 hover:bg-gray-100"
            disabled={isSelected}>
            {isSelected === false ? 'Choose Player' : 'Selected'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
