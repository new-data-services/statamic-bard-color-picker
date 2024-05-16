import tinycolor from 'tinycolor2'

export function isLightColor(color) {
    const processedColor = tinycolor(color)

    if (! processedColor.isValid()) {
        return false
    }

    return processedColor.getBrightness() > 175 || processedColor.getAlpha() < 0.25
}
