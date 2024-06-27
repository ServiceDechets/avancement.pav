var wms_layers = [];


        var lyr_WazeWorld_0 = new ol.layer.Tile({
            'title': 'Waze (World)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });
var format_COMMUNE_GA_1 = new ol.format.GeoJSON();
var features_COMMUNE_GA_1 = format_COMMUNE_GA_1.readFeatures(json_COMMUNE_GA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMMUNE_GA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMMUNE_GA_1.addFeatures(features_COMMUNE_GA_1);
var lyr_COMMUNE_GA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMMUNE_GA_1, 
                style: style_COMMUNE_GA_1,
                popuplayertitle: "COMMUNE_GA",
                interactive: false,
                title: '<img src="styles/legend/COMMUNE_GA_1.png" /> COMMUNE_GA'
            });
var group_Territoire = new ol.layer.Group({
                                layers: [lyr_COMMUNE_GA_1,],
                                fold: "open",
                                title: "Territoire"});

lyr_WazeWorld_0.setVisible(true);lyr_COMMUNE_GA_1.setVisible(true);
var layersList = [lyr_WazeWorld_0,group_Territoire];
lyr_COMMUNE_GA_1.set('fieldAliases', {'ID': 'ID', 'PREC_PLANI': 'PREC_PLANI', 'NOM': 'NOM', 'CODE_INSEE': 'CODE_INSEE', 'STATUT': 'STATUT', 'CANTON': 'CANTON', 'ARRONDISST': 'ARRONDISST', 'DEPART': 'DEPART', 'REGION': 'REGION', 'POPUL': 'POPUL', 'MULTICAN': 'MULTICAN', });
lyr_COMMUNE_GA_1.set('fieldImages', {'ID': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'NOM': 'TextEdit', 'CODE_INSEE': 'TextEdit', 'STATUT': 'TextEdit', 'CANTON': 'TextEdit', 'ARRONDISST': 'TextEdit', 'DEPART': 'TextEdit', 'REGION': 'TextEdit', 'POPUL': 'Range', 'MULTICAN': 'TextEdit', });
lyr_COMMUNE_GA_1.set('fieldLabels', {'ID': 'no label', 'PREC_PLANI': 'no label', 'NOM': 'no label', 'CODE_INSEE': 'no label', 'STATUT': 'no label', 'CANTON': 'no label', 'ARRONDISST': 'no label', 'DEPART': 'no label', 'REGION': 'no label', 'POPUL': 'no label', 'MULTICAN': 'no label', });
lyr_COMMUNE_GA_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});