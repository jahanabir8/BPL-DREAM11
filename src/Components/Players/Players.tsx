import { use } from "react";
import type { PlayersType } from "../Type/PlayersType";
import AvailablePlayers from "./AvailablePlayers";

export interface PlayersProps {
  playersDataPromise: Promise<PlayersType[]>;
}

export default function Players({ playersDataPromise }: PlayersProps) {
  const players = use(playersDataPromise);
  return (
    <div className="max-w-330 mx-auto mt-8">
      <div className="flex justify-between items-center mb-9">
        <h4 className="text-[35px] font-semibold">Available Players</h4>
        <div>
          <button className="btn bg-[#E7FE29] rounded-none">Add to Team</button>
          <button className="btn rounded-none">
            View Details
          </button>
        </div>
      </div>
      <AvailablePlayers players={players}></AvailablePlayers>
    </div>
  );
}
