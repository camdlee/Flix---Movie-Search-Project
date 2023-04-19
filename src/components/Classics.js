import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function Classics() {
    return (
        <ThemeProvider theme={theme}>
          <main>
            <div className='classics-card-container'>
                <div className='classics-card grow2'>
                    <img
                        className="d-block w-100"
                        src="https://image.tmdb.org/t/p/w1280/rzdPqYx7Um4FUZeD8wpXqjAUcEm.jpg"
                        alt="First slide"
                    />
                    {/* <h6>Titanic</h6> */}
                </div>
                <div className='classics-card grow2'>
                    <img
                        className="d-block w-100"
                        src="https://image.tmdb.org/t/p/w1280/aDYSnJAK0BTVeE8osOy22Kz3SXY.jpg"
                        alt="Second slide"
                    />
                </div>
                <div className='classics-card grow2'>
                    <img
                        className="d-block w-100"
                        src="https://image.tmdb.org/t/p/w1280/6DqzZaTAzFrT53JtRt3MLKs0Y9i.jpg"
                        alt="Second slide"
                    />
                </div>
                <div className='classics-card grow2'>
                    <img
                        className="d-block w-100"
                        src="https://image.tmdb.org/t/p/w1280/vL5LR6WdxWPjLPFRLe133jXWsh5.jpg"
                        alt="Second slide"
                    />
                </div>
                <div className='classics-card grow2'>
                    <img
                        className="d-block w-100"
                        src="https://image.tmdb.org/t/p/w1280//rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
                        alt="Second slide"
                    />
                </div>
                <div className='classics-card grow2'>
                    <img
                        className="d-block w-100"
                        src="https://image.tmdb.org/t/p/w1280/7tTCnQcKzUkabDV3BJMe7LIzlEs.jpg"
                        alt="Second slide"
                    />
                </div>
            </div>
          </main>
        </ThemeProvider>
      );
}
