import AppRouter from '../AppRouter';
function Layout() {
    return (
        <section>
            <div className="container">
                <AppRouter />
            </div>
            <div className="container"></div>
        </section>
    );
}

export default Layout;
