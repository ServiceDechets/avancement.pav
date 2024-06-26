var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
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
                interactive: true,
                title: '<img src="styles/legend/COMMUNE_GA_1.png" /> COMMUNE_GA'
            });
var format_TRAVAUX_CA_2 = new ol.format.GeoJSON();
var features_TRAVAUX_CA_2 = format_TRAVAUX_CA_2.readFeatures(json_TRAVAUX_CA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRAVAUX_CA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRAVAUX_CA_2.addFeatures(features_TRAVAUX_CA_2);
var lyr_TRAVAUX_CA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRAVAUX_CA_2, 
                style: style_TRAVAUX_CA_2,
                popuplayertitle: "TRAVAUX_CA",
                interactive: true,
                title: '<img src="styles/legend/TRAVAUX_CA_2.png" /> TRAVAUX_CA'
            });
var group_Territoire = new ol.layer.Group({
                                layers: [lyr_COMMUNE_GA_1,],
                                fold: "open",
                                title: "Territoire"});
var group_Nature = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Nature"});
var group_Topo = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Topo"});
var group_Parcellaire = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Parcellaire"});

lyr_OSMStandard_0.setVisible(true);lyr_COMMUNE_GA_1.setVisible(true);lyr_TRAVAUX_CA_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,group_Territoire,lyr_TRAVAUX_CA_2];
lyr_COMMUNE_GA_1.set('fieldAliases', {'ID': 'ID', 'PREC_PLANI': 'PREC_PLANI', 'NOM': 'NOM', 'CODE_INSEE': 'CODE_INSEE', 'STATUT': 'STATUT', 'CANTON': 'CANTON', 'ARRONDISST': 'ARRONDISST', 'DEPART': 'DEPART', 'REGION': 'REGION', 'POPUL': 'POPUL', 'MULTICAN': 'MULTICAN', });
lyr_TRAVAUX_CA_2.set('fieldAliases', {'id': 'id', 'Site': 'Site', });
lyr_COMMUNE_GA_1.set('fieldImages', {'ID': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'NOM': 'TextEdit', 'CODE_INSEE': 'TextEdit', 'STATUT': 'TextEdit', 'CANTON': 'TextEdit', 'ARRONDISST': 'TextEdit', 'DEPART': 'TextEdit', 'REGION': 'TextEdit', 'POPUL': 'Range', 'MULTICAN': 'TextEdit', });
lyr_TRAVAUX_CA_2.set('fieldImages', {'id': '', 'Site': '', });
lyr_COMMUNE_GA_1.set('fieldLabels', {'ID': 'no label', 'PREC_PLANI': 'no label', 'NOM': 'no label', 'CODE_INSEE': 'no label', 'STATUT': 'no label', 'CANTON': 'no label', 'ARRONDISST': 'no label', 'DEPART': 'no label', 'REGION': 'no label', 'POPUL': 'no label', 'MULTICAN': 'no label', });
lyr_TRAVAUX_CA_2.set('fieldLabels', {'id': 'no label', 'Site': 'no label', });
lyr_TRAVAUX_CA_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});