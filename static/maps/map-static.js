var app = app || {};

(function () {

    var $mapInstance = (function () {
        var mapDefault      = {
                id             : null,
                el             : null,
                loader         : null,
                mapContainer   : null,
                ymap           : null,
                options        : {},
                collectionsData: [],
                collections    : [],
                geoPoints     : []
            },

            loaderHide      = function () {
                this.loader.style.display = "none";
            },

            getPointsCount  = function () {
                var count = 0;
                this.collectionsData.forEach(function (col) {
                    col.data.forEach(function (p) {
                        count++;
                    }.bind(this));
                }.bind(this));

                return count;
            },

            createPoint     = function (point) {
                return new ymaps.Placemark([point.location.latitude, point.location.longitude], {
                    iconCaption   : point.caption === undefined ? '' : point.caption,
                    balloonContent: point.balloon ? point.balloon : null,
                    clusterCaption: point.clusterCaption === undefined ? '' : point.clusterCaption
                }, point.iconConf);
            },

            fillCollections = function (collectionData) {
                var col = new ymaps.GeoObjectCollection(null, {
                    preset: collectionData.preset ? collectionData.preset : 'islands#blueIcon'
                });

                if (!µ.isArray(collectionData.data)) {
                    throw new Error('Список точек должен быть массивом');
                }

                collectionData.data.forEach(function (point) {
                    var geoPoint = this.createPoint(point);
                    this.geoPoints.push(geoPoint);
                    col.add(geoPoint);
                }.bind(this));

                return col;
            },

            setCollections  = function (collections) {
                if (!µ.isArray(collections)) {
                    throw new Error('Коллекции должны быть массивом');
                }

                collections.forEach(function (collection) {
                    var col = this.fillCollections(collection);
                    this.collections.push(col);
                    this.ymap.geoObjects.add(col);
                }.bind(this));
            },

            init            = function (options) {
                if (µ.isObject(options.options.center)) {
                    options.options.center = [options.options.center.latitude, options.options.center.longitude]
                }

                var mEl = µ.clone(mapDefault);
                mEl.options = options;
                mEl.id = options.widgetId;
                mEl.collectionsData = options.collections;

                mEl.loader = document.getElementById(options.widgetId + '-loader');
                mEl.mapContainer = document.getElementById(options.widgetId + '-area');

                mEl.loaderHide = loaderHide;
                mEl.createPoint = createPoint;
                mEl.fillCollections = fillCollections;
                mEl.setCollections = setCollections;
                mEl.getPointsCount = getPointsCount;

                mEl.ymap = new ymaps.Map(mEl.mapContainer, options.options, {suppressMapOpenBlock: true});

                mEl.setCollections(mEl.collectionsData);

                if (mEl.getPointsCount() > 0) {
                    mEl.ymap.setBounds(mEl.ymap.geoObjects.getBounds(), {checkZoomRange: true});
                }

                mEl.loaderHide();

                if(options.enableClusterer) {
                    var clusterer = new ymaps.Clusterer({
                        preset: 'islands#invertedBlueClusterIcons',
                        groupByCoordinates: false,
                        clusterDisableClickZoom: true,
                        clusterHideIconOnBalloonOpen: false,
                        geoObjectHideIconOnBalloonOpen: false
                    });
                    clusterer.options.set({
                        gridSize: 80,
                        clusterDisableClickZoom: true
                    });
                    clusterer.add(mEl.geoPoints);
                    mEl.ymap.geoObjects.add(clusterer);
                }

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
                add(mapInstance.init(options))
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
            get : get
        }
    })();

    app.maps = app.maps || $maps;

})();