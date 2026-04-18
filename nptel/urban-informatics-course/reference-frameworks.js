window.referenceFrameworks = {
    1: {
        title: "Reference depth path",
        books: ["Batty: Urban Informatics and Big Data", "Townsend: Smart Cities"],
        ideas: [
            "Batty's urban-data lens treats city data as space-time evidence: what happened, where it happened, and when it happened.",
            "Townsend's smart-city lens keeps citizens and civic institutions visible, so technology is judged by public value, participation, and accountability.",
            "Use these lenses to read smart-city questions as governance questions, not gadget questions."
        ],
        assignmentUse: "This makes answers about people, citizen science, open data, ICCCs, UPYOG, digital divide, and sensitive data more reasonable: the best option should connect technology with civic purpose and responsible governance."
    },
    2: {
        title: "Reference depth path",
        books: ["Darwen: An Introduction to Relational Database Theory"],
        ideas: [
            "Darwen's relational view treats a database as a truthful, organized collection governed by types, predicates, relations, operators, and integrity rules.",
            "Keys and constraints are not decoration; they are the logic that lets a city database make reliable claims about permits, roads, assets, and services.",
            "Normalization is a theory of avoiding redundant or contradictory facts, not just a table-splitting ritual."
        ],
        assignmentUse: "This supports questions on DBMS, ACID, keys, dependencies, normal forms, and normalization: choose the option that preserves truth, uniqueness, consistency, and non-redundant representation."
    },
    3: {
        title: "Reference depth path",
        books: ["Darwen: Relational Algebra and Constraints", "McKinney: Python for Data Analysis"],
        ideas: [
            "Relational algebra explains SQL operations theoretically: restriction maps to filtering, projection maps to choosing attributes, join maps to logical AND across related predicates, and aggregation summarizes groups.",
            "McKinney's data-analysis workflow helps after extraction: inspect, clean, combine, reshape, aggregate, and then analyze.",
            "APIs and ORMs are interfaces around data access; they matter because urban systems rarely expose raw database tables directly."
        ],
        assignmentUse: "This supports WHERE/GROUP BY/HAVING, joins, views, transactions, API, GraphQL, ORM, and traffic aggregation questions: identify the operation before selecting the SQL clause or access method."
    },
    4: {
        title: "Reference depth path",
        books: ["Martelli, Ravenscroft, Holden: Python in a Nutshell"],
        ideas: [
            "Python should be read as a language of namespaces, objects, functions, modules, exceptions, and reusable libraries.",
            "A function is not only a code block; it is a boundary for scope, reuse, testing, and clarity.",
            "OOP is useful when urban entities have both state and behavior, such as buses, routes, sensors, zones, or buildings."
        ],
        assignmentUse: "This supports questions on local variables, modules, calling functions, OOP properties, dynamic binding, and library matching: choose the option that improves modularity, encapsulation, reuse, or correct abstraction."
    },
    5: {
        title: "Reference depth path",
        books: ["McKinney: Python for Data Analysis", "Martelli et al.: Python in a Nutshell"],
        ideas: [
            "McKinney's pandas workflow gives the structure: load data, inspect it, clean it, transform it, combine it, group it, visualize it, and model it.",
            "DataFrame methods are meaningful because they answer data-quality questions before policy or modeling questions.",
            "Visualization choices should be tied to analytical purpose: distribution, comparison, outlier detection, density, or aggregation."
        ],
        assignmentUse: "This supports questions on shape, info, describe, fillna, astype, reset_index, IQR, plots, ORM, SQLAlchemy components, and min-max scaling: select the method whose purpose matches the data task."
    },
    6: {
        title: "Reference depth path",
        books: ["Mitchell: Machine Learning", "Murphy: Machine Learning: A Probabilistic Perspective"],
        ideas: [
            "Mitchell's definition frames ML as improving through experience, so supervised, unsupervised, and reinforcement learning differ by the feedback available.",
            "Murphy's probabilistic lens treats predictions as uncertainty-aware model outputs, making entropy, likelihood, validation, and assumptions central.",
            "Urban ML must be evaluated by generalization, not by whether it fits one historical dataset."
        ],
        assignmentUse: "This supports questions on learning types, SARSA, black-box models, VIF, correlations, Kruskal-Wallis, LSTM, DBSCAN, PCA/LDA, and train-test split: reason from data type, target availability, assumptions, and uncertainty."
    },
    7: {
        title: "Reference depth path",
        books: ["Mitchell: Decision Tree Learning and Hypothesis Evaluation", "Murphy: Probabilistic Models"],
        ideas: [
            "Decision trees are readable hypotheses built by choosing splits that reduce uncertainty or impurity.",
            "Information gain, entropy, and Gini are not formulas to memorize alone; they quantify how much a split clarifies the class label.",
            "Ensemble methods improve reliability by combining many learners, but they must still be tuned and validated."
        ],
        assignmentUse: "This supports entropy, information gain, gain ratio, Gini, bagging, random forest, boosting, XGBoost, GridSearchCV, and cross-validation questions: select the answer that improves purity, controls overfitting, or validates generalization."
    },
    8: {
        title: "Reference depth path",
        books: ["Mitchell: Learning and Generalization", "Murphy: Kernels and Classification"],
        ideas: [
            "SVMs are geometric classifiers: support vectors define the boundary, kernels change how similarity is computed, and soft margins trade perfect separation for better generalization.",
            "Semi-supervised learning depends on assumptions about smoothness, clusters, and manifolds; active learning asks which unlabeled cases are most informative.",
            "Distance metrics are theories of similarity, so the metric must match the data type."
        ],
        assignmentUse: "This supports SVM, kernels, convex optimization, label propagation, semi-supervised assumptions, active-learning sampling, and distance metric questions: choose the option that matches the geometry of the data."
    },
    9: {
        title: "Reference depth path",
        books: ["Murphy: Mixture Models, Clustering, Latent Linear Models", "Mitchell: Rule Learning"],
        ideas: [
            "Association rules are pattern rules over co-occurrence, while clustering is structure discovery over similarity.",
            "GMM, BIC, PCA, hard clustering, and soft clustering are ways to reason about latent structure rather than visible labels.",
            "Urban clustering is only meaningful when the similarity measure and interpretation fit the city problem."
        ],
        assignmentUse: "This supports support, confidence, lift, incidence matrix, Ward linkage, DBSCAN, GMM/BIC, PCA, Mean Shift, hard/soft clustering, elbow, and silhouette questions: explain what structure is being discovered and why the method fits."
    },
    10: {
        title: "Reference depth path",
        books: ["Mitchell: Artificial Neural Networks and Reinforcement Learning", "Murphy: Deep Learning and Probabilistic Modeling"],
        ideas: [
            "Neural networks learn representations through weighted layers, nonlinear activations, loss functions, and gradient-based training.",
            "Deep learning answers become reasonable when matched to data structure: images need spatial filters, sequences need temporal memory, and public decisions need explainability.",
            "Reinforcement learning is about agents learning policies from reward feedback over time."
        ],
        assignmentUse: "This supports ANN, hidden neurons, GELU, backpropagation, SHAP, gradients, CNN/RNN, kernels, activation matching, RL components, RL types, and Bellman questions: match architecture to data and learning signal."
    },
    11: {
        title: "Reference depth path",
        books: ["Bahga and Madisetti: Internet of Things: A Hands-On-Approach"],
        ideas: [
            "IoT is a layered system: sensing captures the physical world, networks transmit data, processing turns signals into information, and applications trigger decisions.",
            "ADC, transfer functions, protocols, embedded boards, and actuators form one feedback loop rather than isolated hardware facts.",
            "Hands-on IoT thinking asks what is sensed, how it is encoded, how it moves, where it is processed, and what action follows."
        ],
        assignmentUse: "This supports IP/TCP-IP, sensing and network layers, WPAN/WWAN, ADC, analog/digital signals, transfer functions, actuators, Arduino IDE, ATmega328P, libraries, and drivers: choose the component by its role in the sensing-to-action chain."
    },
    12: {
        title: "Reference depth path",
        books: ["Bahga and Madisetti: IoT Applications", "Batty: Urban Informatics and Big Data", "McKinney: Data Analysis Workflow"],
        ideas: [
            "The final week combines device-level sensing with spatial analysis and platform automation.",
            "GIS operations make data spatially meaningful: query selects, join connects attributes through a common field, relate handles one-to-many links, and fishnet aggregates point events.",
            "Classification, hotspot analysis, and APIs become useful only when they support an urban decision."
        ],
        assignmentUse: "This supports servo, PIR, GIS query, CSV-shapefile join, Relate, forest classification, confusion matrix, hotspot z-scores, Create Fishnet, and ArcGIS API questions: connect the tool to the spatial or physical task it performs."
    }
};
