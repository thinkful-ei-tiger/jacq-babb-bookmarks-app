//=====================================================STORE.JS======================================================

import $ from 'jquery';
import cuid from 'cuid';

const list=[];

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/jacqbabb/bookmarks/';

/* fetch & promise error handling */
const fetchFromApi = function (...args) {
    let error='';
    return fetch(...args)
        .then (results => {
            if (!results.ok) {
                error = {code: results.status};
                if (!results.headers.get('content-type').includes('json')) {
                    error.message = res.statusText;
                    return Promise.reject(error);
                }
            }
            return results.json();
        })
        .then(data => {
            if(error){
                error.message = data.message;
                return Promise.reject(error);
            }
            return data;
        });
};

const getBookmarks = function () {
    return fetchFromApi(`${BASE_URL}`);
};

const postToApi = function (newBookmark) {
    const apiBookmark = JSON.stringify({ newBookmark });
    console.log(apiBookmark);
    return fetchFromApi(`${BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: (apiBookmark)
    });
  };

const addBookmarkToList = function(newBookmark) {
    list.push(newBookmark);
    console.log(list);
};

const handleNewBookmarkSubmit = function () {
    $('#addNew').on('submit', function (event) {
      event.preventDefault();
      const newBookmark = [
        {
            id: cuid(),
            title: $('.title').val(),
            url: $('.url').val(),
            descrip: $('.descrip').val(),
            rating: $('.rating').val(),
            extend: false
        }
      ];
      console.log(newBookmark);
      addBookmarkToList(newBookmark);
      postToApi(newBookmark)
    });

};

//const render = function () {

//}


const main = function () {
    getBookmarks()
        .then((list) => {
            list.forEach((item) => addBookmarkToList(item));
//            render();
       })
    handleNewBookmarkSubmit();
    console.log(list);
    getBookmarks()
    .then((list) => {
        list.forEach((item) => addBookmarkToList(item));
    })
};


$(main);



// things that happen on load:                          
//  fetch from api                                      xx fetchFromApi()
//  add api bookmarks to list                           xx addFetchLocal()
//  render:                                             mainPageTemplate
//      page title
//      headers
//      add-new button                                  addNewTemplate toggle
//      filter option 
//      condensed view of any bookmarks from list:      minimizedBMTemplate
//          title (static)
//          rating (static)

// things that happen on click of add-new button:
//  render:                                             
//      title
//      headers
//      add-new form                                    addNewTemplate toggle
//      filter option 
//      condensed view                                  

// things that happen on click of submit:               xx handleNewBookmarkSubmit$(`#bookmarkAdd`).on(submit, function () {})
//  form data becomes an object                         xx addBookmarkToList()
//  object POST to api                                  postToApi()
//  do all things that happen on load                   

// things that happen on click of bookmark:
//  toggle expanded key value in list (!update api)     expandBMTemplate
//  render things that happen on load

// things that happen on edit of any field:             $(`.item-element`).on(click, -of this field- function (this value) {})
// search by id in list                                 findById
// update value in object
//      title                                           findAndUpdateTitle (this.title)
//      url                                             findAndUpdateURL (this.url)
//      descrip                                         findAndUpdateDescrip (this.descip)
//      rating                                          findAndUpdateRating (this.rating)
//  find id in api & patch                              patchInApi
//  do all things that happen on load

// things that happen on delete of bookmark:            $(`.item-element`).on(click, remove, function(){})
//  find by id & delete from api                        deleteFromId
//  do all things that happen on load
