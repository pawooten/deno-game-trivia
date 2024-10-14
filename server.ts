import express from 'npm:express';
import { getGamePrompt } from './game-prompter.ts';

export const initializeServer = () => {
    const app = express();
    app.use(express.static('public'));
    app.get('/prompt', (_request, response) => {
        const prompts: {letter: string, prompt: string}[] = [];
        const result = { prompts };
        for (let i = 0; i < 5; i++) {
            result.prompts.push(getGamePrompt());
        }
        response.send(prompts);
    });
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
};