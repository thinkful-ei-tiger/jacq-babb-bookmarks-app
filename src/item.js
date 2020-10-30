import cuid from 'cuid';

const createBookmark = function (title, url, descrip, rating) {
    return{
        id: cuid(),
        title,
        url,
        descrip,
        rating,
        expanded: false
    };
};

export default {
    createBookmark
};



