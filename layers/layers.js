ol.proj.proj4.register(proj4);
//ol.proj.get("IGNF:LAMB93").setExtent([897399.367313, 6514817.354849, 996099.205578, 6562937.275997]);
var wms_layers = [];


        var lyr_Satellite_0 = new ol.layer.Tile({
            'title': 'Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://openstreetmap.fr/bdortho">BDOrtho IGN</a>',
                url: 'https://proxy-ign.openstreetmap.fr/94GjiyqD/bdortho/{z}/{x}/{y}.jpg'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:2.8004466152261966,

            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRI_2 = new ol.layer.Tile({
            'title': 'ESRI',
            //'type': 'base',
            'opacity': 1.000000,
            
            minResolution:2.8004466152261966,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Communes_3 = new ol.format.GeoJSON();
var features_Communes_3 = format_Communes_3.readFeatures(json_Communes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:LAMB93'});
var jsonSource_Communes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_3.addFeatures(features_Communes_3);
var lyr_Communes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communes_3, 
                style: style_Communes_3,
                popuplayertitle: "Communes",
                interactive: false,
                title: '<img src="styles/legend/Communes_3.png" /> Communes'
            });
var format_GrandAnnecy_4 = new ol.format.GeoJSON();
var features_GrandAnnecy_4 = format_GrandAnnecy_4.readFeatures(json_GrandAnnecy_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:LAMB93'});
var jsonSource_GrandAnnecy_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GrandAnnecy_4.addFeatures(features_GrandAnnecy_4);
var lyr_GrandAnnecy_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GrandAnnecy_4, 
                style: style_GrandAnnecy_4,
                popuplayertitle: "Grand Annecy",
                interactive: false,
                title: '<img src="styles/legend/GrandAnnecy_4.png" /> Grand Annecy'
            });
var format_Projetsdepuis2023_5 = new ol.format.GeoJSON();
var features_Projetsdepuis2023_5 = format_Projetsdepuis2023_5.readFeatures(json_Projetsdepuis2023_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:LAMB93'});
var jsonSource_Projetsdepuis2023_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Projetsdepuis2023_5.addFeatures(features_Projetsdepuis2023_5);
var lyr_Projetsdepuis2023_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Projetsdepuis2023_5, 
                style: style_Projetsdepuis2023_5,
                popuplayertitle: "Projets depuis 2023",
                interactive: true,
    title: 'Projets depuis 2023<br />\
    <img src="styles/legend/Projetsdepuis2023_5_0.png" /> Nouveau<br />\
    <img src="styles/legend/Projetsdepuis2023_5_1.png" /> En cours d\'étude<br />\
    <img src="styles/legend/Projetsdepuis2023_5_2.png" /> Projet validé<br />\
    <img src="styles/legend/Projetsdepuis2023_5_3.png" /> Matériel commandé<br />\
    <img src="styles/legend/Projetsdepuis2023_5_4.png" /> Travaux programmés<br />\
    <img src="styles/legend/Projetsdepuis2023_5_5.png" /> Livraison réalisée<br />\
    <img src="styles/legend/Projetsdepuis2023_5_6.png" /> Terminé<br />\
    <img src="styles/legend/Projetsdepuis2023_5_7.png" /> Annulé<br />'
        });
var group_ViuzlaChisaz = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Viuz-la-Chiésaz"});
var group_Territoire = new ol.layer.Group({
                                layers: [lyr_Communes_3,lyr_GrandAnnecy_4,],
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
var group_Fonds = new ol.layer.Group({
                                layers: [lyr_Satellite_0,lyr_OpenStreetMap_1,lyr_ESRI_2,],
                                fold: "open",
                                title: "Fonds"});

lyr_Satellite_0.setVisible(false);lyr_OpenStreetMap_1.setVisible(true);lyr_ESRI_2.setVisible(true);lyr_Communes_3.setVisible(true);lyr_GrandAnnecy_4.setVisible(true);lyr_Projetsdepuis2023_5.setVisible(true);
var layersList = [group_Fonds,group_Territoire,lyr_Projetsdepuis2023_5];
lyr_Communes_3.set('fieldAliases', {'ID': 'ID', 'PREC_PLANI': 'PREC_PLANI', 'NOM': 'NOM', 'CODE_INSEE': 'CODE_INSEE', 'STATUT': 'STATUT', 'CANTON': 'CANTON', 'ARRONDISST': 'ARRONDISST', 'DEPART': 'DEPART', 'REGION': 'REGION', 'POPUL': 'POPUL', 'MULTICAN': 'MULTICAN', });
lyr_GrandAnnecy_4.set('fieldAliases', {'ID': 'ID', 'PREC_PLANI': 'PREC_PLANI', 'NOM': 'NOM', 'CODE_INSEE': 'CODE_INSEE', 'STATUT': 'STATUT', 'CANTON': 'CANTON', 'ARRONDISST': 'ARRONDISST', 'DEPART': 'DEPART', 'REGION': 'REGION', 'POPUL': 'POPUL', 'MULTICAN': 'MULTICAN', });
lyr_Projetsdepuis2023_5.set('fieldAliases', {'Site': 'Site', 'Commune': 'Commune', 'Secteur': 'Secteur', 'Lat': 'Lat', 'Long': 'Long', 'Statut': 'Statut', 'Soutien Bureau d\'étude': 'Soutien Bureau d\'étude', 'Type de conteneurs': 'Type de conteneurs', 'Nb OM': 'Nb OM', 'Nb MM': 'Nb MM', 'Nb V': 'Nb V', 'Nb CAR': 'Nb CAR', 'Nb Tot': 'Nb Tot', });
lyr_Communes_3.set('fieldImages', {'ID': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'NOM': 'TextEdit', 'CODE_INSEE': 'TextEdit', 'STATUT': 'TextEdit', 'CANTON': 'TextEdit', 'ARRONDISST': 'TextEdit', 'DEPART': 'TextEdit', 'REGION': 'TextEdit', 'POPUL': 'Range', 'MULTICAN': 'TextEdit', });
lyr_GrandAnnecy_4.set('fieldImages', {'ID': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'NOM': 'TextEdit', 'CODE_INSEE': 'TextEdit', 'STATUT': 'TextEdit', 'CANTON': 'TextEdit', 'ARRONDISST': 'TextEdit', 'DEPART': 'TextEdit', 'REGION': 'TextEdit', 'POPUL': 'Range', 'MULTICAN': 'TextEdit', });
lyr_Projetsdepuis2023_5.set('fieldImages', {'Site': 'TextEdit', 'Commune': 'TextEdit', 'Secteur': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Statut': 'TextEdit', 'Soutien Bureau d\'étude': 'TextEdit', 'Type de conteneurs': 'TextEdit', 'Nb OM': 'Range', 'Nb MM': 'Range', 'Nb V': 'Range', 'Nb CAR': 'Range', 'Nb Tot': 'Range', });
lyr_Communes_3.set('fieldLabels', {'ID': 'hidden field', 'PREC_PLANI': 'header label - visible with data', 'NOM': 'header label - visible with data', 'CODE_INSEE': 'hidden field', 'STATUT': 'hidden field', 'CANTON': 'hidden field', 'ARRONDISST': 'hidden field', 'DEPART': 'hidden field', 'REGION': 'hidden field', 'POPUL': 'hidden field', 'MULTICAN': 'hidden field', });
lyr_GrandAnnecy_4.set('fieldLabels', {'ID': 'header label - visible with data', 'PREC_PLANI': 'header label - visible with data', 'NOM': 'header label - visible with data', 'CODE_INSEE': 'hidden field', 'STATUT': 'hidden field', 'CANTON': 'hidden field', 'ARRONDISST': 'hidden field', 'DEPART': 'hidden field', 'REGION': 'hidden field', 'POPUL': 'hidden field', 'MULTICAN': 'header label - visible with data', });
lyr_Projetsdepuis2023_5.set('fieldLabels', {'Site': 'header label - always visible', 'Commune': 'hidden field', 'Secteur': 'header label - always visible', 'Lat': 'hidden field', 'Long': 'hidden field', 'Statut': 'header label - always visible', 'Soutien Bureau d\'étude': 'hidden field', 'Type de conteneurs': 'header label - always visible', 'Nb OM': 'inline label - visible with data', 'Nb MM': 'inline label - visible with data', 'Nb V': 'inline label - visible with data', 'Nb CAR': 'inline label - visible with data', 'Nb Tot': 'inline label - visible with data', });
lyr_Projetsdepuis2023_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});