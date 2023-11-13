import {
  MenuComponentHtml,
  MenuMobileComponentHtml,
} from "./components/Menu/menu.js";
import { MocksMenu } from "./components/Menu/mocksMenu.js";

function useStateClick(defaultValue) {
  let value = defaultValue;

  function getValue() {
    return value;
  }

  function setValue(newValue) {
    console.log(newValue);
    value = newValue;
  }

  return [getValue, setValue];
}

const [desktopOrMobile, setDesktopOrMobile] = useStateClick(false);

const handleOnClick = (e) => {
  if (e.currentTarget.className !== "container-menu show") {
    setDesktopOrMobile(!desktopOrMobile());
    const containerDesktop =
      document.getElementsByClassName("container-menu")[0];
    const containerMobile = document.getElementsByClassName(
      "container-menu-mobile"
    )[0];
    const containerBlur =
      document.getElementsByClassName("blur-menu")[0] ||
      document.getElementsByClassName("blur-menu-show")[0];
    containerDesktop.className = `container-menu ${
      desktopOrMobile() ? "show" : ""
    }`;
    containerMobile.className = `container-menu-mobile ${
      desktopOrMobile() ? "hover" : ""
    }`;
    containerBlur.className = `blur-menu${desktopOrMobile() ? "-show" : ""}`;
    containerBlur.onclick = handleOnClick;
  }
};

let dataMenu = [];
const urlEndpoint = "https://jsonplaceholder.typicode.com/posts";
function updateMenu() {
  fetch(urlEndpoint)
    .then((response) => response.json())
    .then((json) => {
      dataMenu = json;
      renderMenu();
    })
    .catch((err) => {
      console.log("Error in updateMenu dummy", err);
      dataMenu = MocksMenu().dataMenu;
      renderMenu();
    });
}

function renderMenu() {
  const page = document.getElementById("menu");
  const menuDesktop = MenuComponentHtml(dataMenu);
  menuDesktop.className = `container-menu`;
  menuDesktop.onclick = handleOnClick;
  const menuMobile = MenuMobileComponentHtml();
  menuMobile.className = `container-menu-mobile`;
  menuMobile.onclick = handleOnClick;
  page.appendChild(menuDesktop);
  page.appendChild(menuMobile);
}

updateMenu();
