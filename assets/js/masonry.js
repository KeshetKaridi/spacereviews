function resizeGridItem(item){
   grid = document.getElementsByClassName("grid")[0];
   rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
   rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('row-gap'));
   rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
   item.style.gridRowEnd = "span "+rowSpan;
}

function resizeAllGridItems(){
   var width = window.innerWidth
   if (width <= 500) return
   allItems = document.getElementsByClassName("item");
   for(x=0;x<allItems.length;x++){
      resizeGridItem(allItems[x]);
   }
}

window.addEventListener('load', resizeAllGridItems);

window.addEventListener("resize", resizeAllGridItems);

allItems = document.getElementsByClassName("item");
for(x=0;x<allItems.length;x++){
   imagesLoaded( allItems[x], resizeInstance);
}

function resizeInstance(instance){
   item = instance.elements[0];
   resizeGridItem(item);
}