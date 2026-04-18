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
        studyGuide: [
            "Read each week in this order: overview, topic cards, assignment lens, then key terms.",
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
            title: "Unsupervised and Association Learning",
            focus: "Frequent patterns, clustering, distance measures, and latent structure",
            overview: "This week explores structure in data when labels are absent or limited. The ideas are especially useful for neighborhood typologies, behavior grouping, and discovering recurring urban activity patterns.",
            topics: [
                {
                    title: "Association rule learning",
                    notes: [
                        "Association learning identifies items or events that frequently occur together without needing labels.",
                        "The workflow often converts data into a binary incidence matrix and then mines rules from it.",
                        "Support measures frequency, confidence measures conditional reliability, and lift measures strength relative to independence."
                    ]
                },
                {
                    title: "K-means and hierarchical clustering",
                    notes: [
                        "K-means partitions data into k groups by minimizing within-cluster variance, but it requires the number of clusters in advance.",
                        "Hierarchical clustering builds a dendrogram through repeated merges or splits.",
                        "Ward linkage is popular because it merges clusters in a way that minimizes the increase in within-cluster variance."
                    ]
                },
                {
                    title: "Density and probabilistic clustering",
                    notes: [
                        "DBSCAN is useful when clusters are irregularly shaped and when outliers are present.",
                        "A DBSCAN core point has at least MinPts neighbors within epsilon distance.",
                        "Gaussian Mixture Models assign probabilistic membership, and BIC helps choose model complexity."
                    ]
                },
                {
                    title: "Distance metrics and mixed data",
                    notes: [
                        "Euclidean distance is common for continuous features, Manhattan distance fits grid-like movement, Hamming distance fits mismatch in coded categories, and cosine distance compares direction rather than magnitude.",
                        "Different distance measures produce different cluster shapes and meanings.",
                        "For mixed numeric and categorical data, methods such as k-prototypes are more suitable than plain k-means."
                    ]
                },
                {
                    title: "Dimensionality reduction and soft structure",
                    notes: [
                        "PCA creates orthogonal components that capture maximum variance from correlated variables.",
                        "Dimensionality reduction helps summarize many urban indicators into a smaller set of interpretable factors.",
                        "Hard clustering assigns each point to one cluster, while soft clustering allows partial membership across clusters."
                    ]
                }
            ],
            assignmentFocus: [
                "Review support, confidence, and lift, plus the role of the binary incidence matrix in rule mining.",
                "Know Ward linkage, DBSCAN core points, GMM with BIC, and why k-means needs k in advance.",
                "PCA is especially important when many urban variables are correlated."
            ],
            keyTerms: ["association rule", "support", "confidence", "lift", "k-means", "Ward linkage", "DBSCAN", "PCA"],
            references: [
                "Tom Mitchell - Machine Learning",
                "Kevin P. Murphy - Machine Learning: A Probabilistic Perspective"
            ]
        },
        {
            week: 9,
            title: "Deep Learning and Neural Networks",
            focus: "ANNs, activations, backpropagation, CNNs, LSTMs, and explainability",
            overview: "Week 9 moves from classical machine learning to neural models. The key idea is that neural networks learn layered representations, which makes them powerful but also more complex to train and explain.",
            topics: [
                {
                    title: "Neural network basics",
                    notes: [
                        "An artificial neural network consists of input, hidden, and output layers connected through weighted links.",
                        "The number of hidden neurons depends on how complex the decision boundaries must be, not just on dataset size.",
                        "Neural networks are inspired by the human brain at a very abstract level, not by exact biological detail."
                    ]
                },
                {
                    title: "Activation functions",
                    notes: [
                        "Activation functions introduce nonlinearity so the network can learn complex relationships.",
                        "ReLU is widely used, Leaky ReLU reduces dead-neuron issues, sigmoid maps to probabilities, tanh centers outputs around zero, and GELU is common in modern transformer-style architectures.",
                        "Choice of activation affects learning behavior, gradient flow, and task suitability."
                    ]
                },
                {
                    title: "Backpropagation and optimization",
                    notes: [
                        "Backpropagation computes gradients of the loss with respect to weights so the network can update itself.",
                        "Deep loss surfaces are complex because networks contain many nonlinear transformations and parameters.",
                        "Common optimization issues include vanishing gradients, exploding gradients, poor initialization, and unstable learning."
                    ]
                },
                {
                    title: "CNN, RNN, and LSTM",
                    notes: [
                        "CNNs are suited to images and spatial patterns because filters slide over input and detect local features.",
                        "A kernel is the small matrix that scans an image to extract edges, textures, and shapes.",
                        "RNNs and especially LSTMs are useful for sequences such as traffic, demand, weather, or sensor time-series."
                    ]
                },
                {
                    title: "Model interpretation and reinforcement context",
                    notes: [
                        "SHAP is used to interpret model outputs by estimating each feature's contribution to a prediction.",
                        "Deep models are powerful but need careful explanation when used in public-sector settings.",
                        "Assignments also linked this week to reinforcement learning concepts such as agent, action, reward, and policy."
                    ]
                }
            ],
            assignmentFocus: [
                "Review ANN structure, hidden-layer reasoning, activation functions, and backpropagation.",
                "Know why CNNs fit image tasks, why LSTMs fit sequence tasks, and what a kernel does.",
                "Study SHAP, vanishing versus exploding gradients, and the basic components of reinforcement learning."
            ],
            keyTerms: ["ANN", "ReLU", "GELU", "backpropagation", "CNN", "kernel", "LSTM", "SHAP"],
            references: [
                "Tom Mitchell - Machine Learning",
                "Kevin P. Murphy - Machine Learning: A Probabilistic Perspective"
            ]
        },
        {
            week: 10,
            title: "Internet of Things (IoT) Fundamentals",
            focus: "Architecture, communication, sensing, control, and cloud links",
            overview: "Week 10 explains how physical urban environments become digital systems. The goal is to understand how a sensor reading turns into a usable data stream, alert, or dashboard element.",
            topics: [
                {
                    title: "IoT architecture",
                    notes: [
                        "A typical IoT stack includes sensing, network, processing, storage, analytics, and application layers.",
                        "The sensing layer captures the real world, the network layer moves data, and the application layer presents insights or control.",
                        "Urban IoT systems must be designed for scale, latency, maintenance, and reliability."
                    ]
                },
                {
                    title: "Protocols and addressing",
                    notes: [
                        "IP provides device addressing, while TCP/IP provides a reliable communication stack for networked exchange.",
                        "MQTT is lightweight and good for constrained devices, while HTTP is more common for web-oriented request-response systems.",
                        "Protocol choice depends on bandwidth, power constraints, latency, and infrastructure."
                    ]
                },
                {
                    title: "Signals, conversion, and sensing",
                    notes: [
                        "Analog signals vary continuously and are more sensitive to noise, while digital signals represent discrete states.",
                        "ADC converts analog sensor signals into digital form so a microcontroller can process them.",
                        "In a sensor transfer function S = f(s), the output depends on the applied stimulus."
                    ]
                },
                {
                    title: "Sensors, actuators, and embedded control",
                    notes: [
                        "Sensors measure physical phenomena such as temperature, motion, light, pressure, or air quality.",
                        "Actuators convert signals into physical action, such as switching lights, moving motors, or opening valves.",
                        "A full urban monitoring system often combines sensing, control, communication, and logging."
                    ]
                },
                {
                    title: "Cloud integration and urban applications",
                    notes: [
                        "Cloud platforms store incoming sensor data, support APIs, trigger alerts, and host dashboards.",
                        "Urban examples include smart parking, environmental monitoring, street lighting, and utility management.",
                        "Data governance matters because IoT systems generate continuous streams that may include sensitive location or behavioral information."
                    ]
                }
            ],
            assignmentFocus: [
                "Know the role of IP, TCP/IP, ADC, sensing layer, network layer, WPAN, and WWAN.",
                "Review analog versus digital signals and the transfer function representation for sensors.",
                "Actuators should be understood as components that turn electrical commands into physical action."
            ],
            keyTerms: ["IoT", "IP", "TCP/IP", "MQTT", "HTTP", "ADC", "sensor", "actuator"],
            references: [
                "Arshdeep Bahga and Vijay Madisetti - Internet of Things: A Hands-On-Approach"
            ]
        },
        {
            week: 11,
            title: "Arduino and Arduino Projects",
            focus: "Arduino IDE, firmware, communication, sensors, and urban prototypes",
            overview: "Week 11 turns IoT concepts into hands-on prototypes. The emphasis is on how microcontrollers interact with sensors and actuators and how small projects can represent real urban use-cases.",
            topics: [
                {
                    title: "Arduino platform basics",
                    notes: [
                        "The Arduino IDE is used to write, compile, and upload sketches to Arduino boards.",
                        "Board drivers are often needed so the computer can detect the hardware correctly.",
                        "Arduino is valuable in teaching because it shortens the path from idea to prototype."
                    ]
                },
                {
                    title: "Microcontroller and firmware fundamentals",
                    notes: [
                        "The Arduino Uno uses the ATmega328P microcontroller.",
                        "Firmware is the low-level code that directly interacts with device hardware and peripherals.",
                        "Serial communication is important for debugging, monitoring sensor values, and exchanging data with other systems."
                    ]
                },
                {
                    title: "Libraries and communication support",
                    notes: [
                        "EEPROM supports non-volatile data storage, Ethernet supports network communication, GSM supports cellular connectivity, and Bridge supports processor communication in compatible boards.",
                        "Libraries reduce development time by wrapping common hardware functions into reusable code.",
                        "A good project uses libraries carefully instead of treating them as black boxes."
                    ]
                },
                {
                    title: "Sensors and actuators in projects",
                    notes: [
                        "Servo motors provide precise angular control and are useful for gates, camera sweep, or smart barrier systems.",
                        "PIR sensors detect motion by sensing changes in infrared radiation from warm bodies.",
                        "Combining a microcontroller, a sensor, and an actuator creates a full sensing-action loop."
                    ]
                },
                {
                    title: "Urban prototyping examples",
                    notes: [
                        "Typical urban mini-projects include smart parking counters, pedestrian alert systems, air-quality monitors, and street-light automation.",
                        "Prototype quality depends on stable power, correct pin mapping, clean sensor calibration, and data logging.",
                        "A useful prototype should demonstrate both technical feasibility and urban relevance."
                    ]
                }
            ],
            assignmentFocus: [
                "Review Arduino IDE purpose, USB driver setup, ATmega328P, and serial communication basics.",
                "Know the mapping of EEPROM, Ethernet, GSM, and Bridge libraries.",
                "Servo motors and PIR sensors are important components for project-based questions."
            ],
            keyTerms: ["Arduino IDE", "ATmega328P", "firmware", "serial communication", "EEPROM", "servo motor", "PIR sensor"],
            references: [
                "Arshdeep Bahga and Vijay Madisetti - Internet of Things: A Hands-On-Approach"
            ]
        },
        {
            week: 12,
            title: "Integrated Urban Systems and Data Platforms",
            focus: "GIS, dashboards, spatial analytics, simulation, and smart mobility platforms",
            overview: "The final week synthesizes the course. By this point, the course is no longer about isolated tools; it is about complete urban systems that store, process, analyze, visualize, and act on data.",
            topics: [
                {
                    title: "Geospatial analysis and GIS operations",
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
                    title: "Dashboards, simulation, and decision support",
                    notes: [
                        "Dashboards turn analytic outputs into operational views for planners, operators, and administrators.",
                        "Agent-based simulation represents urban systems through many interacting agents such as travelers, vehicles, or households.",
                        "Real-time analytics helps when the decision window is short, such as traffic operations or dynamic fleet management."
                    ]
                },
                {
                    title: "Mobility platforms, opportunities, and limitations",
                    notes: [
                        "Bus service optimization and bicycle-sharing systems are strong examples of end-to-end urban informatics platforms.",
                        "These systems combine sensing, storage, analytics, operations logic, and user-facing interfaces.",
                        "Main limitations include interoperability, data quality, maintenance burden, privacy, institutional capacity, and long-term sustainability."
                    ]
                }
            ],
            assignmentFocus: [
                "Review GIS query, join with common field, and the use of Relate for one-to-many relationships.",
                "Know confusion matrix, hotspot z-scores, fishnet creation, and the purpose of ArcGIS API for Python.",
                "The final integrative perspective is about connecting databases, analytics, mapping, dashboards, and mobility applications into one workflow."
            ],
            keyTerms: ["GIS query", "join", "Relate", "confusion matrix", "hotspot analysis", "fishnet", "PostGIS", "agent-based simulation"],
            references: [
                "Michael Batty - Urban Informatics and Big Data",
                "Anthony M. Townsend - Smart Cities",
                "Course lectures and assignments for GIS and smart mobility emphasis"
            ]
        }
    ]
};
