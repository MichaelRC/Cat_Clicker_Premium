/* App Model = Data*/
var model = {
    currentCat: null,
    cats: [
        {
            name: 'Little Kitty',
            imgSrc: 'imgs/cat_picture.jpg',
            clicks: 0         
        }, {
            name: 'Soon Cat',
            imgSrc: 'imgs/soon.jpg',
            clicks: 0
        }, {
            name: 'Contemplative',
            imgSrc: 'imgs/contemplative_cat.jpg',
            clicks: 0
        }, {
            name: 'Cuddles',
            imgSrc: 'imgs/cuddles.jpg',
            clicks: 0
        }, {
            name: 'Wilde',
            imgSrc: 'imgs/wilde.jpg',
            clicks: 0
        }
    ]

};

/* App Octopus = Function/Connected between Model & View(s)*/
var octopus = {
    
    init: function () {
        // Sets the currentCat to the cat in the 0 index of
        // the 'cats' array in the view. 
        model.currentCat = model.cats[0];

        // Tells the view to initiate these functions
        catListView.init();
        catView.init();
    },

    // Used in Views to access the currentCat function()
    // to get the first cat from the cats array
    getCurrentCat: function () {
        return model.currentCat;
    },

    // Used in Views to access the cats array
    getCats: function () {
        return model.cats;
    },

    // This function sets the currentCat
    // to whatever cat is. 
    setCurrentCat: function () {
        model.currentCat = cat;
    },

    // When the cat is clicked, the
    // clicks object as part of that cats 
    // object is increased. 
    incrementCounter: function () {
        model.currentCat.clicks++;
        catView.render();
    }

};

/* App View for Buttons to switch cats*/
var viewButtons = {

};

/* App View that shows current selected cat & click count*/
var viewCurrentCat = {

};