interface User1 {
    age: number
    name: string;
}

// 변수에 활용한 인터페이스
var seho: User1 = {
    age: 33,
    name: '세호'
}

// 함수(인자)에 인터페이스 활용
function getUser(user: User1){
    console.log(user);
}
const capt = {
    name: '캡틴',
    age: 100
}
getUser(capt);



// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction{
    (a: number, b: number): number;
}

var sum1: SumFunction;
sum1 = function(a: number, b:number): number {
    return a + b;
}

// 인덱싱
interface StringArray { 
    [index: number]: string;
}

var arr1: StringArray = ['a', 'b', 'c'];
// arr1[0] = 10;



// 딕셔너리 패턴
interface StringRegexDictionary{
    [key: string]: RegExp;
}

var obj1: StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}
// obj1['cssFile'] = 'a'  
// Reg로 할당되어야 되는데, string으로 할당되서 오류남

Object.keys(obj).forEach(function(value){   // value는 자동으로 string이 됨

})


// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface DeveloperPractice extends Person {
    language: string;
}

var captain: DeveloperPractice = {
    language: 'ts',
    age: 100,
    name: '캡틴'
}


