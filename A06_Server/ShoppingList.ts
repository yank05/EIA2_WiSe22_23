/*
Aufgabe: Client_L05
Name: Yannik König
Matrikel: 271124
Datum: 11.11.2022
Quellen von nachrecheriertem Code: https://tutorial.eyehunts.com/js/javascript-get-a-date-without-time-display-example/
*/


namespace ShoppingList_06 {
    let itemNumber: number = 0;
    let elementCounter: number = 0; 
    let date: Date = new Date(); 
    let dateNoTime: string = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear(); 

    window.addEventListener("load", handleLoad);

    interface ItemAdded {
        newItem: string;
        amount: number;
        comment: string; 
        bought: boolean; 
        date: string; 
    }

    interface Data {
        [1]: ItemAdded[]; 
    }

    async function handleLoad(_event: Event): Promise<void> {

        let addButton: HTMLButtonElement = document.querySelector("button#add");
        addButton.addEventListener("click", itemAdd);
        document.addEventListener("keypress", function(event: KeyboardEvent): void {
            if (event.key == "Enter") {
                itemAdd(); 
            }
        });  

        let response: Response = await fetch("https://webuser.hs-furtwangen.de/~koenigya/Database/data.json");
        let item: string = await response.text();
        let data: Data = JSON.parse(item);

        generateExistingItem(data); 

    }  

    function generateExistingItem(_data: Data): void {
        let values: ItemAdded[] = _data[1];
        console.log(values[0].newItem);  

        let newItem: string = values[0].newItem;
        let amount: number = values[0].amount;
        let comment: string = values[0].comment;
        let list: HTMLElement = document.getElementById("list");
        let newDiv: HTMLDivElement = document.createElement("div");
        let newInput: HTMLInputElement = document.createElement("input");
        let divItemData: HTMLDivElement = document.createElement("div");


        createInput(newInput, newDiv); 

        createDiv(newDiv); 

        createItemDiv(divItemData, newDiv); 

        addElement(divItemData, newItem.toString());

        addElement(divItemData, amount.toString());

        addElement(divItemData, comment.toString()); 

        addElement(divItemData, dateNoTime); 

        addButton(newDiv, "edit"); 

        addButton(newDiv, "delete"); 

        list.appendChild(newDiv);


    }
    async function itemAdd(): Promise<void> {
        let formData: FormData = new FormData(document.querySelector("form"));
        let newItem: FormDataEntryValue = formData.get("newItem");
        let amount: FormDataEntryValue = formData.get("amount");
        let comment: FormDataEntryValue = formData.get("comment");
        let list: HTMLElement = document.getElementById("list");
        let newDiv: HTMLDivElement = document.createElement("div");
        let newInput: HTMLInputElement = document.createElement("input");
        let divItemData: HTMLDivElement = document.createElement("div");
        itemNumber++;

        createInput(newInput, newDiv); 

        createDiv(newDiv); 

        createItemDiv(divItemData, newDiv); 

        addElement(divItemData, newItem.toString());

        addElement(divItemData, amount.toString());

        addElement(divItemData, comment.toString()); 

        addElement(divItemData, dateNoTime); 

        addButton(newDiv, "edit"); 

        addButton(newDiv, "delete"); 

        list.appendChild(newDiv);

        let query: URLSearchParams = new URLSearchParams(<any>formData);
        await fetch("https://webuser.hs-furtwangen.de/~koenigya/Database/data.json?" + query.toString());
        alert("Item added!");

    }

    function addElement(_parent: HTMLElement, _content?: string): void {
        let newItemField: HTMLElement = document.createElement("p");
        _parent.appendChild(newItemField);
        newItemField.setAttribute("class", "ItemDataFont");
        if (_content) {
            newItemField.innerHTML = (_content as string);
        }
    }

    function addButton(_parent: HTMLElement, _identify: string): void {
        let newButton: HTMLElement = document.createElement("button");
        _parent.appendChild(newButton);
        newButton.setAttribute("class", _identify);
        newButton.setAttribute("id", _identify + itemNumber);
        newButton.setAttribute("type", "button");
        newButton.innerHTML = _identify;
        switch (_identify) {
            case "edit":
                newButton.addEventListener("click", editItem);
                break;
            case "delete": 
                newButton.addEventListener("click", deleteItem);
            default:
                break;
        }
    }

    function createDiv(_element: HTMLElement): void {
        _element.setAttribute("class", "lister");
        _element.setAttribute("id", "lister" + itemNumber);
    }

    function createInput(_element: HTMLElement, _parent: HTMLElement): void {
        _parent.appendChild(_element);
        _element.setAttribute("class", "bought");
        _element.setAttribute("id", "bought" + itemNumber);
        _element.setAttribute("type", "checkbox");
        _element.addEventListener("change", itemBought);
    }

    function createItemDiv(_element: HTMLElement, _parent: HTMLElement): void {
        _parent.appendChild(_element);
        _element.setAttribute("class", "ItemData");
        _element.setAttribute("id", "ItemData" + itemNumber);
    }; 
    
    function itemBought(_event: Event): void {
        let trigger: string = (_event.target as HTMLInputElement).id;
        let triggerNum: string = trigger.replace(/\D/g, "");
        let identifyer: number = parseInt(triggerNum);
        //to be continued
    }

    function editItem(_event: Event): void {
        let trigger: string = (_event.target as HTMLButtonElement).id;
        let triggerNum: string = trigger.replace(/\D/g, "");
        let identifyer: number = parseInt(triggerNum);
        let values: string[] = []; 

        let buttonEdit: HTMLElement = document.getElementById("edit" + identifyer);
        let listEdit: HTMLElement = document.getElementById("ItemData" + identifyer);  

        buttonEdit.removeEventListener("click", editItem);
        buttonEdit.addEventListener("click", saveChanges);
        buttonEdit.innerHTML = "save";
        

        for (let index: number = 0; index < 4; index++) {
            let item: HTMLElement = listEdit.querySelector("p"); 
            let value: string = item.innerHTML; 
            values.push(value); 
            listEdit.removeChild(item); 
        }
        createEditInputs(listEdit, values);
    }
    
    function deleteItem(_event: Event): void {
        let trigger: string = (_event.target as HTMLButtonElement).id
        let triggerNum: string = trigger.replace(/\D/g, "");
        let identifyer: number = parseInt(triggerNum);

        let list: HTMLElement = document.getElementById("list");
        let remIt: HTMLElement = document.getElementById("lister" + identifyer);
        list.removeChild(remIt);
    }

    async function saveChanges(_event: Event): Promise<void> {
        let trigger: string = (_event.target as HTMLButtonElement).id;
        let triggerNum: string = trigger.replace(/\D/g, "");
        let identifyer: number = parseInt(triggerNum);

        let buttonEdit: HTMLElement = document.getElementById("edit" + identifyer);

        let listEdit: HTMLElement = document.getElementById("ItemData" + identifyer);     
        let formData: FormData = new FormData(listEdit.querySelector("form")); 
        let form: HTMLElement = listEdit.querySelector("form"); 

        let item: FormDataEntryValue = formData.get("item");
        let amount: FormDataEntryValue = formData.get("amount");
        let comment: FormDataEntryValue = formData.get("comment"); 
        let date: FormDataEntryValue = formData.get("date"); 
        listEdit.removeChild(form); 
        listEdit.removeAttribute("class");
        listEdit.setAttribute("class", "ItemData");  

        buttonEdit.removeEventListener( "click", saveChanges);
        buttonEdit.addEventListener("click", editItem);
        buttonEdit.innerHTML = "edit";
       
        
        addElement(listEdit, item.toString());

        addElement(listEdit, amount.toString());

        addElement(listEdit, comment.toString()); 

        addElement(listEdit, date.toString()); 

        let query: URLSearchParams = new URLSearchParams(<any>formData);
        await fetch("index.html?" + query.toString());
        alert("Changes saved!");


    }

    function createEditInputs(_listEdit: HTMLElement, _values: string[]): void {
        _listEdit.setAttribute("class", "addfield");
        let form: HTMLElement = document.createElement("form");
        _listEdit.appendChild(form); 
        let formData: FormData = new FormData; 
        let inputField0: HTMLElement = document.createElement("input");
        inputField0.setAttribute("type", "text"); 
        inputField0.setAttribute("name", "item");
        inputField0.setAttribute("value", _values[0]); 
        form.appendChild(inputField0);

        let inputField1: HTMLElement = document.createElement("input");
        inputField1.setAttribute("type", "number"); 
        inputField1.setAttribute("name", "amount");
        inputField1.setAttribute("value", _values[1]); 
        form.appendChild(inputField1);

        let inputField2: HTMLElement = document.createElement("input");
        inputField2.setAttribute("name", "comment");
        inputField2.setAttribute("value", _values[2]); 
        form.appendChild(inputField2);
        
        let inputField3: HTMLElement = document.createElement("input");
        inputField3.setAttribute("type", "text"); 
        inputField3.setAttribute("name", "date");
        inputField3.setAttribute("value", _values[3]); 
        form.appendChild(inputField3);        
    }
} 
