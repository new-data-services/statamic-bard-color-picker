import tinycolor from 'tinycolor2'

export function inspectColor(color) {
    const processedColor = tinycolor(color)

    if (! processedColor.isValid()) {
        return {
            isDarkColor: false,
            isLightColor: false,
        }
    }

    return {
        isDarkColor: processedColor.getBrightness() < 60 || processedColor.getAlpha() < 0.25,
        isLightColor: processedColor.getBrightness() > 230 || processedColor.getAlpha() < 0.25,
    }
}

export function covertToHex(color) {
    const processedColor = tinycolor(color.replace(/!important;?/gi, ''))

    if (! processedColor.isValid()) {
        return null
    }

    return processedColor.toHexString()
}
