// Quellen: https://stackoverflow.com/questions/30607419/return-only-numbers-from-string
// https://stackoverflow.com/questions/44321326/property-value-does-not-exist-on-type-eventtarget-in-typescript
// In Zusammenarbeit mit Jonas Atzenhofer und Robert Schindler
var ShoppingList_04;
(function (ShoppingList_04) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let addButton = document.querySelector("button#add");
        addButton.addEventListener("click", itemAdd);
        let checkBought = document.querySelector("input#bought1");
        checkBought.addEventListener("change", itemBought);
        let editButton = document.querySelector("button#edit1");
        editButton.addEventListener("click", editItem);
        let deleteButton = document.querySelector("button#delete1");
        deleteButton.addEventListener("click", deleteItem);
    }
    function itemAdd() {
        let formData = new FormData(document.querySelector("form"));
        let newItem = formData.get("newItem");
        let amount = formData.get("amount");
        let comment = formData.get("comment");
        let bought = false;
        let date = "30.02.2222";
        let itemNumber = 0;
        itemNumber++;
        let list = document.getElementById("list");
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "lister");
        let newInput = document.createElement("input");
        newDiv.appendChild(newInput);
        newInput.setAttribute("class", "bought");
        newInput.setAttribute("id", "bought" + itemNumber);
        newInput.setAttribute("type", "checkbox");
        let divItemData = document.createElement("div");
        newDiv.appendChild(divItemData);
        divItemData.setAttribute("class", "ItemData");
        divItemData.setAttribute("id", "ItemData" + itemNumber);
        let newItemField = document.createElement("p");
        divItemData.appendChild(newItemField);
        newItemField.setAttribute("class", "ItemDataFont");
        newItemField.innerHTML = newItem;
        let amountField = document.createElement("p");
        divItemData.appendChild(amountField);
        amountField.setAttribute("class", "ItemDataFont");
        amountField.innerHTML = amount;
        let commentField = document.createElement("p");
        divItemData.appendChild(commentField);
        commentField.setAttribute("class", "ItemDataFont");
        commentField.innerHTML = comment;
        let dateField = document.createElement("p");
        divItemData.appendChild(dateField);
        dateField.setAttribute("class", "ItemDataFont");
        dateField.innerHTML = date;
        let editButton = document.createElement("button");
        newDiv.appendChild(editButton);
        editButton.setAttribute("class", "edit");
        editButton.setAttribute("id", "edit" + itemNumber);
        editButton.setAttribute("type", "button");
        editButton.innerHTML = "edit";
        let deleteButton = document.createElement("button");
        newDiv.appendChild(deleteButton);
        deleteButton.setAttribute("class", "delete");
        deleteButton.setAttribute("id", "delete" + itemNumber);
        deleteButton.setAttribute("type", "button");
        deleteButton.innerHTML = "delete";
        list.appendChild(newDiv);
        // console.log(newItem, amount, comment, bought, date); 
    }
    function itemBought(_event) {
        let trigger = _event.target.id;
        let triggerNum = trigger.replace(/\D/g, "");
        let identifyer = parseInt(triggerNum);
        console.log(ShoppingList_04.data[identifyer]);
    }
    function editItem(_event) {
        let trigger = _event.target.id;
        let triggerNumber = trigger.replace(/\D/g, "");
        console.log(triggerNumber);
    }
    function deleteItem() {
        console.log("Item löschen");
    }
})(ShoppingList_04 || (ShoppingList_04 = {}));
//# sourceMappingURL=ShoppingList.js.map