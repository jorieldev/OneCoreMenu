import createSvg from "./icons/files.js";
import { createList } from "../List/index.js";
import { MocksMenu } from "./mocksMenu.js";
const stylesInComponent = `
.dashboard{
  height: auto;
    min-height: 100vh;
}
#menu {
  z-index: 99;
  min-height: 100%
}

#section {
  width: calc(100% - 69px);
  height: 100%;
  position: absolute;
  z-index: 0;
  left: 70px;
  background: #eff0f9;
}

.container-menu {
  width: 69px;
  height: 100%;
  background-color: var(--color-background-primary);
  display: flex;
  flex-direction: column;
}

.container-menu-mobile {
  display: none;
}

.container-menu div {
  margin: 0px 6px;
}

.container-menu-logo,
.container-menu-logo-full {
  margin: 22px 15px 18px 14px !important;
  width: 40px;
  height: 40px;
  justify-content: center;
  display: flex;
  align-items: center;
}

div.divider-top,
div.divider-bottom {
  border: none;
}
.divider-top,
.divider-bottom {
  margin: 0 13px 0 12px;
  border: solid #c9c9c9 0.8px;
  margin-block: 0;
}

.divider-bottom {
  margin-top: 117px;
}

.container-menu .top-avatar {
  margin: 16px auto 102px 16px;
  display: flex;
  text-align: center;
  text-align: -webkit-center;
  align-items: center;
}
.container-menu .top-avatar span {
  margin-left: 5px;
  font-size: 14px;
  font-weight: 700;
  line-height: 32px;
  word-wrap: break-word;
  width: 169px;
}

.container-menu .top-icon {
  margin-left: 14px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 500;
  line-height: 32px;
  word-wrap: break-word;
  width: max-content;
}

.container-menu .bottom-icon {
  margin-left: 14px;
  margin-top: 13px;
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 16px;
  font-weight: 500;
  line-height: 32px;
  word-wrap: break-word;
}

.container-menu ol {
  display: block;
  margin-left: 83.5px;
  font-size: 12px;
  font-family: Poppins;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.5px;
  word-wrap: break-word;
  list-style: none;
}

.container-menu .top-icon.bottom {
  margin-bottom: 440px;
}

.container-menu .menu-list {
  display: flex;
  margin: 0;
  flex-direction: column;
  cursor: pointer;
}

.blur-menu-show {
  display: none;
  width: 0;
  height: 0;
}

/* HOVER OR FOCUS IN MENU */

.container-menu:hover {
  width: 271px;
  min-height: 100%;
  height: auto;
  background-color: var(--color-background-primary);
  display: flex;
  flex-direction: column;
}

.container-menu .top-avatar a,
.container-menu .top-icon .icon-down,
.container-menu .top-icon span,
.container-menu ol,
.container-menu .bottom-icon .icon-down,
.container-menu .bottom-icon span,
.container-menu .container-menu-logo-full {
  display: none;
}

.container-menu .top-icon:hover,
.container-menu .top-icon:hover span,
.container-menu .top-icon:hover svg path,
.container-menu .bottom-icon:hover,
.container-menu .bottom-icon:hover span,
.container-menu .bottom-icon:hover svg path,
.container-menu ol li:hover a,
.container-menu .menu-list.active,
.container-menu .menu-list.active span,
.container-menu .menu-list.active svg path {
  stroke: var(--color-text-secondary);
  color: var(--color-text-secondary);
}

.container-menu .top-icon:focus svg.icon-down path,
.container-menu .top-icon:hover svg.icon-down path,
.container-menu .bottom-icon:focus svg.icon-down path,
.container-menu .bottom-icon:hover svg.icon-down path,
.container-menu .menu-list.active svg.icon-down path {
  stroke: none;
  fill: var(--color-text-secondary);
}

.container-menu:hover .top-avatar a,
.container-menu:hover .top-icon span,
.container-menu:hover .bottom-icon span,
.container-menu:hover .menu-list .top-icon .icon-down,
.container-menu:hover .menu-list .bottom-icon .icon-down,
.container-menu:hover .menu-list.active ol,
.container-menu:hover .container-menu-logo-full {
  display: block;
}
.container-menu:hover .container-menu-logo {
  display: none;
}
.container-menu:hover .menu-list.active .top-icon .icon-down,
.container-menu:hover .menu-list.active .bottom-icon .icon-down {
  transform: rotate(180deg);
}

root{
  height: 100%;
}

/* END HOVER OR FOCUS IN MENU */
`;

const stylesInComponentResponsive = `
@media (max-width: 834px) {
  #menu {
    width: 100%;
  }
  #section {
    width: 100%;
    left: 0;
  }
  .container-menu,
  .container-menu.show .container-menu-logo {
    display: none;
  }
  .container-menu-mobile {
    display: block;
    background: var(--color-background-primary);
    position: absolute;
    top: 0;
    width: 100%;
    height: 55px;
  }
  .container-menu-mobile .menu-hamburguer svg {
    position: absolute;
    left: 16px;
    top: 13px;
  }
  .container-menu-mobile .logo-one-core-short {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 55px;
  }
  .container-menu.show {
    display: block;
    position: fixed;
    width: 271px;
    min-height: 100vh;
    height: 100%;
    background-color: var(--color-background-primary);
    display: flex;
    flex-direction: column;
  }
  .container-menu.show .top-avatar a,
  .container-menu.show .top-icon span,
  .container-menu.show .bottom-icon span,
  .container-menu.show .menu-list .top-icon .icon-down,
  .container-menu.show .menu-list .bottom-icon .icon-down,
  .container-menu.show .menu-list.active ol,
  .container-menu.show .container-menu-logo-full {
    display: block;
  }
  .container-menu.show .menu-list.active .top-icon .icon-down,
  .container-menu.show .menu-list.active .bottom-icon .icon-down {
    transform: rotate(180deg);
  }

  .container-menu-mobile.hover {
    display: none;
  }
  .blur-menu-show {
    width: 100%;
    background: var(--color-background-blur);
    height: 100%;
    left: 271px;
    position: fixed;
    z-index: 2;
    display: block;
  }
}

@media (max-height: 1000px) {
  .container-menu .top-avatar {
    margin: 16px auto auto 16px;
  }

  .container-menu .divider-bottom {
    margin-top: auto;
  }
}

@media (min-height: 1500px) {
  .container-menu .top-avatar {
    margin: 16px auto auto 16px;
  }

  .container-menu .divider-bottom {
    margin-top: auto;
  }
}
@media (max-height: 776px) {
  .container-menu {
    height: min-content;
  }
}
`;

function useState(defaultValue) {
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

const onClickHandler = (e) => {
  const [listOpenData, setListOpenData] = useState([]);
  const nameOption = e?.target?.id || e?.target?.getAttribute("name");
  const selectOptionInMenu = document?.getElementById(
    `${nameOption}-ol`
  )?.parentElement;
  if (!selectOptionInMenu?.className?.includes("active")) {
    setListOpenData([...listOpenData(), nameOption]);
    selectOptionInMenu.className += " active";
  } else {
    setListOpenData(listOpenData()?.filter((item) => item !== nameOption));
    selectOptionInMenu.className = selectOptionInMenu.className?.replace(
      " active",
      ""
    );
  }
};

const MenuMobileComponentHtml = () => {
  const containerMobile = document.createElement("div");
  containerMobile.innerHTML = `
  <div class="menu-hamburguer">
  ${createSvg({ name: "menuHamburguer", className: "menu-hamburguer" })}
  </div>
  <div class="logo-one-core-short" >
  ${createSvg({ name: "logoOneCoreShort", className: "logo-one-core-short" })}
  </div>
  `;
  return containerMobile;
};

const MenuComponentHtml = (dataMenu) => {
  const stylesViews = `${stylesInComponent}
	${stylesInComponentResponsive}`;
  const stylesRoot = document.getElementById("root-styles");
  stylesRoot.innerHTML += stylesViews;
  const divElement = document.createElement("div");
  divElement.id = "container-menu";
  dataMenu?.forEach((element) => {
    const containerListAndIcon = document.createElement("div");
    const elementIcon = document.createElement("div");
    const { name, className, image, button, width, height } = element;
    elementIcon.className = element.className;
    elementIcon.innerHTML = createSvg({
      name,
      image,
      className,
      button,
      width,
      height,
    });
    elementIcon.id = name;
    if (button?.list) {
      elementIcon.onclick = onClickHandler;
      containerListAndIcon.className = "menu-list";
      containerListAndIcon.appendChild(elementIcon);
      const list = document.createElement("ol");
      list.innerHTML = createList({ dataMenu: dataMenu, nameOption: name });
      list.id = `${name}-ol`;
      list.className = `${name}-ol`;
      containerListAndIcon.appendChild(list);
      divElement.appendChild(containerListAndIcon);
    } else {
      divElement.appendChild(elementIcon);
    }
  });
  return divElement;
};

export { MenuComponentHtml, MenuMobileComponentHtml };
