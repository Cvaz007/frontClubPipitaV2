import React from "react";
import css from './LandingPage.module.css';
import img from '../Img/Imagenes.json';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function LandingPage(props) {
    const imagenes = img.imagenesCarousel;
    return (
        <div
            className={css.contenedorLanding}>
            <div
                className={css.Bienvenida}>
                ClubPipita F.C
            </div>
            <div
                className={css.texto}>
                Página ofical del ClubPipita F.C, <span>donde podrás visualizar:</span>
            </div>
            <div
                className={css.ContenedorResultados}>
                <div
                    className={css.Titulos}>
                    Información de nuestros equipos
                </div>
                <ImageList className={css.contenedorCarousel} cols={2} >
                    {imagenes.map((item) => (
                        <ImageListItem key={item.id}>
                            <img
                                src={`${item.url}`}
                                srcSet={`${item.url}`}
                                alt={item.id}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
            <div
                className={css.FaseDeGrupos}>
                <div
                    className={css.Titulos}>
                    Fase de grupos
                </div>
                
            </div>
        </div>
    )
}

export { LandingPage }