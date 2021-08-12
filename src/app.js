var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);

var createScene = function () {
  const scene = new BABYLON.Scene(engine);
  scene.clearColor = new BABYLON.Color3.Black();

  const alpha = Math.PI;
  const beta = Math.PI;
  const radius = 5;

  const camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 0);
  camera.setPosition(new BABYLON.Vector3(alpha, beta, radius));
  camera.attachControl(canvas, true);

  const light = new BABYLON.HemisphericLight(
    "light",
    new BABYLON.Vector3(1, 1, 0)
  );

  //   const box = BABYLON.MeshBuilder.CreateBox("box", {});
  //   box.position.x = 0.5;
  //   box.position.y = 1;
  BABYLON.SceneLoader.ImportMeshAsync(
    "",
    "../public/assets/3d/",
    "MaleSMPLXWithSkeleton.gltf"
  );
  //   .then((result) => {
  //     // result.meshes[1].position.x = 20;
  //     // const myMesh_1 = scene.getMeshByName("myMesh_1");
  //     // myMesh1.rotation.y = Math.PI / 2;
  //   });
  scene.debugLayer.show();

  return scene;
};

var sceneToRender = createScene();
engine.runRenderLoop(function () {
  sceneToRender.render();
});
