const parent = document.querySelector('.parent')
console.log(parent)

console.log(parent.children) // give the children of parent class

const child = parent.children

for(let i =0 ; i < child.length ; i++ ){
    console.log(child[i].innerHTML)
}

console.log(parent.firstElementChild.innerHTML) // firstElementChild give the first child of the parent classlist

console.log(parent.lastElementChild.innerHTML)  // lastElementChild give the last child of the parent classlist


const dayone = document.querySelector('.day')
console.log(dayone.parentElement.innerHTML)  // using parentElement give the parent of the child element

// also find the sibiling of the queryselector

console.log(dayone.nextElementSibling.innerHTML)



/////////////////////////////////////////////////////////////////////////////////////////

//**************************************************************** */ Nodelist ******************************************

console.log(parent.childNodes)  


