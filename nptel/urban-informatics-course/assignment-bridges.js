window.assignmentBridges = {
    1: {
        title: "Assignment bridge: from smart-city examples to answer logic",
        thesis: "Week 1 questions are not random definitions. They test whether you can trace a city problem from stakeholder, to data source, to digital platform, to governance action.",
        groups: [
            {
                heading: "People, participation, and governance",
                testedBy: [
                    "People-place-technology framework",
                    "citizen science and digital participation",
                    "DataSmart Cities roles and governance responsibilities"
                ],
                theory: "The people layer means citizens, planners, administrators, operators, and service providers who generate, validate, govern, and use data. Participation platforms matter because they turn residents from passive beneficiaries into data contributors and decision participants.",
                answerLogic: "An answer is reasonable when it names stakeholders or governance use. Answers about GIS layers, cloud servers, or physical infrastructure alone are usually technology or place, not people."
            },
            {
                heading: "Urban data movement",
                testedBy: [
                    "time-series data",
                    "velocity in big data",
                    "GTFS and transport APIs",
                    "open-data platform matching"
                ],
                theory: "Urban data becomes useful when it preserves time, format, and access. Time-series records reveal trends and peaks; velocity describes rapid inflow; GTFS standardizes transit schedules and operations; APIs make live or machine-readable access possible.",
                answerLogic: "Ask what the data is used for. If the question says trends, peaks, or variation, choose time-series logic. If it says real-time inflow, choose velocity. If it says transit data exchange, choose GTFS or APIs."
            },
            {
                heading: "Digital divide and safe openness",
                testedBy: [
                    "digital divide questions",
                    "what should not be openly published",
                    "UPYOG and ICCC objectives"
                ],
                theory: "Open-data systems support transparency, but public release must not expose sensitive personal information. ICCCs and UPYOG are institutional platforms for coordinated service delivery, not just dashboards.",
                answerLogic: "Choose options that balance access with governance. Answers that publish personal or sensitive data openly are unreasonable because urban informatics must protect citizens while improving services."
            }
        ]
    },
    2: {
        title: "Assignment bridge: choosing the right data structure",
        thesis: "Week 2 questions test whether you can choose a data model because of the data's shape, rules, and relationships.",
        groups: [
            {
                heading: "Formats and analytical difficulty",
                testedBy: [
                    "CSV, JSON, and XML statements",
                    "structured versus unstructured urban data",
                    "why unstructured data is harder to analyze"
                ],
                theory: "CSV fits flat tables, JSON fits nested name-value data, and XML uses hierarchical tagged elements. Structured data already has rows, columns, and schema; unstructured images, video, and text need feature extraction before analysis.",
                answerLogic: "The reasonable answer matches format to structure. Do not choose CSV for nested API responses, and do not treat CCTV or complaint text as immediately queryable like a table."
            },
            {
                heading: "Relational integrity",
                testedBy: [
                    "DBMS examples",
                    "ACID properties",
                    "candidate key, primary key, superkey, and foreign key",
                    "Microsoft Access as an RDBMS"
                ],
                theory: "Relational systems protect data quality through tables, keys, constraints, and transactions. ACID means atomicity, consistency, isolation, and durability; keys identify records and preserve valid relationships.",
                answerLogic: "For city records such as permits, taxes, assets, or complaints, choose the option that preserves uniqueness, consistency, and valid links between tables."
            },
            {
                heading: "Normalization and NoSQL",
                testedBy: [
                    "3NF satisfying 2NF",
                    "transitive dependency",
                    "normal form matching",
                    "NoSQL types and BASE"
                ],
                theory: "Normalization reduces repeated and dependent data so updates do not create contradictions. NoSQL relaxes strict relational structure for scale, flexibility, and availability; BASE emphasizes basically available, soft state, eventual consistency.",
                answerLogic: "Use normalization when the question is about redundancy or dependency. Use NoSQL when the question stresses scale, changing schema, distributed data, graph relationships, or flexible records."
            }
        ]
    },
    3: {
        title: "Assignment bridge: reading data from databases and services",
        thesis: "Week 3 questions test the full data-access path: query logic, constraints, web access, and deployment.",
        groups: [
            {
                heading: "SQL execution and filtering",
                testedBy: [
                    "WHERE before GROUP BY",
                    "HAVING versus WHERE",
                    "subqueries",
                    "traffic table aggregation questions"
                ],
                theory: "SQL first filters rows, then groups, then filters groups using HAVING, then sorts output. Joins connect tables, aggregation summarizes groups, and subqueries allow one query result to guide another.",
                answerLogic: "If the condition applies to raw rows, choose WHERE. If it applies after COUNT, AVG, SUM, or grouping, choose HAVING. For average traffic per area, you need join, group, and aggregate logic."
            },
            {
                heading: "Database objects and constraints",
                testedBy: [
                    "index, view, stored procedure, transaction",
                    "CHECK, DEFAULT, and foreign-key constraints",
                    "referential integrity"
                ],
                theory: "Indexes speed retrieval, views store query definitions as virtual tables, stored procedures package reusable SQL, transactions protect consistency, and constraints prevent invalid data from entering the database.",
                answerLogic: "Choose the object by its function. Performance points to index, reusable SQL points to stored procedure, logical validation points to CHECK, automatic missing value points to DEFAULT, and table relationship validity points to foreign key."
            },
            {
                heading: "APIs, server-side access, and cloud deployment",
                testedBy: [
                    "API-based versus direct database access",
                    "REST, GraphQL, ORM, and managed cloud database",
                    "real-time dashboard updates"
                ],
                theory: "APIs expose controlled interfaces instead of raw database access. REST uses stateless HTTP resources, GraphQL lets clients ask for specific data, ORMs map objects to relational tables, and managed cloud databases reduce infrastructure burden.",
                answerLogic: "If the question mentions security and controlled sharing, choose API or server-side access. If it mentions object-based database interaction, choose ORM. If it mentions real-time dashboards, choose live web update technologies."
            }
        ]
    },
    4: {
        title: "Assignment bridge: programming theory behind Python questions",
        thesis: "Week 4 questions check whether programming ideas are meaningful tools for urban data workflows, not just syntax labels.",
        groups: [
            {
                heading: "Procedures, functions, modules, and scope",
                testedBy: [
                    "procedure-oriented programming statements",
                    "local variables",
                    "calling one function from another",
                    "Python modules"
                ],
                theory: "Procedural programming organizes code as steps and functions. Local variables stay inside their function. Calling functions from other functions improves modularity, reuse, and testing. A module is a Python file that groups related functions, classes, and variables.",
                answerLogic: "Choose answers about modularity, scope, and reuse. Avoid answers claiming local variables are globally available or that calling functions increases duplication."
            },
            {
                heading: "Libraries and analytical roles",
                testedBy: [
                    "which item is not a Python library",
                    "SciPy, Statsmodels, scikit-learn, and TensorFlow matching",
                    "code-output questions"
                ],
                theory: "Libraries are reusable toolkits. SciPy supports scientific computing, Statsmodels supports statistical modeling, scikit-learn supports classical ML workflows, and TensorFlow supports deep learning.",
                answerLogic: "Match each library to the task it was designed for. In code-output questions, follow execution order carefully instead of guessing from variable names."
            },
            {
                heading: "Object-oriented reasoning",
                testedBy: [
                    "OOP properties",
                    "encapsulation, inheritance, polymorphism, abstraction",
                    "dynamic binding",
                    "transport-mode class examples"
                ],
                theory: "OOP bundles data and behavior into objects. Encapsulation protects internal data, inheritance reuses structure, polymorphism lets the same method behave differently, abstraction hides implementation detail, and dynamic binding selects the method at runtime.",
                answerLogic: "When the question describes Bus, Metro, and Bicycle using the same method differently, the reasonable answer is polymorphism. If the method is chosen at runtime, it is dynamic binding."
            }
        ]
    },
    5: {
        title: "Assignment bridge: turning Python data into evidence",
        thesis: "Week 5 questions test the practical sequence of analysis: load data, inspect it, clean it, transform it, visualize it, then explain it.",
        groups: [
            {
                heading: "DataFrame inspection and cleaning",
                testedBy: [
                    "Pandas shape",
                    "info(), describe(), fillna(), astype()",
                    "missing-value filling and reset_index()",
                    "median for outlier-resistant imputation"
                ],
                theory: "A DataFrame is a labeled table. shape gives rows and columns, info shows schema and missingness, describe summarizes numerical distribution, fillna replaces missing values, astype converts types, and reset_index restores clean row labels.",
                answerLogic: "Choose the method that matches the operation. If outliers may distort the mean, median imputation is more reasonable. If rows were deleted and the index is messy, reset_index is required."
            },
            {
                heading: "Visualization and distribution logic",
                testedBy: [
                    "histogram, boxplot, bar plot, KDE matching",
                    "boxplot for category distributions",
                    "IQR outlier rule",
                    "PM2.5 distribution and mean-by-area plots"
                ],
                theory: "Histograms show frequency distribution, KDE smooths density, boxplots compare spread and outliers across groups, and bar plots compare aggregated category values. IQR equals Q3 minus Q1 and flags outliers using quartile fences.",
                answerLogic: "Pick the chart based on the question's comparison. Distribution of one continuous variable points to histogram/KDE; comparing distributions across categories points to boxplot; group mean comparison points to groupby plus bar plot."
            },
            {
                heading: "ORM and scaling",
                testedBy: [
                    "ORM purpose",
                    "SQLAlchemy engine, session, declarative model, query builder",
                    "min-max scaling to 0-1"
                ],
                theory: "ORM connects Python objects with relational tables. Declarative models define schema, sessions manage transactions and persistence, engines manage low-level connections, and query builders construct database-independent queries. Min-max scaling rescales values to a fixed 0-1 range.",
                answerLogic: "If the question asks about object-table mapping, choose ORM. If the goal is comparison across different magnitudes, choose min-max scaling."
            }
        ]
    },
    6: {
        title: "Assignment bridge: choosing and trusting machine learning",
        thesis: "Week 6 questions test whether you understand why an ML method is chosen and how to judge if it can be trusted.",
        groups: [
            {
                heading: "Learning mechanisms",
                testedBy: [
                    "supervised, unsupervised, semi-supervised, and reinforcement matching",
                    "not a supervised model",
                    "SARSA as reinforcement learning",
                    "train-test split"
                ],
                theory: "Supervised learning uses labels, unsupervised learning finds patterns without labels, semi-supervised learning combines few labels with many unlabeled cases, and reinforcement learning learns actions from reward feedback. Train-test split checks whether the model generalizes.",
                answerLogic: "Look for labels. Known target values point to supervised learning; grouping without labels points to unsupervised learning; reward-driven interaction points to reinforcement learning."
            },
            {
                heading: "Feature quality and statistical judgment",
                testedBy: [
                    "data transformations",
                    "black-box models",
                    "VIF and multicollinearity",
                    "Pearson versus Spearman",
                    "Kruskal-Wallis"
                ],
                theory: "Transformations improve comparability and model behavior. A black-box model hides its decision logic. VIF detects multicollinearity. Pearson measures linear continuous association, Spearman handles rank/monotonic association, and Kruskal-Wallis compares groups without strong normality assumptions.",
                answerLogic: "Choose Pearson only for linear continuous relationships. Choose Spearman for rank or monotonic patterns. If VIF is high, the issue is unstable predictor interpretation, not necessarily low R-squared."
            },
            {
                heading: "Urban model examples",
                testedBy: [
                    "LSTM for hourly traffic flow",
                    "DBSCAN for irregular clusters with outliers",
                    "PCA and LDA",
                    "pairplot in multivariate visualization"
                ],
                theory: "LSTM captures sequential dependency, DBSCAN finds irregular dense clusters and separates noise, PCA preserves variance without labels, LDA is supervised dimensionality reduction, and pairplots reveal pairwise relationships among variables.",
                answerLogic: "Match data shape to method. Time sequence points to LSTM; irregular unlabeled spatial activity with outliers points to DBSCAN; many correlated variables point to PCA."
            }
        ]
    },
    7: {
        title: "Assignment bridge: supervised prediction and model selection",
        thesis: "Week 7 questions test supervised learning as a disciplined workflow: prepare data, choose a model, measure impurity, tune it, and control overfitting.",
        groups: [
            {
                heading: "Supervised learning definitions",
                testedBy: [
                    "supervised-learning statement correctness",
                    "classification versus regression",
                    "scikit-learn module matching",
                    "library used for ML"
                ],
                theory: "Supervised classification predicts mutually exclusive classes, while supervised regression predicts continuous values. scikit-learn model_selection splits data, impute fills missing values, preprocessing prepares raw variables, and feature_selection reduces irrelevant inputs.",
                answerLogic: "If the output is a category, choose classification. If it is a number, choose regression. Do not choose statements that say supervised learning uses unlabeled data."
            },
            {
                heading: "Decision-tree reasoning",
                testedBy: [
                    "entropy calculations",
                    "information gain",
                    "root node selection",
                    "Gini impurity split comparison"
                ],
                theory: "Decision trees choose splits that reduce impurity. Entropy and Gini measure class mixing; information gain is the decrease in entropy after a split. A good split makes child nodes purer.",
                answerLogic: "The reasonable answer is the split with lower weighted impurity or higher information gain. If a feature creates many tiny pure groups, gain ratio may penalize it compared with raw information gain."
            },
            {
                heading: "Ensembles and validation",
                testedBy: [
                    "decision-tree limitations",
                    "bagging, random forest, and boosting differences",
                    "XGBoost subsample",
                    "GridSearchCV and cross_val_score"
                ],
                theory: "Single trees overfit easily. Bagging trains parallel models on bootstrap samples, random forest also samples features, and boosting trains sequential learners to correct errors. GridSearchCV compares hyperparameter combinations; cross_val_score estimates validation performance.",
                answerLogic: "If the question says reduce overfitting in XGBoost by random row sampling, choose subsample. If it compares hyperparameter search and validation scoring, separate GridSearchCV from cross_val_score."
            }
        ]
    },
    8: {
        title: "Assignment bridge: margins, kernels, and semi-supervised logic",
        thesis: "Week 8 questions extend classification beyond basic supervised models by testing SVM geometry, semi-supervised assumptions, active learning, and distance metrics.",
        groups: [
            {
                heading: "SVM and kernels",
                testedBy: [
                    "support vectors",
                    "soft-margin SVM",
                    "linear, polynomial, RBF, and sigmoid kernels",
                    "convex optimization"
                ],
                theory: "SVM builds a decision boundary using support vectors, the training points closest to the boundary. Soft margin allows some violations for better generalization. Linear kernels fit high-dimensional sparse data, polynomial kernels model feature interactions, RBF models local nonlinear similarity, and sigmoid mimics neural activation behavior.",
                answerLogic: "If the question mentions points closest to the boundary, choose support vectors. If it mentions allowing misclassification to improve generalization, choose soft margin."
            },
            {
                heading: "Semi-supervised and active learning",
                testedBy: [
                    "labeled plus unlabeled data",
                    "smoothness, cluster, and manifold assumptions",
                    "label propagation",
                    "uncertainty, margin, entropy, and diversity sampling"
                ],
                theory: "Semi-supervised learning assumes nearby or same-cluster points likely share labels, and high-dimensional data may lie on a lower-dimensional manifold. Active learning chooses the most useful unlabeled samples for labeling.",
                answerLogic: "Low confidence points indicate uncertainty sampling, closest-to-boundary points indicate margin sampling, highest prediction entropy indicates entropy sampling, and representative coverage indicates diversity sampling."
            },
            {
                heading: "Distance metrics and discrete choice",
                testedBy: [
                    "cosine, Hamming, Mahalanobis, and Manhattan distance",
                    "maximum likelihood estimation",
                    "multinomial logistic regression assumptions"
                ],
                theory: "Cosine compares orientation, Hamming counts categorical mismatches, Mahalanobis accounts for correlated features, and Manhattan measures grid-like axis distance. Multinomial logistic regression often estimates parameters by maximizing likelihood and assumes independent observations and sufficient samples.",
                answerLogic: "Match the metric to the data type and city setting. Grid movement points to Manhattan; categorical mismatch points to Hamming; correlated variables point to Mahalanobis."
            }
        ]
    },
    9: {
        title: "Assignment bridge: discovering structure in unlabeled urban data",
        thesis: "Week 9 questions test whether you can explain hidden structure: association rules, clustering geometry, linkage behavior, density, mixtures, and dimensionality reduction.",
        groups: [
            {
                heading: "Association rules",
                testedBy: [
                    "binary incidence matrix",
                    "support, confidence, and lift",
                    "definition of association rule learning"
                ],
                theory: "Association learning finds events or items that occur together. A binary incidence matrix records presence or absence. Support is frequency, confidence is conditional reliability, and lift compares the rule against chance co-occurrence.",
                answerLogic: "If the question asks frequency, choose support. If it asks how often a rule is true when the antecedent occurs, choose confidence. If it asks rule strength beyond independence, choose lift."
            },
            {
                heading: "Clustering and linkage",
                testedBy: [
                    "similarity measures and k-prototypes",
                    "Ward linkage variance calculation",
                    "single, complete, and Ward linkage behavior",
                    "K-means elbow and silhouette interpretation"
                ],
                theory: "Clustering groups similar observations. K-prototypes handles mixed numeric and categorical data. Single linkage can chain, complete linkage forms compact clusters, Ward linkage minimizes the increase in within-cluster variance, and silhouette scores judge cluster separation.",
                answerLogic: "Choose the method whose behavior matches the description. Long chains point to single linkage, compact farthest-pair logic points to complete linkage, and WCSS minimization points to Ward."
            },
            {
                heading: "Density, mixtures, and dimensions",
                testedBy: [
                    "DBSCAN core points",
                    "GMM and BIC statements",
                    "PCA for composite heat indicators",
                    "hard versus soft clustering"
                ],
                theory: "DBSCAN core points have enough neighbors within epsilon. GMM assigns probabilistic membership and uses model-selection criteria like BIC to balance fit and complexity. PCA transforms correlated variables into components that preserve variance and reduce multicollinearity.",
                answerLogic: "If the data has outliers and irregular dense zones, DBSCAN is reasonable. If the question stresses correlated urban heat variables, PCA is reasonable because it builds a composite component."
            }
        ]
    },
    10: {
        title: "Assignment bridge: why neural-network answers make sense",
        thesis: "Week 10 questions test neural networks as representation learners and reinforcement learning as decision-making through feedback.",
        groups: [
            {
                heading: "ANN structure and training",
                testedBy: [
                    "model inspired by the human brain",
                    "hidden-layer neuron count",
                    "GELU in transformer-style models",
                    "backpropagation"
                ],
                theory: "Artificial neural networks are layered models inspired by simplified neurons. Hidden-layer size depends on problem complexity and representation needs. Backpropagation computes gradients so weights can be updated. GELU is common in modern transformer-like deep architectures.",
                answerLogic: "Choose answers that connect architecture to learning. Backpropagation is not for data storage or visualization; it is for gradient-based training."
            },
            {
                heading: "Optimization and model explanation",
                testedBy: [
                    "SHAP",
                    "complex loss surfaces",
                    "vanishing and exploding gradients",
                    "weight initialization and batch normalization"
                ],
                theory: "Deep networks have many nonlinear parameters, creating complex loss surfaces. Training can suffer from vanishing or exploding gradients. SHAP estimates how much each feature contributes to a prediction.",
                answerLogic: "If the question asks why a model gave a prediction, choose SHAP. If it asks training difficulty, think gradients, initialization, normalization, and non-convex loss."
            },
            {
                heading: "CNN, RNN, kernels, and reinforcement learning",
                testedBy: [
                    "CNN versus RNN use",
                    "image kernel",
                    "agent, action, reward, and policy",
                    "model-free, model-based, and policy-based RL",
                    "Bellman expectation and recursive computation"
                ],
                theory: "CNNs learn spatial patterns from images using kernels; RNNs handle sequential data. In reinforcement learning, an agent takes actions, receives rewards, and follows or learns a policy. Bellman equations express long-term reward recursively.",
                answerLogic: "Images point to CNN and kernels. Sequences point to RNN or LSTM. Feedback-driven decision learning points to reinforcement learning."
            }
        ]
    },
    11: {
        title: "Assignment bridge: connecting IoT hardware to urban data",
        thesis: "Week 11 questions test the physical data pipeline: sensing, signal conversion, networking, embedded control, and actuation.",
        groups: [
            {
                heading: "IoT layers and communication",
                testedBy: [
                    "IP and TCP/IP",
                    "sensing layer, network layer, WPAN, and WWAN",
                    "short-range and long-distance communication"
                ],
                theory: "The sensing layer captures real-world measurements, the network layer transmits them, WPAN covers short-range personal-area communication, WWAN supports wider-area communication, IP addresses devices, and TCP/IP supports reliable transmission.",
                answerLogic: "If the question asks unique addressing, choose IP. If it asks reliable transmission between devices and servers, choose TCP/IP. If it asks real-world capture, choose sensing layer."
            },
            {
                heading: "Signals, conversion, and control",
                testedBy: [
                    "ADC in process control",
                    "analog versus digital signals",
                    "sensor transfer function",
                    "actuator function"
                ],
                theory: "Physical sensors often produce analog signals. ADC converts them into digital values for processing. Transfer functions relate stimulus to sensor output. Actuators convert control signals into physical action.",
                answerLogic: "Input from the world points to sensors and ADC. Output back into the world points to actuators. Continuous noisy values point to analog signals; discrete states point to digital signals."
            },
            {
                heading: "Arduino prototyping",
                testedBy: [
                    "Arduino IDE",
                    "ATmega328P",
                    "EEPROM, Ethernet, GSM, and Bridge libraries",
                    "board driver installation"
                ],
                theory: "Arduino IDE writes, compiles, and uploads sketches. Arduino Uno uses ATmega328P. EEPROM supports non-volatile storage, Ethernet supports network connectivity, GSM supports cellular communication, and Bridge supports processor communication.",
                answerLogic: "Match each component to its technical role. If the computer cannot detect the board after IDE installation, driver setup is the reasonable next step."
            }
        ]
    },
    12: {
        title: "Assignment bridge: final integration with GIS and devices",
        thesis: "Week 12 questions connect physical prototypes, GIS operations, spatial analysis, classification, and automation into an integrated urban informatics workflow.",
        groups: [
            {
                heading: "Arduino sensors and movement",
                testedBy: [
                    "servo motor function",
                    "PIR sensor motion detection"
                ],
                theory: "A servo motor provides controlled angular movement, useful for gates, barriers, cameras, or small mechanical controls. A PIR sensor detects motion by sensing changes in infrared radiation from warm bodies.",
                answerLogic: "Servo questions are about controlled physical movement. PIR questions are about detecting motion through infrared change, not measuring distance or capturing images."
            },
            {
                heading: "GIS joins and relationships",
                testedBy: [
                    "GIS query definition",
                    "joining CSV to shapefile",
                    "Relate function"
                ],
                theory: "A GIS query selects features or records by attribute or spatial conditions. Joining a CSV to a shapefile requires a common matching field. Relate is useful when one feature connects to many records.",
                answerLogic: "If the question asks what makes a join possible, choose common field. If it says one-to-many, choose Relate."
            },
            {
                heading: "Spatial modeling and automation",
                testedBy: [
                    "forest-based classification",
                    "confusion matrix",
                    "Getis-Ord Gi* hotspot z-scores",
                    "Create Fishnet",
                    "ArcGIS API for Python"
                ],
                theory: "Classification predicts categories and is evaluated with a confusion matrix. Hotspot analysis identifies statistically significant clusters of high values using positive z-scores. Fishnet grids aggregate point data into comparable cells. ArcGIS API for Python automates web GIS and cloud mapping workflows.",
                answerLogic: "Categorical target points to classification. Evaluation points to confusion matrix. Hotspot means significant positive z-score. Point aggregation before spatial statistics points to Create Fishnet."
            }
        ]
    }
};
