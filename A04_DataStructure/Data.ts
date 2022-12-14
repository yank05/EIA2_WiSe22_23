namespace ShoppingList_04 {

    export interface ItemAdded {
        newItem: string;
        amount: number;
        comment: string; 
        bought: boolean; 
        date: string; 
    }

    export interface Data {
        [itemNumber: number]: ItemAdded[]; 
    }

    export let data: Data = {
        1: [
            { newItem: "Brot", amount: 1, comment: "Bauernbrot", bought: false, date: "27.10.22" }
        ], 
        2: [
            { newItem: "booooob", amount: 1, comment: "Bauernbrot", bought: false, date: "27.10.22" }
        ]
    }; 
}