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
        tableItems.push(new TableItem("Sun Tzu Priority", "This is the priority that Sun Tzu gave us.  The Art of War was his main contribution.  ", "#324D5C"));
        tableItems.push(new TableItem("Clausewitz Priority", "They say that amateurs read Sun Tzu, but professionals read Clausewitz.", "#46B29D"));
        tableItems.push(new TableItem("Carl Jung Priority", "Carl Jung, an early psychoanalyst, was a contemperary of Sigmund Freud.  He coined the term 'Collective Unconscious'", "#F0CA4D"));
        tableItems.push(new TableItem("Vern Troyer Priority", "Vern Troyer was most notable as Mini-Me in the Austin Powers movies.  He had great comedic timing.", "#E37B40"));
        tableItems.push(new TableItem("Jimmy Page Priority", "I can't decide who the true GOAT is, Eddie Van Halen or Jimmy Page.", "#DE5B49"));
        tableItems.push(new TableItem("David Gilmour Priority", "Pink Floyd guitarist.  Great guitar solos", "#A63348"));
        tableItems.push(new TableItem("Roy Turner Priority", "Early Bluesman, slide guitar. ", "#3B5E8C"));
        tableItems.push(new TableItem("Jeff Beck Priority", "Yardbirds founder, still a vital guitar player.  Alledgedly wrote 'Superstition'.", "#D9C39A"));
        tableItems.push(new TableItem("Carlos Santana Priority", "Probably the top performance at Woodstock.  Ranks with Hendrix and Sly Stone.", "#BF5E49"));
        tableItems.push(new TableItem("Slim Whitman Priority", "I'm pretty sure his music destroys the aliens in 'Mars Attack'", "#A64E4E"));
        tableItems.push(new TableItem("Hank Williams Priority", "Probably one of the greatest poets of the 20th Century.  Influnced everyone.", "#2E0927"));
        tableItems.push(new TableItem("Dean Martin Priority", "Rat Pack stalwart.  I enjoy his version of 'Gentle On My Mind'.", "#D90000"));
        tableItems.push(new TableItem("Frank Sinatra Priority", "Chariman of The Board, probably one of the first modern pop stars.  His ouvre is near-perfect.", "#FF2D00"));
        tableItems.push(new TableItem("Carlos Jobim Priority", "'Girl From Ipanema' alone would've cemented his legend, then he made a flawless record with Sinatra.", "#FF8C00"));
        tableItems.push(new TableItem("Stan Getz Priority", "Jazz titan, somehow still underrated.", "#04756F"));
        tableItems.push(new TableItem("John Bonham Priority", "When interviewing drum instructors I ask them about two name: Phil Rudd and Bonham.", "#324D5C"));
        tableItems.push(new TableItem("Ray Charles Priority", "The Genius.  Could play everything authentically.", "#46B29D"));
        tableItems.push(new TableItem("Paul McCartney Priority", "Compositions as sturdy as a Schubert lieder, the craftsman of the Beatles also had the best solo career.", "#F0CA4D"));
        tableItems.push(new TableItem("Prince Priority", "Prince's era becomes even more fascinating when you realize he was competing with Michael Jackson and Lionel Ritchie at the peak of their respective powers..", "#E37B40"));
        tableItems.push(new TableItem("Aretha Franklin Priority", "The Voice of God: could do soul barn-burners and gospel ballads with equal flamethrower intensity.", "#DE5B49"));
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

    static getSteps(): PlanStep[] {
        let steps: PlanStep[] = [];
        steps.push(new PlanStep(
            'Envisioning',
            [
                new SubStep("Current Reality", "games"),
                new SubStep("The Future", "fingerprint"),
                new SubStep("Synthesize ", "extension")
            ]
        ));
        steps.push(new PlanStep(
            'Planning',
            [
                new SubStep("Priorities", "done_all"),
                new SubStep("Objectives", "flare"),
                new SubStep("Strategy", "zoom_out_map"),
                new SubStep("Annual Plan", "calendar_today")
            ]
        ));
        steps.push(new PlanStep(
            'Implementing',
            [
                new SubStep("Design", "build"),
                new SubStep("Assign", "list"),
                new SubStep("Enact", "save_alt")
            ]
        ));
        steps.push(new PlanStep(
            'Evaluating',
            [
                new SubStep("Impact", "signal_cellular_alt"),
                new SubStep("Success", "grade")
            ]
        ));


        return steps;
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

export class SubStep {
    title: string;
    iconName: string;
    constructor(title: string, iconName: string) {
        this.title = title;
        this.iconName = iconName;
    }
}

export class PlanStep {
    title: string;
    subSteps: SubStep[];
    constructor(title: string, subSteps: SubStep[]){
        this.title = title;
        this.subSteps = subSteps;
    }
}

