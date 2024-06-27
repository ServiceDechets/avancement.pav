var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_PERIMETRE_GA_1 = new ol.format.GeoJSON();
var features_PERIMETRE_GA_1 = format_PERIMETRE_GA_1.readFeatures(json_PERIMETRE_GA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERIMETRE_GA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERIMETRE_GA_1.addFeatures(features_PERIMETRE_GA_1);
var lyr_PERIMETRE_GA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERIMETRE_GA_1, 
                style: style_PERIMETRE_GA_1,
                popuplayertitle: "PERIMETRE_GA",
                interactive: false,
                title: '<img src="styles/legend/PERIMETRE_GA_1.png" /> PERIMETRE_GA'
            });
var format_COMMUNE_GA_2 = new ol.format.GeoJSON();
var features_COMMUNE_GA_2 = format_COMMUNE_GA_2.readFeatures(json_COMMUNE_GA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMMUNE_GA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMMUNE_GA_2.addFeatures(features_COMMUNE_GA_2);
var lyr_COMMUNE_GA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMMUNE_GA_2, 
                style: style_COMMUNE_GA_2,
                popuplayertitle: "COMMUNE_GA",
                interactive: false,
                title: '<img src="styles/legend/COMMUNE_GA_2.png" /> COMMUNE_GA'
            });
var format_Projetdeconteneurisation_3 = new ol.format.GeoJSON();
var features_Projetdeconteneurisation_3 = format_Projetdeconteneurisation_3.readFeatures(json_Projetdeconteneurisation_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Projetdeconteneurisation_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Projetdeconteneurisation_3.addFeatures(features_Projetdeconteneurisation_3);
var lyr_Projetdeconteneurisation_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Projetdeconteneurisation_3, 
                style: style_Projetdeconteneurisation_3,
                popuplayertitle: "Projet de conteneurisation",
                interactive: true,
    title: 'Projet de conteneurisation<br />\
    <img src="styles/legend/Projetdeconteneurisation_3_0.png" /> Nouveau<br />\
    <img src="styles/legend/Projetdeconteneurisation_3_1.png" /> Validé<br />\
    <img src="styles/legend/Projetdeconteneurisation_3_2.png" /> Date programmée<br />\
    <img src="styles/legend/Projetdeconteneurisation_3_3.png" /> Matériel commandé<br />\
    <img src="styles/legend/Projetdeconteneurisation_3_4.png" /> Travaux finalisés<br />\
    <img src="styles/legend/Projetdeconteneurisation_3_5.png" /> Livraison réalisée<br />\
    <img src="styles/legend/Projetdeconteneurisation_3_6.png" /> Annulé<br />'
        });
var group_ViuzlaChisaz = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Viuz-la-Chiésaz"});
var group_DonnesIGN = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Données IGN"});
var group_Territoire = new ol.layer.Group({
                                layers: [lyr_PERIMETRE_GA_1,lyr_COMMUNE_GA_2,],
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

lyr_ESRIGraylight_0.setVisible(true);lyr_PERIMETRE_GA_1.setVisible(true);lyr_COMMUNE_GA_2.setVisible(true);lyr_Projetdeconteneurisation_3.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,group_Territoire,lyr_Projetdeconteneurisation_3];
lyr_PERIMETRE_GA_1.set('fieldAliases', {'ID': 'ID', 'PREC_PLANI': 'PREC_PLANI', 'NOM': 'NOM', 'CODE_INSEE': 'CODE_INSEE', 'STATUT': 'STATUT', 'CANTON': 'CANTON', 'ARRONDISST': 'ARRONDISST', 'DEPART': 'DEPART', 'REGION': 'REGION', 'POPUL': 'POPUL', 'MULTICAN': 'MULTICAN', });
lyr_COMMUNE_GA_2.set('fieldAliases', {'ID': 'ID', 'PREC_PLANI': 'PREC_PLANI', 'NOM': 'NOM', 'CODE_INSEE': 'CODE_INSEE', 'STATUT': 'STATUT', 'CANTON': 'CANTON', 'ARRONDISST': 'ARRONDISST', 'DEPART': 'DEPART', 'REGION': 'REGION', 'POPUL': 'POPUL', 'MULTICAN': 'MULTICAN', });
lyr_Projetdeconteneurisation_3.set('fieldAliases', {'Site': 'Site', 'Commune': 'Commune', 'Maitrise d\'Ouvrage': 'Maitrise d\'Ouvrage', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Statut': 'Statut', 'Soutien Bureau d\'étude': 'Soutien Bureau d\'étude', 'Type de conteneurs': 'Type de conteneurs', 'Nb OM': 'Nb OM', 'Nb MM': 'Nb MM', 'Nb V': 'Nb V', });
lyr_PERIMETRE_GA_1.set('fieldImages', {'ID': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'NOM': 'TextEdit', 'CODE_INSEE': 'TextEdit', 'STATUT': 'TextEdit', 'CANTON': 'TextEdit', 'ARRONDISST': 'TextEdit', 'DEPART': 'TextEdit', 'REGION': 'TextEdit', 'POPUL': 'Range', 'MULTICAN': 'TextEdit', });
lyr_COMMUNE_GA_2.set('fieldImages', {'ID': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'NOM': 'TextEdit', 'CODE_INSEE': 'TextEdit', 'STATUT': 'TextEdit', 'CANTON': 'TextEdit', 'ARRONDISST': 'TextEdit', 'DEPART': 'TextEdit', 'REGION': 'TextEdit', 'POPUL': 'Range', 'MULTICAN': 'TextEdit', });
lyr_Projetdeconteneurisation_3.set('fieldImages', {'Site': 'TextEdit', 'Commune': 'TextEdit', 'Maitrise d\'Ouvrage': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Statut': 'TextEdit', 'Soutien Bureau d\'étude': 'TextEdit', 'Type de conteneurs': 'TextEdit', 'Nb OM': 'Range', 'Nb MM': 'Range', 'Nb V': 'Range', });
lyr_PERIMETRE_GA_1.set('fieldLabels', {'ID': 'hidden field', 'PREC_PLANI': 'header label - visible with data', 'NOM': 'hidden field', 'CODE_INSEE': 'hidden field', 'STATUT': 'hidden field', 'CANTON': 'hidden field', 'ARRONDISST': 'hidden field', 'DEPART': 'hidden field', 'REGION': 'hidden field', 'POPUL': 'hidden field', 'MULTICAN': 'hidden field', });
lyr_COMMUNE_GA_2.set('fieldLabels', {'ID': 'hidden field', 'PREC_PLANI': 'hidden field', 'NOM': 'hidden field', 'CODE_INSEE': 'hidden field', 'STATUT': 'hidden field', 'CANTON': 'hidden field', 'ARRONDISST': 'hidden field', 'DEPART': 'hidden field', 'REGION': 'hidden field', 'POPUL': 'hidden field', 'MULTICAN': 'hidden field', });
lyr_Projetdeconteneurisation_3.set('fieldLabels', {'Site': 'header label - always visible', 'Commune': 'hidden field', 'Maitrise d\'Ouvrage': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Statut': 'header label - always visible', 'Soutien Bureau d\'étude': 'header label - always visible', 'Type de conteneurs': 'header label - always visible', 'Nb OM': 'inline label - always visible', 'Nb MM': 'inline label - always visible', 'Nb V': 'inline label - always visible', });
lyr_Projetdeconteneurisation_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});