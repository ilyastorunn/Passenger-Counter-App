// document.getElementById("count-el").innerText = 5
// let firstBatch = 5;
// let secondBatch = 7;
// let count = firstBatch + secondBatch;
// console.log(count)
// ilk iki değişkene değer atandı, üçüncü değişkenin sonucu ilk iki değişkenin sonucuna bağlandı.



// MY DOG AGE CALCULATOR

// let myAge = 23;
// let humanDogRatio = 7;
// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);
// kendi yaşım ilk değişkene atandı, köpek insan yaş oranı ikinci değişkene atandı, ikisinin çarpımı yaşımın köpek yaşını vereceğinden üçüncü değişkende iki değişken çarpıldı. Konsola yazdırıldı.



// MATHEMATICAL OPERATORS

// let bonusPoints = 50;
// bonusPoints = bonusPoints + 50;
// bonusPoints = bonusPoints - 75;
// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);


// MAKING A FUNCION

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;
// function totalLapTime() {
//     let totalTime = lap1 + lap2 + lap3;
//     console.log(totalTime);
// }
// totalLapTime();


// let lapsCompleted = 0;
// function lapIncrement() {
//     lapsCompleted = lapsCompleted + 1 ;
// }
// lapIncrement();
// lapIncrement();
// lapIncrement();

// console.log(lapsCompleted);

// JavaScript değişkenleri ilk kelime küçük, ikinci kelime büyük harfle başlanarak yazılır. Buna camelCase denir.

let saveEl = document.getElementById("save-el")

let countEl = document.getElementById("count-el") // count-el isimli id'yi manipule etmek için JS'ye çağırdık ve yazımını kolaylaştırmak için yeni bir değişkene atadık.
// console.log(countEl) // HTML'den hangi elementi çektiğimizi konsola yazdırdı.

 let count = 0;

 function increment() {
     count += 1;
     countEl.innerText = count // count-el id'li elementi count değişkenine atayıp increment butonuyla artırması sağlandı.
 }
// INCREMENT BUTONUNA HER TIKLANDIĞINDA KONSOLA 1 ARTIRARAK ÇIKTI VEREN FONKSİYON

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    console.log(count)
    countEl.textContent = 0
    count = 0
    // 70. satır count-el elementini her save tuşuna bastığımızda 0'a yolladı. 71. satır tekrar increment tuşuna bastığımızda 0'dan başlamamızı sağladı.
}


/* 
   RECAP
  - script tag
  - variables
  - numbers
  - strings
  - console.log
  - functions
  - The DOM
  - getElementById()
  - innerText
  - textContent
*/