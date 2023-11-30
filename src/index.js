import { fromEvent } from "rxjs";

const onKeyDown$ = fromEvent(document, "keydown");

const observadorMouse = {
    next: (event) => {
        console.log(event)
    },
};

onKeyDown$.subscribe(observadorMouse);

// import { Observable } from 'rxjs'

// const observableAlfa$ = new Observable(subscriber =>{
//     subscriber.next(1);
  
//     subscriber.next(2);
//     subscriber.complete();
//     subscriber.next(20);

// });

// const observador = {
//     next: (value) => {
//         console.log(value);
//     },
//     complete: () => {
//         console.log("ya termine, estuvo rico")
//     },
//     error: (error) => {
//         console.log('error emitido')
//         console.error(error);
//     }
// };

// observableAlfa$.subscribe(observador);