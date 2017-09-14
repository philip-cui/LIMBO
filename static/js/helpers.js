/**
 * Helpers
 * Require: jQuery
 */


function renderTemplate(templateId, context) {
    var template = Handlebars.compile($(templateId).html());
    return template(context);
}


function cleanTags(tags) {
    if (typeof tags === 'string' && tags.length > 0) {
        tags = tags.split(/[\s,]+/);
        for (var i in tags) {
            tags[i] = tags[i].trim();
        }
    } else {
        return [];
    }
    return tags;
}

function getImageData(imageId) {
    var apiUrl = '/api/v1/image/'+imageId+'/?format=json';
    return $.get(apiUrl);
}


function getPinData(pinId) {
    var apiUrl = '/api/v1/pin/'+pinId+'/?format=json';
    return $.get(apiUrl);
}


function deletePinData(pinId) {
    var apiUrl = '/api/v1/pin/'+pinId+'/?format=json';
    return $.ajax(apiUrl, {
        type: 'DELETE'
    });
}

function postPinData(data) {
    return $.ajax({
        type: "post",
        url: "/api/v1/pin/",
        contentType: 'application/json',
        data: JSON.stringify(data)
    });
}

function getUrlParameter(name) {
    var decode = decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
    );
    if (decode == 'null') return null;
    else return decode;
}
// 
// 
// from here
function youtubePictureParser(youtubePic_match) {
    var match = youtubePic_match.split('/')[0];
    if (match&&match[1].length==11){
        return match[1];
    }
    else return;
}

function youtubeParser(youtubeUrl) {
    var regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    var match = youtubeUrl.match(regExp);
    if (match&&match[1].length==11){
        return match[1];
    }
    else return;
}
// ends
// 

