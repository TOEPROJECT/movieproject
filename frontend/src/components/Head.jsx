function Head() {
  return (
    <head>
      {/* 메타 데이터 */}
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* CSS, JS 연결 */}
      <link rel="stylesheet" href="index.css" />
      <link rel="stylesheet" href="index.js" />

      {/* 외부 CSS 호출  */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Vujahday+Script&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=East+Sea+Dokdo&family=Vujahday+Script&display=swap"
        rel="stylesheet"
      />
      <title>TOE</title>
    </head>
  );
}

export default Head;
