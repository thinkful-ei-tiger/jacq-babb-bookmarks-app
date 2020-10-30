import cuid from 'cuid';
import item from './item';

const list=[
    {
        id: cuid(),
        title: 'yahoo',
        url: 'https://yahoo.com',
        descrip: 'search engine',
        rating: 3,
        expanded: false
    },
    {
        id: cuid(),
        title: 'google',
        url: 'https://google.com',
        descrip: 'search engine',
        rating: 5,
        expanded: false
    }
];

//toggle add-new form visible
let adding=false;

const findById = function (id) {
    return this.list.find(currentItem => currentItem.id === id);
};

const addBookmarkToList = function () {
    this.list.push(item.createBookmark());
};

const findAndDelete = function (id) {
    this.list = this.list.filter(currentItem => currentItem.id !== id);
};

// DO I NEED ALL OF THESE, OR IS THERE A BETTER WAY TO DO THIS.....?

/*const findAndUpdateTitle = function (id, title) {

}

const findAndUpdateURL = (id, url) {

}

const findAndUpdateDescrip = (id, descrip){

}

const findAndUpdateRating = (id, rating){

}

const toggleExpanded = (id){

}

con

bindEventListeners {
    
}

*/
export default {
    list,
    findById,
    addBookmarkToList
};