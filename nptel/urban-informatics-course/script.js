function makeElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) {
        element.className = className;
    }
    if (text) {
        element.textContent = text;
    }
    return element;
}

function makeList(items, className) {
    const list = makeElement("ul", className);
    items.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        list.appendChild(listItem);
    });
    return list;
}

function renderOverview() {
    const about = document.getElementById("course-about");
    const instructor = document.getElementById("course-instructor");
    const facts = document.getElementById("course-facts");
    const studyGuide = document.getElementById("study-guide");
    const { meta } = courseData;

    about.appendChild(makeElement("p", "panel-label", "About the course"));
    about.appendChild(makeElement("h3", null, "Urban Informatics in one view"));
    about.appendChild(makeElement("p", "panel-text", meta.about));

    instructor.appendChild(makeElement("p", "panel-label", "Instructor"));
    instructor.appendChild(makeElement("h3", null, meta.instructor.name));
    instructor.appendChild(makeElement("p", "fact-inline", meta.instructor.affiliation));
    instructor.appendChild(makeElement("p", "panel-text", meta.instructor.bio));

    facts.appendChild(makeElement("p", "panel-label", "Who this course is for"));
    facts.appendChild(makeElement("h3", null, "Audience, prerequisites, and industry relevance"));

    const audienceBlock = makeElement("div", "fact-block");
    audienceBlock.appendChild(makeElement("h4", null, "Intended audience"));
    audienceBlock.appendChild(makeList(meta.audience, "plain-list"));

    const prereqBlock = makeElement("div", "fact-block");
    prereqBlock.appendChild(makeElement("h4", null, "Prerequisites"));
    prereqBlock.appendChild(makeElement("p", "panel-text", meta.prerequisites));

    const industryBlock = makeElement("div", "fact-block");
    industryBlock.appendChild(makeElement("h4", null, "Industry support"));
    industryBlock.appendChild(makeElement("p", "panel-text", meta.industry));

    facts.append(audienceBlock, prereqBlock, industryBlock);

    studyGuide.appendChild(makeElement("p", "panel-label", "How to use these notes"));
    studyGuide.appendChild(makeElement("h3", null, "Study path"));
    studyGuide.appendChild(makeList(meta.studyGuide, "plain-list"));
}

function renderReferences() {
    const referenceList = document.getElementById("reference-list");
    const fragment = document.createDocumentFragment();

    courseData.meta.references.forEach((reference, index) => {
        const card = makeElement("article", "ref-card");
        const count = makeElement("span", "ref-index", String(index + 1).padStart(2, "0"));
        const text = makeElement("p", "ref-text", reference);
        card.append(count, text);
        fragment.appendChild(card);
    });

    referenceList.replaceChildren(fragment);
}

function renderWeekNotes() {
    const container = document.getElementById("curriculum-tree");
    const fragment = document.createDocumentFragment();

    courseData.weeks.forEach((weekData, index) => {
        const details = makeElement("details", "week-note");
        details.id = `week-${weekData.week}`;
        details.open = index === 0;

        const summary = makeElement("summary", "week-summary");
        const badge = makeElement("span", "week-badge", `Week ${weekData.week}`);

        const headingWrap = makeElement("div", "week-heading");
        headingWrap.appendChild(makeElement("h3", null, weekData.title));
        headingWrap.appendChild(makeElement("p", "week-focus", weekData.focus));

        const meta = makeElement("span", "week-meta", `${weekData.topics.length} topic areas`);
        summary.append(badge, headingWrap, meta);

        const body = makeElement("div", "week-body");
        const overview = makeElement("p", "week-overview", weekData.overview);

        const topicGrid = makeElement("div", "topic-grid");
        weekData.topics.forEach((topic) => {
            const card = makeElement("article", "topic-card");
            card.appendChild(makeElement("h4", null, topic.title));
            card.appendChild(makeList(topic.notes, "topic-list"));
            topicGrid.appendChild(card);
        });

        const aside = makeElement("div", "week-aside");

        const assignmentPanel = makeElement("section", "note-box note-box-amber");
        assignmentPanel.appendChild(makeElement("h4", null, "Assignment lens"));
        assignmentPanel.appendChild(makeList(weekData.assignmentFocus, "plain-list"));

        const termsPanel = makeElement("section", "note-box");
        termsPanel.appendChild(makeElement("h4", null, "Key terms"));
        const chipWrap = makeElement("div", "chip-wrap");
        weekData.keyTerms.forEach((term) => {
            chipWrap.appendChild(makeElement("span", "chip", term));
        });
        termsPanel.appendChild(chipWrap);

        const referencePanel = makeElement("section", "note-box");
        referencePanel.appendChild(makeElement("h4", null, "Reference trail"));
        referencePanel.appendChild(makeList(weekData.references, "plain-list"));

        aside.append(assignmentPanel, termsPanel, referencePanel);
        body.append(overview, topicGrid, aside);

        details.append(summary, body);
        fragment.appendChild(details);
    });

    container.replaceChildren(fragment);
}

function setAllWeeks(isOpen) {
    document.querySelectorAll(".week-note").forEach((week) => {
        week.open = isOpen;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderOverview();
    renderReferences();
    renderWeekNotes();

    document.getElementById("expand-all")?.addEventListener("click", () => setAllWeeks(true));
    document.getElementById("collapse-all")?.addEventListener("click", () => setAllWeeks(false));
});
