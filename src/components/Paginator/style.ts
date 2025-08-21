import { styled } from "@mui/material/styles";
import { Box, Button, Stack, Typography } from '@mui/material'

// contenedor general
export const StyledPaginationContainer = styled(Box)(({ theme }) => ({
    width: '582px',
    height: '64px',
    justifyContent: 'space-between',
    angle: '0deg',
    opacity: 1,
    top: '44px',
    left: '41px',
    paddingTop: 'spacing/300',
    marginTop: theme.spacing(2),

}));

// fila de botones
export const StyledPaginationList = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing(1),
}));

// boton generico
export const PageButton = styled(Button)(({ theme }) => ({
    minWidth: 36,
    padding: '6px 12px',
    fontWeight: 'bold',
    backgroundColor: '#ffffff',
    color: '#000000ff',
    border: `1px solid ${theme.palette.grey[500]}`,
    '&:hover': {
        backgroundColor: theme.palette.beige500.main,
        color: 'white',
        cursor: 'pointer',
    },
    '&.Mui-disabled': {
        backgroundColor: '#f5f5f5',
        color: '#bdbdbd',
        border: `1px solid ${theme.palette.grey[300]}`,
        cursor: 'not-allowed',
        pointerEvents: 'auto',
    },
}));

// boton activo (pagina actual)
export const ActivePageButton = styled(PageButton)(({ theme }) => ({
    fontWeight: 'bold',
    backgroundColor: '#201f24',
    color: '#ffffff',
    '&:hover': {
        backgroundColor: theme.palette.primary.contrastText,
    },
}));

// texto de puntos
export const DotsText = styled(Typography)(() => ({
    display: 'inline-block',
    fontSize: '24px',
    paddingTop: '8px', // esto baja los puntos
    color: '#888',
}));
