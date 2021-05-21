//adding new item to the list of items
function newItem(){
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);
}