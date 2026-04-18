window.weekGuides = {
    1: {
        label: "Start here",
        summary: "Urban Informatics studies how city data becomes decisions. Smart-city examples only make sense when you trace the full chain: people and places generate data, digital infrastructure carries it, analytics interprets it, and governance acts on it.",
        subjectLinks: [
            "People-place-technology is the lens used again in IoT, GIS, dashboards, and mobility platforms.",
            "Open data portals introduce the public datasets later accessed through SQL, APIs, and Python.",
            "Urban systems thinking explains why transport, land use, pollution, utilities, and services must be studied together."
        ],
        topicLinks: [
            "Smart cities need IoT sensors, data platforms, analytics dashboards, and governance rules.",
            "Time-series and open data concepts return in machine learning, forecasting, and real-time monitoring.",
            "Case studies show the complete data-to-action loop before the course breaks it into technical parts."
        ],
        flow: "Week 1 gives the purpose. Weeks 2-3 build storage and access, Weeks 4-9 build analytics, and Weeks 10-12 connect everything into usable urban systems.",
        assignmentSignals: [
            "Direct assignment link: people dimension, time-series data, and data velocity are definition-style concepts that can appear as quick identification questions.",
            "Indirect assignment link: open data and smart-city case questions usually test whether you can connect a data source to a governance benefit.",
            "Revision cue: for every smart-city example, identify the urban problem, the data source, the processing layer, and the decision or service outcome."
        ]
    },
    2: {
        label: "Data foundation",
        summary: "This week explains what urban data looks like before analysis begins. The main idea is that format and database design decide whether city records can be trusted, joined, queried, and reused.",
        subjectLinks: [
            "Structured tables fit census, permits, complaints, ridership, and utility billing records.",
            "Semi-structured and unstructured formats fit web APIs, sensor feeds, documents, images, and social media.",
            "Relational, NoSQL, and spatial databases are different answers to different urban workloads."
        ],
        topicLinks: [
            "Normalization protects city databases from duplicate and contradictory records.",
            "Primary and foreign keys become essential when connecting wards, roads, stops, routes, and citizens.",
            "NoSQL concepts prepare you for high-volume IoT data and flexible smart-city platforms."
        ],
        flow: "Week 2 answers how data is stored. Week 3 then answers how to retrieve, clean, and move that data into analysis.",
        assignmentSignals: [
            "Direct assignment link: structured versus semi-structured data, CSV versus JSON, database models, 3NF implying 2NF, Neo4j, and Cassandra are high-yield recall points.",
            "Indirect assignment link: storage-choice questions test whether you can match an urban workload to SQL, NoSQL, graph, document, or spatial database logic.",
            "Revision cue: attach each format to a city example such as census tables, GeoJSON boundaries, sensor events, CCTV images, or complaint text."
        ]
    },
    3: {
        label: "Data pipeline",
        summary: "Week 3 turns stored data into usable data. SQL, APIs, scraping, cleaning, and storage management form the pipeline between raw urban sources and analysis-ready datasets.",
        subjectLinks: [
            "SQL extracts patterns from municipal tables such as complaints, assets, permits, and transit logs.",
            "APIs provide live urban feeds such as weather, traffic, AQI, maps, and public transport.",
            "Cleaning and metadata make urban evidence defensible instead of just technically available."
        ],
        topicLinks: [
            "WHERE, GROUP BY, joins, and aggregation connect database theory with real policy questions.",
            "API and scraping workflows become Python automation tasks in Weeks 4 and 5.",
            "Cloud storage prepares the scale needed for IoT streams and dashboard systems later in the course."
        ],
        flow: "Week 3 is the bridge from database design to programming: after data is accessible, Python can process it.",
        assignmentSignals: [
            "Direct assignment link: why MySQL is relational, what MySQL Workbench does, and why WHERE runs before GROUP BY are direct concept checks.",
            "Indirect assignment link: API, scraping, ETL, and cloud-storage questions test whether you understand the path from raw source to analysis-ready data.",
            "Revision cue: for any query question, think in this order: select fields, filter rows, join related tables, group records, then interpret the urban meaning."
        ]
    },
    4: {
        label: "Programming layer",
        summary: "Python is the working language that connects urban data sources to analysis, models, dashboards, and devices. The goal is not syntax alone; it is writing reusable logic for repeated city-data tasks.",
        subjectLinks: [
            "Control flow expresses city rules such as thresholds, alerts, categories, and service conditions.",
            "Functions and modules keep cleaning, analysis, and reporting workflows reusable across wards or time periods.",
            "Objects can represent buses, sensors, routes, buildings, trips, or zones with their own properties and behavior."
        ],
        topicLinks: [
            "File I/O is how CSV, JSON, logs, and exported government datasets enter a workflow.",
            "Libraries introduced here lead directly to Pandas, Matplotlib, scikit-learn, and IoT communication.",
            "Error handling matters because city systems often run continuously and cannot fail silently."
        ],
        flow: "Week 4 gives the coding base. Week 5 uses that base to clean, analyze, and visualize real datasets.",
        assignmentSignals: [
            "Direct assignment link: procedure-oriented versus object-oriented programming, local variables, Python libraries, inheritance, and polymorphism are likely definition or matching items.",
            "Indirect assignment link: programming questions become urban informatics questions when loops, functions, files, and objects are used to automate city-data tasks.",
            "Revision cue: connect every programming term with a practical task, such as reading ward data, cleaning trip logs, modeling buses as objects, or writing reusable validation functions."
        ]
    },
    5: {
        label: "Insight layer",
        summary: "This week converts data into understandable evidence. Pandas, statistics, plots, maps, and dashboards help reveal what is happening in a city and make findings usable for decisions.",
        subjectLinks: [
            "DataFrames are a natural form for ward tables, route logs, sensor readings, surveys, and service records.",
            "EDA reveals missing values, outliers, peaks, seasonality, and spatial differences before modeling begins.",
            "Dashboards and charts translate technical analysis into planning, operations, and public communication."
        ],
        topicLinks: [
            "Grouping and merging extend the SQL ideas from Week 3 inside Python.",
            "Visualization prepares the interpretation skills needed for ML results in Weeks 6-9.",
            "Dashboard thinking returns in integrated command centers and decision-support systems."
        ],
        flow: "Week 5 turns raw data into insight. Weeks 6-9 then ask how machines can learn from those patterns.",
        assignmentSignals: [
            "Direct assignment link: JSON versus CSV, ORM, and the Pandas shape attribute are direct assignment-style details to memorize and understand.",
            "Indirect assignment link: EDA and dashboard questions test whether you can move from numbers to interpretable evidence for planners or administrators.",
            "Revision cue: for each dataset, practice the sequence load, inspect, clean, summarize, visualize, and explain the decision value."
        ]
    },
    6: {
        label: "ML mindset",
        summary: "Machine learning adds prediction, classification, pattern discovery, and adaptive decision-making to urban analytics. The important shift is from describing past data to learning rules that can generalize to new city conditions.",
        subjectLinks: [
            "Supervised learning predicts known outcomes such as demand, risk, travel time, or pollution level.",
            "Unsupervised learning discovers hidden structure in neighborhoods, trips, complaints, or service zones.",
            "Evaluation protects public decisions from models that look accurate but fail in important conditions."
        ],
        topicLinks: [
            "Train-test splits connect to the real question: will the model work for future city data?",
            "Loss functions encode what kind of mistake matters most for the urban problem.",
            "Reinforcement learning links ML to adaptive traffic signals and other control systems."
        ],
        flow: "Week 6 introduces the ML toolbox. Week 7 focuses on supervised prediction and Week 8 focuses on hidden structure.",
        assignmentSignals: [
            "Direct assignment link: supervised, unsupervised, reinforcement learning, SARSA, black-box models, entropy, VIF, Pearson, Spearman, Kruskal-Wallis, LSTM, and DBSCAN are direct exam cues.",
            "Indirect assignment link: model-evaluation questions test whether you know when a method is trustworthy for future or unseen urban conditions.",
            "Revision cue: match each method to four things: input data, expected output, assumptions, and the urban decision it could support."
        ]
    },
    7: {
        label: "Prediction tools",
        summary: "Supervised learning is used when the city problem has examples with known answers. Regression and classification convert historical urban records into predictions or categories that support planning and operations.",
        subjectLinks: [
            "Regression fits continuous outcomes such as demand, speed, AQI, cost, or water use.",
            "Classification fits categories such as risk level, complaint type, land-use class, or service priority.",
            "Explainable models matter because public-sector decisions must be justified to citizens and administrators."
        ],
        topicLinks: [
            "Decision trees connect naturally to rule-based planning logic and transparent decision paths.",
            "Random forests and boosting improve weak single models but need careful evaluation for overfitting.",
            "SVM and tree models prepare the ground for remote sensing, risk mapping, and spatial classification."
        ],
        flow: "Week 7 uses labeled data to predict outcomes. Week 8 removes labels and asks what structure is hidden in the data.",
        assignmentSignals: [
            "Direct assignment link: entropy, information gain, Gini impurity, bagging, random forest, boosting, GridSearchCV, and XGBoost subsample are direct technical targets.",
            "Indirect assignment link: overfitting and interpretability questions test whether predictive models can be trusted in public-sector decisions.",
            "Revision cue: first decide whether the target is continuous or categorical, then choose a model family, explain the split criterion, and name the overfitting control."
        ]
    },
    8: {
        label: "Hidden patterns",
        summary: "Unsupervised and association learning help when the city has data but no predefined labels. These methods discover groups, similarities, co-occurring events, and reduced dimensions that reveal urban structure.",
        subjectLinks: [
            "Clustering can create neighborhood typologies from mobility, demographic, land-use, or service indicators.",
            "Association rules can reveal recurring combinations behind accidents, complaints, failures, or trips.",
            "Dimensionality reduction helps summarize many correlated urban indicators into interpretable factors."
        ],
        topicLinks: [
            "Distance metrics decide what similarity means, so they must match the urban question.",
            "DBSCAN and hierarchical clustering are useful when city patterns are not neat circular groups.",
            "PCA connects many variables into a smaller set of axes for mapping, modeling, or communication."
        ],
        flow: "Week 8 discovers patterns without labels. Week 9 moves to deeper models that learn complex representations.",
        assignmentSignals: [
            "Direct assignment link: support, confidence, lift, binary incidence matrix, Ward linkage, DBSCAN core points, GMM with BIC, k in k-means, and PCA are direct question hooks.",
            "Indirect assignment link: clustering questions test whether you can interpret groups as meaningful urban types rather than just algorithm output.",
            "Revision cue: always state the similarity measure and what it means in the city context, such as distance between neighborhoods, trip patterns, or complaint profiles."
        ]
    },
    9: {
        label: "Representation learning",
        summary: "Deep learning handles complex inputs and nonlinear relationships common in cities: camera images, sequences, sensor streams, text, and multi-factor congestion patterns. Its power comes with higher training and explanation demands.",
        subjectLinks: [
            "CNNs connect directly to urban imagery, CCTV, remote sensing, vehicle counting, and land-cover mapping.",
            "RNNs and LSTMs fit temporal city data such as demand, traffic, weather, energy, and AQI.",
            "Explainability tools are important because deep models can affect public services and rights."
        ],
        topicLinks: [
            "Activation functions and backpropagation explain how neural networks learn nonlinear urban patterns.",
            "Vanishing and exploding gradients show why deep models need careful architecture and tuning.",
            "SHAP-style interpretation links model outputs back to features planners can discuss."
        ],
        flow: "Week 9 completes the analytics block. Weeks 10-12 move from models to physical sensing, platforms, communication, and governance.",
        assignmentSignals: [
            "Direct assignment link: ANN layers, hidden neurons, activation functions, backpropagation, CNNs, kernels, LSTMs, SHAP, vanishing gradients, exploding gradients, and RL components are direct revision points.",
            "Indirect assignment link: architecture questions test whether you can match data form to model form, such as images to CNNs and sequences to LSTMs.",
            "Revision cue: for every deep-learning term, connect it to a city data source such as CCTV, satellite imagery, traffic sequences, sensor streams, or public complaints."
        ]
    },
    10: {
        label: "Sensing layer",
        summary: "IoT explains how the physical city becomes digital data. Sensors, protocols, microcontrollers, networks, and cloud systems create the live input layer for smart-city monitoring and control.",
        subjectLinks: [
            "Sensors measure traffic, air quality, water levels, lighting, energy, motion, and public-space conditions.",
            "Protocols decide whether urban data can move reliably from thousands of devices to a central platform.",
            "Actuators close the loop by turning analysis into real-world actions such as signals, gates, lights, or valves."
        ],
        topicLinks: [
            "Analog-to-digital conversion connects physical measurement with computable data.",
            "MQTT, HTTP, IP, and TCP/IP explain the communication layer behind real-time dashboards.",
            "Cloud integration links IoT data back to Python analysis, ML forecasting, and GIS platforms."
        ],
        flow: "Week 10 supplies live data from the city. Week 11 turns sensing and insight into prototypes, displays, and usable interventions.",
        assignmentSignals: [
            "Direct assignment link: IP, TCP/IP, ADC, sensing layer, network layer, WPAN, WWAN, analog versus digital signals, transfer functions, sensors, and actuators are direct targets.",
            "Indirect assignment link: architecture questions test whether you can describe the whole sensor-to-cloud chain instead of isolated components.",
            "Revision cue: draw the path from physical stimulus to sensor, ADC, microcontroller, network, cloud storage, dashboard, and actuator response."
        ]
    },
    11: {
        label: "Action and communication",
        summary: "Week 11 is about making urban informatics usable. Whether the focus is Arduino prototyping or visual communication, the shared goal is to turn data and analysis into something people can operate, understand, or act on.",
        subjectLinks: [
            "Arduino-style prototypes show that data collection can be built with sensors, firmware, serial communication, and actuators.",
            "Visualization and storytelling make analytical results understandable for planners, officials, and citizens.",
            "Both hardware prototypes and dashboards complete the feedback loop from urban problem to data-driven response."
        ],
        topicLinks: [
            "Serial communication can move sensor readings into Python, databases, or dashboards.",
            "Charts, maps, and alerts must match the decision being made, not just decorate the data.",
            "Project quality depends on calibration, stable data flow, clear communication, and urban relevance."
        ],
        flow: "Week 11 turns technical components into visible tools. Week 12 integrates those tools into larger platforms and governance frameworks.",
        assignmentSignals: [
            "Direct assignment link: Arduino IDE, USB drivers, ATmega328P, firmware, serial communication, EEPROM, Ethernet, GSM, Bridge, servo motors, and PIR sensors are direct hardware/prototype targets.",
            "Indirect assignment link: visualization, dashboards, GIS maps, and storytelling questions test whether insight can be communicated clearly enough for action.",
            "Revision cue: for any project example, list the input data, processing step, output display or actuator, user, and urban decision."
        ]
    },
    12: {
        label: "Integration and responsibility",
        summary: "The final week connects the full course into complete urban systems. Storage, APIs, Python, ML, IoT, GIS, dashboards, simulation, and governance must work together for an urban informatics solution to be useful and responsible.",
        subjectLinks: [
            "GIS and spatial databases keep the where of the city connected to the what and when of data.",
            "Dashboards, simulations, and mobility platforms convert analysis into planning and operational decisions.",
            "Ethics, privacy, inclusion, and institutional capacity decide whether a technical system should be deployed."
        ],
        topicLinks: [
            "PostGIS, ArcGIS workflows, joins, relates, fishnets, and hotspot analysis bring database ideas into space.",
            "Agent-based simulation tests policy ideas before cities spend money or disrupt residents.",
            "Privacy and governance connect back to Week 1: urban informatics must improve cities without harming people."
        ],
        flow: "Week 12 is the synthesis: collect data, store it, process it, learn from it, visualize it, act on it, and govern it responsibly.",
        assignmentSignals: [
            "Direct assignment link: GIS query, join using a common field, Relate for one-to-many tables, confusion matrix, hotspot z-scores, Create Fishnet, ArcGIS API for Python, and PostGIS are direct targets.",
            "Indirect assignment link: integrated-platform questions test whether you can connect databases, analytics, mapping, dashboards, mobility systems, and governance in one workflow.",
            "Revision cue: answer final-week questions by naming where the data lives, how the spatial or statistical relationship is analyzed, and what planning decision follows."
        ]
    }
};

window.weekQuickChecks = {
    1: [
        {
            topic: "Urban informatics basics",
            question: "If an assignment asks about the people dimension, what is it really testing?",
            answer: "It is testing whether you know that people are not just data points. Citizens, planners, operators, and firms produce data, interpret it, and use it for city decisions."
        },
        {
            topic: "Smart cities",
            question: "Name the usual data flow behind a smart-city service.",
            answer: "Urban problem, sensor or data source, communication network, database or cloud platform, analytics or dashboard, then a governance decision or service action."
        },
        {
            topic: "Urban systems",
            question: "Why can a transport decision also affect pollution, land value, and service access?",
            answer: "Urban systems are interdependent. Movement patterns influence emissions, land-use attractiveness, travel time, and how easily people reach jobs and services."
        },
        {
            topic: "Urban big data",
            question: "What does velocity mean in urban big data questions?",
            answer: "Velocity is the speed at which data is generated and must be transmitted, stored, or processed, such as live traffic or sensor feeds."
        },
        {
            topic: "Open data",
            question: "How do open data portals connect Week 1 to later API and SQL topics?",
            answer: "They provide the raw public datasets that later need to be downloaded, queried, cleaned, joined, analyzed, and visualized."
        }
    ],
    2: [
        {
            topic: "Data types",
            question: "Give one urban example each for structured, semi-structured, and unstructured data.",
            answer: "Structured: ward census table. Semi-structured: JSON from a transit API. Unstructured: CCTV image, complaint text, or social media post."
        },
        {
            topic: "Data formats",
            question: "Why would JSON fit a live bus API better than CSV?",
            answer: "JSON can hold nested data such as route, vehicle, stop, time, and location in one response, while CSV is better for flat row-column tables."
        },
        {
            topic: "Relational databases",
            question: "Why are relational databases useful for municipal permit or tax records?",
            answer: "They work well when the schema is known and records must be connected reliably through primary keys and foreign keys."
        },
        {
            topic: "Normalization",
            question: "If a table is in Third Normal Form, what lower normal form is automatically satisfied?",
            answer: "Second Normal Form is satisfied. 3NF removes transitive dependency after the earlier dependency rules are already handled."
        },
        {
            topic: "NoSQL",
            question: "Which database style fits changing sensor records, and which fits road-network relationships?",
            answer: "A document or wide-column NoSQL store can fit changing sensor records. A graph database such as Neo4j fits relationship-heavy networks."
        }
    ],
    3: [
        {
            topic: "SQL order",
            question: "In a query with WHERE and GROUP BY, which idea happens first conceptually?",
            answer: "WHERE filters individual rows first. GROUP BY then groups the remaining rows for aggregation."
        },
        {
            topic: "Relational tools",
            question: "Why is MySQL called relational, and what does Workbench help with?",
            answer: "MySQL stores related tables connected by keys. MySQL Workbench helps inspect schemas, write queries, and manage databases visually."
        },
        {
            topic: "APIs and scraping",
            question: "When should you prefer an API over scraping?",
            answer: "Use an API when the provider exposes structured endpoints. Scraping is a fallback when data is public on pages but not offered through an API."
        },
        {
            topic: "Cleaning",
            question: "Name three common cleaning issues in urban datasets.",
            answer: "Missing sensor values, duplicate complaint records, inconsistent ward names, wrong data types, GPS errors, and outliers are common examples."
        },
        {
            topic: "Pipeline",
            question: "What is the basic ETL path for a live traffic dataset?",
            answer: "Extract from API or sensor stream, transform by cleaning and standardizing fields, then load into a database, dashboard, or analysis file."
        }
    ],
    4: [
        {
            topic: "Variables and scope",
            question: "What is a local variable in a Python function?",
            answer: "It is a variable created inside a function and normally accessible only inside that function, which prevents accidental interference elsewhere."
        },
        {
            topic: "Programming style",
            question: "How is object-oriented thinking different from procedure-oriented thinking?",
            answer: "Procedure-oriented code focuses on steps and functions. Object-oriented code models entities with attributes and behavior, such as buses, routes, sensors, or zones."
        },
        {
            topic: "Libraries",
            question: "Which Python library is usually used for DataFrames, and why does it matter in this course?",
            answer: "Pandas is used for DataFrames. It matters because many urban datasets are tabular and need filtering, grouping, joining, and summary operations."
        },
        {
            topic: "File I/O",
            question: "Why is file input and output not just a programming detail in urban informatics?",
            answer: "Urban workflows repeatedly read CSV, JSON, logs, and reports, then write cleaned outputs so analysis can be reproduced and shared."
        },
        {
            topic: "OOP concepts",
            question: "Give a simple urban example of inheritance or polymorphism.",
            answer: "A Vehicle class can have Bus and Taxi subclasses. Each can share common attributes while calculating fare, route, or capacity differently."
        }
    ],
    5: [
        {
            topic: "Pandas",
            question: "What does the Pandas shape attribute tell you?",
            answer: "It gives the number of rows and columns in a DataFrame, which is a quick check of dataset size and structure."
        },
        {
            topic: "Formats",
            question: "Why can CSV import require extra type handling?",
            answer: "CSV stores values as text-like fields and does not preserve nested structure or data types as reliably as a database or typed format."
        },
        {
            topic: "Database integration",
            question: "What problem does an ORM solve?",
            answer: "An ORM connects object-oriented code with relational tables, letting application objects map to database records."
        },
        {
            topic: "EDA",
            question: "Why should EDA happen before machine learning?",
            answer: "EDA reveals missing values, outliers, skew, seasonality, and data quality issues that affect model choice and interpretation."
        },
        {
            topic: "Dashboards",
            question: "What makes a dashboard useful for city operations?",
            answer: "It combines indicators, charts, maps, filters, and alerts so decision-makers can quickly understand conditions and act."
        }
    ],
    6: [
        {
            topic: "Learning types",
            question: "How do supervised, unsupervised, and reinforcement learning differ?",
            answer: "Supervised learning uses labels, unsupervised learning finds structure without labels, and reinforcement learning learns actions through rewards."
        },
        {
            topic: "Reinforcement learning",
            question: "What is SARSA usually used to illustrate?",
            answer: "SARSA illustrates on-policy reinforcement learning, where an agent learns from state, action, reward, next state, and next action."
        },
        {
            topic: "Feature quality",
            question: "What does VIF help diagnose?",
            answer: "VIF helps diagnose multicollinearity, where predictors are strongly related to each other and can make regression estimates unstable."
        },
        {
            topic: "Correlation",
            question: "When might Spearman be safer than Pearson?",
            answer: "Spearman is safer for monotonic rank-based relationships or data with outliers and non-normal behavior. Pearson suits linear continuous relationships."
        },
        {
            topic: "Model trust",
            question: "Why are black-box models risky in urban governance?",
            answer: "They may produce decisions that are hard to explain, audit, or defend when public services, rights, or resources are affected."
        }
    ],
    7: [
        {
            topic: "Tree splits",
            question: "What does information gain help a decision tree choose?",
            answer: "It helps choose the split that most reduces uncertainty or impurity in the target classes."
        },
        {
            topic: "Impurity",
            question: "Why do entropy and Gini impurity appear in split-selection questions?",
            answer: "Both measure how mixed the classes are at a node. Lower impurity after a split means a cleaner decision path."
        },
        {
            topic: "Ensembles",
            question: "How do bagging, random forest, and boosting differ?",
            answer: "Bagging trains parallel models on bootstrapped samples, random forest also samples features, and boosting trains sequential models to correct earlier errors."
        },
        {
            topic: "Tuning",
            question: "What is GridSearchCV used for?",
            answer: "It tests combinations of hyperparameters using cross-validation and helps choose settings that generalize better."
        },
        {
            topic: "XGBoost",
            question: "What does the subsample parameter control in XGBoost?",
            answer: "It controls the fraction of training rows used for each tree, which can reduce overfitting when set below one."
        }
    ],
    8: [
        {
            topic: "Association rules",
            question: "What do support, confidence, and lift measure?",
            answer: "Support measures frequency, confidence measures conditional reliability, and lift measures strength compared with independent occurrence."
        },
        {
            topic: "Incidence matrix",
            question: "Why is a binary incidence matrix useful for association mining?",
            answer: "It records whether each item or event is present in each transaction, making frequent co-occurrence patterns easier to detect."
        },
        {
            topic: "K-means",
            question: "Why must k be chosen before running k-means?",
            answer: "K-means partitions points into a fixed number of clusters, so the algorithm needs the intended number of groups in advance."
        },
        {
            topic: "DBSCAN",
            question: "What makes a point a DBSCAN core point?",
            answer: "A core point has at least MinPts neighboring points within the epsilon distance radius."
        },
        {
            topic: "PCA",
            question: "Why is PCA useful for many correlated urban indicators?",
            answer: "PCA compresses correlated variables into fewer components, making patterns easier to model, map, or explain."
        }
    ],
    9: [
        {
            topic: "ANN structure",
            question: "What are the basic layers of an artificial neural network?",
            answer: "Input layer, one or more hidden layers, and an output layer connected through weighted links."
        },
        {
            topic: "Activation functions",
            question: "Why does a neural network need activation functions?",
            answer: "Activation functions add nonlinearity, allowing the network to learn complex relationships beyond simple linear combinations."
        },
        {
            topic: "Backpropagation",
            question: "What does backpropagation compute?",
            answer: "It computes gradients of the loss with respect to weights so the network can update those weights during training."
        },
        {
            topic: "CNN and LSTM",
            question: "Which urban data fits CNNs, and which fits LSTMs?",
            answer: "CNNs fit images such as CCTV or satellite imagery. LSTMs fit time-series such as traffic flow, energy use, or AQI."
        },
        {
            topic: "Explainability",
            question: "Why does SHAP matter for urban AI?",
            answer: "SHAP helps explain which features contributed to a prediction, which is important when decisions affect public services or citizens."
        }
    ],
    10: [
        {
            topic: "IoT layers",
            question: "What is the difference between sensing and network layers?",
            answer: "The sensing layer captures physical conditions. The network layer transmits those readings to other devices, gateways, or cloud systems."
        },
        {
            topic: "Addressing",
            question: "What roles do IP and TCP/IP play?",
            answer: "IP supports addressing across networks. TCP/IP provides the broader communication stack for reliable data exchange."
        },
        {
            topic: "ADC",
            question: "Why is ADC needed in sensor systems?",
            answer: "ADC converts continuous analog sensor signals into digital values a microcontroller or computer can process."
        },
        {
            topic: "Signals",
            question: "Why are analog signals often more noise-sensitive than digital signals?",
            answer: "Analog values vary continuously, so small disturbances can change the measured value. Digital signals use discrete states."
        },
        {
            topic: "Actuators",
            question: "What does an actuator do in an urban IoT loop?",
            answer: "It converts a control signal into physical action, such as switching a light, moving a gate, or opening a valve."
        }
    ],
    11: [
        {
            topic: "Arduino IDE",
            question: "What is the Arduino IDE used for?",
            answer: "It is used to write, compile, and upload sketches to Arduino boards."
        },
        {
            topic: "Microcontroller",
            question: "Which microcontroller is associated with Arduino Uno?",
            answer: "Arduino Uno uses the ATmega328P microcontroller."
        },
        {
            topic: "Serial communication",
            question: "Why is serial communication important in prototypes?",
            answer: "It helps debug projects, monitor sensor values, and move readings from hardware into software tools."
        },
        {
            topic: "Libraries",
            question: "Match one library to its purpose: EEPROM, Ethernet, GSM, or Bridge.",
            answer: "EEPROM stores non-volatile data, Ethernet supports wired networking, GSM supports cellular communication, and Bridge links processors on compatible boards."
        },
        {
            topic: "Communication",
            question: "What should a visualization or prototype always make clear?",
            answer: "It should make clear the input data, the processing step, the output or action, and the urban decision being supported."
        }
    ],
    12: [
        {
            topic: "GIS query",
            question: "What is a GIS query?",
            answer: "It is a request to select spatial features or records that meet stated attribute or location conditions."
        },
        {
            topic: "Join and Relate",
            question: "When should Relate be preferred over a simple join?",
            answer: "Relate is useful when the relationship is one-to-many, while a join works best for one-to-one table matching."
        },
        {
            topic: "Evaluation",
            question: "What does a confusion matrix help evaluate?",
            answer: "It evaluates classification performance by comparing predicted classes with actual classes."
        },
        {
            topic: "Hotspots and fishnets",
            question: "What do positive significant Getis-Ord Gi* z-scores indicate, and why might fishnets be used first?",
            answer: "They indicate hotspots. Fishnets can aggregate point events into comparable grid cells before hotspot analysis."
        },
        {
            topic: "Integrated systems",
            question: "What should a final urban informatics workflow always connect?",
            answer: "It should connect data collection, storage, processing, spatial or statistical analysis, visualization, decision-making, and responsible governance."
        }
    ]
};

Object.keys(window.weekQuickChecks).forEach((week) => {
    if (window.weekGuides[week]) {
        window.weekGuides[week].quickChecks = window.weekQuickChecks[week];
    }
});
