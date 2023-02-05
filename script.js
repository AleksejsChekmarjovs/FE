






// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.

let arr = [1, 2, 3, 4, 5]
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}

// Выведите столбец чисел от 1 до 100.
for (let number = 1; number < 101; number++) {
    
    console.log(number);
    
}

// Выведите столбец чисел от 11 до 33.
let smallerNumber = 10;
for (i = 10; i < 33; i++){
    smallerNumber++
    console.log(smallerNumber);
}

// Дан массив с элементами [1, 2, 3, 4, 5].
// С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.

let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  console.log(sum);
  



    
