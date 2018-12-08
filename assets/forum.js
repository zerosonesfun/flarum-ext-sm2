var observer = new MutationObserver(function(mutations){
  for (var i=0; i < mutations.length; i++){
    for (var j=0; j < mutations[i].addedNodes.length; j++){
      checkNode(mutations[i].addedNodes[j]);
    }
  }
});

observer.observe(document.documentElement, {
  childList: true,
  subtree: true
});

checkNode = function(addedNode) {
  if (addedNode.nodeType === 1){
    if (addedNode.matches('.PostStream')){
      soundManager.reboot();
    }
  }
}
