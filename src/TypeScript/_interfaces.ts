/**
 * @Interfaces
 * 
 * Թույլ է տալիս նկարագրել(տիպաավորել) փոփոխականները օբեկտում:
 */

 interface IProps {
   id?: number;   // ոչ անհրաժեշտ տող։
   name: string;  // անհրաժեշտ տող։
   date?: string;
 }

 function def(props: IProps ) {
    console.log(props.name)
 }

 interface IPerson {
    id?: number;
    readonly specific_name: string; // միայն կարդալ։
 }

 const User: IPerson = {
    specific_name: "Richard Feynman",
 }

//  user.specific_name = 'Enrico Fermi' //Error

 /**
  * @Class_Interfaces
  * 
  * Թույլ է տալիս նկարագրել կլասը, թե ինչի պետք է համապատասխանի։
  */

 interface IClass {
   sum(a: number, b: number): number;
  //  bar(): void; // անհրաժեշտ է հայտարարել կլասսի մեջ։ 
 }

 class Add implements IClass {

  sum(a: number, b: number){
    return a + b;
  }
 }

 /**
  * @Type_alias
  * 
  * Type vs Interface:
  * ա) Միանման տեսք ունեն, բայց օգտագործելով Interface մենք կարող ենք օգտվել extends և implements-ից․ որի հնարավորությունը չունի Type։
  * բ) Interface կարող է ունենալ միքանի միավորվող տիպեր A | B
  */

type Planet = {
    readonly name: string;
    size: string;
    radius: string;
}

// interface Planet {
//     readonly name: string;
//     size: string;
//     radius: string;
// }

const Jupiter: Planet = {
    name: "Jupiter",
    size: '48965325',
    radius: '6987544125',
}

// Jupiter.name = 'Mars'; //Error

/**
 * Միավորվող տիպեր (Union Types , Intersection Types)
 */

interface IBird {
    swim(a?: number): void;
    layEggs(a?: number): void;
}
 
interface IFish {
    swim(a?: number): void;
    layEggs(a?: number): void;
}
 
// function getSmallPet(): IFish | IBird {}
