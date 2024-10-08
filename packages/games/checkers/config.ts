import { createZkNoidGameConfig } from "@zknoid/sdk/lib/createConfig";
import { ZkNoidGameType } from "@zknoid/sdk/lib/platform/game_types";
import { CheckersLogic } from "zknoid-chain-dev";
import CheckersPage from "./Checkers";
import {
  ZkNoidGameFeature,
  ZkNoidGameGenre,
} from "@zknoid/sdk/lib/platform/game_tags";
import CheckersLobby from "./components/CheckersLobby";
import { LogoMode } from "@zknoid/sdk/constants/games";

const description = 'Checkers is a two-player game played on an 8x8 board. The objective is to capture all of your opponent\'s pieces jumping diagonally over them'
const rules = `Checkers is a two-player game played on an 8x8 board. Players take turns moving their pieces diagonally forward, capturing opponent's pieces by jumping over them. A piece reaching the opponent's back row becomes a king and can move backward. 
        
  The game is won by capturing all of the opponent's pieces or by blocking them from moving
  `

export const checkersConfig = createZkNoidGameConfig({
  id: "checkers",
  type: ZkNoidGameType.PVP,
  name: "Checkers game",
  description: description,
  image: "/image/games/checkers.svg",
  logoMode: LogoMode.FULL_WIDTH,
  genre: ZkNoidGameGenre.BoardGames,
  features: [ZkNoidGameFeature.Multiplayer],
  isReleased: true,
  releaseDate: new Date(2024, 0, 1),
  popularity: 50,
  author: "ZkNoid Team",
  runtimeModules: {
    CheckersLogic,
  },
  page: CheckersPage,
  lobby: CheckersLobby,
  rules: rules,
});
