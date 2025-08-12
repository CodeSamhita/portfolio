document.addEventListener('DOMContentLoaded', () => {
    const facultyGrid = document.getElementById('faculty-grid');
    if (!facultyGrid) return;

    const loader = document.getElementById('loader');

    function showLoader() { if(loader) loader.classList.remove('hidden'); }
    function hideLoader() { if(loader) loader.classList.add('hidden'); }

    showLoader();

    fetch('./data/members.json')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            let htmlContent = '';
            if (data.faculty_members && data.faculty_members.length > 0) {
                data.faculty_members.forEach(p => {
                    const socialIconsMap = { linkedin: 'fab fa-linkedin', email: 'fas fa-envelope' };
                    let socialIconsHtml = '';
                    if (p.social) {
                        for (const [key, value] of Object.entries(p.social)) {
                            if (value && value.trim() !== '#') {
                                socialIconsHtml += `<a href="${value}" target="_blank" title="${key.charAt(0).toUpperCase() + key.slice(1)}"><i class="${socialIconsMap[key] || 'fas fa-link'}"></i></a>`;
                            }
                        }
                    }
                    htmlContent += `
                        <div class="official-card">
                            <img src="${p.photo}" alt="${p.name}" class="official-photo" onerror="this.onerror=null;this.src='https.placehold.co/120x120/333/efefef?text=${p.name.charAt(0)}';">
                            <div class="official-details">
                                <h4>${p.name}</h4>
                                <strong>${p.position}</strong>
                                <p class="official-bio">${p.bio}</p>
                                <div class="official-social-icons">${socialIconsHtml}</div>
                            </div>
                        </div>`;
                });
            } else {
                htmlContent = '<p>No faculty information is available at the moment.</p>';
            }
            facultyGrid.innerHTML = htmlContent;
            
            // Animate cards into view
            document.querySelectorAll('.content-grid .official-card').forEach((card, index) => {
                card.style.animation = `fadeIn 0.5s ease-out ${index * 0.1}s forwards`;
            });

            hideLoader();
        })
        .catch(error => {
            console.error('Error fetching faculty data:', error);
            facultyGrid.innerHTML = '<p style="color: red;">Could not load faculty data. Please check the console for errors.</p>';
            hideLoader();
        });
});
