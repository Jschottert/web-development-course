// makePizza  
function makePizza(number) {
    let order = 0;

    while (order < number) {
        console.log('Stap 1: Maak het deeg.');
        console.log('Stap 2: Rol het deeg uit')
        console.log('Stap 3: Beleg met ingredienten.');
        console.log('Stap 4: Bak de pizza in oven.')
        order++;
    }
}

// makeSuShi 
function makeSuShi(number) {
    let order = 0;

    while (order < number) {
        console.log('stap 1: Snij ingredienten');
        console.log('Stap 2: Kook de rijst')
        console.log('Stap 3: Rol de shushi in het deeg');
        console.log('Stap 4: Snij de rol in plakken');
        order++;
    }
}

makePizza(2);
makeSuShi(3);