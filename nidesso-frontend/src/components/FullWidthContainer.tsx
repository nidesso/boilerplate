function FullWidthContainer(props: { children: JSX.Element, className?: string }) {
    return (
        <div className={`w-[100vw] relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] ${props.className ?? ''}`}>
            {props.children}
        </div>
    );
}

export default FullWidthContainer;