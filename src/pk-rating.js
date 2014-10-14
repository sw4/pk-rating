var pk = pk || {};
(function (pk) {
    // HELPERS FOR jQUERY+ANGULAR
    if (typeof jQuery === 'object') {
        // jquery available
        jQuery.fn.extend({
            pkRating: function () {
                pk.rating({
                    element: this[0],
                    name:this[0].getAttribute('name')
                });
            }
        });
    }
    if (typeof angular === 'object') {
        // angular available
        (
        function () {
            angular.module('pk-rating', ['ng'])
                .directive('pkRating', function () {
                return {
                    restrict: 'A',
                    link: function (scope, el) {
                        pk.rating({
                            element: el[0],
                            name:el[0].getAttribute('name')
                        });
                    }
                };
            });
        })();
    }
    pk.rating = function (opt) {
       var el=opt.element,
            inputName=opt.name || el.getAttribute('name') || 'pk-rating-'+pk.getRand(1,999);
        var str="<div class='pk-rating'>\
            <fieldset>\
                <input type='radio' id='"+inputName+"_5' name='"+inputName+"' value='5' />\
                <label for='"+inputName+"_5'></label>\
                <input type='radio' id='"+inputName+"_4' name='"+inputName+"' value='4' />\
                <label for='"+inputName+"_4'></label>\
                <input type='radio' id='"+inputName+"_3' name='"+inputName+"' value='3' />\
                <label for='"+inputName+"_3'></label>\
                <input type='radio' id='"+inputName+"_2' name='"+inputName+"' value='2' />\
                <label for='"+inputName+"_2'></label>\
                <input type='radio' id='"+inputName+"_1' name='"+inputName+"' value='1' />\
                <label for='"+inputName+"_1'></label>\
            </fieldset>\
        </div>"        
        pk.replaceEl(el, str);
    };
    return pk;
})(pk);
