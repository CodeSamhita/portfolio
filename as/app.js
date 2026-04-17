const BEGINNER_OVERRIDES = {
    'primary goal': 'GIS helps us test ideas on a map before anything changes on the ground. We can compare options, predict outcomes, and support better decisions.',
    'formal definition': 'GIS is a computer system that collects location-based data from many sources, stores it in an organized way, analyzes it, and shows the results clearly.',
    'data': 'Data is the raw material you collect. By itself, it is just facts waiting to be organized or analyzed.',
    'information': 'Information is what you get after data has been processed enough to answer a question.',
    'knowledge': 'Knowledge is the deeper understanding you get when GIS helps you answer bigger and more complicated questions using many kinds of data together.',
    'gnss global navigation satellite systems': 'GNSS is the family of satellite navigation systems, including GPS, that tells you where something is located.',
    'remote sensing': 'Remote sensing means collecting information about the Earth from a distance, usually through satellites or aircraft.',
    'gis': 'GIS is the platform where location data, map layers, and other information are brought together so they can be analyzed.',
    'key attributes of these three technologies': 'These three technologies work well together because all of them are digital, location-based, and useful in many different fields.',
    'example integration': 'Google Earth is a good example because it combines satellite images, elevation data, and location information in one easy tool.',
    'historical example analog gis': 'John Snow solved a cholera outbreak by comparing a street map, patient locations, and water pump locations to find the contaminated source.',
    'thematic layers': 'GIS stores different kinds of real-world information as separate map layers so you can turn them on, compare them, and analyze them together.',
    'abstract reality': 'A GIS map is not the real world itself. It is a simplified model of the real world made so that a problem becomes easier to study.',
    'proximity analysis': 'GIS is especially useful when the question depends on distance, such as what lies near a pollution source or inside a buffer zone.',
    'widespread implementation': 'GIS is used in everyday services like maps, transport, utilities, city planning, and environmental work.',
    'standard gis lifecycle': 'A GIS project usually starts with a problem, then gathers the right tools and clean data, performs analysis, and finally uses the result to support a decision.',
    'a functioning gis requires a continuous cycle of 5 major components': 'A GIS works properly only when five things come together: hardware, software, data, people, and methods.',
    'carpenter s toolbox analogy': 'The lecture compares GIS to carpentry: hardware and software are the tools, data is the raw material, and people plus methods are what turn everything into a useful result.',
    'hardware': 'Hardware means the physical devices that run GIS, from servers and desktops to tablets and phones.',
    'software': 'Software is the set of programs that lets you bring data in, organize it, analyze it, and show the result.',
    'input manipulation': 'This means bringing data into GIS and converting it into a form the system can use without changing the real meaning of the data.',
    'dbms database management system': 'A DBMS is the organized storage system that helps GIS save data properly and find it again quickly.',
    'pre processed convenience': 'Many modern data sources arrive already prepared, so users can spend less time fixing the data and more time doing analysis.',
    'visualization': 'Visualization means turning the analysis into maps, charts, or tables so people can understand the result quickly.',
    'evolution of interfaces': 'Older GIS software was harder to use because it relied on commands, while modern interfaces make the system easier for more people to learn.',
    'software extensions': 'Many GIS programs can be expanded with plugins or extra tools, which lets users add new features without rebuilding the whole system.',
    '1 spatial data answers where is it': 'Spatial data tells you where something is located on the Earth.',
    '2 non spatial tabular attribute data answers what is it': 'Attribute data tells you what something is by storing descriptions, names, values, and other details about it.',
    'dynamic linking': 'GIS can connect map features and table records, so clicking one can instantly show the matching item in the other.',
    'massive economics and time sprints': 'Large GIS projects can cost a lot and take time because they need strong computers, storage, software, good data, and skilled people.',
    'crucial software database bottlenecks': 'GIS data does not always move smoothly between different software tools and databases, so sharing and exporting can be difficult.',
    'error propagation danger': 'A small mistake in the data or analysis can spread into later steps and create bigger errors in the final result.',
    'digital data positively lacks scale': 'Digital map data does not have one fixed scale by itself. The scale becomes meaningful only when you display or print it.',
    'color is meaningless': 'In GIS analysis, the computer works with numeric values. The colors you see on the screen are mainly for human understanding.',
    'zero is an active metric': 'A value of zero is still real data. It does not automatically mean that the data is missing.',
    'absolutely never trace twice': 'Do not redraw features that already exist in digital form, because tracing them again can add new errors.',
    'historical paradigm': 'Earlier GIS work focused heavily on collecting, cleaning, and organizing data before any real analysis could begin.',
    'future ai real time tracking': 'Modern GIS is moving toward automation, cloud systems, real-time data, and AI-assisted analysis so users can spend less time preparing data and more time making decisions.',
    'gis stands for geographic information systems': 'GIS is a computer-based way to store map-related data, connect it to real places, and use it to answer location-based questions.',
    'in gis the endlessly complex real world is segmented into discrete manageable thematic layers': 'GIS makes the real world easier to study by splitting it into separate map layers, such as roads, rivers, land use, or boundaries.',
    'these layers accommodate different graphical types like point data line data polygon data grid rasters and image models': 'Different layers can store different kinds of map information, such as points, lines, areas, grid cells, or images.'
};

const RELATABLE_HINTS = [
    {
        pattern: /\bgis stands for\b|what is gis|formal definition/i,
        text: 'Think of GIS as a smart digital map that can also store facts, compare layers, and answer questions about places.'
    },
    {
        pattern: /\bgnss\b|\bgps\b|\bglonass\b|\bgalileo\b|\bnavic\b/i,
        text: 'Think of GNSS as the satellite-based system that tells you where something is.'
    },
    {
        pattern: /remote sensing|satellite images?|aerial/i,
        text: 'Think of remote sensing as observing the Earth from a distance, usually using satellites or aircraft.'
    },
    {
        pattern: /thematic layer|layers?|overlay/i,
        text: 'Think of map layers like transparent sheets stacked on top of each other, each showing one kind of information.'
    },
    {
        pattern: /\braster\b|\bpixel\b|\bgrid\b|\bcell\b/i,
        text: 'Think of raster data like a photo or graph paper made of many tiny squares.'
    },
    {
        pattern: /\bvector\b|\bpoint data\b|\bline data\b|\bpolygon\b/i,
        text: 'Think of vector data like drawing exact points, routes, and boundaries on a map.'
    },
    {
        pattern: /\btin\b|triangulated irregular network/i,
        text: 'Think of a TIN like a surface built by joining measured points with triangles.'
    },
    {
        pattern: /\bdem\b|digital elevation model/i,
        text: 'Think of a DEM as a digital height map of the land.'
    },
    {
        pattern: /database|dbms/i,
        text: 'Think of the database as the organized store room that helps GIS find the right record quickly.'
    },
    {
        pattern: /google earth|uber|ola|route/i,
        text: 'A familiar example is a map or cab app that combines location, routes, and live conditions to suggest the best choice.'
    }
];

const PHRASE_REPLACEMENTS = [
    {
        pattern: /\brefers specifically to\b/gi,
        replacement: 'means'
    },
    {
        pattern: /\brefers to\b/gi,
        replacement: 'means'
    },
    {
        pattern: /\bthe ultimate aim of\b/gi,
        replacement: 'the main goal of'
    },
    {
        pattern: /\bacquisition of\b/gi,
        replacement: 'collection of'
    },
    {
        pattern: /\bprocure\b/gi,
        replacement: 'get'
    },
    {
        pattern: /\bubiquitously\b/gi,
        replacement: 'widely'
    },
    {
        pattern: /\bpredominantly\b/gi,
        replacement: 'mainly'
    },
    {
        pattern: /\bgranular\b/gi,
        replacement: 'detailed'
    },
    {
        pattern: /\butilizing\b/gi,
        replacement: 'using'
    },
    {
        pattern: /\butilize\b/gi,
        replacement: 'use'
    },
    {
        pattern: /\btopographic surveying\b/gi,
        replacement: 'land surveying'
    },
    {
        pattern: /\btethered to real-world coordinates\b/gi,
        replacement: 'linked to real-world coordinates'
    },
    {
        pattern: /\bmodular analysis\b/gi,
        replacement: 'step-by-step analysis'
    },
    {
        pattern: /\b1:1 replica\b/gi,
        replacement: 'perfect copy'
    },
    {
        pattern: /\bcomputer-based information system designed to accept large volumes of spatial data from variety of sources, efficiently store, retrieve, analyze, model, and display outputs according to user specifications\.?/gi,
        replacement: 'a computer system that collects location-based data from many sources, stores it, analyzes it, and shows the results in the form the user needs.'
    },
    {
        pattern: /\bthe acquisition of environmental and topographic data through satellite or aerial feeds\.?/gi,
        replacement: 'collecting information about the land and environment from satellites or aircraft.'
    },
    {
        pattern: /\bsegments the infinitely complex real world into distinct digital 'layers'\b/gi,
        replacement: 'breaks the real world into separate digital map layers'
    },
    {
        pattern: /\bneighborhood and buffer analysis\b/gi,
        replacement: 'nearby-area and distance analysis'
    }
];

const FILLER_WORDS = new Set([
    'absolutely',
    'actively',
    'aggressively',
    'almost',
    'automatically',
    'basically',
    'completely',
    'critically',
    'deeply',
    'directly',
    'dynamically',
    'effectively',
    'entirely',
    'especially',
    'essentially',
    'exactly',
    'explicitly',
    'extremely',
    'fully',
    'functionally',
    'fundamentally',
    'generally',
    'heavily',
    'highly',
    'immediately',
    'inherently',
    'intensely',
    'intrinsically',
    'largely',
    'literally',
    'mainly',
    'massively',
    'mostly',
    'natively',
    'naturally',
    'perfectly',
    'physically',
    'positively',
    'practically',
    'precisely',
    'predominantly',
    'primarily',
    'pure',
    'purely',
    'radically',
    'really',
    'seamlessly',
    'severely',
    'significantly',
    'simply',
    'solely',
    'specifically',
    'strictly',
    'structurally',
    'thoroughly',
    'totally',
    'truly',
    'typically',
    'ultimately',
    'uniquely',
    'utterly',
    'virtually',
    'whatsoever'
]);

const NOTE_IMAGE_LOOKUP = {
    lecture_01: {
        0: [
            {
                src: 'assets/lecture-images/lecture_01/roger-tomlinson.png',
                alt: 'Roger Tomlinson, often called the father of GIS',
                caption: 'Roger Tomlinson is introduced in the lecture as the person who first developed the GIS concept into a working system.'
            }
        ],
        1: [
            {
                src: 'assets/lecture-images/lecture_01/watershed-modeling.png',
                alt: 'Two watershed scenarios showing different deforestation locations',
                caption: 'This figure supports the main idea that GIS can compare planned scenarios and predict how different choices may change the outcome.'
            },
            {
                src: 'assets/lecture-images/lecture_01/what-is-gis.png',
                alt: 'Slide breaking GIS into geographic and information system',
                caption: 'The lecture explains GIS by separating the term into two parts: geographic, which means place-based, and information system, which means computer-supported data handling.'
            },
            {
                src: 'assets/lecture-images/lecture_01/gis-definition.png',
                alt: 'Formal slide definition of geographic information systems',
                caption: 'This is the formal classroom definition of GIS that the notes simplify into beginner-friendly language.'
            }
        ],
        2: [
            {
                src: 'assets/lecture-images/lecture_01/data-vs-information.png',
                alt: 'Slide explaining data versus information',
                caption: 'The lecture distinguishes raw data from useful information by showing that data becomes meaningful only after processing and analysis.'
            },
            {
                src: 'assets/lecture-images/lecture_01/data-to-knowledge.png',
                alt: 'Diagram showing data to information to GIS to knowledge',
                caption: 'This diagram captures the lecture flow: raw data becomes information, and GIS helps turn that into higher-level understanding or knowledge.'
            }
        ],
        3: [
            {
                src: 'assets/lecture-images/lecture_01/gis-gnss-remote-sensing.png',
                alt: 'Slide stating GIS, GPS and remote sensing are generic, spatial and digital technologies',
                caption: 'This slide supports the section that explains why GIS, GNSS and remote sensing work so well together.'
            }
        ],
        4: [
            {
                src: 'assets/lecture-images/lecture_01/john-snow-cholera.png',
                alt: 'John Snow cholera map showing deaths and water pumps',
                caption: 'The John Snow cholera map is the classic example used in the lecture to show how combining layers can reveal the source of a problem.'
            },
            {
                src: 'assets/lecture-images/lecture_01/gis-historical-background.png',
                alt: 'Slide showing GIS historical background from digital cartography, CAD and database systems',
                caption: 'This slide explains that GIS did not appear in isolation. It developed by combining earlier ideas from cartography, CAD and database systems.'
            },
            {
                src: 'assets/lecture-images/lecture_01/gis-layers-overview.png',
                alt: 'Overview showing spatial data organized into layers',
                caption: 'This figure shows the layer idea directly: different kinds of real-world information are stored separately and then studied together.'
            },
            {
                src: 'assets/lecture-images/lecture_01/gis-data-layers.png',
                alt: 'Illustration of multiple data layers becoming integrated data',
                caption: 'The lecture uses layered diagrams like this to explain how GIS builds an integrated view from separate data sources.'
            },
            {
                src: 'assets/lecture-images/lecture_01/simplified-world-model.png',
                alt: 'Simplified world model showing GIS from real world to decision making',
                caption: 'This image reinforces the idea that GIS stores a simplified model of reality so analysis and decision making become possible.'
            }
        ],
        5: [
            {
                src: 'assets/lecture-images/lecture_01/data-integration-machine.png',
                alt: 'Diagram showing the GIS data integration machine',
                caption: 'This diagram shows how GIS brings together data conversion, raster tools, attributes and interface tools to produce outputs like maps, reports and queries.'
            },
            {
                src: 'assets/lecture-images/lecture_01/gis-used-for.png',
                alt: 'Slide listing who uses GIS and what it is used for',
                caption: 'The lecture uses this slide to show that GIS is useful across government, industry and academic work in many application areas.'
            },
            {
                src: 'assets/lecture-images/lecture_01/gis-project-stages.png',
                alt: 'Stages in a GIS project',
                caption: 'This workflow matches the project lifecycle section: define the problem, gather the tools and data, analyze, and present the result.'
            }
        ]
    }
};

document.addEventListener('DOMContentLoaded', async () => {
    const appShellEl = document.getElementById('app-shell');
    const lectureListEl = document.getElementById('lecture-list');
    const contentContainerEl = document.getElementById('content-container');
    const lectureCountEl = document.getElementById('lecture-count');
    const currentLectureLabelEl = document.getElementById('current-lecture-label');
    const searchSummaryEl = document.getElementById('search-summary');
    const mainContentEl = document.querySelector('.mainContent');
    const menuToggleEl = document.getElementById('menu-toggle');
    const menuCloseEl = document.getElementById('menu-close');
    const navOverlayEl = document.getElementById('nav-overlay');
    const desktopSearchEl = document.getElementById('lecture-search');
    const mobileSearchEl = document.getElementById('lecture-search-mobile');
    const desktopClearEl = document.getElementById('search-clear');
    const mobileClearEl = document.getElementById('search-clear-mobile');
    const desktopMediaQuery = window.matchMedia('(min-width: 901px)');

    const SEARCH_STORAGE_KEY = 'lectureSearchTerm';
    const SCROLL_STORAGE_KEY = 'lectureStreamScroll';

    let allLectures = [];
    let visibleLectures = [];
    let activeLectureSlug = '';
    let searchTerm = '';
    let scrollTicking = false;

    const toggleNavigation = (shouldOpen) => {
        if (!appShellEl) {
            return;
        }

        appShellEl.classList.toggle('nav-open', shouldOpen);
    };

    const openNavigation = () => toggleNavigation(true);
    const closeNavigation = () => toggleNavigation(false);

    if (menuToggleEl) {
        menuToggleEl.addEventListener('click', openNavigation);
    }

    if (menuCloseEl) {
        menuCloseEl.addEventListener('click', closeNavigation);
    }

    if (navOverlayEl) {
        navOverlayEl.addEventListener('click', closeNavigation);
    }

    const handleDesktopLayout = (event) => {
        if (event.matches) {
            closeNavigation();
        }
    };

    if (typeof desktopMediaQuery.addEventListener === 'function') {
        desktopMediaQuery.addEventListener('change', handleDesktopLayout);
    } else if (typeof desktopMediaQuery.addListener === 'function') {
        desktopMediaQuery.addListener(handleDesktopLayout);
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeNavigation();
        }
    });

    const handleSearchInput = (event) => {
        applySearch(event.target.value);
    };

    [desktopSearchEl, mobileSearchEl].forEach((inputEl) => {
        if (inputEl) {
            inputEl.addEventListener('input', handleSearchInput);
        }
    });

    [desktopClearEl, mobileClearEl].forEach((buttonEl) => {
        if (buttonEl) {
            buttonEl.addEventListener('click', () => {
                applySearch('');
                if (desktopSearchEl && !desktopMediaQuery.matches) {
                    if (mobileSearchEl) {
                        mobileSearchEl.focus();
                    }
                } else {
                    if (desktopSearchEl) {
                        desktopSearchEl.focus();
                    }
                }
            });
        }
    });

    try {
        allLectures = normalizeLectures(await loadLectureData());
    } catch (error) {
        renderError(
            'Error Loading Data',
            'Could not load the merged lecture data. Make sure lectures.json or data.js is available.'
        );
        return;
    }

    if (!allLectures.length) {
        renderError(
            'No Lecture Data Found',
            'The merged lecture file is empty. Add lecture JSON files and regenerate the combined data.'
        );
        return;
    }

    searchTerm = localStorage.getItem(SEARCH_STORAGE_KEY) || '';
    syncSearchInputs(searchTerm);
    applySearch(searchTerm, true);

    mainContentEl.addEventListener('scroll', () => {
        localStorage.setItem(SCROLL_STORAGE_KEY, String(mainContentEl.scrollTop));

        if (!scrollTicking) {
            scrollTicking = true;
            window.requestAnimationFrame(() => {
                updateCurrentLectureFromScroll();
                scrollTicking = false;
            });
        }
    });

    function applySearch(rawValue, isInitialLoad = false) {
        searchTerm = rawValue.trim();
        localStorage.setItem(SEARCH_STORAGE_KEY, searchTerm);
        syncSearchInputs(searchTerm);

        const queryTokens = buildQueryTokens(searchTerm);
        visibleLectures = buildVisibleLectures(allLectures, queryTokens);

        renderLectureList(visibleLectures, queryTokens);
        renderLectureStream(visibleLectures, queryTokens);
        updateSearchSummary(visibleLectures, queryTokens);

        if (!visibleLectures.length) {
            activeLectureSlug = '';
            currentLectureLabelEl.textContent = searchTerm
                ? `No results for "${searchTerm}"`
                : 'All lectures';
            document.title = 'NPTEL Geography Notes';
            mainContentEl.scrollTop = 0;
            return;
        }

        if (isInitialLoad && !searchTerm) {
            const savedScroll = Number.parseInt(localStorage.getItem(SCROLL_STORAGE_KEY), 10);
            requestAnimationFrame(() => {
                mainContentEl.scrollTop = Number.isFinite(savedScroll) ? savedScroll : 0;
                updateCurrentLectureFromScroll();
            });
            return;
        }

        mainContentEl.scrollTop = 0;
        localStorage.setItem(SCROLL_STORAGE_KEY, '0');
        updateCurrentLectureFromScroll();
    }

    function renderLectureList(items, queryTokens) {
        lectureListEl.innerHTML = '';

        if (!items.length) {
            const emptyEl = document.createElement('div');
            emptyEl.className = 'sidebarEmpty';
            emptyEl.textContent = 'No lectures match that keyword yet.';
            lectureListEl.appendChild(emptyEl);
            return;
        }

        items.forEach((lecture) => {
            const buttonEl = document.createElement('button');
            buttonEl.type = 'button';
            buttonEl.className = 'lecture-item';
            buttonEl.dataset.slug = lecture.slug;

            const labelEl = document.createElement('span');
            labelEl.className = 'lecture-item-label';
            labelEl.textContent = lecture.lectureLabel;

            const topicEl = document.createElement('span');
            topicEl.className = 'lecture-item-topic';
            topicEl.innerHTML = highlightText(lecture.topicName, queryTokens);

            const metaEl = document.createElement('span');
            metaEl.className = 'lecture-item-meta';
            metaEl.textContent = queryTokens.length
                ? `${lecture.displayNotes.length} matching sections`
                : `${lecture.displayNotes.length} sections`;

            buttonEl.append(labelEl, topicEl, metaEl);
            buttonEl.addEventListener('click', () => scrollToLecture(lecture.slug));

            lectureListEl.appendChild(buttonEl);
        });
    }

    function renderLectureStream(items, queryTokens) {
        if (!items.length) {
            contentContainerEl.innerHTML = `
                <section class="streamHero">
                    <p class="lecture-eyebrow">Keyword Search</p>
                    <h1 class="lecture-title">No matching lectures found</h1>
                    <p class="lecture-meta">Try a broader term or clear the search to return to the full lecture stream.</p>
                </section>
            `;
            return;
        }

        const lectureCardsHtml = items.map((lecture) => renderLectureSection(lecture, queryTokens)).join('');

        contentContainerEl.innerHTML = `
            <section class="streamHero">
                <p class="lecture-eyebrow">Continuous Lecture Stream</p>
                <h1 class="lecture-title">Scroll through every lecture in one place</h1>
                <p class="lecture-meta">${queryTokens.length
                    ? `Showing ${items.length} matching lecture collections for "${escapeHtml(searchTerm)}".`
                    : `Browse ${items.length} lecture collections continuously, or use keyword search to jump straight to what you need.`}</p>
            </section>
            <section class="lectureStream">${lectureCardsHtml}</section>
        `;
    }

    function renderLectureSection(lecture, queryTokens) {
        const notesHtml = lecture.displayNotes.map((note, noteIndex) => {
            const structuredPoints = Array.isArray(note.points)
                ? note.points.map(parseNotePoint).filter(Boolean)
                : [];
            const pointTree = buildPointTree(structuredPoints);
            const noteImages = getNoteImagesForSection(lecture.slug, note.sourceIndex);

            const pointsHtml = pointTree.length
                ? renderStructuredPoints(note, pointTree, queryTokens, noteIndex)
                : '<p class="note-empty-copy">No detailed points were captured for this section.</p>';

            const timestampHtml = note.timestamp
                ? `<span class="note-chip">${highlightText(note.timestamp, queryTokens)}</span>`
                : '';

            const noteSummary = structuredPoints.length
                ? highlightText(buildNoteStarterSummary(note.heading, structuredPoints, lecture.topicName), queryTokens)
                : '';

            return `
                <article class="note-card note-card-tree">
                    <div class="note-card-top">
                        <div class="note-meta">
                            <span class="note-chip note-chip-soft">Section ${note.sourceIndex + 1}</span>
                            ${timestampHtml}
                            <span class="note-chip note-chip-quiet">${structuredPoints.length} points</span>
                            ${noteImages.length ? `<span class="note-chip note-chip-quiet">${noteImages.length} figures</span>` : ''}
                        </div>
                    </div>
                    ${renderNoteImages(noteImages, queryTokens)}
                    ${renderSectionTreeShell(note, noteSummary, pointsHtml, queryTokens, noteIndex)}
                </article>
            `;
        }).join('');

        const resultCopy = queryTokens.length && lecture.displayNotes.length !== lecture.notes.length
            ? `<p class="lecture-section-meta">Showing ${lecture.displayNotes.length} matching sections from ${lecture.notes.length} total.</p>`
            : `<p class="lecture-section-meta">${lecture.notes.length} structured sections in this lecture collection.</p>`;

        return `
            <section class="lecture-section" id="lecture-section-${escapeAttribute(lecture.slug)}" data-slug="${escapeAttribute(lecture.slug)}">
                <header class="lecture-hero lecture-hero-compact">
                    <p class="lecture-eyebrow">${escapeHtml(lecture.lectureLabel)}</p>
                    <h2 class="lecture-title lecture-title-compact">${highlightText(lecture.topicName, queryTokens)}</h2>
                    ${resultCopy}
                </header>
                <div class="note-grid">
                    ${notesHtml}
                </div>
            </section>
        `;
    }

    function updateSearchSummary(items, queryTokens) {
        const lectureCount = items.length;
        const sectionCount = items.reduce((total, lecture) => total + lecture.displayNotes.length, 0);

        if (!queryTokens.length) {
            lectureCountEl.textContent = `${allLectures.length} lecture collections`;
            searchSummaryEl.textContent = `Search across ${allLectures.length} lectures and ${sectionCount} note sections.`;
            return;
        }

        lectureCountEl.textContent = `${lectureCount} filtered lecture collections`;
        searchSummaryEl.textContent = `Found ${sectionCount} matching sections across ${lectureCount} lectures.`;
    }

    function updateCurrentLectureFromScroll() {
        const sections = Array.from(contentContainerEl.querySelectorAll('.lecture-section'));

        if (!sections.length) {
            return;
        }

        const mainBounds = mainContentEl.getBoundingClientRect();
        let currentSection = sections[0];

        sections.forEach((sectionEl) => {
            const sectionTop = sectionEl.getBoundingClientRect().top - mainBounds.top;
            if (sectionTop <= 150) {
                currentSection = sectionEl;
            }
        });

        const currentSlug = currentSection.dataset.slug || '';
        const currentLecture = visibleLectures.find((lecture) => lecture.slug === currentSlug) || visibleLectures[0];

        if (!currentLecture) {
            return;
        }

        activeLectureSlug = currentSlug;
        updateActiveLectureState();
        currentLectureLabelEl.textContent = `${currentLecture.lectureLabel} | ${currentLecture.topicName}`;
        document.title = `${currentLecture.lectureLabel} | ${currentLecture.topicName}`;
    }

    function updateActiveLectureState() {
        Array.from(lectureListEl.querySelectorAll('.lecture-item')).forEach((itemEl) => {
            itemEl.classList.toggle('active', itemEl.dataset.slug === activeLectureSlug);
        });
    }

    function scrollToLecture(slug) {
        const targetEl = document.getElementById(`lecture-section-${slug}`);
        if (!targetEl) {
            return;
        }

        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        activeLectureSlug = slug;
        updateActiveLectureState();
        updateCurrentLectureFromScroll();
        closeNavigation();
    }

    function syncSearchInputs(value) {
        [desktopSearchEl, mobileSearchEl].forEach((inputEl) => {
            if (inputEl && inputEl.value !== value) {
                inputEl.value = value;
            }
        });
    }

    function renderError(title, message) {
        contentContainerEl.innerHTML = `
            <div class="emptyState">
                <h2>${escapeHtml(title)}</h2>
                <p>${escapeHtml(message)}</p>
            </div>
        `;
    }
});

async function loadLectureData() {
const fallbackData = Array.isArray(window.notesData) ? window.notesData : null;

    if (window.location.protocol !== 'file:') {
        try {
            const response = await fetch('./lectures.json', { cache: 'no-store' });

            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            if (fallbackData) {
                return fallbackData;
            }

            throw error;
        }
    }

    if (fallbackData) {
        return fallbackData;
    }

    throw new Error('No lecture data source available.');
}

function normalizeLectures(rawLectures) {
    if (!Array.isArray(rawLectures)) {
        return [];
    }

    return rawLectures
        .map((lecture, index) => {
            const normalizedTitle = typeof lecture.title === 'string'
                ? lecture.title.replace(/\s+/g, ' ').trim()
                : '';
            const derivedMeta = deriveLectureMeta(normalizedTitle);
            const notes = Array.isArray(lecture.notes) ? lecture.notes : [];
            const fallbackLectureNumber = Number.parseInt(String(lecture.sortOrder), 10);

            return {
                ...lecture,
                sortOrder: Number.isFinite(fallbackLectureNumber)
                    ? fallbackLectureNumber
                    : (derivedMeta.sortOrder !== null && derivedMeta.sortOrder !== undefined ? derivedMeta.sortOrder : index + 1),
                lectureLabel: lecture.lectureLabel || derivedMeta.lectureLabel || `Lecture ${String(index + 1).padStart(2, '0')}`,
                topicName: lecture.topicName || derivedMeta.topicName || normalizedTitle || `Lecture ${index + 1}`,
                title: normalizedTitle || lecture.topicName || `Lecture ${index + 1}`,
                notes
            };
        })
        .sort((left, right) => left.sortOrder - right.sortOrder);
}

function deriveLectureMeta(title) {
    const match = title.match(/^(Lectures?\s*-?\s*\d+(?:\s*(?:to|-)\s*\d+)?)\s*[:\-]\s*(.+)$/i);

    if (!match) {
        const numericMatch = title.match(/\d+/);
        return {
            lectureLabel: '',
            topicName: title,
            sortOrder: numericMatch ? Number.parseInt(numericMatch[0], 10) : null
        };
    }

    const lectureLabel = match[1]
        .replace(/^Lecture\s*-\s*/i, 'Lecture ')
        .replace(/^Lectures\s*-\s*/i, 'Lectures ')
        .replace(/\s+/g, ' ')
        .trim();

    const numericMatch = lectureLabel.match(/\d+/);

    return {
        lectureLabel,
        topicName: match[2].trim(),
        sortOrder: numericMatch ? Number.parseInt(numericMatch[0], 10) : null
    };
}

function buildVisibleLectures(lectures, queryTokens) {
    if (!queryTokens.length) {
        return lectures.map((lecture) => ({
            ...lecture,
            displayNotes: lecture.notes.map((note, noteIndex) => ({
                ...note,
                sourceIndex: noteIndex
            }))
        }));
    }

    return lectures.reduce((results, lecture) => {
        const lectureText = [lecture.lectureLabel, lecture.topicName, lecture.title].join(' ');
        const lectureMatches = includesAllTokens(lectureText, queryTokens);
        const matchingNotes = lecture.notes.reduce((notes, note, noteIndex) => {
            const parsedPoints = Array.isArray(note.points) ? note.points.map(parseNotePoint).filter(Boolean) : [];
            const beginnerSearchText = parsedPoints
                .map((point) => `${buildBeginnerExplanation(point)} ${findRelatableHint(point)}`)
                .join(' ');
            const noteText = [note.heading, note.timestamp, ...(Array.isArray(note.points) ? note.points : []), beginnerSearchText].join(' ');

            if (lectureMatches || includesAllTokens(noteText, queryTokens)) {
                notes.push({
                    ...note,
                    sourceIndex: noteIndex
                });
            }

            return notes;
        }, []);

        if (lectureMatches || matchingNotes.length) {
            results.push({
                ...lecture,
                displayNotes: lectureMatches && !matchingNotes.length
                    ? lecture.notes.map((note, noteIndex) => ({
                        ...note,
                        sourceIndex: noteIndex
                    }))
                    : matchingNotes
            });
        }

        return results;
    }, []);
}

function buildQueryTokens(value) {
    return value
        .toLowerCase()
        .split(/\s+/)
        .map((token) => token.trim())
        .filter(Boolean);
}

function includesAllTokens(value, tokens) {
    const normalizedValue = String(value || '').toLowerCase();
    return tokens.every((token) => normalizedValue.includes(token));
}

function parseNotePoint(point) {
    const cleanPoint = normalizeNoteText(point);

    if (!cleanPoint) {
        return null;
    }

    if (/:\s*$/.test(cleanPoint)) {
        return {
            type: 'group_intro',
            text: cleanPoint.replace(/:\s*$/, ''),
            original: cleanPoint
        };
    }

    const equalsMatch = cleanPoint.match(/^(?:[-*]\s*)?(.{1,100}?)\s*=\s*(.+)$/);
    if (equalsMatch) {
        return {
            type: 'definition',
            label: normalizeNoteText(equalsMatch[1]),
            detail: normalizeNoteText(equalsMatch[2]),
            original: cleanPoint
        };
    }

    const directSteps = extractNumberedSteps(cleanPoint);
    if (directSteps.length >= 2) {
        return {
            type: 'steps',
            label: 'Process',
            steps: directSteps,
            original: cleanPoint
        };
    }

    const splitMatch = cleanPoint.match(/^([^:]{1,120}):\s+(.+)$/);
    if (splitMatch) {
        const label = normalizeNoteText(splitMatch[1]);
        const detail = normalizeNoteText(splitMatch[2]);
        const detailSteps = extractNumberedSteps(detail);

        if (detailSteps.length >= 2) {
            return {
                type: 'steps',
                label: label,
                steps: detailSteps,
                original: cleanPoint
            };
        }

        return {
            type: 'definition',
            label: label,
            detail: detail,
            original: cleanPoint
        };
    }

    return {
        type: 'statement',
        text: cleanPoint,
        original: cleanPoint
    };
}

function extractNumberedSteps(value) {
    const normalizedValue = normalizeNoteText(value).replace(/\s*->\s*/g, ' ');
    const stepMatches = normalizedValue.match(/\d+\)\s*.*?(?=(?:\s+\d+\)\s)|$)/g);

    if (!stepMatches || stepMatches.length < 2) {
        return [];
    }

    return stepMatches
        .map((step) => step.replace(/^\d+\)\s*/, '').trim())
        .filter(Boolean);
}

function buildPointTree(points) {
    const nodes = [];
    let index = 0;

    while (index < points.length) {
        const point = points[index];

        if (point.type === 'group_intro') {
            const children = [];
            let lookAhead = index + 1;

            while (lookAhead < points.length && isTreeChildPoint(points[lookAhead])) {
                children.push(points[lookAhead]);
                lookAhead += 1;
            }

            if (children.length) {
                nodes.push({
                    kind: 'group',
                    point,
                    children
                });
                index = lookAhead;
                continue;
            }
        }

        nodes.push({
            kind: 'point',
            point
        });
        index += 1;
    }

    return nodes;
}

function isTreeChildPoint(point) {
    if (!point || point.type === 'group_intro') {
        return false;
    }

    const original = normalizeNoteText(point.original || '');
    return /^[-*]\s+/.test(original) || /^\d+[.)]\s+/.test(original) || /^[ivxlcdm]+\.\s+/i.test(original);
}

function renderStructuredPoints(note, nodes, queryTokens, noteIndex) {
    const headingText = note.heading || `Section ${noteIndex + 1}`;

    return `
        <div class="topic-tree">
            <div class="tree-root-card">
                <p class="tree-node-kicker">Topic</p>
                <h3 class="tree-node-title">${highlightText(headingText, queryTokens)}</h3>
            </div>
            <ul class="tree-list" role="list">
                ${nodes.map((node, index) => renderTreeNode(node, queryTokens, index)).join('')}
            </ul>
        </div>
    `;
}

function renderSectionTreeShell(note, noteSummary, pointsHtml, queryTokens, noteIndex) {
    return `
        ${noteSummary ? `<p class="note-summary note-summary-tree">${noteSummary}</p>` : ''}
        ${pointsHtml}
    `;
}

function renderTreeNode(node, queryTokens, index) {
    if (node.kind === 'group') {
        return `
            <li class="tree-branch tree-branch-group">
                <div class="tree-node-card tree-node-card-group">
                    <p class="tree-node-kicker">Subtopic Group</p>
                    <p class="tree-node-title tree-node-title-small">${highlightText(buildGroupNodeTitle(node.point), queryTokens)}</p>
                    ${renderRelatableHint(node.point, queryTokens)}
                    ${renderOriginalNote(node.point, queryTokens)}
                </div>
                <ul class="tree-sublist" role="list">
                    ${node.children.map((childPoint, childIndex) => renderTreeLeaf(childPoint, queryTokens, childIndex)).join('')}
                </ul>
            </li>
        `;
    }

    return renderTreeLeaf(node.point, queryTokens, index);
}

function renderTreeLeaf(point, queryTokens, index) {
    const nodeTitle = getTreeLeafTitle(point, index);
    const nodeLabel = getTreeLeafLabel(point);

    if (point.type === 'definition') {
        return `
            <li class="tree-branch tree-branch-definition">
                <div class="tree-node-card tree-node-card-definition">
                    <p class="tree-node-kicker">${escapeHtml(nodeLabel)}</p>
                    <p class="tree-node-title tree-node-title-small">${highlightText(nodeTitle, queryTokens)}</p>
                    <p class="tree-node-text">${highlightText(buildBeginnerExplanation(point), queryTokens)}</p>
                    ${renderRelatableHint(point, queryTokens)}
                    ${renderOriginalNote(point, queryTokens)}
                </div>
            </li>
        `;
    }

    if (point.type === 'steps') {
        return `
            <li class="tree-branch tree-branch-steps">
                <div class="tree-node-card tree-node-card-steps">
                    <p class="tree-node-kicker">${escapeHtml(nodeLabel)}</p>
                    <p class="tree-node-title tree-node-title-small">${highlightText(nodeTitle, queryTokens)}</p>
                    <ol class="point-steps point-steps-tree">
                        ${point.steps.map((step) => `<li>${highlightText(simplifyProse(step), queryTokens)}</li>`).join('')}
                    </ol>
                    ${renderRelatableHint(point, queryTokens)}
                    ${renderOriginalNote(point, queryTokens)}
                </div>
            </li>
        `;
    }

    return `
        <li class="tree-branch tree-branch-statement">
            <div class="tree-node-card tree-node-card-statement">
                <p class="tree-node-kicker">${escapeHtml(nodeLabel)}</p>
                ${point.type === 'group_intro' ? `<p class="tree-node-title tree-node-title-small">${highlightText(buildBeginnerExplanation(point), queryTokens)}</p>` : ''}
                ${point.type !== 'group_intro' ? `<p class="tree-node-text">${highlightText(buildBeginnerExplanation(point), queryTokens)}</p>` : ''}
                ${renderRelatableHint(point, queryTokens)}
                ${renderOriginalNote(point, queryTokens)}
            </div>
        </li>
    `;
}

function getTreeLeafTitle(point, index) {
    if (point.type === 'definition' || point.type === 'steps') {
        return stripOuterQuotes(point.label || `Subtopic ${index + 1}`);
    }

    return `Key idea ${index + 1}`;
}

function getTreeLeafLabel(point) {
    if (point.type === 'definition') {
        return 'Subtopic';
    }

    if (point.type === 'steps') {
        return 'Process';
    }

    return 'Key idea';
}

function buildGroupNodeTitle(point) {
    return capitalizeSentence(point.text || buildBeginnerExplanation(point));
}

function getNoteImagesForSection(lectureSlug, sectionIndex) {
    const lectureImages = NOTE_IMAGE_LOOKUP[lectureSlug];

    if (!lectureImages || !lectureImages[sectionIndex]) {
        return [];
    }

    return lectureImages[sectionIndex];
}

function renderNoteImages(images, queryTokens) {
    if (!images || !images.length) {
        return '';
    }

    return `
        <div class="note-figure-grid">
            ${images.map((image) => `
                <figure class="note-figure">
                    <img class="note-figure-image" src="${escapeAttribute(image.src)}" alt="${escapeAttribute(image.alt)}" loading="lazy">
                    <figcaption class="note-figure-caption">${highlightText(image.caption, queryTokens)}</figcaption>
                </figure>
            `).join('')}
        </div>
    `;
}

function normalizeNoteText(value) {
    return String(value || '').replace(/\s+/g, ' ').trim();
}

function buildBeginnerExplanation(point) {
    if (!point) {
        return '';
    }

    const lookupKey = toLookupKey(point.label || point.text || point.original || '');
    const originalKey = toLookupKey(point.original || '');
    const override = BEGINNER_OVERRIDES[lookupKey] || BEGINNER_OVERRIDES[originalKey];

    if (override) {
        return override;
    }

    if (point.type === 'definition') {
        return simplifyDefinitionDetail(point.label, point.detail);
    }

    if (point.type === 'steps') {
        return simplifyProse(point.steps.join('. '));
    }

    return simplifyProse(point.text);
}

function simplifyDefinitionDetail(label, detail) {
    let simplifiedDetail = simplifyProse(detail);

    simplifiedDetail = simplifiedDetail
        .replace(/^(means|is|are)\s+/i, '')
        .replace(/^the main goal of\s+/i, 'the main goal is to ')
        .replace(/^a computer system\s+/i, 'a computer system ')
        .trim();

    if (/^['"]?geographic['"]?$/i.test(label)) {
        return 'This simply means the data is tied to a real place on Earth using coordinates or map position.';
    }

    if (/^['"]?information system['"]?$/i.test(label)) {
        return 'This is the computer side of GIS: storing data, organizing it, analyzing it, and showing the result clearly.';
    }

    if (/goal/i.test(label)) {
        return capitalizeSentence(simplifiedDetail);
    }

    if (/example/i.test(label)) {
        return `A simple example is ${lowercaseFirst(simplifiedDetail)}`;
    }

    if (/attributes?/i.test(label)) {
        return `The main things to remember are ${lowercaseFirst(simplifiedDetail)}`;
    }

    if (/definition/i.test(label)) {
        return `In simple words, ${lowercaseFirst(simplifiedDetail)}`;
    }

    return capitalizeSentence(simplifiedDetail);
}

function simplifyProse(text) {
    let simplified = normalizeNoteText(text);

    if (!simplified) {
        return '';
    }

    simplified = stripFillerWords(simplified);

    PHRASE_REPLACEMENTS.forEach((replacementRule) => {
        simplified = simplified.replace(replacementRule.pattern, replacementRule.replacement);
    });

    simplified = simplified
        .replace(/\s*->\s*/g, ', then ')
        .replace(/\s*;\s*/g, '. ')
        .replace(/\s{2,}/g, ' ')
        .replace(/\.\./g, '.')
        .trim();

    if (/^GIS stands for Geographic Information Systems\.?$/i.test(simplified)) {
        return 'GIS is a computer-based way to store map-related data, connect it to real places, and use it to answer location-based questions.';
    }

    if (/^A functioning GIS requires a continuous cycle of 5 major components/i.test(simplified)) {
        return 'A GIS works properly only when five things come together: hardware, software, data, people, and methods.';
    }

    if (/^In GIS, the endlessly complex real world is segmented into discrete, manageable 'thematic layers'\.?$/i.test(simplified)) {
        return 'GIS makes the real world easier to study by splitting it into separate map layers, such as roads, rivers, land use, or boundaries.';
    }

    if (/^These layers accommodate different graphical types/i.test(simplified)) {
        return 'Different layers can store different kinds of map information, such as points, lines, areas, grid cells, or images.';
    }

    return capitalizeSentence(simplified);
}

function stripFillerWords(text) {
    const words = text.split(/\s+/);
    const fillerCount = words.filter((word) => FILLER_WORDS.has(cleanWord(word))).length;

    if (fillerCount < 6) {
        return text;
    }

    return words
        .filter((word) => !FILLER_WORDS.has(cleanWord(word)))
        .join(' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function buildNoteStarterSummary(heading, points, lectureTopic) {
    const headingText = normalizeNoteText(heading).toLowerCase();
    const conceptLabels = points
        .filter((point) => point.label)
        .map((point) => stripOuterQuotes(point.label))
        .filter(Boolean)
        .slice(0, 3);

    if (/history|introduction/.test(headingText)) {
        return `Start here: this section introduces ${lectureTopic} and gives the background needed before the technical details.`;
    }

    if (/definition|concept|overview|basis|structural/.test(headingText)) {
        return conceptLabels.length
            ? `Start here: this section explains the basic ideas behind ${conceptLabels.join(', ')} in simple terms.`
            : 'Start here: this section explains the basic idea in simple terms before moving to details.';
    }

    if (/component|essential|heart|part/.test(headingText)) {
        return 'Start here: this section breaks the system into its main parts so it is easier to see how everything works together.';
    }

    if (/data|vector|raster|tin|database/.test(headingText)) {
        return 'Start here: this section explains the data used in GIS and why different data forms are useful for different tasks.';
    }

    if (/software|demo|demonstration/.test(headingText)) {
        return 'Start here: this section shows how the idea appears inside actual GIS software and what to notice while using it.';
    }

    if (/application|implementation|analysis/.test(headingText)) {
        return 'Start here: this section connects the concept to practical use so it feels less abstract.';
    }

    if (/limitation|error|quality/.test(headingText)) {
        return 'Start here: this section points out common problems and tells you what to watch for when reading results.';
    }

    const firstIdea = points[0] ? buildBeginnerExplanation(points[0]) : '';
    return `Start here: ${shortenText(firstIdea || `this section explains ${lectureTopic} in an easier way.`, 170)}`;
}

function renderRelatableHint(point, queryTokens) {
    const hint = findRelatableHint(point);

    if (!hint) {
        return '';
    }

    return `<p class="point-relate">${highlightText(hint, queryTokens)}</p>`;
}

function renderOriginalNote(point, queryTokens) {
    const originalText = point.original || '';
    const beginnerText = buildBeginnerExplanation(point);

    if (!shouldShowOriginalNote(originalText, beginnerText)) {
        return '';
    }

    return `
        <details class="point-original">
            <summary>Original note</summary>
            <p>${highlightText(originalText, queryTokens)}</p>
        </details>
    `;
}

function shouldShowOriginalNote(originalText, beginnerText) {
    return normalizeForComparison(originalText) !== normalizeForComparison(beginnerText);
}

function normalizeForComparison(value) {
    return normalizeNoteText(value)
        .toLowerCase()
        .replace(/[^a-z0-9 ]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function findRelatableHint(point) {
    const sourceText = `${point.label || ''} ${point.detail || ''} ${point.text || ''}`.toLowerCase();

    const hintMatch = RELATABLE_HINTS.find((hint) => hint.pattern.test(sourceText));
    return hintMatch ? hintMatch.text : '';
}

function lowercaseFirst(value) {
    const cleanValue = normalizeNoteText(value);
    return cleanValue ? cleanValue.charAt(0).toLowerCase() + cleanValue.slice(1) : '';
}

function capitalizeSentence(value) {
    const cleanValue = normalizeNoteText(value);
    return cleanValue ? cleanValue.charAt(0).toUpperCase() + cleanValue.slice(1) : '';
}

function stripOuterQuotes(value) {
    return normalizeNoteText(value).replace(/^['"]|['"]$/g, '');
}

function shortenText(value, maxLength) {
    const cleanValue = normalizeNoteText(value);
    if (cleanValue.length <= maxLength) {
        return cleanValue;
    }

    return `${cleanValue.slice(0, maxLength - 1).trim()}...`;
}

function cleanWord(value) {
    return String(value || '').toLowerCase().replace(/[^a-z]/g, '');
}

function toLookupKey(value) {
    return normalizeNoteText(value)
        .toLowerCase()
        .replace(/[^a-z0-9 ]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function highlightText(value, tokens) {
    const rawText = String(value === null || value === undefined ? '' : value);

    if (!tokens.length || !rawText) {
        return escapeHtml(rawText);
    }

    const highlightRegex = new RegExp(`(${tokens.map(escapeRegExp).join('|')})`, 'ig');

    return rawText
        .split(highlightRegex)
        .map((part) => {
            const isMatch = tokens.some((token) => part.toLowerCase() === token.toLowerCase());
            return isMatch
                ? `<mark class="search-highlight">${escapeHtml(part)}</mark>`
                : escapeHtml(part);
        })
        .join('');
}

function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function escapeAttribute(value) {
    return String(value)
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}
