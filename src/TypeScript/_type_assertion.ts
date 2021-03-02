/**
 * @Type_Assertion
 * 
 * ! Տիպի հաստատում - թույլ է տալիս ցուցադրել մեզ ահհրաժեշտ տիպը։
 * ! Աշխատում է միայն ՍուպերՏիպերի և ԵնթաՏիպերի հետ։
 */

 type Politics = { a: string, b: boolean };

 let AmParty = { a: 'BHK', b: false } as Politics;
 let Party   = { a: 'Democratic Party'} as Politics; // Սուպեր տիպը։
 let Lider   = { a: 'Hillary Clinton', b: false, c: 'This is tufta'} as Politics; // Ենթա տիպը։

 //let HayocArcivner   = { d: 'WTF'} as Politics; //Error

 /**
  * @DOM_Element
  * 
  * <div class='name-logo'></div>
  */

 let div = document.querySelector('.name-logo') as HTMLDivElement | null;
