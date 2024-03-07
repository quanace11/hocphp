console.log("haha");
//Json: là một định dạng dữ liệu
// javascript object notation.
// json: Number, boolean, null, array, object.
// encode / decode
// Json is stand for javascript object notation
// Json is a text format for storing and transporting data.
// Json is Self-describing and easy to understand.
var a = '"tr\\"ueee"';
console.log(JSON.parse(a));
var b = '["jav\\"a","s","C","b"]';
console.log( b.length);
console.log( JSON.parse(b));

var bb ='{"name":"quan", "age": 17,"mem": "JSON là \\"JavaScript Object Notation\\""}';
console.log(JSON.parse(bb));
console.log(JSON.stringify(
    {
        name: "quan",
        tuoi:17
    })
);
//sync, async: đồng bộvà bất đồng bộ.
// setTimeout, setInterval, fetch
// xmlHttpRequest, file reading 
// request animation frame
// setTimeout(function() {
//     console.log('Dòng này sẽ in ra sau')
// })
// setTimeout là tác vụ bất động bộ (async)

console.log('Dòng này sẽ in ra trước')
//callback hell
//Pyramid of doom
// promise khái niệm sinh ra để giải quyết vấn đề về các thao tác bất đồng bộ, trước đó thì thường sử dụng callback để giải quyết các vấn đề này, tuy nhiên thì sẽ nảy sinh ra vấn đề callback hell. Code sâu vào nhau khó nhìn, khó hiểu. 
// you can create a promise by: Use new Promise và trong constructor truyền vào một executor function: 
//trong executor funcrtion có chứa hai tham số dạng hàm một là resolve, reject.gọi khi thao tác xử lý 
//thành công hoặc thất bại. 
// sử dụng promise: đối tượng được tạo ra và được sử dụng qua hai phương thức .then hoặc catch .hai phương thức trên sẽ nhận callback function. then sẽ được thực thi khi promise resolve. và sẽ thực thi catch khi promise reject
//

function myfunction(value){
    console.log("không nhận được gì cả");
    console.log(typeof value);
    value("aa");
} ;
myfunction(function myCallbackFunction(oo){
    console.log("đây là hàm và được truyền qua đối số:", oo)}
    );
// callback is a function passed as arguments
function Person(name, age) {
    this.Nameame = name;
    this.Age = age; 
} 
var user= new Person('quaqn',14);
console.log(user);
//để khởi tạo các đối tượng có cùng cấu trúc và thuộc tính
function sleep(ms){
    return new Promise(function(resolve){
        setTimeout(resolve,ms);
    });
}
// sleep(1000)
//     .then(function(){
//         console.log("haha");
//         return sleep(3000);
//     }
//     )


    function hell(value, cb) {
        cb(value);
    }
    
    // Không sử dụng Promise dẫn đến tạo ra callback hell 
    hell(1, function (valueFromA) {
        hell(valueFromA + 1, function (valueFromB) {
            hell(valueFromB + 1, function (valueFromC) {
                hell(valueFromC + 1, function (valueFromD) {
                    console.log(valueFromD + 1);
                });
            });
        });
    });
function notHell(value){
    return new Promise(function(resolve)
    {    
        resolve(value);

    });
}
notHell(10)
    .then(function(value){
        return value+1;
    })
    .then(function(value){
        return value+1;
    })
    .then(function(value){
        return value+1;
    })
    .then(function(value){
        return console.log(value+1) 
    })
  






















