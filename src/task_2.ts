interface ObjectShape {
    id: number;
    name: string;
    age: number;
}

const arr: ObjectShape[] = [
    {
        id: 1,
        name: 'name 1',
        age: 15
    },
    {
        id: 2,
        name: 'name 2',
        age: 20
    }
]

function updateObjectInArray<T, K extends keyof T>(initialArray: T[], key: K, value: T[K], patch: Partial<T>) {
    return initialArray.map(item => {
        if (item[key] === value) {
            return {
                ...item,
                ...patch
            }
        }

        return { ...item };
    });
}

console.log(updateObjectInArray(arr, 'id', 1, { name: 'name 3', age: 100 }));
