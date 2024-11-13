
export function setupDragAndDrop() {
    let lists = document.getElementsByClassName("list");
    let bottomBox = document.getElementById("bottom");
    let topBox = document.getElementById("top");

    for(var i=0; i < lists.length; i++){
            lists[i].addEventListener("dragstart", function(e){
                let selected = e.target;
                let initialParent = selected.parentNode;

                bottomBox.addEventListener("dragover", function(e){
                    e.preventDefault();
                });
                bottomBox.addEventListener("drop", function(e){
                    bottomBox.appendChild(selected);
                    selected = null;
                });
                topBox.addEventListener("dragover", function(e){
                    e.preventDefault();
                });
                topBox.addEventListener("drop", function(e){
                    if(topBox.childElementCount < 3 || initialParent == topBox){
                        topBox.appendChild(selected);
                        selected = null;}
                    else{
                        selected = null;
                    }
            });
        })
    }
}

// window.addEventListener('DOMContentLoaded', setupDragAndDrop);