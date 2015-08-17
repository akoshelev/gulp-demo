requirejs.config({
    paths: {
        jquery: '../libs/jquery/dist/jquery',
        moment: '../libs/moment/moment'
    }
});

requirejs(['index'], function (index) {

    'use strict';


    index.start();
});
