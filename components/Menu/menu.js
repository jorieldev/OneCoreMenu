import createSvg from "./icons/files.js";

const stylesInComponent = `
#menu {
  z-index: 2;
}

#section{
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
  left: 70px;
  background: #EFF0F9;
}

.container-menu {
  width: 69px;
  height: 100dvh;
  background-color: white;
  display: flex;
  flex-direction: column;
}

.container-menu p:focus,
.container-menu p:hover {
  filter: invert(75%) sepia(24%) saturate(4894%) hue-rotate(131deg)
    brightness(91%) contrast(101%);
}
.container-menu div {
  margin: 0px 6px;
}

.container-menu-logo svg.show{
	display: none;
}

.container-menu-logo.show svg{
	display: none
}

.container-menu-logo.show {
	width: auto;
	height: auto;
}

.container-menu-logo.show svg.show{
	display: block;
}

.container-menu div span {
	display: none;
}


.container-menu.show div span {
	display: block;
}

.container-menu-logo {
  margin: 22px 15px 18px 14px!important;
	width: 40px;
	height: 40px;
	justify-content: center;
	display: flex;
	align-items: center;
}

.container-menu-hr {
  margin: 0 13px 0 12px;
  border: solid #c9c9c9 0.8px;
  margin-block: 0;
}

.container-menu-hr.bottom {
  margin: 0 13px 0 12px;
  margin-block: 0;
}

.container-menu #separate{
	margin-top: auto;
	margin-bottom: 7px;
}

.container-menu .top-avatar {
	margin: 16px auto auto 16px;
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
	word-wrap: break-word
}

.container-menu .top-icon .iconDown{
	display: none;
}
.container-menu.show .top-icon .iconDown{
	display: block;
}


.container-menu .bottom-icon {
	margin-left: 14px;
	margin-top: 6px;
	display: flex;
  align-items: center;
  gap: 20px;
  font-size: 16px;
  font-weight: 500;
  line-height: 32px;
  word-wrap: break-word;
}

.container-menu ol{
	display: block;
	margin-left: 83.5px;
	font-size: 12px;
	font-family: Poppins;
	font-weight: 500;
	line-height: 22px;
	letter-spacing: 0.50px;
	word-wrap: break-word;
	list-style: none;
}
.container-menu ol li:hover{
	color: #00848C;
}
.container-menu .bottom-icon .iconDown{
	display: none;
}

.container-menu.show .bottom-icon .iconDown{
	display: block;
}

.container-menu .top-icon.bottom {
  margin-bottom: 440px;
}


.container-menu .menu-list{
	display: flex;
	margin: 0;
	flex-direction: column;
	cursor: pointer;
}
.container-menu .menu-list .top-icon.click svg path,
.container-menu .menu-list .top-icon.click span
{
	stroke: #00848C;
	color: #00848C;
}

.container-menu-mobile{
  display: none
}

.blur-menu-show{
  display: none;
  width: 0;
  height: 0;
}
`;

const stylesInComponentResponsive = `
@media (max-width: 1020px) {
  .container-menu {
    display: none;
    z-index: 3;
    position: relative;
  }
  #section{
    left: 0;
    top: 55px;
  }
  #menu{
    width: 100%;
    height: 55px;
  }
  .container-menu-mobile, 
  .container-menu-mobile.container{
    height: 55px;
    display: flex;
    align-items: center;
    width:100%;
    position: absolute;
    top: 0;
    background: white;
    z-index: 1;
  }
  .container-menu-mobile, 
  .container-menu-mobile.container{
    height: 55px;
    display: flex;
    align-items: center;
    width:100%;
  }
  .container-menu-mobile .menuHamburguer{
    top: 18px;
    left: 16px;
    position: absolute;
  }
  .container-menu-mobile .logo-short-mobile{
    margin: auto;
  }
  .mobile{
    display: block!important;
  }
  #blurMenu{
    heigth: 0,
    width: 0
  }

  .blur-menu-show{
    width: 100%;
    background: #00000026;
    height: 100%;left: 271px;
    position: absolute;z-index: 2;
    display: block;
  }
}

@media (max-height: 1287px) {
  .container-menu .top-icon.bottom {
    margin-bottom: auto !important;
  }
}
`;

// Data necesaria para pintar el menu
const dataMenu = [
  {
    name: "logoOneCoreShort",
    className: "container-menu-logo",
  },
  {
    name: "separateTop",
  },
  {
    name: "avatar",
    className: "top-avatar",
    image:
      "https://res.cloudinary.com/joriel/image/upload/v1677032576/qmsfvshattwpzw1tawk7.png",
    button: {
      text: "Nombre de la empresa",
      href: "#",
    },
    height: "36px",
    width: "36px",
  },
  {
    name: "securitySearch",
    className: "top-icon",
    button: {
      text: "Safe",
      href: "#",
    },
  },
  {
    name: "sheetEmpty",
    className: "top-icon",
    button: {
      text: "Files",
      href: "#",
    },
  },
  {
    name: "file",
    className: "top-icon",
    button: {
      text: "Catálogos Safe",
      list: [
        {
          text: "Dashboard Files",
          href: "#",
        },
        {
          text: "Others Files",
          href: "#",
        },
      ],
    },
  },
  {
    name: "fileWarning",
    className: "top-icon",
    button: {
      text: "Reportes",
    },
  },
  {
    name: "bookOpen",
    className: "top-icon",
    button: {
      text: "Compulsas",
    },
  },
  {
    name: "sheet",
    className: "top-icon",
    button: {
      text: "Informe Auditoría",
    },
  },
  {
    name: "sheetOk",
    className: "top-icon",
    button: {
      text: "Números Parte",
    },
  },
  {
    name: "separate",
  },
  {
    name: "userAvatar",
    className: "bottom-icon",
    button: {
      text: "Mi perfil",
      list: [
        {
          text: "Datos",
          href: "#",
        },
        {
          text: "Cambios",
          href: "#",
        },
      ],
    },
  },
  {
    name: "security",
    className: "bottom-icon",
    button: {
      text: "Seguridad",
    },
  },
  {
    name: "config",
    className: "bottom-icon",
    button: {
      text: "Configuraciones",
    },
  },
  {
    name: "help",
    className: "bottom-icon",
    button: {
      text: "Soporte",
    },
  },
  {
    name: "exit",
    className: "bottom-icon",
    button: {
      text: "Cerrar Sesión",
    },
  },
];

const createList = (nameOption) => {
  const divElement2 = document.createElement("ol");
  let listOrder = "";
  dataMenu
    ?.filter(({ name }) => name === nameOption)[0]
    ?.button?.list?.map((element) => {
      listOrder += `<li href=${element.href}>${element.text}</li>`;
    });
  return (divElement2.innerHTML = listOrder);
};

const onClickHandler = (e) => {
  const nameOption = e?.target?.id || e?.target?.getAttribute("name");
  const selectOptionInMenu = document?.getElementById(`${nameOption}-ol`);
  const arrowOption = document?.getElementById(nameOption);
  const dropdown = arrowOption?.getElementsByClassName("iconDown");
  console.log(arrowOption);
  if (selectOptionInMenu?.className === `${nameOption}-ol`) {
    selectOptionInMenu.style = "display: block";
    selectOptionInMenu.className = `${nameOption}-ol show`;
    dropdown[0].style = "transform: rotate(180deg);";
    arrowOption.className += ` click`;
  } else {
    selectOptionInMenu.style = "display: none";
    selectOptionInMenu.className = `${nameOption}-ol`;
    dropdown[0].style = "transform: rotate(0);";
    arrowOption.className = arrowOption?.className?.replace(" click", "");
  }
};

const onClickHandlerMobile = (e) => {
  const item = document.getElementById("container-menu");
  const containerLogo = document.getElementsByClassName(
    "container-menu-logo"
  )?.[0];
  const containerMenu = document.getElementsByClassName(
    "container-menu-mobile"
  );
  const blurMenu = document.getElementById("blur-menu");
  const container = document.getElementById("menu-mobile");
  console.log(containerMenu);
  if (containerLogo.className === "container-menu-logo show") {
    container.setAttribute("style", "display: flex");
    item.setAttribute("style", "width: 271px;");
    containerLogo.className = "container-menu-logo";
    item.className = "container-menu";
    containerMenu[0].setAttribute("style", "");
    blurMenu.className = "";
  } else {
    item.setAttribute("style", "width: 271px; display: block");
    container.setAttribute("style", "display: none");
    containerLogo.className = "container-menu-logo show";
    item.className = "container-menu show mobile";
    containerMenu[0].style = "width: 271px";
    blurMenu.className = "blur-menu-show";
    blurMenu.onclick = onClickHandlerMobile;
  }
};

const MenuMobileComponentHtml = () => {
  const containerMobile = document.createElement("div");
  containerMobile.className = "container-menu-mobile";
  containerMobile.innerHTML = `
  <div id='menu-mobile' class="container-menu-mobile container">
    ${createSvg({ name: "menuHamburguer" })}
    ${createSvg({ name: "logoOneCoreShort", mobile: true })}
  </div>
  `;
  containerMobile.onclick = onClickHandlerMobile;
  return containerMobile;
};
const MenuComponentHtml = () => {
  const stylesViews = `${stylesInComponent}
	${stylesInComponentResponsive}`;
  const stylesRoot = document.getElementById("root-styles");
  stylesRoot.innerHTML += stylesViews;
  const divElement = document.createElement("div");
  divElement.id = "container-menu";
  divElement.className = "container-menu";
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
      list.innerHTML = createList(name);
      list.id = `${name}-ol`;
      list.className = `${name}-ol`;
      list.style = "display: none";
      containerListAndIcon.appendChild(list);
      console.log(list);
      divElement.appendChild(containerListAndIcon);
    } else {
      divElement.appendChild(elementIcon);
    }
  });
  return divElement;
};

export { MenuComponentHtml, MenuMobileComponentHtml };
