var wms_layers = [];


        var lyr_FondESRI_0 = new ol.layer.Tile({
            'title': 'Fond ESRI',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Communes_1 = new ol.format.GeoJSON();
var features_Communes_1 = format_Communes_1.readFeatures(json_Communes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_1.addFeatures(features_Communes_1);
var lyr_Communes_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communes_1, 
                style: style_Communes_1,
                popuplayertitle: "Communes",
                interactive: false,
                title: '<img src="styles/legend/Communes_1.png" /> Communes'
            });
var format_GrandAnnecy_2 = new ol.format.GeoJSON();
var features_GrandAnnecy_2 = format_GrandAnnecy_2.readFeatures(json_GrandAnnecy_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GrandAnnecy_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GrandAnnecy_2.addFeatures(features_GrandAnnecy_2);
var lyr_GrandAnnecy_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GrandAnnecy_2, 
                style: style_GrandAnnecy_2,
                popuplayertitle: "Grand Annecy",
                interactive: false,
                title: '<img src="styles/legend/GrandAnnecy_2.png" /> Grand Annecy'
            });
var format_Pointdapportvolontaire_3 = new ol.format.GeoJSON();
var features_Pointdapportvolontaire_3 = format_Pointdapportvolontaire_3.readFeatures(json_Pointdapportvolontaire_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pointdapportvolontaire_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pointdapportvolontaire_3.addFeatures(features_Pointdapportvolontaire_3);
var lyr_Pointdapportvolontaire_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pointdapportvolontaire_3, 
                style: style_Pointdapportvolontaire_3,
                popuplayertitle: "Point d'apport volontaire",
                interactive: true,
    title: 'Point d\'apport volontaire<br />\
    <img src="styles/legend/Pointdapportvolontaire_3_0.png" /> Nouveau<br />\
    <img src="styles/legend/Pointdapportvolontaire_3_1.png" /> Validé<br />\
    <img src="styles/legend/Pointdapportvolontaire_3_2.png" /> Matériel commandé<br />\
    <img src="styles/legend/Pointdapportvolontaire_3_3.png" /> Date programmée<br />\
    <img src="styles/legend/Pointdapportvolontaire_3_4.png" /> Livraison réalisée<br />\
    <img src="styles/legend/Pointdapportvolontaire_3_5.png" /> Travaux finalisés<br />\
    <img src="styles/legend/Pointdapportvolontaire_3_6.png" /> Annulé<br />'
        });
var group_ViuzlaChisaz = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Viuz-la-Chiésaz"});
var group_Territoire = new ol.layer.Group({
                                layers: [lyr_Communes_1,lyr_GrandAnnecy_2,],
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

lyr_FondESRI_0.setVisible(true);lyr_Communes_1.setVisible(true);lyr_GrandAnnecy_2.setVisible(true);lyr_Pointdapportvolontaire_3.setVisible(true);
var layersList = [lyr_FondESRI_0,group_Territoire,lyr_Pointdapportvolontaire_3];
lyr_Communes_1.set('fieldAliases', {'ID': 'ID', 'PREC_PLANI': 'PREC_PLANI', 'NOM': 'NOM', 'CODE_INSEE': 'CODE_INSEE', 'STATUT': 'STATUT', 'CANTON': 'CANTON', 'ARRONDISST': 'ARRONDISST', 'DEPART': 'DEPART', 'REGION': 'REGION', 'POPUL': 'POPUL', 'MULTICAN': 'MULTICAN', });
lyr_GrandAnnecy_2.set('fieldAliases', {'ID': 'ID', 'PREC_PLANI': 'PREC_PLANI', 'NOM': 'NOM', 'CODE_INSEE': 'CODE_INSEE', 'STATUT': 'STATUT', 'CANTON': 'CANTON', 'ARRONDISST': 'ARRONDISST', 'DEPART': 'DEPART', 'REGION': 'REGION', 'POPUL': 'POPUL', 'MULTICAN': 'MULTICAN', });
lyr_Pointdapportvolontaire_3.set('fieldAliases', {'Site': 'Site', 'Commune': 'Commune', 'Maitrise d\'Ouvrage': 'Maitrise d\'Ouvrage', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Statut': 'Statut', 'Soutien Bureau d\'étude': 'Soutien Bureau d\'étude', 'Type de conteneurs': 'Type de conteneurs', 'Nb OM': 'Nb OM', 'Nb MM': 'Nb MM', 'Nb V': 'Nb V', 'Date de livarison': 'Date de livarison', });
lyr_Communes_1.set('fieldImages', {'ID': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'NOM': 'TextEdit', 'CODE_INSEE': 'TextEdit', 'STATUT': 'TextEdit', 'CANTON': 'TextEdit', 'ARRONDISST': 'TextEdit', 'DEPART': 'TextEdit', 'REGION': 'TextEdit', 'POPUL': 'Range', 'MULTICAN': 'TextEdit', });
lyr_GrandAnnecy_2.set('fieldImages', {'ID': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'NOM': 'TextEdit', 'CODE_INSEE': 'TextEdit', 'STATUT': 'TextEdit', 'CANTON': 'TextEdit', 'ARRONDISST': 'TextEdit', 'DEPART': 'TextEdit', 'REGION': 'TextEdit', 'POPUL': 'Range', 'MULTICAN': 'TextEdit', });
lyr_Pointdapportvolontaire_3.set('fieldImages', {'Site': 'TextEdit', 'Commune': 'TextEdit', 'Maitrise d\'Ouvrage': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Statut': 'TextEdit', 'Soutien Bureau d\'étude': 'TextEdit', 'Type de conteneurs': 'TextEdit', 'Nb OM': 'Range', 'Nb MM': 'Range', 'Nb V': 'Range', 'Date de livarison': 'Range', });
lyr_Communes_1.set('fieldLabels', {'ID': 'hidden field', 'PREC_PLANI': 'header label - always visible', 'NOM': 'header label - visible with data', 'CODE_INSEE': 'hidden field', 'STATUT': 'hidden field', 'CANTON': 'hidden field', 'ARRONDISST': 'hidden field', 'DEPART': 'hidden field', 'REGION': 'hidden field', 'POPUL': 'hidden field', 'MULTICAN': 'hidden field', });
lyr_GrandAnnecy_2.set('fieldLabels', {'ID': 'header label - visible with data', 'PREC_PLANI': 'header label - visible with data', 'NOM': 'hidden field', 'CODE_INSEE': 'hidden field', 'STATUT': 'hidden field', 'CANTON': 'hidden field', 'ARRONDISST': 'hidden field', 'DEPART': 'hidden field', 'REGION': 'hidden field', 'POPUL': 'hidden field', 'MULTICAN': 'hidden field', });
lyr_Pointdapportvolontaire_3.set('fieldLabels', {'Site': 'header label - always visible', 'Commune': 'hidden field', 'Maitrise d\'Ouvrage': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Statut': 'header label - always visible', 'Soutien Bureau d\'étude': 'header label - always visible', 'Type de conteneurs': 'header label - always visible', 'Nb OM': 'inline label - always visible', 'Nb MM': 'inline label - always visible', 'Nb V': 'inline label - always visible', 'Date de livarison': 'no label', });
lyr_Pointdapportvolontaire_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});