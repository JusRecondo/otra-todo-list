export const checkLang = () => {
    let userLangCode = navigator.language || navigator.userLanguage;

    const spanishCodes = ['es-AR', 'es-BO', 'es-CL', 'es-CO', 'es-CR', 'es-DO', 'es-EC', 'es-ES', 'es-GT', 'es-HN', 'es-MX', 'es-NI', 'es-PA', 'es-PE', 'es-PR', 'es-PY', 'es-SV', 'es-US', 'es-UY', 'es-VE'];

    let language = spanishCodes[spanishCodes.indexOf(userLangCode)];

    if(language) {
        language = 'spanish';
    } else {
        language = 'english';
    }
    
    return language;
}

export const languages = {
    spanish: {
        mainTitle: 'lista de tareas',
        listTitle: 'tareas',
        formBtn: 'agregar tarea',
        inputPlaceholder: 'escribe una tarea...'
    },
    english: {
        mainTitle: 'to-do list',
        listTitle: 'tasks',
        formBtn: 'add task',
        inputPlaceholder: 'write a task...'
    }
};

