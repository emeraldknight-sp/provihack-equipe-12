import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import * as React from 'react';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
});

export default function CustomizedRating({ lifes }) {

    React.useEffect(() => {
        console.log(lifes)
    }, [lifes])

    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            <StyledRating
                name="customized-color"
                defaultValue={5}
                value={lifes}
                getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                precision={1}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                readOnly
            />
        </Box>
    );
}