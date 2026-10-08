export const layers = [
  {
    id: 'nisar',
    title: 'NISAR',
    subtitle: 'L-band radar',
    role: 'Primary deformation signal',
    text: 'Our research evaluates L-band interferometry over agricultural land, where vegetation can limit radar coherence. Time-series processing is designed to extract small changes in the ground surface.',
    limit:
      'Canopy penetration does not guarantee usable coherence. Coverage, calibration and local signal quality must be checked.',
    source: 'https://science.nasa.gov/mission/nisar/',
  },
  {
    id: 'sentinel',
    title: 'Sentinel-1',
    subtitle: 'C-band radar',
    role: 'Benchmark & complementary observations',
    text: 'A complementary deformation record provides a baseline for testing the benefit of L-band observations and examining gaps in coverage.',
    limit:
      'Growing crops can reduce coherence. Benchmark results must reflect local land cover and acquisition conditions.',
    source: 'https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-1',
  },
  {
    id: 'embeddings',
    title: 'Satellite embeddings',
    subtitle: 'AlphaEarth / land context',
    role: 'Vegetation & land-use context',
    text: 'Satellite embeddings can provide land-cover and vegetation context to interpret changes in coherence and environmental conditions.',
    limit:
      'Embeddings are contextual features, not direct observations of groundwater or proof of compaction.',
    source:
      'https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_SATELLITE_EMBEDDING_V1_ANNUAL',
  },
  {
    id: 'swot',
    title: 'SWOT + ERA5',
    subtitle: 'Water & seasonal context',
    role: 'Seasonal loading context',
    text: 'Surface-water elevation and environmental information help investigate seasonal effects alongside observed deformation.',
    limit:
      'Separating elastic motion from permanent compaction requires multiple lines of evidence and local validation.',
    source: 'https://science.nasa.gov/mission/swot/',
  },
  {
    id: 'grace',
    title: 'GRACE-FO',
    subtitle: 'Terrestrial water storage',
    role: 'Basin-scale cross-check',
    text: 'Large-scale water-storage trends provide a regional cross-check for the fused stress model. This is supporting context, not a mandatory dependency.',
    limit:
      'The spatial scale is too coarse to resolve individual blocks or villages. Water storage is not groundwater alone.',
    source: 'https://science.nasa.gov/mission/grace-fo/',
  },
  {
    id: 'ground',
    title: 'Ground observations',
    subtitle: 'CGWB / wells / GNSS',
    role: 'Validation & calibration',
    text: 'Well records and available geodetic observations anchor the model in local evidence. Backtests should evaluate performance against held-out periods.',
    limit: 'Ground-data availability, timing and representativeness limit what can be validated.',
    source: 'https://cgwb.gov.in/',
  },
];
