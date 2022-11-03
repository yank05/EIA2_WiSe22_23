namespace ShoppingList_04 {

    export interface ItemAdded {
        newItem: string;
        Amount: number;
        Comment: string; 
        bought: boolean; 
        date: string; 
    }

    export interface Data {
        [itemNumber: number]: ItemAdded[]; 
    }

    export let data: Data = {
        0: [
            {newItem: "Brot", Amount: 1, Comment: "Bauernbrot", bought: false, date: "27.10.22"}
        ]

    }; 
}