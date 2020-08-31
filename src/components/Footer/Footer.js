import React from 'react';

function Footer() {
    const yeartodate = new Date().getFullYear();
    return (
        <footer>
            <p>
                Copyright © {yeartodate}
            </p>
        </footer>
    )
}

export default Footer;