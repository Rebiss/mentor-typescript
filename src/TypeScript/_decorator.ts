/**
 * @Decorator
 * 
 * ! Decorator դեկլարատիվ ծրագրավորման ինստրումենտ է, որը թույլ է տալիս ավելացնել class և իր method-ին հավելյալ մետատվյալներ
 *   և դրանով փոխել class-ի կամ method-ի վարքագիծը առանց փոփոծելու կոդը(class || method)։
 * ! Decorator-ը ֆունկցիաներ են, որոնք կարող են կիրառվել class, method, property, acssesor(setter, getter):
 * 
 */
    const DecorClass = (constructor: Function) => { console.log(constructor) };

    @DecorClass
    class Person {
        constructor(public id: number, public key: string){}

        public getData(): string {
            return `${this.key} ${this.id}`
        }
    }
     
    const DecorProperty = ( target: Object, key: string | symbol) => { console.log(key) };

    class Person1 {
        @DecorProperty
        secret: number;

        constructor(public id: number, public key: string, secret: number){
            this.secret = secret;
        }

        public getData(): string {
            return `${this.key} ${this.id} ${this.secret}`
        }
    }

    const DecorMethod = (target: Object, key: string | symbol, descriptor: PropertyDecorator ) => { 
         console.log(key) //return getData;
    }

    class Person2 {
 
        constructor(public name: string, public key: number){}

        @DecorMethod
        public getData(): string {
            return `${this.key} ${this.name}`
        }
    }

    function factory(ev: any) {         // Factory
        return function (target: any) { // Decorator
            console.log(target)         // Logic
        }
    }

    /**
     *  @f @g decor !One_Line
     * 
     * @f
     * @g
     * decor !Multiple_Lines
     */
