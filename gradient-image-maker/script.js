// const artboard = document.querySelector(".artboard");

// artboard.addEventListener("click", function (e) {
//   //   alert(e.target);
// });

function saveImage() {
  var node = document.getElementById("capture");
  // saveAs PNG
  domtoimage
    .toBlob(document.getElementById("capture"), { height: node.clientHeight, width: node.clientWidth })
    .then(function (blob) {
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

const hueSlider = document.querySelector("#hue_range");
const hueVal = document.querySelector(".range_val");
const artboard = document.querySelector(".artboard");
hueSlider.addEventListener("input", (e) => {
  hueVal.textContent = e.target.value;
  artboard.style.filter =
    "contrast(141) blur(" +
    sizeVal.textContent +
    "px) hue-rotate(" +
    e.target.value +
    "deg)";
  console.log(e.target.value);
});

const sizeSlider = document.querySelector("#size_range");
const sizeVal = document.querySelector(".size_val");

sizeSlider.addEventListener("input", (e) => {
  sizeVal.textContent = e.target.value;
  artboard.style.filter =
    "contrast(141) blur(" +
    e.target.value +
    "px) hue-rotate(" +
    hueVal.textContent +
    "deg)";
  console.log(e.target.value);
});

const favcolor = document.querySelector("#favcolor");
favcolor.addEventListener("input", (e) => {
  console.log(e.target.value);
  document.querySelector(".red").style.backgroundColor = e.target.value;
});




const aspectRatioButtons = document.querySelectorAll('.aspect_ratios a');
aspectRatioButtons.forEach((v,k)=>{
  console.log(v,k);


})

aspectRatioButtons.forEach(element => {
  element.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(e.target.getAttribute('data-ratio'));
    artboard.style.aspectRatio = e.target.getAttribute('data-ratio');
  })
});



// aspect-ratio: 16 / 9;