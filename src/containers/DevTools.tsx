import * as React from "react";

// Exported from redux-devtools
import { createDevTools } from "redux-devtools";

// Monitors are separate packages, and you can make a custom one
import DockMonitor from "redux-devtools-dock-monitor";
import LogMonitor from "redux-devtools-log-monitor";

// createDevTools takes a monitor and produces a DevTools component
// Monitors are individually adjustable with props.
// Consult their repositories to learn about those props.
// Here, we put LogMonitor inside a DockMonitor.
// Note: DockMonitor is visible by default.

const dock = (
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-q"
    defaultIsVisible={true}
  >
    <LogMonitor theme="tomorrow" />
  </DockMonitor>
);

const DevTools = createDevTools(dock);

export default DevTools;
