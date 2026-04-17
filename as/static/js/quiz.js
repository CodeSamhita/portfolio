document.addEventListener('DOMContentLoaded', () => {
    let allSets = [];
    let currentSet = null;
    let userAnswers = {};
    let isSubmitted = false;

    const setList = document.getElementById('setList');
    const welcomeScreen = document.getElementById('welcomeScreen');
    const summaryContainer = document.getElementById('summaryContainer');
    const summaryTitle = document.getElementById('summaryTitle');
    const summaryList = document.getElementById('summaryList');
    const theoryReviewSection = document.getElementById('theoryReviewSection');
    const detailedTheoryList = document.getElementById('detailedTheoryList');
    const startQuizBtn = document.getElementById('startQuizBtn');
    const quizContainer = document.getElementById('quizContainer');
    const quizForm = document.getElementById('quizForm');
    const currentSetTitle = document.getElementById('currentSetTitle');
    const submitBtn = document.getElementById('submitBtn');
    const quizProgress = document.getElementById('quizProgress');
    const totalScoreSpan = document.getElementById('totalScore');
    const finalScoreDisplay = document.getElementById('finalScoreDisplay');

    // Fetch questions (Standalone now uses local data.js)
    if (typeof GIS_DATA !== 'undefined') {
        allSets = GIS_DATA;
        renderSetList();
    } else {
        console.error('GIS_DATA not found.');
    }

    function renderSetList() {
        setList.innerHTML = '';
        allSets.forEach(set => {
            const item = document.createElement('div');
            item.className = 'set-item quiz-set-item';
            item.innerHTML = `
                <i class="fas fa-layer-group"></i>
                <div class="set-name">${set.setTitle}</div>
            `;
            item.onclick = () => loadSet(set.setId);
            setList.appendChild(item);
        });
    }

    function loadSet(setId) {
        currentSet = allSets.find(s => s.setId === setId);
        if (!currentSet) return;

        userAnswers = {};
        isSubmitted = false;
        
        // Use more specific selector to avoid conflict with Quick Links
        document.querySelectorAll('.quiz-set-item').forEach((item, index) => {
            if (allSets[index]) {
                item.classList.toggle('active', allSets[index].setId === setId);
            }
        });
        
        // UI Navigation
        welcomeScreen.classList.add('d-none');
        quizContainer.classList.add('d-none');
        summaryContainer.classList.remove('d-none');
        
        summaryTitle.innerText = currentSet.setTitle;
        currentSetTitle.innerText = currentSet.setTitle;
        
        // Populate Summary Details
        summaryList.innerHTML = '';
        if (currentSet.description) {
            currentSet.description.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `<span class="fw-normal">${item}</span>`;
                summaryList.appendChild(li);
            });
        }

        // Populate Detailed Theory (if available)
        detailedTheoryList.innerHTML = '';
        if (currentSet.detailedTheory) {
            theoryReviewSection.classList.remove('d-none');
            currentSet.detailedTheory.forEach(note => {
                const p = document.createElement('p');
                p.innerText = note;
                detailedTheoryList.appendChild(p);
            });
        } else {
            theoryReviewSection.classList.add('d-none');
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    startQuizBtn.onclick = () => {
        summaryContainer.classList.add('d-none');
        quizContainer.classList.remove('d-none');
        
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane me-2"></i> Submit Answers';
        finalScoreDisplay.innerText = '';
        updateProgress();
        renderQuestions();
    };

    function renderQuestions() {
        quizForm.innerHTML = '';
        currentSet.questions.forEach((q, idx) => {
            const card = document.createElement('div');
            card.className = 'question-card card p-4 mb-4';
            card.id = `q-card-${idx}`;
            
            let optionsHtml = '';
            for (const [key, val] of Object.entries(q.options)) {
                optionsHtml += `
                    <label class="option-container d-block p-3 rounded mb-2 border" id="label-${idx}-${key}">
                        <input type="radio" name="q${idx}" value="${key}" class="me-2" 
                               onchange="window.selectOption(${idx}, '${key}')">
                        <span class="fw-bold me-1">${key.toUpperCase()}.</span> ${val}
                    </label>
                `;
            }

            card.innerHTML = `
                <div class="h5 mb-4">${idx + 1}. ${q.question}</div>
                <div class="options-grid mb-3">${optionsHtml}</div>
                
                <button type="button" class="btn btn-concept" id="hint-btn-${idx}" onclick="window.toggleHint(${idx})">
                    <i class="fas fa-lightbulb me-1"></i> Read Theory
                </button>
                <div id="hint-${idx}" class="concept-box d-none">
                    ${q.conceptHint || "Examine the spatial data structures mentioned."}
                </div>

                <div id="feedback-${idx}" class="feedback-area d-none mt-4 p-3 rounded">
                    <p id="feedback-text-${idx}" class="fw-bold mb-2"></p>
                    <p class="small text-muted mb-0"><strong>Explanation:</strong> ${q.explanation}</p>
                </div>
            `;
            quizForm.appendChild(card);
        });
    }

    window.selectOption = (questionIdx, optionKey) => {
        if (isSubmitted) return;
        userAnswers[questionIdx] = optionKey;
        updateProgress();
        
        // Toggle selected class
        document.querySelectorAll(`input[name="q${questionIdx}"]`).forEach(input => {
            const label = document.getElementById(`label-${questionIdx}-${input.value}`);
            label.classList.toggle('selected', input.checked);
        });
    };

    window.toggleHint = (idx) => {
        const hintBox = document.getElementById(`hint-${idx}`);
        const hintBtn = document.getElementById(`hint-btn-${idx}`);
        if(hintBox.classList.contains('d-none')) {
            hintBox.classList.remove('d-none');
            hintBtn.innerHTML = '<i class="fas fa-times me-1"></i> Hide Theory';
        } else {
            hintBox.classList.add('d-none');
            hintBtn.innerHTML = '<i class="fas fa-lightbulb me-1"></i> Read Theory';
        }
    };

    function updateProgress() {
        const answeredCount = Object.keys(userAnswers).length;
        const total = currentSet.questions.length;
        const pct = (answeredCount / total) * 100;
        quizProgress.style.width = `${pct}%`;
    }

    submitBtn.onclick = () => {
        if (!currentSet || isSubmitted) return;
        
        let score = 0;
        const total = currentSet.questions.length;

        currentSet.questions.forEach((q, idx) => {
            const selected = userAnswers[idx];
            const feedbackDiv = document.getElementById(`feedback-${idx}`);
            const feedbackText = document.getElementById(`feedback-text-${idx}`);
            const hintBtn = document.getElementById(`hint-btn-${idx}`);
            const hintBox = document.getElementById(`hint-${idx}`);
            
            feedbackDiv.classList.remove('d-none');
            hintBtn.classList.add('d-none'); // Hide hint btn on submit
            hintBox.classList.add('d-none');
            
            const isCorrect = selected === q.answer;
            if (isCorrect) score++;

            feedbackText.innerHTML = isCorrect 
                ? '<span class="text-success"><i class="fas fa-check-circle me-2"></i>Correct!</span>' 
                : `<span class="text-danger"><i class="fas fa-times-circle me-2"></i>Incorrect. Correct: ${q.answer.toUpperCase()}</span>`;
            
            feedbackDiv.style.background = isCorrect ? 'rgba(16, 185, 129, 0.05)' : 'rgba(239, 68, 68, 0.05)';
            feedbackDiv.style.border = `1px solid ${isCorrect ? 'var(--secondary)' : 'var(--wrong)'}`;

            // Highlight labels
            for (const key of ['a', 'b', 'c', 'd']) {
                const label = document.getElementById(`label-${idx}-${key}`);
                if (!label) continue;
                
                const input = label.querySelector('input');
                input.disabled = true;

                if (key === q.answer) {
                    label.style.borderColor = 'var(--secondary)';
                    label.style.background = 'rgba(16, 185, 129, 0.1)';
                } else if (selected === key) {
                    label.style.borderColor = 'var(--wrong)';
                    label.style.background = 'rgba(239, 68, 68, 0.1)';
                }
            }
        });

        isSubmitted = true;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-check-double me-2"></i> Completed';
        
        const prevScore = parseInt(totalScoreSpan.innerText) || 0;
        totalScoreSpan.innerText = prevScore + score;
        finalScoreDisplay.innerText = `Final Score: ${score} / ${total}`;
        
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    };
});
