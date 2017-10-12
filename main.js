document.querySelector("#reset-field button").addEventListener('click',function(){
  // TASK #1
  var input = document.querySelector("input");
  input.value = '';
})


document.querySelector("#validate-field button").addEventListener('click',function(){
  // TASK #2
  var input = document.querySelector("#validate-field input");
  if (input.value.length < 6) {
    var text = 'Input not long enought';
    var clas = 'invalid';
  } else {
    var text = 'Field Valid';
    var clas = 'valid';
  }
  var msg = document.querySelector("#validate-field .flash-message");
  msg.textContent = text;
  msg.className = 'flash-message ' + clas;
})


document.querySelector("#calculate-items button").addEventListener('click',function(){
  // TASK #3
  var sum = 0;
  var items = document.querySelectorAll(".cars-list input");
  for(var i = 0; i < items.length; i++) {
    if (items[i].checked) {
      sum += parseInt(items[i].value);
    }
  }
  document.querySelector("#calculate-items .sum-total").textContent = sum;
})


document.querySelector("#select-to-show-more button").addEventListener('click',function(){
  // TASK #4
  var selec = document.querySelector("#select-to-show-more select");
  var selected = selec[selec.selectedIndex];
  var node = document.querySelector("#select-to-show-more .model");
  node.textContent = selected.value;
  var data = selected.dataset;
  for (field in data) {
    if (field === 'img') {
      var node = document.querySelector("#select-to-show-more .img-box");
      node.innerHTML = '';
      var img = document.createElement("img");
      img.src = './images/' + data[field];
      node.appendChild(img);
    } else {
      var node = document.querySelector("#select-to-show-more ." + field);
      node.textContent = data[field];
    }
  }
})

document.querySelector("#add-guest input").addEventListener('keypress',function(e){
  if (e.keyCode === 13) {
    var ul = document.querySelector("#add-guest ul");
    var li = document.createElement("li");
    li.textContent =  this.value;
    li.className = 'guest';
    ul.appendChild(li);
    this.value = '';
  }
})

function removeItem(){
  this.parentNode.remove();
}

document.querySelector("#add-item-bonus input").addEventListener('keypress',function(e){
  if (e.keyCode === 13) {
    var ul = document.querySelector("#add-item-bonus ul");
    var li = document.createElement("li");
    var btn = document.createElement("BUTTON");
    btn.type = 'button';
    btn.className = 'remove';
    btn.textContent =  'X';
    btn.onclick = removeItem;
    li.textContent = this.value;
    li.appendChild(btn);
    li.className = 'item';
    ul.appendChild(li);
    this.value = '';
  }
})
