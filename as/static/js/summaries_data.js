const SUMMARIES_DATA = [
  {
    "moduleName": "Module 1: Intro & Fundamentals",
    "lectures": [
      {
        "id": 1,
        "topic": "Introduction to GIS",
        "summary": "Definition of GIS, difference from CAD/AM/FM, components of GIS (Hardware, Software, Data, People, Methods)."
      },
      {
        "id": 2,
        "topic": "History & Components",
        "summary": "Roger Tomlinson (Father of GIS), John Snow's mapping, data acquisition methods, and GIS lifecycle."
      },
      {
        "id": 3,
        "topic": "Hardware & Software",
        "summary": "Workstations, input devices (Scanners, Digitizers), and softcopy photogrammetry requirements."
      },
      {
        "id": 4,
        "topic": "Data Types in GIS",
        "summary": "Spatial (Point, Line, Polygon) and Non-Spatial (Attributes). Continuous vs Discrete phenomena."
      },
      {
        "id": 5,
        "topic": "GIS Frameworks",
        "summary": "Institutional frameworks, data sharing standards, and the role of stakeholders."
      }
    ]
  },
  {
    "moduleName": "Module 2: Data Models",
    "lectures": [
      {
        "id": 6,
        "topic": "Vector Data Model",
        "summary": "Geometry storage, spaghetti model vs topological model, vertex and node types."
      },
      {
        "id": 7,
        "topic": "Raster Data Model",
        "summary": "Grid structure, cell values (mixed vs predominant), resolution effects on accuracy."
      },
      {
        "id": 8,
        "topic": "Topology Logic",
        "summary": "Connectivity, Adjacency, and Containment logic. Importance in spatial analysis."
      },
      {
        "id": 9,
        "topic": "Vector Features",
        "summary": "Point (0D), Line (1D), Polygon (2D) detailed attributes and coordinate systems."
      },
      {
        "id": 10,
        "topic": "Attribute Tables",
        "summary": "Relational linking between geometry ID and tabular data (Primary/Foreign Keys)."
      }
    ]
  },
  {
    "moduleName": "Module 3: Raster & TIN",
    "lectures": [
      {
        "id": 11,
        "topic": "Raster Attributes",
        "summary": "Integer vs Floating point rasters. Categorical vs Continuous values."
      },
      {
        "id": 12,
        "topic": "Delaunay Triangulation",
        "summary": "Circumcircle property, maximizing minimum angles, triangle mesh generation."
      },
      {
        "id": 13,
        "topic": "TIN Structures",
        "summary": "Triangle-based surface modeling, irregular distribution of mass points."
      },
      {
        "id": 14,
        "topic": "Raster vs TIN",
        "summary": "Comparison of storage efficiency, relief representation, and computational cost."
      },
      {
        "id": 15,
        "topic": "Hybrid Models",
        "summary": "Multiresolution rasters and hybrid vector-raster structures."
      }
    ]
  },
  {
    "moduleName": "Module 4: Data Compression",
    "lectures": [
      {
        "id": 16,
        "topic": "Lossless Compression",
        "summary": "Run-length encoding (RLE), Huffman coding, and bit depth reduction."
      },
      {
        "id": 17,
        "topic": "Quadtree Structures",
        "summary": "Recursive decomposition, quadrants, and efficiency for uniform areas."
      },
      {
        "id": 18,
        "topic": "Wavelet Compression",
        "summary": "Advanced multi-resolution transformations (used in MrSID, JPEG2000)."
      },
      {
        "id": 19,
        "topic": "Bit Plane Encoding",
        "summary": "Analyzing separate binary layers of multiband imagery for efficiency."
      },
      {
        "id": 20,
        "topic": "Compression Standards",
        "summary": "Industry standards for spatial data exchange (GeoTIFF, MrSID)."
      }
    ]
  },
  {
    "moduleName": "Module 5: Georeferencing",
    "lectures": [
      {
        "id": 21,
        "topic": "Coordinate Systems",
        "summary": "Geographic (GCS) vs Projected (PCS). WGS84 and local datums."
      },
      {
        "id": 22,
        "topic": "Geometric Correction",
        "summary": "Ground Control Points (GCPs), spatial transformation models (Polynomial)."
      },
      {
        "id": 23,
        "topic": "RMS Error Calculation",
        "summary": "Root Mean Square Error as a measure of georeferencing quality."
      },
      {
        "id": 24,
        "topic": "Resampling Logic",
        "summary": "Nearest Neighbor, Bilinear Interpolation, and Cubic Convolution."
      },
      {
        "id": 25,
        "topic": "Rubber-sheeting",
        "summary": "Local warping techniques for complex map distortions."
      }
    ]
  },
  {
    "moduleName": "Module 6: Pre-Processing",
    "lectures": [
      {
        "id": 26,
        "topic": "Data Input Errors",
        "summary": "Overshoots, Undershoots, Slivers, and Dangles in digitizing."
      },
      {
        "id": 27,
        "topic": "Scanning & OCR",
        "summary": "Flatbed vs Drum scanners. Vectorization of scanned images."
      },
      {
        "id": 28,
        "topic": "IDW Interpolation",
        "summary": "Inverse Distance Weighting theory and the influence of distance."
      },
      {
        "id": 29,
        "topic": "Kriging Basics",
        "summary": "Geostatistical interpolation using variograms and spatial correlation."
      },
      {
        "id": 30,
        "topic": "Topology Building",
        "summary": "Cleaning geometries to establish consistent spatial relationships."
      }
    ]
  },
  {
    "moduleName": "Module 7: Overlay Analysis",
    "lectures": [
      {
        "id": 31,
        "topic": "Boolean Logic",
        "summary": "AND (Intersect), OR (Union), XOR, and NOT logic in spatial analysis."
      },
      {
        "id": 32,
        "topic": "Vector Overlay",
        "summary": "Point-in-polygon, Line-in-polygon, and Polygon-on-polygon methods."
      },
      {
        "id": 33,
        "topic": "Raster Overlay",
        "summary": "Map algebra and cell-by-cell mathematical operations."
      },
      {
        "id": 34,
        "topic": "Buffering Techniques",
        "summary": "Fixed distance vs Variable distance buffers. Positive and negative buffers."
      },
      {
        "id": 35,
        "topic": "Multi-Criteria Analysis",
        "summary": "Weighted overlays for site selection and suitability modeling."
      }
    ]
  },
  {
    "moduleName": "Module 8: Network Analysis",
    "lectures": [
      {
        "id": 36,
        "topic": "Network Components",
        "summary": "Edges, Junctions (Nodes), and Connectivity constraints (Turns, Stops)."
      },
      {
        "id": 37,
        "topic": "Impedance & Cost",
        "summary": "Defining travel time, friction, and resistance in a network."
      },
      {
        "id": 38,
        "topic": "Shortest Path",
        "summary": "Dijkstra's Algorithm and route optimization based on cost."
      },
      {
        "id": 39,
        "topic": "Allocating Services",
        "summary": "Location-allocation and service area (p-median) modeling."
      },
      {
        "id": 40,
        "topic": "Hydrological Networks",
        "summary": "Flow direction, accumulation, and stream network derivation."
      }
    ]
  },
  {
    "moduleName": "Module 9: Database & Projection",
    "lectures": [
      {
        "id": 41,
        "topic": "DBMS Models",
        "summary": "Evolution from Flat files to Relational (RDBMS) and Object-Oriented (OODBMS)."
      },
      {
        "id": 42,
        "topic": "SQL for GIS",
        "summary": "Spatial SQL queries, select by attribute, and select by location."
      },
      {
        "id": 43,
        "topic": "Map Projections",
        "summary": "Math of flattening the earth. Conic vs Cylindrical vs Planar projections."
      },
      {
        "id": 44,
        "topic": "UTM Zones",
        "summary": "Universal Transverse Mercator divisions (60 zones of 6 degrees)."
      },
      {
        "id": 45,
        "topic": "Distortion Management",
        "summary": "Managing Tissot's Indicatrix and metric preservation (Area vs Shape)."
      }
    ]
  },
  {
    "moduleName": "Module 10: Elevation Modeling",
    "lectures": [
      {
        "id": 46,
        "topic": "DEM, DTM, DSM",
        "summary": "Definitions: Digital Elevation Model vs Terrain Model vs Surface Model."
      },
      {
        "id": 47,
        "topic": "Hillshading Logic",
        "summary": "Calculating sun angle and shaded relief to visualize 3D terrain."
      },
      {
        "id": 48,
        "topic": "Elevation Accuracies",
        "summary": "Vertical vs Horizontal accuracy. Root Mean Square Error (RMSE) in DEMs."
      },
      {
        "id": 49,
        "topic": "LiDAR & SAR",
        "summary": "Active remote sensing methods for high-precision elevation mapping."
      },
      {
        "id": 50,
        "topic": "Stereo Photogrammetry",
        "summary": "Deriving Z-coordinates from overlapping image pairs (Parallax theory)."
      }
    ]
  }
];