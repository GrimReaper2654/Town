document.addEventListener("DOMContentLoaded", function() {
  // Create the <link>Babylon.js</link> engine
  var canvas = document.getElementById("renderCanvas");
  var engine = new <link>BABYLON.Engine</link>(canvas, true);

  // Create the scene
  var createScene = function() {
    var scene = new <link>BABYLON.Scene</link>(engine);

    // Create a camera
    var camera = new <link>BABYLON.ArcRotateCamera</link>("camera", 0, 0, 10, new <link>BABYLON.Vector3</link>(0, 0, 0), scene);
    camera.attachControl(canvas, true);

    // Create a light
    var light = new <link>BABYLON.HemisphericLight</link>("light", new <link>BABYLON.Vector3</link>(0, 1, 0), scene);

    // Create objects
    var sphere = <link>BABYLON.MeshBuilder</link>.CreateSphere("sphere", { diameter: 2 }, scene);
    var ground = <link>BABYLON.MeshBuilder</link>.CreateGround("ground", { width: 6, height: 6 }, scene);

    return scene;
  };

  // Create the scene
  var scene = createScene();

  // Run the game loop
  engine.runRenderLoop(function() {
    scene.render();
  });

  // Handle window resizing
  window.addEventListener("resize", function() {
    engine.resize();
  });
});
