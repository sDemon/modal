"use strict";
var modal = (function () {
    var overlay = document.getElementById('overlay');
    return {
        openModal: function () {
            return overlay.classList.remove("is-hidden");
        },
        closeModal: function () {
            return overlay.classList.add("is-hidden");
        }
    };
}());