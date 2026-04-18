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
    }
};
