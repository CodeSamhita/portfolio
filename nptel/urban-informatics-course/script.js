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

function makeGuidePanel(title, items, className) {
    const panel = makeElement("article", className || "guide-panel");
    panel.appendChild(makeElement("h5", null, title));
    panel.appendChild(makeList(items, "plain-list"));
    return panel;
}

function renderQuickTest(check) {
    const quickTest = makeElement("details", "quick-test");
    const summary = makeElement("summary", null, check.question);
    const answer = makeElement("p", "quick-answer", check.answer);

    quickTest.appendChild(makeElement("p", "quick-label", `Quick test: ${check.topic}`));
    quickTest.append(summary, answer);
    return quickTest;
}

function renderLearningGuide(guide, weekData) {
    const section = makeElement("section", "learning-summary");
    const header = makeElement("div", "learning-summary-header");
    const label = guide.label || `Week ${weekData.week} guide`;

    header.appendChild(makeElement("p", "panel-label", "Read this first"));
    header.appendChild(makeElement("h4", null, label));
    section.appendChild(header);
    section.appendChild(makeElement("p", "learning-summary-text", guide.summary));

    const grid = makeElement("div", "guide-grid");
    grid.appendChild(makeGuidePanel("Subject connection", guide.subjectLinks || []));
    grid.appendChild(makeGuidePanel("Internal topic links", guide.topicLinks || []));
    grid.appendChild(makeGuidePanel("Assignment signals", guide.assignmentSignals || weekData.assignmentFocus || [], "guide-panel guide-panel-strong"));
    section.appendChild(grid);

    if (guide.flow) {
        const flow = makeElement("p", "course-flow", guide.flow);
        section.appendChild(flow);
    }

    return section;
}

function renderAssignmentBridge(bridge) {
    const section = makeElement("section", "assignment-bridge");
    const header = makeElement("div", "learning-summary-header");
    header.appendChild(makeElement("p", "panel-label", "Assignment-first theory"));
    header.appendChild(makeElement("h4", null, bridge.title));
    section.appendChild(header);
    section.appendChild(makeElement("p", "learning-summary-text", bridge.thesis));

    const grid = makeElement("div", "bridge-grid");
    bridge.groups.forEach((group) => {
        const panel = makeElement("article", "bridge-panel");
        panel.appendChild(makeElement("h5", null, group.heading));
        panel.appendChild(makeElement("p", "bridge-subhead", "PDF questions test"));
        panel.appendChild(makeList(group.testedBy, "plain-list"));
        panel.appendChild(makeElement("p", "bridge-subhead", "Theory"));
        panel.appendChild(makeElement("p", "bridge-text", group.theory));
        panel.appendChild(makeElement("p", "bridge-subhead", "Answer logic"));
        panel.appendChild(makeElement("p", "bridge-text", group.answerLogic));
        grid.appendChild(panel);
    });

    section.appendChild(grid);
    return section;
}

function renderReferenceFramework(framework) {
    const section = makeElement("section", "reference-framework");
    const header = makeElement("div", "learning-summary-header");
    header.appendChild(makeElement("p", "panel-label", "Reference depth"));
    header.appendChild(makeElement("h4", null, framework.title));
    section.appendChild(header);

    const bookWrap = makeElement("div", "book-chip-wrap");
    framework.books.forEach((book) => {
        bookWrap.appendChild(makeElement("span", "book-chip", book));
    });
    section.appendChild(bookWrap);
    section.appendChild(makeList(framework.ideas, "plain-list reference-ideas"));

    const use = makeElement("p", "course-flow", framework.assignmentUse);
    section.appendChild(use);
    return section;
}

function renderAssignmentTheoryNotes(notes) {
    const section = makeElement("section", "assignment-theory");
    const header = makeElement("div", "learning-summary-header");
    header.appendChild(makeElement("p", "panel-label", "100 MCQ preparation"));
    header.appendChild(makeElement("h4", null, notes.title));
    section.appendChild(header);
    section.appendChild(makeElement("p", "learning-summary-text", notes.intro));

    const grid = makeElement("div", "theory-grid");
    notes.clusters.forEach((cluster) => {
        const panel = makeElement("article", "theory-panel");
        panel.appendChild(makeElement("h5", null, cluster.heading));
        panel.appendChild(makeElement("p", "theory-subhead", "What to learn"));
        panel.appendChild(makeList(cluster.mustKnow || [], "plain-list theory-list"));
        panel.appendChild(makeElement("p", "theory-subhead", "How to answer MCQs"));
        panel.appendChild(makeElement("p", "theory-rule", cluster.examLogic));
        panel.appendChild(makeElement("p", "theory-subhead", "Distractor traps"));
        panel.appendChild(makeList(cluster.traps || [], "plain-list theory-traps"));
        grid.appendChild(panel);
    });

    section.appendChild(grid);
    return section;
}

function renderOverview() {
    const about = document.getElementById("course-about");
    const instructor = document.getElementById("course-instructor");
    const facts = document.getElementById("course-facts");
    const studyGuide = document.getElementById("study-guide");
    const officialSource = document.getElementById("official-source");
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

    if (officialSource && meta.officialSource) {
        officialSource.appendChild(makeElement("p", "panel-label", meta.officialSource.sourceLabel));
        officialSource.appendChild(makeElement("h3", null, meta.officialSource.title));
        officialSource.appendChild(makeList(meta.officialSource.notes, "plain-list"));
        const sourceLink = makeElement("a", "button button-secondary", "Open official course preview");
        sourceLink.href = meta.officialSource.sourceUrl;
        sourceLink.target = "_blank";
        sourceLink.rel = "noreferrer";
        officialSource.appendChild(sourceLink);
    }
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
        const guide = window.weekGuides?.[weekData.week];
        const bridge = window.assignmentBridges?.[weekData.week];
        const referenceFramework = window.referenceFrameworks?.[weekData.week];
        const assignmentTheory = window.assignmentTheoryNotes?.[weekData.week];

        const topicGrid = makeElement("div", "topic-grid");
        const quickChecks = guide?.quickChecks || window.weekQuickChecks?.[weekData.week] || [];
        weekData.topics.forEach((topic, topicIndex) => {
            const card = makeElement("article", "topic-card");
            card.appendChild(makeElement("h4", null, topic.title));
            card.appendChild(makeList(topic.notes, "topic-list"));
            if (quickChecks[topicIndex]) {
                card.appendChild(renderQuickTest(quickChecks[topicIndex]));
            }
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
        if (guide) {
            body.appendChild(renderLearningGuide(guide, weekData));
        }
        if (assignmentTheory) {
            body.appendChild(renderAssignmentTheoryNotes(assignmentTheory));
        }
        if (bridge) {
            body.appendChild(renderAssignmentBridge(bridge));
        }
        if (referenceFramework) {
            body.appendChild(renderReferenceFramework(referenceFramework));
        }
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
