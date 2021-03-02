/**
 * @Generics
 * 
 * Ընդհանրացված տիպ -  թույլ է տալիս նկարագրել տիպերը որպես պարամետրեր,
 * նրանց օգտագործման պահին
 */

interface IGen {
    name: string;
    age?: number
}

const arrGen = new Array<IGen>();
// const arrGen: IGen[] = [] ; // Համարժեք է

arrGen.push({name: 'Lernik', age: 39}); // Object
arrGen.push({name: 'Sebastian'});
// arrGen.push({}); // Error


const map = new Map<number, IGen>();
map
    .set(2, {name: 'Lernik', age: 39} )
    .set(2, {name: 'Gvidon', age: 45} );
    // .set('ss', {name: 'Gvidon', age: 45} ) //Error

/**
 * 
 */

 type Value<T> = {
     value: T;
     top?: Value<T>;
     right?: Value<T>;
 }

 const Css: Value<number> = {
     value: 4,
     top: {
         value: 25,
         top: {
             value: 22,
         }
     }
 }
