function Footer(props: { className: string }) {
    return (
        <div className={`bg-th-primary-900 px-4 py-4 ${props.className}`}>
            <div className="max-w-7xl mx-auto">
                <span className="text-white">Copyright © Nidesso 2022</span>
            </div>
        </div>
    );
}

export default Footer;