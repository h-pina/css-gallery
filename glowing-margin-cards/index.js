let hoverAngle = 0;

//make it for every one
const setRotation = (e) => {
  let rect = document.getElementsByClassName("card")[0].getBoundingClientRect();
  let center = [rect.left + rect.width / 2, rect.top + rect.height / 2];

  let xComponent = e.clientX - center[0];
  let yComponent = e.clientY - center[1];
  let angle = (Math.atan2(yComponent, xComponent) * 180) / 3.14;

  angle = Math.round(angle);
  angle += 90;

  let setAngleString = (angle) => angle + "deg";
  document.documentElement.style.setProperty(
    "--rotation",
    setAngleString(angle)
  );
};

document.onmousemove = (e) => setRotation(e);
