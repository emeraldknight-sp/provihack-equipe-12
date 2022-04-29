import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, b, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	vertical-align: baseline;
	font-size: 100%;
	margin: 0;
	padding: 0;
	border: 0;
  box-sizing: border-box;
	font: inherit;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

body, 
button, 
input, 
textarea, 
select {
  font-family: var(--fontfamily-body);
}

:root {
  --primary-color: #22B14C;
  --secondary-color: ;

  --gray-4: ;
  --gray-3: ;
  --gray-2: ;
  --gray-1: ;
  --gray-0: ;

  --button: ;
  --button--negative: ;
  --border: ;

  --fontfamily-body: "Lato", sans-serif;
  --fontfamily-decorative: "Playfair Display", serif;

  --fontsize-h1: 2rem;
  --fontsize-h2: calc(var(--fontsize-h1) - 25%);
  --fontsize-h3: calc(var(--fontsize-h2) - 25%);
  --headline: 0.75rem;
  --body: 1rem;
}

`;
 
export default GlobalStyle;