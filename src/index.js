import { inView, animate } from "motion";

inView(
  "section",
  (info) => {
    const controls = animate(
      info.target.querySelector("span"),
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
      leaveInfo.target.querySelector("span").style.opacity = 0;
    };
  },
  { margin: "0px 0px -50% 0px" }
);
