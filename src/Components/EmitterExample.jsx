// src/components/EmitterExample.jsx
import React, { useEffect } from "react";
import { EventEmitter } from "events";

// Create a global emitter (can also be inside a component)
const emitter = new EventEmitter();

const EmitterExample = () => {
  useEffect(() => {
    // Subscribe to the "notify" event
    emitter.on("notify", handleNotify);

    // Cleanup on unmount
    return () => {
      emitter.off("notify", handleNotify);
    };
  }, []);

  const handleNotify = (msg) => {
    alert(msg); // or console.log(msg)
  };

  const sendNotification = () => {
    emitter.emit("notify", "Hello from browser-safe EventEmitter!");
  };

  return (
    <div className="p-4">
      <button
        onClick={sendNotification}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Send Notification
      </button>
    </div>
  );
};

export default EmitterExample;
