import { inView, animate } from "motion";

inView(
  "span",
  (info) => {
    const controls = animate(
      info.target,
      {
        opacity: 1,
      },
      { duration: 1 }
    );
    console.log("enters");
    // This will fire when the element leaves the viewport
    return (leaveInfo) => {
      console.log("leaves", leaveInfo);
      controls.stop();
      leaveInfo.target.style.opacity = 0;
    };
  },
  { margin: "-25% 0px -50% 0px" }
);
