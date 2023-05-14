interface LayoutProps {
    header: React.ReactNode;
    main: React.ReactNode;
    footer: React.ReactNode;
}
const Layout = ({header, main, footer}: LayoutProps) =>{
    return (
        <div className="grid grid-rows-[1fr, 6fr, 1fr] h-screen">
            <header>
                {header}
            </header>
            <main>
                {main}
            </main>
            <footer>
                {footer}
            </footer>
        </div>
    )
}
export default Layout;