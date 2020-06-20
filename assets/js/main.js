/**
 * @param {Element} element
 */
function isHidden(element) {
  return element.offsetParent === null;
}

function getCurrentColorScheme() {
  const colorSchemeElements = document.querySelectorAll(".color-scheme");

  for (let i = 0; i < colorSchemeElements.length; i++) {
    const element = colorSchemeElements.item(i);

    if (!isHidden(element)) {
      return element.textContent;
    }
  }

  return null;
}

function makeAppendColorSchemeToTitle() {
  const title = document.title;

  return function appendColorSchemeToTitle() {
    const colorScheme = getCurrentColorScheme();

    if (!colorScheme) {
      document.title = title;
    } else {
      document.title = `${colorScheme} | ${title}`;
    }
  };
}

window.onload = function onLoad() {
  const appendColorSchemeToTitle = makeAppendColorSchemeToTitle();

  appendColorSchemeToTitle();

  setInterval(appendColorSchemeToTitle, 500);
};
