const path1 = document.getElementById("path1");
const path2 = document.getElementById("path2");

const listItems = document.querySelectorAll("li.content_block");

const columns1 = document
  .getElementById("ColumnChart1")
  .getElementsByTagName("path");
const columns2 = document
  .getElementById("ColumnChart2")
  .getElementsByTagName("path");
const columns3 = document
  .getElementById("ColumnChart3")
  .getElementsByTagName("path");
const columns4 = document
  .getElementById("ColumnChart4")
  .getElementsByTagName("path");

const length1 = path1.getTotalLength();
const length2 = path2.getTotalLength();

gsap.set([path1, path2], {
  strokeDasharray: length1,
  strokeDashoffset: length1,
});

const line = gsap.timeline();

line
  .to(path1, { duration: 4, strokeDashoffset: 0, ease: "linear" })
  .to(path2, { duration: 4, strokeDashoffset: 0, ease: "linear" }, "-=4");

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

gsap.from(columns1, {
  scaleY: 0,
  transformOrigin: "bottom",
  duration: 1,
  ease: "power4.out",
  stagger: 0.2,
  delay: 0.2,
  scrollTrigger: {
    trigger: columns1,
    toggleAction: "restart none none none",
  },
});

gsap.from(columns2, {
  scaleY: 0,
  transformOrigin: "bottom",
  duration: 1,
  ease: "power4.out",
  stagger: 0.2,
  delay: 0.2,
  scrollTrigger: {
    trigger: columns2,
    toggleAction: "restart none none none",
  },
});

gsap.from(columns3, {
  scaleY: 0,
  transformOrigin: "bottom",
  duration: 1,
  ease: "power4.out",
  stagger: 0.2,
  delay: 0.2,
  scrollTrigger: {
    trigger: columns3,
    toggleAction: "restart none none none",
  },
});

gsap.from(columns4, {
  scaleY: 0,
  transformOrigin: "bottom",
  duration: 1,
  ease: "power4.out",
  stagger: 0.2,
  delay: 0.2,
  scrollTrigger: {
    trigger: columns4,
    toggleAction: "restart none none none",
  },
});
