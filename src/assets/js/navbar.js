function createNavbar() {
    // Create <nav> element with class 'navbar'
    const nav = document.createElement('nav');
    nav.className = 'navbar';

    // Create <div> element with class 'container'
    const container = document.createElement('div');
    container.className = 'container';

    // Create <ul> element
    const ul = document.createElement('ul');

    // Define the list items and links
    const navItems = [
        { href: '/about.html', text: 'About' },
        { href: '/index.html', text: 'Home' },
        {
            text: 'Projects',
            dropdown: [
                { href: '/overview.html', text: 'Overview' },
                { href: '/games.html', text: 'Games' },
                { href: '/uc.html', text: 'Art' },
                { href: '/music.html', text: 'Music' }
            ]
        },
        { href: '/contact.html', text: 'Contact' }
    ];

    // Create <li> elements with <a> links and append them to the <ul>
    navItems.forEach(item => {
        const li = document.createElement('li');

        if (item.dropdown) {
            // Create main link for dropdown
            const a = document.createElement('a');
            a.textContent = item.text;
            a.href = '#'; // Prevent navigation

            // Create dropdown
            const dropdown = document.createElement('ul');
            dropdown.className = 'dropdown'; // Class for styling

            // Create dropdown items
            item.dropdown.forEach(dropItem => {
                const dropLi = document.createElement('li');
                const dropA = document.createElement('a');
                dropA.href = dropItem.href;
                dropA.textContent = dropItem.text;
                dropLi.appendChild(dropA);
                dropdown.appendChild(dropLi);
            });

            // Append the dropdown to the main list item
            li.appendChild(a);
            li.appendChild(dropdown);

            // Show dropdown on hover
            li.addEventListener('mouseenter', () => {
                dropdown.style.display = 'block'; // Show dropdown
            });
            li.addEventListener('mouseleave', () => {
                dropdown.style.display = 'none'; // Hide dropdown
            });
        } else {
            const a = document.createElement('a');
            a.href = item.href;
            a.textContent = item.text;
            li.appendChild(a);
        }

        ul.appendChild(li);
    });

    container.appendChild(ul);
    nav.appendChild(container);
    document.body.appendChild(nav);
}

// Call the function to create the navbar
createNavbar();
