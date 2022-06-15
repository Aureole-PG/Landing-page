import { useState, useEffect } from "react";

export const useScrollSpy = () => {
  const [currentTab, setCurrentTab] = useState(null);
  const [currentId, setCurrentId] = useState(null);
  const [sliderStyle, setSliderStyle] = useState({ width: "0px", left: "0px" });

  const currentTabSelector = () => {
    let elements = document.getElementsByClassName("tabs");
    let newCurrentId = null;
    let newCurrentTab = null;
    for (let i = 0; i < elements.length; i++) {
      let hrefValue = elements[i].getAttribute("href");
      if (!hrefValue) continue;
      let idName = hrefValue.slice(1);
      let id = document.getElementById(idName);
      let offsetTop = id?.offsetTop - 70;
      let offsetBottom = id?.offsetTop + id?.offsetHeight - 70;

      if (window.pageYOffset > offsetTop && window.pageYOffset < offsetBottom) {
        newCurrentId = id;
        newCurrentTab = elements[i];
      }
    }
    if (currentId === null || currentId !== newCurrentId) {
      setSlider(newCurrentId, newCurrentTab);
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove("active");
      }
      newCurrentTab.classList.add("active");
    }
  };

  const setSlider = (currentId = null, currentTab = null) => {
    let width = 0;
    let left = 0;

    if (currentTab) {
      setCurrentId(currentId);
      setCurrentTab(currentTab);
    }
    setSliderStyle({ width: `${width}px`, left: `${left}px` });
  };

  useEffect(() => {
    window.addEventListener("scroll", currentTabSelector);
    return () => {
      window.removeEventListener("scroll", () => true);
    };
  }, [currentTab]);

  return { sliderStyle };
};
