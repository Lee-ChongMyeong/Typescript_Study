
// function logMessage(value: any){
//     console.log(value);
// }

// logMessage('hello');
// logMessage(100);
// logMessage(false);


// 유니온 타입

var seho2: string | number | boolean;

function logMessage(value: string | number){
    if (typeof value == 'number'){
        value.toLocaleString();
    }
    if(typeof value == 'string'){
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);


interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}
function askSomeone(someone: Developer | Person){
    someone.name;   // 유니온 타입은 인터페이스 두개를 연결했을때, 공통된 속성만 접근할 수 있다.
    someone.skill;  // error
    someone.age;    // error
}
askSomeone({ name: '디벨로퍼', skill: '웹 개발'});
askSomeone({ name: '캡틴', age: 100 });


// 인터섹션 타입
function askSomeone2(someone: Developer & Person){
    someone.name;  
    someone.skill;
    someone.age
}
askSomeone2({ name: '디벨로퍼', skill: '웹 개발'});
askSomeone2({ name: '캡틴', age: 100 });


// var seho: string | number | boolean;
// var capt: string & number & boolean;






