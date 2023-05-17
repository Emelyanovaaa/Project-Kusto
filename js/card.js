import {popupPhotoImg, popupPhotoSubText, closePopupImgEsc} from './script.js';

export default class Card {
    static _template = document.querySelector('#templateCard');

    constructor(name, link, templateSelector){
        this._name = name;
        this._link = link;

        this._templateSelector = templateSelector;

        this._like = this._like.bind(this);
        this._removeCard = this._removeCard.bind(this);

    }

    createCard (){

        this._cardElement = Card._template.content.cloneNode(true);

        this._cardPhotoImg = this._cardElement.querySelector('.cards__photo-img');
        this._cardPhotoImg.setAttribute('src', this._link);
        this._cardPhotoImg.addEventListener('click', this._openPopupImg);

        this._cardSubText = this._cardElement.querySelector('.cards__sub-text');
        this._cardSubText.textContent = this._name;

        this._cardLikeBtn = this._cardElement.querySelector('.cards__btn-icon');
        this._cardLikeBtn.addEventListener('click', this._likeCard);

        this._removeCardBtn = this._cardElement.querySelector('.cards__cancel-button');
        this._removeCardBtn.addEventListener('click', this._removeCard);

        this._templateSelector.append(this._cardElement);
        return  this._templateSelector;

    }

    _likeCard(event){
        let likeTarget = event.target;
    
        if (likeTarget.classList.contains('is-active')) {
            likeTarget.classList.remove('is-active');
            return;
        }
    
        likeTarget.classList.add('is-active');
    }

    _removeCard(event) {
        const btn = event.target.closest('.cards__cancel-button');
        if (!btn) {
            return;
        }
        btn.closest('.cards__card').remove();
    }

    _openPopupImg (event) {
        let img = event.target.closest('.cards__photo-img');
        if (!img) {
            return;
        }
    
        let cardLinkValue = img.getAttribute('src');
        popupPhotoImg.setAttribute('src', cardLinkValue);
    
        let card = img.closest('.cards__card');
        let cardSubText = card.querySelector('.cards__sub-text');
        let nameImg = cardSubText.textContent;
        popupPhotoSubText.textContent = nameImg;
    
        let popupImg = document.querySelector('.popup__photo');
        popupImg.classList.remove('is-hidden');
        document.addEventListener('keydown', closePopupImgEsc);
    };
    

};

