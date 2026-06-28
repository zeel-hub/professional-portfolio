export const TrafficLights = ({ className = "" }) => (
  <div className={`flex items-center gap-2 ${className}`} aria-hidden="true">
    <span className="traffic-light" style={{ background: "#FF5F56" }} />
    <span className="traffic-light" style={{ background: "#FFBD2E" }} />
    <span className="traffic-light" style={{ background: "#27C93F" }} />
  </div>
);
