import { createTheme } from "@mui/material/styles";
import { relative } from "path";

export const theme = createTheme({
	typography: {
		fontSize: 15,

		h1: { fontSize: 32},
		h2: { fontSize: 24},
		h3: { fontSize: 20, fontWeight: 600}
	},

});
export default theme; 