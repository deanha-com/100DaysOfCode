const artboard = document.querySelector(".artboard");
const color_1 = document.querySelector('#color_1')

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
 * Slider Adjustments
 **/

function getAdjustmentValue (prop) {
  return document.querySelector('[name=' + prop + ']').nextElementSibling
    .innerText
}

function setAdjustments (target) {
  targetEl = document.querySelector(target)

  targetEl.addEventListener('input', e => {
    console.log('----->>>', e.target.name)
    console.log('----->>>', e.target.value)
    e.target.nextElementSibling.innerText = e.target.value
    // targetEl.textContent = e.targetEl.value

    console.log('=================== ', e)

    switch (e.target.name) {
      case 'blur':
        value = e.target.value + 'px'
        break
      case 'hue-rotate':
        value = e.target.value + 'deg'
        break

      default:
        value = e.target.value
        break
    }

    // FILTERS
    artboard.style['-webkit-filter'] = `
      contrast(${+getAdjustmentValue('contrast')})
      blur(${+getAdjustmentValue('blur')}px)
      hue-rotate(${+getAdjustmentValue('hue-rotate')}deg)
      saturate(${+getAdjustmentValue('saturate')})
      blur(${+getAdjustmentValue('blur')/5}px)
    `

    // TRANSFORMS
    artboard.style['transform'] = `
      scale(${+getAdjustmentValue('scale')})
      rotate(${+getAdjustmentValue('rotate')}deg)
      translateX(${+getAdjustmentValue('translateX')}%)
      translateY(${+getAdjustmentValue('translateY')}%)
      skewX(${+getAdjustmentValue('skewX')}deg)
      skewY(${+getAdjustmentValue('skewY')}deg)
    `
  })
}
setAdjustments('.control_group')


/**
 * color-node-change
 **/

 color_1.addEventListener('input', e => {
  console.log(e.target.value)
  document.querySelector('.layer_1').style.backgroundColor = e.target.value
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


/**
 * Tabs & Toggles
 **/
function toggleTabs (evt, tabName) {
  var i, tabcontent, tablinks
  tabcontent = document.getElementsByClassName('tabcontent')
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none'
  }
  tablinks = document.getElementsByClassName('tablinks')
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '')
  }

  document.getElementById(tabName).style.display = 'block'
  evt.currentTarget.className += ' active'
}

function toggleTheme () {
  var element = document.body
  element.classList.toggle('dark')
}
