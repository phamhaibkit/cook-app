export const IMG = {
  bookmark : require('../../assets/book-mark.png'),
  logo : require('../../assets/logo.png'),
  tet: require('../../assets/tet.jpg'),
}

export const ASYNC_STORAGE = {
	INTRO: 'INTRO',
};

export const CSS = {
  _padding: (top, right, bottom, left) => {
		return {
			paddingTop: top,
			paddingRight: right,
			paddingBottom: bottom,
			paddingLeft: left,
		};
	},
	_margin: (top, right, bottom, left) => {
		return {
			marginTop: top,
			marginRight: right,
			marginBottom: bottom,
			marginLeft: left,
		};
	}
}

export default {
	IMG,
  ASYNC_STORAGE,
  CSS
};
