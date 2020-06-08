let form = document.getElementById('addForm')
let itemList = document.getElementById('items')
let filter = document.getElementById('filter')

filter.addEventListener('keyup', filterItems)

form.addEventListener('submit', addItem)

itemList.addEventListener('click', removeItem)

function addItem(e) {
  e.preventDefault()

  let newItem = document.getElementById('item').value
  let li = document.createElement('li')
  li.className = 'list-group-item'
  li.innerText = newItem

  let button = document.createElement('button')
  button.innerText = 'X'
  button.className = 'btn btn-danger btn-sm float-right delete'

  li.appendChild(button)
  itemList.appendChild(li)
}

function removeItem(e) {
  if(e.target.classList.contains('delete')) {
    if(confirm('Are you sure?')) {
      let li = e.target.parentElement
      itemList.removeChild(li)
    }
  }
}

function filterItems(e) {
  let text = e.target.value.toLowerCase()
  let items = itemList.getElementsByTagName('li')
  Array.from(items).forEach(function(item) {
    let itemText = item.textContent.toLowerCase()
    console.log(itemText)
    if(!itemText.indexOf(text) || text == undefined) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none'
    }
  })
}
