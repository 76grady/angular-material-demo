export class ItemTemplate {
    matIconName: string;
    itemTitle: string;
    itemDescription: string;
    itemColor: string;
    constructor(matIconName: string,
        itemTitle: string,
        itemDescription: string,
        itemColor: string) {
            this.itemColor = itemColor;
            this.itemTitle = itemTitle;
            this.itemDescription = itemDescription;
            this.matIconName = matIconName;
    }
}