export class NavItem {
    name: string;
    link: string;
    show: boolean = true;

    private constructor(name: string, link: string) {
        this.name = name;
        this.link = link;
    }
    
    static create(name: string, link: string, show: boolean = true) {
        const item = new NavItem(name, link);
        item.show = show;
        return item;
    }
}