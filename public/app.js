$(document).ready(function () {
  // Primero llamamos a toda la data
  $.getJSON('api/todos')
    /*  .then(function(data){
         console.log(data);
     }) */
    .then(addTodos)
  // Ahora obtenemos los datos que enviaremos al servidor
  $('#todoInput').on('keypress',function(event){
    if(event.which == 13){
      createTodo();
    }
  })

//Actualizar todo
$('.list').on('click', 'li', function(){
 console.log($(this));
  updateTodo($(this)); 
}); 


// Remover todo
 $('.list').on('click', 'span', function(e){
    e.stopPropagation();
    removeTodo($(this).parent());
 }) 

})

// Recorrido de la data
function addTodos(todos) {
  todos.forEach(function(todo){
    addTodo(todo);
  })
}

// Function addTodos
function addTodo(item){
  var newTodo = $('<li class="task">'+item.name+'<span>X</span></li>')
    newTodo.data('id',item._id);
    newTodo.data('completed',item.completed);
     if(item.completed){
       newTodo.addClass("done");
     }
     $('.list').append(newTodo);
}


function createTodo(){
  // enviamos el request para crear un nuevo Todo
  var userInput = $('#todoInput').val();
  $.post('/api/todos', {name : userInput})
   .then(function(newTodo){
     console.log(newTodo);
     addTodo(newTodo);
     $('#todoInput').val('');
   })
   .catch(function(err){
     console.log(err);
   })
}

function removeTodo(item){
  console.log('me diste click');
  var clickedId = item.data('id');
  var deleteUrl = '/api/todos/' + clickedId; 
  //Si lo remuevo solo del DOM
  //$(this).parent().remove();
 $.ajax ({
   method: 'DELETE',
   url : deleteUrl
 })
 .then(function(data){
   console.log(data); 
   item.remove();  
 })
 .catch(function(err){
   console.log(err);
 })
}

function updateTodo(item){
 //console.log(item.data('completed'));
  var updateUrl = '/api/todos/' + item.data('id'); 
  var isDone = !item.data('completed');
  var updateData = {completed:isDone};
  console.log(updateData);
 $.ajax({
   method:'PUT',
   url: updateUrl,
   data : updateData
 })
  .then(function(updateTodo){
    console.log(updateTodo);
    item.toggleClass('done');
    item.data('completed',isDone);
  })

}