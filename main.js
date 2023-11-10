import {
  MenuComponentHtml,
  MenuMobileComponentHtml,
} from "./components/Menu/menu.js";
const page = document.getElementById("menu");
page.appendChild(MenuComponentHtml());
page.appendChild(MenuMobileComponentHtml());
function renderMenu() {
  const item = document.getElementById("container-menu");
  const containerLogo = document.getElementsByClassName(
    "container-menu-logo"
  )?.[0];
  item?.addEventListener("mouseenter", enterMouse, false);
  item?.addEventListener("mouseleave", exitMouse, false);

  function removeClick() {
    const searchAllOl = document.querySelectorAll('ol[class*="-ol show"]');
    searchAllOl?.forEach((items) => {
      items.className = items.className.replace(" show", "");
      items.style = "display : none";
    });
    const searchAllDiv = document.querySelectorAll(
      'div[class*="top-icon click"]'
    );
    searchAllDiv?.forEach((items) => {
      items.className = items.className.replace(" click", "");
    });
    const svgElement = document.querySelectorAll(
      'svg.iconDown[style="transform: rotate(180deg);"]'
    );
    svgElement?.forEach((items) => {
      items.style = "transform: rotate(0deg);";
    });
    const searchBlur = document.querySelectorAll('div[class="blur-menu-show"]');
    if (searchBlur[0]) searchBlur[0].className = "";
  }

  function enterMouse() {
    item.setAttribute("style", "width: 271px;position: absolute;top: 0;");
    if (screen?.width >= 1020) {
      const mobileMenu = document.querySelectorAll(
        'div[class*="container-menu-mobile container"]'
      );
      const mobileWidth = document.querySelectorAll(
        'div[class*="container-menu-mobile"]'
      );
      if (mobileWidth[0]) mobileWidth[0].style = "width: 100%";
      if (mobileMenu[0]) mobileMenu[0].style = "display: flex";
      containerLogo.className = "container-menu-logo show";
      item.className = "container-menu show";
    }
  }

  function exitMouse() {
    if (screen?.width >= 1020) {
      removeClick();
      containerLogo.className = "container-menu-logo";
      item.setAttribute("style", "width: 69px;");
      item.className = "container-menu";
    }
  }
}

renderMenu();
