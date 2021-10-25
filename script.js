const ig = require('./instagram');

(async () => {

    await ig.initialize(); 

    await ig.login('hp8mailfordevelopment@gmail.com','enola1234');

    await ig.likeTagsProcess(['cars', 'food']);

    debugger;

})()