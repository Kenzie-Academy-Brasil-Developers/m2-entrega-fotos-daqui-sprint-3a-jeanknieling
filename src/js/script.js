import { LocalizacaoGeografica } from "./../models/localizacaoGeografica.js";
import {          Api          } from "./../models/api.js";

await LocalizacaoGeografica.getUserLocation();
let photos = await Api.getPhotos(LocalizacaoGeografica.localizacaoGeografica);
const informationsContainer = document.querySelector('.informationsContainer');
let mainImage = document.querySelector('.mainImage');
const rightArrow = document.querySelector('#rightArrow');
const leftArrow = document.querySelector('#leftArrow');
let photoDescription = document.querySelector('.photoDescription');
let photoTakerDescription = document.querySelector('.photoTakerDescription');
mainImage.src = Api.constructImageURL(photos.photos.photo[0]);
photoDescription.innerText = photos.photos.photo[0].title;
photoTakerDescription.innerText = `Imagem tirada por ${photos.photos.photo[0].owner}`;
let counter = 0;
informationsContainer.addEventListener('click', function(event) {
    const clickedButton = event.target;
    if(clickedButton.id === 'rightArrow' && counter < photos.photos.photo.length - 1){
        counter++;
        mainImage.src = Api.constructImageURL(photos.photos.photo[counter]);
        photoDescription.innerText = photos.photos.photo[counter].title;
        photoTakerDescription.innerText = `Imagem tirada por ${photos.photos.photo[counter].owner}`;
        
    } else if(clickedButton.id === 'leftArrow' && counter > 0) {
        counter--;
        mainImage.src = Api.constructImageURL(photos.photos.photo[counter]);
        photoDescription.innerText = photos.photos.photo[counter].title;
        photoTakerDescription.innerText = `Imagem tirada por ${photos.photos.photo[counter].owner}`;
    }
    counter === photos.photos.photo.length - 1 ? rightArrow.classList.add('arrowDisabled') : rightArrow.classList.remove('arrowDisabled');
    counter === 0 ? leftArrow.classList.add('arrowDisabled') : leftArrow.classList.remove('arrowDisabled');
});

const input = document.querySelector('.searchInput');
const searchButton = document.querySelector('.searchButton');
searchButton.addEventListener('click', async function(event) {
    counter = 0;
    event.preventDefault();
    const search = input.value.replace(/ /g, '%20');
    photos = await Api.getPhotos(LocalizacaoGeografica.localizacaoGeografica, search);
    mainImage.src = Api.constructImageURL(photos.photos.photo[0]);
    input.value = '';
});

const shortcutButtonsContainer = document.querySelector('.shortcutButtonsContainer');
shortcutButtonsContainer.addEventListener('click', async (event) => {
    const clickedButton = event.target.id;
    switch(clickedButton) {
        case 'people':
        case 'decoration': 
        case 'home-office':
            counter = 0;
            photos = await Api.getPhotos(LocalizacaoGeografica.localizacaoGeografica, clickedButton.replace(/-/g, '%20'));
            mainImage.src = Api.constructImageURL(photos.photos.photo[0]);
            rightArrow.classList.remove('arrowDisabled');
            leftArrow.classList.remove('arrowDisabled');
            break;
    }
})