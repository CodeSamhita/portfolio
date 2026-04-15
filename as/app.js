document.addEventListener('DOMContentLoaded', () => {
    // `notesData` is loaded globally from data.js
    if (typeof notesData === 'undefined' || !Array.isArray(notesData)) {
        document.getElementById('content-container').innerHTML = `
            <div class="emptyState">
                <h2>Error Loading Data</h2>
                <p>Could not load notesData. Make sure data.js is generated properly.</p>
            </div>
        `;
        return;
    }

    const lectureListEl = document.getElementById('lecture-list');
    const contentContainerEl = document.getElementById('content-container');

    // Populate sidebar
    notesData.forEach((lecture, index) => {
        const div = document.createElement('div');
        div.className = 'lecture-item';
        div.textContent = lecture.title || lecture.id;
        div.dataset.index = index;
        
        div.addEventListener('click', () => {
            // Remove active class from all
            document.querySelectorAll('.lecture-item').forEach(el => el.classList.remove('active'));
            div.classList.add('active');
            renderLecture(lecture, index);
        });

        lectureListEl.appendChild(div);
    });

    // Render lecture content
    function renderLecture(lecture, index, isRestore = false) {
        if (index !== undefined) {
            localStorage.setItem('lastLectureIndex', index);
        }
        
        if (!isRestore) {
            document.querySelector('.mainContent').scrollTop = 0;
            localStorage.setItem('lastLectureScroll', 0);
        }
        
        let html = `<h1 class="lecture-title">${lecture.title}</h1>`;
        
        if (!lecture.notes || lecture.notes.length === 0) {
            html += `<p style="color: var(--text-muted);">No parsed notes found for this lecture.</p>`;
        } else {
            html += `<div class="note-grid">`;
            lecture.notes.forEach((note) => {
                let pointsHtml = '';
                if (note.points && note.points.length > 0) {
                    pointsHtml = `<ul class="note-points">`;
                    note.points.forEach(point => {
                        pointsHtml += `<li>${point}</li>`;
                    });
                    pointsHtml += `</ul>`;
                }

                const timestampHtml = note.timestamp ? `
                    <div class="note-timestamp">
                        ${note.timestamp}
                    </div>
                ` : '';

                html += `
                    <div class="note-card">
                        <div class="note-header">
                            <div class="note-heading">${note.heading}</div>
                            ${timestampHtml}
                        </div>
                        ${pointsHtml}
                    </div>
                `;
            });
            html += `</div>`;
        }
        
        contentContainerEl.innerHTML = html;

        if (isRestore) {
            const savedScroll = localStorage.getItem('lastLectureScroll');
            if (savedScroll !== null) {
                // Use setTimeout to ensure DOM has fully painted
                setTimeout(() => {
                    document.querySelector('.mainContent').scrollTop = parseInt(savedScroll, 10);
                }, 0);
            }
        }
    }

    // Save scroll state when reading
    const mainContentEl = document.querySelector('.mainContent');
    mainContentEl.addEventListener('scroll', () => {
        localStorage.setItem('lastLectureScroll', mainContentEl.scrollTop);
    });

    // Restore last read state on initial load
    const savedIndex = localStorage.getItem('lastLectureIndex');
    if (savedIndex !== null && notesData[savedIndex]) {
        const itemObj = lectureListEl.children[savedIndex];
        if (itemObj) {
            document.querySelectorAll('.lecture-item').forEach(el => el.classList.remove('active'));
            itemObj.classList.add('active');
            renderLecture(notesData[savedIndex], parseInt(savedIndex, 10), true);
        }
    }
});
