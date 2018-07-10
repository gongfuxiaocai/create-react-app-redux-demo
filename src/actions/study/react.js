export const INPUT_CHANGE = "INPUT_CHANGE";

export const handleChangeInput = ( name, value ) => ({
    type: INPUT_CHANGE,
    name,
    value
});