//  Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

 function UserConstructor(id,name,surname,email,phone){

    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone;

 }


   let Users =[
       new UserConstructor(0,'Ivan','Boiko','ivan23@gmail.com','+380664390830'),
       new UserConstructor(1,'Serhiy','Didukh','ser@gmail.com','+380964787830'),
       new UserConstructor(2,'Vova','Tseliv','vova@gmail.com','+3867767690830'),
       new UserConstructor(3,'Vika','Khimuk','vika@gmail.com','+3806767444830'),
       new UserConstructor(4,'Ira','Samburska','ira23@gmail.com','+3808978980'),
       new UserConstructor(5,'Polina','Karp','polia3@gmail.com','+380664543222'),
       new UserConstructor(6,'Veronica','Sheremet','vero@gmail.com','+383672908'),
       new UserConstructor(7,'Tanya','Boiko','tanya23@gmail.com','+380676789098'),
       new UserConstructor(8,'Sofia','Kysla','sofi@gmail.com','+380987890834'),
       new UserConstructor(9,'Nataliya','Kerts','nata@gmail.com','+380505444786')

   ]

for (const user of Users) {
    for(const element in user){
        console.log(user[element])
    }
    console.log('-----------------------------------------------------')

}

       // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

       let onlyOddId = Users.filter((user)=>user.id%2===0);
console.log(onlyOddId);

      // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
      let SortedUsers = Users.sort((user1, user2)=> user1.id-user2.id)
       console.log(SortedUsers);




// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client


     class Client{
         constructor(id,name,surname,email,phone,order) {
             this.id = id;
             this.name =name;
             this.surname=surname;
             this.email=email;
             this.phone=phone;
             this.order=order;
         }

     }

      let Clients = [
          new Client(0,'Ivan','Boiko','ivan23@gmail.com','+380664390830',['Apples', 'Milk', 'Bread']),
          new Client(1,'Serhiy','Didukh','ser@gmail.com','+380964787830',['Pencils', 'Pens', 'Notebooks', 'Eraser', 'Ruler']),
          new Client(2,'Vova','Tseliv','vova@gmail.com','+3867767690830',['Hammer', 'Screwdriver', 'Wrench', 'Drill', 'Scissors', 'Screw', 'Chisel']),
          new Client (3,'Vika','Khimuk','vika@gmail.com','+3806767444830',['Frying Pan', 'Knife', 'Pot', 'Spoon', 'Fork', 'Plate', 'Kettle', 'Ladle', 'Mug']),
          new Client(4,'Ira','Samburska','ira23@gmail.com','+3808978980',['Phone', 'Headphones', 'Computer', 'Monitor', 'Printer', 'Mouse']),
          new Client(5,'Polina','Karp','polia3@gmail.com','+380664543222',['Football', 'Tennis Racket', 'Jump Rope', 'Bicycle']),
          new Client(6,'Veronica','Sheremet','vero@gmail.com','+383672908',['Novel', 'Detective', 'Poetry', 'Fantasy', 'Science', 'History', 'Philosophy', 'Literature']),
          new Client(7,'Tanya','Boiko','tanya23@gmail.com','+380676789098',['Disk']),
          new Client(8,'Sofia','Kysla','sofi@gmail.com','+380987890834',['Paper', 'Pen']),
          new Client(9,'Nataliya','Kerts','nata@gmail.com','+380505444786', ['Banana', 'Orange', 'Apple', 'Grapes', 'Strawberry', 'Pineapple', 'Watermelon'])

      ]
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню.

    let SortedClient = Clients.sort((a,b)=>a.order.length-b.order.length);
     console.log(SortedClient);

//     let SumFunction = (Arr)=>{
//         let sum=0;
//     for(let obj of Arr){
//     for(let element in obj){
//           if(typeof obj[element]=== 'object'){
//               console.log(obj[element].length)
//           }
//     }
//
// }
// }
  // SumFunction(Clients);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


    function CarConstructor(model,producer,year,maxSpeed,engineCap,){

        this.model=model;
        this.producer=producer;
        this.year=year;
        this.maxSpeed=maxSpeed;
        this.engineCap=engineCap;

        this.drive= function (){
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
        };
        this.info=function(){
            for(let elements in this){
                console.log(elements, this[elements])
            }
        };

          this.increaseMaxSpeed = function(newSpeed){
               this.maxSpeed += newSpeed
          };

           this.changeYear=function (newValue){
               this.year = newValue
           }

        // addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

        this.addDriver = function(driver) {
             this.driver = driver;
        }
    }


    let driver1 = new CarConstructor('Tesla','Tesla', 2010,150,'2l');
        driver1.addDriver('Viktor');
        console.log(driver1.driver);
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

        class Car {
            constructor(model,producer,year,maxSpeed,engineCap) {

                this.model=model;
                this.producer=producer;
                this.year=year;
                this.maxSpeed=maxSpeed;
                this.engineCap=engineCap;
            }

            drive(){
                console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
            }
               info(){
                for(let element in this){
                    console.log(element,this[element])
                }
               }
            increaseMaxSpeed (newSpeed){
                this.maxSpeed+=newSpeed
            }
            changeYear (newValue){
                this.year = newValue
            }

            addDriver (driver){
                this.driver=driver
            }
        }


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


    class Cinderella{
            constructor(name,age,shoesSize) {

                this.name=name;
                this.age=age;
                this.shoesSize=shoesSize;
            }
    }


    let CinderellasList=[
        new Cinderella('Margo',24,39),
        new Cinderella('Anna',22,37),
        new Cinderella('Viktoria',21,39),
        new Cinderella('Solomia',21,38),
        new Cinderella('Sofia',23,38),

        new Cinderella('Valia',23,38),

        new Cinderella('Daria',22,38),
        new Cinderella('Hanna',22,36),
        new Cinderella('Tanya',21,35),
        new Cinderella('Veronika',22,39)]







class Prince {
    constructor(name, age, shoe) {

        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }

}







 let Prince1 = new Prince('Erik',26,37);
        console.log(Prince1.name);

         for(let Cinderella of CinderellasList){
             for(let element in Cinderella){
                 if(element==='shoesSize'){
                     if(Cinderella[element]===Prince1.shoe){
                         // Prince1.wife= Cinderella
                         // console.log(Prince1.wife)

                     }
                 }
             }
         }
for(let cinderella of CinderellasList){
    if(cinderella.shoesSize===Prince1.shoe){
        Prince1.wife = cinderella
    }
}

console.log(Prince1.wife)


//
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


   // Prince1.wife = CinderellasList.find(cinderella=>cinderella.shoesSize===Prince1.shoe);
   //       console.log(Prince1.wife)





