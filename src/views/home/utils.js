import ColorThief from 'colorthief';
import tinycolor from 'tinycolor2';

export function getBackgroundColor(color) {
	const [red, green, blue] = color;

	return `linear-gradient(135deg, rgba(${red},${green},${blue}, 0.5) 0%, rgba(${red},${green},${blue}, 1) 100%)`;
}

export function getColor(img) {
	const colorThief = new ColorThief();
	const rgb = colorThief.getColor(img);

	const isColorLight = tinycolor(`rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`).isLight();

	return tinycolor(`rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`)
		.darken(isColorLight ? 60 : 20)
		.toRgb();
}
