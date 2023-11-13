import { iconsAssets } from "./iconAssets.js";

function createSvg({
  name = "",
  image,
  button,
  height = "40px",
  width = "40px",
  className,
}) {
  let svgCode = "";
  if (image) {
    svgCode = `<img name=${name} src=${`${image}`} alt=${name} style="height:${height}; width:${width}"/>`;
  } else {
    svgCode = iconsAssets[`${name}`]({ className, name });
  }
  if (button) {
    button.href
      ? (svgCode += `<a href=${button.href}>
    <span name=${name}>${button.text}</span>
    </a>`)
      : (svgCode += `<span name=${name}>${button.text}</span>`);
    button.list
      ? (svgCode += iconsAssets.arrowDown({ className, name }))
      : null;
  }
  return svgCode;
}

export default createSvg;
