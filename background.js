function init() {
    //load strage data from localStrage
    try {
        //start eventlisteners
        assignEventHandlers();
    } catch (e) {
	console.error('init', e);
    }
}

//assign eventhandlers
function assignEventHandlers() {
    chrome.commands.onCommand.addListener(function(command) {
	if (command == 'shortcut') {
            //jump to the middle tab
            chrome.windows.getCurrent({populate: true}, function(win){
                var mid = win.tabs.length >> 1;
                chrome.tabs.highlight({windowId: win.id, tabs: win.tabs[mid].index}, function(){});
            })
	}
    });
}

init();
