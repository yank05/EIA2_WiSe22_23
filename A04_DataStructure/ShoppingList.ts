namespace ShoppingList_04 {
    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        
        let addButton: HTMLButtonElement = document.querySelector("button#add");
        addButton.addEventListener("click", itemAdd); 

        let checkBought: HTMLElement = document.querySelector("input#bought");
        checkBought.addEventListener("change", itemBought); 


        let editButton: HTMLButtonElement = document.querySelector("button#edit"); 
        editButton.addEventListener("click", editItem);

        let deleteButton: HTMLButtonElement = document.querySelector("button#delete");
        deleteButton.addEventListener("click", deleteItem); 
    }

    function itemAdd(): void {
        console.log("Item hinzugefügt");
    }

    function itemBought(): void {
        console.log(data);
    }

    function editItem(): void {
        console.log("Item editieren");
    }

    function deleteItem(): void {
        console.log("Item löschen"); 
    }
}