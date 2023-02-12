/*
Aufgabe: Server_L06
Name: Yannik König
Matrikel: 271124
Datum: 19.11.2022
*/

namespace ShoppingList_06 {
    let itemNumber: number = 0;
    let elementCounter: number = 0; 
    let date: Date = new Date(); 
    let dateNoTime: string = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear(); 
    let url: string = "https://webuser.hs-furtwangen.de/~koenigya/Database/index.php/";
    window.addEventListener("load", handleLoad);

    interface Data {
        [id: number]: ItemAdded[]; 
    }

    interface ItemAdded {
        newItem: string;
        amount: number;
        comment: string; 
        bought: boolean; 
        date: string; 
    }

    interface ReturnedJSON {
        status: string;
        data: Data; 
    }

    async function handleLoad(_event: Event): Promise<void> {

        let addButton: HTMLButtonElement = document.querySelector("button#add");
        addButton.addEventListener("click", itemAdd);
        document.addEventListener("keypress", function(event: KeyboardEvent): void {
            if (event.key == "Enter") {
                itemAdd(); 
            }
        });  


        let response: Response = await fetch(url + "?command=find&collection=dataList"); 
        let item: string = await response.text();
        let data: ReturnedJSON = JSON.parse(item);

        generateExistingItem(data); 


    }  

    function generateExistingItem(_data: ReturnedJSON): void {
        let keys: string[] = Object.keys(_data.data);
        for (let index: number = 0; index < keys.length; index++) {

        let item: string[] = _data.data[keys[index]];  
        console.log(item); 
        let text: string[] = Object.values(item); 
        console.log(text); 

        let newItem: string = text[0];
        let amount: number = parseInt(text[1]);
        let comment: string = text[2];
        let list: HTMLElement = document.getElementById("list");
        let newDiv: HTMLDivElement = document.createElement("div");
        let newInput: HTMLInputElement = document.createElement("input");
        let divItemData: HTMLDivElement = document.createElement("div");


        createInput(newInput, newDiv,); 

        createDiv(newDiv); 

        createItemDiv(divItemData, newDiv); 

        addElement(divItemData, newItem.toString());

        addElement(divItemData, amount.toString());

        addElement(divItemData, comment.toString()); 

        addElement(divItemData, dateNoTime); 

        addButton(newDiv, "edit"); 

        addButton(newDiv, "delete"); 

        list.appendChild(newDiv);
        itemNumber++

        }
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

        sendData(formData); 

    }

    async function sendData(_formData: FormData): Promise<void> {

        interface FormDataJSON {
            [key: string]: FormDataEntryValue | FormDataEntryValue[];
          }
        let json: FormDataJSON = {};
        for (let key of _formData.keys())
            if (!json[key]) {
              let values: FormDataEntryValue[] = _formData.getAll(key);
              json[key] = values.length > 1 ? values : values[0];
            } 

        let query: URLSearchParams = new URLSearchParams(); 
        query.set("command", "insert");
        query.set("collection", "dataList");
        query.set("data", JSON.stringify(json));
        let response: Response = await fetch(url + "?" + query.toString());
        let responseText: string = await response.text();
        console.log()
        if (responseText.includes("success")) {
            alert("Item added!"); 
        }
        else {
            alert("Error! Try again!");
                }

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

    async function createInput(_element: HTMLInputElement, _parent: HTMLElement): Promise<void> {
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
    
    async function itemBought(_event: Event): Promise<void> {
        let trigger: string = (_event.target as HTMLInputElement).id;
        let triggerNum: string = trigger.replace(/\D/g, "");
        let identifyer: number = parseInt(triggerNum);

        let response0: Response = await fetch(url + "?command=find&collection=dataList"); 
        let itemResponse: string = await response0.text();
        let data: ReturnedJSON = JSON.parse(itemResponse);

        let keys: string[] = Object.keys(data.data);

        let id: string = keys[identifyer];

        let query: URLSearchParams = new URLSearchParams(); 
        query.set("command", "update");
        query.set("collection", "dataList");
        query.set("id", id); 
        query.set("data", "{'bought': true}"); 
        let response1: Response = await fetch(url + "?" + query.toString());
        let responseText: string = await response1.text();
        console.log(responseText); 

        if (responseText.includes("success")) {
            alert("Item marked as bought!"); 
        }
        else {
            alert("Error! Try again!");
                } 
        
    }

    //Dass "bought" auch im Dokument beim Aufbau ausgelesen und dargestellt wird habe ich auch 
    //nach ewiglangem Googlen und Ausprobieren nicht hinbekommen

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

    function createEditInputs(_listEdit: HTMLElement, _values: string[]): void {
        _listEdit.setAttribute("class", "editfield");
        _listEdit.removeAttribute("border-style"); 
        let form: HTMLElement = document.createElement("form");
        _listEdit.appendChild(form); 
        let inputField0: HTMLElement = document.createElement("input");
        inputField0.setAttribute("type", "text"); 
        inputField0.setAttribute("name", "newItem");
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
        
        let inputField3: HTMLInputElement = document.createElement("input");
        inputField3.setAttribute("type", "text"); 
        inputField3.setAttribute("name", "date");
        inputField3.setAttribute("value", _values[3]); 
        form.appendChild(inputField3);        
    }

    async function saveChanges(_event: Event): Promise<void> {
        let trigger: string = (_event.target as HTMLButtonElement).id;
        let triggerNum: string = trigger.replace(/\D/g, "");
        let identifyer: number = parseInt(triggerNum);

        let buttonEdit: HTMLElement = document.getElementById("edit" + identifyer);

        let listEdit: HTMLElement = document.getElementById("ItemData" + identifyer);     
        let formData: FormData = new FormData(listEdit.querySelector("form")); 
        let form: HTMLElement = listEdit.querySelector("form"); 

        let item: FormDataEntryValue = formData.get("newItem");
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

        interface FormDataJSON {
            [key: string]: FormDataEntryValue | FormDataEntryValue[];
          }
        let json: FormDataJSON = {};
        for (let key of formData.keys())
            if (!json[key]) {
              let values: FormDataEntryValue[] = formData.getAll(key);
              json[key] = values.length > 1 ? values : values[0];
            } 

        let response0: Response = await fetch(url + "?command=find&collection=dataList"); 
        let itemResponse: string = await response0.text();
        let data: ReturnedJSON = JSON.parse(itemResponse);

        let keys: string[] = Object.keys(data.data);
        let id: string = keys[identifyer];

        let query: URLSearchParams = new URLSearchParams(); 
        query.set("command", "update");
        query.set("collection", "dataList");
        query.set("id", id); 
        query.set("data", JSON.stringify(json)); 
        let response1: Response = await fetch(url + "?" + query.toString());
        let responseText: string = await response1.text();
        console.log(query); 

        if (responseText.includes("success")) {
            alert("Item edited!"); 
        }
        else {
            alert("Error! Try again!");
                }


    }
    
    async function deleteItem(_event: Event): Promise<void>  {
        let trigger: string = (_event.target as HTMLButtonElement).id; 
        let triggerNum: string = trigger.replace(/\D/g, "");
        let identifyer: number = parseInt(triggerNum);

        let list: HTMLElement = document.getElementById("list");
        let remIt: HTMLElement = document.getElementById("lister" + identifyer);
        list.removeChild(remIt);

        let response0: Response = await fetch(url + "?command=find&collection=dataList"); 
        let item: string = await response0.text();
        let data: ReturnedJSON = JSON.parse(item);

        let keys: string[] = Object.keys(data.data);
        console.log(keys); 
        console.log(identifyer); 
        let id: string = keys[identifyer];
        let query: URLSearchParams = new URLSearchParams(); 
        query.set("command", "delete");
        query.set("collection", "dataList");
        query.set("id", id); 
        let response1: Response = await fetch(url + "?" + query.toString());
        let responseText: string = await response1.text();

        if (responseText.includes("success")) {
            alert("Item deleted!"); 
        }
        else {
            alert("Error! Try again!");
                }




    }

   

} 
