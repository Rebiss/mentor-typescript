/**
 * @Class TS-ում կա միքանի տարբերությւոն, որը ընդլայնւմ է ECMA2015(Class)-ի հնարավորությունները։
 * ! public
 * ! private
 * ! protected
 * ! readonly
 */

 class Ts {
   // սահմանափակել
   public a: number = 11; // Արտաքին միջավայրից հասանելի է բոլոր տիրույթների համար։
   private b: string = 'private'; // Այս տիրույթը հասանելի է միայն Function(Class) scope: OOP Encapsulation, ECMA standard -> #:
   protected c: any = 36.58; // Ժառանգորթի համար հասանելի է այս տիրույթը։ Արտաքին միջավայրի համար ոչ( new ...):
   readonly d: boolean = false;
 }

 const instence = new Ts();
 instence.a;
//  instence.b; // Error
//  instence.c; // Error
//  instence.d = true; // Error չենք կարող փոփոխել false;

/**
 *@Class_Extends տարբերությունները։
 */

class Js extends Ts {
  constructor() {
    super();
    this.a;
    // this.b; // Error ժառանգորդին հասանելի չէ այս տիրույթը։
    this.c;
  }
}

/**
 * @Abstract_Class
 * 
 * Այս տեսակի Class-ից չի կարելի ստեղծել instance։
 * Abstract Class-ը պետք է ժառանգված լինի։
 */

 abstract class Car {
   abstract drive(): void;

   move(): void {
     console.log(`Abstract Class Example`)
   }
 }

//  const miniCooper = new Car(); // Error 

class JohnCooperWorks extends Car {
  drive() {
    console.log('WOW ... ... ')
  }
}

const JCW = new JohnCooperWorks();
