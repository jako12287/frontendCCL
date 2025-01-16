/* eslint-disable @typescript-eslint/no-explicit-any */
export const CustomAlertLogOut = async (
  dispatch: any,
  logout: any,
  navigate: any
) => {
  const confirmLogout = window.confirm(
    "¿Estás seguro de que deseas cerrar sesión?"
  );
  if (confirmLogout) {
    try {
      await dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  }
};
