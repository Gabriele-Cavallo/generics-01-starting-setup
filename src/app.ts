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

extractAndConvert({name: 'Max'}, 'name');

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];
    addItem(item: T){
        this.data.push(item);
    }
    removeItem(item: T){
        if(this.data.indexOf(item) === -1){
            return;
        }
        this.data.splice(this.data.indexOf((item), 1))
    }
    getItems(){
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(2);
numberStorage.addItem(5);
numberStorage.removeItem(2);
console.log(numberStorage.getItems());

// const objStorage = new DataStorage<object>();
// const maxObj = { name: 'Max'};
// objStorage.addItem({name: 'Max'});
// objStorage.addItem({name: 'Manu'});
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date){
    // return {title: title, description: description, completeUntil: date};
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
};

const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('Manu');