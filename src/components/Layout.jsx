import React from 'react';
import Navbar from './Navbar';
// import Footer from './Footer'; // Will create later if needed, or put inline

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-dark text-white font-sans selection:bg-primary selection:text-white">
            <Navbar />
            <main className="relative z-10 overflow-hidden">
                {children}
            </main>
            <footer className="py-8 text-center text-slate-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Creative Duo. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;
