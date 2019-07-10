let nextIdentifier = 0;

export const add_todo = item => {
    return {
      type: "ADD_TODO",
      text: item,
      id: nextIdentifier++
    };
};

export const toggle_todo = id => {
    return {
        type: "TOGGLE_TODO",
        id
    };
};

export const setVisibilityFilter = filter => {
    return {
        type: "SET_VISIBILITY_FILTER",
        filter
    };
};