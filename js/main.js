 
        /**
         * This is what is known as a JavaScript polyfill. It is JavaScript code that
         * adds support to older web browsers for newer JavaScript features. Not every
         * new feature can be polyfilled and not every polyfill supports every browser.
         * This polyfill will only support web browsers that have full ES5 support;
         * the last generation of JavaScript, as of this writing ES6 is the latest
         * version of JavaScript.
         * 
         * The following code was copied from:
         * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
         */
        if (window.NodeList && !NodeList.prototype.forEach) {
            NodeList.prototype.forEach = function (callback, thisArg) {
                thisArg = thisArg || window;
                for (var i = 0; i < this.length; i++) {
                    callback.call(thisArg, this[i], i, this);
                }
            };
        }

        /**
         * Search the document (web page) and build an array of all elements that have
         * a CSS class of collapsible.
         */
        var collapsibles = document.querySelectorAll( '.collapsible' );

        /**
         * Loop though this array of elements we found. Normally we would provide a
         * function name to forEach and that function would be called for every item
         * in our array but we choose to use what is known as an anonymous function.
         * Instead of calling out to the function we put the function right in place.
         */
        collapsibles.forEach( function( collapsible ){
            /**
             * Add an event listener to each item (collapsible section) we found.
             * When the user clicks on this item on the web page we will call (run)
             * the toggleCollapsible function.
             */
            collapsible.addEventListener( 'click', toggleCollapsible );
        } );

        /**
         * When called by an item (collapsible section) toggle (automatically add or
         * remove) the CSS class open from the item. We have CSS code that will
         * display the hidden collapsible section when the open class is added to the
         * item.
         */
        function toggleCollapsible() {
            this.classList.toggle( 'open' );
        };