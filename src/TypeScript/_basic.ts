/**
 * @Number_Types
 * 
 */
    let decimalValue: number = 11;
    let hexaDecimalValue: number = 0xf10b;
    let binaryValue: number = 0b110100;
    let octalValue: number = 0o410;

/**
 * @String_Types
 * 
 */
    let firstName: string = "Kunal";
    let lastName: string = "Chowdhury";
    let message: string = `Hi, my name is: ${firstName} ${lastName}`;


 /**
 * @Boolean_Types
 * 
 */
    let isPrimaryAccount: boolean = true;
    let hasCards: boolean = false;

 /**
 * @Null_Undefined_Types
 * 
 */
    let nullValue: null = null;
    // let numericValue: number = null;
    let undefinedValue: undefined = undefined;
    // let numericValue: number = undefined;

 /**
 * @Enum_Types
 * 
 */
    enum CardTypes { Debit, Credit, Virtual }
    let card: CardTypes = CardTypes.Debit;

 /**
 * @Void_Types
 * 
 */
    function showMessage(): void {}

 /**
 * @Any_Types
 * 
 */
    let dynamicList: any[] = [ "Kunal Chowdhury","Free User", 21, true];

 /**
 * @Never_Types
 * 
 */
    function throwError(message: string): never {
        throw new Error(message);
    }

 /**
 * @Tuple_Types
 * 
 */
    let person: [string, number] = ["Kunal", 2018];
    // let person: [string, number] = [2018, "Kunal"]; // Error
    // let person: [string, number] = ["Kunal", 2018, "India"]; 
    // let person: [string, number] = ["Kunal", 2018, true]; // Error

 /**
 * @Array_Types
 * 
 */
    let arr: number[] = [80, 85, 75];
    let arrOR: Array<number> = [80, 85, 75];

/**
 * @Object_Types
 * 
 */
    declare function create(o: object | null): void;

    create({ prop: 0 });
    create(null);
    // create(42); // Error
    // create("string"); // Error
    // create(false); // Error
    // create(undefined); // Error
    let DataUser: {name: string, age: number} = {
        name: 'Inokentios',
        age: 75,
    };
