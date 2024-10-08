import { createZkNoidGameConfig } from "@zknoid/sdk/lib/createConfig";
import { ZkNoidGameType } from "@zknoid/sdk/lib/platform/game_types";
import { RandzuLogic } from "zknoid-chain-dev";
import Randzu from "./Randzu";
import {
  ZkNoidGameFeature,
  ZkNoidGameGenre,
} from "@zknoid/sdk/lib/platform/game_tags";
import RandzuLobby from "./components/RandzuLobby";
import { LogoMode } from "@zknoid/sdk/constants/games";

const description = 'A tic tac toe like game. Two players take turns placing pieces on the board attempting to create lines of 5 of their own color. Game state is synced and proved used zkapp transactions'

const rules = "Randzu is a game played on a 15x15 grid, similar to tic-tac-toe. Two players take turns placing their mark, using balls of different colors. The goal is to get five of your marks in a row, either horizontally, vertically or diagonally."


export const randzuConfig = createZkNoidGameConfig({
  id: "randzu",
  type: ZkNoidGameType.PVP,
  name: "Randzu game",
  description: description,
  image: "/image/games/randzu.svg",
  logoMode: LogoMode.CENTER,
  genre: ZkNoidGameGenre.BoardGames,
  features: [ZkNoidGameFeature.Multiplayer],
  isReleased: true,
  releaseDate: new Date(2024, 0, 1),
  popularity: 50,
  author: "ZkNoid Team",
  rules: rules,
  runtimeModules: {
    RandzuLogic,
  },
  page: Randzu,
  lobby: RandzuLobby,
});
