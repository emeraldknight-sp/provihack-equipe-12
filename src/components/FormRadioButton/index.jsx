import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

export default function ErrorRadios({ alternativas, setLifes, lifes, definirProximaPergunta, acertos, setAcertos }) {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('Choose wisely');

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setHelperText(' ');
        setError(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const alternativaCerta = alternativas.find((alternativa) => alternativa.certa)

        if (value === alternativaCerta.alternativa) {
            definirProximaPergunta()
            setHelperText('Você acertou!!');
            setAcertos(acertos + 1)
            setError(false);
        } else if (value !== "") {
            setHelperText('Desculpe, você errou;');
            setLifes(lifes - 1)
            setError(true);
        } else {
            setHelperText('Por favor escolha uma alternativa.');
            setError(true);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormControl sx={{ m: 3 }} error={error} variant="standard">
                <FormLabel id="demo-error-radios">Alternativas</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-error-radios"
                    name="quiz"
                    value={value}
                    onChange={handleRadioChange}
                >
                    {alternativas.map((alternativa) => (
                        <FormControlLabel key={alternativa.id} value={alternativa.alternativa} control={<Radio />} label={alternativa.alternativa} />
                    ))
                    }
                </RadioGroup>
                <FormHelperText>{helperText}</FormHelperText>
                <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                    Verificar Resposta
                </Button>
            </FormControl>
        </form>
    );
}
