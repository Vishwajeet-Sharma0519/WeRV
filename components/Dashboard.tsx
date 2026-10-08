import { RegionMap } from './RegionMap';
export function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-head">
        <span className="micro">WeRV / INTELLIGENCE</span>
        <span className="concept-label">Illustrative product interface</span>
      </div>
      <div className="dashboard-body">
        <div className="dashboard-map">
          <div className="dashboard-map-title">
            <h3>Punjab + Haryana</h3>
            <span>Regional portfolio view / concept</span>
          </div>
          <RegionMap compact />
          <div className="map-key">
            <span className="key-square" />
            Proposed initial coverage
          </div>
        </div>
        <div className="dashboard-metrics">
          <div className="metric">
            <span>Groundwater stress</span>
            <strong>
              Elevated <small>DEMO</small>
            </strong>
            <div className="score-bar">
              <i />
            </div>
          </div>
          <div className="metric">
            <span>Subsidence risk</span>
            <strong>Under assessment</strong>
            <p>Ground validation required</p>
          </div>
          <div className="metric">
            <span>6–12 month trajectory</span>
            <svg
              viewBox="0 0 260 80"
              role="img"
              aria-label="Illustrative upward stress trajectory with widening uncertainty; no measured data"
            >
              <path
                d="M0 67 45 62 90 49 130 43 175 21 218 8 260 0 260 54 218 55 175 59 130 66 90 69 45 74 0 73"
                fill="#b8eeb0"
                fillOpacity=".12"
              />
              <path
                d="M0 70 45 68 90 59 130 55 175 41 218 32 260 26"
                stroke="#b8eeb0"
                strokeWidth="2"
                fill="none"
                strokeDasharray="4 4"
              />
            </svg>
            <p>Concept trend with uncertainty band</p>
          </div>
          <div className="metric metric-inline">
            <span>Validation status</span>
            <strong>Research</strong>
          </div>
          <div className="metric metric-inline">
            <span>Alert feed</span>
            <strong>Not connected</strong>
          </div>
        </div>
      </div>
      <div className="dashboard-caption">
        CONCEPT ONLY · No live measurements, forecasts or alerts are displayed.
      </div>
    </div>
  );
}
