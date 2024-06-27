var wms_layers = [];

var format_Liste_Sites_AV_0 = new ol.format.GeoJSON();
var features_Liste_Sites_AV_0 = format_Liste_Sites_AV_0.readFeatures(json_Liste_Sites_AV_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Liste_Sites_AV_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Liste_Sites_AV_0.addFeatures(features_Liste_Sites_AV_0);
var lyr_Liste_Sites_AV_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Liste_Sites_AV_0, 
                style: style_Liste_Sites_AV_0,
                popuplayertitle: "Liste_Sites_AV",
                interactive: false,
                title: '<img src="styles/legend/Liste_Sites_AV_0.png" /> Liste_Sites_AV'
            });

        var lyr_WazeWorld_1 = new ol.layer.Tile({
            'title': 'Waze (World)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });
var format_PERIMETRE_GA_2 = new ol.format.GeoJSON();
var features_PERIMETRE_GA_2 = format_PERIMETRE_GA_2.readFeatures(json_PERIMETRE_GA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERIMETRE_GA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERIMETRE_GA_2.addFeatures(features_PERIMETRE_GA_2);
var lyr_PERIMETRE_GA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERIMETRE_GA_2, 
                style: style_PERIMETRE_GA_2,
                popuplayertitle: "PERIMETRE_GA",
                interactive: false,
                title: '<img src="styles/legend/PERIMETRE_GA_2.png" /> PERIMETRE_GA'
            });
var format_COMMUNE_GA_3 = new ol.format.GeoJSON();
var features_COMMUNE_GA_3 = format_COMMUNE_GA_3.readFeatures(json_COMMUNE_GA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMMUNE_GA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMMUNE_GA_3.addFeatures(features_COMMUNE_GA_3);
var lyr_COMMUNE_GA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMMUNE_GA_3, 
                style: style_COMMUNE_GA_3,
                popuplayertitle: "COMMUNE_GA",
                interactive: false,
                title: '<img src="styles/legend/COMMUNE_GA_3.png" /> COMMUNE_GA'
            });
var format_SURFACE_EAU_GA_4 = new ol.format.GeoJSON();
var features_SURFACE_EAU_GA_4 = format_SURFACE_EAU_GA_4.readFeatures(json_SURFACE_EAU_GA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SURFACE_EAU_GA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SURFACE_EAU_GA_4.addFeatures(features_SURFACE_EAU_GA_4);
var lyr_SURFACE_EAU_GA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SURFACE_EAU_GA_4, 
                style: style_SURFACE_EAU_GA_4,
                popuplayertitle: "SURFACE_EAU_GA",
                interactive: false,
                title: '<img src="styles/legend/SURFACE_EAU_GA_4.png" /> SURFACE_EAU_GA'
            });
var group_Territoire = new ol.layer.Group({
                                layers: [lyr_PERIMETRE_GA_2,lyr_COMMUNE_GA_3,lyr_SURFACE_EAU_GA_4,],
                                fold: "open",
                                title: "Territoire"});

lyr_Liste_Sites_AV_0.setVisible(true);lyr_WazeWorld_1.setVisible(true);lyr_PERIMETRE_GA_2.setVisible(true);lyr_COMMUNE_GA_3.setVisible(true);lyr_SURFACE_EAU_GA_4.setVisible(false);
var layersList = [lyr_Liste_Sites_AV_0,lyr_WazeWorld_1,group_Territoire];
lyr_Liste_Sites_AV_0.set('fieldAliases', {'Site': 'Site', 'Lat': 'Lat', 'Long': 'Long', 'OM': 'OM', 'CS': 'CS', 'V': 'V', });
lyr_PERIMETRE_GA_2.set('fieldAliases', {'ID': 'ID', 'PREC_PLANI': 'PREC_PLANI', 'NOM': 'NOM', 'CODE_INSEE': 'CODE_INSEE', 'STATUT': 'STATUT', 'CANTON': 'CANTON', 'ARRONDISST': 'ARRONDISST', 'DEPART': 'DEPART', 'REGION': 'REGION', 'POPUL': 'POPUL', 'MULTICAN': 'MULTICAN', });
lyr_COMMUNE_GA_3.set('fieldAliases', {'ID': 'ID', 'PREC_PLANI': 'PREC_PLANI', 'NOM': 'NOM', 'CODE_INSEE': 'CODE_INSEE', 'STATUT': 'STATUT', 'CANTON': 'CANTON', 'ARRONDISST': 'ARRONDISST', 'DEPART': 'DEPART', 'REGION': 'REGION', 'POPUL': 'POPUL', 'MULTICAN': 'MULTICAN', });
lyr_SURFACE_EAU_GA_4.set('fieldAliases', {'ID': 'ID', 'PREC_PLANI': 'PREC_PLANI', 'PREC_ALTI': 'PREC_ALTI', 'NATURE': 'NATURE', 'REGIME': 'REGIME', 'Z_MOYEN': 'Z_MOYEN', });
lyr_Liste_Sites_AV_0.set('fieldImages', {'Site': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'OM': 'CheckBox', 'CS': 'CheckBox', 'V': 'CheckBox', });
lyr_PERIMETRE_GA_2.set('fieldImages', {'ID': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'NOM': 'TextEdit', 'CODE_INSEE': 'TextEdit', 'STATUT': 'TextEdit', 'CANTON': 'TextEdit', 'ARRONDISST': 'TextEdit', 'DEPART': 'TextEdit', 'REGION': 'TextEdit', 'POPUL': 'Range', 'MULTICAN': 'TextEdit', });
lyr_COMMUNE_GA_3.set('fieldImages', {'ID': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'NOM': 'TextEdit', 'CODE_INSEE': 'TextEdit', 'STATUT': 'TextEdit', 'CANTON': 'TextEdit', 'ARRONDISST': 'TextEdit', 'DEPART': 'TextEdit', 'REGION': 'TextEdit', 'POPUL': 'Range', 'MULTICAN': 'TextEdit', });
lyr_SURFACE_EAU_GA_4.set('fieldImages', {'ID': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'NATURE': 'TextEdit', 'REGIME': 'TextEdit', 'Z_MOYEN': 'TextEdit', });
lyr_Liste_Sites_AV_0.set('fieldLabels', {'Site': 'no label', 'Lat': 'no label', 'Long': 'no label', 'OM': 'no label', 'CS': 'no label', 'V': 'no label', });
lyr_PERIMETRE_GA_2.set('fieldLabels', {'ID': 'no label', 'PREC_PLANI': 'no label', 'NOM': 'no label', 'CODE_INSEE': 'no label', 'STATUT': 'no label', 'CANTON': 'no label', 'ARRONDISST': 'no label', 'DEPART': 'no label', 'REGION': 'no label', 'POPUL': 'no label', 'MULTICAN': 'no label', });
lyr_COMMUNE_GA_3.set('fieldLabels', {'ID': 'no label', 'PREC_PLANI': 'no label', 'NOM': 'no label', 'CODE_INSEE': 'no label', 'STATUT': 'no label', 'CANTON': 'no label', 'ARRONDISST': 'no label', 'DEPART': 'no label', 'REGION': 'no label', 'POPUL': 'no label', 'MULTICAN': 'no label', });
lyr_SURFACE_EAU_GA_4.set('fieldLabels', {'ID': 'no label', 'PREC_PLANI': 'no label', 'PREC_ALTI': 'no label', 'NATURE': 'no label', 'REGIME': 'no label', 'Z_MOYEN': 'no label', });
lyr_SURFACE_EAU_GA_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});