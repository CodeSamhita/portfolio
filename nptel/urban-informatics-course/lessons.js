const courseData = {
    meta: {
        about: "Urban Informatics is an interdisciplinary course at the intersection of urban planning, data science, programming, machine learning, and IoT. It studies how cities generate data, how that data is stored and processed, and how analytics can support planning, governance, infrastructure management, and smart mobility.",
        audience: [
            "Bachelor in Architecture, Planning, Technology, and Social Science",
            "Master in Urban Planning, Urban Engineering, Transportation Planning, Spatial Data Science, Social Science, and Technology"
        ],
        prerequisites: "Basic knowledge of computers and urban planning is enough to begin. The course gradually builds from data and databases to Python, machine learning, IoT, and integrated urban platforms.",
        industry: "Relevant to architecture, urban planning, infrastructure, IT/ITeS, analytics, mobility, and consultancy firms working on urban systems and public services.",
        instructor: {
            name: "Prof. Debapratim Pandit",
            affiliation: "Department of Architecture and Regional Planning, IIT Kharagpur",
            bio: "Prof. Pandit works in urban engineering, land use-transport modeling, smart mobility, and urban systems. His teaching and project background connects theory with real implementation, especially in bicycle sharing, bus transit planning, and data-driven urban services."
        },
        officialSource: {
            title: "Official NPTEL alignment",
            sourceLabel: "NPTEL/SWAYAM public course preview",
            sourceUrl: "https://onlinecourses.nptel.ac.in/noc26_ar01/preview",
            notes: [
                "The official preview frames Urban Informatics as an end-to-end course: urban data, databases, access methods, Python, machine learning, IoT, Arduino prototyping, and integrated urban platforms.",
                "The course goal is not isolated tool learning. The central workflow is data storage, processing, analytics, visualization, and decision support for real urban applications.",
                "The instructor bio highlights smart mobility implementation, including bicycle-sharing systems and AI-supported bus transit planning. Use these as practical anchors when revising platform and case-study questions.",
                "The certificate scheme gives strong weight to the final exam, so the notes now separate concept learning from MCQ answer logic and distractor traps.",
                "The public preview did not expose transcript links in the accessible course page. These notes therefore use the official layout, assignment PDFs, and public course description as the verified source layer."
            ]
        },
        studyGuide: [
            "Read each week in this order: overview, topic cards, assignment lens, then key terms.",
            "Use the official NPTEL flow as the backbone: databases and data access lead to Python, Python leads to analytics, analytics leads to IoT, and IoT/GIS lead to integrated urban systems.",
            "Use the assignment lens to see what the course is likely to test, not just what it formally lists in the syllabus.",
            "Treat the references as a depth path: Batty and Townsend for urban context, Darwen for databases, Martelli and McKinney for Python, Mitchell and Murphy for machine learning, and Bahga-Madisetti for IoT."
        ],
        references: [
            "Hugh Darwen - An Introduction to Relational Database Theory",
            "Michael Batty - Urban Informatics and Big Data",
            "Anthony M. Townsend - Smart Cities: Big Data, Civic Hackers, and the Quest for a New Utopia",
            "Alex Martelli, Anna Ravenscroft, and Steve Holden - Python in a Nutshell",
            "Tom Mitchell - Machine Learning",
            "Wes McKinney - Python for Data Analysis",
            "Kevin P. Murphy - Machine Learning: A Probabilistic Perspective",
            "Arshdeep Bahga and Vijay Madisetti - Internet of Things: A Hands-On-Approach",
            "Course lectures and weekly assignments for topic emphasis and exam-oriented concepts"
        ]
    },
    weeks: [
        {
            week: 1,
            title: "Introduction to Urban Informatics",
            focus: "Smart cities, urban systems, people-place-technology, and open data",
            overview: "Week 1 sets the foundation. Urban Informatics is not just about technology in cities; it is about how data, institutions, infrastructure, and people interact to shape urban decisions.",
            topics: [
                {
                    title: "Smart cities as a governance idea",
                    notes: [
                        "A smart city uses data, communication systems, digital platforms, and analytics to improve urban services and decision-making.",
                        "The goal is not technology for its own sake; the goal is better mobility, safer public spaces, efficient utilities, resilience, and improved quality of life.",
                        "A city can be digitally advanced but still fail if access, affordability, privacy, and governance are ignored."
                    ]
                },
                {
                    title: "Urban systems and interdependence",
                    notes: [
                        "Cities behave like linked systems: transport, land use, water, waste, housing, energy, and public services affect one another.",
                        "A transport intervention can change land values, trip lengths, pollution, and service access; this is why urban analytics must be system-aware.",
                        "Urban informatics helps planners move from isolated indicators to cross-sector diagnosis."
                    ]
                },
                {
                    title: "People-place-technology framework",
                    notes: [
                        "People are not passive data subjects; they are stakeholders who generate, interpret, and use urban data.",
                        "Place is the spatial context in which activity happens: roads, neighborhoods, stations, wards, parcels, and service zones.",
                        "Technology includes sensors, networks, cloud systems, apps, dashboards, and decision-support tools."
                    ]
                },
                {
                    title: "Big data, time-series, and digital infrastructure",
                    notes: [
                        "Urban big data is usually explained through volume, velocity, variety, and often veracity and value.",
                        "Time-series data is central because cities change over time; it reveals peaks, seasonality, trend shifts, and anomalies.",
                        "Digital infrastructure includes connectivity, data standards, APIs, cloud platforms, and the institutional capacity to use them."
                    ]
                },
                {
                    title: "Open data portals and case studies",
                    notes: [
                        "Open data portals publish public datasets for transparency, research, civic innovation, and accountability.",
                        "Typical datasets include transport ridership, road networks, weather, land use, utilities, pollution, and public facilities.",
                        "Good case studies ask not only 'what data exists?' but also 'who benefits, who is excluded, and how is the data maintained?'"
                    ]
                }
            ],
            assignmentFocus: [
                "People dimension means urban stakeholders who both produce and use data.",
                "Time-series data matters because it captures temporal variation, trends, and shocks.",
                "Velocity refers to the speed at which urban data arrives and must be processed."
            ],
            keyTerms: ["smart city", "urban systems", "people-place-technology", "time-series data", "open data", "data-driven governance"],
            references: [
                "Michael Batty - Urban Informatics and Big Data",
                "Anthony M. Townsend - Smart Cities"
            ]
        },
        {
            week: 2,
            title: "Types of Urban Data and Databases",
            focus: "Data formats, relational design, normalization, and NoSQL",
            overview: "This week explains what urban data looks like and how it should be organized. It moves from raw formats to database models and teaches why structure matters for reliable analysis.",
            topics: [
                {
                    title: "Urban data types",
                    notes: [
                        "Urban datasets may be structured (tables), semi-structured (JSON, XML), or unstructured (images, text, audio, video).",
                        "Common urban formats include CSV for tabular data, JSON and GeoJSON for nested or spatial web data, and raster/vector GIS formats for maps.",
                        "Time-series, geospatial, transaction, sensor, and survey data often need different storage strategies."
                    ]
                },
                {
                    title: "Database systems and data models",
                    notes: [
                        "A DBMS stores, retrieves, updates, secures, and manages data; not every software tool is a DBMS.",
                        "Major models include hierarchical, network, relational, object-oriented, document, graph, and wide-column systems.",
                        "Database choice depends on scale, structure, update frequency, query needs, and relationship complexity."
                    ]
                },
                {
                    title: "Relational databases",
                    notes: [
                        "Relational systems store data in tables and connect them using primary keys and foreign keys.",
                        "They are powerful when the schema is known and relationships among entities are important.",
                        "Urban examples include tables for bus stops, routes, wards, complaints, land parcels, and utility assets."
                    ]
                },
                {
                    title: "Normalization and schema quality",
                    notes: [
                        "Normalization reduces redundancy and improves consistency.",
                        "First Normal Form requires atomic values, Second Normal Form removes partial dependency, and Third Normal Form removes transitive dependency.",
                        "A table in Third Normal Form automatically satisfies Second Normal Form."
                    ]
                },
                {
                    title: "NoSQL systems",
                    notes: [
                        "NoSQL systems are useful when the schema changes often or the data is very large, distributed, or heterogeneous.",
                        "Document stores handle JSON-like records, key-value stores support fast lookup, wide-column systems support scalable sparse data, and graph databases capture rich relationships.",
                        "NoSQL is not a replacement for SQL in every case; it is a design choice based on workload and data structure."
                    ]
                }
            ],
            assignmentFocus: [
                "Review structured versus semi-structured data carefully, especially CSV versus JSON behavior.",
                "Know major database models and the features that distinguish relational and NoSQL systems.",
                "Remember that Third Normal Form implies Second Normal Form, and be able to classify NoSQL examples such as Neo4j or Cassandra."
            ],
            keyTerms: ["DBMS", "schema", "primary key", "foreign key", "1NF", "2NF", "3NF", "NoSQL"],
            references: [
                "Hugh Darwen - An Introduction to Relational Database Theory",
                "Michael Batty - Urban Informatics and Big Data"
            ]
        },
        {
            week: 3,
            title: "Data Access and Management",
            focus: "SQL, APIs, scraping, cleaning, and storage workflow",
            overview: "Week 3 is about getting data into usable form. The emphasis is not only on querying databases, but on understanding the full path from raw data source to analysis-ready dataset.",
            topics: [
                {
                    title: "SQL foundations",
                    notes: [
                        "SQL is used to select, filter, aggregate, join, and sort structured data.",
                        "In a query using WHERE and GROUP BY, row filtering happens before grouping.",
                        "MySQL is relational because it enforces relationships through keys and table structure."
                    ]
                },
                {
                    title: "Database tools and interfaces",
                    notes: [
                        "Graphical tools such as MySQL Workbench make it easier to inspect tables and run queries without relying only on the command line.",
                        "Connectors and ORMs help applications interact with databases programmatically.",
                        "Good data access practice includes naming conventions, query readability, and controlled permissions."
                    ]
                },
                {
                    title: "APIs and web data access",
                    notes: [
                        "APIs expose data programmatically, usually through endpoints, parameters, authentication tokens, and response formats such as JSON.",
                        "Urban APIs may provide live traffic, weather, transit, civic complaints, or map layers.",
                        "When using APIs, pay attention to rate limits, pagination, and data versioning."
                    ]
                },
                {
                    title: "Web scraping and ethics",
                    notes: [
                        "Web scraping is used when data is visible on a website but not provided through a clean API.",
                        "The workflow usually includes requesting pages, parsing HTML, extracting fields, cleaning text, and storing results.",
                        "Always consider robots.txt, site terms, rate limits, and the ethics of data collection."
                    ]
                },
                {
                    title: "Data cleaning and storage management",
                    notes: [
                        "Cleaning tasks include handling missing values, duplicates, inconsistent labels, wrong data types, and outliers.",
                        "Cloud storage is useful for large files, shared datasets, backups, and workflow reproducibility.",
                        "Urban data management should preserve metadata, timestamps, source details, and transformation history."
                    ]
                }
            ],
            assignmentFocus: [
                "Be able to explain why MySQL is a relational database and what MySQL Workbench is used for.",
                "Know the conceptual execution order of a SQL query, especially WHERE before GROUP BY.",
                "Study joins, filtering, and aggregation because they are the bridge from database theory to real analysis."
            ],
            keyTerms: ["SQL", "SELECT", "WHERE", "GROUP BY", "join", "API", "web scraping", "ETL"],
            references: [
                "Hugh Darwen - An Introduction to Relational Database Theory",
                "Wes McKinney - Python for Data Analysis"
            ]
        },
        {
            week: 4,
            title: "Programming Fundamentals with Python",
            focus: "Syntax, control flow, functions, files, and object-oriented thinking",
            overview: "This week teaches the programming habits needed for later analytics work. The main shift is from writing one-off instructions to writing reusable, structured programs.",
            topics: [
                {
                    title: "Python syntax and data types",
                    notes: [
                        "Python uses indentation to define blocks, which makes readability part of the language design.",
                        "Core data types include integers, floats, strings, booleans, and collections such as lists and dictionaries.",
                        "Clean naming and clear indentation matter because later data workflows quickly become complex."
                    ]
                },
                {
                    title: "Control structures",
                    notes: [
                        "Conditionals are used when actions depend on thresholds or logical checks, such as congestion levels or rainfall warnings.",
                        "Loops automate repeated operations over rows, files, stations, wards, or sensor records.",
                        "Programmers should prefer readable control flow over deeply nested logic."
                    ]
                },
                {
                    title: "Functions, scope, and modularity",
                    notes: [
                        "Functions package repeated logic into reusable units and make analysis pipelines easier to test.",
                        "Local variables exist only inside the function where they are defined; this prevents accidental interference with other code.",
                        "Modules and libraries let you build on existing functionality instead of writing everything from scratch."
                    ]
                },
                {
                    title: "File input and output",
                    notes: [
                        "File I/O includes reading raw data, writing cleaned outputs, and storing intermediate results for reproducibility.",
                        "Urban workflows often read CSV, JSON, text logs, and configuration files.",
                        "A reliable workflow tracks file paths, encodings, and whether the output should overwrite or append."
                    ]
                },
                {
                    title: "Object-oriented programming",
                    notes: [
                        "OOP models real entities as objects with attributes and behaviors, which is useful for buses, sensors, routes, or buildings.",
                        "Important ideas include encapsulation, inheritance, polymorphism, dynamic binding, and message passing.",
                        "OOP helps when the urban system has repeated entity types with shared behavior but different details."
                    ]
                }
            ],
            assignmentFocus: [
                "Understand the difference between procedure-oriented and object-oriented programming.",
                "Review common Python libraries and what they are used for: NumPy, Pandas, SciPy, Matplotlib, and scikit-learn.",
                "Know local variables and the core OOP properties such as inheritance and polymorphism."
            ],
            keyTerms: ["function", "local variable", "module", "file I/O", "class", "object", "inheritance", "polymorphism"],
            references: [
                "Alex Martelli, Anna Ravenscroft, and Steve Holden - Python in a Nutshell"
            ]
        },
        {
            week: 5,
            title: "Data Analysis and Visualization with Python",
            focus: "Data structures, Pandas, Matplotlib, dashboards, and EDA",
            overview: "Week 5 turns Python into an analysis environment. The focus is on loading urban datasets, inspecting them, cleaning them, and presenting insights in chart or dashboard form.",
            topics: [
                {
                    title: "Python data structures and access patterns",
                    notes: [
                        "Lists preserve order, dictionaries support key-based access, tuples are fixed, and sets are good for unique items.",
                        "Choosing the right structure affects speed, clarity, and how naturally the problem maps to code.",
                        "Urban analytics often mixes file-based access with in-memory data structures."
                    ]
                },
                {
                    title: "Pandas fundamentals",
                    notes: [
                        "Pandas introduces Series and DataFrames for labeled tabular analysis.",
                        "Core inspection methods include head(), info(), describe(), shape, columns, and value counts.",
                        "Typical operations include filtering rows, selecting columns, grouping, merging, sorting, and handling missing values."
                    ]
                },
                {
                    title: "Data formats and database integration",
                    notes: [
                        "JSON is suited to nested or hierarchical data such as API responses, while CSV is better for flat row-column data.",
                        "CSV does not preserve data types automatically; types often need to be interpreted during import.",
                        "ORM systems help bridge database tables and programming objects when an application needs both."
                    ]
                },
                {
                    title: "Exploratory data analysis",
                    notes: [
                        "EDA asks simple but powerful questions: What is the distribution? Where are the missing values? Which variables move together? Where are the outliers?",
                        "Before modeling, planners should know the scale, skewness, sparsity, and reliability of the data.",
                        "Good EDA prevents later mistakes in model choice and interpretation."
                    ]
                },
                {
                    title: "Visualization and dashboards",
                    notes: [
                        "Matplotlib is used for line plots, bar charts, scatter plots, histograms, and time-series visualizations.",
                        "Dashboards combine charts, indicators, filters, and maps so that decision-makers can inspect the same system from multiple angles.",
                        "Urban visualizations should privilege clarity over decoration because policy decisions may depend on them."
                    ]
                }
            ],
            assignmentFocus: [
                "Review JSON versus CSV carefully, especially nested structure and type handling.",
                "ORM exists to connect object-oriented code with relational tables.",
                "The Pandas shape attribute is the quickest way to see dataset dimensionality."
            ],
            keyTerms: ["DataFrame", "Series", "shape", "groupby", "missing values", "JSON", "CSV", "dashboard"],
            references: [
                "Wes McKinney - Python for Data Analysis",
                "Alex Martelli, Anna Ravenscroft, and Steve Holden - Python in a Nutshell"
            ]
        },
        {
            week: 6,
            title: "Introduction to Machine Learning",
            focus: "Learning paradigms, data preparation, uncertainty, and statistical judgment",
            overview: "Week 6 introduces machine learning as a disciplined workflow rather than a collection of algorithms. It also brings in statistical reasoning, which is essential for trustworthy urban modeling.",
            topics: [
                {
                    title: "Machine learning workflow",
                    notes: [
                        "A typical workflow defines the target, selects features, splits the data, trains a model, validates it, and evaluates it on unseen data.",
                        "Supervised learning uses labeled examples, unsupervised learning finds patterns without labels, and reinforcement learning learns from interaction and reward.",
                        "Model quality depends as much on data preparation and framing as on the algorithm."
                    ]
                },
                {
                    title: "Data transformation and feature quality",
                    notes: [
                        "Scaling, normalization, and transformation can make patterns more visible and help optimization behave better.",
                        "Feature design matters because poorly defined features often limit performance more than the choice of model.",
                        "Multicollinearity inflates uncertainty in regression; VIF is commonly used to diagnose it."
                    ]
                },
                {
                    title: "Interpretability, black-box models, and uncertainty",
                    notes: [
                        "An interpretable model exposes how predictions are formed, while a black-box model hides most of the internal logic.",
                        "Information theory provides tools such as entropy for quantifying uncertainty.",
                        "In urban policy settings, interpretability often matters because decisions need to be explained to institutions and the public."
                    ]
                },
                {
                    title: "Statistics in model selection",
                    notes: [
                        "Pearson correlation suits linear relationships in continuous data without extreme outliers; Spearman is safer for monotonic rank-based relationships.",
                        "Kruskal-Wallis is a non-parametric test for comparing multiple groups when normality assumptions are weak.",
                        "Basic statistical judgment helps choose the right preprocessing and validation strategy."
                    ]
                },
                {
                    title: "Sequential and reinforcement learning context",
                    notes: [
                        "LSTM networks are useful for sequence and time-series prediction such as hourly traffic flow.",
                        "Reinforcement learning uses agent, action, state, reward, and policy concepts to learn through feedback.",
                        "SARSA is an on-policy reinforcement learning algorithm and is a useful example of reward-driven learning."
                    ]
                }
            ],
            assignmentFocus: [
                "Know the difference between supervised, unsupervised, and reinforcement learning, including SARSA.",
                "Review black-box models, entropy, VIF, Pearson versus Spearman, and Kruskal-Wallis.",
                "Assignments also touched LSTM for time-series and DBSCAN for irregular clusters with outliers."
            ],
            keyTerms: ["supervised learning", "unsupervised learning", "reinforcement learning", "entropy", "VIF", "Pearson", "Spearman", "Kruskal-Wallis"],
            references: [
                "Tom Mitchell - Machine Learning",
                "Kevin P. Murphy - Machine Learning: A Probabilistic Perspective"
            ]
        },
        {
            week: 7,
            title: "Supervised Learning for Urban Prediction",
            focus: "Classification, regression, trees, ensembles, and tuning",
            overview: "Week 7 is about predictive modeling when labels are available. The main tasks are classification for categories and regression for continuous outcomes, both of which are common in urban planning and mobility studies.",
            topics: [
                {
                    title: "Classification and regression",
                    notes: [
                        "Classification predicts classes such as high-risk or low-risk zone, while regression predicts quantities such as traffic volume or travel time.",
                        "Urban prediction tasks often involve imbalanced data, noisy measurements, and strong contextual effects.",
                        "The best model is not always the most complex one; match the model to the problem and the data."
                    ]
                },
                {
                    title: "Scikit-learn workflow components",
                    notes: [
                        "sklearn.model_selection handles train-test split, cross-validation, and hyperparameter search.",
                        "sklearn.impute is used to fill or estimate missing values, while preprocessing and feature-selection modules prepare features for learning.",
                        "A good pipeline reduces leakage and makes experiments reproducible."
                    ]
                },
                {
                    title: "Decision trees and split criteria",
                    notes: [
                        "Decision trees split data using measures such as entropy, information gain, or Gini impurity.",
                        "They are easy to interpret and can model nonlinear rules, but they overfit easily if left unconstrained.",
                        "Root node selection matters because it shapes the whole tree structure."
                    ]
                },
                {
                    title: "Ensemble learning",
                    notes: [
                        "Bagging reduces variance by training multiple models in parallel on bootstrapped samples.",
                        "Random Forest extends bagging by also sampling features, which decorrelates trees.",
                        "Boosting trains models sequentially so later models focus on previous errors; XGBoost is a prominent example."
                    ]
                },
                {
                    title: "Hyperparameters and model tuning",
                    notes: [
                        "Hyperparameters are settings chosen before training, such as tree depth, learning rate, or sample fraction.",
                        "In XGBoost, subsample controls the fraction of training rows used for each tree and can help reduce overfitting.",
                        "GridSearchCV systematically compares hyperparameter combinations using cross-validation."
                    ]
                }
            ],
            assignmentFocus: [
                "Study entropy, information gain, and Gini impurity because they directly appear in split-selection questions.",
                "Know how Bagging, Random Forest, and Boosting differ, and why trees may overfit.",
                "Review scikit-learn module roles and the purpose of GridSearchCV and XGBoost subsample."
            ],
            keyTerms: ["classification", "regression", "entropy", "information gain", "Gini impurity", "bagging", "Random Forest", "XGBoost"],
            references: [
                "Tom Mitchell - Machine Learning",
                "Kevin P. Murphy - Machine Learning: A Probabilistic Perspective"
            ]
        },
        {
            week: 8,
            title: "SVM, Semi-Supervised Learning, and Active Learning",
            focus: "Decision boundaries, kernels, unlabeled data, label propagation, and query strategy",
            overview: "Week 8 strengthens supervised learning by asking how models behave when boundaries are complex, labels are limited, or only selected examples can be labeled. This is where SVM geometry, semi-supervised assumptions, and active learning become testable.",
            topics: [
                {
                    title: "SVM boundary geometry",
                    notes: [
                        "A support vector machine finds a separating hyperplane that maximizes the margin between classes.",
                        "Support vectors are the training points closest to the decision boundary, so they control the final boundary.",
                        "Soft-margin SVM allows limited margin violations when perfect separation would overfit or fail."
                    ]
                },
                {
                    title: "Kernel choice and optimization",
                    notes: [
                        "SVM training is a convex quadratic optimization problem, which is why the optimum is well-defined.",
                        "A linear kernel is often strong for high-dimensional sparse data, while RBF captures flexible local similarity.",
                        "Polynomial kernels capture interactions between features, but can become complex if degree is too high."
                    ]
                },
                {
                    title: "Semi-supervised learning assumptions",
                    notes: [
                        "Semi-supervised learning combines a small labeled dataset with a larger unlabeled dataset.",
                        "The smoothness assumption says nearby points should usually share labels.",
                        "The cluster and manifold assumptions say labels should follow dense structure in the data."
                    ]
                },
                {
                    title: "Label propagation and active learning",
                    notes: [
                        "Label propagation spreads labels across a graph or similarity network using nearby labeled examples.",
                        "Active learning asks for labels only for informative cases instead of labeling everything.",
                        "Uncertainty, margin, entropy, and diversity sampling describe different ways to choose useful examples."
                    ]
                },
                {
                    title: "Distance metrics and multinomial logistic regression",
                    notes: [
                        "Cosine distance compares direction, Hamming distance counts categorical mismatches, Manhattan distance follows grid movement, and Mahalanobis distance handles correlated features.",
                        "Multinomial logistic regression extends logistic regression to more than two classes.",
                        "MLE chooses parameters that make the observed data most probable under the model."
                    ]
                }
            ],
            assignmentFocus: [
                "Review support vectors, soft margin, kernel choice, and convex optimization.",
                "Know smoothness, cluster, and manifold assumptions for semi-supervised learning.",
                "Match active-learning strategies to the wording: low confidence, small margin, high entropy, or broad diversity."
            ],
            keyTerms: ["SVM", "support vector", "soft margin", "kernel", "label propagation", "active learning", "MLE", "Mahalanobis distance"],
            references: [
                "Tom Mitchell - Machine Learning",
                "Kevin P. Murphy - Machine Learning: A Probabilistic Perspective"
            ]
        },
        {
            week: 9,
            title: "Association Rules and Clustering Structure",
            focus: "Frequent patterns, clustering, linkage, density, mixtures, PCA, and cluster validation",
            overview: "Week 9 explores structure when labels are absent. Assignment questions focus on whether you can identify the right metric, clustering method, or validation idea from the wording of the problem.",
            topics: [
                {
                    title: "Association rule workflow",
                    notes: [
                        "Association learning finds items, events, or conditions that frequently occur together.",
                        "A binary incidence matrix represents each transaction as presence or absence of items.",
                        "Support measures frequency, confidence measures conditional reliability, and lift measures association beyond chance."
                    ]
                },
                {
                    title: "K-means, k-prototypes, and hierarchical linkage",
                    notes: [
                        "K-means partitions numeric data into k clusters by minimizing within-cluster sum of squares.",
                        "K-prototypes handles mixed numeric and categorical data better than plain k-means.",
                        "Single linkage can chain clusters, complete linkage favors compact clusters, and Ward linkage minimizes added within-cluster variance."
                    ]
                },
                {
                    title: "Density and probabilistic clustering",
                    notes: [
                        "DBSCAN identifies dense regions and treats sparse points as noise or outliers.",
                        "A DBSCAN core point has at least MinPts neighbors within epsilon distance.",
                        "Gaussian Mixture Models assign probabilities of membership, and BIC balances fit against model complexity."
                    ]
                },
                {
                    title: "Choosing k and reading cluster quality",
                    notes: [
                        "The elbow method looks for the point where WCSS improvement slows after adding more clusters.",
                        "Silhouette score compares cohesion inside a cluster with separation from other clusters.",
                        "Mean Shift finds dense modes without requiring k in advance."
                    ]
                },
                {
                    title: "PCA and hard versus soft structure",
                    notes: [
                        "PCA creates components that preserve variance and reduce correlation among variables.",
                        "PCA is useful for composite indicators when many urban heat, pollution, or socio-economic variables overlap.",
                        "Hard clustering assigns one cluster per point, while soft clustering gives membership degrees."
                    ]
                }
            ],
            assignmentFocus: [
                "Review binary incidence matrices, support, confidence, and lift.",
                "Know linkage methods, DBSCAN core points, GMM with BIC, Mean Shift, elbow, and silhouette.",
                "PCA matters when urban indicators are correlated and need a smaller composite representation."
            ],
            keyTerms: ["association rule", "support", "confidence", "lift", "k-prototypes", "Ward linkage", "DBSCAN", "GMM", "BIC", "PCA"],
            references: [
                "Tom Mitchell - Machine Learning",
                "Kevin P. Murphy - Machine Learning: A Probabilistic Perspective"
            ]
        },
        {
            week: 10,
            title: "Neural Networks, Deep Learning, and Reinforcement Learning",
            focus: "ANNs, activations, backpropagation, optimization, CNN/RNN matching, SHAP, and RL terms",
            overview: "Week 10 moves from classical machine learning to deep models and reinforcement learning. The testable skill is matching architecture, activation, explanation, or reinforcement-learning vocabulary to the question.",
            topics: [
                {
                    title: "ANN structure and hidden neurons",
                    notes: [
                        "An artificial neural network has input, hidden, and output layers connected through weights.",
                        "Hidden neurons learn intermediate representations, so their count depends on problem complexity and data patterns.",
                        "Neural networks are inspired by simplified brain-like connected units, not exact biological neurons."
                    ]
                },
                {
                    title: "Activation functions and output behavior",
                    notes: [
                        "Activation functions introduce nonlinearity so a network can learn complex relationships.",
                        "ReLU is common in deep networks, Leaky ReLU reduces dead neurons, sigmoid maps to 0-1, tanh maps to -1 to 1, and GELU is used in modern transformer-style systems.",
                        "The activation answer should match the output range or training behavior described in the question."
                    ]
                },
                {
                    title: "Backpropagation and optimization risks",
                    notes: [
                        "Backpropagation computes gradients so weights can be updated to reduce loss.",
                        "Deep loss surfaces are complex because many nonlinear parameters interact.",
                        "Vanishing gradients, exploding gradients, initialization, and batch normalization are common optimization topics."
                    ]
                },
                {
                    title: "CNN, RNN, kernels, and SHAP",
                    notes: [
                        "CNNs match image and spatial-pattern tasks because filters scan local regions.",
                        "A CNN kernel is a small matrix used to detect edges, textures, and shapes.",
                        "RNNs and LSTMs match sequence data, while SHAP explains feature contributions to model predictions."
                    ]
                },
                {
                    title: "Reinforcement learning components",
                    notes: [
                        "Reinforcement learning learns decisions through interaction with an environment.",
                        "Agent, action, reward, policy, state, and return have specific roles and should not be interchanged.",
                        "Bellman reasoning expresses future return recursively; model-free, model-based, and policy-based methods differ in what they learn directly."
                    ]
                }
            ],
            assignmentFocus: [
                "Review ANN structure, hidden-layer reasoning, activations, and backpropagation.",
                "Know why CNNs fit images, why RNN/LSTM models fit sequences, and what a kernel does.",
                "Study SHAP and the roles of agent, action, reward, policy, return, and Bellman equations."
            ],
            keyTerms: ["ANN", "ReLU", "GELU", "backpropagation", "CNN", "kernel", "RNN", "LSTM", "SHAP", "Bellman equation"],
            references: [
                "Tom Mitchell - Machine Learning",
                "Kevin P. Murphy - Machine Learning: A Probabilistic Perspective"
            ]
        },
        {
            week: 11,
            title: "IoT Communication, Sensors, Actuators, and Arduino",
            focus: "IoT layers, IP/TCP-IP, WPAN/WWAN, signals, ADC, Arduino IDE, and hardware libraries",
            overview: "Week 11 explains how the physical city becomes digital data and how embedded boards turn that data into action. Assignment questions test the sensing-network-processing chain and Arduino setup details.",
            topics: [
                {
                    title: "IoT layers and networks",
                    notes: [
                        "The sensing layer captures real-world signals and the network layer transmits them.",
                        "WPAN is short-range communication, while WWAN covers wide-area communication.",
                        "IP addresses devices and TCP/IP supports reliable exchange across networks."
                    ]
                },
                {
                    title: "Signals, ADC, and transfer functions",
                    notes: [
                        "Analog signals vary continuously and are more sensitive to noise, while digital signals use discrete states.",
                        "ADC converts analog signals into digital values a microcontroller can process.",
                        "A transfer function such as S = f(s) means the sensor output depends on the stimulus."
                    ]
                },
                {
                    title: "Sensors, actuators, and control",
                    notes: [
                        "Sensors measure physical phenomena such as motion, light, pressure, temperature, or pollution.",
                        "Actuators convert control signals into physical actions such as motion, switching, or valve control.",
                        "A complete urban IoT loop senses, transmits, processes, decides, and acts."
                    ]
                },
                {
                    title: "Arduino IDE and board setup",
                    notes: [
                        "The Arduino IDE is used to write, compile, and upload sketches.",
                        "Drivers or board setup may be needed so the computer can detect the Arduino board.",
                        "The Arduino Uno uses the ATmega328P microcontroller."
                    ]
                },
                {
                    title: "Arduino libraries and communication support",
                    notes: [
                        "EEPROM supports non-volatile storage, Ethernet supports network communication, GSM supports cellular communication, and Bridge supports processor communication.",
                        "Libraries reduce development time by wrapping common hardware functions.",
                        "Typical urban prototypes include smart lighting, parking counters, air-quality monitors, and pedestrian alerts."
                    ]
                }
            ],
            assignmentFocus: [
                "Know IP, TCP/IP, WPAN, WWAN, sensing layer, network layer, analog/digital signals, and ADC.",
                "Actuators should be understood as components that turn electrical commands into physical action.",
                "Review Arduino IDE purpose, USB driver setup, ATmega328P, and the roles of EEPROM, Ethernet, GSM, and Bridge libraries."
            ],
            keyTerms: ["IoT", "IP", "TCP/IP", "WPAN", "WWAN", "ADC", "sensor", "actuator", "Arduino IDE", "ATmega328P"],
            references: [
                "Arshdeep Bahga and Vijay Madisetti - Internet of Things: A Hands-On-Approach"
            ]
        },
        {
            week: 12,
            title: "Arduino Components, GIS Operations, and Spatial Analysis",
            focus: "Servo/PIR components, GIS joins and relates, classification evaluation, hotspots, fishnet, and ArcGIS API",
            overview: "The final week combines hardware components with GIS and platform operations. The assignment questions test whether you can match each component, GIS operation, or spatial-analysis tool to its purpose.",
            topics: [
                {
                    title: "Servo motor and PIR sensor",
                    notes: [
                        "A servo motor provides controlled angular movement and is used for barriers, gates, camera direction, or small mechanical control.",
                        "A PIR sensor detects motion by sensing changes in infrared radiation from warm bodies.",
                        "Servo is an actuator; PIR is a sensor. This distinction is central in MCQ options."
                    ]
                },
                {
                    title: "GIS query, join, and relate",
                    notes: [
                        "A GIS query is a request to select records or features that meet specific conditions.",
                        "Joining a CSV table to a shapefile requires a common matching field.",
                        "Relate is useful when the relationship between tables is one-to-many rather than one-to-one."
                    ]
                },
                {
                    title: "Classification, evaluation, and hotspot analysis",
                    notes: [
                        "Forest-based classification models are used when the target is categorical rather than continuous.",
                        "A confusion matrix is a standard tool for evaluating classification performance.",
                        "In Getis-Ord Gi* hotspot analysis, significant positive z-scores indicate hotspots."
                    ]
                },
                {
                    title: "Spatial aggregation and platform tooling",
                    notes: [
                        "Create Fishnet is used to build a polygon grid that can aggregate point events before spatial analysis.",
                        "ArcGIS API for Python supports web GIS workflows, cloud-based mapping, and data access automation.",
                        "PostGIS extends SQL databases with spatial types and functions for storage and query."
                    ]
                },
                {
                    title: "Dashboards and decision support",
                    notes: [
                        "Dashboards turn analytic outputs into operational views for planners, operators, and administrators.",
                        "Real-time analytics helps when the decision window is short, such as traffic operations or dynamic fleet management.",
                        "Spatial outputs become useful when they are connected to decision workflows rather than treated as static maps."
                    ]
                },
                {
                    title: "Integrated urban platform limits",
                    notes: [
                        "Bus service optimization and bicycle-sharing systems are strong examples of end-to-end urban informatics platforms.",
                        "These systems combine sensing, storage, analytics, operations logic, and user-facing interfaces.",
                        "Main limitations include interoperability, data quality, maintenance burden, privacy, institutional capacity, and long-term sustainability."
                    ]
                }
            ],
            assignmentFocus: [
                "Review servo motors, PIR sensors, GIS query, join with common field, and Relate for one-to-many relationships.",
                "Know confusion matrix, hotspot z-scores, fishnet creation, and the purpose of ArcGIS API for Python.",
                "The final integrative perspective is about connecting databases, analytics, mapping, dashboards, and mobility applications into one workflow."
            ],
            keyTerms: ["servo motor", "PIR sensor", "GIS query", "join", "Relate", "confusion matrix", "hotspot analysis", "fishnet", "ArcGIS API for Python"],
            references: [
                "Michael Batty - Urban Informatics and Big Data",
                "Anthony M. Townsend - Smart Cities",
                "Course lectures and assignments for GIS and smart mobility emphasis"
            ]
        }
    ]
};
