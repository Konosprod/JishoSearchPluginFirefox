chrome.contextMenus.create({
    id: "jisho-search",
    title: "Search on Jisho",
    contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
    if(info.menuItemId == "jisho-search") {
        searchJisho(info.selectionText);
    }
});

function searchJisho(data) {
    browser.tabs.create({url:'http://jisho.org/search/'+data});
}
