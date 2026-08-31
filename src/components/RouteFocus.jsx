import { useEffect } from "react";
import { useLocation } from "react-router";

export default function RouteFocus() {
  const { pathname } = useLocation();

  useEffect(() => {
    const mainElement = document.querySelector("main");

    mainElement?.focus();
  }, [pathname]);

  return null;
}