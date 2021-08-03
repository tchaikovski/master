var app = app || {};

(function () {

    var $mapInstance = (function () {
        var mapDefault   = {
                id          : null,
                el          : null,
                loader      : null,
                valueInput  : null,
                mapContainer: null,
                ymap        : null,
                options     : {}
            },

            loaderHide   = function () {
                this.loader.style.display = "none";
            },

            setValue     = function (json) {
                this.valueInput.value = JSON.stringify(json);
            },

            getJsonValue = function () {
                return JSON.parse(this.valueInput.value)
            },

            init         = function (options) {
                if (µ.isObject(options.options.center)) {
                    options.options.center = [options.options.center.latitude, options.options.center.longitude]
                }

                var mEl = µ.clone(mapDefault);
                mEl.options = options;
                mEl.id = options.widgetId;

                mEl.el = document.getElementById(options.widgetId + '-container');
                mEl.loader = document.getElementById(options.widgetId + '-loader');
                mEl.mapContainer = document.getElementById(options.widgetId + '-area');
                mEl.valueInput = document.getElementById(options.widgetId + '-input');

                mEl.loaderHide = loaderHide;
                mEl.setValue = setValue;
                mEl.getJsonValue = getJsonValue;

                mEl.ymap = new ymaps.Map(mEl.mapContainer, options.options);

                var geometry   = mEl.getJsonValue(),
                    properties = {
                        hintContent: options.hint
                    },
                    polyLine   = new ymaps.Polyline(geometry, properties, {
                        type             : 'LineString',
                        draggable        : options.options.editable,
                        strokeColor      : '#ff0000',
                        strokeWidth      : 4,
                        strokeOpacity    : 0.5,
                        editorMenuManager: function (items) {
                            items.push({
                                title  : 'Замкнуть маршрут',
                                onClick: function () {
                                    var geometry = polyLine.geometry.getCoordinates();

                                    if (geometry[0] === geometry[geometry.length - 1])
                                        return;

                                    polyLine.geometry.getCoordinates().push(geometry[0]);

                                    mEl.ymap.geoObjects.remove(polyLine);
                                    mEl.ymap.geoObjects.add(polyLine);

                                    polyLine.events.fire('geometrychange');

                                    polyLine.editor.startEditing();
                                }
                            });

                            return items;
                        }
                    });

                polyLine.events.add('geometrychange', function (data) {
                    mEl.setValue(polyLine.geometry.getCoordinates());
                });

                mEl.ymap.geoObjects.add(polyLine);

                if(options.options.editable) {
                    polyLine.editor.startEditing();
                }

                if (!polyLine.geometry.getCoordinates().length) {
                    polyLine.editor.startDrawing();
                }

                if (polyLine.geometry.getCoordinates().length > 1 && polyLine.geometry.getBounds()) {
                    mEl.ymap.setBounds(polyLine.geometry.getBounds());
                }

                mEl.loaderHide();

                mEl.polyLine = polyLine;

                return mEl;
            };

        return {
            init: init
        }
    })();


    var $maps = (function () {
        var container   = {},
            mapInstance = $mapInstance,

            init        = function (options) {
                if (window.ymaps === undefined) {
                    throw new Error('Не загружены Yandex Maps');
                }
                var map = mapInstance.init(options);
                add(map);
                return map;
            },

            add         = function (map) {
                container[map.id] = map;
            },

            remove      = function (map) {
                delete(container[map.id]);
            },

            list        = function () {
                return container;
            },

            get         = function (mapId) {
                return container[mapId];
            };

        return {
            init: init,
            list: list,
            add: add,
            get : get
        }
    })();

    app.routes = app.routes || $maps;

})();