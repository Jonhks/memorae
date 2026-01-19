export const logo1 = (
  <svg
    width="80"
    height="80"
    viewBox="0 0 800 600"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="title desc"
  >
    <title>intime - Opción C (Ribbon)</title>
    <desc>
      M dorada formada por cintas con ángulos, y intime debajo en negro.
    </desc>
    <defs>
      <linearGradient
        id="goldGrad"
        x1="0"
        y1="0"
        x2="0"
        y2="1"
      >
        <stop
          offset="0%"
          stop-color="#D8B768"
        />
        <stop
          offset="50%"
          stop-color="#C6A34C"
        />
        <stop
          offset="100%"
          stop-color="#A9873A"
        />
      </linearGradient>
      {/* Styles moved to className attributes or external CSS */}
    </defs>

    <path
      class="gold"
      d="M210 340 L210 120 L265 120 L400 300 L535 120 L590 120 L590 340 L545 340 L545 210 L400 395 L255 210 L255 340 Z"
    />

    <text
      x="400"
      y="450"
      class="black center"
      font-family="Georgia, 'Times New Roman', serif"
      font-size="84"
      font-weight="700"
      letter-spacing="10"
    >
      intime
    </text>
  </svg>
);

export const logo2 = (
  <svg
    width="80"
    height="80"
    viewBox="0 0 800 600"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="title desc"
  >
    <title>intime - Opción B (Geométrica)</title>
    <desc>
      M monograma construida con formas geométricas doradas y el texto intime
      debajo en negro.
    </desc>
    {/* Remove <style> and use inline styles or className */}
    <defs></defs>

    {/* M geométrica: dos columnas + dos diagonales */}
    <rect
      x="210"
      y="120"
      width="40"
      height="220"
      style={{ fill: "#C6A34C" }}
      rx="6"
    />
    <rect
      x="550"
      y="120"
      width="40"
      height="220"
      style={{ fill: "#C6A34C" }}
      rx="6"
    />
    <polygon
      style={{ fill: "#C6A34C" }}
      points="250,120 340,120 400,250 360,250"
    />
    <polygon
      style={{ fill: "#C6A34C" }}
      points="460,250 420,250 480,120 570,120"
    />

    {/* Palabra intime */}
    <text
      x="400"
      y="420"
      style={{ fill: "#111111", textAnchor: "middle" }}
      fontFamily="Georgia, 'Times New Roman', serif"
      fontSize="84"
      fontWeight="700"
      letterSpacing="10"
    >
      intime
    </text>
  </svg>
);

export const logo3 = (
  <svg
    width="80"
    height="60"
    viewBox="0 0 800 600"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="title desc"
  >
    <title>intime - Opción B (Geométrica)</title>
    <desc>
      M monograma construida con formas geométricas doradas y el texto intime
      debajo en negro.
    </desc>
    <defs></defs>

    {/* M geométrica: dos columnas + dos diagonales */}
    <rect
      x="210"
      y="120"
      width="40"
      height="220"
      style={{ fill: "#C6A34C" }}
      rx="6"
    />
    <rect
      x="550"
      y="120"
      width="40"
      height="220"
      style={{ fill: "#C6A34C" }}
      rx="6"
    />
    <polygon
      style={{ fill: "#C6A34C" }}
      points="250,120 340,120 400,250 360,250"
    />
    <polygon
      style={{ fill: "#C6A34C" }}
      points="460,250 420,250 480,120 570,120"
    />

    {/* Palabra intime */}
    <text
      x="400"
      y="420"
      style={{ fill: "#111111", textAnchor: "middle" }}
      fontFamily="Georgia, 'Times New Roman', serif"
      fontSize="84"
      fontWeight="700"
      letterSpacing="10"
    >
      intime
    </text>
  </svg>
);
