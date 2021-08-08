
var cardBlock = document.getElementById('card');
var alert = document.getElementById('alert');
var enterInput = document.getElementById('enter-input');

function addNew() {
	var createNewItem = document.createElement('li');
	var input = document.getElementById('enter-input');

  function createNewElement() {
		if (enterInput.value != null && enterInput.value.length == 0) {
			alert.setAttribute('style', 'display: block;');
			setTimeout(deleteAlert, 3000);
		}
		else {
			createNewItem.classList.add('item-class');
			createNewItem.innerHTML = 
			`<p>` +input.value+ `</p>`;
			cardBlock.appendChild(createNewItem);
	
			var createDoneBtn = document.createElement('button');
			createDoneBtn.classList.add('done-btn')
			createNewItem.appendChild(createDoneBtn);
			createDoneBtn.addEventListener('click', function() {
				createDoneBtn.parentElement.classList.toggle('mark-done');
				howMuchItems();
			})
	
			var createDeleteBtn = document.createElement('button');
			createDeleteBtn.classList.add('delete-btn')
			createNewItem.appendChild(createDeleteBtn);
			createDeleteBtn.addEventListener('click', function() {
				createDeleteBtn.parentElement.remove();
				howMuchItems();
			})
			howMuchItems();
		}
  };

	createNewElement();
	input.value = '';
};


// Подсчет количества карточек
function howMuchItems() {
	var countDoneItems = $('#card .mark-done').length;
	var countAllItems = $('#card li').length;
	
	$('#how-much-Done').html(countDoneItems);
	$('#how-much-All').html(countAllItems);
}


// Удалить все карточки
$("#deleteAll").click(function() {
	$('#card li').remove();
	howMuchItems();
})


// Пометить все
$("#checkAll").click(function() {
	$('#card li').addClass('mark-done');
	$(this).hide();
	$('#unCheckAll').show();
	howMuchItems();
})

$("#unCheckAll").click(function() {
	$('#card li').removeClass('mark-done');
	$('#checkAll').show();
	$(this).hide();
	howMuchItems();
})


// Сортировка
$(".sort").change(function () {
	if( $("option#All:selected").length )
	{
		console.log('all');
		$('#card li').show();
	};
	if( $("option#Completed:selected").length )
	{
		console.log('Completed');
		$('#card li').hide();
		$('#card .mark-done').show();
	};
	if( $("option#Active:selected").length )
	{
		console.log('Active');
		$('#card li').show();
		$('#card .mark-done').hide();
	};
});


// Удалить Алерт
function deleteAlert() {
	alert.setAttribute('style', 'display: none;');
};