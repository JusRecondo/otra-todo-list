export const getItemFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

export const setItemInLocalStorage = (key, item) => {
    localStorage.setItem(key, JSON.stringify(item));
};

export const changeBodyClass = (className) => {
    document.body.className = "";
    document.body.classList.add(className);
};
