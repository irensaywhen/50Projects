const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

/**
 * Show initial checkboxes when the browser window is loaded
 */
checkBoxes();

function checkBoxes() {
  /**
   * To show the box when only a part of it is visible,
   * we define the twigget point a bit less
   * than the browser window
   */
  const triggerPoint = (window.innerHeight / 5) * 4;

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerPoint) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}
