var regex = /^([A-Z]*)\w+-([1-9]*)[^-]$/;
var branchnameField = document.getElementById('branch-name');
var originalBranchname = branchnameField.value;
branchnameField.addEventListener('keyup', function() {
    checkRegex();
});
insertMyHtml();
setCorrectBranchname();
checkRegex();

function checkRegex() {
    if (regex.test(branchnameField.value)) {
        branchnameField.classList.remove("regexDoesNotMatch");
        branchnameField.classList.add("regexDoesMatch");
    } else {
        branchnameField.classList.remove("regexDoesMatch");
        branchnameField.classList.add("regexDoesNotMatch");
    }
}

function insertMyHtml() {
    $.get(chrome.extension.getURL('/insertHTML.html'), function(data) {
        $(data).appendTo('#content');
        
        // Or if you're using jQuery 1.8+:
        // $($.parseHTML(data)).appendTo('body');
    });
    $('#checkBranchnameValue').text(originalBranchname);
    $('.hover_bkgr_fricc').show();    
}

function setCorrectBranchname(){
    var branchname = getParameterByName(location.search, 'issueKey');
    branchnameField.value = branchname;
}

function getParameterByName(queryString, name) {
    // Escape special RegExp characters
    name = name.replace(/[[^$.|?*+(){}\\]/g, '\\$&');
    // Create Regular expression
    var regex = new RegExp("(?:[?&]|^)" + name + "=([^&#]*)");
    // Attempt to get a match
    var results = regex.exec(queryString);
    return decodeURIComponent(results[1].replace(/\+/g, " ")) || '';
}