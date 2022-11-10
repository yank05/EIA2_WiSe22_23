// Quellen von nachrecherchierten Codefragmenten: https://stackoverflow.com/questions/30607419/return-only-numbers-from-string
// https://stackoverflow.com/questions/44321326/property-value-does-not-exist-on-type-eventtarget-in-typescript
// In Zusammenarbeit mit Jonas Atzenhofer, Robert Schindler und Henning Pils
var ShoppingList_05;
(function (ShoppingList_05) {
    let itemNumber = 0;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let addButton = document.querySelector("button#add");
        addButton.addEventListener("click", itemAdd);
    }
    function itemAdd() {
        let formData = new FormData(document.querySelector("form"));
        let newItem = formData.get("newItem");
        let amount = formData.get("amount");
        let comment = formData.get("comment");
        let bought = false;
        let date = "30.02.2222";
        itemNumber++;
        let list = document.getElementById("list");
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "lister");
        newDiv.setAttribute("id", "lister" + itemNumber);
        let newInput = document.createElement("input");
        newDiv.appendChild(newInput);
        newInput.setAttribute("class", "bought");
        newInput.setAttribute("id", "bought" + itemNumber);
        newInput.setAttribute("type", "checkbox");
        newInput.addEventListener("change", itemBought);
        let divItemData = document.createElement("div");
        newDiv.appendChild(divItemData);
        divItemData.setAttribute("class", "ItemData");
        divItemData.setAttribute("id", "ItemData" + itemNumber);
        addElement(divItemData);
        // let newItemField: HTMLElement = document.createElement("p");
        // divItemData.appendChild(newItemField);
        // newItemField.setAttribute("class", "ItemDataFont");
        // newItemField.innerHTML = (newItem as string);
        addElement(divItemData, newItem.toString());
        // let amountField: HTMLElement = document.createElement("p");
        // divItemData.appendChild(amountField);
        // amountField.setAttribute("class", "ItemDataFont");
        // amountField.innerHTML = (amount as string);
        addElement(divItemData, amount.toString());
        // let commentField: HTMLElement = document.createElement("p");
        // divItemData.appendChild(commentField);
        // commentField.setAttribute("class", "ItemDataFont");
        // commentField.innerHTML = (comment as string);
        addElement(divItemData, comment.toString());
        // let dateField: HTMLElement = document.createElement("p");
        // divItemData.appendChild(dateField);
        // dateField.setAttribute("class", "ItemDataFont");
        // dateField.innerHTML = (date as string);
        addElement(divItemData, date);
        let editButton = document.createElement("button");
        newDiv.appendChild(editButton);
        editButton.setAttribute("class", "edit");
        editButton.setAttribute("id", "edit" + itemNumber);
        editButton.setAttribute("type", "button");
        editButton.innerHTML = "edit";
        editButton.addEventListener("click", editItem);
        let deleteButton = document.createElement("button");
        newDiv.appendChild(deleteButton);
        deleteButton.setAttribute("class", "delete");
        deleteButton.setAttribute("id", "delete" + itemNumber);
        deleteButton.setAttribute("type", "button");
        deleteButton.innerHTML = "delete";
        deleteButton.addEventListener("click", deleteItem);
        list.appendChild(newDiv);
        // console.log(newItem, amount, comment, bought, date); 
    }
    function addElement(_parent, _content) {
        let newItemField = document.createElement("p");
        _parent.appendChild(newItemField);
        newItemField.setAttribute("class", "ItemDataFont");
        if (_content) {
            newItemField.innerHTML = _content;
        }
    }
    function itemBought(_event) {
        let trigger = _event.target.id;
        let triggerNum = trigger.replace(/\D/g, "");
        let identifyer = parseInt(triggerNum);
        //to be continued
    }
    function editItem(_event) {
        let trigger = _event.target.id;
        let triggerNumber = trigger.replace(/\D/g, "");
        //to be continued
    }
    function deleteItem(_event) {
        let trigger = _event.target.id;
        let triggerNum = trigger.replace(/\D/g, "");
        let identifyer = parseInt(triggerNum);
        let list = document.getElementById("list");
        let remIt = document.getElementById("lister" + identifyer);
        list.removeChild(remIt);
    }
})(ShoppingList_05 || (ShoppingList_05 = {}));
//# sourceMappingURL=ShoppingList.js.map