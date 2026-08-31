import { useEffect } from "react";
import { useLocation } from "react-router";

export default function RouteFocus() {
  const { pathname } = useLocation();

  useEffect(() => {
    const focusTarget = document.querySelector("[data-route-focus]");
    focusTarget?.focus();
  }, [pathname]);

  return null;
}