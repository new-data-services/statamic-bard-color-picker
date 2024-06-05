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
        isDarkColor: processedColor.getBrightness() < 55 || processedColor.getAlpha() < 0.25,
        isLightColor: processedColor.getBrightness() > 200 || processedColor.getAlpha() < 0.25,
    }
}
