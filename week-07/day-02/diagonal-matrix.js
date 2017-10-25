'use strict';
// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array


let list = [];


function drawMatrix(variable) {

    for (let i = 0; i < variable; i++) {

        let listInList = [];
        for (let j = variable-1; j >= 0; j--){
            if (i === j){
                listInList.push("1")
            }else {
                listInList.push("0")
            }
        }
        listInList = listInList.join(" ");
        list.push(listInList);
    }
    list = list.join("\n");

    console.log(list);

}

drawMatrix(5);