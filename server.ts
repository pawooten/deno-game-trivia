import express from 'npm:express';
import { getGamePrompt } from './game-prompter.ts';

export const initializeServer = () => {
    const app = express();
    app.use(express.static('public'));
    app.get('/prompt', (req, res) => {
        const { prompt } = getGamePrompt();
        res.send(prompt);
    });
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
};