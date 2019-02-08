/* App Model = Data*/
var model = {
    // Blank variable used to store the which
    // index in cats is to be accessed via
    // the functions in octopus which are triggered
    // from the functions in the views. 
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

        // Octopus initiates these functions in the View
        viewButtons.init();
        viewCurrentCat.init();
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
    // clicks element in the currentCat index
    // in the cats array object.
    incrementCounter: function () {
        model.currentCat.clicks++;
        viewCurrentCat.render();
    }

};

/* App View for Buttons to switch cats*/
var viewButtons = {
    
};

/* App View that shows current selected cat & click count*/
var viewCurrentCat = {

    init: function () {

        // Grabs the elements based on the ID in the HTML
        // and stores it in the DOM
        this.catElem = document.getElementById('cat');
        this.catNameElem = document.getElementById('cats-name');
        this.catImageElem = document.getElementById('car-img');
        this.catCicks = document.getElementById('cat-clicks');

        // Basically the same event listener used in the spegetti
        // version, but here the incrementation is in the octopus
        // (hence the octopus.incrementCounter), this is mearly
        // listening for it, while the functionality is in octopus.
        // Also catImageElem allows for any cat to used this function
        this.catImageElem.addEventListener('click', function () {
            octopus.incrementCounter();
        });

        // runs the render function of 'this' object
        // i.e. viewCurrentCat. 
        this.render();
    },

    render: function () {
        
        // Updates what has been put into the DOM with
        // the currently selected cat
        var currentCat = octopus.getCurrentCat();
        this.catCicks.textContent = currentCat.clicks;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.imgSrc;
    }

};

/* 
Function to stat entire program by calling the
init function inside the octopus variable
which calls on the Model to set the currentCat
and the Views to start functionality. 
 */
octopus.init();