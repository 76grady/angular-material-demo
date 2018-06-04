export class SampleData {
    
    static mainMenuItems(): MainMenuItem[] {
        let menuItems: MainMenuItem[] = [];
        menuItems.push(new MainMenuItem("home", "Home", "/home"));
        menuItems.push(new MainMenuItem("people", "User Management", "/users"));
        menuItems.push(new MainMenuItem("settings", "Settings", "/settings"));
        menuItems.push(new MainMenuItem("assessment", "Reports", "/reports"));
        
        return menuItems;
    }

    static selectItems(): SelectItemTemplate[] {
        let selectItems: SelectItemTemplate[] = [];
        selectItems.push(new SelectItemTemplate('home', 'Home Option', 'This is the option to go home.', "blue"));
        selectItems.push(new SelectItemTemplate('delete', 'Delete Option', 'We can delete things like crazy.', "red"));
        selectItems.push(new SelectItemTemplate('check', 'Check Option', 'Go ahead and select what you need.', "green")); 
        
        return selectItems;
    }

    static tableItems(): TableItem[] {
        let tableItems: TableItem[] = [];
        tableItems.push(new TableItem("Sun Tzu Priority", "This is the priority that sun tzu gave us.  He's an old fucker.  ", "#324D5C"));
        tableItems.push(new TableItem("Clausewitz Priority", "This is the priority that the prussian general gave us.", "#46B29D"));
        tableItems.push(new TableItem("Carl Jung Priority", "This is the priority that sun tzu gave us.  He's an old fucker.  ", "#F0CA4D"));
        tableItems.push(new TableItem("Vern Troyer Priority", "This is the priority that sun tzu gave us.  He's an old fucker.  ", "#E37B40"));
        tableItems.push(new TableItem("Eddie Van Halen Priority", "This is the priority that Eddie Van Halen gave us.  He's an old fucker.  ", "#DE5B49"));

        return tableItems;
    }

    static colorItems(): ColorSelect[] {
        let items: ColorSelect[] = [];
        items.push(new ColorSelect('Pink', 'announcement'));
        items.push(new ColorSelect('LightPink', 'autorenew'));
        items.push(new ColorSelect('LightSalmon', 'credit_card'));
        items.push(new ColorSelect('Salmon', 'dashboard'));
        items.push(new ColorSelect('DarkRed', 'donut_small'));
        items.push(new ColorSelect('Tomato', 'eject'));
        items.push(new ColorSelect('DarkOrange', 'favorite'));
        items.push(new ColorSelect('PapayaWhip', 'fingerprint'));
        items.push(new ColorSelect('PeachPuff', 'list'));
        items.push(new ColorSelect('Tan', 'lock'));
        items.push(new ColorSelect('Sienna', 'pan_tool'));
        items.push(new ColorSelect('DarkOliveGreen', 'pets'));
        items.push(new ColorSelect('MediumSpringGreen', 'settings_ethernet'));
        items.push(new ColorSelect('PaleTurquoise', 'settings_power'));
        items.push(new ColorSelect('MediumTurquoise', 'shopping_cart'));
        items.push(new ColorSelect('Teal', 'speaker_notes'));
        items.push(new ColorSelect('SkyBlue', 'turned_in'));
        items.push(new ColorSelect('SteelBlue', 'verified_user'));
        items.push(new ColorSelect('RoyalBlue', 'visibility'));
        items.push(new ColorSelect('Navy', '4k'));
        items.push(new ColorSelect('Thistle', 'airplay'));
        items.push(new ColorSelect('Fuchsia', 'album'));
        items.push(new ColorSelect('MediumPurple', 'explicit'));
        items.push(new ColorSelect('Silver', 'hearing'));
        items.push(new ColorSelect('Gray', 'games'));
        items.push(new ColorSelect('SlateGray', 'snooze'));
        
        return items;
    }
}

export class MainMenuItem {
    iconName: string;
    itemText: string;
    link: string;
    constructor(iconName: string, itemText: string, link: string){
        this.iconName = iconName;
        this.itemText = itemText;
        this.link = link;
    }
}

export class TableItem {
    title: string;
    description: string;
    color: string;
    constructor(title: string, description: string, color: string){
        this.title = title;
        this.description = description;
        this.color = color;
    }
}

export class ColorSelect {
    colorName: string;
    iconName: string;
    constructor(colorName: string, iconName: string){
        this.colorName = colorName;
        this.iconName = iconName;
    }


}

export class SelectItemTemplate {
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
