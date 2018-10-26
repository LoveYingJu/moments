// importing named exports we use brackets
import { createPostTile, uploadImage } from './helpers.js';

// when importing 'default' exports, use below syntax
import API from './api.js';

const api  = new API();

// we can use this single api request multiple times
const feed = api.getFeed();


// fectch practice
fetch('http://localhost:8080/data/users.json')
    .then((response)=>response.json())
    .then((myjson)=>console.log(myjson))


// let heading = document.createElement('h1');
// heading.innerText = 'login';
// document.getElementById('large-feed').appendChild(heading);




feed
.then(posts => {
    posts.reduce((parent, post) => {

        parent.appendChild(createPostTile(post));
        
        return parent;

    }, document.getElementById('large-feed'))
});

// Potential example to upload an image
const input = document.querySelector('input[type="file"]');

input.addEventListener('change', uploadImage);

