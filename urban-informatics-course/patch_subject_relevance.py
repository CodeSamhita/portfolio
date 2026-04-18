import json
import os

subject_relevance = {
    2: {
        "heading": "Urban Informatics Subject Relevance:",
        "items": [
            "<strong>Structured Data:</strong> Urban informatics primarily works with structured tabular data — census tables, traffic logs, energy meter readings — all stored in relational databases.",
            "<strong>Unstructured Data:</strong> CCTV footage, satellite images, and social media posts about city issues are unstructured — processing these requires deep learning (CNNs) covered later in the course.",
            "<strong>GeoJSON Format:</strong> Urban informatics is inherently spatial — GeoJSON is the standard format for storing and sharing city boundaries, road networks, and point-of-interest data for GIS analysis.",
            "<strong>Relational Databases (SQL):</strong> Government agencies store all administrative urban records — property tax, water bills, permits — in RDBMS. Querying these is a core urban analyst skill.",
            "<strong>NoSQL Databases:</strong> IoT sensors in smart cities generate millions of events per day with variable schemas. NoSQL handles this velocity and flexibility where SQL would fail or require complex schema migrations.",
            "<strong>Spatial Databases:</strong> Urban geography is fundamental to planning — PostGIS (a spatial DB) lets planners query which wards fall within 500m of a proposed metro corridor directly in SQL.",
            "<strong>Database Normalization:</strong> Government databases riddled with duplicate records create wrong policy decisions. Normalization is data hygiene for urban governance systems."
        ]
    },
    3: {
        "heading": "Urban Informatics Subject Relevance:",
        "items": [
            "<strong>SQL:</strong> Urban informatics analysts spend significant time querying city databases — SQL is the universal language for extracting insights from municipal records, permits, and transport logs.",
            "<strong>REST APIs:</strong> Live urban data (weather, transit, AQI, traffic) is only accessible via APIs. Without API skills, you are limited to static, outdated datasets — real urban informatics requires live data.",
            "<strong>Web Scraping:</strong> Many urban datasets (property prices, public notices, event listings) are not available as APIs but are on public websites — scraping is how researchers collect this grey-area data.",
            "<strong>Data Cleaning:</strong> Urban sensor data is notoriously dirty — GPS drop-outs, sensor malfunctions, duplicate records from multiple systems. Clean data is the foundation of trustworthy urban analysis.",
            "<strong>Cloud Storage:</strong> Smart city platforms generate terabytes of data annually. Cloud storage provides the scalability that no local government server farm can match, enabling city-wide real-time analytics."
        ]
    },
    4: {
        "heading": "Urban Informatics Subject Relevance:",
        "items": [
            "<strong>Python:</strong> Python is the lingua franca of urban data science — it is used to process survey data, automate GIS workflows, run ML models, and send IoT sensor data to the cloud, all in one language.",
            "<strong>Control Structures:</strong> Urban analytics pipelines involve conditional logic — if sensor reading exceeds threshold, trigger alert — this is everyday Python control structure applied to city monitoring.",
            "<strong>Functions:</strong> Urban data pipelines are reused across datasets (monthly traffic, quarterly pollution, annual census). Modular functions mean you write the cleaning logic once and apply it everywhere.",
            "<strong>File I/O:</strong> Urban datasets are shared as CSV, JSON, and Excel files by government agencies. Reading these files into Python is always the first step in urban data analysis projects.",
            "<strong>OOP:</strong> Sensor networks, transit vehicles, and city zones are naturally modeled as objects. OOP lets you build clean, scalable representations of complex urban entities in your code.",
            "<strong>Error Handling:</strong> Urban IoT systems must run 24/7. A crash in a flood alert script or traffic monitor could have real public safety consequences — robust error handling is non-negotiable."
        ]
    },
    5: {
        "heading": "Urban Informatics Subject Relevance:",
        "items": [
            "<strong>Pandas DataFrames:</strong> The standard tool for loading and manipulating urban tabular datasets — bus ridership CSVs, ward-level census tables, SCADA energy readings all become DataFrames for analysis.",
            "<strong>Matplotlib:</strong> Charts are how urban planners communicate data to non-technical stakeholders. A well-crafted traffic speed histogram or pollution trend line chart can directly influence policy decisions.",
            "<strong>EDA:</strong> Before any urban ML model, EDA reveals the data quality, seasonality patterns (morning peaks, monsoon spikes), and anomalies (sensor failures) that determine model design choices.",
            "<strong>Dashboards:</strong> City command centres run on dashboards. Smart Cities Mission ICCCs use live dashboards to monitor 500+ parameters simultaneously — Dash and Tableau are the tools that power them.",
            "<strong>Statistical Summaries:</strong> Which ward has the highest average daily water consumption? is a basic GroupBy + mean() operation — the kind of urban policy question that Pandas answers in seconds."
        ]
    },
    6: {
        "heading": "Urban Informatics Subject Relevance:",
        "items": [
            "<strong>Supervised Learning:</strong> The most-used ML type in urban informatics — used to predict traffic congestion, flood levels, energy demand, and public health outcomes from historical city data.",
            "<strong>Unsupervised Learning:</strong> Used to discover hidden urban patterns — which neighborhoods share similar socioeconomic profiles, which road segments cluster by congestion behavior — without any prior labeling.",
            "<strong>Reinforcement Learning:</strong> Applied to adaptive traffic signal control — signals learn to minimize average wait time through trial-and-error interaction with the traffic environment.",
            "<strong>Loss Functions:</strong> Choosing the right error metric matters for city systems: MSE penalizes large errors heavily (good for flood prediction where extreme events matter most), MAE treats all errors equally.",
            "<strong>Train/Test Split:</strong> In urban informatics, models must generalize to future city states — proper train/test splits (especially temporal splits for time-series) ensure your traffic model works next month, not just last month.",
            "<strong>Model Evaluation:</strong> A traffic prediction model with 95% accuracy that fails for the 5% worst congestion scenarios is useless for city operations — evaluation metrics must match the urban use case."
        ]
    },
    7: {
        "heading": "Urban Informatics Subject Relevance:",
        "items": [
            "<strong>Regression:</strong> Urban planners use regression to predict continuous outcomes — AQI levels next week, energy demand next quarter, water consumption next summer — enabling proactive resource planning.",
            "<strong>Classification:</strong> City systems need binary or categorical decisions — accident risk (yes/no), flood zone (low/medium/high), pothole severity (minor/major/critical) — classification models power these.",
            "<strong>Decision Trees:</strong> Urban governance requires explainable decisions — a Decision Tree for pothole repair priority can be shown to citizens and city council, making AI-driven decisions transparent and accountable.",
            "<strong>SVM:</strong> Used in urban remote sensing — classifying satellite imagery pixels as road, rooftop, vegetation, or water body using SVMs is a standard land-use mapping technique.",
            "<strong>Random Forest:</strong> The go-to algorithm for urban tabular datasets (census + permits + transport) — handles missing values and mixed data types common in city government records without extensive preprocessing."
        ]
    },
    8: {
        "heading": "Urban Informatics Subject Relevance:",
        "items": [
            "<strong>K-Means Clustering:</strong> Used extensively in urban zoning — clustering neighborhoods by mobility patterns, socioeconomic indicators, or building typology helps planners create evidence-based policy zones without arbitrary boundaries.",
            "<strong>Hierarchical Clustering:</strong> Used in urban ecology and heritage conservation — revealing nested similarity structures (sub-neighborhoods within neighborhoods) that flat K-Means clusters miss.",
            "<strong>PCA:</strong> Urban datasets have many correlated variables (high density areas also have high pollution, high transit use, and high land values). PCA extracts the independent axes of urban variation for cleaner analysis.",
            "<strong>Apriori / Association Rules:</strong> Urban infrastructure dependency analysis — discovering which combinations of road conditions, weather, and time patterns co-occur with accidents or pipe failures, enabling targeted preventive maintenance.",
            "<strong>Frequent Pattern Mining:</strong> Identifies recurring urban events — peak demand hours, seasonal waste generation spikes, monthly complaint patterns — helping cities schedule services proactively rather than reactively."
        ]
    },
    9: {
        "heading": "Urban Informatics Subject Relevance:",
        "items": [
            "<strong>Neural Networks:</strong> Handle the complexity of urban systems that simple models cannot — multiple interacting variables (weather + events + road type + hour) that combine non-linearly to cause congestion.",
            "<strong>Backpropagation:</strong> Enables learning from massive urban datasets — a neural network trained on 3 years of sensor data automatically discovers hour-of-day, day-of-week, and seasonal patterns without feature engineering.",
            "<strong>CNN:</strong> Applies directly to urban camera networks — vehicle detection, pedestrian counting, illegal parking identification, and crowd density estimation from CCTV footage are all CNN tasks in smart cities.",
            "<strong>LSTM:</strong> The ideal model for urban time-series forecasting — traffic volume, energy consumption, water demand, and AQI all have temporal dependencies (yesterday influences today) that LSTM captures naturally.",
            "<strong>Interpretability (SHAP / LIME):</strong> Urban AI must be accountable — when an ML model recommends demolishing a building or evicting a community, city officials need explanations they can justify to the public."
        ]
    },
    10: {
        "heading": "Urban Informatics Subject Relevance:",
        "items": [
            "<strong>IoT Architecture:</strong> Every smart city data pipeline starts with the Perception Layer — without physical sensors collecting real-world data, urban informatics has no input data to analyze or model.",
            "<strong>MQTT Protocol:</strong> The standard communication protocol for smart city sensor networks — enables thousands of sensors across a city to stream data simultaneously to a central analytics platform with minimal bandwidth.",
            "<strong>Sensors:</strong> The raw data generators of urban informatics — temperature, gas, ultrasonic, and camera sensors are the instruments that convert the physical city into digital data streams for analysis.",
            "<strong>Actuators:</strong> The output layer of urban informatics systems — once data is analyzed and a decision is made (too much traffic means extend green signal), an actuator physically implements that decision in the real world.",
            "<strong>Microcontrollers:</strong> The embedded intelligence at the edge — microcontrollers run the firmware that continuously reads sensors, applies threshold logic, and transmits data autonomously without cloud dependency.",
            "<strong>Cloud Integration:</strong> Urban-scale IoT generates data volumes that only cloud platforms can store and process at the required speed — cloud integration is what scales a prototype sensor to a city-wide network."
        ]
    },
    11: {
        "heading": "Urban Informatics Subject Relevance:",
        "items": [
            "<strong>Arduino Platform:</strong> The entry point for urban IoT prototyping — Arduino allows anyone (engineers, planners, students) to build a working pollution monitor or traffic counter in a weekend, lowering the barrier to urban innovation.",
            "<strong>Arduino IDE and Firmware:</strong> Firmware is the software layer that makes physical sensing possible — without properly written firmware, sensors cannot read data accurately or transmit it reliably to city systems.",
            "<strong>Serial Communication:</strong> The bridge between hardware and software — serial data from Arduino flows into Python for analysis, completing the full urban data pipeline from physical sensor to analytical dashboard.",
            "<strong>Sensor Interfacing:</strong> Building a working sensor node proves that urban data collection is tangible and buildable — it demystifies the black box of IoT and makes urban informatics students capable hardware designers.",
            "<strong>Urban IoT Projects:</strong> Smart traffic lights, air quality monitors, smart parking — these projects are direct urban informatics applications demonstrating the complete feedback loop from urban problem to technical solution."
        ]
    },
    12: {
        "heading": "Urban Informatics Subject Relevance:",
        "items": [
            "<strong>Geospatial Analysis:</strong> Urban informatics is inherently spatial — every city problem has a location. GeoPandas and PostGIS make it possible to ask location-based questions like which zones exceed safe pollution levels directly from data.",
            "<strong>Dashboards and Visualization:</strong> Data only influences urban policy when decision-makers can understand it. Dashboards translate complex ML outputs and sensor streams into actionable visualizations for city administrators.",
            "<strong>Real-Time Analytics:</strong> Urban problems are time-critical — a traffic jam forming at 8:47am needs a response by 8:50am, not the next day. Real-time analytics is what separates reactive from proactive urban governance.",
            "<strong>PostGIS:</strong> Urban planning requires spatial queries — finding all schools within 1km of a proposed industrial zone, or calculating flood exposure by ward — PostGIS makes these spatial policy questions answerable in seconds.",
            "<strong>Urban Simulation:</strong> Cities cannot afford to experiment in the real world with untested infrastructure changes. Simulation lets planners test policy impacts (new road, metro line, zoning change) before committing public funds.",
            "<strong>Agent-Based Simulation:</strong> Urban behavior emerges from individual decisions — how people choose routes, where they settle, how they respond to disasters. ABM captures this emergent complexity that aggregate models miss.",
            "<strong>Bus and Bicycle Optimization:</strong> Public transport equity is a core urban informatics goal — data-driven optimization ensures mobility services reach underserved communities efficiently, not just profitable high-demand zones.",
            "<strong>Challenges and Limitations:</strong> Urban informatics must be deployed responsibly — privacy, digital divide, and high infrastructure cost mean that technical solutions alone are insufficient; governance and inclusion are equally important."
        ]
    }
}

data_dir = r'e:\nptel\urban-informatics-course\data'

for week_num, relevance in subject_relevance.items():
    filepath = os.path.join(data_dir, f'week{week_num}.json')
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)

    content = data['content']
    # Find the LAST highlight block — that's the Big Picture one
    insert_idx = None
    for i in range(len(content) - 1, -1, -1):
        if content[i].get('type') == 'highlight':
            insert_idx = i
            break

    if insert_idx is not None:
        relevance_heading = {
            'type': 'sub_heading',
            'text': relevance['heading']
        }
        relevance_list = {
            'type': 'list',
            'style': 'unordered',
            'items': relevance['items']
        }
        content.insert(insert_idx, relevance_list)
        content.insert(insert_idx, relevance_heading)

    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f'week{week_num}.json - updated OK')

print('All weeks patched successfully!')
