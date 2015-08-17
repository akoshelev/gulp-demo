define(['components/logging/logger'], function (logger) {

    'use strict';

    logger.log('service 1 initialized.');

    return {
        start: function () {
            logger.log('service 1 started');
        }
    };
});
