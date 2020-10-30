const BASE_URL = 'https://thinkful-list-api.herokuapp.com/jacqbabb/bookmarks';

/* fetch & promise error handling */
const listApiFetch = function (...args) {
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

const getBookmark = function () {
    return listApiFetch(`${BASE_URL}`);
};

/*
const createBookmarkInApi = function (name) {
    const newItem = JSON.stringify({ name });
    return listApiFetch(`${BASE_URL}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: newBookmark
    });
  };

  const updateBookmarkInApi = function (id, updateData) {
    const newData = JSON.stringify(updateData);
    return listApiFetch(`${BASE_URL}/items/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: newData
    });
  };
  */

  const deleteBookmarkInApi = function (id) {
    return listApiFetch(BASE_URL + id, {
      method: 'DELETE'
    });
  };

export default {
    getBookmark,
    //createBookmark,
    //updateBookmark,
    deleteBookmark,
}