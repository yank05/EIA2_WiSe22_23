var ShoppingList_04;
(function (ShoppingList_04) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let addButton = document.querySelector("button#add");
        addButton.addEventListener("click", itemAdd);
        let checkBought = document.querySelector("input#bought");
        checkBought.addEventListener("change", itemBought);
        let editButton = document.querySelector("button#edit");
        editButton.addEventListener("click", editItem);
        let deleteButton = document.querySelector("button#delete");
        deleteButton.addEventListener("click", deleteItem);
    }
    function itemAdd() {
        console.log("Item hinzugefügt");
    }
    function itemBought() {
        console.log(ShoppingList_04.data);
    }
    function editItem() {
        console.log("Item editieren");
    }
    function deleteItem() {
        console.log("Item löschen");
    }
})(ShoppingList_04 || (ShoppingList_04 = {}));
//# sourceMappingURL=ShoppingList.js.map