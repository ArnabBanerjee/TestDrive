import * as fs from 'fs';
import * as path from 'path';
/**
 * Assignment 2. Counter Function
 * Implement the `counter` function according to requirements:
    - Function accepts a number as the first argument. This number represents the initial value for the counter.
    - If no value passed to a function, use `0` as initial value.
    - Function returns array with two function:
        - First function allows us to get the current counter value.
        - Second function increases the internal counter value by one.
    - Multiple calls of `counter` function create independent instances of counter
 */
export const counter = (value: number = 0) => {
    const iterator: IterableIterator<number> = (function* (a: number) {
        while (true) {
            yield a;
            yield ++a;
        }
    })(value);
    const getCounter = () => iterator.next().value;
    const nextCounter = () => iterator.next();
    return [getCounter, nextCounter];
};

const a = counter(1);
console.log(a[0]()); a[1]();
console.log(a[0]()); a[1]();
console.log(a[0]()); a[1]();

const b = counter(10);
console.log(b[0]()); b[1]();
console.log(b[0]()); b[1]();
console.log(b[0]()); b[1]();

const c = counter();
console.log(c[0]()); c[1]();
console.log(c[0]()); c[1]();
console.log(c[0]()); c[1]();

/**
 * Assignment 1. HTTP Request Handling
    Write down code snippet using following requirements:
    - Use only vanilla TypeScript, without additional libraries.
    - Use REST Rick and Morty API(https://rickandmortyapi.com/documentation/#rest) for this assignment.
    - Request all episodes using API.
    - Replace URLs in “characters” array with character JSON objects taken from API.
    - Log final array into console.
 */

export const episodesFetcher = async () => {
    try {
        const baseUrl = 'https://rickandmortyapi.com/api';
        const allEpisodes = await fetch(`${baseUrl}/episode`).then(r => r.json()).catch(e => console.error(e.message));
        const results = allEpisodes.results;
        for (let index = 0; index < results.length; index++) {
            const element = results[index];
            const characters = element.characters;
            const newCharecters = [];
            for (let i = 0; i < characters.length; i++) { 
                const charecter = await fetch(characters[i]).then(r => r.json()).catch(e => console.error(e.message));
                newCharecters.push(charecter)
            }
            allEpisodes.results[index].characters = newCharecters;
        }
        const outputPath = path.join(__dirname, '..', 'tmp');
        fs.mkdirSync(outputPath)
        fs.writeFileSync(path.join(outputPath, 'output.json'), JSON.stringify(allEpisodes, null, 4), 'utf8');
    } catch (error) {
        console.log(error.message);
    }
}
episodesFetcher();