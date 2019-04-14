'use strict'; 


// crear un juego en el cual se tiene que generar un numero y el usuario tiene que adivinar un numero, a manera de que va introduciendo el numero se le va indicando mediante un mensaje si esta cerca o si ha acertado, a la vez se le indica cuantos intentos lleva

//primero es crear el html:
   // con un h1 con el texto adivina el numero;     un input type text                                 un boton que diga prueba                           un p que diga escribe un numero y dale a la prueba   un p para el numero de intentos

//segundo es en css poner un text align center para ver todo mejor;

//tercero en el fichero de js:

    // recojer el elemento input

    const inputElem = document.querySelector('.input__text');

    // recojer el boton prueba

    const buttonElem = document.querySelector('.button__try');

    // recojer el elemento feedback

    const feedEackElem = document.querySelector('.feedback');

// recojer el elemento count

    const countElem = document.querySelector('.click_counts-display');

    //copiar la funccion para generar el numero aleatorio
    function getRandomNumber(max) {
        return Math.ceil(Math.random() * max);
      }
      
    
     const randomNumber = getRandomNumber(100);

     console.log(randomNumber);

     // declarar el contador a 0

     let counter = 0;
      
       // crear una funccion para que indique los intnentos y indicarlos en el inner.html del p para intentos
     
       // crear la funncion con un if si en el input se escribe un numero que indique si esta mayor o menor que el random number que indique en el feedback si es mayor o menor que el random number


 function aciertaElNumeroRandom (){
    const userNumber = parseInt(inputElem.value);

    if (userNumber > randomNumber){
        feedEackElem.innerHTML ='demasiado alto';
   }
    else if(userNumber < randomNumber){
        feedEackElem.innerHTML ='demasiado bajo';
    }
    else if (userNumber === randomNumber){
        feedEackElem.innerHTML ='has acertado campeona';
    } 
//sumearle al counter +1 cada vez que se pulse el boton
    counter += 1

//pintar en html dentro del span, el valor del counter

    countElem.innerHTML = counter; 
 };
 

    // crear el listener para el boton prueba

    buttonElem.addEventListener('click', aciertaElNumeroRandom);