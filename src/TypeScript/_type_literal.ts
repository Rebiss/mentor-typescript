/**
 * @Literal_Type
 * 
 * Հստակ հայտարարել տիպին վերագրվող արժեքը։
 */
    let lengPro: 'Javascript' | 'TypeScript' | 'Rust';
    // lengPro = 'Go' // Error
    
    function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
        return (Math.floor(Math.random() * 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
    }

    interface MapConfig {
        lng: number;
        lat: number;
        tileSize: 8 | 16 | 32;
    }
