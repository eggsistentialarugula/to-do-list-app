//adding new item to the list of items
function newItem(){
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if(inputValue === ''){
        alert('You must write something!');
    } else{
        let list = $('#list');
        list.append(li);
    }

    //cross out an item from the list of items
    function crossOut(){
        li.toggleClass('strike');
    }

    li.on("dblclick", function crossout(){
        li.toggleClass('strike');
    });

    //adding delete button

    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on("click", deleteListItem);
    function deleteListItem(){
        li.addClass('delete');
    }

    //reorder items
    $('#list').sortable();

}