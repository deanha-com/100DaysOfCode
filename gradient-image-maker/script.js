// const artboard = document.querySelector(".artboard");

// artboard.addEventListener("click", function (e) {
//   //   alert(e.target);
// });

// function draw() {
//   var canvas = document.getElementById("canvas");
//   if (canvas.getContext) {
//     var ctx = canvas.getContext("2d");
//     ctx.filter = "blur(50px) invert(1)";

//     // // Moved square
//     // ctx.translate(110, 30);
//     // ctx.fillStyle = "gold";
//     // ctx.fillRect(50, 100, 180, 80);

//     // // Reset current transformation matrix to the identity matrix
//     // ctx.setTransform(1, 0, 0, 1, 0, 0);

//     // // Unmoved square
//     // ctx.fillStyle = "#7fe8f3ab";
//     // ctx.fillRect(0, 0, 80, 80);

//     // -----------------------------------------------------------------------

//     // var rectangle = new Path2D();
//     // rectangle.rect(10, 10, 50, 50);

//     // var circle = new Path2D();

//     // // pos-x, pos-y, size, 0
//     // circle.arc(150, 150, 65, 0, 2 * Math.PI);

//     // ctx.stroke(rectangle);
//     // // ctx.filter = "blur(15px)";
//     // ctx.fill(circle);

//     console.log("bbb", canvas);
//   }
// }

// function exportImage() {
//   html2canvas(document.querySelector("#capture .blur"))
//     .then((canvas) => {
//       ctx = canvas.getContext("2d");

//       ctx.filter = "blur(63px) invert(1)";

//       //   ctx.rect(10, 1, 1, 1);

//       const image = document.getElementById("source");
//       ctx.drawImage(image, 400, 0, image.width * 0.6, image.height * 0.6);

//       canvas.id = "exportedCanvas";

//       console.log(ctx);
//       document.body.appendChild(canvas);
//     })
//     .then(() => {
//       const exportedCanvas = document.getElementById("exportedCanvas");
//       if (canvas.getContext) {
//         var ctx = exportedCanvas.getContext("2d");
//         ctx.filter = "blur(50px) invert(1)";

//         console.log("final ", exportedCanvas);
//       }
//     });
// }

// function blur() {
//   const exportedCanvas = document.getElementById("exportedCanvas");
//   if (canvas.getContext) {
//     const ctx = exportedCanvas.getContext("2d");
//     ctx.filter = "blur(63px) invert(1)";
//     console.log("sss", exportedCanvas);
//   }
// }

// setTimeout(() => {
//   exportImage();
// }, 1000);

// setTimeout(() => {
//   const canvas = document.getElementById("canvas");

//   const ctx = canvas.getContext("2d");
//   // const exportedCanvas = document.getElementById("exportedCanvas");
//   const image = document.getElementById("exportedCanvas");
//   // const image = document.getElementById('source');

//   image.addEventListener("click", (e) => {
//     // Draw unfiltered image
//     ctx.drawImage(image, 0, 0, image.width * 0.6, image.height * 0.6);

//     // Draw image with filter
//     ctx.filter = "contrast(1.4) sepia(1) blur(0px)";
//     ctx.drawImage(image, 500, 350, -image.width * 1.5, image.height * 0.6);
//   });
//   console.log("we ran");
// }, 3000);

function saveImage() {
  var node = document.getElementById("capture");
  // saveAs PNG
  domtoimage.toBlob(document.getElementById("capture"), { height: 800, width: 800 }).then(function (blob) {
      window.saveAs(blob, "gradient-image-maker.png");
  });

//   domtoimage
//     .toPng(node, { height: node.clientHeight, width: node.clientWidth })
//     .then(function (dataUrl) {
//       var img = new Image();
//       img.src = dataUrl;
//       document.body.appendChild(img);
//     })
//     .catch(function (error) {
//       console.error("oops, something went wrong!", error);
//     });
}
