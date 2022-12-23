import { animate, scroll, inView } from "motion";

const items = document.querySelectorAll("li");
// Progress bar representing gallery scroll
scroll(animate(".progress", { scaleX: [0, 1] }), {
  target: document.querySelector("section")
});

const myObserver = new IntersectionObserver(
  (elements) => {
    if (elements[0].intersectionRatio !== 0) {
      console.log("The element is in view!", elements[0]);
      animate(
        elements[0].target.querySelector(".info"),
        { opacity: [0, 1] },
        { duration: 2 }
      );
    } else {
      console.log("The element is out of view");
    }
  },
  {
    rootMargin: "-500px"
  }
);

// Image title parallax
const segmentLength = 1 / items.length;
items.forEach((item, i) => {
  const info = item.querySelector(".info");
  const background = item.querySelector(".background");
  scroll(animate(background, { y: [-i * 190, 0] }), {
    target: document.querySelector("section"),
    offset: [[i * segmentLength - 1, 1], [(i * segmentLength + 0.5, 0)]]
  });
  myObserver.observe(item);
});
