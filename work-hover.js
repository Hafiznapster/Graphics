// Map of work items to their corresponding 3D image files
const workItemsMap = {
    'Arcane': 'images/arcane_3d.png',
    'Avatar: The Way of Water': 'images/avatar_3d.png',
    'The Batman': 'images/batman_3d.png',
    'Stranger Things': 'images/stranger_3d.png',
    'Demon Slayer': 'images/demon_3d.png',
    'Marvel Studios': 'images/marvel-3d.png',
    'Pixar': 'images/pixar_3d.png'
};

// Create the popup element
const popup = document.createElement('img');
popup.className = 'work-3d-popup';
popup.src = ''; // Will be set dynamically
document.body.appendChild(popup);

// Initialize hover effects for work items
document.addEventListener('DOMContentLoaded', () => {
    const workItems = document.querySelectorAll('.work-item');
    
    workItems.forEach(item => {
        // Get the title of the work item
        const titleElement = item.querySelector('.work-title');
        if (!titleElement) return;
        
        const title = titleElement.textContent;
        const image3dPath = workItemsMap[title] || 'images/arcane_3d.png'; // Default to arcane if not found
        
        // Add mouse enter event
        item.addEventListener('mouseenter', () => {
            popup.src = image3dPath;
            popup.classList.add('visible');
        });
        
        // Add mouse leave event
        item.addEventListener('mouseleave', () => {
            popup.classList.remove('visible');
        });
        
        // Add mouse move event to follow cursor
        item.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            
            // Position the popup at the cursor position
            popup.style.left = `${x}px`;
            popup.style.top = `${y}px`;
        });
    });
});