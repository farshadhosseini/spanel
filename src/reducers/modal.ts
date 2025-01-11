export const actionTypes = {
  details: "details",
  update: "update",
  remove: "remove",
};

export const modalReducer = (
  state: {
    details: boolean;
    update: boolean;
    remove: boolean;
  },
  action: { type: string }
) => {
  switch (action.type) {
    case actionTypes.details:
      return { ...state, details: !state.details };
    case actionTypes.update:
      return { ...state, update: !state.update };
    case actionTypes.remove:
      return { ...state, remove: !state.remove };
    default:
      return state;
  }
};
