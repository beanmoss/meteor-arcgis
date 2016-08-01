// import {
//     Template
// } from 'meteor/templating';
// import {
//     ReactiveVar
// } from 'meteor/reactive-var';
//
// import './main.html';

Template.hello.onCreated(function helloOnCreated() {
    this.counter = new ReactiveVar(0);
});

Template.hello.onRendered(function helloOnRendered() {
    $(document).ready(function() {
        require([
            "esri/Map",
            "esri/views/MapView",
            "dojo/domReady!"
        ], function(Map, MapView) {
            var map = new Map({
                basemap: "streets"
            });
            var view = new MapView({
                container: "viewDiv", // Reference to the scene div created in step 5
                map: map, // Reference to the map object created before the scene
                zoom: 4, // Sets the zoom level based on level of detail (LOD)
                center: [15, 65] // Sets the center point of view in lon/lat
            });
        });

    });
});

Template.hello.helpers({
    counter() {
        return Template.instance().counter.get();
    },
});

Template.hello.events({
    'click button' (event, instance) {
        // increment the counter when button is clicked
        instance.counter.set(instance.counter.get() + 1);
    },
});

Tracker.autorun(function() {
    if (typeof require != "undefined") {
        require([
            "esri/Map",
            "esri/views/MapView",
            "dojo/domReady!"
        ], function(Map, MapView) {
            var map = new Map({
                basemap: "streets"
            });
            var view = new MapView({
                container: "viewDiv", // Reference to the scene div created in step 5
                map: map, // Reference to the map object created before the scene
                zoom: 4, // Sets the zoom level based on level of detail (LOD)
                center: [15, 65] // Sets the center point of view in lon/lat
            });
        });

    }
});
