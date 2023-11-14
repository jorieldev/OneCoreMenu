export const MocksMenu = () => ({
  dataMenu: [
    {
      name: "logoOneCoreShort",
      className: "container-menu-logo",
    },
    {
      name: "logoOneCore",
      className: "container-menu-logo-full",
    },
    {
      name: "divider",
      className: "divider-top",
    },
    {
      name: "avatar",
      className: "top-avatar",
      image:
        "https://res.cloudinary.com/joriel/image/upload/v1677032576/qmsfvshattwpzw1tawk7.png",
      button: {
        text: "Nombre de la empresa",
        href: "#",
      }
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
        list: [
          {
            text: "Lorem Ipum",
            href: "#",
          },
          {
            text: "Lorem Ipum",
            href: "#",
          },
        ],
      },
    },
    {
      name: "file",
      className: "top-icon",
      button: {
        text: "Catálogos Safe",
        list: [
          {
            text: "Lorem Ipum",
            href: "#",
          },
          {
            text: "Lorem Ipum",
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
      name: "divider",
      className: "divider-bottom",
    },
    {
      name: "userAvatar",
      className: "bottom-icon",
      button: {
        text: "Mi perfil",
        list: [
          {
            text: "Lorem Ipum",
            href: "#",
          },
          {
            text: "Lorem Ipum",
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
  ],
});
