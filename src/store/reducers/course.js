const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: "Iniciando modulo de react",
      lessons: [
        { id: 1, title: "Primeira AUla" },
        { id: 2, title: "Segunda AUla" },
        { id: 3, title: "Terceira AUla" },
      ],
    },
    {
      id: 2,
      title: "Segundo modulo",
      lessons: [
        { id: 1, title: "Primeira AUla" },
        { id: 2, title: "Segunda AUla" },
        { id: 3, title: "Terceira AUla" },
      ],
    },
  ],
};

export default function course(state = INITIAL_STATE, action) {
  if (action.type === "TOGGLE_LESSON") {
    return {
      ...state,
      activeLesson: action.lesson,
      activeModule: action.module,
    };
  }

  return state;
}
