const getActiveSideLinkStyle = ({ isActive }) => ({
  backgroundColor: isActive ? "var(--icon-hover-clr-bg)" : "",
  color: isActive ? "var(--primary-color)" : "",
});
export { getActiveSideLinkStyle };
