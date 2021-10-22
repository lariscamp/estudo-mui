import { Grid, Switch, TextField, MenuItem, Select, InputLabel, Button } from '@mui/material'
import { Box } from '@mui/system'
import './App.css'


function App() {
  return (
    <main className="App">
      <Grid container alignItems="center">
        <Box component="form" sx={{display:"flex", flexDirection:"column", justifyContent:"flex-start", alignItems:"center"}}>
          <TextField id="nome" required label= "nome" name="nome"/>
          <TextField id="email" required label= "email" name="email"/>
          <Switch value="newsletter"/>
          <InputLabel id="selecao-genero-label">Escolha o gênero que melhor te define:</InputLabel>
          <Select labelId="selecao-genero-label" id="selecao-genero" label="Gênero">
            <MenuItem value={"feminino"}>Feminino</MenuItem>
            <MenuItem value={"masculino"}>Masculino</MenuItem>
            <MenuItem value={"nb"}>Não Binário</MenuItem>
            <MenuItem value={"outro"}>Outro</MenuItem>
          </Select>
          <Button variant="text" color="primary">Enviar</Button>
        </Box>    
      </Grid>  
    </main>
  )
}

export default App
