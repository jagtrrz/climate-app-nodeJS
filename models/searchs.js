const axios = require('axios');

class Searchs {

    history = [];

    constructor() {
        //TODO: Leer DB si existe
    };

    get paramMapBox(){
        return {
            "access_token": process.env.MAPBOX_KEY,
            "limit": 5,
            "language": "es"
        }
    }
        
    async city(city){

        try {

            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json`,
                params: this.paramMapBox
            })

            const response = await instance.get(); 
            console.log(response); 

        } catch (error) {

            return []; 
        }

        

        return []; //retorna las ciudades que counciden con el parametro. 

    }


}

module.exports = Searchs