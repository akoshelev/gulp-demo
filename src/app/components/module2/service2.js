define(['components/logging/logger'], function (logger) {

    'use strict';

    logger.log('service 2 initialized.');

    return {
        start: function () {
            logger.log('service 2 started');
        }
    };
});

