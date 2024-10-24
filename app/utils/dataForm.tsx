export const inputFields = [
  {
    required: true,
    helperText: "Ingresa tu nombre de usuario",
    type: "text",
    id: "username",
    label: "Nombre de Usuario",
  },
  {
    required: true,
    helperText: "",
    type: "email",
    id: "email",
    label: "Correo Electrónico",
  },
  {
    required: true,
    helperText: "",
    type: "email",
    id: "email",
    label: "Confirma tu correo",
  },
  {
    required: true,
    helperText:
      "Tu contraseña debe tener entre 9 y 16 caracteres e incluir números y letras",
    type: "password",
    id: "password",
    label: "Ingrese su contraseña",
  },
  {
    required: true,
    helperText: "",
    type: "password",
    id: "password",
    label: "Confirmar contraseña",
  },
];

export const checkboxData = [
  {
    content: "Entiendo y acepto los términos y condiciones. Obligatorio",
  },
  {
    content:
      "Quiero recibir notificaciones al correo sobre actualizaciones, promociones e información de los desarrolladores.",
  },
];

export const urlRegister = "https://dev.timbax.peryloth.com/api/register";
export const urlLogin = "https://dev.timbax.peryloth.com/api/login";

//Cambiar width del boton del login a 225px, modifcar el height del formulario de registro...EVITAR QUE SALGA EL SCROOL
