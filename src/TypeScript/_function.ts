/**
 * @Function անհրաժեշտ փոփոխականով։
 */

function def( a: number, b: number, c: number ) { 
  return a + b + c;
}

const arrowDef = (a: number, b: number, c: number) => a * b * c;

// const testDef: string = arrowDef(1,2,3)  // Error Քանի որ testDef ընդունում է string իսկ arrowDef հետ է վերադարձնում number։

/**
 * @Function ոչ անհրաժեշտ փոփոխականով։
 */

function def1( a: number, b: number, c?: number ) { 
   if (c) return a + b + c;

   return a + b;
}

def1( 1, 1, 1) // Return 3
def1( 1, 5 )  // Return 6 եթե բացակայւոմ է ? ապա կաստանանք Error

/**
 * @Function իսկսկբանե հայտարարված փոփոխականով։ 
 */

function funDefault( a: number = 6, b: number, c: number = 11 ) { 
   return a + b + c;
}

funDefault( 1, 2) // Return 14


// @ts-ignore
import React from 'react';

type FunProps = {
   key: number,
   id?: number,
}
// React.FC
// Generic
const TS: React.FC<{key: number, id: number}> = ({key, id}) => <h1 key={key}>{id}</h1>;
// or
const TS1 = ({key, id=1}: FunProps) => <h1>{key} {id}</h1>


export const TSX0: React.FC = () => ; //Error

const Test = () => <TS1 /> // Error

const Test1 = () => <TS1 key={22}/>

export const TSX: React.FC = () => <h1>TS</h1>