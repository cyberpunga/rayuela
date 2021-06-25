/** @jsx jsx */
import { jsx, Themed, Label, Grid, Box } from "theme-ui"
import React, { useState } from "react"
import { Link } from "gatsby"

import useStore from "../store"

export default function Intro() {
  return (
    <div>
      <div
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Themed.h3 sx={{ my: 0 }}>Julio Cortazar</Themed.h3>
        <Themed.h1 sx={{ mt: 0, mb: 7 }}>Rayuela</Themed.h1>
      </div>

      <Themed.h3 sx={{ textAlign: "center" }}>TABLERO DE DIRECCIÓN</Themed.h3>
      <Themed.p>
        A su manera este libro es muchos libros, pero sobre todo es dos libros.
      </Themed.p>

      <OrderSelect />

      <SecondaryList />

      <Themed.p>
        Con el objeto de facilitar la rápida ubicación de los capítulos, la
        numeración se va repitiendo en lo alto de las páginas correspondientes a
        cada uno de ellos.
      </Themed.p>

      <Columns />

      <div
        sx={{
          maxWidth: "80%",
          my: 8,
          mx: "auto",
        }}
      >
        <Themed.p sx={{ fontSize: 1 }}>
          Y animado de la esperanza de ser particularmente útil a la juventud, y
          de contribuir a la reforma de las costumbres en general, he formado la
          presente colección de máximas, consejos y preceptos, que son la base
          de aquella moral universal, que es tan proporcionada a la felicidad
          espiritual y temporal de todos los hombres de cualquiera edad, estado
          y condición que sean, y a la prosperidad y buen orden, no sólo de la
          república civil y cristiana en que vivimos, sino de cualquiera otra
          república o gobierno que los filósofos más especulativos y profundos
          del orbe quieran discurrir.
        </Themed.p>

        <Themed.p
          sx={{
            fontSize: 1,
            fontStyle: "oblique",
            textAlign: "right",
            maxWidth: "80%",
            ml: "auto",
          }}
        >
          Espíritu de la Biblia y Moral Universal, sacada del Antiguo y Nuevo
          Testamento. Escrita en toscano por el abad Martini con las citas al
          pie: Traducida en castellano Por un Clérigo Reglar de la Congregación
          de San Cayetano de esta Corte. Con licencia. Madrid: Por Aznar, 1797.
        </Themed.p>
      </div>

      <div
        sx={{
          maxWidth: "80%",
          my: 8,
          mx: "auto",
        }}
      >
        <Themed.p
          sx={{
            fontSize: 1,
          }}
        >
          Siempre que biene el tiempo fresco, o sea al medio del otonio, a mí me
          da la loca de pensar ideas de tipo eséntrico y esótico, como ser por
          egenplo que me gustaría venirme golondrina para agarrar y volar a los
          paíx adonde haiga calor, o de ser hormiga para meterme bien adentro de
          una cueva y comer los productos guardados en el verano o de ser una
          bívora como las del solójico, que las tienen bien guardadas en una
          jaula de vidrio con calefación para que no se queden duras de frío,
          que es lo que les pasa a los pobres seres humanos que no pueden
          comprarse ropa con lo cara questá, ni pueden calentarse por la falta
          del querosén, la falta del carbón, la falta de lenia, la falta de
          petrolio y tamién la falta de plata, porque cuando uno anda con biyuya
          ensima puede entrar a cualquier boliche y mandarse una buena grapa que
          hay que ver lo que calienta, aunque no conbiene abusar, porque del
          abuso entra el visio y del visio la dejeneradés tanto del cuerpo como
          de las taras moral de cada cual, y cuando se viene abajo por la
          pendiente fatal de la falta de buena condupta en todo sentido, ya
          nadie ni nadies lo salva de acabar en el más espantoso tacho de basura
          del desprastijio humano, y nunca le van a dar una mano para sacarlo de
          adentro del fango enmundo entre el cual se rebuelca, ni más ni meno
          que si fuera un cóndor que cuando joven supo correr y volar por la
          punta de las altas montanias, pero que al ser viejo cayó parabajo como
          bombardero en picada que le falia el motor moral. ¡Y ojalá que lo que
          estoy escribiendolé sirbalguno para que mire bien su comportamiento y
          que no searrepienta cuando es tarde y ya todo se haiga ido al corno
          por culpa suya!
        </Themed.p>
        <Themed.p
          sx={{ fontSize: 1, textAlign: "right", maxWidth: "80%", ml: "auto" }}
        >
          <strong>CÉSAR BRUTO</strong>,{" "}
          <span style={{ fontStyle: "oblique" }}>
            Lo que me gustaría ser a mí si no fuera lo que soy (capítulo: Perro
            de San Bernardo)
          </span>
          .
        </Themed.p>
      </div>

      <div
        sx={{
          maxWidth: "80%",
          my: 8,
          mx: "auto",
        }}
      >
        <Themed.h4 sx={{ textAlign: "center" }}>DEL LADO DE ALLLA</Themed.h4>
        <Themed.p sx={{ fontSize: 1 }}>
          Rien ne vous tue un homme comme d’être obligé de représenter un pays.
        </Themed.p>
        <Themed.p sx={{ fontSize: 1, textAlign: "center" }}>
          <strong>JACQUES VACHÉ</strong>,{" "}
          <span sx={{ fontStyle: "oblique" }}>carta a André Breton</span>.
        </Themed.p>
      </div>
    </div>
  )
}

export const secondaryOrder = [
  73,
  1,
  2,
  116,
  3,
  84,
  4,
  71,
  5,
  81,
  74,
  6,
  7,
  8,
  93,
  68,
  9,
  104,
  10,
  65,
  11,
  136,
  12,
  106,
  13,
  115,
  14,
  114,
  117,
  15,
  120,
  16,
  137,
  17,
  97,
  18,
  153,
  19,
  90,
  20,
  126,
  21,
  79,
  22,
  62,
  23,
  124,
  128,
  24,
  134,
  25,
  141,
  60,
  26,
  109,
  27,
  28,
  130,
  151,
  152,
  143,
  100,
  76,
  101,
  144,
  92,
  103,
  108,
  64,
  155,
  123,
  145,
  122,
  112,
  154,
  85,
  150,
  95,
  146,
  29,
  107,
  113,
  30,
  57,
  70,
  147,
  31,
  32,
  132,
  61,
  33,
  67,
  83,
  142,
  34,
  87,
  105,
  96,
  94,
  91,
  82,
  99,
  35,
  121,
  36,
  37,
  98,
  38,
  39,
  86,
  78,
  40,
  59,
  41,
  148,
  42,
  75,
  43,
  125,
  44,
  102,
  45,
  80,
  46,
  47,
  110,
  48,
  111,
  49,
  118,
  50,
  119,
  51,
  69,
  52,
  89,
  53,
  66,
  149,
  54,
  129,
  139,
  133,
  140,
  138,
  127,
  56,
  135,
  63,
  88,
  72,
  77,
  131,
  58,
  131,
]

function OrderSelect() {
  const { chapterOrder, changeOrder } = useStore()
  const isPrimary = chapterOrder === "primary"
  return (
    <React.Fragment>
      <Themed.p
        sx={{ bg: isPrimary ? "secondary" : "background" }}
        onClick={() => changeOrder("primary")}
      >
        El primero se deja leer en la forma corriente, y termina en el capítulo{" "}
        <Themed.a as={Link} to="/capitulo/56">
          56
        </Themed.a>
        , al pie del cual hay tres vistosas estrellitas que equivalen a la
        palabra Fin. Por consiguiente, el lector prescindirá sin remordimientos
        de lo que sigue.
      </Themed.p>
      <Themed.p
        sx={{ bg: !isPrimary ? "secondary" : "background" }}
        onClick={() => changeOrder("secondary")}
      >
        El segundo se deja leer empezando por el capítulo{" "}
        <Themed.a as={Link} to="/capitulo/73">
          73
        </Themed.a>{" "}
        y siguiendo luego en el orden que se indica al pie de cada capítulo.{" "}
        {/* <del> */}
        En caso de confusión u olvido, bastará consultar la lista siguiente:
        {/* </del> */}
      </Themed.p>
    </React.Fragment>
  )
}

function SecondaryList() {
  return (
    <Themed.p
      sx={{
        overflowX: "scroll",
        display: "flex",
        padding: 3,
        // bg: "muted",
        // borderRadius: 3,
      }}
    >
      {secondaryOrder.map((num, idx) => (
        <React.Fragment key={idx}>
          <Themed.a
            as={Link}
            to={`/capitulo/${num}`}
            sx={{ textAlign: "center", mx: 2 }}
          >
            {num}
          </Themed.a>{" "}
          {idx === secondaryOrder.length - 1 ? "" : "-"}{" "}
        </React.Fragment>
      ))}
    </Themed.p>
  )
}

function Columns() {
  const chapters = [...Array(155).keys()].map(x => ++x)
  const parts = 5
  let columns = []
  for (let i = parts; i > 0; i--) {
    columns.push(chapters.splice(0, Math.ceil(chapters.length / i)))
  }
  return (
    <Grid columns={5} sx={{ my: 8 }}>
      {columns.map(x => (
        <Box key={x} sx={{ display: "flex", flexDirection: "column" }}>
          {x.map(z => (
            <Themed.p key={z} sx={{ textAlign: "center", my: 0 }}>
              <Themed.a
                as={Link}
                to={`/capitulo/${z}`}
                sx={{ textAlign: "center" }}
              >
                {z}
              </Themed.a>
            </Themed.p>
          ))}
        </Box>
      ))}
    </Grid>
  )
}
