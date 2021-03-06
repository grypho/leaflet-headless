/**
 * L.TileLayer.WMS example.
 *
 */

var path = require('path');
var L = require('../../index.js');

var document = global.document;

function tilelayerWmsExample (filename, callback) {
    var element = document.createElement('div');
    element.id = 'map-leaflet-tilelayer-wms';
    document.body.appendChild(element);

    var map = L.map(element.id).setView([-17, -67], 3);

    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    L.tileLayer.wms('http://demo.opengeo.org/geoserver/ows?', {
        layers: 'ne:ne',
        transparent: true,
        opacity: 0.1
    }).addTo(map);

    map.saveImage(filename, callback);
}

// export if script is called as a module
if (typeof exports === 'object') {
    module.exports = tilelayerWmsExample;
}

// run the example if it's ran directly
if (require.main === module) {
    console.log('Saving an image with a WMS layer ...');
    console.time('leaflet-tilelayer-wms');

    var filename = path.join(__dirname, 'example-leaflet-tilelayer-wms.png');
    tilelayerWmsExample(filename, function (filename) {
        console.log('Saved file to ' + filename);
        console.timeEnd('leaflet-tilelayer-wms');
    });
}
