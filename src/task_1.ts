const API_URL = 'https://jsonplaceholder.typicode.com/posts';
const container = document.querySelector('.container');

interface Item {
    userId: number;
    id: number;
    title: string;
    body: string;
}

type Result = Item[];

async function getResponse(url: string): Promise<Result> {
    const result = await fetch(url);
    const data = await result.json();

    return data as Result;
}

function renderResponse(data: Result) {
    const person = document.createElement('ul');

    data.forEach((item) => {
        const info = document.createElement('li');

        info.innerHTML = `
        <div>UserId: ${item.userId}</div>
        <div>Id: ${item.id}</div>
        <div>Title: ${item.title}</div>
        <div>Body: ${item.body}</div>
        `
        person.appendChild(info);
    })

    container?.appendChild(person);
}

async function run() {
    try {
        const data = await getResponse(API_URL);

        renderResponse(data);
    } catch (error) {
        console.error(error);
    }
}

run();