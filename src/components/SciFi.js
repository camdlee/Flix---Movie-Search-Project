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
                        src="https://image.tmdb.org/t/p/w1280/q7M0JpPixbEYT8EhnI7wTEMONxz.jpg"
                        alt="First slide"
                    />
                    {/* <h6>Titanic</h6> */}
                </div>
                <div className='classics-card grow2'>
                    <img
                        className="d-block w-100"
                        src="https://image.tmdb.org/t/p/w1280/kg2FOT2Oe5PSCgs3L4vLel6B7ck.jpg"
                        alt="Second slide"
                    />
                </div>
                <div className='classics-card grow2'>
                    <img
                        className="d-block w-100"
                        src="https://image.tmdb.org/t/p/w1280/5UkzNSOK561c2QRy2Zr4AkADzLT.jpg"
                        alt="Second slide"
                    />
                </div>
                <div className='classics-card grow2'>
                    <img
                        className="d-block w-100"
                        src="https://image.tmdb.org/t/p/w1280/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg"
                        alt="Second slide"
                    />
                </div>
                <div className='classics-card grow2'>
                    <img
                        className="d-block w-100"
                        src="https://image.tmdb.org/t/p/w1280/dQS3L3USI7Zhcq41abzMZF8dXCm.jpg"
                        alt="Second slide"
                    />
                </div>
                <div className='classics-card grow2'>
                    <img
                        className="d-block w-100"
                        src="https://image.tmdb.org/t/p/w1280/19AqfWi8S99tDmp7hskCeDQuwLU.jpg"
                        alt="Second slide"
                    />
                </div>
            </div>
          </main>
        </ThemeProvider>
      );
}
