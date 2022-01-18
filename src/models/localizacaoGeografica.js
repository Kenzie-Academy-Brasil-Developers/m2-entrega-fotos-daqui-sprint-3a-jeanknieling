class LocalizacaoGeografica {

    static localizacaoGeografica = {
        lat : 0,
        long : 0
    }

    static async getUserLocation() {
        try {
            const location = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject)
            }); 
            this.localizacaoGeografica = {
                lat: location.coords.latitude,
                long: location.coords.longitude
            }
        } catch(Error) {

        } 
    }
}
export {LocalizacaoGeografica}


/* Fotos Daqui
Chave:
a928e1959a16d32612bcd6dad7ca0b22

Segredo:
1bac9a11a14a2cf7 
https://shrouded-mountain-15003.herokuapp.com/https://flickr.com/services/rest/?api_key=a928e1959a16d32612bcd6dad7ca0b22&format=json&nojsoncallback=1&method=flickr.photos.search&safe_search=1&per_page=5&lat=-29.924851&lon=-53.415998&text=eventos
*/
