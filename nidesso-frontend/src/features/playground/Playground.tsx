import { Menu } from "@headlessui/react";
import Button from "../../components/ui-lib/Button";

function Playground() {
    const elements = [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5',
    ]
    return (
        <div>
            <h1 className="text-3xl font-bold my-4">Buttons</h1>
            <div className="grid grid-cols-6 gap-2">
                <Button theme="primary">Primary</Button>
                <Button theme="secondary">Secondary</Button>
                <Button theme="accent">Accent</Button>
                <Button theme="success">Success</Button>
                <Button theme="warning">Warning</Button>
                <Button theme="error">Error</Button>
            </div>
            <h1 className="text-3xl font-bold my-4">Menu</h1>
            <Menu>

            </Menu>
        </div>
    );
}

export default Playground;