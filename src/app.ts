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


interface Lengthy{
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string]{
    let descriptionText = 'Got no value.';
    if(element.length === 1){
        descriptionText = 'Got 1 element';
    }else if(element.length > 1){
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
};

console.log( countAndDescribe('Hi there!'));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U){
    return 'Value: ' + obj[key];
};

extractAndConvert({name: 'Max'}, 'name')