function FullWidthContainer(props: { children: JSX.Element, className?: string }) {
    return (
        <div className={`w-[var(--viewportWidth)] relative left-1/2 right-1/2 -mx-[var(--viewportWidth50)] ${props.className ?? ''}`}>
            {props.children}
        </div>
    );
}

export default FullWidthContainer;