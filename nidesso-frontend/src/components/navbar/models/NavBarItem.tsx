export class NavBarItem {
    path?: string;
    element?: JSX.Element;

    private constructor() {}

    static create(path: string, element: JSX.Element): NavBarItem {
        const item = new NavBarItem();
        item.path = path;
        item.element = element;
        return item;
    }
}