window.assignmentTheoryNotes = {
    1: {
        title: "MCQ readiness: smart-city foundations and civic data systems",
        intro: "Week 1 assignment questions test the city-data-governance chain. Learn each term by asking: who produces the data, what format or platform carries it, and what public decision it supports.",
        clusters: [
            {
                heading: "People-place-technology framework",
                mustKnow: [
                    "People are citizens, commuters, planners, administrators, service providers, civic hackers, and private firms who generate and use data.",
                    "Place is the spatial context: wards, streets, parcels, bus stops, public spaces, service zones, and neighborhoods.",
                    "Technology is the digital layer: sensors, GIS, APIs, cloud platforms, dashboards, analytics, and mobile apps."
                ],
                examLogic: "If the option names stakeholders or participation, it belongs to People. If it names maps, wards, or physical context, it belongs to Place. If it names sensors, cloud, GIS, or databases, it belongs to Technology.",
                traps: [
                    "Do not choose GIS layers for People; GIS is technology/place support.",
                    "Do not choose infrastructure networks for People; that describes the physical city."
                ]
            },
            {
                heading: "Big data, time-series, GTFS, and open data",
                mustKnow: [
                    "Time-series data records change over time and is used for trends, seasonality, peaks, and disruptions.",
                    "Velocity means rapid, continuous data inflow with low delay, such as live traffic, sensor, or transport feeds.",
                    "GTFS shares public transport schedules and operational details such as routes, stops, trips, and times.",
                    "Open-data portals publish machine-readable data so researchers, citizens, and developers can reuse it."
                ],
                examLogic: "Match the answer to the data function: trend over time means time-series; rapid inflow means velocity; transport schedule sharing means GTFS; reusable public datasets means open data.",
                traps: [
                    "Time-series does not replace spatial data; it adds the temporal dimension.",
                    "Velocity is not data accuracy. Accuracy relates to veracity."
                ]
            },
            {
                heading: "DataSmart Cities, ICCC, UPYOG, and digital divide",
                mustKnow: [
                    "City Data Officer is linked with city-level data governance and policy.",
                    "Mission Data Officer is linked with national-level data strategy oversight.",
                    "City Data Cell provides analytics and operational data support.",
                    "City Data Alliance is a multi-stakeholder collaboration platform.",
                    "Integrated Command and Control Centers coordinate multiple city services using real-time data and dashboards.",
                    "UPYOG supports digital urban service delivery under the National Urban Digital Mission.",
                    "Digital divide means unequal access to devices, connectivity, skills, language support, or usable digital services."
                ],
                examLogic: "For role-matching questions, match each actor to scale and function: national oversight, city policy, analytics support, or collaboration. For platform questions, identify whether the platform coordinates operations, delivers services, or publishes data.",
                traps: [
                    "Do not openly publish personal, sensitive, or privacy-risk data.",
                    "Do not treat ICCC as only a display screen; it is an operational coordination system."
                ]
            }
        ]
    },
    2: {
        title: "MCQ readiness: database theory, keys, normalization, and NoSQL",
        intro: "Week 2 asks whether you understand why a database answer is correct. Think in terms of structure, integrity, redundancy, and scale.",
        clusters: [
            {
                heading: "Data formats and structuredness",
                mustKnow: [
                    "CSV is suitable for flat structured tables such as demographic records or maintenance logs.",
                    "JSON uses name-value pairs and supports nested objects and arrays.",
                    "XML uses hierarchical tagged elements and can carry metadata about meaning.",
                    "Unstructured data such as image, video, audio, and free text is harder because features must be extracted before analysis."
                ],
                examLogic: "Choose CSV for row-column data, JSON for nested web/API data, XML for tagged hierarchy, and unstructured-data answers when the problem needs image/text processing.",
                traps: [
                    "JSON is usually lighter than XML, not more verbose.",
                    "Unstructured data is not impossible to analyze, but it needs extra processing."
                ]
            },
            {
                heading: "DBMS, RDBMS, ACID, and keys",
                mustKnow: [
                    "A DBMS stores, retrieves, updates, secures, and manages data.",
                    "ACID means atomicity, consistency, isolation, and durability.",
                    "A candidate key can uniquely identify records; one candidate key is selected as the primary key.",
                    "A superkey may contain extra attributes beyond minimum uniqueness.",
                    "A foreign key links a table to the primary key of another table and supports referential integrity."
                ],
                examLogic: "Key questions are about uniqueness and relationships. ACID questions are about reliable transactions. DBMS questions ask whether the item actually manages databases.",
                traps: [
                    "Insulation is not an ACID property; isolation is.",
                    "A primary key is not just any column; it is the selected unique identifier."
                ]
            },
            {
                heading: "Normalization, dependencies, NoSQL, and BASE",
                mustKnow: [
                    "Normalization organizes tables to reduce redundancy and update, insert, and delete anomalies.",
                    "1NF removes repeating groups and requires atomic values.",
                    "3NF removes transitive dependency, where X determines Z through X -> Y and Y -> Z.",
                    "BCNF requires every determinant to be a candidate key.",
                    "4NF removes multi-valued dependencies.",
                    "NoSQL is useful for flexible schema, scale, availability, graph relationships, and heterogeneous data.",
                    "BASE means basically available, soft state, eventual consistency."
                ],
                examLogic: "If the question is about repeated or dependent facts, use normalization. If it is about flexible, distributed, high-volume, or graph-like data, use NoSQL.",
                traps: [
                    "Higher normal forms require earlier normal forms; you cannot skip the sequence.",
                    "NoSQL is not always better than SQL; it is workload-dependent."
                ]
            }
        ]
    },
    3: {
        title: "MCQ readiness: SQL execution, constraints, APIs, and deployment",
        intro: "Week 3 questions are about data access logic. You should be able to say what each SQL clause, constraint, database object, and web access pattern does.",
        clusters: [
            {
                heading: "SQL clause logic and traffic-table reasoning",
                mustKnow: [
                    "WHERE filters rows before grouping.",
                    "GROUP BY forms groups for aggregation.",
                    "HAVING filters grouped results after aggregation.",
                    "ORDER BY sorts output.",
                    "JOIN connects related tables through a matching key.",
                    "Subqueries allow one query result to be used inside another query."
                ],
                examLogic: "For average traffic volume per area, join road segments to observations, group by area, and apply AVG. For roads with more than one observation, group by road and use HAVING COUNT(*) > 1.",
                traps: [
                    "Do not use HAVING for raw row conditions.",
                    "Do not compute area-level averages without grouping by area."
                ]
            },
            {
                heading: "Indexes, views, stored procedures, transactions, and constraints",
                mustKnow: [
                    "Index improves query performance by speeding data retrieval.",
                    "View is a virtual table created from a SELECT query.",
                    "Stored procedure groups reusable SQL statements.",
                    "Transaction management ensures atomicity and consistency.",
                    "CHECK enforces logical conditions such as area_sq_m > 50.",
                    "DEFAULT assigns a value when none is provided.",
                    "Foreign key enforces referential integrity between related tables."
                ],
                examLogic: "Match each object or constraint to its function: speed, virtual table, reusable SQL, all-or-nothing operation, validation, default value, or relationship validity.",
                traps: [
                    "A view does not normally store separate physical data like a table.",
                    "CHECK is for a condition; DEFAULT is for automatic missing insertion value."
                ]
            },
            {
                heading: "REST API, GraphQL, ORM, server-side scripting, and managed cloud",
                mustKnow: [
                    "API access provides controlled application-level access instead of direct database exposure.",
                    "REST API is stateless request-response communication over HTTP.",
                    "GraphQL lets clients request the data structure they need.",
                    "ORM maps database tables to objects in code.",
                    "Managed cloud database is operated by a cloud provider.",
                    "Server-side scripting protects credentials and controls database access.",
                    "Real-time dashboards often use live APIs, streaming, polling, or web sockets."
                ],
                examLogic: "Security and controlled sharing point to APIs or server-side access. Object-table interaction points to ORM. Client-driven query structure points to GraphQL.",
                traps: [
                    "Do not expose raw database credentials to a browser client.",
                    "GraphQL is not the same as ORM; one is an API query style, the other maps objects to tables."
                ]
            }
        ]
    },
    4: {
        title: "MCQ readiness: Python fundamentals and OOP theory",
        intro: "Week 4 asks basic Python questions, but the theory is scope, modularity, libraries, and object behavior.",
        clusters: [
            {
                heading: "POP, functions, scope, modules, and code output",
                mustKnow: [
                    "Procedure-oriented programming organizes code as procedures/functions and step-by-step operations.",
                    "A local variable is defined inside a function and is accessible only within that function.",
                    "Calling one function from another improves reuse, modularity, testing, and readability.",
                    "A module is a single Python file that can contain functions, classes, and variables.",
                    "For output questions, trace execution order, assignments, loop updates, and function return values."
                ],
                examLogic: "If an answer claims local variables are globally accessible, reject it. If a function-call question asks why this is good practice, choose modularity and reuse.",
                traps: [
                    "Do not confuse a module with a package or library collection.",
                    "Do not treat POP as object-centered; that is OOP."
                ]
            },
            {
                heading: "Python libraries and their roles",
                mustKnow: [
                    "SciPy supports scientific computing such as optimization, integration, and numerical methods.",
                    "Statsmodels supports statistical modeling, estimation, and hypothesis testing.",
                    "Scikit-learn supports machine-learning algorithms such as classification, regression, clustering, and model selection.",
                    "TensorFlow supports machine learning and deep learning workflows.",
                    "NumPy supports arrays and numerical computation; pandas supports tabular data analysis."
                ],
                examLogic: "Library matching questions are role-based. Ask whether the task is numerical computing, statistical inference, classical ML, deep learning, arrays, or tables.",
                traps: [
                    "Do not choose TensorFlow for basic statistical hypothesis testing.",
                    "Do not choose Statsmodels as the main general-purpose deep-learning platform."
                ]
            },
            {
                heading: "OOP concepts and runtime behavior",
                mustKnow: [
                    "Encapsulation wraps data and methods together and restricts direct access.",
                    "Inheritance creates new classes by reusing existing class properties.",
                    "Polymorphism lets the same method name perform different behavior across classes.",
                    "Abstraction hides implementation detail and exposes essential behavior.",
                    "Dynamic binding decides the method implementation at runtime."
                ],
                examLogic: "If Bus, Metro, and Bicycle all have travel_time() but compute differently, the answer is polymorphism. If the method is selected at runtime, the answer is dynamic binding.",
                traps: [
                    "Compilation and libraries are not core OOP properties.",
                    "Inheritance is reuse through class relationships, not just copying code."
                ]
            }
        ]
    },
    5: {
        title: "MCQ readiness: pandas, visualization, cleaning, ORM, and scaling",
        intro: "Week 5 tests practical data analysis. You need to know which pandas method or plot answers a specific analytical need.",
        clusters: [
            {
                heading: "Data inspection and missing values",
                mustKnow: [
                    "shape returns DataFrame dimensions as rows and columns.",
                    "info() shows schema, data types, and missing-value counts.",
                    "describe() gives statistical summaries of numerical columns.",
                    "fillna() replaces missing values using a chosen strategy.",
                    "astype() converts column data type.",
                    "reset_index() restores a clean default index after deletions or filtering.",
                    "Median imputation is more robust than mean when outliers are present."
                ],
                examLogic: "Choose the method by the question's verb: inspect schema, summarize distribution, fill missing, convert type, reset index, or check dimensions.",
                traps: [
                    "shape is an attribute, not a plotting function.",
                    "Mean can be pulled by outliers; median is safer for skewed numeric data."
                ]
            },
            {
                heading: "Visualization, IQR, and group summaries",
                mustKnow: [
                    "Histogram shows distribution shape and frequency.",
                    "Boxplot compares spread, median, quartiles, and outliers across groups.",
                    "Bar plot compares aggregated values across categories.",
                    "KDE estimates smooth probability density.",
                    "IQR equals Q3 - Q1.",
                    "Outlier fences are commonly Q1 - 1.5*IQR and Q3 + 1.5*IQR.",
                    "Mean PM2.5 by area requires groupby('Area') and mean(), then a category comparison plot."
                ],
                examLogic: "Continuous distribution plus density points to histogram/KDE. Comparing distributions across categories points to boxplot. Comparing category means points to groupby plus bar plot.",
                traps: [
                    "Do not use a bar plot to inspect full distribution spread.",
                    "Do not compute IQR as max - min."
                ]
            },
            {
                heading: "ORM, SQLite, SQLAlchemy, and scaling",
                mustKnow: [
                    "ORM lets programmers work with database records as objects instead of writing every raw SQL query.",
                    "Declarative model maps tables to Python classes.",
                    "Session manages transaction scope and persistence.",
                    "SQLAlchemy engine manages low-level database connectivity.",
                    "Query builder constructs object-oriented queries.",
                    "SQLite is lightweight, serverless, file-based, and suitable for small applications.",
                    "Min-max scaling transforms values to (x - min) / (max - min), often into 0 to 1."
                ],
                examLogic: "Object-table mapping points to ORM. Lightweight embedded local database points to SQLite. Fixed 0-1 range points to min-max scaling.",
                traps: [
                    "ORM does not eliminate the database; it wraps access to it.",
                    "SQLite is not chosen for massive distributed multi-user systems."
                ]
            }
        ]
    },
    6: {
        title: "MCQ readiness: ML types, assumptions, validation, and statistics",
        intro: "Week 6 is a concept-selection week. Questions describe the data and task; your answer should match labels, uncertainty, assumptions, or model behavior.",
        clusters: [
            {
                heading: "Learning types, transformers, and black boxes",
                mustKnow: [
                    "Large language models are deep learning models based on transformer architecture and trained on massive text data.",
                    "Supervised learning uses labeled examples.",
                    "Unsupervised learning finds structure without labels.",
                    "Semi-supervised learning combines a small labeled set with larger unlabeled data.",
                    "Reinforcement learning learns by reward feedback from an environment.",
                    "SARSA is an on-policy reinforcement learning algorithm.",
                    "A black-box model gives predictions without easily interpretable internal decision logic."
                ],
                examLogic: "Look for labels, no labels, partial labels, or rewards. If the model's reasoning is hidden, choose black-box logic.",
                traps: [
                    "K-means is not supervised.",
                    "Reinforcement learning is not simply classification; it involves actions and rewards."
                ]
            },
            {
                heading: "Validation, transformations, correlation, and statistical tests",
                mustKnow: [
                    "Train-test split checks whether a model generalizes to unseen data.",
                    "Data transformations such as scaling improve comparability and learning behavior.",
                    "VIF detects multicollinearity among predictors.",
                    "High R2 with high VIF can still mean unstable predictor interpretation.",
                    "Pearson correlation fits linear continuous relationships.",
                    "Spearman correlation fits monotonic or rank-based relationships.",
                    "Kruskal-Wallis compares multiple independent groups when normality assumptions are weak.",
                    "Entropy measures uncertainty."
                ],
                examLogic: "Use Pearson for linear continuous data, Spearman for rank/monotonic data, Kruskal-Wallis for comparing groups non-parametrically, and VIF for predictor collinearity.",
                traps: [
                    "High R2 does not remove multicollinearity problems.",
                    "Train-test split is not for increasing training data; it is for evaluation."
                ]
            },
            {
                heading: "Urban ML method matching",
                mustKnow: [
                    "LSTM is suitable for sequential time-series data such as hourly traffic flow.",
                    "DBSCAN is suitable for irregular clusters and outliers.",
                    "Pairplot shows pairwise relationships among variables.",
                    "PCA is unsupervised and preserves maximum variance.",
                    "LDA is supervised dimensionality reduction and uses class labels."
                ],
                examLogic: "Time sequence points to LSTM. Irregular clusters with noise point to DBSCAN. Correlated variables without labels point to PCA. Class-aware dimensionality reduction points to LDA.",
                traps: [
                    "Both PCA and LDA are not unsupervised; LDA is supervised.",
                    "DBSCAN does not require preselecting k like k-means."
                ]
            }
        ]
    },
    7: {
        title: "MCQ readiness: supervised learning, trees, ensembles, and validation",
        intro: "Week 7 focuses on supervised ML and decision-tree reasoning. You should know the formulas conceptually even when the question is numerical.",
        clusters: [
            {
                heading: "Supervised learning and sklearn workflow",
                mustKnow: [
                    "Classification predicts one of predefined classes.",
                    "Regression predicts a continuous value.",
                    "Supervised learning uses labeled data, not unlabeled data.",
                    "sklearn.model_selection handles splitting, validation, and grid search.",
                    "sklearn.impute fills or estimates missing values.",
                    "sklearn.preprocessing prepares raw features.",
                    "sklearn.feature_selection selects relevant features."
                ],
                examLogic: "Reject statements that swap classification and regression. Match sklearn modules by their role in the pipeline.",
                traps: [
                    "Prediction phase should be evaluated on test/validation data, not the same training data.",
                    "Regression does not assign examples to predefined classes."
                ]
            },
            {
                heading: "Entropy, information gain, Gini, and gain ratio",
                mustKnow: [
                    "Entropy measures class uncertainty.",
                    "Information gain is parent entropy minus weighted child entropy.",
                    "Gini impurity measures probability of incorrect classification if labeled according to class distribution.",
                    "A good split reduces impurity.",
                    "Information gain can favor attributes with many distinct values.",
                    "Gain ratio adjusts information gain by split information to reduce that bias."
                ],
                examLogic: "Choose the split with highest information gain or lowest weighted impurity, unless the question asks about gain ratio bias correction.",
                traps: [
                    "Pure subsets can look good under IG but may overfit when many distinct values exist.",
                    "Weighted child impurity must account for child sample sizes."
                ]
            },
            {
                heading: "Ensembles, XGBoost, GridSearchCV, and cross-validation",
                mustKnow: [
                    "Decision trees overfit if too deep or unconstrained.",
                    "Bagging trains parallel learners on bootstrap samples to reduce variance.",
                    "Random forest adds feature sampling to bagging.",
                    "Boosting trains learners sequentially to correct previous errors.",
                    "XGBoost subsample controls the fraction of training rows used per tree.",
                    "GridSearchCV searches hyperparameter combinations with cross-validation.",
                    "cross_val_score returns validation scores for a model."
                ],
                examLogic: "Sampling rows in XGBoost means subsample. Hyperparameter comparison means GridSearchCV. Estimating validation performance means cross_val_score.",
                traps: [
                    "Boosting is not parallel bagging.",
                    "Random forest is not just one decision tree."
                ]
            }
        ]
    },
    8: {
        title: "MCQ readiness: SVM, kernels, semi-supervised learning, and active learning",
        intro: "Week 8 assignment questions are about boundaries, labels, distances, and which unlabeled cases are useful.",
        clusters: [
            {
                heading: "SVM geometry and kernels",
                mustKnow: [
                    "Support vectors are training points closest to the decision boundary.",
                    "Soft-margin SVM allows some violations to improve generalization.",
                    "SVM optimization is convex and quadratic, so it has a single global optimum.",
                    "Linear kernel works well for high-dimensional sparse data.",
                    "Polynomial kernel captures feature interactions.",
                    "RBF kernel models local similarity and flexible nonlinear boundaries.",
                    "Sigmoid kernel mimics neural activation behavior but is less stable."
                ],
                examLogic: "Boundary-near points mean support vectors. Allowing misclassification means soft margin. Kernel matching depends on the kind of similarity needed.",
                traps: [
                    "Support vectors are not all training samples.",
                    "RBF is not the best answer for every high-dimensional sparse text-style problem; linear often fits that case."
                ]
            },
            {
                heading: "Semi-supervised and active learning",
                mustKnow: [
                    "Semi-supervised learning uses both labeled and unlabeled data.",
                    "Smoothness assumption: nearby points likely share labels.",
                    "Cluster assumption: points in the same cluster likely share labels.",
                    "Manifold assumption: high-dimensional data may lie on a lower-dimensional structure.",
                    "Label propagation spreads labels through a graph or similarity network.",
                    "Uncertainty sampling selects low-confidence predictions.",
                    "Margin sampling selects points closest to the decision boundary.",
                    "Entropy sampling chooses highest prediction entropy.",
                    "Diversity sampling selects representative samples from different regions."
                ],
                examLogic: "Match the sampling phrase: low confidence, close margin, high entropy, or broad representation.",
                traps: [
                    "Multicollinearity is not a semi-supervised learning assumption.",
                    "Label propagation is not manually labeling every sample."
                ]
            },
            {
                heading: "Distance metrics and multinomial logistic regression",
                mustKnow: [
                    "Cosine distance compares direction/orientation and ignores magnitude differences.",
                    "Hamming distance counts mismatched categorical attributes.",
                    "Mahalanobis distance handles correlated features.",
                    "Manhattan distance measures grid-like axis movement.",
                    "Multinomial logistic regression assumes independent observations, appropriate log-odds structure, no perfect collinearity, and enough samples.",
                    "Maximum likelihood estimation selects parameters that maximize probability of observed data."
                ],
                examLogic: "Choose the distance by data type: grid, category mismatch, correlated numerical variables, or direction similarity.",
                traps: [
                    "Do not choose Euclidean-style reasoning for categorical mismatch.",
                    "Perfect collinearity violates model assumptions."
                ]
            }
        ]
    },
    9: {
        title: "MCQ readiness: association rules and clustering structure",
        intro: "Week 9 tests unsupervised structure. Answers should be chosen by what kind of hidden structure the method is designed to reveal.",
        clusters: [
            {
                heading: "Association rule workflow and metrics",
                mustKnow: [
                    "Association rule learning finds co-occurring items or events.",
                    "Binary incidence matrix converts transactions into 0/1 presence data.",
                    "Support is how frequently an itemset or rule appears.",
                    "Confidence is how often the rule conclusion occurs when the condition occurs.",
                    "Lift measures strength compared with independent occurrence."
                ],
                examLogic: "Frequency means support. Conditional correctness means confidence. Beyond chance association means lift.",
                traps: [
                    "Support is not rule strength relative to independence; that is lift.",
                    "Confidence is not just total frequency."
                ]
            },
            {
                heading: "Clustering methods, linkage, elbow, and silhouette",
                mustKnow: [
                    "Similarity is usually determined by a distance measure.",
                    "K-prototypes handles mixed numeric and categorical variables.",
                    "Single linkage can create chain-like clusters.",
                    "Complete linkage uses the farthest pair and tends to compact clusters.",
                    "Ward linkage minimizes increase in within-cluster variance.",
                    "K-means uses WCSS; elbow method looks for the bend where WCSS improvement slows.",
                    "Silhouette score measures cohesion and separation; higher is usually better."
                ],
                examLogic: "Chain behavior means single linkage. Compact farthest-pair behavior means complete linkage. WCSS-minimizing merge means Ward. Better silhouette supports better k.",
                traps: [
                    "K-means requires k in advance.",
                    "A silhouette near 0 means a point lies near cluster boundary."
                ]
            },
            {
                heading: "DBSCAN, GMM, BIC, PCA, Mean Shift, hard/soft clustering",
                mustKnow: [
                    "DBSCAN core point has at least MinPts neighbors within epsilon.",
                    "GMM gives probabilistic cluster membership.",
                    "BIC balances model fit with complexity penalty; lower BIC is commonly preferred.",
                    "Increasing GMM clusters increases parameters and complexity penalty.",
                    "Spherical covariance is not full covariance.",
                    "PCA creates components that preserve variance and reduce multicollinearity.",
                    "Mean Shift finds modes/dense regions without specifying k.",
                    "Hard clustering assigns one cluster; soft clustering gives membership degrees."
                ],
                examLogic: "Outliers and irregular density point to DBSCAN. Probabilistic clusters point to GMM. Correlated urban heat variables point to PCA.",
                traps: [
                    "Highest BIC is not normally chosen when BIC is used as a penalty criterion.",
                    "Soft clustering does not force a single membership."
                ]
            }
        ]
    },
    10: {
        title: "MCQ readiness: neural networks, deep learning, and reinforcement learning",
        intro: "Week 10 questions ask you to match architecture to data type, training method to purpose, and reinforcement terms to roles.",
        clusters: [
            {
                heading: "ANN, hidden neurons, activations, and backpropagation",
                mustKnow: [
                    "Artificial neural networks are inspired by simplified brain-like connected units.",
                    "Hidden-layer neuron count depends on problem complexity, data patterns, and required representation capacity.",
                    "Activation functions introduce nonlinearity.",
                    "ReLU makes negative values 0 and is common in deep networks.",
                    "Leaky ReLU allows small negative outputs to reduce dead neurons.",
                    "Sigmoid outputs 0 to 1 and fits probability-like output.",
                    "Tanh outputs -1 to 1.",
                    "GELU is used in modern transformer-style architectures.",
                    "Backpropagation computes gradients for weight updates."
                ],
                examLogic: "Architecture questions ask what the model learns; training questions ask how weights are updated; activation questions ask output behavior.",
                traps: [
                    "Backpropagation is not the prediction output itself.",
                    "Sigmoid and tanh have different output ranges."
                ]
            },
            {
                heading: "Optimization, SHAP, CNN, RNN, and kernels",
                mustKnow: [
                    "Deep loss surfaces are complex because many nonlinear parameters interact.",
                    "Vanishing gradients, exploding gradients, weight initialization, and batch normalization are optimization issues or remedies.",
                    "SHAP explains feature contribution to model prediction.",
                    "CNN is suited to image/spatial pattern tasks.",
                    "RNN is suited to sequence data.",
                    "A kernel is a small matrix that slides over an image to detect edges, textures, and shapes."
                ],
                examLogic: "Image data points to CNN and kernels. Sequence data points to RNN/LSTM. Explaining predictions points to SHAP.",
                traps: [
                    "A kernel in CNN is not the same as an SVM kernel in Week 8.",
                    "Batch normalization is not a gradient problem itself; it helps stabilize training."
                ]
            },
            {
                heading: "Reinforcement learning components and Bellman idea",
                mustKnow: [
                    "Reinforcement learning is learning decisions through interaction with an environment.",
                    "Agent is the decision maker.",
                    "Action is the decision made by the agent.",
                    "Reward is feedback from the environment.",
                    "Policy maps states to actions.",
                    "Model-free RL learns from experience without an explicit environment model.",
                    "Model-based RL builds or uses a model of the environment.",
                    "Policy-based RL directly learns a policy.",
                    "Return is expected future reward; Bellman equations compute it recursively."
                ],
                examLogic: "Match each RL term to its role. If the question says infinite future rewards and recursive computation, think return and Bellman.",
                traps: [
                    "Reward is not the decision maker; the agent is.",
                    "Model-free does not simulate outcomes using an explicit model."
                ]
            }
        ]
    },
    11: {
        title: "MCQ readiness: IoT communication, sensors, actuators, and Arduino",
        intro: "Week 11 tests the physical pipeline from real-world signal to digital processing and back to physical action.",
        clusters: [
            {
                heading: "IoT layers and communication networks",
                mustKnow: [
                    "Sensing layer captures real-world data.",
                    "Network layer transmits data.",
                    "WPAN is short-range communication.",
                    "WWAN is long-distance/wide-area communication.",
                    "IP provides unique addressing to devices.",
                    "TCP/IP supports reliable transmission between devices and servers."
                ],
                examLogic: "Capture means sensing layer. Transmission means network layer. Addressing means IP. Reliable network exchange means TCP/IP.",
                traps: [
                    "Do not choose WPAN for long-distance citywide communication.",
                    "IP is not the same as ADC; one addresses devices, the other converts signals."
                ]
            },
            {
                heading: "Signals, ADC, transfer functions, and actuators",
                mustKnow: [
                    "Analog signals vary continuously and are more noise-sensitive.",
                    "Digital signals use discrete values or states.",
                    "ADC converts analog signals to digital form for processing.",
                    "Sensor transfer function is represented as output depending on stimulus.",
                    "Actuator converts a control signal into physical action."
                ],
                examLogic: "Input from physical world points to sensor and ADC. Output action points to actuator. Continuous/noisy representation points to analog.",
                traps: [
                    "An actuator does not measure; it acts.",
                    "ADC does not transmit over the internet; it converts signal form."
                ]
            },
            {
                heading: "Arduino IDE, board, libraries, and detection",
                mustKnow: [
                    "Arduino IDE writes, compiles, and uploads sketches.",
                    "Arduino Uno uses ATmega328P.",
                    "EEPROM library supports data storage.",
                    "Ethernet library supports network connectivity.",
                    "GSM library supports cellular communication.",
                    "Bridge library supports processor communication.",
                    "After installing Arduino IDE, drivers/board setup may be required for proper board detection."
                ],
                examLogic: "IDE purpose is coding and uploading. Microcontroller question points to ATmega328P. Library matching is based on storage, network, cellular, or processor bridge function.",
                traps: [
                    "EEPROM is storage, not network communication.",
                    "GSM is cellular, not local wired Ethernet."
                ]
            }
        ]
    },
    12: {
        title: "MCQ readiness: Arduino components, GIS operations, and spatial analysis",
        intro: "Week 12 combines hardware components with GIS and spatial analytics. The common pattern is tool plus purpose.",
        clusters: [
            {
                heading: "Servo motor and PIR sensor",
                mustKnow: [
                    "Servo motor provides controlled angular movement.",
                    "Servo is useful for gates, barriers, camera direction, and small mechanical control.",
                    "PIR sensor detects motion by sensing changes in infrared radiation from warm bodies.",
                    "PIR does not measure exact distance or capture images."
                ],
                examLogic: "Controlled rotation points to servo. Motion detection through infrared change points to PIR.",
                traps: [
                    "Do not choose servo for sensing motion; it produces movement.",
                    "Do not choose PIR for visual image capture."
                ]
            },
            {
                heading: "GIS query, join, and relate",
                mustKnow: [
                    "GIS query selects features or records based on attribute or spatial conditions.",
                    "Joining CSV to shapefile requires a common matching field.",
                    "Relate is useful for one-to-many table relationships.",
                    "A simple join is best for one-to-one matching."
                ],
                examLogic: "Selection question means query. CSV-shapefile joining means common field. One feature linked to many records means Relate.",
                traps: [
                    "A CSV does not need its own geometry if it joins through a matching attribute.",
                    "Relate is not the same as a normal one-to-one join."
                ]
            },
            {
                heading: "Forest classification, confusion matrix, hotspot, fishnet, and ArcGIS API",
                mustKnow: [
                    "Classification predicts categorical classes.",
                    "Forest-based classification is for categorical target prediction.",
                    "Confusion matrix evaluates classification by comparing predicted and actual classes.",
                    "Getis-Ord Gi* hotspot analysis uses significant positive z-scores for hotspots.",
                    "Create Fishnet builds a polygon grid to aggregate point data into comparable cells.",
                    "ArcGIS API for Python supports web GIS, cloud mapping, automation, and data access."
                ],
                examLogic: "Categorical prediction points to classification. Evaluation of classification points to confusion matrix. Hotspot points to positive significant z-score. Aggregating points before hotspot analysis points to fishnet.",
                traps: [
                    "Confusion matrix is not a spatial selection tool.",
                    "Fishnet does not train the model; it prepares spatial aggregation."
                ]
            }
        ]
    }
};
