const columnCharts = [];

const path1 = document.getElementById("path1");
const path2 = document.getElementById("path2");

const listItems = document.querySelectorAll("li.content_block");

for (let i = 1; i <= 4; i++) {
  const chart = document
    .getElementById(`ColumnChart${i}`)
    .getElementsByTagName("path");
  columnCharts.push(chart);
}

const length1 = path1.getTotalLength();
const length2 = path2.getTotalLength();

gsap.set([path1, path2], {
  strokeDasharray: length1,
  strokeDashoffset: length1,
});

const line = gsap.timeline();

line
  .to(path1, { duration: 4, strokeDashoffset: 0, ease: "power1.in" })
  .to(path2, { duration: 4, strokeDashoffset: 0, ease: "power1.in" }, "-=4");

for (let i = 1; i < listItems.length; i += 2) {
  const listItem = listItems[i];
  const children = Array.from(listItem.children);

  children.reverse();

  while (listItem.firstChild) {
    listItem.removeChild(listItem.firstChild);
  }

  for (const child of children) {
    listItem.appendChild(child);
  }
}

gsap.registerPlugin(ScrollTrigger);

for (let i = 0; i < columnCharts.length; i++) {
  gsap.from(columnCharts[i], {
    scaleY: 0,
    transformOrigin: "bottom",
    duration: 1,
    ease: "power4.out",
    stagger: 0.2,
    delay: 0.2,
    scrollTrigger: {
      trigger: columnCharts[i],
      toggleAction: "restart none none none",
    },
  });
}
