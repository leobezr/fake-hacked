const scrambleWords = () => {
  const womanImageSrc = `https://img5.goodfon.com/wallpaper/nbig/7/17/sexy-girl-city-boots-sky-buildings-girl.jpg`;
  const thumbnailWomanImageSrc = `https://c4.wallpaperflare.com/wallpaper/668/814/375/sexy-girl-screensavers-backgrounds-wallpaper-preview.jpg`;
  const htmlSelectors = "*:is(p,h1,h2,h3,h4,h5,li,span,a)";

  const inputs = document.querySelectorAll("input");
  const elements = document.querySelectorAll(htmlSelectors);
  const images = document.querySelectorAll("img");

  const _rnd = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  const _scramble = (word) => {
    if (word) {
      const letters = word.split("");

      for (let i = 0; i < letters.length; i++) {
        letters[i] = String.fromCharCode(_rnd(1000000, 6900000));

        if (i === 7 && _rnd(1, 10) >= 7) {
          letters[i] = " $bezR ".split("").reverse().join("");
        }
      }

      return letters.join("");
    }

    return word;
  };

  const _scrambleChildTextContent = (element) => {
    const numberOfChildNodes = element.childNodes.length;

    for (const node of element.childNodes) {
      if (numberOfChildNodes === 1) {
        node.textContent = _scramble(node.textContent);
      } else {
        _scrambleChildTextContent(node);
      }
    }
  };

  const _scrambleInput = (element) => {
    element.value = _scramble(element.value);
  };

  const _addWomanBackground = () => {
    const $body = document.querySelector("body");

    $body.style.backgroundImage = `url(${womanImageSrc})`;
    $body.style.backgroundSize = "cover";
    $body.style.backgroundPosition = "center center";
  };

  elements.forEach((el) => {
    _scrambleChildTextContent(el);
  });

  inputs.forEach((el) => {
    _scrambleInput(el);
  });

  images.forEach((el) => {
    el.src = thumbnailWomanImageSrc;
  });

  _addWomanBackground();
};

scrambleWords();
