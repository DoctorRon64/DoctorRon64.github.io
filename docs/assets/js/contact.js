// Function to create the footer
async function fetchSvgContent(url) {
    try {
        const response = await fetch(url);
        return await response.text();
    } catch (error) {
        console.error(`Error loading SVG from ${url}`, error);
        return '';
    }
}

async function createFooter(addSocialClass) {
    const footer = document.createElement('footer');

    // Add the class if addSocialClass is true
    if (addSocialClass) {
        footer.className = 'social-footer'; // Use the correct class name
    }

    const ul = document.createElement('ul');
    ul.className = 'social-icons';

    const socialLinks = [
        { href: 'mailto:y2t1l3mt5@mozmail.com', title: 'Email me', svgSrc: '/assets/img/icons/social-icons/tabler--mail-plus.svg', alt: 'Email Icon', style: 'fill: white;' },
        { href: 'https://github.com/DoctorRon64', title: 'GitHub', svgSrc: '/assets/img/icons/social-icons/tabler--brand-github.svg', alt: 'GitHub Icon', target: '_blank', style: 'fill: white;' },
        { href: 'www.linkedin.com/in/gamedev-gamecomposer-84272130b', title: 'LinkedIn', svgSrc: '/assets/img/icons/social-icons/tabler--brand-linkedin.svg', alt: 'LinkedIn Icon', target: '_blank', style: 'fill: white;' },
        { href: 'https://open.spotify.com/artist/6szCm5FAd4pBlQw6US2DPw?si=tF8kTzDnS-mFpSLxSeZKBQ', title: 'Spotify', svgSrc: '/assets/img/icons/social-icons/tabler--brand-spotify.svg', alt: 'Spotify Icon', target: '_blank', style: 'fill: white;' },
        { href: 'https://doctor-ron.itch.io/', title: 'Itch.Io', svgSrc: '/assets/img/icons/social-icons/tabler--brand-itch.svg', alt: 'Itch.io Icon', target: '_blank', style: 'fill: white;' }
    ];

    // Loop through socialLinks and fetch SVG content
    for (const link of socialLinks) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.href;
        a.title = link.title;

        if (link.target) a.target = link.target;

        // Fetch the SVG content from the source
        const svgContent = await fetchSvgContent(link.svgSrc);

        // Create SVG container and insert the fetched SVG content
        const svgContainer = document.createElement('span');
        svgContainer.className = 'icon';
        svgContainer.innerHTML = svgContent; // Insert the SVG content

        // Select the SVG tag inside the content and set its width/height
        const svg = svgContainer.querySelector('svg');
        if (svg) {
            svg.setAttribute('width', link.size || 70);  // Default to 40px if no size is provided
            svg.setAttribute('height', link.size || 70); // Default to 40px if no size is provided
        }
        
        // Apply any custom styles
        if (link.style) {
            svgContainer.style.cssText = link.style;
        }

        // Append the SVG container to the anchor tag
        a.appendChild(svgContainer);
        li.appendChild(a);
        ul.appendChild(li);
    }

    // Append the entire list to the footer
    footer.appendChild(ul);
    document.body.appendChild(footer);
}

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Find the script tag that is currently executing
    const scripts = document.getElementsByTagName('script');
    let currentScript;

    // Loop through scripts to find the current one
    for (let i = 0; i < scripts.length; i++) {
        if (scripts[i].src.includes('contact.js')) {
            currentScript = scripts[i];
            break;
        }
    }

    // If the script tag was found, read the footerclass attribute
    if (currentScript) {
        const footerClassAttr = currentScript.getAttribute('footerclass'); // Get custom attribute
        const addClass = footerClassAttr === 'true'; // Convert string to boolean

        // Create the footer based on the attribute
        createFooter(addClass);
    }
});