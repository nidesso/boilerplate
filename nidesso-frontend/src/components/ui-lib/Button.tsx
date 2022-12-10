import classnames from "classnames";
import { ComponentStyles } from "../../helpers/constants/styles";
import { ComponentColor } from "../../helpers/constants/types";

interface Props {
    className?: string;
    theme?: ComponentColor;
    children?: React.ReactNode;
    onClick?: () => void;
}

function Button(props: Props) {
    return (
        <button className={classnames(
            props.className,
            ComponentStyles[props.theme ?? 'primary']
        )}
            onClick={props.onClick} >
            {props.children}
        </button >
    );
}

export default Button;