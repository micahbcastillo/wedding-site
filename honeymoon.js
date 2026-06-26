(function () {
  const photoMonthLabels = {
    en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    es: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
  };

  const photoDescriptions = {
    "images/Tokyo_Hakone/Tokyo_Part1/20260513_184420.jpg": {
      "en": "Our first night in Tokyo after a 13 hour plane ride! We were both hungry and looking for a good place to eat.",
      "es": "Nuestra primera noche en Tokio después de un vuelo de 13 horas. Los dos teníamos hambre y estábamos buscando un buen lugar para comer."
    },
    "images/Tokyo_Hakone/Tokyo_Part1/20260513_185716.jpg": {
      "en": "Ginza Haruchan Ramen, unknowing to us at the time, became our favorite ramen restaurant of the entire trip. This $7 bowl had an official Michelin Star.",
      "es": "Ginza Haruchan Ramen, sin que lo supiéramos en ese momento, terminó siendo nuestro restaurante de ramen favorito de todo el viaje. Este tazón de 7 dólares tenía una estrella Michelin oficial."
    },
    "images/Tokyo_Hakone/Tokyo_Part1/20260514_103336.jpg": {
      "en": "First day in Tokyo starting with the Imperial Palace! We got to see a royal procession!",
      "es": "Primer día en Tokio, empezando por el Palacio Imperial. ¡Nos tocó ver una procesión real!"
    },
    "images/Tokyo_Hakone/Tokyo_Part1/20260514_111813.jpg": {
      "en": "The true size and scale of the palace was something otherworldly which I was not able to capture in a single picture. The gardens were also FREE to access! I was incredibly impressed with the structure of the moats.",
      "es": "El verdadero tamaño y la escala del palacio eran de otro mundo, algo que no pude capturar en una sola foto. ¡Además, la entrada a los jardines era GRATIS! Me impresionó muchísimo la estructura de los fosos."
    },
    "images/Tokyo_Hakone/Tokyo_Part1/20260514_134106.jpg": {
      "en": "Shibuya Crossing! We had to do it. Were there a lot of people? Yes. Did it only take 30 seconds to cross? Yes. Was it still exciting… Yes!",
      "es": "¡El cruce de Shibuya! Teníamos que hacerlo. ¿Había mucha gente? Sí. ¿Tardamos solo 30 segundos en cruzar? Sí. ¿Aun así fue emocionante? ¡Sí!"
    },
    "images/Tokyo_Hakone/Tokyo_Part1/20260514_160211.jpg": {
      "en": "The gates at Meiji Temple were breathtaking. We have no words to describe how serene the monolithic presence of nature was there.",
      "es": "Las puertas del Santuario Meiji nos dejaron sin aliento. No tenemos palabras para describir lo serena que se sentía esa presencia enorme de la naturaleza."
    },
    "images/Tokyo_Hakone/Tokyo_Part1/20260514_164443.jpg": {
      "en": "We could have spent hours walking through Meiji Temple grounds, but we were on a mission and made it through to the main temple within about 30 minutes of walking.",
      "es": "Podríamos haber pasado horas caminando por los terrenos del Santuario Meiji, pero íbamos con una misión y llegamos al santuario principal después de unos 30 minutos caminando."
    },
    "images/Tokyo_Hakone/Hakone/20260515_113906.jpg": {
      "en": "We made it to Hakone! The Romancecar from Tokyo to Hakone was absolutely worth it. We were stunned by just how much NATURE was found throughout the entire ride.",
      "es": "¡Llegamos a Hakone! El Romancecar de Tokio a Hakone valió totalmente la pena. Nos sorprendió la cantidad de NATURALEZA que había durante todo el trayecto."
    },
    "images/Tokyo_Hakone/Hakone/20260515_140506.jpg": {
      "en": "While waiting for our ryokan (hot springs inn) room to be ready, we explored the small town we were staying in. Hakone Sekisho was a representation of one of the outposts that used to Lake Ashi! It was so cool to see all the historical pieces and read about them as we went through!",
      "es": "Mientras esperábamos que estuviera lista nuestra habitación en el ryokan (posada con aguas termales), exploramos el pueblito donde nos quedábamos. Hakone Sekisho era una recreación de uno de los antiguos puestos de control junto al lago Ashi. ¡Fue increíble ver todas las piezas históricas y leer sobre ellas mientras lo recorríamos!"
    },
    "images/Tokyo_Hakone/Hakone/20260515_144648.jpg": {
      "en": "The lake was rather large, and Carolina and I had plenty of time. We walked down a forest path and found a smaller pond, shown behind us, off to the side of Lake Ashi.",
      "es": "El lago era bastante grande, y Carolina y yo teníamos tiempo de sobra. Caminamos por un sendero en el bosque y encontramos un estanque más pequeño, el que se ve detrás de nosotros, a un lado del lago Ashi."
    },
    "images/Tokyo_Hakone/Hakone/20260515_164234.jpg": {
      "en": "We made it to the ryokan! Yoshimatsu is a smaller, intimate ryokan tucked into the mountain side bordering Lake Ashi.",
      "es": "¡Llegamos al ryokan! Yoshimatsu es un ryokan más pequeño e íntimo, escondido en la ladera de la montaña junto al lago Ashi."
    },
    "images/Tokyo_Hakone/Hakone/20260515_171018.jpg": {
      "en": "Around the ryokan were various paths and small gardens that Carolina and I enjoyed walking through before we ate. Unlike Texas at the time, the weather was actually PERFECT for walking around in without sweating.",
      "es": "Alrededor del ryokan había varios senderos y jardincitos que Carolina y yo disfrutamos recorrer antes de comer. A diferencia de Texas en ese momento, el clima estaba PERFECTO para caminar sin sudar."
    },
    "images/Tokyo_Hakone/Hakone/20260515_172345.jpg": {
      "en": "FISH! Micah finally found some fish. White trout in the gardens of the ryokan.",
      "es": "¡PECES! Micah por fin encontró peces. Truchas blancas en los jardines del ryokan."
    },
    "images/Tokyo_Hakone/Hakone/20260515_172522.jpg": {
      "en": "It was amazing to see just how green everything was. It barely rained the first week we were there, but everything felt so incredibly alive.",
      "es": "Fue increíble ver lo verde que estaba todo. Casi no llovió durante la primera semana que estuvimos allí, pero todo se sentía increíblemente vivo."
    },
    "images/Tokyo_Hakone/Hakone/20260515_181635(0).jpg": {
      "en": "Part of our stay at Yoshimatsu involved some AMAZING meals served in our room as several courses. This is the before meal picture!",
      "es": "Parte de nuestra estadía en Yoshimatsu incluyó comidas INCREÍBLES servidas en nuestra habitación en varios tiempos. ¡Esta es la foto de antes de comer!"
    },
    "images/Tokyo_Hakone/Hakone/20260516_063526.jpg": {
      "en": "The first day in Hakone, Micah was looking around for the supposed view of Mount Fuji from our hotel and during the walk down the shore of Lake Ashi. With no luck, Micah thought the volcano was just too small to see. To our surprise, as soon as we walked out of the room on the second day at 5:00 AM… Mount Fuji was right in front of us!",
      "es": "El primer día en Hakone, Micah estuvo buscando la supuesta vista del Monte Fuji desde nuestro hotel y durante la caminata por la orilla del lago Ashi. Sin suerte, Micah pensó que el volcán simplemente era demasiado pequeño para verse. Para nuestra sorpresa, apenas salimos de la habitación el segundo día a las 5:00 a. m., ¡el Monte Fuji estaba justo enfrente de nosotros!"
    },
    "images/Tokyo_Hakone/Hakone/20260516_065811.jpg": {
      "en": "Waking up early has its perks. Waking up early in a small town of only about 200 people means you are going to be alone EVERYWHERE you go. We walked up a small hill to look at Mt. Fuji together!",
      "es": "Levantarse temprano tiene sus ventajas. Levantarse temprano en un pueblito de solo unas 200 personas significa que vas a estar solo en TODOS lados. ¡Subimos una pequeña colina para ver juntos el Monte Fuji!"
    },
    "images/Tokyo_Hakone/Hakone/20260516_070408.jpg": {
      "en": "Hakone-jinja (a shrine) was right across the lake from us during out morning walk. If you look at the bottom left of the gate, there are some people standing there for scale…",
      "es": "Hakone-jinja (un santuario) estaba justo al otro lado del lago durante nuestra caminata matutina. Si miras la parte inferior izquierda de la puerta, hay algunas personas paradas ahí para que se note la escala..."
    },
    "images/Tokyo_Hakone/Hakone/20260516_070755.jpg": {
      "en": "Once again, nature amazed us! What was also amazing was how incredibly comfortable Micah’s shoes were as we were hiking.",
      "es": "Una vez más, la naturaleza nos dejó maravillados. También fue increíble lo cómodos que eran los zapatos de Micah mientras hacíamos la caminata."
    },
    "images/Tokyo_Hakone/Hakone/20260516_071233.jpg": {
      "en": "Komorebi (木漏れ日) is a Japanese word that describes the interplay between light and shadow created when sunlight filters through the leaves of trees. For the first time in his life, Micah was actually able to use this word in a sentence when telling the hotel hostess about our walk after returning.",
      "es": "Komorebi (木漏れ日) es una palabra japonesa que describe el juego entre luz y sombra cuando el sol se filtra entre las hojas de los árboles. Por primera vez en su vida, Micah pudo usarla de verdad en una oración al contarle a la anfitriona del hotel sobre nuestra caminata cuando regresamos."
    },
    "images/Tokyo_Hakone/Hakone/20260516_072139.jpg": {
      "en": "There was no plan for this hike. We kind of just made it here and had our breath stolen. Carolina thought Micah had it all planned out. To her surprise, he was just as lost as she was the whole time.",
      "es": "No había ningún plan para esta caminata. Simplemente terminamos llegando hasta aquí y nos quedamos sin aliento. Carolina pensó que Micah lo tenía todo planeado. Para su sorpresa, él estaba igual de perdido que ella todo el tiempo."
    },
    "images/Tokyo_Hakone/Hakone/20260516_072638.jpg": {
      "en": "The view was incredible!",
      "es": "¡La vista era increíble!"
    },
    "images/Tokyo_Hakone/Hakone/20260516_072823.jpg": {
      "en": "Our super cute couples shot required more camera skill than we were able to offer.",
      "es": "Nuestra foto de pareja súper linda requería más habilidad con la cámara de la que teníamos."
    },
    "images/Tokyo_Hakone/Hakone/20260516_072922.jpg": {
      "en": "We got the hang of the camera, kind of.",
      "es": "Ya le estábamos agarrando la onda a la cámara... más o menos."
    },
    "images/Tokyo_Hakone/Hakone/20260516_092903.jpg": {
      "en": "This was the view from our room!",
      "es": "¡Esta era la vista desde nuestra habitación!"
    },
    "images/JapanTripPt2/Kyoto/Kyoto Day 1/20260517_075339.jpg": {
      "en": "The Fushimi Inari Taisha hike in Kyoto was incredible. Major pro tip, wake up EARLY. If you think it is early enough, wake up 30 minutes before that.",
      "es": "La caminata por Fushimi Inari Taisha en Kioto fue increíble. Consejo importantísimo: levántense TEMPRANO. Si creen que ya es suficientemente temprano, levántense 30 minutos antes."
    },
    "images/JapanTripPt2/Kyoto/Kyoto Day 1/20260517_080954.jpg": {
      "en": "As always, Micah enjoys going off the beaten path. Unfortunately, that means Carolina typically gets beaten up by the path. There was a lot of convincing that took place to go down a clearly abandoned path through the mountain and end up on the opposite side of the lake from where they were supposed to be. Small snack breaks helped.",
      "es": "Como siempre, a Micah le gusta salirse del camino marcado. Por desgracia, eso normalmente significa que el camino termina maltratando a Carolina. Hubo bastante convencimiento de por medio para bajar por un sendero claramente abandonado por la montaña y terminar al otro lado del lago de donde se suponía que debíamos estar. Las pausas para snacks ayudaron."
    },
    "images/JapanTripPt2/Kyoto/Kyoto Day 1/20260517_084816.jpg": {
      "en": "By the time this picture was taken, the married couple had completed the full hike up and part of the way down the mountain. This was done, by the way, in the same shoes Micah wore for their Hakone hike. It was perhaps the single greatest motivator for Micah to buy another pair of the same kind.",
      "es": "Para cuando se tomó esta foto, los recién casados ya habían completado toda la subida y parte de la bajada de la montaña. Esto, por cierto, fue con los mismos zapatos que Micah usó para la caminata de Hakone. Quizá fue la mayor motivación para que Micah comprara otro par del mismo modelo."
    },
    "images/JapanTripPt2/Kyoto/Kyoto Day 1/20260517_111542(0).jpg": {
      "en": "Nene and Kodaiji Temple was an incredible find for us. Completely free of other people, this temple took us fairly deep into the mountains and allowed us to enjoy its beauty without anyone else around.",
      "es": "Nene y el templo Kodaiji fueron un hallazgo increíble para nosotros. Sin prácticamente nadie más alrededor, este templo nos llevó bastante adentro de la montaña y nos permitió disfrutar de su belleza sin nadie cerca."
    },
    "images/JapanTripPt2/Kyoto/Kyoto Day 1/20260517_210151.jpg": {
      "en": "For our 1 month wedding anniversary, we went to an omakase restaurant called Kono. The chef and hostess (his wife) were so kind and the food was incredible! We also found out that the chef played baseball against someone who would eventually join the Texas Rangers! Small world!",
      "es": "Para nuestro primer mes de casados, fuimos a un restaurante omakase llamado Kono. El chef y la anfitriona (su esposa) fueron amabilísimos, ¡y la comida estuvo increíble! También descubrimos que el chef había jugado béisbol contra alguien que con el tiempo llegó a los Texas Rangers. ¡Qué pequeño es el mundo!"
    },
    "images/JapanTripPt2/Osaka/20260518_103303(0).jpg": {
      "en": "Osaka castle had some beautiful sights! This was definitely a warmer day and we were both feeling it!",
      "es": "¡El castillo de Osaka tenía unas vistas hermosas! Definitivamente fue un día más caluroso y los dos lo estábamos sintiendo."
    },
    "images/JapanTripPt2/Osaka/20260518_103614(0).jpg": {
      "en": "Around the back of the castle was a quiet area that overlooked the city. It was incredible to us how, even when there were so many people around, it was still possible to find completely isolated places since the castle grounds were just that large.",
      "es": "En la parte trasera del castillo había una zona tranquila con vista a la ciudad. Nos pareció increíble que, aun con tanta gente alrededor, todavía se pudieran encontrar lugares completamente aislados porque los terrenos del castillo eran así de grandes."
    },
    "images/JapanTripPt2/Osaka/20260518_110428.jpg": {
      "en": "It is impossible to capture how tall this looks in person with our camera skills. Micah is basically looking straight up to take this.",
      "es": "Es imposible capturar con nuestras habilidades de cámara lo alto que se ve esto en persona. Micah básicamente está mirando directo hacia arriba para tomar esta foto."
    },
    "images/JapanTripPt2/Kyoto/Kyoto Day 2/20260519_092918.jpg": {
      "en": "Back for Kyoto Day 2! Kiyomizudera Temple had incredibly detailed wood work that we had to get some pictures of!",
      "es": "¡De vuelta para el día 2 en Kioto! El templo Kiyomizudera tenía un trabajo en madera increíblemente detallado y teníamos que tomarle algunas fotos."
    },
    "images/JapanTripPt2/Kyoto/Kyoto Day 2/20260519_092932.jpg": {
      "en": "The small details on these structures are what make them so amazing!",
      "es": "¡Los pequeños detalles de estas estructuras son lo que las hace tan increíbles!"
    },
    "images/JapanTripPt2/Kyoto/Kyoto Day 2/20260519_094342.jpg": {
      "en": "We made it to the outlook of Kiyomizudera Temple!",
      "es": "¡Llegamos al mirador del templo Kiyomizudera!"
    },
    "images/JapanTripPt2/Kyoto/Kyoto Day 2/20260519_094410.jpg": {
      "en": "Seeing those wooden struts and braces from another angle looks a bit scary, but it was very solid!",
      "es": "Ver esos pilares y soportes de madera desde otro ángulo se ve un poco intimidante, pero era muy sólido."
    },
    "images/JapanTripPt2/Kyoto/Kyoto Day 2/20260519_100615.jpg": {
      "en": "This time around, it was Carolina going off the beaten path! If you keep walking down the path that leads away from Kiyomizudera Temple and just…. Keep walking… you eventually get to the tiniest little temple with a 100 yen entrance fee. It is set deep into the crevice of a mountain and had a beautiful little garden.",
      "es": "Esta vez fue Carolina la que se salió del camino marcado. Si sigues caminando por el sendero que se aleja del templo Kiyomizudera y simplemente... sigues caminando... al final llegas a un templo diminuto con entrada de 100 yenes. Está metido en lo profundo de una grieta de la montaña y tenía un jardincito hermoso."
    },
    "images/JapanTripPt2/Kyoto/Kyoto Day 2/20260519_124158.jpg": {
      "en": "Kinkaku-ji, The Golden Temple, is stunning in the sunlight!",
      "es": "¡Kinkaku-ji, el Templo Dorado, es impresionante bajo la luz del sol!"
    },
    "images/JapanTripPt2/Kyoto/Kyoto Day 2/20260519_133526.jpg": {
      "en": "Japan in general has an amazing food scene. One of our favorite aspects of it was that you could find literal hole in the wall restaurants like this fresh eel restaurant and have some of the best cuisine you have ever tasted.",
      "es": "Japón en general tiene una escena gastronómica increíble. Una de nuestras cosas favoritas fue que podías encontrar restaurantes pequeñitos y escondidos como este restaurante de anguila fresca y probar algunas de las mejores comidas que has comido en tu vida."
    },
    "images/JapanTripPt2/Kyoto/Kyoto Day 2/20260519_144854(1).jpg": {
      "en": "Nijou Castle was our last big Kyoto stop! The grounds were incredibly beautiful. Those gates you see behind us had some of the same incredible woodwork that we had seen in other places in Kyoto!",
      "es": "¡El castillo de Nijo fue nuestra última gran parada en Kioto! Los terrenos eran increíblemente hermosos. Esas puertas que se ven detrás de nosotros tenían el mismo trabajo de madera increíble que habíamos visto en otros lugares de Kioto."
    },
    "images/JapanTripPt2/Kyoto/Kyoto Day 2/20260519_153136.jpg": {
      "en": "The gardens in Nijou Castle definitely stole the show! Serenity prevailed throughout the entire area.",
      "es": "¡Los jardines del castillo de Nijo definitivamente se robaron el show! La serenidad se sentía en toda la zona."
    },
    "images/JapanTripPt2/Matsumoto/20260520_181908(0).jpg": {
      "en": "What you see behind us is Matsumoto Castle. What you do not see behind us…. Is any kind of fence or structure keeping us out of the castle. Matsumoto was a much smaller city than the other locations we went to, and you could see that small-town vibe throughout the area. This was a smaller castle, but it gave us one of the most unique experiences throughout our trip.",
      "es": "Lo que ven detrás de nosotros es el castillo de Matsumoto. Lo que no ven detrás de nosotros... es algún tipo de cerca o estructura que nos impidiera acercarnos al castillo. Matsumoto era una ciudad mucho más pequeña que los otros lugares que visitamos, y ese ambiente de pueblo se sentía por toda la zona. Era un castillo más pequeño, pero nos dio una de las experiencias más únicas de todo el viaje."
    },
    "images/JapanTripPt2/Matsumoto/20260520_182855.jpg": {
      "en": "The stunning part about Matsumoto was that we were able to see incredibly history and architecture in a much smaller city with a significantly lower number of people.",
      "es": "Lo impresionante de Matsumoto fue que pudimos ver tanta historia y arquitectura increíbles en una ciudad mucho más pequeña, con muchísima menos gente."
    },
    "images/JapanTripPt2/Matsumoto/20260520_194734.jpg": {
      "en": "This is the best curry I have ever eaten in my entire life. - Micah Castillo",
      "es": "Este es el mejor curry que he comido en toda mi vida. - Micah Castillo"
    },
    "images/JapanTripPt2/Matsumoto/20260521_155950.jpg": {
      "en": "Our favorite part about Matsumoto Castle was that we were able to go inside and go all the way up to the very top! Pictured here is a small shrine in the top floor of the castle.",
      "es": "Nuestra parte favorita del castillo de Matsumoto fue que pudimos entrar y subir hasta arriba del todo. En la foto se ve un pequeño santuario en el piso superior del castillo."
    },
    "images/JapanTripPt2/Matsumoto/20260521_173715(0).jpg": {
      "en": "Day 2 in Matsumoto started a bit cloudy, but quickly cleared up to allow to see the beautiful mountains around us.",
      "es": "El día 2 en Matsumoto empezó un poco nublado, pero se despejó rápidamente y nos dejó ver las hermosas montañas que nos rodeaban."
    },
    "images/JapanTripPt2/Matsumoto/20260521_193425.jpg": {
      "en": "No matter where he is, Micah always finds a place to run. Matsumoto Castle had a PERFECT running path going all the way around it. As a gift to Carolina, Micah decided to reduce the number of workouts he had during the vacation by 99% during their honeymoon. For those of you who know his typical schedule, you know this was the one of the best wedding gifts he could have given her.",
      "es": "No importa dónde esté, Micah siempre encuentra un lugar para correr. El castillo de Matsumoto tenía una ruta PERFECTA para correr que lo rodeaba por completo. Como regalo para Carolina, Micah decidió reducir la cantidad de entrenamientos durante las vacaciones en un 99% durante la luna de miel. Quienes conocen su horario normal saben que este fue uno de los mejores regalos de boda que pudo haberle dado."
    },
    "images/JapanTripPt2/Tokyo Day 2/20260523_202302(0).jpg": {
      "en": "For our last few days in Tokyo, we stayed at the Tokyo Dome hotel! It was so tall!",
      "es": "Para nuestros últimos días en Tokio, nos quedamos en el hotel Tokyo Dome. ¡Era altísimo!"
    },
    "images/JapanTripPt2/Tokyo Day 2/20260524_120249.jpg": {
      "en": "The Ginza area in Tokyo can be equated to some of the trendier places in New York City… The main difference is that these streets are SPOTLESS. Behind us is the school building for what we think is a high school.",
      "es": "La zona de Ginza en Tokio se podría comparar con algunos de los lugares más modernos de Nueva York. La gran diferencia es que estas calles están IMPECABLES. Detrás de nosotros está el edificio de una escuela que creemos que es una preparatoria."
    },
    "images/JapanTripPt2/Tokyo Day 2/20260524_182310.jpg": {
      "en": "The Tokyo Dome hotel is right in the middle of “Tokyo Dome City”. A part of this city is this really cool amusement park!",
      "es": "El hotel Tokyo Dome está justo en medio de “Tokyo Dome City”. ¡Parte de esta ciudad es este parque de diversiones súper divertido!"
    },
    "images/JapanTripPt2/Tokyo Day 2/20260524_194929.jpg": {
      "en": "Sensou-ji in Asakusa was such a cool place at night time! To give you a sense of the scale…. You can almost fit 5 Carolinas head to toe on those giant woven sandals.",
      "es": "Sensō-ji en Asakusa fue un lugar increíble para visitar de noche. Para que se den una idea de la escala... casi caben 5 Carolinas de pies a cabeza sobre esas sandalias tejidas gigantes."
    },
    "images/JapanTripPt2/Tokyo Day 2/20260524_212852.jpg": {
      "en": "The Asakusa area was such a fun place to walk around. Street side food and amazing smells can be found up and down this street!",
      "es": "La zona de Asakusa fue un lugar muy divertido para caminar. ¡Había comida callejera y olores increíbles a lo largo de toda esta calle!"
    },
    "images/JapanTripPt2/Tokyo Day 2/20260525_124001.jpg": {
      "en": "Ueno Park was an incredibly example of natural beauty in the middle of a sprawling city scape.",
      "es": "El parque Ueno fue un ejemplo increíble de belleza natural en medio de una ciudad enorme y extendida."
    },
    "images/JapanTripPt2/Tokyo Day 2/20260525_130912.jpg": {
      "en": "This was our last full day in Tokyo and the weather was sending us out in style! It was an absolutely perfect day to enjoy a park together.",
      "es": "Este fue nuestro último día completo en Tokio y el clima nos estaba despidiendo con todo. Fue un día absolutamente perfecto para disfrutar juntos de un parque."
    },
    "images/JapanTripPt2/Tokyo Day 2/20260525_132144(0).jpg": {
      "en": "We had these flowers on our arch during our wedding! They were a different color variation, but it was so cool to get to see them here!",
      "es": "¡Tuvimos estas flores en nuestro arco durante la boda! Eran de otro color, pero fue muy especial poder verlas aquí."
    },
    "images/JapanTripPt2/Tokyo Day 2/20260525_205040.jpg": {
      "en": "Tokyo Dome City at night was surprisingly quiet. We got to enjoy what was essentially a solo stroll even though it was only about 9:00 PM.",
      "es": "Tokyo Dome City de noche estaba sorprendentemente tranquilo. Pudimos disfrutar lo que básicamente fue un paseo solo para nosotros, aunque apenas eran como las 9:00 p. m."
    },
    "images/JapanTripPt2/Tokyo Day 2/20260526_095040.jpg": {
      "en": "The convenience stores in Japan will change your life. I do not know what this thing is. I do not know how it was created. I can only marvel at how they were able to pack this much freshness and flavor into something sold at the American equivalent of a hotel gas station.",
      "es": "Las tiendas de conveniencia en Japón te cambian la vida. No sé qué es esta cosa. No sé cómo la crearon. Solo puedo maravillarme de que hayan logrado meter tanta frescura y sabor en algo vendido en el equivalente estadounidense a la gasolinera de un hotel."
    },
    "images/JapanTripPt2/Tokyo Day 2/20260526_161746(0).jpg": {
      "en": "Bye bye, Japan!!",
      "es": "¡¡Adiós, Japón!!"
    }
  };

  function formatPhotoTimestamp(filename) {
    const match = /^(\d{4})(\d{2})(\d{2})_(\d{2})(\d{2})/.exec(filename);
    if (!match) return { en: "", es: "" };

    const year = match[1];
    const monthIndex = Number(match[2]) - 1;
    const day = Number(match[3]);
    const hour24 = Number(match[4]);
    const minute = match[5];
    const hour12 = hour24 % 12 || 12;
    const period = hour24 >= 12 ? "PM" : "AM";

    return {
      en: `${photoMonthLabels.en[monthIndex]} ${day}, ${year}, ${hour12}:${minute} ${period}`,
      es: `${day} de ${photoMonthLabels.es[monthIndex]} de ${year}, ${match[4]}:${minute}`
    };
  }

  function makeLocationPhotos(folder, files, city) {
    return files.map(function (filename, index) {
      const timestamp = formatPhotoTimestamp(filename);
      const number = index + 1;
      const src = `images/${folder}/${filename}`;
      const customCaption = photoDescriptions[src];
      const timestampSuffix = {
        en: timestamp.en ? ` — ${timestamp.en}` : "",
        es: timestamp.es ? ` — ${timestamp.es}` : ""
      };
      return {
        src: src,
        alt: {
          en: `${city.en} honeymoon photo ${number}`,
          es: `Foto ${number} de la luna de miel en ${city.es}`
        },
        tone: "sakura",
        caption: customCaption ? {
          en: `${customCaption.en}${timestampSuffix.en}`,
          es: `${customCaption.es}${timestampSuffix.es}`
        } : {
          en: `${city.en} memory ${number}${timestampSuffix.en}`,
          es: `Recuerdo de ${city.es} ${number}${timestampSuffix.es}`
        }
      };
    });
  }

  const stops = [
    {
      id: "tokyo-arrival",
      sequence: "01",
      city: { en: "Tokyo + Haneda", es: "Tokio + Haneda" },
      date: { en: "May 13-14", es: "13-14 de mayo" },
      latLng: [35.5494, 139.7798],
      emoji: "🛬",
      summary: {
        en: "Touchdown at Haneda, a first Tokyo evening, and the gentle beginning of the whole adventure.",
        es: "Llegada a Haneda, la primera noche en Tokio y el comienzo tranquilo de toda la aventura."
      },
      tags: [
        { en: "Arrive 3:25 PM", es: "Llegada 3:25 PM" },
        { en: "Sleep: Tokyo", es: "Dormir: Tokio" },
        { en: "First full day", es: "Primer día completo" }
      ],
      photos: makeLocationPhotos("Tokyo_Hakone/Tokyo_Part1", [
        "20260513_184420.jpg",
        "20260513_185716.jpg",
        "20260514_103336.jpg",
        "20260514_111813.jpg",
        "20260514_134106.jpg",
        "20260514_160211.jpg",
        "20260514_164443.jpg"
      ], { en: "Tokyo", es: "Tokio" })
    },
    {
      id: "hakone",
      sequence: "02",
      city: { en: "Hakone", es: "Hakone" },
      date: { en: "May 15", es: "15 de mayo" },
      latLng: [35.2324, 139.1069],
      emoji: "♨️",
      summary: {
        en: "Mountain air, onsen pace, and a slower chapter tucked between Tokyo energy and Kyoto temples.",
        es: "Aire de montaña, ritmo de onsen y un capítulo más lento entre la energía de Tokio y los templos de Kioto."
      },
      tags: [
        { en: "Tokyo to Hakone", es: "Tokio a Hakone" },
        { en: "Sleep: Hakone", es: "Dormir: Hakone" },
        { en: "Fuji country", es: "Tierra del Fuji" }
      ],
      photos: makeLocationPhotos("Tokyo_Hakone/Hakone", [
        "20260515_113906.jpg",
        "20260515_140506.jpg",
        "20260515_144648.jpg",
        "20260515_164234.jpg",
        "20260515_171018.jpg",
        "20260515_172345.jpg",
        "20260515_172522.jpg",
        "20260515_181635(0).jpg",
        "20260516_063526.jpg",
        "20260516_065811.jpg",
        "20260516_070408.jpg",
        "20260516_070755.jpg",
        "20260516_071233.jpg",
        "20260516_072139.jpg",
        "20260516_072638.jpg",
        "20260516_072823.jpg",
        "20260516_072922.jpg",
        "20260516_092903.jpg"
      ], { en: "Hakone", es: "Hakone" })
    },
    {
      id: "kyoto",
      sequence: "03",
      city: { en: "Kyoto", es: "Kioto" },
      date: { en: "May 16-17", es: "16-17 de mayo" },
      latLng: [35.0116, 135.7681],
      emoji: "⛩️",
      summary: {
        en: "Our Kansai home base begins with temple mornings, old lanes, gardens, and lantern-lit evenings.",
        es: "Nuestra base en Kansai empieza con mañanas de templos, callejones antiguos, jardines y noches con faroles."
      },
      tags: [
        { en: "Hakone to Kyoto", es: "Hakone a Kioto" },
        { en: "Sleep: Kyoto", es: "Dormir: Kioto" },
        { en: "Temple days", es: "Días de templos" }
      ],
      photos: makeLocationPhotos("JapanTripPt2/Kyoto/Kyoto Day 1", [
        "20260517_075339.jpg",
        "20260517_080954.jpg",
        "20260517_084816.jpg",
        "20260517_111542(0).jpg",
        "20260517_210151.jpg"
      ], { en: "Kyoto Day 1", es: "Kioto día 1" })
    },
    {
      id: "osaka",
      sequence: "04",
      city: { en: "Osaka", es: "Osaka" },
      date: { en: "May 18", es: "18 de mayo" },
      latLng: [34.6937, 135.5023],
      emoji: "🍜",
      summary: {
        en: "A Kyoto-based day trip for street food, glowing signs, and Osaka's louder, playful pulse.",
        es: "Una excursión desde Kioto para comida callejera, luces brillantes y el pulso más alegre de Osaka."
      },
      tags: [
        { en: "Day trip", es: "Excursión del día" },
        { en: "Sleep: Kyoto", es: "Dormir: Kioto" },
        { en: "Food chapter", es: "Capítulo de comida" }
      ],
      photos: makeLocationPhotos("JapanTripPt2/Osaka", [
        "20260518_103303(0).jpg",
        "20260518_103614(0).jpg",
        "20260518_110428.jpg"
      ], { en: "Osaka", es: "Osaka" })
    },
    {
      id: "kyoto-encore",
      sequence: "05",
      city: { en: "Kyoto Encore", es: "Kioto otra vez" },
      date: { en: "May 19", es: "19 de mayo" },
      latLng: [35.0365, 135.7621],
      emoji: "🌸",
      summary: {
        en: "One more Kyoto day to slow down, revisit favorite paths, and let the old city linger.",
        es: "Un día más en Kioto para bajar el ritmo, volver a caminos favoritos y dejar que la ciudad antigua se quede con nosotros."
      },
      tags: [
        { en: "Kyoto base", es: "Base en Kioto" },
        { en: "Sleep: Kyoto", es: "Dormir: Kioto" },
        { en: "Slow day", es: "Día tranquilo" }
      ],
      photos: makeLocationPhotos("JapanTripPt2/Kyoto/Kyoto Day 2", [
        "20260519_092918.jpg",
        "20260519_092932.jpg",
        "20260519_094342.jpg",
        "20260519_094410.jpg",
        "20260519_100615.jpg",
        "20260519_124158.jpg",
        "20260519_133526.jpg",
        "20260519_144854(1).jpg",
        "20260519_153136.jpg"
      ], { en: "Kyoto Day 2", es: "Kioto día 2" })
    },
    {
      id: "matsumoto",
      sequence: "06",
      city: { en: "Matsumoto", es: "Matsumoto" },
      date: { en: "May 20-21", es: "20-21 de mayo" },
      latLng: [36.238, 137.972],
      emoji: "🏯",
      summary: {
        en: "North to the Japanese Alps for castle silhouettes, cooler air, and a mountain-town reset.",
        es: "Rumbo norte hacia los Alpes Japoneses para siluetas de castillo, aire fresco y una pausa de pueblo de montaña."
      },
      tags: [
        { en: "Kyoto to Matsumoto", es: "Kioto a Matsumoto" },
        { en: "Sleep: Matsumoto", es: "Dormir: Matsumoto" },
        { en: "Castle town", es: "Ciudad de castillo" }
      ],
      photos: makeLocationPhotos("JapanTripPt2/Matsumoto", [
        "20260520_181908(0).jpg",
        "20260520_182855.jpg",
        "20260520_194734.jpg",
        "20260521_155950.jpg",
        "20260521_173715(0).jpg",
        "20260521_193425.jpg"
      ], { en: "Matsumoto", es: "Matsumoto" })
    },
    {
      id: "tokyo-finale",
      sequence: "07",
      city: { en: "Tokyo Finale", es: "Final en Tokio" },
      date: { en: "May 22-25", es: "22-25 de mayo" },
      latLng: [35.6812, 139.7671],
      emoji: "🌃",
      summary: {
        en: "Back to Tokyo for four final days of neighborhoods, shops, late meals, and favorite discoveries.",
        es: "De regreso a Tokio para cuatro días finales de barrios, tiendas, cenas tarde y descubrimientos favoritos."
      },
      tags: [
        { en: "Matsumoto to Tokyo", es: "Matsumoto a Tokio" },
        { en: "Sleep: Tokyo", es: "Dormir: Tokio" },
        { en: "Final city days", es: "Días finales en la ciudad" }
      ],
      photos: makeLocationPhotos("JapanTripPt2/Tokyo Day 2", [
        "20260523_202302(0).jpg",
        "20260524_120249.jpg",
        "20260524_182310.jpg",
        "20260524_194929.jpg",
        "20260524_212852.jpg",
        "20260525_124001.jpg",
        "20260525_130912.jpg",
        "20260525_132144(0).jpg",
        "20260525_205040.jpg",
        "20260526_095040.jpg"
      ], { en: "Tokyo Finale", es: "Final en Tokio" })
    },
    {
      id: "narita",
      sequence: "08",
      city: { en: "Narita", es: "Narita" },
      date: { en: "May 26", es: "26 de mayo" },
      latLng: [35.7719, 140.3929],
      emoji: "✈️",
      summary: {
        en: "One final rail line to Narita, a 4:45 PM departure, and the full story coming home with us.",
        es: "Un último tren a Narita, salida a las 4:45 PM y toda la historia regresando con nosotros."
      },
      tags: [
        { en: "Tokyo to Narita", es: "Tokio a Narita" },
        { en: "Depart 4:45 PM", es: "Salida 4:45 PM" },
        { en: "Homebound", es: "Regreso a casa" }
      ],
      photos: makeLocationPhotos("JapanTripPt2/Tokyo Day 2", [
        "20260526_161746(0).jpg"
      ], { en: "Narita", es: "Narita" })
    }
  ];

  const labels = {
    play: { en: "Play route animation", es: "Reproducir animación de la ruta" },
    pause: { en: "Pause route animation", es: "Pausar animación de la ruta" },
    prevPhoto: { en: "Previous photo", es: "Foto anterior" },
    nextPhoto: { en: "Next photo", es: "Siguiente foto" },
    carousel: { en: "Photo carousel", es: "Carrusel de fotos" },
    photoDot: { en: "Show photo", es: "Mostrar foto" },
    captionMore: { en: "See more", es: "Ver más" },
    captionLess: { en: "See less", es: "Ver menos" },
    stop: { en: "Open stop", es: "Abrir parada" },
    zoomIn: { en: "Zoom in", es: "Acercar" },
    zoomOut: { en: "Zoom out", es: "Alejar" },
    zoomReset: { en: "Reset map view", es: "Restablecer mapa" }
  };

  const rainbowColors = ["#e84b5f", "#ff8a3d", "#f3c64f", "#58b86f", "#37a7d8", "#5967d8", "#a35bd8"];
  const routeLatLngs = stops.map(function (stop) { return stop.latLng; });
  const osakaIndex = stops.findIndex(function (stop) { return stop.id === "osaka"; });

  const state = {
    activeIndex: 0,
    photoIndex: 0,
    isPlaying: false,
    playbackFrame: null,
    playbackSegment: 0,
    playbackStartedAt: 0,
    playbackSegmentMs: 1900,
    map: null,
    bounds: null,
    stopMarkers: [],
    routeFlows: [],
    travelerMarker: null,
    mapResizeTimer: null,
    captionMeasureFrame: null,
    captionExpanded: {},
    lastPlaybackActive: 0
  };

  const el = {};

  function lang() {
    return document.documentElement.getAttribute("data-lang") === "es" ? "es" : "en";
  }

  function t(value) {
    if (!value) return "";
    return value[lang()] || value.en || "";
  }

  function init() {
    el.mapContainer = document.getElementById("japanMap");
    el.routeStatus = document.getElementById("routeStatus");
    el.routePlay = document.getElementById("routePlayButton");
    el.zoomIn = document.getElementById("zoomInButton");
    el.zoomOut = document.getElementById("zoomOutButton");
    el.zoomReset = document.getElementById("zoomResetButton");
    el.routeProgress = document.getElementById("routeProgressBar");
    el.stopSequence = document.getElementById("stopSequence");
    el.stopDate = document.getElementById("stopDate");
    el.stopTitle = document.getElementById("stopTitle");
    el.stopSummary = document.getElementById("stopSummary");
    el.stopTags = document.getElementById("stopTags");
    el.carouselWindow = document.getElementById("carouselWindow");
    el.carouselDots = document.getElementById("carouselDots");
    el.prevPhoto = document.getElementById("prevPhoto");
    el.nextPhoto = document.getElementById("nextPhoto");
    el.chapterRail = document.getElementById("chapterRail");

    initMap();
    renderChapters();
    bindControls();
    updateStaticLabels();
    setActive(0, { preservePhoto: false });
    window.addEventListener("resize", queueCaptionRefresh);

    new MutationObserver(function (mutations) {
      if (mutations.some(function (mutation) { return mutation.attributeName === "data-lang"; })) {
        updateStaticLabels();
        renderChapters();
        refreshStopMarkers();
        setActive(state.activeIndex, { preservePhoto: true });
      }
    }).observe(document.documentElement, { attributes: true });
  }

  function initMap() {
    if (!window.L) {
      el.mapContainer.innerHTML = '<div class="map-fallback"><span class="english">Map tiles could not load. Please check your internet connection.</span><span class="spanish">No se pudo cargar el mapa. Por favor revisa tu conexión a internet.</span></div>';
      return;
    }

    state.map = L.map(el.mapContainer, {
      zoomControl: false,
      scrollWheelZoom: true,
      doubleClickZoom: true,
      dragging: true,
      worldCopyJump: false,
      minZoom: 4,
      maxZoom: 13
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(state.map);

    state.bounds = L.latLngBounds(routeLatLngs).pad(0.08);
    fitRouteMap(false);

    drawRoute();
    renderStopMarkers();
    state.travelerMarker = L.marker(stops[0].latLng, {
      icon: L.divIcon({
        className: 'chibi-traveler-div-icon',
        iconSize: [70, 84],
        iconAnchor: [35, 78],
        html: '<img class="chibi-traveler-image" src="images/chibi.png" alt="" />'
      }),
      interactive: false,
      zIndexOffset: 1000
    }).addTo(state.map);
    updateTravelerFacing(false);
    queueMapRefresh();
    window.addEventListener("resize", queueMapRefresh);
  }

  function queueMapRefresh() {
    if (!state.map) return;
    window.clearTimeout(state.mapResizeTimer);
    state.mapResizeTimer = window.setTimeout(function () {
      if (!state.map) return;
      state.map.invalidateSize();
      fitRouteMap(false);
    }, 120);
  }

  function fitRouteMap(animate) {
    if (!state.map || !state.bounds) return;
    state.map.fitBounds(state.bounds, {
      padding: [42, 42],
      animate: animate !== false
    });
  }

  function drawRoute() {
    if (!state.map) return;
    state.routeFlows = [];

    for (let index = 0; index < stops.length - 1; index += 1) {
      const segment = [stops[index].latLng, stops[index + 1].latLng];
      L.polyline(segment, {
        color: '#1f2533',
        weight: 13,
        opacity: 0.18,
        lineCap: 'round',
        lineJoin: 'round',
        interactive: false
      }).addTo(state.map);

      const flow = L.polyline(segment, {
        color: rainbowColors[index % rainbowColors.length],
        weight: 6,
        opacity: 0.96,
        lineCap: 'round',
        lineJoin: 'round',
        className: 'leaflet-route-flow',
        interactive: false
      }).addTo(state.map);

      state.routeFlows.push(flow);
    }
  }

  function renderStopMarkers() {
    if (!state.map) return;
    state.stopMarkers.forEach(function (marker) { marker.remove(); });
    state.stopMarkers = stops.map(function (stop, index) {
      const marker = L.marker(stop.latLng, {
        icon: markerIcon(stop, index === state.activeIndex),
        keyboard: true,
        title: `${stop.sequence}. ${t(stop.city)}`,
        zIndexOffset: 500 + index
      }).addTo(state.map);
      marker.on('click', function () {
        stopPlayback();
        setActive(index, { preservePhoto: false, focusMap: true });
      });
      return marker;
    });
  }

  function refreshStopMarkers() {
    state.stopMarkers.forEach(function (marker, index) {
      marker.setIcon(markerIcon(stops[index], index === state.activeIndex));
      marker.options.title = `${stops[index].sequence}. ${t(stops[index].city)}`;
    });
  }

  function markerIcon(stop, isActive) {
    return L.divIcon({
      className: 'trip-stop-div-icon',
      iconSize: [58, 68],
      iconAnchor: [29, 60],
      html: [
        `<span class="leaflet-stop-pin${isActive ? ' is-active' : ''}" aria-label="${escapeHtml(t(labels.stop))} ${escapeHtml(stop.sequence)}: ${escapeHtml(t(stop.city))}">`,
        `<span class="leaflet-stop-emoji" aria-hidden="true">${stop.emoji}</span>`,
        `<span class="leaflet-stop-number">${stop.sequence}</span>`,
        '</span>'
      ].join('')
    });
  }

  function bindControls() {
    el.routePlay.addEventListener("click", function () {
      if (state.isPlaying) stopPlayback(); else startPlayback();
    });

    el.prevPhoto.addEventListener("click", function () { movePhoto(-1); });
    el.nextPhoto.addEventListener("click", function () { movePhoto(1); });

    el.zoomIn.addEventListener("click", function () {
      if (state.map) state.map.zoomIn();
    });
    el.zoomOut.addEventListener("click", function () {
      if (state.map) state.map.zoomOut();
    });
    el.zoomReset.addEventListener("click", function () {
      fitRouteMap(true);
    });

    bindCarouselGestures();
  }

  function bindCarouselGestures() {
    let startX = null;
    el.carouselWindow.tabIndex = 0;
    el.carouselWindow.addEventListener("pointerdown", function (event) {
      startX = event.clientX;
      if (el.carouselWindow.setPointerCapture) el.carouselWindow.setPointerCapture(event.pointerId);
    });
    el.carouselWindow.addEventListener("pointerup", function (event) {
      if (startX === null) return;
      const distance = event.clientX - startX;
      startX = null;
      if (Math.abs(distance) < 42) return;
      movePhoto(distance < 0 ? 1 : -1);
    });
    el.carouselWindow.addEventListener("pointercancel", function () { startX = null; });
    el.carouselWindow.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft") { event.preventDefault(); movePhoto(-1); }
      if (event.key === "ArrowRight") { event.preventDefault(); movePhoto(1); }
    });
  }

  function updateStaticLabels() {
    const playLabel = state.isPlaying ? t(labels.pause) : t(labels.play);
    el.routePlay.setAttribute("aria-label", playLabel);
    el.routePlay.setAttribute("title", playLabel);
    el.prevPhoto.setAttribute("aria-label", t(labels.prevPhoto));
    el.prevPhoto.setAttribute("title", t(labels.prevPhoto));
    el.nextPhoto.setAttribute("aria-label", t(labels.nextPhoto));
    el.nextPhoto.setAttribute("title", t(labels.nextPhoto));
    el.carouselWindow.setAttribute("aria-label", t(labels.carousel));
    el.zoomIn.setAttribute("aria-label", t(labels.zoomIn));
    el.zoomIn.setAttribute("title", t(labels.zoomIn));
    el.zoomOut.setAttribute("aria-label", t(labels.zoomOut));
    el.zoomOut.setAttribute("title", t(labels.zoomOut));
    el.zoomReset.setAttribute("aria-label", t(labels.zoomReset));
    el.zoomReset.setAttribute("title", t(labels.zoomReset));
    el.zoomReset.textContent = "Fit";
  }

  function renderChapters() {
    el.chapterRail.innerHTML = "";
    stops.forEach(function (stop, index) {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "chapter-chip";
      chip.dataset.index = String(index);
      chip.setAttribute("aria-label", `${t(labels.stop)} ${stop.sequence}: ${t(stop.city)}`);
      chip.innerHTML = [
        `<span class="chapter-index">${stop.sequence}</span>`,
        '<span class="chapter-copy">',
        `<span class="chapter-city">${escapeHtml(t(stop.city))}</span>`,
        `<span class="chapter-date">${escapeHtml(t(stop.date))}</span>`,
        "</span>"
      ].join("");
      chip.addEventListener("click", function () {
        stopPlayback();
        setActive(index, { preservePhoto: false, focusMap: true });
      });
      el.chapterRail.appendChild(chip);
    });
  }

  function setActive(index, options) {
    const settings = Object.assign({ preservePhoto: false, focusMap: false }, options || {});
    state.activeIndex = Math.max(0, Math.min(index, stops.length - 1));
    if (!settings.preservePhoto) state.photoIndex = 0;

    const stop = stops[state.activeIndex];
    el.routeStatus.textContent = t(stop.city);
    el.stopSequence.textContent = stop.sequence;
    el.stopDate.textContent = t(stop.date);
    el.stopTitle.textContent = t(stop.city);
    el.stopSummary.textContent = t(stop.summary);

    renderTags(stop);
    renderCarousel(stop);
    syncActiveClasses();
    updateRouteProgress();

    if (!state.isPlaying) {
      positionTraveler(stop.latLng);
      updateTravelerFacing(state.activeIndex >= osakaIndex);
    }
    if (settings.focusMap && state.map) {
      state.map.flyTo(stop.latLng, Math.max(state.map.getZoom(), 9), { duration: 0.75 });
    }
  }

  function renderTags(stop) {
    el.stopTags.innerHTML = "";
    stop.tags.forEach(function (tag) {
      const pill = document.createElement("span");
      pill.textContent = t(tag);
      el.stopTags.appendChild(pill);
    });
  }

  function renderCarousel(stop) {
    const photos = stop.photos;
    el.carouselWindow.innerHTML = "";
    el.carouselDots.innerHTML = "";

    const track = document.createElement("div");
    track.className = "carousel-track";

    photos.forEach(function (photo, index) {
      const slide = document.createElement("article");
      slide.className = "photo-slide";
      const card = document.createElement("div");
      card.className = "photo-card";
      if (photo.src) {
        const image = document.createElement("img");
        image.src = photo.src;
        image.alt = t(photo.alt) || t(photo.caption);
        image.loading = index === state.photoIndex ? "eager" : "lazy";
        image.decoding = "async";
        card.appendChild(image);
      } else {
        const placeholder = document.createElement("div");
        placeholder.className = `photo-placeholder tone-${photo.tone || "sakura"}`;
        placeholder.setAttribute("aria-hidden", "true");
        placeholder.innerHTML = '<span class="placeholder-mark"></span>';
        card.appendChild(placeholder);
      }

      const captionKey = getCaptionKey(stop, photo, index);
      const captionPanel = document.createElement("div");
      captionPanel.className = "photo-caption-panel";
      if (state.captionExpanded[captionKey]) captionPanel.classList.add("is-expanded");

      const caption = document.createElement("p");
      caption.className = "photo-caption";
      caption.id = `photoCaption-${stop.id}-${index}`;
      caption.textContent = t(photo.caption);

      const captionToggle = document.createElement("button");
      captionToggle.type = "button";
      captionToggle.className = "caption-toggle";
      captionToggle.hidden = true;
      captionToggle.setAttribute("aria-controls", caption.id);
      updateCaptionToggleLabel(captionToggle, captionPanel.classList.contains("is-expanded"));
      captionToggle.addEventListener("click", function () {
        const isExpanded = !captionPanel.classList.contains("is-expanded");
        state.captionExpanded[captionKey] = isExpanded;
        captionPanel.classList.toggle("is-expanded", isExpanded);
        updateCaptionToggleLabel(captionToggle, isExpanded);
        queueCaptionRefresh();
      });

      captionPanel.appendChild(caption);
      captionPanel.appendChild(captionToggle);
      slide.appendChild(card);
      slide.appendChild(captionPanel);
      track.appendChild(slide);

      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "carousel-dot";
      dot.setAttribute("aria-label", `${t(labels.photoDot)} ${index + 1}`);
      dot.addEventListener("click", function () {
        state.photoIndex = index;
        updateCarousel();
      });
      el.carouselDots.appendChild(dot);
    });

    el.carouselWindow.appendChild(track);
    updateCarousel();
    queueCaptionRefresh();
  }

  function getCaptionKey(stop, photo, index) {
    return photo.src || `${stop.id}-${index}`;
  }

  function updateCaptionToggleLabel(button, isExpanded) {
    button.textContent = t(isExpanded ? labels.captionLess : labels.captionMore);
    button.setAttribute("aria-expanded", isExpanded ? "true" : "false");
  }

  function queueCaptionRefresh() {
    if (state.captionMeasureFrame) cancelAnimationFrame(state.captionMeasureFrame);
    state.captionMeasureFrame = requestAnimationFrame(refreshCaptionOverflow);
  }

  function refreshCaptionOverflow() {
    state.captionMeasureFrame = null;
    Array.prototype.forEach.call(el.carouselWindow.querySelectorAll(".photo-caption-panel"), function (panel) {
      const caption = panel.querySelector(".photo-caption");
      const button = panel.querySelector(".caption-toggle");
      if (!caption || !button) return;

      const styles = window.getComputedStyle(caption);
      const lineHeight = Number.parseFloat(styles.lineHeight) || 20;
      const paddingTop = Number.parseFloat(styles.paddingTop) || 0;
      const paddingBottom = Number.parseFloat(styles.paddingBottom) || 0;
      const collapsedHeight = (lineHeight * 3) + paddingTop + paddingBottom + 2;
      const clone = caption.cloneNode(true);
      clone.removeAttribute("id");
      clone.classList.add("photo-caption-measure");
      clone.style.width = `${caption.getBoundingClientRect().width}px`;
      panel.appendChild(clone);
      const fullHeight = clone.scrollHeight;
      clone.remove();

      const hasOverflow = fullHeight > collapsedHeight;
      const slide = panel.closest(".photo-slide");
      const isActiveSlide = !slide || slide.classList.contains("is-active");
      panel.classList.toggle("has-overflow", hasOverflow);
      button.hidden = !hasOverflow;
      button.classList.toggle("is-visible", hasOverflow);
      button.tabIndex = hasOverflow && isActiveSlide ? 0 : -1;
      if (!hasOverflow) panel.classList.remove("is-expanded");
      updateCaptionToggleLabel(button, hasOverflow && panel.classList.contains("is-expanded"));
    });
  }

  function movePhoto(delta) {
    const count = stops[state.activeIndex].photos.length;
    state.photoIndex = (state.photoIndex + delta + count) % count;
    updateCarousel();
  }

  function updateCarousel() {
    const track = el.carouselWindow.querySelector(".carousel-track");
    if (track) track.style.transform = `translateX(-${state.photoIndex * 100}%)`;
    Array.prototype.forEach.call(el.carouselWindow.querySelectorAll(".photo-slide"), function (slide, index) {
      const isActive = index === state.photoIndex;
      slide.classList.toggle("is-active", isActive);
      slide.setAttribute("aria-hidden", isActive ? "false" : "true");
      const captionButton = slide.querySelector(".caption-toggle");
      if (captionButton) captionButton.tabIndex = isActive && !captionButton.hidden ? 0 : -1;
    });
    Array.prototype.forEach.call(el.carouselDots.children, function (dot, index) {
      dot.classList.toggle("is-active", index === state.photoIndex);
      dot.setAttribute("aria-current", index === state.photoIndex ? "true" : "false");
    });
    queueCaptionRefresh();

  }

  function syncActiveClasses() {
    refreshStopMarkers();

    Array.prototype.forEach.call(el.chapterRail.children, function (chip, index) {
      chip.classList.toggle("is-active", index === state.activeIndex);
      chip.setAttribute("aria-pressed", index === state.activeIndex ? "true" : "false");
      chip.setAttribute("aria-label", `${t(labels.stop)} ${stops[index].sequence}: ${t(stops[index].city)}`);
    });

    state.routeFlows.forEach(function (flow, index) {
      const path = flow.getElement && flow.getElement();
      if (!path) return;
      path.classList.toggle("is-past", index < state.activeIndex - 1);
      path.classList.toggle("is-current", index === Math.max(0, state.activeIndex - 1));
    });
  }

  function updateRouteProgress(percentOverride) {
    const percent = typeof percentOverride === "number"
      ? percentOverride
      : (state.activeIndex / (stops.length - 1)) * 100;
    el.routeProgress.style.width = `${Math.max(0, Math.min(100, percent))}%`;
  }

  function startPlayback() {
    if (state.activeIndex >= stops.length - 1) {
      setActive(0, { preservePhoto: false });
      fitRouteMap(true);
      updateRouteProgress(0);
    }

    state.isPlaying = true;
    state.playbackSegment = Math.min(state.activeIndex, stops.length - 2);
    state.playbackStartedAt = 0;
    state.lastPlaybackActive = state.activeIndex;
    el.routePlay.classList.add("is-playing");
    updateStaticLabels();
    state.playbackFrame = requestAnimationFrame(playbackTick);
  }

  function stopPlayback() {
    if (state.playbackFrame) {
      cancelAnimationFrame(state.playbackFrame);
      state.playbackFrame = null;
    }
    state.isPlaying = false;
    state.playbackStartedAt = 0;
    el.routePlay.classList.remove("is-playing");
    updateStaticLabels();
    updateRouteProgress();
    positionTraveler(stops[state.activeIndex].latLng);
    updateTravelerFacing(state.activeIndex >= osakaIndex);
  }

  function playbackTick(timestamp) {
    if (!state.isPlaying) return;
    if (!state.playbackStartedAt) state.playbackStartedAt = timestamp;

    const elapsed = timestamp - state.playbackStartedAt;
    const local = Math.min(elapsed / state.playbackSegmentMs, 1);
    const current = stops[state.playbackSegment].latLng;
    const next = stops[state.playbackSegment + 1].latLng;
    const latLng = interpolateLatLng(current, next, local);
    positionTraveler(latLng);
    updateTravelerFacing(state.playbackSegment >= osakaIndex);

    const routePercent = ((state.playbackSegment + local) / (stops.length - 1)) * 100;
    updateRouteProgress(routePercent);

    const activeFromMotion = local > 0.55 ? state.playbackSegment + 1 : state.playbackSegment;
    if (activeFromMotion !== state.lastPlaybackActive) {
      state.lastPlaybackActive = activeFromMotion;
      setActive(activeFromMotion, { preservePhoto: false });
      updateRouteProgress(routePercent);
    }

    if (local >= 1) {
      state.playbackSegment += 1;
      state.playbackStartedAt = timestamp;
      if (state.playbackSegment >= stops.length - 1) {
        setActive(stops.length - 1, { preservePhoto: true });
        stopPlayback();
        return;
      }
    }

    state.playbackFrame = requestAnimationFrame(playbackTick);
  }

  function interpolateLatLng(start, end, amount) {
    return [
      start[0] + (end[0] - start[0]) * amount,
      start[1] + (end[1] - start[1]) * amount
    ];
  }

  function positionTraveler(latLng) {
    if (state.travelerMarker) state.travelerMarker.setLatLng(latLng);
  }

  function updateTravelerFacing(faceRight) {
    if (!state.travelerMarker) return;
    const markerEl = state.travelerMarker.getElement && state.travelerMarker.getElement();
    if (markerEl) markerEl.classList.toggle("is-facing-right", Boolean(faceRight));
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  document.addEventListener("DOMContentLoaded", init);
})();
