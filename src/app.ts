// const names: string[] = ['Max', 'Manuel'];
// const names: Array<string> = ['Max', 'Manu'];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is done');
//     }, 2000)
// });

// promise.then(data => {
//     data.split(' ');
// })

function merge<T extends object, U extends object>(objA: T, objB: U){
    return Object.assign({},objA, objB);
}

// console.log(merge({ name: 'Max' }, { age: 30 }));

const mergeObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
// const mergeObj = merge<{name: string, hobbies: string[]}, {age: number}>({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
// const mergeObj2 = merge({ name: 'Max' }, { age: 30 });
console.log('age' , mergeObj.age);