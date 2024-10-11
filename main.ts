import { initializeServer } from "./server.ts";
import { getGamePrompt } from "./game-prompter.ts";
if (import.meta.main) {
  initializeServer();
}
