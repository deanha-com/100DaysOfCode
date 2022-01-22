// const artboard = document.querySelector(".artboard");

// artboard.addEventListener("click", function (e) {
//   //   alert(e.target);
// });

function saveImage () {
  var node = document.getElementById('capture')
  // saveAs PNG
  domtoimage
    .toBlob(document.getElementById('capture'), {
      height: node.clientHeight,
      width: node.clientWidth
    })
    .then(function (blob) {
      window.saveAs(blob, 'gradient-image-maker.png')
    })

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

/**
 * slider adjustments
 **/

function setAdjustments (target) {
  targetEl = document.querySelector(target)

  targetEl.addEventListener('input', e => {
    console.log('-----', e.target.value)
    console.log('----->>>', e.target.name)
    e.target.nextElementSibling.innerText = e.target.value + '****'
    // targetEl.textContent = e.targetEl.value

    switch (e.target.name) {
      case 'blur':
        value = e.target.value + 'px';
        break
      case 'hue-rotate':
        value = e.target.value + 'deg';
        break

      default:
        value = e.target.value;
        break
    }

    let regrxpattern = /([a-zA-Z_{1}][-a-zA-Z0-9_]+)\(([^)]+)\)/g // for matching the filter properties we want to replace
    

    // artboard.style.filter.replace('blur','-------');
    aaa = artboard.style.filter.replaceAll(e.target.name,'_');
    console.log('pppppppppppp ',aaa)

    artboard.style.filter = `${e.target.name}(${value})`;
    // artboard.style.filter = `${artboard.style.filter} ${e.target.name}(${value})`;

    // artboard.style.filter =
    // `contrast(141)
    // hue-rotate(${e.target.value} deg)
    // blur(${e.target.value}px)
    // contrast(${e.target.value})
    // brightness(${e.target.value})
    // `;
    console.log(e.target.value)
    console.log('>>>>')
  })
}

setAdjustments('.control_group')

// -----------------------------------------------------------------

const hueSlider = document.querySelector('#hue_rotate')
const artboard = document.querySelector('.artboard')

// hueSlider.addEventListener('input', e => {
//   hueSlider.nextElementSibling.innerText = e.target.value
//   artboard.style.filter =
//     'contrast(141) blur(' +
//     sizeSlider.nextElementSibling.innerText +
//     'px) hue-rotate(' +
//     e.target.value +
//     'deg)'
//   console.log(e.target.value)
// })

// const sizeSlider = document.querySelector('#blur')
// const sizeVal = document.querySelector('.size_val')

// sizeSlider.addEventListener('input', e => {
//   // sizeVal.textContent = e.target.value
//   sizeSlider.nextElementSibling.innerText = e.target.value
//   artboard.style.filter =
//     'contrast(141) blur(' +
//     e.target.value +
//     'px) hue-rotate(' +
//     hueSlider.nextElementSibling.innerText +
//     'deg)'
//   console.log(e.target.value)
// })

const favcolor = document.querySelector('#favcolor')
favcolor.addEventListener('input', e => {
  console.log(e.target.value)
  document.querySelector('.red').style.backgroundColor = e.target.value
})

/**
 * aspect-ratio
 **/

const aspectRatioButtons = document.querySelectorAll('.aspect_ratios a')
aspectRatioButtons.forEach((v, k) => {
  console.log(v, k)
})

aspectRatioButtons.forEach(element => {
  element.addEventListener('click', e => {
    e.preventDefault()
    console.log(e.target.getAttribute('data-ratio'))
    artboard.style.aspectRatio = e.target.getAttribute('data-ratio')
  })
})

function openCity (evt, cityName) {
  var i, tabcontent, tablinks
  tabcontent = document.getElementsByClassName('tabcontent')
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none'
  }
  tablinks = document.getElementsByClassName('tablinks')
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '')
  }
  document.getElementById(cityName).style.display = 'block'
  evt.currentTarget.className += ' active'
}

function toggleTheme () {
  var element = document.body
  element.classList.toggle('dark')
}
