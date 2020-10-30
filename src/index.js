import $ from 'jquery';

import 'normalize.css';
import './index.css';

import api from './api';
import store from './store';
import item from './item';



const main = function() {
    console.log(api.getBookmark());
    addBookmarkToList();
    console.log(store.list);
};

main();