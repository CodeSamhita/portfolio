window.studyMaterialNotes = {
    1: {
        title: "Study material extract: urban informatics foundations",
        source: "Urban Informatics.docx and Week1.pptx from study matirial",
        focus: "Use this section to connect the first assignment questions with the fuller lecture framing: people, place, technology, governance, urban data ecosystems, and smart-city case studies.",
        extracts: [
            {
                heading: "Core framework and urban data ecosystem",
                points: [
                    "Urban informatics sits at the intersection of ICT, data science, urban planning, and social science. It studies how city data is produced, managed, analyzed, and turned into urban decisions.",
                    "The people-place-technology framework should be read as an interaction model. People include citizens, planners, operators, firms, and administrators; place includes wards, streets, buildings, services, and neighborhoods; technology includes sensors, databases, APIs, dashboards, GIS, and cloud systems.",
                    "The data ecosystem includes administrative records, sensor streams, transport records, satellite and GIS layers, volunteered/citizen data, social media, images, video, text, and other high-dimensional or unstructured sources."
                ],
                examUse: "For MCQs, do not treat technology as the whole subject. If the question asks about people, participation, data generation, or use of information, the answer is about stakeholders and governance, not only sensors or software."
            },
            {
                heading: "Big data, urban analytics, and complexity",
                points: [
                    "Urban data is often described through volume, velocity, and variety. Velocity is the live or high-frequency inflow of data, such as traffic feeds, sensor readings, or service alerts.",
                    "Urban analytics uses descriptive, predictive, spatial, temporal, and machine-learning methods to find patterns in mobility, pollution, services, land use, and infrastructure.",
                    "Cities are complex systems. Transport affects land use, land use affects demand, service access affects equity, and infrastructure failures can cascade across sectors."
                ],
                examUse: "When an option mentions trends or variation over time, think time-series. When it mentions rapid inflow with little delay, think velocity. When it mentions linked effects across sectors, think systems complexity."
            },
            {
                heading: "Governance, participation, and India context",
                points: [
                    "Data-driven governance uses systematically collected and analyzed data for decisions, monitoring, performance management, and service improvement.",
                    "Digital participation includes online consultation, complaint platforms, participatory mapping, dashboards, and channels that let residents communicate needs or priorities.",
                    "Citizen science differs from expert-only collection because residents actively contribute observations, measurements, reports, or local knowledge.",
                    "The India-focused institutional layer includes DataSmart Cities roles, City Data Cells, data alliances, ICCCs, UPYOG, and national digital infrastructure such as BharatNet."
                ],
                examUse: "For role-matching questions, separate scale and function: national strategy, city governance, analytics support, collaboration, service delivery, and real-time command operations."
            },
            {
                heading: "Case-study anchors and open-data platforms",
                points: [
                    "Singapore's Smart Nation framing is a useful anchor for integrated digital services, mobility, and whole-of-government urban data use.",
                    "Barcelona is commonly used as a smart-city case for IoT-enabled services, public-space management, waste, mobility, and citizen-facing innovation.",
                    "Helsinki's open municipal data illustrates transparency, reuse, and civic innovation through accessible public datasets.",
                    "Pune Open Data, NYC Open Data, Transport for London APIs, and NIUA digital governance material are useful examples for platform-matching questions."
                ],
                examUse: "If the option asks for transport APIs, think TfL. If it asks legal backing and large municipal publication, think NYC Open Data. If it asks Indian digital governance standards, think NIUA."
            }
        ]
    },
    2: {
        title: "Study material extract: urban data and database theory",
        source: "Urban Informatics.docx and Week2.pptx from study matirial",
        focus: "This extract adds the missing theory behind database MCQs: data categories, structured formats, DBMS purpose, relational design, anomalies, normal forms, and NoSQL choices.",
        extracts: [
            {
                heading: "Urban data categories and formats",
                points: [
                    "Urban data can be categorized by source and city function: demographic records, land records, transport data, environmental readings, service complaints, infrastructure inventories, imagery, and volunteered/citizen data.",
                    "CSV is flat and tabular. JSON represents name-value data and nested lists or objects. XML uses tagged hierarchy and can carry metadata with the data.",
                    "Unstructured data such as images, videos, free text, audio, and social media needs preprocessing or feature extraction before normal tabular analysis."
                ],
                examUse: "Choose CSV for simple row-column records, JSON for nested API-like data, XML for tagged hierarchy, and unstructured-data answers when the source is image, text, audio, or video."
            },
            {
                heading: "Database, DBMS, RDBMS, and MS Access",
                points: [
                    "A database is an organized collection of related data. A DBMS is the software that stores, retrieves, updates, secures, and manages that data.",
                    "Database models include hierarchical, network, relational, object-oriented, document, graph, key-value, and wide-column models.",
                    "An RDBMS stores data in tables and uses primary keys, foreign keys, constraints, and SQL to preserve structure and relationships.",
                    "Microsoft Access is a small-scale desktop DBMS useful for lightweight forms, tables, queries, and reports, but not for large distributed urban data platforms."
                ],
                examUse: "Reject options that describe a spreadsheet, programming language, or visualization tool as a DBMS unless the option actually manages database storage and querying."
            },
            {
                heading: "Normalization and anomalies",
                points: [
                    "Normalization organizes tables to reduce redundancy and prevent insertion, deletion, and update anomalies.",
                    "An insertion anomaly occurs when a new fact cannot be added without unrelated data. A deletion anomaly occurs when removing one record unintentionally removes another fact. An update anomaly occurs when the same fact must be changed in many places.",
                    "1NF requires atomic values and no repeating groups. 2NF removes partial dependency on part of a composite key. 3NF removes transitive dependency. BCNF requires every determinant to be a candidate key. 4NF addresses multi-valued dependencies."
                ],
                examUse: "If the question describes repeated facts or inconsistent updates, choose normalization. If it asks which normal form removes transitive dependency, choose 3NF."
            },
            {
                heading: "NoSQL, BASE, and MongoDB",
                points: [
                    "NoSQL systems are useful when data is large, distributed, flexible in schema, graph-like, document-oriented, or high velocity.",
                    "BASE means basically available, soft state, and eventual consistency. It is common in distributed systems that prioritize availability and scale over strict immediate consistency.",
                    "Document databases such as MongoDB store JSON-like documents. Graph databases model relationships. Key-value stores support fast lookup. Wide-column stores support large distributed tables."
                ],
                examUse: "NoSQL is not automatically better than SQL. Pick it when the question emphasizes flexible schema, scale, availability, graph relationships, or heterogeneous records."
            }
        ]
    },
    3: {
        title: "Study material extract: data access, SQL, APIs, and management",
        source: "Urban Informatics.docx and Week3.pptx from study matirial",
        focus: "This extract strengthens the practical database-access layer: MySQL, PostgreSQL, REST APIs, SQL command families, joins, views, indexes, procedures, scraping, and cleaning.",
        extracts: [
            {
                heading: "MySQL, PostgreSQL, and query processing",
                points: [
                    "MySQL is commonly introduced through the command-line shell and MySQL Workbench. The shell supports direct SQL execution, while Workbench gives a graphical interface for schema design, queries, and inspection.",
                    "PostgreSQL is a full-featured relational system with strong standards support and extensibility. Its query processor includes parsing, planning/optimization, execution, and result return.",
                    "The planner/optimizer estimates the cost of execution paths, which matters for joins, indexes, subqueries, and large urban tables."
                ],
                examUse: "If the question asks about a graphical MySQL tool, choose Workbench. If it asks how a DBMS chooses an efficient path, think query planner or optimizer."
            },
            {
                heading: "REST API access and web data",
                points: [
                    "A REST API is a request-response interface built around endpoints, HTTP methods, headers, optional bodies, and server responses.",
                    "GET retrieves data, POST creates or sends data, PUT updates data, and DELETE removes data. Status codes report success or failure.",
                    "Headers carry metadata such as authorization, content type, or API keys. The body carries submitted data, often in JSON.",
                    "Web scraping is used when no official API exists, but it must respect legal limits, terms of service, robots rules, and technical barriers."
                ],
                examUse: "Do not confuse an API endpoint with the database itself. APIs expose controlled access, while the database remains protected behind the service layer."
            },
            {
                heading: "SQL command families and operations",
                points: [
                    "DDL defines structure: CREATE, ALTER, DROP, and TRUNCATE. DML changes records: INSERT, UPDATE, DELETE. DQL retrieves data through SELECT. DCL controls permissions through GRANT and REVOKE.",
                    "DELETE can use WHERE and can usually be rolled back inside a transaction. TRUNCATE removes all rows quickly, resets counters in many systems, and is treated as a structural operation.",
                    "A transaction groups operations so they succeed or fail together, supporting consistency and recovery."
                ],
                examUse: "If an MCQ asks for filtered row removal, choose DELETE. If it asks for wiping a table quickly without row-by-row filtering, choose TRUNCATE."
            },
            {
                heading: "Joins, subqueries, views, indexes, procedures, and cleaning",
                points: [
                    "A subquery is nested inside another SQL statement. The inner query supplies a value, table, or condition to the outer query.",
                    "INNER JOIN returns matches in both tables. LEFT JOIN keeps all left-table records and fills missing right-side matches with NULL. RIGHT JOIN does the reverse. FULL JOIN keeps records from both sides where supported.",
                    "A view is a virtual table based on a SELECT query. It can simplify complex queries and hide sensitive columns.",
                    "An index speeds lookup and filtering but can slow inserts and updates because the index must also be maintained.",
                    "Stored procedures package reusable SQL actions, while functions usually return a single value and can often be used inside SELECT expressions.",
                    "Urban data cleaning includes standardizing dates and categories, removing duplicates, handling missing values, and deciding whether outliers are errors or meaningful urban extremes."
                ],
                examUse: "For performance, think index. For simplified or restricted query output, think view. For repeated database workflow, think stored procedure. For one calculated return value, think function."
            }
        ]
    },
    4: {
        title: "Study material extract: Python basics, data structures, and OOP",
        source: "Week4.pptx from study matirial",
        focus: "This extract adds lecture-slide details that support Python code-output MCQs and OOP theory questions.",
        extracts: [
            {
                heading: "Programming evolution, setup, IDEs, and libraries",
                points: [
                    "Programming evolved from machine language and assembly toward procedure-oriented, object-oriented, and scripting/data-centric languages. Python is high-level, interpreted, object-oriented, and widely used for scripts and analytics.",
                    "Anaconda is useful because it bundles Python with many scientific libraries. Jupyter supports notebook-style code, output, equations, visualization, and narrative text. Spyder is a scientific IDE. Google Colab runs notebooks in the browser with cloud compute. VS Code and PyCharm support editing, debugging, version control, and larger projects.",
                    "Library roles matter: pandas handles tabular data, NumPy handles arrays and numerical computing, Statsmodels supports statistical models, SciPy supports scientific computing, scikit-learn supports machine learning, Matplotlib and Seaborn support visualization, and TensorFlow/Keras support deep learning."
                ],
                examUse: "For library MCQs, match the task to the library role rather than choosing the most famous library. For IDE MCQs, match notebook, scientific IDE, cloud notebook, lightweight editor, or professional project IDE."
            },
            {
                heading: "Python syntax, variables, input, output, and functions",
                points: [
                    "Python code runs line by line through an interpreter. Errors are detected during execution rather than through a separate compilation stage.",
                    "print() displays text. Single and double quotes both work for strings. Escape sequences include newline, tab, and escaped quotes. f-strings insert variable values inside braces.",
                    "Variables can be local or global. A variable defined inside a function is local unless explicitly handled otherwise.",
                    "Functions organize named blocks of code, accept arguments, return values, reduce repetition, and make complex urban-analysis workflows easier to debug.",
                    "A function can call another function, and a function can also be passed as an argument to another function."
                ],
                examUse: "For code-output questions, trace assignments, type conversion, function calls, return values, and f-string substitution in order. Do not assume a function executes until it is called."
            },
            {
                heading: "Data structures and control flow",
                points: [
                    "Arrays are efficient for homogeneous numeric data. Lists are ordered, mutable, and allow duplicates. Tuples are ordered and immutable. Sets are unordered and keep unique values. Dictionaries map unique keys to values.",
                    "Lists use append, insert, pop, remove, sort, reverse, index, and count. Sets use add, update, union, intersection, difference, symmetric_difference, issubset, and issuperset. Dictionaries use key lookup, assignment/update, get, pop, del, keys, and sorted keys.",
                    "if, elif, and else implement branching logic. for loops are used when iterating over a known sequence or collection. while loops repeat until a condition becomes false and are useful when the number of iterations is not known in advance.",
                    "pass does nothing and acts as a placeholder, continue skips to the next loop iteration, and break terminates the loop."
                ],
                examUse: "Use mutability, ordering, duplicates, and access method to distinguish list, tuple, set, and dictionary answers. For loop MCQs, ask whether the loop count is known or condition-driven."
            },
            {
                heading: "OOP with urban examples",
                points: [
                    "Procedure-oriented programming often shares data across functions, which can make large systems harder to modify and maintain. OOP bundles data and functions into objects that represent real entities.",
                    "An object combines attributes and methods. A class is the blueprint for objects. In Python, __init__ initializes object data when an instance is created.",
                    "Encapsulation binds data and methods and protects internal state from unrestricted external change. Abstraction exposes essential behavior without showing implementation detail.",
                    "Inheritance lets a child class reuse and extend a parent class. super() calls a parent method from a child class.",
                    "Polymorphism lets the same method name behave differently for different object types. Dynamic binding means the method implementation is selected at runtime. Message passing means objects request actions from one another through method calls.",
                    "Urban examples include Building objects with height and land-use attributes, Road objects with travel-time methods, TrafficSystem objects asking Road objects for capacity, and agent-based Vehicle objects moving on an XY grid."
                ],
                examUse: "If Bus, Car, Bicycle, and Metro all implement calculate_travel_time() differently, the concept is polymorphism. If a class reuses another class, it is inheritance. If details are hidden behind method names, it is abstraction or encapsulation depending on wording."
            }
        ]
    },
    5: {
        title: "Study material extract: Python data access, pandas, databases, and visualization",
        source: "Week5.pptx from study matirial",
        focus: "This extract adds practical pandas/database/visualization details used by assignment questions on data cleaning, plotting, scaling, and database access.",
        extracts: [
            {
                heading: "Python file and database access",
                points: [
                    "Python can access CSV through the built-in csv module, JSON through the json module, Excel through pandas/openpyxl, and databases through connectors or ORMs.",
                    "CSV writing uses writerows for multiple rows and reader to iterate through rows. JSON maps naturally to dictionaries and lists, which is why survey records often appear as a list of dictionaries.",
                    "Direct database connectors require a specific driver, connection parameters, cursor creation, SQL execution, fetch, commit, and close.",
                    "SQLite is serverless and self-contained, simple to integrate, and ACID-compliant. It is useful for local or lightweight applications, not for large distributed multi-user platforms.",
                    "MySQL and PostgreSQL connectors need host, user, password, database, and sometimes remote-access/firewall configuration."
                ],
                examUse: "When the option describes cursor.execute, commit, and fetchall, think direct connector. When it describes classes mapped to tables, think ORM."
            },
            {
                heading: "Pandas structures, inspection, cleaning, and transformation",
                points: [
                    "Series is a one-dimensional labeled array. DataFrame is a two-dimensional table. Index labels rows or columns. date_range creates regular time-based index values.",
                    "read_csv, to_csv, read_excel, to_excel, read_json, to_json, read_sql, and to_sql connect pandas to common file and database sources.",
                    "Inspection tools include head, tail, sample, info, describe, shape, columns, dtypes, value_counts, unique, isna, and notna.",
                    "Selection tools include loc for labels, iloc for positions, at and iat for fast scalar access, filter, isin, and query for SQL-like conditions.",
                    "Cleaning and preprocessing use dropna, fillna, interpolate, duplicated, drop_duplicates, replace, astype, drop, set_index, and reset_index.",
                    "Transformation tools include apply, map, assign, rename, pipe, clip, sort_values, sort_index, rank, groupby, agg, transform, size, count, pivot_table, merge, join, concat, pivot, melt, stack, and unstack."
                ],
                examUse: "Choose the method by the action word: inspect schema with info, summarize numbers with describe, count missing with isna().sum(), fill missing with fillna, convert type with astype, and aggregate groups with groupby plus agg or mean."
            },
            {
                heading: "SQLAlchemy and ORM workflow",
                points: [
                    "ORM frameworks such as SQLAlchemy provide an abstraction layer so Python classes and objects can interact with database tables without writing every raw SQL statement.",
                    "ORMs map objects to tables, support CRUD operations, provide query builders, and allow database abstraction across SQLite, MySQL, PostgreSQL, and other systems.",
                    "A typical SQLAlchemy workflow defines a declarative Base, creates a model class, builds an engine from a database URL, creates tables from metadata, opens a session, adds objects, commits, queries, and closes the session.",
                    "The engine manages database connectivity. The session manages object persistence and transaction scope. The model class defines table columns and object behavior."
                ],
                examUse: "If the question names Base, engine, session, model class, or mapping class attributes to columns, the answer is SQLAlchemy/ORM rather than raw SQL connector."
            },
            {
                heading: "NumPy, plotting libraries, and exploratory analysis",
                points: [
                    "NumPy provides array creation, reshaping, dtype conversion, vectorized arithmetic, sorting/searching, random generation, stacking, save/load, and linear algebra operations. It underpins pandas, SciPy, visualization, and scikit-learn workflows.",
                    "Matplotlib creates figures, axes, lines, scatter plots, bar plots, histograms, boxplots, labels, legends, grids, colorbars, heatmaps, 3D plots, and saved figures.",
                    "Seaborn builds higher-level statistical plots such as scatterplot, lineplot, histplot, kdeplot, barplot, countplot, boxplot, violinplot, regplot, lmplot, heatmap, pairplot, FacetGrid, relplot, displot, and catplot.",
                    "Univariate analysis studies one variable. Bar plots compare category aggregates. Histograms and KDE show distribution shape, skew, multimodality, and concentration. Boxplots show median, quartiles, whiskers, and outliers across groups."
                ],
                examUse: "Choose bar plot for comparing group means, histogram/KDE for distribution shape, boxplot for quartiles and outliers across categories, and scatter plot for bivariate relationships."
            },
            {
                heading: "Correlation, regression, outliers, and scaling",
                points: [
                    "IQR outlier logic uses Q1, Q3, and IQR = Q3 - Q1. Common fences are Q1 - 1.5*IQR and Q3 + 1.5*IQR.",
                    "Scatterplots reveal possible direction, form, and strength of relationships before formal modeling. They help decide whether linear correlation, non-parametric correlation, or regression is suitable.",
                    "Pearson correlation measures strength and direction of a linear relationship between continuous variables and is sensitive to outliers. Spearman rank correlation is safer for monotonic, non-linear, or outlier-prone relationships.",
                    "Correlation is not causation. Regression models functional relationships and estimates intercept, slope, predicted values, and residuals.",
                    "Regression assumptions include linearity, constant variance, and absence of strong outlier influence. Residuals are observed minus predicted values.",
                    "Standardization uses z = (x - mean) / standard deviation, centers data at 0, and scales by variance. Min-max normalization rescales to 0-1, preserves order, and is sensitive to outliers."
                ],
                examUse: "If the question says linear and continuous with no large outliers, choose Pearson. If it says monotonic/rank/outlier-safe, choose Spearman. If it asks fixed 0-1 range, choose min-max normalization."
            }
        ]
    },
    6: {
        title: "Study material continuation: machine-learning foundations for urban questions",
        source: "Continuation from assignment PDFs, question bank, official course flow, and reference frameworks; no Week 6-12 local study PPT/docx was present",
        focus: "Use this week to move from descriptive urban analytics into model-based reasoning. The assignment questions become easier when every method is tied to labels, features, assumptions, validation, and an urban decision.",
        extracts: [
            {
                heading: "Urban ML problem framing",
                points: [
                    "Machine learning in urban informatics means learning patterns from examples so a system can classify, predict, group, recommend, detect anomalies, or choose actions for new city situations.",
                    "A feature is an input variable such as hour, rainfall, road type, land-use mix, speed, PM2.5, distance to metro, or complaint count. A target is the value the model is trying to predict, such as congestion level, demand, risk class, or next-hour AQI.",
                    "A good ML question should identify the unit of analysis. A record could be a trip, road segment, sensor reading, ward, household, grid cell, building, complaint, or image tile. Confusing the unit usually leads to wrong features and wrong evaluation.",
                    "Feature leakage happens when the training data contains information that would not be known at prediction time. For example, using final incident response time to predict whether an incident will be high priority leaks the answer into the input."
                ],
                examUse: "When an MCQ gives an urban scenario, first decide the target and whether labels exist. That single step separates supervised prediction, unsupervised discovery, semi-supervised learning, and reinforcement learning."
            },
            {
                heading: "Learning types, transformers, and black-box risk",
                points: [
                    "Supervised learning uses labeled examples. Urban examples include predicting travel time from historic trips, classifying complaints by category, or estimating flood risk from known flood locations.",
                    "Unsupervised learning finds structure without labels. It is useful for clustering neighborhoods, grouping similar mobility patterns, detecting unusual sensor behavior, or reducing many indicators into fewer components.",
                    "Semi-supervised learning combines a small labeled set with a larger unlabeled set. This fits urban cases where labeling satellite images, CCTV frames, or complaint text is expensive but unlabeled data is abundant.",
                    "Reinforcement learning learns from actions and rewards in an environment. Adaptive signal control is a typical urban example because the agent chooses signal timings and receives feedback from delay, queue length, or throughput.",
                    "SARSA is an on-policy reinforcement-learning method. It updates learning from the current state, current action, reward, next state, and next action under the policy being followed.",
                    "Large language models use transformer-style deep learning trained on large text corpora. In urban informatics they may summarize reports, classify complaints, answer policy queries, or assist data documentation, but their outputs still need verification.",
                    "A black-box model may be accurate but difficult to explain. In city governance this matters because service allocation, enforcement, risk scoring, or public safety decisions need auditability and fairness."
                ],
                examUse: "Choose reinforcement learning only when actions and rewards are central. Choose black-box risk when the question is about interpretability, accountability, or inability to see the model's reasoning."
            },
            {
                heading: "Validation, preprocessing, and regression diagnostics",
                points: [
                    "A train-test split protects evaluation by training on one part of the data and testing on unseen records. In time-series urban data, the split should often respect time order so future data is not used to predict the past.",
                    "Scaling matters for distance-based or gradient-based methods because variables measured in large units can dominate variables measured in small units. Standardization centers by mean and standard deviation; min-max scaling maps values into a fixed range.",
                    "Transformations such as log scaling can reduce skew in variables such as population density, trip counts, property prices, or pollutant concentrations. The purpose is not cosmetic; it can improve model stability and interpretation.",
                    "VIF detects multicollinearity among predictors. If road density, population density, built-up area, and land price are strongly correlated, regression coefficients may become unstable even when prediction looks reasonable.",
                    "R-squared measures the proportion of variation explained by a regression model, but it does not prove causation or guarantee that predictors are independent. High R-squared with high VIF can still be a warning sign."
                ],
                examUse: "If the option mentions unstable coefficients or correlated predictors, think VIF. If it mentions unseen future performance, think train-test split or cross-validation, not just training accuracy."
            },
            {
                heading: "Statistical choices and urban method matching",
                points: [
                    "Pearson correlation measures linear association between continuous variables and is sensitive to outliers. It is suitable when the relationship is approximately linear, such as temperature and electricity demand in a clean dataset.",
                    "Spearman correlation uses ranks and is better for monotonic relationships, skewed data, ordinal scales, or outlier-prone urban indicators.",
                    "Kruskal-Wallis is a non-parametric test for comparing more than two independent groups when normality assumptions are weak. It can compare pollution or service-delay distributions across zones.",
                    "Entropy measures uncertainty or impurity in class labels. It appears in tree-based learning because a useful split reduces class uncertainty.",
                    "LSTM is designed for sequence and time-series patterns, so it fits traffic flow, demand, rainfall, energy, or AQI forecasting better than static tabular classification.",
                    "DBSCAN is useful when urban clusters are irregular in shape and outliers matter, such as accident hotspots, noise complaints, or GPS stop locations.",
                    "PCA reduces many correlated numeric variables into fewer components. LDA is supervised and uses class labels to find separation between known categories."
                ],
                examUse: "Match method to data shape: Pearson for linear continuous association, Spearman for rank/monotonic association, Kruskal-Wallis for group comparison, LSTM for sequences, DBSCAN for density and outliers, PCA for unsupervised reduction."
            }
        ]
    },
    7: {
        title: "Study material continuation: supervised learning, trees, ensembles, and tuning",
        source: "Continuation from assignment PDFs, question bank, official course flow, and reference frameworks; no Week 6-12 local study PPT/docx was present",
        focus: "This week should make classification and regression questions feel less like memorized terms. Read each algorithm as a way of turning labeled urban records into a rule that can generalize.",
        extracts: [
            {
                heading: "Supervised workflow and scikit-learn pipeline thinking",
                points: [
                    "Supervised learning starts with examples that contain inputs and known outputs. Classification predicts a category, while regression predicts a numeric value.",
                    "Urban classification examples include accident severity class, land-use type, complaint category, flood-risk class, and whether a street segment is congested. Urban regression examples include ridership, travel time, housing price, energy use, or PM2.5 value.",
                    "A practical workflow is to define the target, split data, clean missing values, encode categories, scale where needed, train a model, tune hyperparameters, evaluate on validation/test data, and interpret errors.",
                    "In scikit-learn, model_selection supports train-test split, cross-validation, and hyperparameter search. impute handles missing values, preprocessing handles scaling and encoding, and feature_selection helps select informative predictors.",
                    "A pipeline keeps preprocessing and modeling together, reducing mistakes such as fitting a scaler on all data before the train-test split."
                ],
                examUse: "If the target is category, choose classification. If the target is numeric, choose regression. If the question asks where train_test_split, GridSearchCV, or cross_val_score belongs, think sklearn.model_selection."
            },
            {
                heading: "Decision trees and split criteria",
                points: [
                    "A decision tree asks a sequence of feature-based questions until records reach a leaf. This is easy to explain to planners because each path resembles a rule.",
                    "Entropy measures uncertainty in class labels. A node with mixed classes has high entropy; a pure node has low or zero entropy.",
                    "Information gain is the reduction in entropy after a split. The tree prefers splits that make child nodes cleaner than the parent node.",
                    "Gini impurity measures the chance of misclassification if a label is randomly assigned based on class proportions. Lower Gini means a cleaner split.",
                    "Gain ratio adjusts information gain so features with many distinct values do not look unfairly attractive only because they split data into many tiny groups.",
                    "Trees can overfit when they grow too deep, split on noise, or create leaves with very few observations. Controls include max_depth, min_samples_leaf, pruning, and validation."
                ],
                examUse: "If the question asks how a tree chooses a split, connect entropy to information gain or connect class mixing to Gini. If it asks why a perfect training tree fails later, choose overfitting."
            },
            {
                heading: "Bagging, random forest, boosting, and XGBoost",
                points: [
                    "Bagging trains many models independently on bootstrap samples and combines their outputs. It mainly reduces variance, which helps unstable learners such as decision trees.",
                    "Random forest is bagging plus random feature selection at each split. This makes individual trees less correlated and usually improves generalization.",
                    "Boosting trains models sequentially, where later learners focus more on earlier errors. It can be powerful but needs careful tuning because it can overfit noisy data.",
                    "XGBoost is a gradient boosting implementation that is widely used for structured tabular data. It includes regularization and many controls for learning rate, tree depth, row sampling, and column sampling.",
                    "The subsample parameter in XGBoost controls the fraction of training rows used for each tree. Values below 1.0 can reduce overfitting by adding randomness."
                ],
                examUse: "Parallel bootstrap models point to bagging. Bagging plus random features points to random forest. Sequential correction of errors points to boosting. Row fraction per tree in XGBoost points to subsample."
            },
            {
                heading: "Evaluation, tuning, and public-sector interpretation",
                points: [
                    "GridSearchCV searches a grid of hyperparameter combinations and evaluates them using cross-validation. It is a tuning tool, not a model family.",
                    "cross_val_score estimates model performance across multiple folds so the result is less dependent on one train-test split.",
                    "For classification, accuracy can be misleading when classes are imbalanced. A rare flood, accident, or failure class may need precision, recall, F1, confusion matrix, or ROC-AUC depending on the cost of mistakes.",
                    "For regression, common measures include MAE, RMSE, and R-squared. MAE is easier to explain, while RMSE penalizes large errors more strongly.",
                    "In urban applications, the best model is not always the highest-scoring model. Interpretability, fairness, data quality, maintainability, and consequences of false positives and false negatives matter."
                ],
                examUse: "Hyperparameter comparison means GridSearchCV. Repeated validation scores mean cross_val_score. If an option ignores imbalance in a public-risk task, it is usually incomplete."
            }
        ]
    },
    8: {
        title: "Study material continuation: SVM boundaries, limited labels, active learning, and distances",
        source: "Continuation from assignment PDFs, question bank, official course flow, and reference frameworks; no Week 6-12 local study PPT/docx was present",
        focus: "Week 8 connects classification geometry with real labeling constraints. The assignment options often describe a boundary, an unlabeled-data assumption, a sampling rule, or a distance metric.",
        extracts: [
            {
                heading: "SVM geometry and margin reasoning",
                points: [
                    "A support vector machine tries to find a separating boundary with the widest possible margin between classes. In two dimensions the boundary is a line; in higher dimensions it is a hyperplane.",
                    "Support vectors are the training points closest to the decision boundary. They matter because moving them can change the final boundary, while far-away points may not affect it.",
                    "A hard margin assumes classes can be separated without error. A soft margin allows some violations, which is more realistic for noisy urban data such as complaints, risk zones, or satellite-derived land-use labels.",
                    "The regularization parameter controls the tradeoff between a wider margin and fewer classification errors. A very strict setting may overfit, while a too-loose setting may underfit.",
                    "SVM training is usually framed as a convex quadratic optimization problem, which is why the optimum is not a random local solution in the same way as many deep networks."
                ],
                examUse: "Boundary-near points mean support vectors. Allowing violations means soft margin. A tradeoff between margin width and classification errors is the regularization idea."
            },
            {
                heading: "Kernel selection for urban data shapes",
                points: [
                    "A kernel lets SVM act as if data has been transformed into a higher-dimensional feature space without explicitly computing every transformed feature.",
                    "A linear kernel is suitable when classes are approximately separable in the original feature space and often works well for high-dimensional sparse data.",
                    "A polynomial kernel captures interactions between features, such as when risk depends on combinations of density, road hierarchy, and land-use mix.",
                    "An RBF kernel models local similarity and flexible nonlinear boundaries. It is useful when class regions are curved or irregular but can overfit if tuned poorly.",
                    "A sigmoid kernel resembles neural activation behavior but is less commonly the strongest practical choice; it appears in MCQs mainly as a kernel-name recognition item."
                ],
                examUse: "Do not choose RBF automatically. If the question emphasizes high-dimensional sparse features, linear can be the better answer. If it emphasizes nonlinear local similarity, RBF is more suitable."
            },
            {
                heading: "Semi-supervised learning and active learning",
                points: [
                    "Semi-supervised learning uses both labeled and unlabeled data. It is valuable when labeling is expensive, such as manually tagging images, damage reports, or land-use samples.",
                    "The smoothness assumption says nearby points likely have the same label. The cluster assumption says points in the same dense cluster likely share a label. The manifold assumption says high-dimensional data may lie on a lower-dimensional structure.",
                    "Label propagation spreads labels through a graph or similarity network, so unlabeled records can inherit likely labels from nearby labeled records.",
                    "Active learning asks a human to label selected records that should improve the model most. It reduces labeling effort by avoiding random labeling.",
                    "Uncertainty sampling chooses low-confidence cases. Margin sampling chooses cases closest to the decision boundary. Entropy sampling chooses cases with the most uncertain probability distribution. Diversity sampling chooses representative cases from different parts of the data."
                ],
                examUse: "If the phrase is low confidence, choose uncertainty. If it says close to boundary, choose margin. If it says high class-distribution uncertainty, choose entropy. If it says cover different regions, choose diversity."
            },
            {
                heading: "Distance metrics and multinomial logistic regression",
                points: [
                    "Distance metrics define what similar means. This choice matters for SVM kernels, clustering, active learning, GIS similarity, and nearest-neighbor methods.",
                    "Cosine distance compares direction rather than magnitude. It is useful when two records have similar profiles even if their absolute scale differs.",
                    "Hamming distance counts mismatches between categorical or binary attributes, such as whether two service records share the same set of yes/no features.",
                    "Mahalanobis distance accounts for correlations among numeric variables, so it is safer when variables such as density, land value, and transit access move together.",
                    "Manhattan distance sums axis-aligned differences and fits grid-like movement or block-style distance reasoning better than straight-line distance in some city settings.",
                    "Multinomial logistic regression extends logistic regression to more than two categories. It assumes appropriate log-odds structure, independent observations, no perfect collinearity, and enough observations for stable estimates.",
                    "Maximum likelihood estimation chooses parameter values that make the observed data most probable under the model."
                ],
                examUse: "Distance questions are data-type questions in disguise. Category mismatch points to Hamming, correlated numeric variables to Mahalanobis, direction/profile similarity to cosine, and grid movement to Manhattan."
            }
        ]
    },
    9: {
        title: "Study material continuation: association rules, clustering, density, mixtures, and PCA",
        source: "Continuation from assignment PDFs, question bank, official course flow, and reference frameworks; no Week 6-12 local study PPT/docx was present",
        focus: "Week 9 is about discovering hidden structure without target labels. The assignment asks you to distinguish co-occurrence, similarity, density, probabilistic membership, and dimensionality reduction.",
        extracts: [
            {
                heading: "Association rules and incidence matrices",
                points: [
                    "Association rule learning finds events or items that occur together more often than expected. In urban data this can mean complaint combinations, accident circumstances, maintenance failures, travel behavior, or service-use patterns.",
                    "A binary incidence matrix converts each transaction into 0/1 values showing whether each item or event is present. This makes frequent itemset mining possible.",
                    "Support measures how often an itemset or rule appears in the whole dataset. Low support may describe a rare pattern, even if it is interesting.",
                    "Confidence measures how often the rule consequence appears when the rule condition appears. High confidence means the rule is often correct conditionally.",
                    "Lift compares the rule with what would be expected if the items were independent. Lift greater than 1 suggests positive association beyond chance."
                ],
                examUse: "Frequency means support, conditional reliability means confidence, and strength beyond independence means lift. Many wrong options mix these three."
            },
            {
                heading: "Clustering foundations, linkage, elbow, and silhouette",
                points: [
                    "Clustering groups records based on similarity, not known labels. It can create neighborhood typologies, station groups, mobility profiles, or service-demand zones.",
                    "K-means requires the number of clusters k in advance and minimizes within-cluster sum of squares. The elbow method looks for the point where adding more clusters gives much smaller improvement.",
                    "Silhouette score compares how close a point is to its own cluster versus other clusters. A higher score usually means better cohesion and separation; a value near zero suggests boundary cases.",
                    "Hierarchical clustering builds a tree of nested groups. Single linkage uses nearest pairs and can create chain-like clusters. Complete linkage uses farthest pairs and tends to form compact clusters. Ward linkage minimizes increase in within-cluster variance.",
                    "K-prototypes is useful for mixed numeric and categorical data, such as combining population density, road length, ward type, and service category."
                ],
                examUse: "If the question says chain effect, choose single linkage. If it says compact farthest-pair behavior, choose complete linkage. If it says variance-minimizing merge, choose Ward."
            },
            {
                heading: "DBSCAN, density structure, and Mean Shift",
                points: [
                    "DBSCAN groups dense regions and marks sparse points as noise. It is useful for irregular spatial clusters and outliers, such as accident points, crime incidents, GPS stops, or complaint hotspots.",
                    "A DBSCAN core point has at least MinPts neighbors within epsilon distance. Border points are reachable from core points but do not have enough neighbors themselves.",
                    "DBSCAN does not require k in advance, but it is sensitive to epsilon and MinPts. Poor parameter choice can merge clusters or mark many valid points as noise.",
                    "Mean Shift finds dense modes by iteratively moving points toward higher-density regions. It can detect clusters without preselecting k, but bandwidth choice strongly affects results.",
                    "Density methods are often more suitable than k-means when urban phenomena form irregular shapes rather than neat circular groups."
                ],
                examUse: "Irregular clusters plus outlier detection points to DBSCAN. Dense-mode discovery without fixed k points to Mean Shift. Fixed k and spherical clusters point more toward k-means."
            },
            {
                heading: "GMM, BIC, PCA, and hard versus soft clustering",
                points: [
                    "Gaussian mixture models represent data as a mixture of probability distributions. Instead of giving only one hard label, they can assign probabilities of belonging to each cluster.",
                    "Soft clustering gives membership degrees, while hard clustering assigns each point to one cluster only. Soft membership is useful when neighborhoods or travel patterns overlap.",
                    "BIC balances model fit with model complexity. In common model selection, lower BIC is preferred because it penalizes unnecessary extra parameters.",
                    "Increasing the number of GMM components can improve fit but also increases complexity and can be penalized by BIC.",
                    "PCA creates new uncorrelated components that preserve as much variance as possible. It helps when many urban indicators are correlated, such as density, accessibility, income, built-up area, and infrastructure measures.",
                    "PCA is unsupervised and does not use class labels. If the method uses labels to separate known groups, the question is likely about LDA rather than PCA."
                ],
                examUse: "Probabilistic cluster membership means GMM. Lower BIC means better balance of fit and simplicity. Reducing correlated numeric variables without labels points to PCA."
            }
        ]
    },
    10: {
        title: "Study material continuation: neural networks, deep learning, explainability, and reinforcement learning",
        source: "Continuation from assignment PDFs, question bank, official course flow, and reference frameworks; no Week 6-12 local study PPT/docx was present",
        focus: "This week explains why deep models are chosen for images, sequences, nonlinear patterns, and decision policies. The assignment questions mainly test architecture-to-data matching and term-to-role matching.",
        extracts: [
            {
                heading: "ANN structure, hidden layers, and activations",
                points: [
                    "An artificial neural network contains an input layer, one or more hidden layers, and an output layer. Each connection has a weight that is adjusted during training.",
                    "Hidden neurons learn intermediate representations. In urban tasks, they may combine time, location, weather, land use, and history into patterns that are not obvious from one variable alone.",
                    "The number of hidden neurons is a capacity choice. Too few may underfit important patterns; too many may overfit if data is limited or noisy.",
                    "Activation functions add nonlinearity. Without them, stacked layers would behave like one linear transformation and could not model complex urban relationships well.",
                    "ReLU outputs zero for negative inputs and the input itself for positive values. Leaky ReLU allows a small negative output to reduce dead-neuron problems. Sigmoid maps to 0-1, tanh maps to -1 to 1, and GELU is common in modern transformer-style networks."
                ],
                examUse: "If the option asks why activation is needed, choose nonlinearity. If it asks output range, distinguish sigmoid, tanh, and ReLU carefully."
            },
            {
                heading: "Training, loss surfaces, gradients, and stability",
                points: [
                    "Training compares predictions with true values through a loss function, then adjusts weights to reduce that loss.",
                    "Backpropagation computes gradients of the loss with respect to weights so an optimizer can update them. It is the learning mechanism, not the final prediction itself.",
                    "Deep loss surfaces are complex because many nonlinear parameters interact. This can make optimization sensitive to initialization, learning rate, data scaling, and architecture.",
                    "Vanishing gradients become very small as they move backward through deep networks, making early layers learn slowly. Exploding gradients become too large and can destabilize training.",
                    "Careful initialization, batch normalization, residual connections, gated recurrent units, and suitable activations can improve training stability depending on model type."
                ],
                examUse: "If the question says weights are updated using derivatives, choose backpropagation. If it says gradients become too small or too large, choose vanishing or exploding gradients respectively."
            },
            {
                heading: "CNN, RNN, LSTM, kernels, and SHAP",
                points: [
                    "Convolutional neural networks are designed for grid-like spatial data. Urban examples include satellite images, street-view images, CCTV frames, road-surface images, or land-cover maps.",
                    "A CNN kernel is a small matrix that slides over an image or feature map to detect local patterns such as edges, textures, shapes, and spatial arrangements.",
                    "Recurrent neural networks are designed for sequences because they pass information from earlier steps to later steps. LSTM models improve long-sequence memory and are widely used for time-series forecasting.",
                    "Urban sequence examples include traffic speed, passenger demand, rainfall, power load, water demand, and air pollution readings.",
                    "SHAP explains how much each feature contributes to a prediction. This is useful when a city agency needs to explain why a model predicted high risk or high demand."
                ],
                examUse: "Image or spatial grid means CNN. Sequence or time-series means RNN/LSTM. Feature-contribution explanation means SHAP. Do not confuse a CNN kernel with an SVM kernel."
            },
            {
                heading: "Reinforcement learning and Bellman reasoning",
                points: [
                    "Reinforcement learning is about sequential decision-making. The model learns by interacting with an environment and receiving rewards.",
                    "The agent is the decision-maker, the state describes the current situation, the action is what the agent chooses, and the reward is feedback from the environment.",
                    "A policy maps states to actions. A return is the expected accumulated future reward, often discounted so near-term rewards count more than distant rewards.",
                    "Model-free RL learns from experience without an explicit model of the environment. Model-based RL uses or learns a model of how the environment changes.",
                    "Policy-based methods directly learn the policy. Value-based methods estimate the value of states or actions and derive actions from those estimates.",
                    "Bellman equations express value recursively: the value of a state or action depends on immediate reward plus expected future value."
                ],
                examUse: "When an MCQ asks for the decision-maker, answer agent. When it asks for feedback, answer reward. When it asks for the action rule, answer policy. Recursive future reward points to Bellman/return."
            }
        ]
    },
    11: {
        title: "Study material continuation: IoT sensing, communication, signals, and Arduino",
        source: "Continuation from assignment PDFs, question bank, official course flow, and reference frameworks; no Week 6-12 local study PPT/docx was present",
        focus: "Week 11 connects the physical city to digital analytics. Read the topics as one pipeline: measure a condition, convert the signal, process it on a board, transmit it, store it, and sometimes trigger an actuator.",
        extracts: [
            {
                heading: "IoT architecture for urban systems",
                points: [
                    "The sensing layer captures physical conditions such as temperature, motion, air quality, water level, light, noise, vibration, occupancy, or traffic flow.",
                    "The network layer moves sensor readings from devices to gateways, servers, or cloud platforms. It may use short-range, local, cellular, low-power wide-area, or internet protocols depending on range and energy needs.",
                    "An application layer turns data into dashboards, alerts, automation, analytics, or public services. In a smart-city context this might support waste collection, street lighting, parking, water monitoring, or public safety.",
                    "A full IoT workflow includes sensor calibration, sampling rate, power supply, device addressing, communication reliability, storage, security, and maintenance. MCQs often isolate one part, but the system only works when the chain is complete."
                ],
                examUse: "Capture from the real world means sensing layer. Transmission means network layer. Decision support, dashboard, or service action means application layer."
            },
            {
                heading: "Networks, addressing, and protocols",
                points: [
                    "WPAN means wireless personal area network and fits short-range communication around devices, such as Bluetooth-style local connections.",
                    "WWAN means wireless wide area network and fits long-distance or city-scale communication through wide-area wireless infrastructure.",
                    "IP provides addressing so devices can be identified and reached across networks. It is about network identity and routing, not signal conversion.",
                    "TCP/IP is the broader internet communication suite. TCP adds reliable ordered delivery, while IP handles addressing and routing.",
                    "Urban IoT designs must balance bandwidth, range, latency, energy, reliability, and deployment cost. A streetlight network and a CCTV network do not have the same communication needs."
                ],
                examUse: "Short-range device communication points to WPAN. Long-distance wide-area communication points to WWAN. Unique network addressing points to IP. Reliable exchange over networks points to TCP/IP."
            },
            {
                heading: "Signals, ADC, transfer functions, sensors, and actuators",
                points: [
                    "Analog signals vary continuously, such as voltage from a temperature or gas sensor. Digital signals use discrete values that a microcontroller can process more directly.",
                    "ADC converts an analog signal into a digital value. This is required when a continuous sensor output must be read by a digital board or computer.",
                    "A sensor transfer function expresses how sensor output depends on the stimulus. For example, output voltage may change as temperature, light, or gas concentration changes.",
                    "A sensor measures a condition; an actuator creates physical action. This distinction is central to MCQs because both appear in the same IoT loop.",
                    "Urban actuators include relays, valves, pumps, motors, barriers, signs, and lighting controllers. They can respond to analytics, thresholds, or manual commands."
                ],
                examUse: "Input from physical world means sensor. Converting continuous signal to digital value means ADC. Output movement or control means actuator."
            },
            {
                heading: "Arduino workflow, board details, and libraries",
                points: [
                    "The Arduino IDE is used to write, compile, and upload sketches to Arduino boards. It is part of the prototyping workflow, not the sensor itself.",
                    "Arduino Uno is based on the ATmega328P microcontroller. This detail appears as a direct board-identification question.",
                    "After installing the IDE, board selection, port selection, and USB drivers may be needed so the computer can detect and upload to the board.",
                    "The EEPROM library supports non-volatile data storage. The Ethernet library supports wired network connectivity. The GSM library supports cellular communication. The Bridge library supports communication between processors on compatible boards.",
                    "A simple urban prototype might read a sensor, convert the reading, apply a threshold, send data to a server, and trigger an actuator such as a light, servo, or buzzer."
                ],
                examUse: "Library matching questions are purpose-matching questions. EEPROM is storage, Ethernet is wired network, GSM is cellular, Bridge is processor communication, and IDE is coding/uploading."
            }
        ]
    },
    12: {
        title: "Study material continuation: Arduino components, GIS operations, spatial analytics, and ArcGIS Python",
        source: "Continuation from assignment PDFs, question bank, official course flow, and reference frameworks; no Week 6-12 local study PPT/docx was present",
        focus: "The final week ties components, spatial data, classification, and web GIS together. The assignment questions become relatable when you see the complete chain from sensing and records to spatial analysis and map-based decision support.",
        extracts: [
            {
                heading: "Servo motors and PIR sensors in urban prototypes",
                points: [
                    "A servo motor is an actuator that provides controlled angular movement. It is useful for gates, barriers, camera positioning, small mechanical controls, and model-scale smart-city prototypes.",
                    "A PIR sensor detects motion by sensing changes in infrared radiation from warm bodies. It can support occupancy detection, lighting triggers, security alerts, or pedestrian-presence prototypes.",
                    "Servo and PIR are often confused because they appear together in automation examples. The servo acts; the PIR senses.",
                    "A typical logic chain is PIR detects motion, microcontroller reads the sensor state, code decides whether a condition is met, and a servo or light actuator responds."
                ],
                examUse: "Controlled angular movement points to servo. Motion detection through infrared change points to PIR. If the question asks measurement, do not choose the actuator."
            },
            {
                heading: "GIS query, join, and relate",
                points: [
                    "A GIS query selects features or records based on attribute or spatial conditions. Examples include selecting wards with high population density, roads within a buffer, or parcels inside a flood zone.",
                    "Joining a CSV to a shapefile usually requires a common matching field, such as ward code, zone ID, parcel ID, station code, or road segment ID.",
                    "A join is suitable when one record in the spatial layer matches one record in the table or when a summary table has one row per spatial feature.",
                    "A Relate is useful for one-to-many relationships, such as one ward linked to many complaints, one parcel linked to many inspections, or one station linked to many daily ridership records.",
                    "Bad joins are a common source of wrong maps. Field type, spelling, leading zeros, duplicates, and missing codes must be checked before interpreting results."
                ],
                examUse: "Selection means GIS query. CSV-to-shapefile integration means common field. One-to-many table connection means Relate rather than a simple join."
            },
            {
                heading: "Spatial classification, confusion matrix, hotspots, and fishnet",
                points: [
                    "Classification predicts categories. In spatial analytics this could be land-use class, risk zone, building type, vegetation class, or service-priority class.",
                    "Forest-based classification is used when the target is categorical and predictors may include spatial, environmental, demographic, or image-derived variables.",
                    "A confusion matrix evaluates classification by comparing predicted classes with actual classes. It supports accuracy, precision, recall, and error-pattern interpretation.",
                    "Getis-Ord Gi* hotspot analysis identifies statistically significant spatial clustering of high or low values. Significant positive z-scores indicate hotspots.",
                    "Create Fishnet builds a regular grid, often used to aggregate point events into comparable cells before density or hotspot analysis. This helps when raw point data is too uneven for direct comparison."
                ],
                examUse: "Categorical target means classification. Model evaluation by predicted versus actual classes means confusion matrix. Significant positive z-score means hotspot. Grid aggregation before analysis means fishnet."
            },
            {
                heading: "ArcGIS API for Python and integrated urban workflows",
                points: [
                    "ArcGIS API for Python connects Python analysis with web GIS, cloud maps, hosted layers, notebooks, automation, and data access.",
                    "The API can search, publish, update, analyze, and manage GIS content programmatically, which links Week 4 Python skills with Week 12 spatial platforms.",
                    "A complete urban workflow might read sensor or complaint data, clean it in Python, join it to wards, aggregate it into fishnet cells, run hotspot or classification analysis, publish the layer, and update a dashboard.",
                    "This final-week integration is why earlier database, API, pandas, ML, IoT, and GIS topics are not separate islands. They form the evidence pipeline behind smart-city operations.",
                    "In exam reasoning, tool names usually map to functions: GIS query selects, join connects by common field, Relate handles one-to-many, confusion matrix evaluates classification, fishnet aggregates space, and ArcGIS API automates web GIS."
                ],
                examUse: "If the option mentions web GIS, hosted layers, cloud mapping, notebooks, or automated GIS content management through Python, ArcGIS API for Python is the best fit."
            }
        ]
    }
};
