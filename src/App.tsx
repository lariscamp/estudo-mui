import { Grid, TextField, MenuItem, Select, InputLabel, Button, FormControl, FormControlLabel, Checkbox } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { FavoriteBorder, Favorite } from '@mui/icons-material';
import { Box } from '@mui/system'
import './App.css'
import './theme.css'
import { pink } from '@mui/material/colors';


// * ----------------------- THEME ------------------------

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "50px"
        },
      },
    },
  },
});




// * ------------------ THEME - FIM ------------------------

function App() {
  return (
    <ThemeProvider theme={theme}>
      <main className="App">
        <Grid container alignItems="center" sx={{ backgroundColor: "#EBEBEB" }}>
          <Box component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              margin: "2em auto",
              padding: "2em",
              backgroundColor: "#fff",
              borderRadius: "8px",
              gap: "24px",
              boxShadow: "0px 8px 16px 0px #0000001A"

            }}>

            <TextField fullWidth={true} id="nome" required label="nome" name="nome" />
            <TextField fullWidth={true} id="email" required label="email" name="email" />
            <FormControlLabel control={<Checkbox sx={{
              color: pink[800],
              '&.Mui-checked': {
                backgroundImage: 'linear-gradient(180deg,red,yellow)',
                '&:before': {
                  display: 'absolute',
                  width: 16,
                  height: 16,
                  backgroundImage: 'linear-gradient(180deg,red,yellow)',
                  content: '""'
                },

              }
            }} />} label="Assina Newsletter?" />

            <FormControl fullWidth={true}>
              <InputLabel id="selecao-genero-label">Gênero:</InputLabel>
              <Select labelId="selecao-genero-label" id="selecao-genero" label="Gênero" >
                <MenuItem value={"feminino"}>Feminino</MenuItem>
                <MenuItem value={"masculino"}>Masculino</MenuItem>
                <MenuItem value={"nb"}>Não Binário</MenuItem>
                <MenuItem value={"outro"}>Outro</MenuItem>
              </Select>
            </FormControl>

            <Button variant="text" color="primary">Enviar</Button>
          </Box>
        </Grid>
      </main>
    </ThemeProvider>
  )
}

export default App
