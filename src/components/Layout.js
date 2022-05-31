import React from 'react'

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <div>
                    <h1>Knlju BLOG</h1>
                </div>
                <div>
                    links
                </div>
            </header>
            <main>
                <section>
                    {children}
                </section>
            </main>
            <footer>
                <div>
                    Knlju &copy;
                </div>
                <div>links</div>
            </footer>
        </div>
    )
}

export default Layout