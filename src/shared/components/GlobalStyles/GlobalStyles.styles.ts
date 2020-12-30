import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	*,
	*:before,
	*:after {
	box-sizing: border-box;
	}

	html {
	font-size: 62.5%;
	height: 100%;
	}

	body {
	font-family: Arial, sans-serif;
	font-size: 1.6rem;
	line-height: 1.5;
	}

	img {
	display: inline-block;
	height: auto;
	max-width: 100%;
	}

	ul,
	li {
	padding: 0;
	list-style-type: none;
	}

`;
