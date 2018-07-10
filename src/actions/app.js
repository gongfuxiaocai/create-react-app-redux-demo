export const APP_INPUT_CHANGE = "APP_INPUT_CHANGE";

export const _changeInput = ( name, value ) => ({
    type: APP_INPUT_CHANGE,
    name,
    value,
});