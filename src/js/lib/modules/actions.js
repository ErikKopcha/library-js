import $ from '../core';

$.prototype.on = function(eventName, callback) {
    if (!eventName || !callback) {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        this[i].addEventListener(eventName, callback);
    }

    return this;
}

$.prototype.off = function(eventName, callback) {
    if (!eventName || !callback) {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        this[i].removeEventListener(eventName, callback);
    }

    return this;
}

$.prototype.click = function(handler) {
    for (let i = 0; i < this.length; i++) {
        if (handler) {
            this[i].addEventListener('click', handler);
        } else {
            this[i].click();
        }

    }

    return this;
}

$.prototype.closest = function(selector) {
    let counter = 0;

    for (let i = 0; this.length; i++) {
        this[i] = this[i].closest(selector);
        counter++;
    }

    return this;
}