const GIS_DATA = [
  {
    "setId": 1,
    "setTitle": "Introduction & GIS Components",
    "questions": [
      {
        "id": "q1_1",
        "question": "What does GIS stand for in a professional context?",
        "options": {
          "a": "Global Information System",
          "b": "Geographic Information Systems",
          "c": "Graphical Info Structures"
        },
        "answer": "b",
        "explanation": "GIS stands for Geographic Information Systems, used to capture, store, analyze, and display geographically referenced data.",
        "conceptHint": "Concept: GIS stands for Geographic Information Systems, used to capture, store, analyze, and display geographically referenced data."
      },
      {
        "id": "q1_2",
        "question": "Who is officially recognized as the 'Father of GIS'?",
        "options": {
          "a": "Jack Dangermond",
          "b": "Roger Tomlinson",
          "c": "John Snow"
        },
        "answer": "b",
        "explanation": "Roger Tomlinson developed the first conceptual and practical GIS (CGIS - Canadian GIS) for the Ottawa Municipal Corporation.",
        "conceptHint": "Concept: Roger Tomlinson developed the first conceptual and practical GIS (CGIS - Canadian GIS) for the Ottawa Municipal Corporation."
      },
      {
        "id": "q1_3",
        "question": "Which company founded ArcInfo and commercialized early GIS software?",
        "options": {
          "a": "Google",
          "b": "Microsoft",
          "c": "ESRI"
        },
        "answer": "c",
        "explanation": "ESRI (Environmental Science Research Institute), founded by Jack and Laura Dangermond, commercialized early GIS with 'ArcInfo'.",
        "conceptHint": "Concept: ESRI (Environmental Science Research Institute), founded by Jack and Laura Dangermond, commercialized early GIS with 'ArcInfo'."
      },
      {
        "id": "q1_4",
        "question": "In the GIS 'Carpenter's Toolbox' analogy, what item represents 'Data'?",
        "options": {
          "a": "The hammer and saw",
          "b": "The raw materials (wood and glue)",
          "c": "The blueprints"
        },
        "answer": "b",
        "explanation": "Data represents the raw materials. Hardware/Software are the tools, and Methods/People are the blueprints and the carpenter.",
        "conceptHint": "Concept: Data represents the raw materials."
      },
      {
        "id": "q1_5",
        "question": "Which component of GIS is considered the 'Heart' of the system?",
        "options": {
          "a": "Hardware",
          "b": "Data",
          "c": "People"
        },
        "answer": "b",
        "explanation": "If hardware and software are tools, Data is the critical absolute center of GIS. Without accurate data, other components have zero utility.",
        "conceptHint": "Concept: If hardware and software are tools, Data is the critical absolute center of GIS."
      },
      {
        "id": "q1_6",
        "question": "What refers specifically to location-based data tethered to real-world coordinates?",
        "options": {
          "a": "Geographic",
          "b": "Geometric",
          "c": "Global"
        },
        "answer": "a",
        "explanation": "'Geographic' refers to data tethered to real-world coordinates on the Earth's surface (latitude, longitude, UTM).",
        "conceptHint": "Concept: 'Geographic' refers to data tethered to real-world coordinates on the Earth's surface (latitude, longitude, UTM)."
      },
      {
        "id": "q1_7",
        "question": "Which of these captures Raw, unprocessed facts directly collected from sensors?",
        "options": {
          "a": "Information",
          "b": "Data",
          "c": "Knowledge"
        },
        "answer": "b",
        "explanation": "Data represents raw, unprocessed facts. Information is analyzed data, and Knowledge is synthesized organized information.",
        "conceptHint": "Concept: Data represents raw, unprocessed facts."
      },
      {
        "id": "q1_8",
        "question": "GNSS stands for...",
        "options": {
          "a": "Global Navigational Satellite Systems",
          "b": "Geographic Network Satellite Servers",
          "c": "Graphical Node Search System"
        },
        "answer": "a",
        "explanation": "GNSS (Global Navigation Satellite Systems) is the superset term covering systems like GPS (USA), GLONASS (Russia), etc.",
        "conceptHint": "Concept: GNSS (Global Navigation Satellite Systems) is the superset term covering systems like GPS (USA), GLONASS (Russia), etc."
      },
      {
        "id": "q1_9",
        "question": "Which historical figure mapped the 1854 London Cholera epidemic using analog GIS principles?",
        "options": {
          "a": "Roger Tomlinson",
          "b": "Jack Dangermond",
          "c": "John Snow"
        },
        "answer": "c",
        "explanation": "John Snow mapped cholera deaths by overlaying street maps with water pump locations to pinpoint the source of contamination.",
        "conceptHint": "Concept: John Snow mapped cholera deaths by overlaying street maps with water pump locations to pinpoint the source of contamination."
      },
      {
        "id": "q1_10",
        "question": "What is the primary goal of GIS according to the lecture notes?",
        "options": {
          "a": "To make beautiful maps",
          "b": "To model reality and predict outcomes before they happen",
          "c": "To store satellite images"
        },
        "answer": "b",
        "explanation": "The ultimate aim of GIS is to model reality and predict outcomes (e.g., predicting soil moisture changes after deforestation).",
        "conceptHint": "Concept: The ultimate aim of GIS is to model reality and predict outcomes (e."
      }
    ],
    "description": [
      "Core GIS definitions and terminology.",
      "History of GIS (Roger Tomlinson, John Snow).",
      "5 Essential components of a GIS system."
    ],
    "detailedTheory": [
      "Lecture 1: Introduction to GIS - Definition of GIS, difference from CAD/AM/FM, components of GIS (Hardware, Software, Data, People, Methods).",
      "Lecture 2: History & Components - Roger Tomlinson (Father of GIS), John Snow's mapping, data acquisition methods, and GIS lifecycle.",
      "Lecture 3: Hardware & Software - Workstations, input devices (Scanners, Digitizers), and softcopy photogrammetry requirements.",
      "Lecture 4: Data Types in GIS - Spatial (Point, Line, Polygon) and Non-Spatial (Attributes). Continuous vs Discrete phenomena.",
      "Lecture 5: GIS Frameworks - Institutional frameworks, data sharing standards, and the role of stakeholders."
    ]
  },
  {
    "setId": 2,
    "setTitle": "Data Models & Geometry",
    "questions": [
      {
        "id": "q2_1",
        "question": "In GIS, which data model distinctly identifies discrete points, lines, and areas?",
        "options": {
          "a": "Vector",
          "b": "Raster",
          "c": "TIN"
        },
        "answer": "a",
        "explanation": "Vector data distinctly identifies discrete real-world structures representing points, lines, and areas (polygons).",
        "conceptHint": "Concept: Vector data distinctly identifies discrete real-world structures representing points, lines, and areas (polygons)."
      },
      {
        "id": "q2_2",
        "question": "How many dimensions do Point features have in GIS?",
        "options": {
          "a": "0D",
          "b": "1D",
          "c": "2D"
        },
        "answer": "a",
        "explanation": "Points are zero-dimensional, meaning they possess zero area, length, or perimeter natively.",
        "conceptHint": "Concept: Points are zero-dimensional, meaning they possess zero area, length, or perimeter natively."
      },
      {
        "id": "q2_3",
        "question": "A straight line in GIS requires a minimum of how many nodes?",
        "options": {
          "a": "1",
          "b": "2",
          "c": "3"
        },
        "answer": "b",
        "explanation": "A straight line only requires 2 nodes (Begin Node and End Node).",
        "conceptHint": "Concept: A straight line only requires 2 nodes (Begin Node and End Node)."
      },
      {
        "id": "q2_4",
        "question": "Which mathematical logic tracks how adjacent polygons connect and share space?",
        "options": {
          "a": "Geometry",
          "b": "Algebra",
          "c": "Topology"
        },
        "answer": "c",
        "explanation": "Topology acts as the mathematical logic tracking how adjacent elements connect and share space, preventing spatial corruption.",
        "conceptHint": "Concept: Topology acts as the mathematical logic tracking how adjacent elements connect and share space, preventing spatial corruption."
      },
      {
        "id": "q2_5",
        "question": "What is a 'Spaghetti Data Model'?",
        "options": {
          "a": "A model with complex overlapping lines",
          "b": "A non-topological model where features are isolated",
          "c": "A model used for mapping pasta factories"
        },
        "answer": "b",
        "explanation": "In the Spaghetti Data Model, features lay isolated. It is non-topological and can lead to overlapping and gaps.",
        "conceptHint": "Concept: In the Spaghetti Data Model, features lay isolated."
      },
      {
        "id": "q2_6",
        "question": "Continuous spatial variations like elevation are best represented by...",
        "options": {
          "a": "Point vectors",
          "b": "Raster grids",
          "c": "Nominal tables"
        },
        "answer": "b",
        "explanation": "Raster data defines continuous spatial variations. Mathematically, it operates as a 2-dimensional matrix grid.",
        "conceptHint": "Concept: Raster data defines continuous spatial variations."
      },
      {
        "id": "q2_7",
        "question": "What does TIN stand for?",
        "options": {
          "a": "Tabular Interconnected Network",
          "b": "Triangulated Irregular Network",
          "c": "Topographic Integrated Node"
        },
        "answer": "b",
        "explanation": "TIN stands for Triangulated Irregular Network, a spatial structure constructed of geometrically variable triangles.",
        "conceptHint": "Concept: TIN stands for Triangulated Irregular Network, a spatial structure constructed of geometrically variable triangles."
      },
      {
        "id": "q2_8",
        "question": "Non-spatial data that answers 'What is it?' is also known as...",
        "options": {
          "a": "Attribute Data",
          "b": "Vector Data",
          "c": "Geometric Data"
        },
        "answer": "a",
        "explanation": "Non-Spatial / Tabular / Attribute Data answers the question 'What is it?' and provides descriptive statistics.",
        "conceptHint": "Concept: Non-Spatial / Tabular / Attribute Data answers the question 'What is it?' and provides descriptive statistics."
      },
      {
        "id": "q2_9",
        "question": "Which data type is '0-dimensional' and possesses no length or area?",
        "options": {
          "a": "Points",
          "b": "Lines",
          "c": "Polygons"
        },
        "answer": "a",
        "explanation": "Points are 0-dimensional; they are scale-independent anchor markers.",
        "conceptHint": "Concept: Points are 0-dimensional; they are scale-independent anchor markers."
      },
      {
        "id": "q2_10",
        "question": "What is the Centroid of a polygon?",
        "options": {
          "a": "The perimeter line",
          "b": "The starting node",
          "c": "The dead center mathematical anchor point"
        },
        "answer": "c",
        "explanation": "The Centroid is the dead center mathematical anchor point of a polygon.",
        "conceptHint": "Concept: The Centroid is the dead center mathematical anchor point of a polygon."
      }
    ],
    "description": [
      "Vector vs Raster data models.",
      "Topological relationships and logic.",
      "Basic geometric entities (Points, Lines, Polygons)."
    ],
    "detailedTheory": [
      "Lecture 6: Vector Data Model - Geometry storage, spaghetti model vs topological model, vertex and node types.",
      "Lecture 7: Raster Data Model - Grid structure, cell values (mixed vs predominant), resolution effects on accuracy.",
      "Lecture 8: Topology Logic - Connectivity, Adjacency, and Containment logic. Importance in spatial analysis.",
      "Lecture 9: Vector Features - Point (0D), Line (1D), Polygon (2D) detailed attributes and coordinate systems.",
      "Lecture 10: Attribute Tables - Relational linking between geometry ID and tabular data (Primary/Foreign Keys)."
    ]
  },
  {
    "setId": 3,
    "setTitle": "Raster & TIN Models",
    "questions": [
      {
        "id": "q3_1",
        "question": "In a Raster grid, a single unit must mathematically always be a...",
        "options": {
          "a": "Circle",
          "b": "Perfect Square",
          "c": "Rectangle"
        },
        "answer": "b",
        "explanation": "While the overall frame can be rectangular, the single unit cell within the raster must always be a perfect square.",
        "conceptHint": "Concept: While the overall frame can be rectangular, the single unit cell within the raster must always be a perfect square."
      },
      {
        "id": "q3_2",
        "question": "What is the key difference between 'Grids' and 'Images' in GIS?",
        "options": {
          "a": "Grids are colored, Images are not",
          "b": "Images store integers (0-255), Grids store precise floating-point decimals",
          "c": "There is no difference"
        },
        "answer": "b",
        "explanation": "Images are limited to positive integers. Grids (like DEMs) can store negative integers and floating-point decimals.",
        "conceptHint": "Concept: Images are limited to positive integers."
      },
      {
        "id": "q3_3",
        "question": "Spatial Resolution dictates the real-world Ground Area represented by...",
        "options": {
          "a": "The entire map",
          "b": "A single cell",
          "c": "A database row"
        },
        "answer": "b",
        "explanation": "Spatial Resolution dictates the real-world ground area represented by a single cell (e.g., 1-meter vs 30-meters).",
        "conceptHint": "Concept: Spatial Resolution dictates the real-world ground area represented by a single cell (e."
      },
      {
        "id": "q3_4",
        "question": "Which model uses Delaunay Triangulation to form a contiguous mesh?",
        "options": {
          "a": "Raster",
          "b": "Vector",
          "c": "TIN"
        },
        "answer": "c",
        "explanation": "TIN (Triangulated Irregular Network) operates on Delaunay Triangulation to create a mesh of triangles tracking surface elevation.",
        "conceptHint": "Concept: TIN (Triangulated Irregular Network) operates on Delaunay Triangulation to create a mesh of triangles tracking surface elevation."
      },
      {
        "id": "q3_5",
        "question": "What is TIN's super-advantage over Raster grids?",
        "options": {
          "a": "Adaptive Relief Roughness (Dynamic triangle sizes)",
          "b": "It is easier to process",
          "c": "It uses fewer tables"
        },
        "answer": "a",
        "explanation": "TIN forms huge triangles in flat terrain and micro-triangles in rugged hills, compressing real-world terrain efficiently.",
        "conceptHint": "Concept: TIN forms huge triangles in flat terrain and micro-triangles in rugged hills, compressing real-world terrain efficiently."
      },
      {
        "id": "q3_6",
        "question": "Which term describes 'Pixel' context strictly?",
        "options": {
          "a": "Grids",
          "b": "Images",
          "c": "Tables"
        },
        "answer": "b",
        "explanation": "Use the word 'Pixel' strictly when handling Images (+ integers). Use 'Cell' for Grids (+/- precise metrics).",
        "conceptHint": "Concept: Use the word 'Pixel' strictly when handling Images (+ integers)."
      },
      {
        "id": "q3_7",
        "question": "What happens to the TIN structure if you try to subset it by drawing a box?",
        "options": {
          "a": "It extracts perfectly",
          "b": "It snaps the structural triangular matrices apart",
          "c": "It converts to raster"
        },
        "answer": "b",
        "explanation": "You cannot mathematically subset an already generated TIN graph. It snaps the structural matrices.",
        "conceptHint": "Concept: You cannot mathematically subset an already generated TIN graph."
      },
      {
        "id": "q3_8",
        "question": "In TIN modeling, what must an operator insert to handle sudden cliffs?",
        "options": {
          "a": "Nodes",
          "b": "Breaklines",
          "c": "Buffers"
        },
        "answer": "b",
        "explanation": "Operators must manually insert 'breaklines' (hard or soft) to prevent stretching impossible slope parameters across sudden drops.",
        "conceptHint": "Concept: Operators must manually insert 'breaklines' (hard or soft) to prevent stretching impossible slope parameters across sudden drops."
      },
      {
        "id": "q3_9",
        "question": "Which type of area calculation is required for building road infrastructure accurately?",
        "options": {
          "a": "Planimetric Area (Flat)",
          "b": "Surface Area (3D/Inclined)",
          "c": "Buffer Area"
        },
        "answer": "b",
        "explanation": "Surface area calculates slope inclination. Defaulting to 2D Planimetric under-calculates construction costs.",
        "conceptHint": "Concept: Surface area calculates slope inclination."
      },
      {
        "id": "q3_10",
        "question": "TIN natively calculates which two properties concurrently with generation?",
        "options": {
          "a": "Color and Texture",
          "b": "Slope and Aspect",
          "c": "Name and ID"
        },
        "answer": "b",
        "explanation": "TIN natively calculates and stores 'Slope' orientation and directional 'Aspect' mapping concurrently.",
        "conceptHint": "Concept: TIN natively calculates and stores 'Slope' orientation and directional 'Aspect' mapping concurrently."
      }
    ],
    "description": [
      "Raster grid structures and cell values.",
      "TIN (Triangulated Irregular Network) modeling.",
      "Delaunay Triangulation and relief adaptability."
    ],
    "detailedTheory": [
      "Lecture 11: Raster Attributes - Integer vs Floating point rasters. Categorical vs Continuous values.",
      "Lecture 12: Delaunay Triangulation - Circumcircle property, maximizing minimum angles, triangle mesh generation.",
      "Lecture 13: TIN Structures - Triangle-based surface modeling, irregular distribution of mass points.",
      "Lecture 14: Raster vs TIN - Comparison of storage efficiency, relief representation, and computational cost.",
      "Lecture 15: Hybrid Models - Multiresolution rasters and hybrid vector-raster structures."
    ]
  },
  {
    "setId": 4,
    "setTitle": "Data Compression",
    "questions": [
      {
        "id": "q4_1",
        "question": "Tobler's First Law of Geography is key to compression because of...",
        "options": {
          "a": "Spatial Autocorrelation (Neighboring pixels have same values)",
          "b": "Map Projection errors",
          "c": "Cloud storage limits"
        },
        "answer": "a",
        "explanation": "Tobler's First Law states near things are more related, leading to spatial autocorrelation and redundancy that can be compacted.",
        "conceptHint": "Concept: Tobler's First Law states near things are more related, leading to spatial autocorrelation and redundancy that can be compacted."
      },
      {
        "id": "q4_2",
        "question": "Which compression is non-destructive and preserves scientific integrity?",
        "options": {
          "a": "Lossy",
          "b": "Lossless",
          "c": "Incremental"
        },
        "answer": "b",
        "explanation": "Lossless compression is non-destructive. Lossy (like JPEG) permanently destroys data.",
        "conceptHint": "Concept: Lossless compression is non-destructive."
      },
      {
        "id": "q4_3",
        "question": "Which algorithm scanner searches for homogenous 2D geometric squares?",
        "options": {
          "a": "Chain Codes",
          "b": "Run Length Encoding (RLE)",
          "c": "Block Codes"
        },
        "answer": "c",
        "explanation": "Block Codes search for massive 2-Dimensional homogenous geometric Squares (e.g. 4x4, 2x2).",
        "conceptHint": "Concept: Block Codes search for massive 2-Dimensional homogenous geometric Squares (e."
      },
      {
        "id": "q4_4",
        "question": "Quadtree compression uses which structure conceptually?",
        "options": {
          "a": "Linear Queue",
          "b": "Inverted Tree",
          "c": "Circular Buffer"
        },
        "answer": "b",
        "explanation": "Quadtree continuously shatters quadrants into 4 smaller sub-quadrants until homogeneous, acting as an inverted tree.",
        "conceptHint": "Concept: Quadtree continuously shatters quadrants into 4 smaller sub-quadrants until homogeneous, acting as an inverted tree."
      },
      {
        "id": "q4_5",
        "question": "Huffman Coding operates based on what analysis?",
        "options": {
          "a": "Color balance",
          "b": "Statistical frequency (occurrence rates)",
          "c": "Geometric shape"
        },
        "answer": "b",
        "explanation": "Huffman gives shorter codes to more frequent values to reduce file weight.",
        "conceptHint": "Concept: Huffman gives shorter codes to more frequent values to reduce file weight."
      },
      {
        "id": "q4_6",
        "question": "Which compression method allows GIS users to run analysis without uncompressing first?",
        "options": {
          "a": "JPEG",
          "b": "LZW",
          "c": "ZIP"
        },
        "answer": "b",
        "explanation": "LZW is a lossless algorithm that allows operators to run analysis directly on files without manual uncompression.",
        "conceptHint": "Concept: LZW is a lossless algorithm that allows operators to run analysis directly on files without manual uncompression."
      },
      {
        "id": "q4_7",
        "question": "Why is JPEG inappropriate for precise scientific satellite imagery?",
        "options": {
          "a": "It is too slow",
          "b": "It is 'Lossy' and destroys absolute pixel metrics",
          "c": "It doesn't support color"
        },
        "answer": "b",
        "explanation": "JPEG is a 'Lossy' standard that destroys absolute pixel metrics by compressing chunks into single unified codes.",
        "conceptHint": "Concept: JPEG is a 'Lossy' standard that destroys absolute pixel metrics by compressing chunks into single unified codes."
      },
      {
        "id": "q4_8",
        "question": "Multi-resolution Seamless Image Database (MrSID) relies on which theory?",
        "options": {
          "a": "Wavelet Theory",
          "b": "Quantum Theory",
          "c": "Set Theory"
        },
        "answer": "a",
        "explanation": "MrSID (LizardTech) uses Wavelet Theory for monumental lossless compression (e.g., 50x size reduction).",
        "conceptHint": "Concept: MrSID (LizardTech) uses Wavelet Theory for monumental lossless compression (e."
      },
      {
        "id": "q4_9",
        "question": "Google Earth uses which technique to compress live-render speed?",
        "options": {
          "a": "Pyramiding (Down-sampling hierarchies)",
          "b": "Block coding",
          "c": "Chain coding"
        },
        "answer": "a",
        "explanation": "Spatial Pyramiding uses down-sampling hierarchies to load lower-resolution blocks when zoomed out.",
        "conceptHint": "Concept: Spatial Pyramiding uses down-sampling hierarchies to load lower-resolution blocks when zoomed out."
      },
      {
        "id": "q4_10",
        "question": "Which technique converts complex coordinates to directional code commands?",
        "options": {
          "a": "Run Length Encoding",
          "b": "Freeman Chain Vectors",
          "c": "Block Codes"
        },
        "answer": "b",
        "explanation": "Freeman Chain Vectors converts coordinates into directional codes to track data around vector margins.",
        "conceptHint": "Concept: Freeman Chain Vectors converts coordinates into directional codes to track data around vector margins."
      }
    ],
    "description": [
      "Tobler's First Law and spatial autocorrelation.",
      "Lossless vs Lossy compression (LZW, JPEG).",
      "Advanced algorithms (Quadtrees, MrSID, Wavelets)."
    ],
    "detailedTheory": [
      "Lecture 16: Lossless Compression - Run-length encoding (RLE), Huffman coding, and bit depth reduction.",
      "Lecture 17: Quadtree Structures - Recursive decomposition, quadrants, and efficiency for uniform areas.",
      "Lecture 18: Wavelet Compression - Advanced multi-resolution transformations (used in MrSID, JPEG2000).",
      "Lecture 19: Bit Plane Encoding - Analyzing separate binary layers of multiband imagery for efficiency.",
      "Lecture 20: Compression Standards - Industry standards for spatial data exchange (GeoTIFF, MrSID)."
    ]
  },
  {
    "setId": 5,
    "setTitle": "Georeferencing & Correction",
    "questions": [
      {
        "id": "q5_1",
        "question": "What is the primary reason raw satellite images are warped?",
        "options": {
          "a": "Sensor malfunction",
          "b": "Atmospheric turbulence and tracking a sphere onto 2D sensors",
          "c": "Storage size limits"
        },
        "answer": "b",
        "explanation": "Images of a sphere (Earth) onto 2D sensors through turbulent skies are born misshapen and warped.",
        "conceptHint": "Concept: Images of a sphere (Earth) onto 2D sensors through turbulent skies are born misshapen and warped."
      },
      {
        "id": "q5_2",
        "question": "What is another term for Georeferencing?",
        "options": {
          "a": "Rubber-Sheeting",
          "b": "Cell-Stretching",
          "c": "Node-Linking"
        },
        "answer": "a",
        "explanation": "Georeferencing is also known as Rubber-Sheeting, as it stretches warped imagery to fit a formal coordinate system.",
        "conceptHint": "Concept: Georeferencing is also known as Rubber-Sheeting, as it stretches warped imagery to fit a formal coordinate system."
      },
      {
        "id": "q5_3",
        "question": "What are GCPs used in step 1 of georeferencing?",
        "options": {
          "a": "Global Control Protocols",
          "b": "Ground Control Points",
          "c": "Geometric Center Points"
        },
        "answer": "b",
        "explanation": "GCPs (Ground Control Points) are shared landmarks used to align un-referenced images with master maps.",
        "conceptHint": "Concept: GCPs (Ground Control Points) are shared landmarks used to align un-referenced images with master maps."
      },
      {
        "id": "q5_4",
        "question": "How many GCPs are at minimum required for 1st-order math transformation?",
        "options": {
          "a": "2",
          "b": "3",
          "c": "10"
        },
        "answer": "b",
        "explanation": "1st-order Polynomial Transformation requires a minimum of 3 points to shift, rotate, and scale.",
        "conceptHint": "Concept: 1st-order Polynomial Transformation requires a minimum of 3 points to shift, rotate, and scale."
      },
      {
        "id": "q5_5",
        "question": "What does RMS Error calculate in georeferencing?",
        "options": {
          "a": "The speed of the transformation",
          "b": "The mathematical error tension (accuracy check)",
          "c": "The file size reduction"
        },
        "answer": "b",
        "explanation": "Root Mean Square (RMS) dynamically calculates how much mathematical error tension remains in the georeferenced image.",
        "conceptHint": "Concept: Root Mean Square (RMS) dynamically calculates how much mathematical error tension remains in the georeferenced image."
      },
      {
        "id": "q5_6",
        "question": "If your image has 20-meter pixel resolution, your RMS Error must be...",
        "options": {
          "a": "Exactly 0",
          "b": "Below 20 meters",
          "c": "Above 20 meters"
        },
        "answer": "b",
        "explanation": "Your overall RMS Error absolutely must drop below the pixel resolution (e.g., 20m) for the georeferencing to be valid.",
        "conceptHint": "Concept: Your overall RMS Error absolutely must drop below the pixel resolution (e."
      },
      {
        "id": "q5_7",
        "question": "Which resampling strategy flawlessly preserves true mathematical source values?",
        "options": {
          "a": "Nearest Neighbour",
          "b": "Bilinear Interpolation",
          "c": "Cubic Convolution"
        },
        "answer": "a",
        "explanation": "Nearest Neighbour copies the value of the physically closest pixel, preserving true mathematical source values.",
        "conceptHint": "Concept: Nearest Neighbour copies the value of the physically closest pixel, preserving true mathematical source values."
      },
      {
        "id": "q5_8",
        "question": "Which method computes a localized smoothed weighted average from the 4 closest pixels?",
        "options": {
          "a": "Nearest Neighbour",
          "b": "Bilinear Interpolation",
          "c": "Cubic Convolution"
        },
        "answer": "b",
        "explanation": "Bilinear Interpolation casts a net around the 4 closest original pixels and computes a smoothed weighted average.",
        "conceptHint": "Concept: Bilinear Interpolation casts a net around the 4 closest original pixels and computes a smoothed weighted average."
      },
      {
        "id": "q5_9",
        "question": "What is the most heavy/heavy-duty resampling algorithm scanning 16-pixel matrices?",
        "options": {
          "a": "Nearest Neighbour",
          "b": "Bilinear Interpolation",
          "c": "Cubic Convolution"
        },
        "answer": "c",
        "explanation": "Cubic Convolution scans massive 16-pixel matrix perimeters to generate the smoothest visual transitions.",
        "conceptHint": "Concept: Cubic Convolution scans massive 16-pixel matrix perimeters to generate the smoothest visual transitions."
      },
      {
        "id": "q5_10",
        "question": "Which georeferencing order/math should be used to forcefully wrap heavily corrupted datasets?",
        "options": {
          "a": "1st order",
          "b": "2nd order",
          "c": "3rd order (min 10 points)"
        },
        "answer": "c",
        "explanation": "3rd-order math (minimum 10 points) forcefully wraps heavily corrupted datasets.",
        "conceptHint": "Concept: 3rd-order math (minimum 10 points) forcefully wraps heavily corrupted datasets."
      }
    ],
    "description": [
      "Georeferencing and Rubber-sheeting.",
      "Ground Control Points (GCPs) and RMS Error.",
      "Resampling methods (Nearest Neighbour, Bilinear, Cubic)."
    ],
    "detailedTheory": [
      "Lecture 21: Coordinate Systems - Geographic (GCS) vs Projected (PCS). WGS84 and local datums.",
      "Lecture 22: Geometric Correction - Ground Control Points (GCPs), spatial transformation models (Polynomial).",
      "Lecture 23: RMS Error Calculation - Root Mean Square Error as a measure of georeferencing quality.",
      "Lecture 24: Resampling Logic - Nearest Neighbor, Bilinear Interpolation, and Cubic Convolution.",
      "Lecture 25: Rubber-sheeting - Local warping techniques for complex map distortions."
    ]
  },
  {
    "setId": 6,
    "setTitle": "Pre-processing & Interpolation",
    "questions": [
      {
        "id": "q6_1",
        "question": "Which measurement type factors in the 3D curvature of the Earth for long-haul routes?",
        "options": {
          "a": "Planar Measurement",
          "b": "Geodesic Measurement",
          "c": "Geometric Measurement"
        },
        "answer": "b",
        "explanation": "Geodesic Measurement factors in the 3-Dimensional curvature of the Earth, critical for long-haul routes.",
        "conceptHint": "Concept: Geodesic Measurement factors in the 3-Dimensional curvature of the Earth, critical for long-haul routes."
      },
      {
        "id": "q6_2",
        "question": "What does Aspect track in terrain analysis?",
        "options": {
          "a": "The steepness of the hill",
          "b": "The geographical compass direction a hill faces",
          "c": "The height of the hill"
        },
        "answer": "b",
        "explanation": "Aspect tracks the geographical compass direction that a sloped hill faces (e.g., South, North).",
        "conceptHint": "Concept: Aspect tracks the geographical compass direction that a sloped hill faces (e."
      },
      {
        "id": "q6_3",
        "question": "What is the artificial Aspect value for perfectly flat unbroken terrain?",
        "options": {
          "a": "0",
          "b": "-1",
          "c": "360"
        },
        "answer": "b",
        "explanation": "Flat terrain holds an artificial Aspect value of -1 because it lacks a directional downward face.",
        "conceptHint": "Concept: Flat terrain holds an artificial Aspect value of -1 because it lacks a directional downward face."
      },
      {
        "id": "q6_4",
        "question": "Dangles and Overshoots are examples of what in vector digitizing?",
        "options": {
          "a": "Hardware failures",
          "b": "Topological glitches/errors",
          "c": "Compression artifacts"
        },
        "answer": "b",
        "explanation": "Dangles (stopping short) and Overshoots (going past) are common topological glitches during manual digitization.",
        "conceptHint": "Concept: Dangles (stopping short) and Overshoots (going past) are common topological glitches during manual digitization."
      },
      {
        "id": "q6_5",
        "question": "Inverse Distance Weighting (IDW) is an example of what kind of interpolator?",
        "options": {
          "a": "Global, Stochastic",
          "b": "Local, Exact, and Deterministic",
          "c": "Remote Sensing"
        },
        "answer": "b",
        "explanation": "IDW is local, exact (honors input points), and deterministic (pure math matrices).",
        "conceptHint": "Concept: IDW is local, exact (honors input points), and deterministic (pure math matrices)."
      },
      {
        "id": "q6_6",
        "question": "Which interpolation tool is the only one capable of generating an 'Error Prediction Surface'?",
        "options": {
          "a": "IDW",
          "b": "Spline",
          "c": "Kriging"
        },
        "answer": "c",
        "explanation": "Kriging is a stochastic model that assesses randomness and can generate an uncertainty/error prediction surface.",
        "conceptHint": "Concept: Kriging is a stochastic model that assesses randomness and can generate an uncertainty/error prediction surface."
      },
      {
        "id": "q6_7",
        "question": "What does 'Slivers' refer to in vector polygons?",
        "options": {
          "a": "Large gaps",
          "b": "Point overlaps",
          "c": "Microscopic void gaps between shared perimeters"
        },
        "answer": "c",
        "explanation": "Slivers occur when tracing shared perimeters poorly, leaving microscopic unintended gaps.",
        "conceptHint": "Concept: Slivers occur when tracing shared perimeters poorly, leaving microscopic unintended gaps."
      },
      {
        "id": "q6_8",
        "question": "What is the result of using a 'Many-to-One' reclassification?",
        "options": {
          "a": "Data expansion",
          "b": "Aggregating complex intervals into simplified categories",
          "c": "Creating new polygons"
        },
        "answer": "b",
        "explanation": "Many-to-One reclassification aggregates intense data (e.g., 20 geo ages into 3 lithology classes).",
        "conceptHint": "Concept: Many-to-One reclassification aggregates intense data (e."
      },
      {
        "id": "q6_9",
        "question": "What is the 'Profile Curvature' used for in hydrology?",
        "options": {
          "a": "Measuring soil pH",
          "b": "Regulating the kinetic momentum velocity of flowing fluids",
          "c": "Finding the centroid"
        },
        "answer": "b",
        "explanation": "Profile curvature tracks the vertical elevation slice to regulate water flow velocity.",
        "conceptHint": "Concept: Profile curvature tracks the vertical elevation slice to regulate water flow velocity."
      },
      {
        "id": "q6_10",
        "question": "Generalization 'simplifies' which geometric feature by collapsing multiple to one?",
        "options": {
          "a": "Points",
          "b": "Nodes",
          "c": "Clustered features (like houses into a boundary)"
        },
        "answer": "c",
        "explanation": "Generalization simplifies clustered features (merging houses into a unified boundary) to keep maps clear at macro scales.",
        "conceptHint": "Concept: Generalization simplifies clustered features (merging houses into a unified boundary) to keep maps clear at macro scales."
      }
    ],
    "description": [
      "Spatial measurement (Planar vs Geodesic).",
      "Terrain analysis (Slope and Aspect).",
      "Interpolation basics (IDW) and digitizing errors."
    ],
    "detailedTheory": [
      "Lecture 26: Data Input Errors - Overshoots, Undershoots, Slivers, and Dangles in digitizing.",
      "Lecture 27: Scanning & OCR - Flatbed vs Drum scanners. Vectorization of scanned images.",
      "Lecture 28: IDW Interpolation - Inverse Distance Weighting theory and the influence of distance.",
      "Lecture 29: Kriging Basics - Geostatistical interpolation using variograms and spatial correlation.",
      "Lecture 30: Topology Building - Cleaning geometries to establish consistent spatial relationships."
    ]
  },
  {
    "setId": 7,
    "setTitle": "Overlay Operations",
    "questions": [
      {
        "id": "q7_1",
        "question": "Overlay operations rely on which mathematical concepts?",
        "options": {
          "a": "Calculus",
          "b": "Set Theory and Boolean Logic",
          "c": "Geometry"
        },
        "answer": "b",
        "explanation": "Overlay mechanics rely entirely on Set Theory and mathematical Boolean Logic operations (AND, OR, etc.).",
        "conceptHint": "Concept: Overlay mechanics rely entirely on Set Theory and mathematical Boolean Logic operations (AND, OR, etc."
      },
      {
        "id": "q7_2",
        "question": "Which operator isolates areas strictly common to BOTH input layers?",
        "options": {
          "a": "AND (Intersection)",
          "b": "OR (Union)",
          "c": "NOT"
        },
        "answer": "a",
        "explanation": "AND (Intersection) isolates and selects only common geographic areas.",
        "conceptHint": "Concept: AND (Intersection) isolates and selects only common geographic areas."
      },
      {
        "id": "q7_3",
        "question": "Which vector tool acts as a 'cookie cutter' to extract a local area?",
        "options": {
          "a": "Union",
          "b": "Clip",
          "c": "Erase"
        },
        "answer": "b",
        "explanation": "Clip extracts everything underneath a master polygon boundary.",
        "conceptHint": "Concept: Clip extracts everything underneath a master polygon boundary."
      },
      {
        "id": "q7_4",
        "question": "What is the risk of performing vector overlays on millions of polygons?",
        "options": {
          "a": "Data deletion",
          "b": "Fragmented polygon micro-clusters and exploding node counts",
          "c": "Loss of color"
        },
        "answer": "b",
        "explanation": "Vector overlay divides boundaries, which can exponentially explode node counts and create high fragmentation.",
        "conceptHint": "Concept: Vector overlay divides boundaries, which can exponentially explode node counts and create high fragmentation."
      },
      {
        "id": "q7_5",
        "question": "Binary maps are typically generated using which logic in a Map Calculator?",
        "options": {
          "a": "Arithmetic Logic",
          "b": "Relational Logic (True/False conditions)",
          "c": "Statistical Logic"
        },
        "answer": "b",
        "explanation": "Relational logic (e.g., if Map A > Map B) generates Binary maps mapping pure positive and negative zones.",
        "conceptHint": "Concept: Relational logic (e."
      },
      {
        "id": "q7_6",
        "question": "Index Overlays expand analytical capacity by allowing for...",
        "options": {
          "a": "3D printing",
          "b": "Weighting models (assigning weights to layers)",
          "c": "Faster rendering"
        },
        "answer": "b",
        "explanation": "Index overlays allow stacking 15-20 layers and assigning mathematical weights/ranks to each.",
        "conceptHint": "Concept: Index overlays allow stacking 15-20 layers and assigning mathematical weights/ranks to each."
      },
      {
        "id": "q7_7",
        "question": "What model assesses if events are 'Uniform', 'Clustered', or 'Random'?",
        "options": {
          "a": "Point Measurement patterns",
          "b": "Vector Overlays",
          "c": "Network Analysis"
        },
        "answer": "a",
        "explanation": "Point measurements assess macro statistical probability patterns like clustering.",
        "conceptHint": "Concept: Point measurements assess macro statistical probability patterns like clustering."
      },
      {
        "id": "q7_8",
        "question": "Roving Windows (usually 3x3) are primarily used for what in Rasters?",
        "options": {
          "a": "Database queries",
          "b": "Neighborhood operations and trend scanning",
          "c": "Creating shapes"
        },
        "answer": "b",
        "explanation": "Moving windows slide over pixels to recalculate values based on surroundings.",
        "conceptHint": "Concept: Moving windows slide over pixels to recalculate values based on surroundings."
      },
      {
        "id": "q7_9",
        "question": "Which operation establishes future expansion areas around a feature?",
        "options": {
          "a": "Buffering",
          "b": "Clipping",
          "c": "Slicing"
        },
        "answer": "a",
        "explanation": "Buffering expands the spatial area around a feature to create zones of proximity.",
        "conceptHint": "Concept: Buffering expands the spatial area around a feature to create zones of proximity."
      },
      {
        "id": "q7_10",
        "question": "In 'Variable Width' buffers, what determines the width?",
        "options": {
          "a": "The user's eye",
          "b": "A feature attribute (e.g., traffic volume)",
          "c": "A random number"
        },
        "answer": "b",
        "explanation": "Variable buffers determine width based on a specific attribute (e.g., wider road buffers for more traffic).",
        "conceptHint": "Concept: Variable buffers determine width based on a specific attribute (e."
      }
    ],
    "description": [
      "Boolean Logic and Set Theory in overlays.",
      "Vector and Raster overlay operations.",
      "Proximity analysis and Buffering techniques."
    ],
    "detailedTheory": [
      "Lecture 31: Boolean Logic - AND (Intersect), OR (Union), XOR, and NOT logic in spatial analysis.",
      "Lecture 32: Vector Overlay - Point-in-polygon, Line-in-polygon, and Polygon-on-polygon methods.",
      "Lecture 33: Raster Overlay - Map algebra and cell-by-cell mathematical operations.",
      "Lecture 34: Buffering Techniques - Fixed distance vs Variable distance buffers. Positive and negative buffers.",
      "Lecture 35: Multi-Criteria Analysis - Weighted overlays for site selection and suitability modeling."
    ]
  },
  {
    "setId": 8,
    "setTitle": "Network Analysis & Connectivity",
    "questions": [
      {
        "id": "q8_1",
        "question": "Network Analysis evaluates resources through which structures?",
        "options": {
          "a": "Rectangular grids",
          "b": "Linear structures (edges and junctions)",
          "c": "Isolated points"
        },
        "answer": "b",
        "explanation": "Network analysis evaluates resource flow across linear structures.",
        "conceptHint": "Concept: Network analysis evaluates resource flow across linear structures."
      },
      {
        "id": "q8_2",
        "question": "What are the three core vector elements of a network?",
        "options": {
          "a": "Nodes, Cells, and Blocks",
          "b": "Edges, Junctions, and Turns",
          "c": "Pixels, Bits, and Bytes"
        },
        "answer": "b",
        "explanation": "Edges (lines), Junctions (intersections), and Turns (virtual logic) are the core elements.",
        "conceptHint": "Concept: Edges (lines), Junctions (intersections), and Turns (virtual logic) are the core elements."
      },
      {
        "id": "q8_3",
        "question": "What term refers to movement-controlling values like speed limits or roadblocks?",
        "options": {
          "a": "Resistors",
          "b": "Impedance",
          "c": "Facilitators"
        },
        "answer": "b",
        "explanation": "Impedance represents movement constraint rules like speed limits, delays, or physical roadblocks.",
        "conceptHint": "Concept: Impedance represents movement constraint rules like speed limits, delays, or physical roadblocks."
      },
      {
        "id": "q8_4",
        "question": "Which connectivity function identifies connected patches of land?",
        "options": {
          "a": "Contiguity",
          "b": "Proximity",
          "c": "Spread"
        },
        "answer": "a",
        "explanation": "Contiguity identifies and fuses isolated polygons that share common borders and attributes.",
        "conceptHint": "Concept: Contiguity identifies and fuses isolated polygons that share common borders and attributes."
      },
      {
        "id": "q8_5",
        "question": "Seek (Stream) Functions automatically calculate what?",
        "options": {
          "a": "Human traffic flow",
          "b": "Downward gravity-fed drainage basin networks",
          "c": "Satellite orbits"
        },
        "answer": "b",
        "explanation": "Seek functions evaluate topography to generate digital drainage/water accumulation networks.",
        "conceptHint": "Concept: Seek functions evaluate topography to generate digital drainage/water accumulation networks."
      },
      {
        "id": "q8_6",
        "question": "In 3D Networks, junctions ONLY form if what coordinate matches?",
        "options": {
          "a": "X-coordinate",
          "b": "Y-coordinate",
          "c": "Z-coordinate (Elevation)"
        },
        "answer": "c",
        "explanation": "Z-values prevent overpasses and tunnels from incorrectly forming junctions solely on XY intersections.",
        "conceptHint": "Concept: Z-values prevent overpasses and tunnels from incorrectly forming junctions solely on XY intersections."
      },
      {
        "id": "q8_7",
        "question": "Route Optimization in modern systems uses 'Crowd-Sourced' data from...",
        "options": {
          "a": "Paper logs",
          "b": "Aggregated GPS cell tower density from smartphones",
          "c": "Manual surveys"
        },
        "answer": "b",
        "explanation": "Modern algorithms use smartphone GPS data to detect traffic density in real-time.",
        "conceptHint": "Concept: Modern algorithms use smartphone GPS data to detect traffic density in real-time."
      },
      {
        "id": "q8_8",
        "question": "What is the '50% Rule' in network data integrity?",
        "options": {
          "a": "You only need 50% accurate data",
          "b": "50% reliable maps are statistically useless for emergencies",
          "c": "50% of people use GIS"
        },
        "answer": "b",
        "explanation": "Network analysis demands extreme accuracy. 50% reliability is insufficient for emergency dispatching.",
        "conceptHint": "Concept: Network analysis demands extreme accuracy."
      },
      {
        "id": "q8_9",
        "question": "What connects two Crossing Networks (like metro and street) in a database?",
        "options": {
          "a": "Shared 'Junction' (e.g., Platform Entrance)",
          "b": "There is no way to connect them",
          "c": "A simple color overlap"
        },
        "answer": "a",
        "explanation": "Shared junctions securely bridge different connectivity groups or multi-modal networks.",
        "conceptHint": "Concept: Shared junctions securely bridge different connectivity groups or multi-modal networks."
      },
      {
        "id": "q8_10",
        "question": "Spread functions model phenomena that accumulate what over distance?",
        "options": {
          "a": "Speed",
          "b": "Friction/Cost",
          "c": "Area"
        },
        "answer": "b",
        "explanation": "Spread functions model outward phenomena that accumulate friction or cost over distance (e.g., flood expansion).",
        "conceptHint": "Concept: Spread functions model outward phenomena that accumulate friction or cost over distance (e."
      }
    ],
    "description": [
      "Linear network structures (Edges and Junctions).",
      "Impedance and Route Optimization.",
      "Hydrological modeling (Seek/Stream functions)."
    ],
    "detailedTheory": [
      "Lecture 36: Network Components - Edges, Junctions (Nodes), and Connectivity constraints (Turns, Stops).",
      "Lecture 37: Impedance & Cost - Defining travel time, friction, and resistance in a network.",
      "Lecture 38: Shortest Path - Dijkstra's Algorithm and route optimization based on cost.",
      "Lecture 39: Allocating Services - Location-allocation and service area (p-median) modeling.",
      "Lecture 40: Hydrological Networks - Flow direction, accumulation, and stream network derivation."
    ]
  },
  {
    "setId": 9,
    "setTitle": "Database Systems & Projections",
    "questions": [
      {
        "id": "q9_1",
        "question": "Which database model behaves like an 'upside-down tree'?",
        "options": {
          "a": "Hierarchical Database Model",
          "b": "Relational Database Model",
          "c": "Network Database Model"
        },
        "answer": "a",
        "explanation": "Hierarchical models use a rigid parent-child tree structure where children have only one parent.",
        "conceptHint": "Concept: Hierarchical models use a rigid parent-child tree structure where children have only one parent."
      },
      {
        "id": "q9_2",
        "question": "What is the most universally utilized database model in GIS?",
        "options": {
          "a": "Hierarchical",
          "b": "Relational (RDBMS)",
          "c": "Flat Files"
        },
        "answer": "b",
        "explanation": "Relational Database Management Systems have been the GIS standard for decades.",
        "conceptHint": "Concept: Relational Database Management Systems have been the GIS standard for decades."
      },
      {
        "id": "q9_3",
        "question": "RDBMS 'Relates' two tables via a...",
        "options": {
          "a": "Physical link",
          "b": "Common Entity Characteristic (shared column/ID)",
          "c": "Password"
        },
        "answer": "b",
        "explanation": "RDBMS links tables through shared column identifiers with formatted identical data.",
        "conceptHint": "Concept: RDBMS links tables through shared column identifiers with formatted identical data."
      },
      {
        "id": "q9_4",
        "question": "Why is it impossible to 'flatten' coordinates without distortion?",
        "options": {
          "a": "Earth is a 3D spheroid and monitors/paper are flat 2D surfaces",
          "b": "Software is limited",
          "c": "Human error"
        },
        "answer": "a",
        "explanation": "Transforming a 3D object to a 2D surface mathematically guarantees distortion in Shape, Area, Distance, or Direction.",
        "conceptHint": "Concept: Transforming a 3D object to a 2D surface mathematically guarantees distortion in Shape, Area, Distance, or Direction."
      },
      {
        "id": "q9_5",
        "question": "Which projection is best for mid-latitude countries like the USA?",
        "options": {
          "a": "Cylindrical",
          "b": "Conical",
          "c": "Azimuthal"
        },
        "answer": "b",
        "explanation": "Conical projections are most accurate for wide, mid-latitude countries in the Northern Hemisphere.",
        "conceptHint": "Concept: Conical projections are most accurate for wide, mid-latitude countries in the Northern Hemisphere."
      },
      {
        "id": "q9_6",
        "question": "Mercator projection is a type of...",
        "options": {
          "a": "Cylindrical Projection",
          "b": "Planar Projection",
          "c": "Conical Projection"
        },
        "answer": "a",
        "explanation": "Mercator is cylindrical, wrapping a cylinder around the equator, distorting poles.",
        "conceptHint": "Concept: Mercator is cylindrical, wrapping a cylinder around the equator, distorting poles."
      },
      {
        "id": "q9_7",
        "question": "For precise area measurements, user must project database into...",
        "options": {
          "a": "Degrees (Lat/Long)",
          "b": "Planar Coordinate Grid (e.g., UTM meters)",
          "c": "TIN triangles"
        },
        "answer": "b",
        "explanation": "Degrees stretch geometrically towards poles; metric planar grids (like UTM) are required for accuracy.",
        "conceptHint": "Concept: Degrees stretch geometrically towards poles; metric planar grids (like UTM) are required for accuracy."
      },
      {
        "id": "q9_8",
        "question": "Which database model is powerful for data integrity but has slow transaction speeds?",
        "options": {
          "a": "Hierarchical",
          "b": "Object-Oriented (OODS)",
          "c": "Relational"
        },
        "answer": "b",
        "explanation": "OODS uses secure inherited objects but suffers from slower transition speeds and learning curves.",
        "conceptHint": "Concept: OODS uses secure inherited objects but suffers from slower transition speeds and learning curves."
      },
      {
        "id": "q9_9",
        "question": "What placeholder format is used in Rasters to maintain the rectangular matrix shape?",
        "options": {
          "a": "Zero",
          "b": "NoData",
          "c": "Empty String"
        },
        "answer": "b",
        "explanation": "Pixels outside regular study boundaries must be assigned 'NoData' to maintain the geometric matrix loop.",
        "conceptHint": "Concept: Pixels outside regular study boundaries must be assigned 'NoData' to maintain the geometric matrix loop."
      },
      {
        "id": "q9_10",
        "question": "Why is NoData NOT Zero?",
        "options": {
          "a": "Zero is a valid quantitative value (like sea level and temperature)",
          "b": "Zero is not a number",
          "c": "NoData is faster to process"
        },
        "answer": "a",
        "explanation": "Zero represents a measurement; NoData instructs the software to ignore the pixel completely in statistics.",
        "conceptHint": "Concept: Zero represents a measurement; NoData instructs the software to ignore the pixel completely in statistics."
      }
    ],
    "description": [
      "Database models (Hierarchical, Relational, OODS).",
      "Map Projections and Distortion (Cylindrical, Conic, Azimuthal).",
      "UTM coordinate system zones."
    ],
    "detailedTheory": [
      "Lecture 41: DBMS Models - Evolution from Flat files to Relational (RDBMS) and Object-Oriented (OODBMS).",
      "Lecture 42: SQL for GIS - Spatial SQL queries, select by attribute, and select by location.",
      "Lecture 43: Map Projections - Math of flattening the earth. Conic vs Cylindrical vs Planar projections.",
      "Lecture 44: UTM Zones - Universal Transverse Mercator divisions (60 zones of 6 degrees).",
      "Lecture 45: Distortion Management - Managing Tissot's Indicatrix and metric preservation (Area vs Shape)."
    ]
  },
  {
    "setId": 10,
    "setTitle": "DEM & Topography",
    "questions": [
      {
        "id": "q10_1",
        "question": "What does a DSM capture that a DTM strips away?",
        "options": {
          "a": "Bare earth topography",
          "b": "Highest vertical points (tops of trees/buildings)",
          "c": "Water depth"
        },
        "answer": "b",
        "explanation": "DSM (Surface) captures tops of objects; DTM (Terrain) is a 'Bare Earth' model stripping them away.",
        "conceptHint": "Concept: DSM (Surface) captures tops of objects; DTM (Terrain) is a 'Bare Earth' model stripping them away."
      },
      {
        "id": "q10_2",
        "question": "What makes human depth perception recognize ridges in flat B&W DEMs?",
        "options": {
          "a": "Higher resolution",
          "b": "Hillshading (Shaded Relief Modeling)",
          "c": "Color mapping"
        },
        "answer": "b",
        "explanation": "Hillshading/SRM simulates lighting and shadows to force depth perception.",
        "conceptHint": "Concept: Hillshading/SRM simulates lighting and shadows to force depth perception."
      },
      {
        "id": "q10_3",
        "question": "Which method uses satellite image 'Parallax' to derive 3D terrain height?",
        "options": {
          "a": "SAR Interferometry",
          "b": "Stereo-Pair Photogrammetry",
          "c": "LiDAR"
        },
        "answer": "b",
        "explanation": "Stereo Photogrammetry calculates depth by cross-referencing varying orbital angles.",
        "conceptHint": "Concept: Stereo Photogrammetry calculates depth by cross-referencing varying orbital angles."
      },
      {
        "id": "q10_4",
        "question": "SRTM Global heights are acquired via...",
        "options": {
          "a": "Optical cameras",
          "b": "SAR Interferometry (Radar pulses)",
          "c": "Laser pulses"
        },
        "answer": "b",
        "explanation": "SRTM (Shuttle Radar Topography Mission) uses microwave radar pulses.",
        "conceptHint": "Concept: SRTM (Shuttle Radar Topography Mission) uses microwave radar pulses."
      },
      {
        "id": "q10_5",
        "question": "What is the 'False Topographic Perception Phenomenon' (FTPP)?",
        "options": {
          "a": "A sensor error",
          "b": "A hallucination making valleys look like ridges due to sun angle",
          "c": "A software bug"
        },
        "answer": "b",
        "explanation": "FTPP is a brain illusion where SE illumination (morning sun) flips valleys into ridges visually.",
        "conceptHint": "Concept: FTPP is a brain illusion where SE illumination (morning sun) flips valleys into ridges visually."
      },
      {
        "id": "q10_6",
        "question": "Why use 'Nighttime' passes for thermal elevation modeling?",
        "options": {
          "a": "To see stars",
          "b": "To stabilize thermal anomalies and prevent solar heating distortion",
          "c": "It's the only time sensors work"
        },
        "answer": "b",
        "explanation": "Nighttime passes (e.g., 2 AM) ensure the environmental lapse rate can be mapped without solar interference.",
        "conceptHint": "Concept: Nighttime passes (e."
      },
      {
        "id": "q10_7",
        "question": "Vertical resolution in DEMs controls data precision of the...",
        "options": {
          "a": "X-axis",
          "b": "Y-axis",
          "c": "Z-axis (Altitude)"
        },
        "answer": "c",
        "explanation": "Vertical resolution controls the Z-axis data precision (often set to 1-meter intervals).",
        "conceptHint": "Concept: Vertical resolution controls the Z-axis data precision (often set to 1-meter intervals)."
      },
      {
        "id": "q10_8",
        "question": "Which value is the 'barometer' summarizing gross matrix variance against survey baselines?",
        "options": {
          "a": "RMS Error",
          "b": "RMSE (Root Mean Square Error)",
          "c": "Z-Factor"
        },
        "answer": "b",
        "explanation": "RMSE acts as the statistical barometer for summarized DEM variance.",
        "conceptHint": "Concept: RMSE acts as the statistical barometer for summarized DEM variance."
      },
      {
        "id": "q10_9",
        "question": "What does a 'Cut and Fill' optimization equalize?",
        "options": {
          "a": "Network traffic",
          "b": "Moving earth/soil loads for infrastructure grading",
          "c": "Color brightness"
        },
        "answer": "b",
        "explanation": "Cut and Fill calculates the volume of earth to be excavated and filled to create a flat grade.",
        "conceptHint": "Concept: Cut and Fill calculates the volume of earth to be excavated and filled to create a flat grade."
      },
      {
        "id": "q10_10",
        "question": "The Z-Factor multiplier is required when X/Y are in degrees and Z is in...",
        "options": {
          "a": "Radians",
          "b": "Meters",
          "c": "Feet"
        },
        "answer": "b",
        "explanation": "Z-Factor rescales disparate vertical meters to match horizontal degree formats to prevent slope math collapse.",
        "conceptHint": "Concept: Z-Factor rescales disparate vertical meters to match horizontal degree formats to prevent slope math collapse."
      }
    ],
    "description": [
      "Digital Elevation Models (DEM, DTM, DSM).",
      "Shaded Relief (Hillshading) and depth perception.",
      "Data acquisition (SAR, LiDAR, Stereo-pairs)."
    ],
    "detailedTheory": [
      "Lecture 46: DEM, DTM, DSM - Definitions: Digital Elevation Model vs Terrain Model vs Surface Model.",
      "Lecture 47: Hillshading Logic - Calculating sun angle and shaded relief to visualize 3D terrain.",
      "Lecture 48: Elevation Accuracies - Vertical vs Horizontal accuracy. Root Mean Square Error (RMSE) in DEMs.",
      "Lecture 49: LiDAR & SAR - Active remote sensing methods for high-precision elevation mapping.",
      "Lecture 50: Stereo Photogrammetry - Deriving Z-coordinates from overlapping image pairs (Parallax theory)."
    ]
  },
  {
    "setId": 11,
    "setTitle": "Assignment 1 (Week 1)",
    "questions": [
      {
        "id": "a1_1",
        "question": "GIS is \u2026\u2026\u2026\u2026\u2026 and \u2026\u2026\u2026.\u2026 technology.",
        "options": {
          "a": "Digital and analogue",
          "b": "Spatial and analogue",
          "c": "Digital and spatial",
          "d": "Spatial and manual"
        },
        "answer": "c",
        "explanation": "GIS is fundamentally a digital technology dealing with spatial data.",
        "conceptHint": "Concept: GIS is fundamentally a digital technology dealing with spatial data."
      },
      {
        "id": "a1_2",
        "question": "Three basic kinds of vector entities are:",
        "options": {
          "a": "Point, Raster, Attributes",
          "b": "Image, Raster, Polygon",
          "c": "Point, Line, Polygon",
          "d": "Polyline, Polygon, Raster"
        },
        "answer": "c",
        "explanation": "The three primitive vector types are Points, Lines (Arcs), and Polygons (Areas).",
        "conceptHint": "Concept: The three primitive vector types are Points, Lines (Arcs), and Polygons (Areas)."
      },
      {
        "id": "a1_3",
        "question": "GIS, Remote Sensing and GPS technologies are:",
        "options": {
          "a": "Generic, digital and spatial",
          "b": "Manual, spatial and digital",
          "c": "Analogue, manual and spatial",
          "d": "Generic, analogue and spatial"
        },
        "answer": "a",
        "explanation": "These are modern generic digital technologies for spatial information handling.",
        "conceptHint": "Concept: These are modern generic digital technologies for spatial information handling."
      },
      {
        "id": "a1_4",
        "question": "Topology describes the \u2026\u2026 relationships between adjacent features:",
        "options": {
          "a": "Spectral",
          "b": "Special",
          "c": "Spatial",
          "d": "Especial"
        },
        "answer": "c",
        "explanation": "Topology is the mathematical study of spatial relationships like connectivity and adjacency.",
        "conceptHint": "Concept: Topology is the mathematical study of spatial relationships like connectivity and adjacency."
      },
      {
        "id": "a1_5",
        "question": "Which of the following is not an example of spatial data?",
        "options": {
          "a": "Points showing location of discrete objects",
          "b": "Times of particular events",
          "c": "Lines showing the route of linear objects",
          "d": "Polygons showing the area occupied by a particular land use or variable"
        },
        "answer": "b",
        "explanation": "Time is temporal data, not spatial data (unless associated with a location).",
        "conceptHint": "Concept: Time is temporal data, not spatial data (unless associated with a location)."
      },
      {
        "id": "a1_6",
        "question": "Geographic Information System (GIS) is a \u2026\u2026\u2026\u2026\u2026. based information system designed to accept large volumes of \u2026\u2026\u2026\u2026 data derived from variety of sources and to efficiently store, retrieve, \u2026\u2026\u2026\u2026.. model and display (output) these data according to \u2026\u2026\u2026 defined specifications.",
        "options": {
          "a": "Manual, Special, Recover, All",
          "b": "Manual, Temporal, Analyses, User",
          "c": "Computer, Spatial, Analyses, User",
          "d": "Computer, Timely, Delete, Not"
        },
        "answer": "c",
        "explanation": "The formal definition specifies a computer-based system for spatial data analysis for user needs.",
        "conceptHint": "Concept: The formal definition specifies a computer-based system for spatial data analysis for user needs."
      },
      {
        "id": "a1_7",
        "question": "Attribute data are one type of spatial data.",
        "options": {
          "a": "True",
          "b": "False"
        },
        "answer": "b",
        "explanation": "Attribute data is non-spatial (tabular) data describing properties of spatial features.",
        "conceptHint": "Concept: Attribute data is non-spatial (tabular) data describing properties of spatial features."
      },
      {
        "id": "a1_8",
        "question": "Polygon topological data model is part of:",
        "options": {
          "a": "Path topological models",
          "b": "Graph Topological models",
          "c": "Triangulated Irregular Network",
          "d": "Dual Independent Map model"
        },
        "answer": "a",
        "explanation": "The segment/path-based approach is used for polygon topology.",
        "conceptHint": "Concept: The segment/path-based approach is used for polygon topology."
      },
      {
        "id": "a1_9",
        "question": "Name five components of GIS:",
        "options": {
          "a": "Software, Data, Methods, Theory, Printers",
          "b": "Hardware, Software, Data, Methods, People",
          "c": "Hardware, Software, Maps, Data, Theory",
          "d": "Software, Equations, Maps, Theory, People"
        },
        "answer": "b",
        "explanation": "Hardware, Software, Data, Methods, and People are the five critical pillars of GIS.",
        "conceptHint": "Concept: Hardware, Software, Data, Methods, and People are the five critical pillars of GIS."
      },
      {
        "id": "a1_10",
        "question": "3D lines / polylines features embed their \u2026\u2026. inside their geometry.",
        "options": {
          "a": "x-value",
          "b": "y-value",
          "c": "z-value",
          "d": "t-value"
        },
        "answer": "c",
        "explanation": "Z-values represent the third dimension (elevation/height) in GIS geometry.",
        "conceptHint": "Concept: Z-values represent the third dimension (elevation/height) in GIS geometry."
      }
    ],
    "description": [
      "Comprehensive Review: Fundamentals of GIS systems."
    ]
  },
  {
    "setId": 12,
    "setTitle": "Assignment 2 (Week 2)",
    "questions": [
      {
        "id": "a2_1",
        "question": "How many basic kinds of attributes so far know in GIS domain?",
        "options": {
          "a": "4",
          "b": "5",
          "c": "6",
          "d": "7"
        },
        "answer": "c",
        "explanation": "Nominal, Ordinal, Interval, Ratio, Cyclic, and Multidimensional (6 types).",
        "conceptHint": "Concept: Nominal, Ordinal, Interval, Ratio, Cyclic, and Multidimensional (6 types)."
      },
      {
        "id": "a2_2",
        "question": "A nominal attribute can be:",
        "options": {
          "a": "Only numeric",
          "b": "Only alpha-numeric",
          "c": "Only alphabets",
          "d": "Numeric, alpha-numeric and alphabets"
        },
        "answer": "d",
        "explanation": "Nominal data uses labels or names which can be numbers or text.",
        "conceptHint": "Concept: Nominal data uses labels or names which can be numbers or text."
      },
      {
        "id": "a2_3",
        "question": "Ratio attributes have the same characteristics as interval variables, but in addition, these have:",
        "options": {
          "a": "No order",
          "b": "No starting point",
          "c": "No order neither starting point",
          "d": "Zero or starting point"
        },
        "answer": "d",
        "explanation": "Ratio scales have an absolute zero point.",
        "conceptHint": "Concept: Ratio scales have an absolute zero point."
      },
      {
        "id": "a2_4",
        "question": "In TIN model, triangles are made from a set of points called:",
        "options": {
          "a": "2D points",
          "b": "3D points",
          "c": "Random points",
          "d": "Mass points"
        },
        "answer": "d",
        "explanation": "Mass points are irregularly distributed elevation points used to construct a TIN.",
        "conceptHint": "Concept: Mass points are irregularly distributed elevation points used to construct a TIN."
      },
      {
        "id": "a2_5",
        "question": "TIN model stores data in:",
        "options": {
          "a": "Node table",
          "b": "Edge table",
          "c": "X, Y coordinate and Z tables",
          "d": "All of the above"
        },
        "answer": "d",
        "explanation": "TIN structures require node, edge, and coordinate information.",
        "conceptHint": "Concept: TIN structures require node, edge, and coordinate information."
      },
      {
        "id": "a2_6",
        "question": "TIN model is adaptable to surface roughness:",
        "options": {
          "a": "True",
          "b": "False"
        },
        "answer": "a",
        "explanation": "TIN allows for varying density \u2013 more triangles in rugged terrain, fewer in flat areas.",
        "conceptHint": "Concept: TIN allows for varying density \u2013 more triangles in rugged terrain, fewer in flat areas."
      },
      {
        "id": "a2_7",
        "question": "It is not possible to make subset of:",
        "options": {
          "a": "Points",
          "b": "Raster",
          "c": "TIN",
          "d": "Polylines"
        },
        "answer": "c",
        "explanation": "Clipping or subsetting a TIN breaks its topological structure.",
        "conceptHint": "Concept: Clipping or subsetting a TIN breaks its topological structure."
      },
      {
        "id": "a2_8",
        "question": "The measure of how closely pixels /cells can be resolved in an image / grid is called:",
        "options": {
          "a": "Spectral resolution",
          "b": "Radiometric resolution",
          "c": "Temporal resolution",
          "d": "Spatial resolution"
        },
        "answer": "d",
        "explanation": "Spatial resolution is the ground area covered by a single pixel.",
        "conceptHint": "Concept: Spatial resolution is the ground area covered by a single pixel."
      },
      {
        "id": "a2_9",
        "question": "The \u2026\u2026. model is extremely useful for describing discrete features, but less useful for describing continuously varying features.",
        "options": {
          "a": "Vector",
          "b": "Raster",
          "c": "TIN",
          "d": "3D"
        },
        "answer": "a",
        "explanation": "Vector models represent distinct objects with boundaries.",
        "conceptHint": "Concept: Vector models represent distinct objects with boundaries."
      },
      {
        "id": "a2_10",
        "question": "In terms of positional accuracy\u2026\u2026\u2026 model is good.",
        "options": {
          "a": "Vector",
          "b": "Raster",
          "c": "TIN",
          "d": "3D"
        },
        "answer": "a",
        "explanation": "Vector data maintains precise coordinate geometry compared to cell-averaged raster data.",
        "conceptHint": "Concept: Vector data maintains precise coordinate geometry compared to cell-averaged raster data."
      }
    ],
    "description": [
      "Comprehensive Review: Data attribution and TIN models."
    ]
  },
  {
    "setId": 13,
    "setTitle": "Assignment 3 (Week 3)",
    "questions": [
      {
        "id": "a3_1",
        "question": "In georeferencing, if a user chooses third order polynomial equation, then minimum number of required GCPs required are:",
        "options": {
          "a": "10",
          "b": "12",
          "c": "13",
          "d": "14"
        },
        "answer": "a",
        "explanation": "3rd order transformation calculation requires at least 10 ground control points.",
        "conceptHint": "Concept: 3rd order transformation calculation requires at least 10 ground control points."
      },
      {
        "id": "a3_2",
        "question": "In Georeferencing the y-scale (E) is \u2026\u2026\u2026.., because the origins of an image and a geographic coordinate system are different.:",
        "options": {
          "a": "Positive",
          "b": "Negative",
          "c": "Square root",
          "d": "None of the above"
        },
        "answer": "b",
        "explanation": "Y-scale is negative as image coordinates (row zero at top) and map coordinates (Y zero at bottom) are inverted.",
        "conceptHint": "Concept: Y-scale is negative as image coordinates (row zero at top) and map coordinates (Y zero at bottom) are inverted."
      },
      {
        "id": "a3_3",
        "question": "Relatively Quadtrees raster data compression technique provides:",
        "options": {
          "a": "High compression",
          "b": "No compression",
          "c": "Less compression",
          "d": "Maximum compression"
        },
        "answer": "a",
        "explanation": "Quadtrees are very efficient for hierarchical spatial data compression.",
        "conceptHint": "Concept: Quadtrees are very efficient for hierarchical spatial data compression."
      },
      {
        "id": "a3_4",
        "question": "MrSID raster data compression technique can provide compression upto:",
        "options": {
          "a": "30:1",
          "b": "40:1",
          "c": "50:1",
          "d": "60:1"
        },
        "answer": "c",
        "explanation": "Multi-resolution Seamless Image Database (MrSID) can reach 50:1 or higher compression.",
        "conceptHint": "Concept: Multi-resolution Seamless Image Database (MrSID) can reach 50:1 or higher compression."
      },
      {
        "id": "a3_5",
        "question": "During data generalization, number of nodes of a polyline / polygon are:",
        "options": {
          "a": "Increased",
          "b": "No change",
          "c": "Reduced",
          "d": "None of the above"
        },
        "answer": "c",
        "explanation": "Generalization simplifies features by removing redundant vertices (nodes).",
        "conceptHint": "Concept: Generalization simplifies features by removing redundant vertices (nodes)."
      },
      {
        "id": "a3_6",
        "question": "What does the abbreviation RDBMS stand for?",
        "options": {
          "a": "Digital Base Mapping System",
          "b": "Database Manipulation Software",
          "c": "Data Borrowing and Movement Software",
          "d": "Relational Database Management System"
        },
        "answer": "d",
        "explanation": "RDBMS is the standard system for managing linked data tables.",
        "conceptHint": "Concept: RDBMS is the standard system for managing linked data tables."
      },
      {
        "id": "a3_7",
        "question": "In which database tables are related by sharing common entity characteristic(s):",
        "options": {
          "a": "Hierarchical",
          "b": "Network",
          "c": "Relational",
          "d": "Object-Oriented"
        },
        "answer": "c",
        "explanation": "Relational databases use keys to link common characteristics across tables.",
        "conceptHint": "Concept: Relational databases use keys to link common characteristics across tables."
      },
      {
        "id": "a3_8",
        "question": "The advantage of Standard Query Language (SQL) in relation to GIS databases?",
        "options": {
          "a": "It is special",
          "b": "It is simple and easy to understand",
          "c": "It uses a true-English style of questioning",
          "d": "It is good at handling geographical concepts"
        },
        "answer": "d",
        "explanation": "Spatial SQL extensions (like PostGIS) allow for powerful handling of geographic queries.",
        "conceptHint": "Concept: Spatial SQL extensions (like PostGIS) allow for powerful handling of geographic queries."
      },
      {
        "id": "a3_9",
        "question": "The measurement technique which uses 2D Cartesian mathematics to calculate lengths and areas is called:",
        "options": {
          "a": "Geographical measurement",
          "b": "Geodesic measurement",
          "c": "Geotagging measurement",
          "d": "Planar"
        },
        "answer": "d",
        "explanation": "Planar measurements use flat surface geometry (Euclidean geometry).",
        "conceptHint": "Concept: Planar measurements use flat surface geometry (Euclidean geometry)."
      },
      {
        "id": "a3_10",
        "question": "Generally, all area measurements calculated are:",
        "options": {
          "a": "Planar",
          "b": "Geodesic",
          "c": "Geodetic",
          "d": "Geographic"
        },
        "answer": "a",
        "explanation": "Most standard GIS distance/area calculations default to Planar unless specified otherwise.",
        "conceptHint": "Concept: Most standard GIS distance/area calculations default to Planar unless specified otherwise."
      }
    ],
    "description": [
      "Comprehensive Review: Georeferencing math and compression theory."
    ]
  },
  {
    "setId": 14,
    "setTitle": "Assignment 4 (Week 4)",
    "questions": [
      {
        "id": "a4_1",
        "question": "Basic GIS functions are:",
        "options": {
          "a": "Area and distance measurement",
          "b": "Buffer generation",
          "c": "Reclassification",
          "d": "All of the above"
        },
        "answer": "d",
        "explanation": "These are fundamental analytical functions in GIS.",
        "conceptHint": "Concept: These are fundamental analytical functions in GIS."
      },
      {
        "id": "a4_2",
        "question": "Basic spatial analysis involves:",
        "options": {
          "a": "Attribute query",
          "b": "Spatial query",
          "c": "Both attribute and spatial queries",
          "d": "Auto query"
        },
        "answer": "c",
        "explanation": "Spatial analysis combines both 'Where' (spatial) and 'What' (attribute) queries.",
        "conceptHint": "Concept: Spatial analysis combines both 'Where' (spatial) and 'What' (attribute) queries."
      },
      {
        "id": "a4_3",
        "question": "What is a model?",
        "options": {
          "a": "A model is a suite of computer programs.",
          "b": "A model is a set of instructions to a GIS.",
          "c": "A model is a method for storing spatial data.",
          "d": "A model is a simplification of reality."
        },
        "answer": "d",
        "explanation": "A model acts as a simplified abstraction representing real-world systems.",
        "conceptHint": "Concept: A model acts as a simplified abstraction representing real-world systems."
      },
      {
        "id": "a4_4",
        "question": "\u201cPoints close together in space are more likely to have similar values than points farther apart\u201d is known as?",
        "options": {
          "a": "Tottenham Law of Geography",
          "b": "Totler's Law of Geography",
          "c": "Tobler's Law of Geography",
          "d": "Tobin Law of Geography"
        },
        "answer": "c",
        "explanation": "Tobler's First Law of Geography is the foundation for spatial interpolation.",
        "conceptHint": "Concept: Tobler's First Law of Geography is the foundation for spatial interpolation."
      },
      {
        "id": "a4_5",
        "question": "Which of the following spatial interpolation techniques is an example of a local, exact, abrupt and deterministic interpolator?",
        "options": {
          "a": "TIN",
          "b": "Spline",
          "c": "Thiessen polygons",
          "d": "Spatial moving average"
        },
        "answer": "c",
        "explanation": "Thiessen (Voronoi) polygons create abrupt boundaries and are strictly deterministic.",
        "conceptHint": "Concept: Thiessen (Voronoi) polygons create abrupt boundaries and are strictly deterministic."
      },
      {
        "id": "a4_6",
        "question": "Spatial interpolation is the procedure of estimating the value of properties at:",
        "options": {
          "a": "Observational location",
          "b": "Un-sample sites",
          "c": "Sample sites",
          "d": "None of the above"
        },
        "answer": "b",
        "explanation": "Interpolation estimates values for locations where no direct samples exist.",
        "conceptHint": "Concept: Interpolation estimates values for locations where no direct samples exist."
      },
      {
        "id": "a4_7",
        "question": "Preporcessing in GIS involves the following:",
        "options": {
          "a": "Format conversion",
          "b": "Generalization",
          "c": "Merging",
          "d": "All of the above"
        },
        "answer": "d",
        "explanation": "Preprocessing includes format conversion, cleaning, and aggregating data.",
        "conceptHint": "Concept: Preprocessing includes format conversion, cleaning, and aggregating data."
      },
      {
        "id": "a4_8",
        "question": "The following are also part of processing:",
        "options": {
          "a": "Georeferencing",
          "b": "Interpolation",
          "c": "Image interpretation",
          "d": "None of the above"
        },
        "answer": "d",
        "explanation": "Georeferencing and Interpolation are usually classified as fundamental Spatial Analysis, not just preprocessing/processing stages in this context.",
        "conceptHint": "Concept: Georeferencing and Interpolation are usually classified as fundamental Spatial Analysis, not just preprocessing/processing stages in this context."
      },
      {
        "id": "a4_9",
        "question": "One type of image fusion / merging technique is based on:",
        "options": {
          "a": "Colour transformations",
          "b": "Image transformations",
          "c": "Geographic transformations",
          "d": "Geometric transformations"
        },
        "answer": "a",
        "explanation": "Color space transformations (like IHS) are common in image fusion.",
        "conceptHint": "Concept: Color space transformations (like IHS) are common in image fusion."
      },
      {
        "id": "a4_10",
        "question": "Reclassification involves the selection and presentation of a selected layer of data based on the classes or values of a specific:",
        "options": {
          "a": "Attribute",
          "b": "Object",
          "c": "Pixel",
          "d": "Cell"
        },
        "answer": "a",
        "explanation": "Reclassification simplifies data based on attribute values.",
        "conceptHint": "Concept: Reclassification simplifies data based on attribute values."
      }
    ],
    "description": [
      "Comprehensive Review: GIS functions and interpolation techniques."
    ]
  },
  {
    "setId": 15,
    "setTitle": "Assignment 5 (Week 5)",
    "questions": [
      {
        "id": "a5_1",
        "question": "Map overlay operations are based on:",
        "options": {
          "a": "Boolean Logic",
          "b": "Deductive",
          "c": "Inductive",
          "d": "All of the above"
        },
        "answer": "a",
        "explanation": "Set theory and Boolean logic (AND, OR, NOT) drive overlay analysis.",
        "conceptHint": "Concept: Set theory and Boolean logic (AND, OR, NOT) drive overlay analysis."
      },
      {
        "id": "a5_2",
        "question": "The intersection A \u2229 B of two sets A and B is the set that contains all elements of A that also belong to B:",
        "options": {
          "a": "False",
          "b": "No change",
          "c": "True",
          "d": "None of the above"
        },
        "answer": "c",
        "explanation": "Definition of intersection in set theory.",
        "conceptHint": "Concept: Definition of intersection in set theory."
      },
      {
        "id": "a5_3",
        "question": "Which overlay operator has been used in the following figure? (Referring to A overlapping B to produce sub-shapes)",
        "options": {
          "a": "AND",
          "b": "OR",
          "c": "NOT",
          "d": "None of the above"
        },
        "answer": "d",
        "explanation": "If no common result is highlighted, the operation is undefined in text description.",
        "conceptHint": "Concept: If no common result is highlighted, the operation is undefined in text description."
      },
      {
        "id": "a5_4",
        "question": "Which is the raster based overlay operation:",
        "options": {
          "a": "Arithmetic",
          "b": "Relational",
          "c": "Conditional",
          "d": "All of the above"
        },
        "answer": "d",
        "explanation": "Raster overlays can be mathematical, comparative, or logical.",
        "conceptHint": "Concept: Raster overlays can be mathematical, comparative, or logical."
      },
      {
        "id": "a5_5",
        "question": "Which is neighborhood operation?",
        "options": {
          "a": "Interpolation functions",
          "b": "Topographic functions",
          "c": "Search functions",
          "d": "All of the above"
        },
        "answer": "d",
        "explanation": "Neighborhood operations use surrounding cell values for calculations.",
        "conceptHint": "Concept: Neighborhood operations use surrounding cell values for calculations."
      },
      {
        "id": "a5_6",
        "question": "Evaluation of characteristics of an area surrounding a specific location is known as:",
        "options": {
          "a": "Digitization",
          "b": "Neighbourhood operations",
          "c": "Georeferencing",
          "d": "Merging"
        },
        "answer": "b",
        "explanation": "Neighbourhood analysis focuses on local spatial proximity.",
        "conceptHint": "Concept: Neighbourhood analysis focuses on local spatial proximity."
      },
      {
        "id": "a5_7",
        "question": "In which operation it is necessary to indicate one or more target locations, the neighbourhood considered around each target and the type of function to be executed on the arguments within the neighbourhood:",
        "options": {
          "a": "Interpolation functions",
          "b": "Topographic functions",
          "c": "Search functions",
          "d": "all of the above"
        },
        "answer": "d",
        "explanation": "Spatial neighborhood functions require these parameters to operate.",
        "conceptHint": "Concept: Spatial neighborhood functions require these parameters to operate."
      },
      {
        "id": "a5_8",
        "question": "The procedure of estimating unknown values at un-sampled sites using known values of existing observations is known as:",
        "options": {
          "a": "Interpolation functions",
          "b": "Topographic functions",
          "c": "Search functions",
          "d": "all of the above"
        },
        "answer": "a",
        "explanation": "This is the definition of Spatial Interpolation.",
        "conceptHint": "Concept: This is the definition of Spatial Interpolation."
      },
      {
        "id": "a5_9",
        "question": "The \u2026\u2026\u2026\u2026 of a surface can be represented in a digital elevation model (DEM):",
        "options": {
          "a": "Photography",
          "b": "Petrography",
          "c": "Topography",
          "d": "Topology"
        },
        "answer": "c",
        "explanation": "DEMs map the physical topography (bare earth elevation).",
        "conceptHint": "Concept: DEMs map the physical topography (bare earth elevation)."
      },
      {
        "id": "a5_10",
        "question": "Spatial searching based on certain criteria/condition is known as:",
        "options": {
          "a": "Buffer analysis",
          "b": "Safer analysis",
          "c": "Suffer analysis",
          "d": "Offer analysis"
        },
        "answer": "a",
        "explanation": "Buffer analysis is a primary method for proximity-based spatial search.",
        "conceptHint": "Concept: Buffer analysis is a primary method for proximity-based spatial search."
      }
    ],
    "description": [
      "Comprehensive Review: Overlay analysis and topographic functions."
    ]
  },
  {
    "setId": 16,
    "setTitle": "Assignment 6 (Week 6)",
    "questions": [
      {
        "id": "a6_1",
        "question": "How many kinds of network elements are currently known in GIS?",
        "options": {
          "a": "1",
          "b": "2",
          "c": "3",
          "d": "4"
        },
        "answer": "c",
        "explanation": "Edges, Junctions, and Turns.",
        "conceptHint": "Concept: Edges, Junctions, and Turns."
      },
      {
        "id": "a6_2",
        "question": "\u2026\u2026\u2026.connect edges and facilitate navigation from one edge to another:",
        "options": {
          "a": "Edges",
          "b": "Junctions",
          "c": "Turns",
          "d": "None of the above"
        },
        "answer": "b",
        "explanation": "Junctions are connectivity points between linear network edges.",
        "conceptHint": "Concept: Junctions are connectivity points between linear network edges."
      },
      {
        "id": "a6_3",
        "question": "The movement of people, transportation and distribution of services and allocation delivery of resources occurs through a:",
        "options": {
          "a": "Geographic system",
          "b": "Geometric system",
          "c": "Geodesic system",
          "d": "Network system"
        },
        "answer": "d",
        "explanation": "Network systems manage resource flow across linear connectivity infrastructures.",
        "conceptHint": "Concept: Network systems manage resource flow across linear connectivity infrastructures."
      },
      {
        "id": "a6_4",
        "question": "The determination of the shortest path between connected points or nodes within the network based on attribute values is often referred to as:",
        "options": {
          "a": "Route optimization",
          "b": "Relational optimization",
          "c": "Conditional optimization",
          "d": "Conceptual optimization"
        },
        "answer": "a",
        "explanation": "Finding the 'least cost' path is known as route optimization.",
        "conceptHint": "Concept: Finding the 'least cost' path is known as route optimization."
      },
      {
        "id": "a6_5",
        "question": "In which analysis four components (a set of resources, location of resources, a destination and a set of constraints) are usually considered:",
        "options": {
          "a": "Buffer analysis",
          "b": "Geometric analysis",
          "c": "Geodesic analysis",
          "d": "Network analysis"
        },
        "answer": "d",
        "explanation": "Network analysis solves complex allocation and routing problems.",
        "conceptHint": "Concept: Network analysis solves complex allocation and routing problems."
      },
      {
        "id": "a6_6",
        "question": "The process of organizing data into group / categories according to shared qualities or characteristics is called as:",
        "options": {
          "a": "Modification",
          "b": "Classification",
          "c": "Ossification",
          "d": "Ramification"
        },
        "answer": "b",
        "explanation": "Classification aggregates data into meaningful categories.",
        "conceptHint": "Concept: Classification aggregates data into meaningful categories."
      },
      {
        "id": "a6_7",
        "question": "For attribute categorization, how many types are commonly used in GIS:",
        "options": {
          "a": "3",
          "b": "4",
          "c": "5",
          "d": "6"
        },
        "answer": "d",
        "explanation": "Nominal, Ordinal, Interval, Ratio, etc. (6 standard categories).",
        "conceptHint": "Concept: Nominal, Ordinal, Interval, Ratio, etc."
      },
      {
        "id": "a6_8",
        "question": "The method in which each class contains the same number of features is known as:",
        "options": {
          "a": "Natural Breaks (Jenks)",
          "b": "Quantile",
          "c": "Equal Area",
          "d": "Standard Deviations"
        },
        "answer": "b",
        "explanation": "Quantile classification distributes an equal count of features per class.",
        "conceptHint": "Concept: Quantile classification distributes an equal count of features per class."
      },
      {
        "id": "a6_9",
        "question": "The method in which the mean value is found and then class breaks above and below the mean at intervals of either 1/4, 1/2, or 1 standard deviations are placed until all the data values are contained within the classes is:",
        "options": {
          "a": "Quantile",
          "b": "Equal Area",
          "c": "Standard Deviations",
          "d": "Geometrical interval"
        },
        "answer": "c",
        "explanation": "Standard Deviation classification builds classes around the mean value.",
        "conceptHint": "Concept: Standard Deviation classification builds classes around the mean value."
      },
      {
        "id": "a6_10",
        "question": "Data anomalies includes:",
        "options": {
          "a": "Modification",
          "b": "Insertion",
          "c": "Deletion",
          "d": "All of the above"
        },
        "answer": "d",
        "explanation": "Corruption or unintended errors during data transactions.",
        "conceptHint": "Concept: Corruption or unintended errors during data transactions."
      }
    ],
    "description": [
      "Comprehensive Review: Network analysis elements and classification types."
    ]
  },
  {
    "setId": 17,
    "setTitle": "Assignment 7 (Week 7)",
    "questions": [
      {
        "id": "a7_1",
        "question": "Which database model is logically represented by an upside down tree?",
        "options": {
          "a": "Hierarchical",
          "b": "Relational",
          "c": "Network",
          "d": "Object-oriented"
        },
        "answer": "a",
        "explanation": "Hierarchical models use parent-child tree structures.",
        "conceptHint": "Concept: Hierarchical models use parent-child tree structures."
      },
      {
        "id": "a7_2",
        "question": "In which database model tables are related by sharing common entity characteristic:",
        "options": {
          "a": "Hierarchical",
          "b": "Relational",
          "c": "Network",
          "d": "Object-oriented"
        },
        "answer": "b",
        "explanation": "Relational models use joined columns with shared characteristics.",
        "conceptHint": "Concept: Relational models use joined columns with shared characteristics."
      },
      {
        "id": "a7_3",
        "question": "A cell is assigned the \u2026\u2026.. value if there is either no information or insufficient information about the characteristics of the location it represents:",
        "options": {
          "a": "Zero",
          "b": "Meta data",
          "c": "Some data",
          "d": "NoData"
        },
        "answer": "d",
        "explanation": "NoData is a placeholder in rasters for unknown/null values.",
        "conceptHint": "Concept: NoData is a placeholder in rasters for unknown/null values."
      },
      {
        "id": "a7_4",
        "question": "Initially SRTM-DEM has voids which were filled with:",
        "options": {
          "a": "NoData",
          "b": "Zero",
          "c": "Meta data",
          "d": "Some data"
        },
        "answer": "a",
        "explanation": "Raw SRTM data contained 'voids' tagged as NoData pixels.",
        "conceptHint": "Concept: Raw SRTM data contained 'voids' tagged as NoData pixels."
      },
      {
        "id": "a7_5",
        "question": "A way to flatten a globe's surface into a plane in order to make a map:",
        "options": {
          "a": "Map enlargement",
          "b": "Map reduction",
          "c": "Map production",
          "d": "Map projection"
        },
        "answer": "d",
        "explanation": "Map projection is the mathematical transformation of 3D to 2D.",
        "conceptHint": "Concept: Map projection is the mathematical transformation of 3D to 2D."
      },
      {
        "id": "a7_6",
        "question": "Maps are models of:",
        "options": {
          "a": "Virtually",
          "b": "Reality",
          "c": "Rituality",
          "d": "Potentiality"
        },
        "answer": "b",
        "explanation": "A map is fundamentally a simplified model of physical or conceptual reality.",
        "conceptHint": "Concept: A map is fundamentally a simplified model of physical or conceptual reality."
      },
      {
        "id": "a7_7",
        "question": "Map projections involve distortions in:",
        "options": {
          "a": "Shape",
          "b": "Size",
          "c": "Distance",
          "d": "All of the above"
        },
        "answer": "d",
        "explanation": "Projection always compromises at least one metric (Shape, Area, or Distance).",
        "conceptHint": "Concept: Projection always compromises at least one metric (Shape, Area, or Distance)."
      },
      {
        "id": "a7_8",
        "question": "Following is a type of map projection:",
        "options": {
          "a": "Cylindrical",
          "b": "Conic",
          "c": "Azimuthal",
          "d": "All of the above"
        },
        "answer": "d",
        "explanation": "These are the three primary developable surfaces for projection.",
        "conceptHint": "Concept: These are the three primary developable surfaces for projection."
      },
      {
        "id": "a7_9",
        "question": "Which projection preserves right angles between lines of latitude and longitude and are primarily used because they preserve direction:",
        "options": {
          "a": "Cylindrical",
          "b": "Conic",
          "c": "Azimuthal",
          "d": "All of the above"
        },
        "answer": "a",
        "explanation": "Mercator (cylindrical) is famous for preserving directional bearings.",
        "conceptHint": "Concept: Mercator (cylindrical) is famous for preserving directional bearings."
      },
      {
        "id": "a7_10",
        "question": "The UTM map projection system consists of \u2026\u2026 zones, each 6-degrees of longitude in width:",
        "options": {
          "a": "50",
          "b": "60",
          "c": "70",
          "d": "80"
        },
        "answer": "b",
        "explanation": "The UTM system divides the globe into 60 longitudinal zones.",
        "conceptHint": "Concept: The UTM system divides the globe into 60 longitudinal zones."
      }
    ],
    "description": [
      "Comprehensive Review: Database hierarchies and map projections."
    ]
  },
  {
    "setId": 18,
    "setTitle": "Assignment 8 (Week 8)",
    "questions": [
      {
        "id": "a8_1",
        "question": "Higher spatial resolution raster dataset will allow:",
        "options": {
          "a": "To distinguish far spaced objects clearly",
          "b": "No changes in the visibility / interpretation",
          "c": "To distinguish closed spaced objects clearly",
          "d": "None of the above"
        },
        "answer": "c",
        "explanation": "Resolution dictates the smallest object that can be uniquely identified.",
        "conceptHint": "Concept: Resolution dictates the smallest object that can be uniquely identified."
      },
      {
        "id": "a8_2",
        "question": "10 m spatial resolution is \u2026\u2026. Over 20 m spatial resolution data:",
        "options": {
          "a": "Inferior",
          "b": "Better",
          "c": "No change",
          "d": "None of the above"
        },
        "answer": "b",
        "explanation": "Lower numerical values represent higher/better spatial resolution.",
        "conceptHint": "Concept: Lower numerical values represent higher/better spatial resolution."
      },
      {
        "id": "a8_3",
        "question": "Which is freely available DEM:",
        "options": {
          "a": "SRTM-DEM",
          "b": "ASTER-GDEM",
          "c": "USGS-DEM",
          "d": "All of the above"
        },
        "answer": "d",
        "explanation": "Many global DEMs are made public by government space agencies.",
        "conceptHint": "Concept: Many global DEMs are made public by government space agencies."
      },
      {
        "id": "a8_4",
        "question": "Which DEMs are having spatial resolution up to 30m:",
        "options": {
          "a": "USGS-DEM",
          "b": "USGS-DEM and SRTM-DEM",
          "c": "SRTM-DEM and ASTER-GDEM",
          "d": "USGS-DEM, SRTM-DEM and ASTER-GDEM"
        },
        "answer": "c",
        "explanation": "SRTM and ASTER have provided global 30m products.",
        "conceptHint": "Concept: SRTM and ASTER have provided global 30m products."
      },
      {
        "id": "a8_5",
        "question": "What is spatial interpolation?",
        "options": {
          "a": "The process of establishing values for areas outside the boundary of an existing set of data points",
          "b": "The process of establishing a statistical relationship between two spatially correlated variables",
          "c": "The process of modelling spatial pattern from a set of one or more data layers",
          "d": "The process of establishing values for areas between an existing set of discrete observations"
        },
        "answer": "d",
        "explanation": "Interpolation fills the gaps between known sample points.",
        "conceptHint": "Concept: Interpolation fills the gaps between known sample points."
      },
      {
        "id": "a8_6",
        "question": "Cartosat-1 & 2 provide?",
        "options": {
          "a": "Stereo pairs",
          "b": "SAR data",
          "c": "Thermal images",
          "d": "LiDAR data"
        },
        "answer": "a",
        "explanation": "ISRO's Cartosat series is optimized for high-res stereo imaging for DEM generation.",
        "conceptHint": "Concept: ISRO's Cartosat series is optimized for high-res stereo imaging for DEM generation."
      },
      {
        "id": "a8_7",
        "question": "The most common use of Theissen\u2019s Polygons is to create contour lines.",
        "options": {
          "a": "True",
          "b": "False"
        },
        "answer": "b",
        "explanation": "Thiessen polygons create abrupt stepped surfaces, not smooth contour lines.",
        "conceptHint": "Concept: Thiessen polygons create abrupt stepped surfaces, not smooth contour lines."
      },
      {
        "id": "a8_8",
        "question": "The direction of a slope with reference to north:",
        "options": {
          "a": "Slope",
          "b": "Gradient",
          "c": "Aspect",
          "d": "Slope aspect"
        },
        "answer": "c",
        "explanation": "Aspect maps the cardinal direction a face of a hill points.",
        "conceptHint": "Concept: Aspect maps the cardinal direction a face of a hill points."
      },
      {
        "id": "a8_9",
        "question": "\u2026\u2026\u2026\u2026.. is a statistical concept which states the likelihood or probability that a particular set of measurements are within certain range of true value:",
        "options": {
          "a": "Error",
          "b": "Inaccuracy",
          "c": "Accuracy",
          "d": "Precision"
        },
        "answer": "c",
        "explanation": "Accuracy relates to how close a measurement is to the true global value.",
        "conceptHint": "Concept: Accuracy relates to how close a measurement is to the true global value."
      },
      {
        "id": "a8_10",
        "question": "\u2018No data\u2019 is a:",
        "options": {
          "a": "Value",
          "b": "Always equal to 1",
          "c": "Zero",
          "d": "Nothing"
        },
        "answer": "a",
        "explanation": "Software treats 'NoData' as a specific valid flag value in the matrix.",
        "conceptHint": "Concept: Software treats 'NoData' as a specific valid flag value in the matrix."
      }
    ],
    "description": [
      "Comprehensive Review: Raster resolution, DEMs, and interpolation."
    ]
  },
  {
    "setId": 19,
    "setTitle": "Assignment 9 (Week 9)",
    "questions": [
      {
        "id": "a9_1",
        "question": "A DEM is a raster representation of a \u2026\u2026\u2026 surface?",
        "options": {
          "a": "Discrete",
          "b": "Continuous",
          "c": "Triangulated",
          "d": "Quadtree"
        },
        "answer": "b",
        "explanation": "Elevation is a spatially continuous phenomenon best mapped by rasters.",
        "conceptHint": "Concept: Elevation is a spatially continuous phenomenon best mapped by rasters."
      },
      {
        "id": "a9_2",
        "question": "The DEM could be generated through techniques such as photogrammetry, Lidar, InSAR, land surveying, etc.?",
        "options": {
          "a": "True",
          "b": "False"
        },
        "answer": "a",
        "explanation": "Many multi-sensor techniques exist to derive vertical data.",
        "conceptHint": "Concept: Many multi-sensor techniques exist to derive vertical data."
      },
      {
        "id": "a9_3",
        "question": "Grid (DEM) cell values can be:",
        "options": {
          "a": "Only integer numbers",
          "b": "Only real (floating) numbers",
          "c": "Only positive integer numbers",
          "d": "Both positive and negative integer or real (floating) numbers"
        },
        "answer": "d",
        "explanation": "DEMs require wide range support for negative altitudes and fractions.",
        "conceptHint": "Concept: DEMs require wide range support for negative altitudes and fractions."
      },
      {
        "id": "a9_4",
        "question": "DEMs are commonly built using data collected using remote sensing techniques, but they may also be built from land surveying:",
        "options": {
          "a": "False",
          "b": "True"
        },
        "answer": "b",
        "explanation": "Precise local DEMs uses Total Stations or RTK-GPS survey points.",
        "conceptHint": "Concept: Precise local DEMs uses Total Stations or RTK-GPS survey points."
      },
      {
        "id": "a9_5",
        "question": "There is no universal usage of the terms digital elevation model (DEM), digital terrain model (DTM) and digital surface model (DSM) in scientific literature:",
        "options": {
          "a": "True",
          "b": "False"
        },
        "answer": "a",
        "explanation": "Many researchers use these interchangeably despite technical differences.",
        "conceptHint": "Concept: Many researchers use these interchangeably despite technical differences."
      },
      {
        "id": "a9_6",
        "question": "Most of the terrain data providers (e.g. USGS, ERSDAC, CGIAR, ISRO-NRSA) use the term?",
        "options": {
          "a": "DSM",
          "b": "DTM",
          "c": "DEM",
          "d": "DES"
        },
        "answer": "c",
        "explanation": "DEM (Digital Elevation Model) is the most generic and widely used industry term.",
        "conceptHint": "Concept: DEM (Digital Elevation Model) is the most generic and widely used industry term."
      },
      {
        "id": "a9_7",
        "question": "DEMs can be generated through number of ways, however most preferred method of generating DEMs is:",
        "options": {
          "a": "Contours",
          "b": "Remote sensing based",
          "c": "Aerial photographs",
          "d": "None of the above"
        },
        "answer": "b",
        "explanation": "Remote sensing (Satellite radar/optical) is the only feasible method for global coverage.",
        "conceptHint": "Concept: Remote sensing (Satellite radar/optical) is the only feasible method for global coverage."
      },
      {
        "id": "a9_8",
        "question": "DEMs can also be generated using the following method:",
        "options": {
          "a": "Stereo-pairs",
          "b": "Thermal infrared data",
          "c": "Radar data pairs",
          "d": "All of the above"
        },
        "answer": "d",
        "explanation": "Multiple image/signal sources can derive elevation geometry.",
        "conceptHint": "Concept: Multiple image/signal sources can derive elevation geometry."
      },
      {
        "id": "a9_9",
        "question": "Spatial Interpolation techniques:",
        "options": {
          "a": "Turns raw data into useful information by adding greater informative content and value",
          "b": "Reveals patterns, trends, and anomalies that might otherwise be missed",
          "c": "Provides a check on human intuition",
          "d": "All of the above"
        },
        "answer": "d",
        "explanation": "Interpolation enhances the predictive value of raw point samples.",
        "conceptHint": "Concept: Interpolation enhances the predictive value of raw point samples."
      },
      {
        "id": "a9_10",
        "question": "Functional surfaces can be used to represent:",
        "options": {
          "a": "Terrestrial surfaces that depict the earth\u2019s surface",
          "b": "Statistical surfaces that describe demographic",
          "c": "Mathematical surfaces that are based on arithmetic expressions",
          "d": "All of the above"
        },
        "answer": "d",
        "explanation": "Functional surfaces represent any phenomenon that varies across space.",
        "conceptHint": "Concept: Functional surfaces represent any phenomenon that varies across space."
      }
    ],
    "description": [
      "Comprehensive Review: DEM generation and functional surfaces."
    ]
  },
  {
    "setId": 20,
    "setTitle": "Assignment 10 (Week 10)",
    "questions": [
      {
        "id": "a10_1",
        "question": "Which of the following cannot be modelled using a DEM?",
        "options": {
          "a": "Slope",
          "b": "Aspect",
          "c": "Geology",
          "d": "Runoff"
        },
        "answer": "c",
        "explanation": "Geology maps underground structure, while DEMs map surface elevation.",
        "conceptHint": "Concept: Geology maps underground structure, while DEMs map surface elevation."
      },
      {
        "id": "a10_2",
        "question": "The rate of change of elevation is called:",
        "options": {
          "a": "Gradient",
          "b": "Slope",
          "c": "Aspect",
          "d": "Gradient slope"
        },
        "answer": "b",
        "explanation": "Slope is mathematically the rate of change of Z relative to XY.",
        "conceptHint": "Concept: Slope is mathematically the rate of change of Z relative to XY."
      },
      {
        "id": "a10_3",
        "question": "What is the difference between slope and aspect?",
        "options": {
          "a": "Slope is the distance down the fall line from the top of the slope to its bottom, while aspect is the percentage gradient of this line averaged over its full distance.",
          "b": "Slope is the gradient directly down the fall line, while aspect is the direction of the fall line relative to north.",
          "c": "Slope is the direction of the fall line, while aspect is the gradient of the fall line.",
          "d": "Slope is the gradient of the fall line relative to vertical, while aspect is the direction of the fall line relative to the line of greatest slope."
        },
        "answer": "b",
        "explanation": "Slope is the 'how steep', Aspect is the 'which direction'.",
        "conceptHint": "Concept: Slope is the 'how steep', Aspect is the 'which direction'."
      },
      {
        "id": "a10_4",
        "question": "Slope can be calculated from the formula S = b2 - c2.",
        "options": {
          "a": "True",
          "b": "False"
        },
        "answer": "a",
        "explanation": "Simple difference formulas determine cell-to-cell slope values.",
        "conceptHint": "Concept: Simple difference formulas determine cell-to-cell slope values."
      },
      {
        "id": "a10_5",
        "question": "What is meant by the term 'precision'?",
        "options": {
          "a": "The extent to which a value approaches its true value",
          "b": "The lack of bias in the data",
          "c": "The level of detail at which data is stored",
          "d": "The overall quality of the data"
        },
        "answer": "c",
        "explanation": "Precision refers to the level of detail/consistency in measurement storage.",
        "conceptHint": "Concept: Precision refers to the level of detail/consistency in measurement storage."
      },
      {
        "id": "a10_6",
        "question": "What is meant by the term 'data quality'?",
        "options": {
          "a": "The lineage of the data",
          "b": "The generalization present in the source data",
          "c": "The resolution of the data",
          "d": "The inherent quality of the data as characterized by its accuracy, precision, bias, level of error, etc."
        },
        "answer": "d",
        "explanation": "Data quality is a multi-factor assessment of information fitness.",
        "conceptHint": "Concept: Data quality is a multi-factor assessment of information fitness."
      },
      {
        "id": "a10_7",
        "question": "When an error in a dataset leads to the commission of another error this is called error:",
        "options": {
          "a": "Propagation",
          "b": "False precision",
          "c": "Horizontal error",
          "d": "Cascading"
        },
        "answer": "a",
        "explanation": "Error Propagation tracks how inaccuracies multiply during series of analysis.",
        "conceptHint": "Concept: Error Propagation tracks how inaccuracies multiply during series of analysis."
      },
      {
        "id": "a10_8",
        "question": "DEMs can be prepared from:",
        "options": {
          "a": "Raster stereo pair",
          "b": "Contours",
          "c": "InSAR technique",
          "d": "All the above"
        },
        "answer": "d",
        "explanation": "Standard methods for vertical surface derivation.",
        "conceptHint": "Concept: Standard methods for vertical surface derivation."
      },
      {
        "id": "a10_9",
        "question": "The shape of unit of DEM can only be:",
        "options": {
          "a": "Rectangular",
          "b": "Circular",
          "c": "Square",
          "d": "Triangle"
        },
        "answer": "c",
        "explanation": "Raster cells must be geometrically consistent perfect squares.",
        "conceptHint": "Concept: Raster cells must be geometrically consistent perfect squares."
      },
      {
        "id": "a10_10",
        "question": "The cell value of a DEM can have:",
        "options": {
          "a": "Both positive and negative, integer and real values",
          "b": "Only positive integer values",
          "c": "Only negative integer and real values",
          "d": "Only positive real values"
        },
        "answer": "a",
        "explanation": "Full range numerical support is required for elevation models.",
        "conceptHint": "Concept: Full range numerical support is required for elevation models."
      }
    ],
    "description": [
      "Comprehensive Review: Terrain modeling, precision, and error propagation."
    ]
  },
  {
    "setId": 21,
    "setTitle": "Assignment 11 (Week 11)",
    "questions": [
      {
        "id": "a11_1",
        "question": "The shape of a cell of a DEM can only be:",
        "options": {
          "a": "Rectangular",
          "b": "Circular",
          "c": "Square",
          "d": "Triangle"
        },
        "answer": "c",
        "explanation": "Standard raster grids utilize square cells.",
        "conceptHint": "Concept: Standard raster grids utilize square cells."
      },
      {
        "id": "a11_2",
        "question": "Overall shape of a DEM can only be:",
        "options": {
          "a": "Rectangular and square",
          "b": "Circular and triangular",
          "c": "Square and circular",
          "d": "Triangle and rectangular"
        },
        "answer": "a",
        "explanation": "The overall extent of a raster matrix is always rectangular or square.",
        "conceptHint": "Concept: The overall extent of a raster matrix is always rectangular or square."
      },
      {
        "id": "a11_3",
        "question": "An 8-bits DEM can have \u2026\u2026 total number of positive integer cell values:",
        "options": {
          "a": "64",
          "b": "128",
          "c": "256",
          "d": "65536"
        },
        "answer": "c",
        "explanation": "2^8 equals 256 unique discrete values.",
        "conceptHint": "Concept: 2^8 equals 256 unique discrete values."
      },
      {
        "id": "a11_4",
        "question": "A DEM that shows finer details is said to be of:",
        "options": {
          "a": "High resolution",
          "b": "Coarser resolution",
          "c": "Moderate resolution",
          "d": "Poor resolution"
        },
        "answer": "a",
        "explanation": "Higher resolution captures more granular ground details.",
        "conceptHint": "Concept: Higher resolution captures more granular ground details."
      },
      {
        "id": "a11_5",
        "question": "Which of the following is NOT a raster data structure?",
        "options": {
          "a": "Spaghetti",
          "b": "Run-length encoding",
          "c": "Quadtree",
          "d": "Block encoding"
        },
        "answer": "a",
        "explanation": "Spaghetti is a non-topological vector data structure.",
        "conceptHint": "Concept: Spaghetti is a non-topological vector data structure."
      },
      {
        "id": "a11_6",
        "question": "Which of the following is advantage of DEMs over TINs?",
        "options": {
          "a": "DEMs do not require interpolation of point heights",
          "b": "DEMs do not require resampling if irregularly spaced input data is used",
          "c": "DEMs efficiently store data over varied terrain",
          "d": "DEMs use a simple data model"
        },
        "answer": "d",
        "explanation": "The matrix grid of a DEM is mathematically simpler than the complex mesh of a TIN.",
        "conceptHint": "Concept: The matrix grid of a DEM is mathematically simpler than the complex mesh of a TIN."
      },
      {
        "id": "a11_7",
        "question": "The accuracy of a DEM created from DGNSS data will be low:",
        "options": {
          "a": "True",
          "b": "False"
        },
        "answer": "b",
        "explanation": "Differential GNSS (DGNSS) provides extremely high-accuracy elevation data.",
        "conceptHint": "Concept: Differential GNSS (DGNSS) provides extremely high-accuracy elevation data."
      },
      {
        "id": "a11_8",
        "question": "A 'surface significant' point in a TIN model is one which can be closely interpolated from its neighbours.",
        "options": {
          "a": "True",
          "b": "False"
        },
        "answer": "b",
        "explanation": "Surface significant points highlight features that *cannot* be derived purely from surrounding averages (like peaks or pits).",
        "conceptHint": "Concept: Surface significant points highlight features that *cannot* be derived purely from surrounding averages (like peaks or pits)."
      },
      {
        "id": "a11_9",
        "question": "Spatial resolution of a DEM is?",
        "options": {
          "a": "Can be improved later",
          "b": "Vary with time",
          "c": "Fixed once the DEM is created",
          "d": "None of the above"
        },
        "answer": "c",
        "explanation": "Grid cell size is a permanent structural parameter of the raster file.",
        "conceptHint": "Concept: Grid cell size is a permanent structural parameter of the raster file."
      },
      {
        "id": "a11_10",
        "question": "DSM is a surface which can be used to represent:",
        "options": {
          "a": "Groundwater levels",
          "b": "Chemical qualities of soils",
          "c": "Chemical qualities of water",
          "d": "All of the above"
        },
        "answer": "d",
        "explanation": "Functional surfaces can model any statistical probability or characteristic value.",
        "conceptHint": "Concept: Functional surfaces can model any statistical probability or characteristic value."
      }
    ],
    "description": [
      "Comprehensive Review: Raster structures and DEM advantages."
    ]
  },
  {
    "setId": 22,
    "setTitle": "Assignment 12 (Week 12)",
    "questions": [
      {
        "id": "a12_1",
        "question": "Who is known as father of GIS?",
        "options": {
          "a": "Roger Moore",
          "b": "Roger Tomlinson",
          "c": "Roger Federer",
          "d": "Roger Bannister"
        },
        "answer": "b",
        "explanation": "Roger Tomlinson developed the first operational GIS for Canada.",
        "conceptHint": "Concept: Roger Tomlinson developed the first operational GIS for Canada."
      },
      {
        "id": "a12_2",
        "question": "Which analysis identify cells of a DEM those can be seen from a particular point on the surface?",
        "options": {
          "a": "Viewshed",
          "b": "Visibility Analysis",
          "c": "Line-of-sight analysis",
          "d": "All of the above"
        },
        "answer": "d",
        "explanation": "These terms refer to the process of calculating visible territory from an observer point.",
        "conceptHint": "Concept: These terms refer to the process of calculating visible territory from an observer point."
      },
      {
        "id": "a12_3",
        "question": "If you are precise, that doesn\u2019t necessarily mean you are \u2026\u2026.. However, if you are consistently \u2026\u2026\u2026, you are also precise.",
        "options": {
          "a": "Accurate, precise",
          "b": "Precise, accurate",
          "c": "Accurate, accurate",
          "d": "Precise, precise"
        },
        "answer": "c",
        "explanation": "Precision is consistency, accuracy is proximity to truth. Being consistently accurate implies high precision.",
        "conceptHint": "Concept: Precision is consistency, accuracy is proximity to truth."
      },
      {
        "id": "a12_4",
        "question": "A DEM, offset height and direction is required in:",
        "options": {
          "a": "Viewshed",
          "b": "Visibility Analysis",
          "c": "Line-of-sight analysis",
          "d": "All of the above"
        },
        "answer": "d",
        "explanation": "These parameters are critical for modeling visibility geometry.",
        "conceptHint": "Concept: These parameters are critical for modeling visibility geometry."
      },
      {
        "id": "a12_5",
        "question": "Error \u2026\u2026.. in GIS:",
        "options": {
          "a": "Reduces",
          "b": "Eliminates",
          "c": "Lessens",
          "d": "Propagates"
        },
        "answer": "d",
        "explanation": "In sequential analysis, minor errors tend to grow (propagate) through the chain.",
        "conceptHint": "Concept: In sequential analysis, minor errors tend to grow (propagate) through the chain."
      },
      {
        "id": "a12_6",
        "question": "In long distance line-of-sight analysis which is important to consider:",
        "options": {
          "a": "Digital Surface Model",
          "b": "Curvature of the Earth",
          "c": "Atmospheric refraction",
          "d": "All of the above"
        },
        "answer": "d",
        "explanation": "Global factors must be factored in for long-range intervisibility.",
        "conceptHint": "Concept: Global factors must be factored in for long-range intervisibility."
      },
      {
        "id": "a12_7",
        "question": "Which map element is considered part of \u201cGolden Rules of Cartography\u201d?",
        "options": {
          "a": "Scale bar",
          "b": "Orientation",
          "c": "Legend",
          "d": "All of the above"
        },
        "answer": "d",
        "explanation": "Maps require essential identifiers to be cartographically valid and interpretable.",
        "conceptHint": "Concept: Maps require essential identifiers to be cartographically valid and interpretable."
      },
      {
        "id": "a12_8",
        "question": "Computer intensive, requirements of digital datasets and software dependency are \u2026\u2026\u2026.. associated with GIS.",
        "options": {
          "a": "Advantages",
          "b": "Benefits",
          "c": "Supports",
          "d": "None of the above"
        },
        "answer": "d",
        "explanation": "These are usually considered 'Disadvantages' or 'Functional Requirements', not benefits.",
        "conceptHint": "Concept: These are usually considered 'Disadvantages' or 'Functional Requirements', not benefits."
      },
      {
        "id": "a12_9",
        "question": "Reversal of a DEM can be useful to produce:",
        "options": {
          "a": "Contours",
          "b": "Polygons",
          "c": "Points",
          "d": "Pixels"
        },
        "answer": "a",
        "explanation": "Reversing the surface logic can assist in identifying complex ridge/drainage contour patterns.",
        "conceptHint": "Concept: Reversing the surface logic can assist in identifying complex ridge/drainage contour patterns."
      },
      {
        "id": "a12_10",
        "question": "If points in a map are not uniformly distributed then these points might have:",
        "options": {
          "a": "Random distribution",
          "b": "Clustered distribution",
          "c": "Dispersed distribution",
          "d": "All of the above"
        },
        "answer": "d",
        "explanation": "Point patterns are analyzed to find underlying spatial forces.",
        "conceptHint": "Concept: Point patterns are analyzed to find underlying spatial forces."
      }
    ],
    "description": [
      "Comprehensive Review: Viewshed analysis, cartography, and spatial patterns."
    ]
  }
];