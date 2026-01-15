// Trigger all events associated with a scene entry
const scene = canvas.scene;
const triggers = scene.getFlag("greyhaven", "triggers") || [];
triggers.forEach(t => {
    ui.notifications.info(`Trigger: ${t}`);
});