var ShoppingList;
(function (ShoppingList) {
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
        console.log("Item als gekauft markiert");
    }
    function editItem() {
        console.log("Item editieren");
    }
    function deleteItem() {
        console.log("Item löschen");
    }
})(ShoppingList || (ShoppingList = {}));
//# sourceMappingURL=ShoppingList.js.map