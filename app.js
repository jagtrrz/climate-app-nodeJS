require("dotenv").config()

const { inquirerMenu, pause, readInput } = require("./helpers/inquirer");
const Searchs = require("./models/searchs");

const main = async() => {

    const searchs = new Searchs(); 

    let option; 

    do {
        option = await inquirerMenu();

        switch( option ){
            case 1:
                // mostrar mensaje
                const place = await readInput("City: "); 
                await searchs.city(place);
                // mostrar resultados
                // seleccionar opcion
                // clima
                // mostrar resusltados
                console.log(`\nSite information\n`.green)
                console.log(`City: `, ); 
                console.log(`Lat: `, );
                console.log(`Lon: `, );
                console.log(`Temperature: `, );
                console.log(`Min: `, );
                console.log(`Max: `, );
            break; 

        }

        if(option !== 0){
            await pause();
        }

    } while(option !== 0)
}

main();


