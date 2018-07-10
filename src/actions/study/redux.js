export const SELECTED_CHANGE = "SELECTED_CHANGE";

export const handleChangeInput = ( name, value ) => ({
    type: SELECTED_CHANGE,
    name,
    value
});