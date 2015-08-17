define(['jquery', 'moment'], function ($, moment) {

    'use strict';

    var $log = $('.list-group');

    return {
        log: function (msg) {
            var data = {
                    ts: moment().format('MMMM Do YYYY, h:mm:ss a'),
                    text: msg
                },
                template =
                '<a href="#" class="list-group-item">' +
                    '<h4 class="list-group-item-heading">{ts}</h4>' +
                    '<p class="list-group-item-text">{text}</p>' +
                '</a>';

            $log.append(template.supplant(data));
        }
    };
});
