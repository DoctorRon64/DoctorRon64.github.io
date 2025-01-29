async function fetchSvgContent(url) {
    try {
        const response = await fetch(url);
        return await response.text();
    } catch (error) {
        console.error(`Error loading SVG from ${url}`, error);
        return '';
    }
}