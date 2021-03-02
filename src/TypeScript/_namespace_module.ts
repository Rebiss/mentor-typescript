/**
 * @Namespace
 * 
 * Այլընտրանք է class-ի static հայտարարելուն։ Սատանում ենք ինկապսուլացված տվյալներ։
 */
    namespace Space {

        export const Hex: string = '23ds55sd8cxcf';
        const Num: number = 2211; // Անհրաժեշտ է export լինի։

        export const def = (lName: string, fName: string): string => `${lName} ${fName}`
    }

    const globHex = Space.Hex;
    const globNum = Space.Num //Error 

/**
 * Իսկ եթե ցանկանունում ենք հայտարարված namespace օգտագործել միքանի ֆայլի մեջ?
 *  ///<reference path="pathName Space.ts "> 
 * Բայց նախընտրելի է օգտագործել JS module, քանի որ module ստողծւոմ է իր namespace։ Սովորական JS-ի ձևով։
 * 
 */

    export const Hex: string = '23ds55sd8cxcf';
    export const Num: number = 2211;
    // import { Hex, Num } from 'pathName Space.ts '
