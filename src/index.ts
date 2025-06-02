// 문자열 string

let myName: string = "이상호"
let mesaage: string = "hello"

// 숫자타입 number

let n: number = 100;

n = '100'  //number 타입에 string을 넣으니 오류를 감지하는 걸 볼 수 있음.

let count: number = 10;
let price: number = 9.99;

let total: number = count * price;

//boolean

let isOpen: boolean = true;
let isCompleted: boolean = false;

let isAvailable: boolean = isOpen && !isCompleted;

//null 

let user: string | null = null;

function login(userName: string) {
    user = userName
}

function logout() {
    user: null
}

login("상호")
logout()

//any

let someValue: any;

someValue.toString()
someValue = false;

