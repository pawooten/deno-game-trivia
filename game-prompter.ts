import data from './data.json' with { type: 'json' };

export const getGamePrompt = (): { letter: string, prompt: string } => {
    const letter = data.Letters[Math.floor(Math.random() * data.Letters.length)];


    let prompt = '';
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            const era = data.Eras[Math.floor(Math.random() * data.Eras.length)];
            prompt = `Name a game from the ${era} that starts with the ${letter}.`;
            break;
        case 1:
            const platform = data.Platforms[Math.floor(Math.random() * data.Platforms.length)];
            prompt = `Name a ${platform} game that starts with the ${letter}.`;
            break;
        case 2:
            const genre = data.Genres[Math.floor(Math.random() * data.Genres.length)];
            prompt = `Name a ${genre} game that starts with the ${letter}.`;
            break;
        default:
            throw new Error("Unrecognized case when generating game prompt.");
    }
    return { letter, prompt };
}