
// File:        enum.js
// Project:     lair
// Author:      RedFoxFinn
// Description: Self made "enums" using Object.freeze()
// Import:      import {shade, deviceType} from '...'
// Usage:       const device = deviceType.DESKTOP; 

export const shade = Object.freeze({
    LIGHT: 'light',
    DARK: 'dark'
});

export const deviceType = Object.freeze({
    DESKTOP: 'desktop',
    TABLOID: 'tabloid',
    MOBILE: 'mobile'
});