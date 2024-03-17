// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let square = (a,b)=> {
    return a*b;
}

console.log(square(5,4))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// - створити функцію яка приймає масив та виводить кожен його елемент

let squareOfCircle = (p,r)=>{
    return p* Math.pow(r,2);
}

let res1= squareOfCircle(3.14,5);
console.log(res1);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let CylinderSquare = (h,r)=> {
    return 2*3.14*r*(h+r)
}

let res2 = CylinderSquare(2,5);
console.log(res2)

// - створити функцію яка приймає масив та виводить кожен його елемент

let arrFunc = arr=>{
    for (const element of arr) {
        console.log(element);


    }
}

arrFunc([1,2,3,4,5,6,7,8,9,10]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let createText = text =>{
    document.write(`<p> ${text}</p>`);

}
createText("Hello world");
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let createUl = text =>{
    document.write(`<ul>`);
    document.write(`<li> ${text} </li>`);
    document.write(`<li> ${text} </li>`);
    document.write(`<li> ${text} </li>`);
    document.write(`</ul>`);

}

createUl("Hey, hope you have a great day!");

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


let createUlWithLoop = (text,num) =>{
    document.write(`<ul>`);
    for(let i =0; i<num;i++){
        document.write(`<li> ${text} </li>`);
    }
    document.write(`</ul>`);
}

createUlWithLoop("Heeeey",10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let createArrList = arr =>{
    document.write(`<ul>`);
    for(let element of arr){
        document.write(`<li> ${element} </li>`);
    }
    document.write(`</ul>`);
}

createArrList([1,2,3,4,5,'hey','ahaha']);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
  let objFunc = Arr =>{
      for(let element of Arr){
          document.write(`<div style="height: 50px;width: 50px;background-color: lightpink">${element.id} ${element.name} ${element.age}</div>`)
      }
  }

  objFunc(
      [
          {id:0,name:'Sofia',age:20},
          {id:1,name:'Vika',age:21},
          {id:2,name:'Tanya',age:22},
      ]
  )


  // - створити функцію яка повертає найменьше число з масиву
 let minVal= Arr =>{
      let min=Arr[0];
      for(let i=0;i<Arr.length;i++){
          if (Arr[i]<min){
              min=Arr[i];
          }
      }
      return min;
 }

 let res3=minVal([0,-18,2,3,4,78]);
  console.log(res3);

  //- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sumOfArr = arr=>{
    let sum=0;
    for(let element of arr){
        sum+=element;
    }
    return sum;
}

let res4= sumOfArr([1,2,3,4,5,6]);
console.log(res4);
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = (arr,index1,index2)=>{
    let temp=' '
    for (let i=0;i<arr.length; i++){
        if(i===index1){
            temp=arr[i];
            arr[i]=arr[index2];
            arr[index2]=temp;

        }
    }
    return arr;
}

let res5= swap([1,2,3,4,5,6,7],0,3);
console.log(res5);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let currencyEx = (sumUAH,currencyValues,exchangeCurrency)=>{
    let  finalSum;


    for(let element of currencyValues){
        if(element.currency===exchangeCurrency){
            finalSum= sumUAH/element.value

        }

    }
    return finalSum;
}

let res6 = currencyEx(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR');
console.log("Кінцува сума " + res6)