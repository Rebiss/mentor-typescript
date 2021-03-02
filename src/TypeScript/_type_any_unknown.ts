 /**
  * @TS_Ignore   Անտեսում է արտաքին ֆայլը կամ գրադարանը։
  * @TS_Check    Պարտադրում ենք ստուգել րտաքին ֆայլը կամ գրադարանը։
  * @TS_Nocheck  Մի ստուգիր։
  * 
  */
    //@ts-ignore
    import React from 'react';

    //@ts-ignore
    import * as Collection from '../../../Components/Collection';

/**
 * @Any 
 * 
 * Այս տեսակ օգտագործվում է երբ հայտնի չէ փոփոխականի տեսակը։
 */


/**
 * @Unknown
 * 
 * Նման է Any-ին մեկ տարբերությամբ որ թույլ չի տալիս որևէ գործողություն անել տիպի հետ քանի դեռ այն վալիդ չէ։
 */
    const unknownReact: unknown = React.FC;

 /**
 * @Guard_Type
 * 
 *
 */
    type Dog = {
        kind: 'dog',
        age: number
    }
    
    type Cat = {
        kind: 'cat',
        lives: number
    }
    
    function example(foo: Dog | Cat) {
        if (foo.kind === 'dog') {
            console.log(foo.age);  
            // console.log(foo.lives); // Error
        }
        else {
            // console.log(foo.age);   // Error
            console.log(foo.lives);
        }
    }
