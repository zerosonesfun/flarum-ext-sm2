var observer=new MutationObserver(function(e){for(var o=0;o<e.length;o++)for(var r=0;r<e[o].addedNodes.length;r++)checkNode(e[o].addedNodes[r])});observer.observe(document.documentElement,{childList:!0,subtree:!0}),checkNode=function(e){1===e.nodeType&&e.matches(".PostStream")&&soundManager.reboot()};
