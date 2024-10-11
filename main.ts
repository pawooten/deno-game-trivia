import { getGamePrompt } from "./game-prompter.ts";
if (import.meta.main) {
  // Print five prompts to the console
  for (let i = 0; i < 5; i++) {
    const { letter, prompt } = getGamePrompt();
    console.log(`Letter: ${letter}`);
    console.log(`Prompt: ${prompt}`);
    console.log();
  }
}
