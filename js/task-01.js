"use strict"

const ItemsByCategories = document.querySelectorAll('#categories > li');

console.log(`Number of categories: ${ItemsByCategories.length}`)

const elementsOfItemsByCategories = ItemsByCategories.forEach((elem) => {
    console.log(`Category: ${elem.querySelector('h2').textContent}\nElements: ${elem.querySelector('ul').childElementCount}`)
            })