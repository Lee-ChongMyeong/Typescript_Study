// interface Person1 {
//     name: string;
//     age: number;
// }


type Person1 = {
    name: String;
    age: number;
}

var seho1: Person1 = {
    name: '세호',
    age: 30
}


type MyString = string;
var str1: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo){

}