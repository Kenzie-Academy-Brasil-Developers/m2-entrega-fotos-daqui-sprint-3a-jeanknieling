class Api {
    static getPhotos(positionValue, searchValue = '') {
        return fetch(`https://shrouded-mountain-15003.herokuapp.com/https://flickr.com/services/rest/?api_key=a928e1959a16d32612bcd6dad7ca0b22&format=json&nojsoncallback=1&method=flickr.photos.search&safe_search=1&per_page=15&lat=${positionValue.lat}&lon=${positionValue.long}&text=${searchValue}`)
        .then(response => response.json())
    }

    static constructImageURL(photoObj) {
        return "https://farm" + photoObj.farm +
            ".staticflickr.com/" + photoObj.server +
            "/" + photoObj.id + "_" + photoObj.secret + ".jpg";
    }
}
export {Api}