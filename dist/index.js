'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var colors = [
	{
		name: "light-yellow",
		hex: "#dad4bb"
	},
	{
		name: "light-brown",
		hex: "#b4af9a"
	},
	{
		name: "dark-brown",
		hex: "#57544a"
	},
	{
		name: "dark-brown-strip",
		hex: "#4e4b42"
	},
	{
		name: "red-alert",
		hex: "#cd664d"
	}
];
var colors$1 = {
	colors: colors
};

const Icon = styled__default["default"].div`
  z-index: 10;
  width: 5%;
  height: 5%;
  min-width: 20px;
  min-height: 20px;
  background-image: linear-gradient(90deg, #57544a 50%, #57544a 50%, #b4af9a 50%, #b4af9a 100%);
  background-size: 200%;
  transition: .1s linear;
`;
const IconAlt = styled__default["default"].div`
  z-index: 10;
  width: 5%;
  height: 5%;
  min-width: 20px;
  min-height: 20px;
  background-image: linear-gradient(90deg, #b4af9a 50%, #b4af9a 50%, #57544a 50%, #57544a 100%);
  background-size: 200%;
  transition: .1s linear;
`;
const Switch = styled__default["default"].label`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 10;
`;
const ButtonParent = styled__default["default"].div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: left;
  height: 100%;
  width: 100%;
  padding: 10px;
  color: ${colors$1.colors[2].hex};
  background-image: linear-gradient(90deg, #b4af9a 50%, #b4af9a 50%, #57544a 50%, #57544a 100%);
  background-size: 200%;
  transition: .2s linear;
  &:hover{
    background-position: -100%;
    color: ${colors$1.colors[1].hex};
  }
  &:hover ${Icon}{
    background-position: -100%;
  }
`;
const SwitchInput = styled__default["default"].input.attrs({
  type: "checkbox"
})`
width: 0;
height: 0;
opacity: 0;
&:checked + ${ButtonParent}{
  background-position: -100%;
  color: ${colors$1.colors[1].hex};
}
&:disabled + ${ButtonParent}{
  opacity: 0.6;
  pointer-events: none;
}
`;
ButtonParent.defaultProps = {
  theme: {
    main: `1`
  }
};
const Button = ({ text, disabled = false, ...props }) => {
  const [isChecked, setIsChecked] = React__default["default"].useState(false);
  const handleChange = (event) => {
    if (event.target.checked == true) {
      console.log("checked");
      return setIsChecked(true);
    } else {
      console.log("unchecked");
      return setIsChecked(false);
    }
  };
  console.log(isChecked);
  const checker = () => {
    if (isChecked == true) {
      return /* @__PURE__ */ React__default["default"].createElement(IconAlt, null);
    } else {
      return /* @__PURE__ */ React__default["default"].createElement(Icon, null);
    }
  };
  return /* @__PURE__ */ React__default["default"].createElement(Switch, null, /* @__PURE__ */ React__default["default"].createElement(SwitchInput, {
    disabled,
    onChange: handleChange,
    ...props
  }), /* @__PURE__ */ React__default["default"].createElement(ButtonParent, null, checker(), text));
};

const BarParent = styled__default["default"].div`
display: flex;
flex-direction: row;
height: 100%;
`;
const BarItem = styled__default["default"].div`
background-color: ${(props) => props.theme.main};
width: 10px;
height: 100%;
margin-right: 5px;
  &:nth-child(2){
    width: 4px;
  }
`;
BarItem.defaultProps = {
  theme: {
    main: `${colors$1.colors[1].hex}`
  }
};
const theme$1 = {
  main: `${colors$1.colors[2].hex}`
};
const Bar = ({ dark = false, ...props }) => {
  const checker = () => {
    if (dark == false) {
      return /* @__PURE__ */ React__default["default"].createElement(React__default["default"].Fragment, null, /* @__PURE__ */ React__default["default"].createElement(BarItem, null), /* @__PURE__ */ React__default["default"].createElement(BarItem, null));
    } else if (dark == true) {
      return /* @__PURE__ */ React__default["default"].createElement(styled.ThemeProvider, {
        theme: theme$1
      }, /* @__PURE__ */ React__default["default"].createElement(BarItem, null), /* @__PURE__ */ React__default["default"].createElement(BarItem, null));
    }
  };
  return /* @__PURE__ */ React__default["default"].createElement(BarParent, {
    ...props
  }, checker());
};

const WidgetParent = styled__default["default"].div`
  width: 100%;
  height: 100%;
`;
const Header = styled__default["default"].div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  background-color: ${(props) => props.theme.main};
  color: ${(props) => props.theme.color};
  padding: 10px;
`;
const ContentParent = styled__default["default"].div`
  width: 100%;
  height: 100%;
  background-color: #dad4bb;
`;
const Content = styled__default["default"].div`
  width: 100%;
  height: 100%;
  padding: 10px;
`;
Header.defaultProps = {
  theme: {
    main: `${colors$1.colors[1].hex}`,
    color: `${colors$1.colors[2].hex}`
  }
};
const theme = {
  main: `${colors$1.colors[2].hex}`,
  color: `${colors$1.colors[0].hex}`
};
const Widget = ({ dark = false, title, content, ...props }) => {
  const checker = () => {
    if (dark == false) {
      return /* @__PURE__ */ React__default["default"].createElement(Header, null, /* @__PURE__ */ React__default["default"].createElement("div", {
        className: "icon"
      }, "wip icon"), /* @__PURE__ */ React__default["default"].createElement("div", {
        className: "title"
      }, title));
    } else if (dark == true) {
      return /* @__PURE__ */ React__default["default"].createElement(styled.ThemeProvider, {
        theme
      }, /* @__PURE__ */ React__default["default"].createElement(Header, null, /* @__PURE__ */ React__default["default"].createElement("div", {
        className: "icon"
      }, "wip icon"), /* @__PURE__ */ React__default["default"].createElement("div", {
        className: "title"
      }, title)));
    }
  };
  return /* @__PURE__ */ React__default["default"].createElement(WidgetParent, null, checker(), /* @__PURE__ */ React__default["default"].createElement(ContentParent, {
    ...props
  }, /* @__PURE__ */ React__default["default"].createElement(Content, null, content)));
};

const TitleParent = styled__default["default"].div`
  text-shadow: 6px 4px rgba(0, 0, 0, 0.3);
  color: ${colors$1.colors[2].hex};
  letter-spacing: 2px;
`;
const Title = ({ text, ...props }) => {
  return /* @__PURE__ */ React__default["default"].createElement(TitleParent, {
    ...props
  }, /* @__PURE__ */ React__default["default"].createElement("h1", null, text));
};

const FooterParent = styled__default["default"].div`
  width: 100%;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: ${colors$1.colors[0].hex};
  align-items: center;
`;
const TextContainer = styled__default["default"].div`
font-size: 24px;
  padding: 0.5rem;
  color: ${colors$1.colors[2].hex};
`;
const Footer = ({ text, ...props }) => {
  return /* @__PURE__ */ React__default["default"].createElement(FooterParent, {
    ...props
  }, /* @__PURE__ */ React__default["default"].createElement(Bar, {
    dark: true
  }), /* @__PURE__ */ React__default["default"].createElement(TextContainer, null, text));
};

exports.Bar = Bar;
exports.Button = Button;
exports.Footer = Footer;
exports.Title = Title;
exports.Widget = Widget;
