
(function stringExtenders() {

    'use strict';

    /**
     * supplant() does variable substitution on the string. It scans through the string looking for
     * expressions enclosed in { } braces. If an expression is found, use it as a key on the object,
     * and if the key has a string value or number value, it is substituted for the bracket expression
     * and it repeats.
     *
     * Written by Douglas Crockford
     * http://www.crockford.com/
     *
     * Example 1 basic usage
     *
     * linkTpl = '<a href="{url}" class="{class}">{lable}</a>';
     * links = linkTpl.supplant({
     *      url : 'http://example.com',
     *      class : 'lnk',
     *      lable : 'Link Bezeichnung'
     *  });
     */
    String.prototype.supplant = function (o) {
        return this.replace(
            /{([^{}]*)}/g,
            function (a, b) {
                var r = o[b];
                return typeof r === 'string' || typeof r === 'number' ? r : a;
            }
        );
    };
})();



define('index', ['components/logging/logger',
                 'components/module1/service1',
                 'components/module2/service2'],
    function (logger, service1, service2) {

        'use strict';

        service1.start();
        service2.start();
    });
