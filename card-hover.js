// Map of work items to their corresponding 3D image files
const workItemsMap = {
    'Arcane': 'images/hover/arcane_3d.png',
    'Avatar: The Way of Water': 'images/hover/avatar_3d.png',
    'The Batman': 'images/hover/batman_3d.png',
    'Stranger Things': 'images/hover/stranger_3d.png',
    'Demon Slayer': 'images/hover/demon_3d.png',
    'Marvel Studios': 'images/hover/marvel-3d.png',
    'Pixar': 'images/hover/pixar_3d.png'
};

// Initialize 3D hover effects for work items
document.addEventListener('DOMContentLoaded', () => {
    const workItems = document.querySelectorAll('.work-item');

    workItems.forEach(item => {
        // Get the title of the work item
        const titleElement = item.querySelector('.work-title');
        if (!titleElement) return;

        const title = titleElement.textContent.trim();
        const image3dPath = workItemsMap[title];

        if (!image3dPath) return; // Skip if no matching 3D image

        // Create hover image element
        const hoverImage = document.createElement('div');
        hoverImage.className = 'hover-image';
        hoverImage.style.backgroundImage = `url('${image3dPath}')`;

        // Store original background image
        const originalBg = window.getComputedStyle(item).backgroundImage;
        item.style.setProperty('--original-bg', originalBg);

        // Add hover image to work item
        item.appendChild(hoverImage);

        // Add 3D tilt effect with smoother animation
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Calculate rotation with easing for smoother effect
            const xPercent = (x / rect.width - 0.5) * 12;
            const yPercent = (y / rect.height - 0.5) * 12 * -1;

            // Add slight scale effect based on mouse position with improved formula
            const centerDistance = Math.sqrt(
                Math.pow(x / rect.width - 0.5, 2) +
                Math.pow(y / rect.height - 0.5, 2)
            );
            const scaleValue = 1 + (0.06 * (1 - centerDistance * 2));

            // Calculate a slight z-translation based on mouse position
            const zTranslate = 30 * (1 - centerDistance * 1.5);

            // Apply transform with scale, rotation and z-translation for better 3D effect
            item.style.transform = `perspective(1200px) rotateY(${xPercent}deg) rotateX(${yPercent}deg) scale(${scaleValue}) translateZ(${zTranslate}px)`;

            // Dynamic shadow based on tilt with improved values
            const shadowX = xPercent * 0.8;
            const shadowY = yPercent * -0.8;
            const shadowBlur = 30 + Math.abs(xPercent) + Math.abs(yPercent);
            item.style.boxShadow = `${shadowX}px ${shadowY}px ${shadowBlur}px rgba(0, 0, 0, 0.45)`;
        });

        // Reset transform on mouse leave with smooth transition
        item.addEventListener('mouseleave', () => {
            // Add a slight delay for a more natural transition
            setTimeout(() => {
                item.style.transform = 'perspective(1200px) rotateY(0deg) rotateX(0deg) scale(1) translateZ(0)';
                item.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
            }, 50);
        });
    });
});
