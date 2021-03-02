/**
 * @Utility_Types
 * 
 * Հեշտացնւոմ է բազային տիպերը։
 */

 /**
  * @Partial_T
  */
    interface Todo {
        title: string;
        description: string;
    }

    function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
        return { ...todo, ...fieldsToUpdate };
    }

    const todo1 = {
        title: 'organize desk',
        description: 'clear clutter',
    };

    const todo2 = updateTodo(todo1, {
        description: 'throw out trash',
    });

  /**
  * @Readonly_T
  * 
  * Ստեղծում ենք տիպ որը միայն կարդալու համար է նախատեսված։
  */
    interface Todo1 {
        title: string;
    }

    const todo: Readonly<Todo1> = {
        title: 'Delete inactive users',
    };

    todo.title = 'Hello'; // Error

  /**
  * @Pick_T_K
  */
    interface Todo {
        title: string;
        description: string;
        completed: boolean;
    }

    type TodoPreview = Pick<Todo, 'title' | 'completed'>;

    const todo3: TodoPreview = {
        title: 'Clean room',
        completed: false,
    }


  /**
  * @Omit_T_K
  */
    interface Todo {
        title: string;
        description: string;
        completed: boolean;
    }

    type TodoPreview1 = Omit<Todo, 'description'>;

    const todo4: TodoPreview1 = {
        title: 'Clean room',
        completed: false,
    };

  /**
  * @Exclude_T_U
  * 
  * Ստեղծւոմ ենք Utility և նրա միջից բացառում ենք այն բոլոր արգումենտները որոնք 2-րդ ենք փոխանցում
  */
    type T0 = Exclude<"a" | "b" | "c", "a">;  
    type T1 = Exclude<"a" | "b" | "c", "a" | "b">;  // "c"
    type T2 = Exclude<string | number | (() => void), Function>;  // string | number

  /**
  * @Extract_T_U
  * 
  * Exclude հակառակն է։
  */
    type T3 = Extract<"a" | "b" | "c", "a" | "f">;  // "a"
    type T4 = Extract<string | number | (() => void), Function>;  // () => void


  /**
  * @NonNullable_T
  * 
  * Դուրս է թողնում գոյություն չունեցող տիպերը։
  */
    type T5 = NonNullable<string | number | undefined>;  // string | number
    type T6 = NonNullable<string[] | null | undefined>;  // string[]

  /**
  * @Parameters_T
  */
    declare function f1(arg: { a: number, b: string }): void
    type T7 = Parameters<() => string>;  // []
    type T8 = Parameters<(s: string) => void>;  // [string]
    type T9 = Parameters<(<T>(arg: T) => T)>;  // [unknown]
    type T10 = Parameters<typeof f1>;  // [{ a: number, b: string }]
    type T11 = Parameters<any>;  // unknown[]
    type T12 = Parameters<never>;  // never
    type T13 = Parameters<string>;  // Error
    type T14 = Parameters<Function>;  // Error

  /**
  * @ConstructorParameters_T
  */
    type T15 = ConstructorParameters<ErrorConstructor>;  // [(string | undefined)?]
    type T16 = ConstructorParameters<FunctionConstructor>;  // string[]
    type T17 = ConstructorParameters<RegExpConstructor>;  // [string, (string | undefined)?]

  /**
  * @ReturnType_T
  */
    declare function f1(): { a: number, b: string }
    type T18 = ReturnType<() => string>;  // string
    type T19 = ReturnType<(s: string) => void>;  // void
    type T20 = ReturnType<(<T>() => T)>;  // {}
    type T21 = ReturnType<(<T extends U, U extends number[]>() => T)>;  // number[]
    type T22 = ReturnType<typeof f1>;  // { a: number, b: string }
    type T23 = ReturnType<any>;  // any
    type T24 = ReturnType<never>;  // any
    type T25 = ReturnType<string>;  // Error
    type T26 = ReturnType<Function>;  // Erro

  /**
  * @InstanceType_T
  */
    class C {
        x = 0;
        y = 0;
    }

    type T27 = InstanceType<typeof C>;  // C
    type T28 = InstanceType<any>;  // any
    type T29 = InstanceType<never>;  // any
    type T30 = InstanceType<string>;  // Error
    type T31 = InstanceType<Function>;  // Error


  /**
  * @Required_T
  * 
  * Ստեղծել տիպ որի բոլոր տողերը դառնում են անհրածեշտ։
  */
    interface Props {
        a?: number;
        b?: string;
    };

    const obj: Props = { a: 5 };
    const obj2: Required<Props> = { a: 5 }; // Error

  /**
  * @ThisParameterType
  */
    function toHex(this: Number) {
        return this.toString(16);
    }

    function numberToString(n: ThisParameterType<typeof toHex>) {
        return toHex.apply(n);
    }


  /**
  * @OmitThisParameter
  */
    // The return type of `bind` is already using `OmitThisParameter`, this is just for demonstration.
    const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);

    console.log(fiveToHex())

  /**
  * @ThisType_T
  */
    type ObjectDescriptor<D, M> = {
        data?: D;
        methods?: M & ThisType<D & M>;
    }

    function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
        let data: object = desc.data || {};
        let methods: object = desc.methods || {};
        return { ...data, ...methods } as D & M;
    }

    let object = makeObject({
        data: { x: 0, y: 0 },
        methods: {
            moveBy(dx: number, dy: number) {
                this.x += dx; 
                this.y += dy;  
            }
        }
    });

    object.x = 10;
    object.y = 20;
    object.moveBy(5, 5);
  
