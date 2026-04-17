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
            item.className = 'set-item';
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
        userAnswers = {};
        isSubmitted = false;
        
        document.querySelectorAll('.set-item').forEach((item, index) => {
            item.classList.toggle('active', allSets[index].setId === setId);
        });
        
        // Show Summary instead of Quiz immediately
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
                li.innerText = item;
                summaryList.appendChild(li);
            });
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
            card.className = 'question-card';
            card.id = `card_${q.id}`;
            
            let optionsHtml = '';
            for (let [key, val] of Object.entries(q.options)) {
                optionsHtml += `
                    <label class="option-item" for="opt_${q.id}_${key}">
                        <input type="radio" name="${q.id}" id="opt_${q.id}_${key}" value="${key}" ${userAnswers[q.id] === key ? 'checked' : ''}>
                        <span class="option-text"><strong>${key.toUpperCase()}.</strong> ${val}</span>
                    </label>
                `;
            }

            card.innerHTML = `
                <div class="question-text">${idx + 1}. ${q.question}</div>
                <div class="options-list">
                    ${optionsHtml}
                </div>
                <div id="feedback_${q.id}" class="feedback-area d-none"></div>
            `;

            // Add event listener for radio change
            card.querySelectorAll('input').forEach(input => {
                input.onchange = (e) => {
                    if (isSubmitted) return;
                    userAnswers[q.id] = e.target.value;
                    updateProgress();
                    
                    // Visual feedback for selection
                    card.querySelectorAll('.option-item').forEach(label => {
                        label.classList.toggle('selected', label.querySelector('input').checked);
                    });
                };
            });

            quizForm.appendChild(card);
        });
    }

    function updateProgress() {
        const answered = Object.keys(userAnswers).length;
        const total = currentSet.questions.length;
        const pct = (answered / total) * 100;
        quizProgress.style.width = `${pct}%`;
    }

    submitBtn.onclick = () => {
        if (!currentSet || isSubmitted) return;
        
        let score = 0;
        const total = currentSet.questions.length;

        currentSet.questions.forEach(q => {
            const selected = userAnswers[q.id];
            const feedbackDiv = document.getElementById(`feedback_${q.id}`);
            feedbackDiv.classList.remove('d-none');
            
            const isCorrect = selected === q.answer;
            if (isCorrect) score++;

            const feedbackHtml = `
                <div class="${isCorrect ? 'correct-tag' : 'wrong-tag'}">
                    <i class="fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'} me-2"></i>
                    ${isCorrect ? 'Correct!' : 'Wrong. Correct: ' + q.answer.toUpperCase()}
                </div>
                <div class="explanation">${q.explanation}</div>
            `;
            feedbackDiv.innerHTML = feedbackHtml;
            
            // Highlight options
            const card = document.getElementById(`card_${q.id}`);
            card.querySelectorAll('.option-item').forEach(label => {
                const input = label.querySelector('input');
                if (input.value === q.answer) {
                    label.style.borderColor = 'var(--correct)';
                    label.style.background = 'rgba(16, 185, 129, 0.05)';
                } else if (input.checked && input.value !== q.answer) {
                    label.style.borderColor = 'var(--wrong)';
                    label.style.background = 'rgba(239, 68, 68, 0.05)';
                }
                input.disabled = true;
            });
        });

        isSubmitted = true;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-check-double me-2"></i> Completed';
        
        totalScoreSpan.innerText = parseInt(totalScoreSpan.innerText) + score;
        finalScoreDisplay.innerText = `Final Score: ${score} / ${total}`;
        
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    };
});
