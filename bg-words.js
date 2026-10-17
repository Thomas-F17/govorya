/* Bulgarian words 300–1000. Same format as BG_DECK in index.html:
   bulgarian | english | category | note
   Stress: apostrophe after the stressed vowel. ^ = final а/я sounds like ъ. */
const BG_DECK_2 = `
ка'жа|to say, to tell (once)|verb|Pair: казвам. Кажи ми! Tell me!
ви'дя|to see (once)|verb|Pair: виждам. Imperative: виж!
дам|to give (once)|verb|дам, дадеш, даде… Pair: давам. Imperative: дай!
до'йда|to come (once)|verb|Pair: идвам. Imperative: ела!
оти'да|to go (once)|verb|Pair: отивам. Imperative: иди!
напра'вя|to do, to make (once)|verb|Pair: правя.
разбера'^|to understand, to get it (once)|verb|Pair: разбирам. Разбрах! Got it!
чу'я|to hear (once)|verb|Pair: чувам.
ку'пя|to buy (once)|verb|Pair: купувам.
платя'^|to pay (once)|verb|Pair: плащам.
взе'ма|to take (once)|verb|Pair: вземам.
оста'на|to stay (once)|verb|Pair: оставам.
ста'на|to get up, to become (once)|verb|Pair: ставам.
запо'чна|to begin (once)|verb|Pair: започвам.
свъ'рша|to finish (once)|verb|Pair: свършвам.
отво'ря|to open (once)|verb|Pair: отварям.
затво'ря|to close (once)|verb|Pair: затварям.
помо'гна|to help (once)|verb|Pair: помагам.
тръ'гна|to set off (once)|verb|Pair: тръгвам.
зна'м|I know (short form)|verb|Same as зная, and more common in speech.
позна'вам|I know (a person or place)|verb|Познавам Иван. I know Ivan.
вли'зам|I go in, I enter|verb|Perfective: вляза. Imperative: влез!
изли'зам|I go out|verb|Perfective: изляза. Imperative: излез!
вля'за|to go in (once)|verb
изля'за|to go out (once)|verb
връ'щам се|I come back, I return|verb|Perfective: върна се.
въ'рна се|to come back (once)|verb
вървя'^|I walk, I go on foot|verb
ти'чам|I run|verb
бя'гам|I run, I run away|verb
седя'^|I'm sitting|verb
стоя'^|I'm standing|verb
лежа'^|I'm lying (down)|verb
ся'дам|I sit down|verb|Perfective: седна. Седни! Sit down!
се'дна|to sit down (once)|verb
ля'гам|I lie down, I go to bed|verb|Perfective: легна.
ле'гна|to lie down (once)|verb
но'ся|I carry; I wear|verb
донеса'^|to bring (once)|verb
во'дя|I lead, I take (someone)|verb
ка'рам|I drive|verb|Карам кола. I drive a car.
летя'^|I fly|verb
плу'вам|I swim|verb
игра'я|I play|verb
сви'ря|I play (an instrument)|verb
пе'я|I sing|verb
танцу'вам|I dance|verb
рису'вам|I draw, I paint|verb
го'твя|I cook|verb
ми'я|I wash|verb
чи'стя|I clean|verb
пера'^|I wash (clothes)|verb
обли'чам се|I get dressed|verb
къ'пя се|I have a bath / shower|verb
събу'ждам се|I wake up|verb
сре'щам|I meet|verb|Perfective: срещна.
сре'щна|to meet (once)|verb
запозна'вам се|I get to know someone|verb
звъня'^|I ring, I call|verb
оба'ждам се|I call, I phone|verb|Ще ти се обадя. I'll call you.
оба'дя се|to call, to phone (once)|verb
изпра'щам|I send|verb|Perfective: изпратя.
изпра'тя|to send (once)|verb
полу'чавам|I receive, I get|verb|Perfective: получа.
полу'ча|to receive (once)|verb
тъ'рся|I look for|verb
нами'рам|I find|verb|Perfective: намеря.
наме'ря|to find (once)|verb
гу'бя|I lose|verb|Perfective: загубя.
загу'бя|to lose (once)|verb
по'мня|I remember|verb
забра'вям|I forget|verb|Perfective: забравя.
забра'вя|to forget (once)|verb
се'щам се|I remember, I think of|verb|Сетих се! Now I remember!
нау'чавам|I learn, I find out|verb|Perfective: науча.
нау'ча|to learn (once)|verb
препода'вам|I teach|verb
обясня'вам|I explain|verb|Perfective: обясня.
обясня'^|to explain (once)|verb
пока'звам|I show|verb|Perfective: покажа.
пока'жа|to show (once)|verb
повта'рям|I repeat|verb|Perfective: повторя.
повто'ря|to repeat (once)|verb
преве'ждам|I translate|verb
вя'рвам|I believe|verb
надя'вам се|I hope|verb
стра'хувам се|I'm afraid|verb
ра'двам се|I'm glad|verb
сме'я се|I laugh|verb
пла'ча|I cry|verb
усми'хвам се|I smile|verb
мра'зя|I hate|verb
уме'я|I know how to|verb
реша'вам|I decide|verb|Perfective: реша.
реша'^|to decide (once)|verb
изби'рам|I choose|verb|Perfective: избера.
избера'^|to choose (once)|verb
предпочи'там|I prefer|verb
опи'твам|I try|verb|Perfective: опитам.
опи'там|to try (once)|verb
успя'вам|I manage, I succeed|verb|Perfective: успея.
успе'я|to manage (once)|verb
продължа'вам|I continue|verb
спи'рам|I stop|verb|Perfective: спра.
спра^|to stop (once)|verb
чу'вствам се|I feel|verb|Как се чувстваш? How do you feel?
боли'|it hurts|verb|Боли ме глава. I have a headache.
стру'ва|it costs|verb
ста'ва|it's OK; it happens|verb|Става! OK, fine!
слу'чва се|it happens|verb
ва'жи|it's valid; OK, deal|verb|Важи! Deal!
ра'ждам се|I'm born|verb|Роден съм в Лондон. I was born in London.
уми'рам|I die|verb
почи'вам|I rest|verb
ка'чвам се|I get on, I go up|verb
сли'зам|I get off, I go down|verb
мина'вам|I pass, I go by|verb
преси'чам|I cross|verb
зави'вам|I turn|verb
сти'гам|I reach, I get to; it's enough|verb|Стига! Enough!
присти'гам|I arrive|verb
зами'навам|I leave (on a trip)|verb
сла'гам|I put|verb|Perfective: сложа.
сло'жа|to put (once)|verb
държа'^|I hold, I keep|verb
хвъ'рлям|I throw|verb
сме'ням|I change, I exchange|verb
проме'ням|I change (something)|verb
прода'вам|I sell|verb
пече'ля|I win, I earn|verb
ха'рча|I spend (money)|verb
пестя'^|I save (money)|verb
броя'^|I count|verb
строя'^|I build|verb
попра'вям|I fix, I correct|verb
чу'пя|I break|verb|Perfective: счупя.
счу'пя|to break (once)|verb
вклю'чвам|I switch on; I include|verb
изклю'чвам|I switch off|verb
пу'скам|I let go; I put on (music)|verb
мири'ша|I smell|verb
пи'пам|I touch|verb
заку'свам|I have breakfast|verb
обя'двам|I have lunch|verb
вече'рям|I have dinner|verb
пу'ша|I smoke|verb
съ'рдя се|I'm angry|verb
ка'рам се|I quarrel; I tell off|verb
извиня'вам се|I apologise|verb
поздравя'вам|I greet; I congratulate|verb
посеща'вам|I visit|verb
разхо'ждам се|I go for a walk|verb
бъ'рзам|I hurry|verb
закъсня'вам|I'm late|verb
па'зя|I keep, I protect|verb
гри'жа се|I take care of|verb
съби'рам|I collect, I gather|verb
усе'щам|I feel, I sense|verb
пека'^|I bake, I roast|verb
ре'жа|I cut|verb
ме'стя се|I move (house)|verb
нае'мам|I rent, I hire|verb
дължа'^|I owe|verb
отка'звам|I refuse; I cancel|verb
прие'мам|I accept|verb
предла'гам|I offer, I suggest|verb
обеща'вам|I promise|verb
обсъ'ждам|I discuss|verb
съгла'сявам се|I agree|verb
доба'вям|I add|verb
разка'звам|I tell (a story)|verb
пра'зную|I celebrate|verb
жени' се|to get married|verb|Женя се. I'm getting married.
пъте'шествам|I travel (far)|verb
ли'псва ми|I miss (it / someone)|verb|Липсваш ми. I miss you.
пре'чи|it bothers, it's in the way|verb
мо'же|it's possible; may|verb|Може ли? May I?
поне'делник|Monday|noun
вто'рник|Tuesday|noun
сря'да|Wednesday|noun
четвъ'ртък|Thursday|noun
пе'тък|Friday|noun
събо'та|Saturday|noun
неде'ля|Sunday|noun
януа'ри|January|noun
февруа'ри|February|noun
март|March|noun
апри'л|April|noun
май|May|noun
ю'ни|June|noun
ю'ли|July|noun
а'вгуст|August|noun
септе'мври|September|noun
окто'мври|October|noun
ное'мври|November|noun
деке'мври|December|noun
про'лет|spring|noun|Feminine: пролетта.
ля'то|summer|noun
е'сен|autumn|noun|Feminine: есента.
зи'ма|winter|noun
су'трин|morning|noun|Feminine: сутринта. Сутрин = in the morning.
обя'д|lunch; noon|noun
следо'бед|afternoon|noun
полуно'щ|midnight|noun
моме'нт|moment|noun
секу'нда|second|noun
да'та|date (calendar)|noun
рожде'н ден|birthday|noun
пра'зник|holiday, celebration|noun
вака'нция|holiday, vacation|noun
уи'кенд|weekend|noun
бъ'деще|future|noun
мина'ло|past|noun
живо'т|life|noun
смърт|death|noun
любо'в|love|noun
свят|world|noun
приро'да|nature|noun
земя'|earth, land, ground|noun
не'бе|sky|noun
звезда'|star|noun
луна'|moon|noun
ве'тър|wind|noun
о'блак|cloud|noun
мъгла'|fog|noun
лед|ice|noun
река'|river|noun
е'зеро|lake|noun
гора'|forest|noun
дърво'|tree; wood|noun
цве'те|flower|noun
трева'|grass|noun
ка'мък|stone|noun
по'ле|field|noun
плаж|beach|noun
о'стров|island|noun
бряг|shore, coast|noun
връх|summit, peak|noun
ку'че|dog|noun
ко'тка|cat|noun
пти'ца|bird|noun
ри'ба|fish|noun
кон|horse|noun
кра'ва|cow|noun
пи'ле|chicken|noun
живо'тно|animal|noun
ме'чка|bear|noun
вълк|wolf|noun
тя'ло|body|noun
лице'|face|noun
о'ко|eye|noun|Plural: очи.
у'хо|ear|noun|Plural: уши.
нос|nose|noun
уста'|mouth|noun
зъб|tooth|noun
коса'|hair|noun
крак|leg, foot|noun
гръб|back|noun
коре'м|belly, stomach|noun
пръст|finger, toe|noun
гъ'рло|throat|noun
кръв|blood|noun
здра'ве|health|noun|Наздраве! = to (your) health.
бо'лест|illness|noun
лека'рство|medicine|noun
бо'лница|hospital|noun
апте'ка|pharmacy|noun
моми'че|girl|noun
мо'мче|boy|noun
бе'бе|baby|noun
ба'ба|grandmother|noun
дя'до|grandfather|noun|Masculine, though it ends in -о.
чи'чо|uncle|noun
ле'ля|aunt|noun
братовче'д|cousin (m)|noun
роди'тели|parents|noun
съпру'г|husband|noun
съпру'га|wife|noun
го'дже|boyfriend, girlfriend|noun|Casual.
коле'га|colleague|noun
шеф|boss|noun
съсе'д|neighbour|noun
гост|guest|noun
учи'тел|teacher|noun
учени'к|pupil|noun
студе'нт|student|noun
инжене'р|engineer|noun
шофьо'р|driver|noun
сервитьо'р|waiter|noun
продава'ч|shop assistant|noun
полица'й|police officer|noun
адвока'т|lawyer|noun
пи'сател|writer|noun
худо'жник|artist, painter|noun
господи'н|Mr, sir|noun
госпожа'|Mrs, madam|noun
госпо'жица|Miss|noun
чужде'нец|foreigner|noun
бъ'лгарин|Bulgarian (man)|noun
бъ'лгарка|Bulgarian (woman)|noun
англича'нин|Englishman|noun
францу'зин|Frenchman|noun
италиа'нец|Italian (man)|noun
грък|Greek (man)|noun
апартаме'нт|flat, apartment|noun
врата'|door|noun
прозо'рец|window|noun
ку'хня|kitchen|noun
ба'ня|bathroom|noun
спа'лня|bedroom|noun
хол|living room|noun
легло'|bed|noun
стол|chair|noun
дива'н|sofa|noun
шкаф|cupboard|noun
ета'ж|floor, storey|noun
стъ'лби|stairs|noun
асансьо'р|lift, elevator|noun
ключ|key|noun
ла'мпа|lamp|noun
ча'ша|glass, cup|noun
чини'я|plate|noun
лъжи'ца|spoon|noun
ви'лица|fork|noun
нож|knife|noun
хлади'лник|fridge|noun
пе'чка|stove|noun
телеви'зор|TV set|noun
компю'тър|computer|noun
огле'дало|mirror|noun
дре'хи|clothes|noun
ри'за|shirt|noun
пантало'н|trousers|noun
ро'кля|dress|noun
обу'вки|shoes|noun
я'ке|jacket|noun
па'лто|coat|noun
ша'пка|hat|noun
ча'нта|bag|noun
ча'дър|umbrella|noun
очила'|glasses|noun
часо'вник|watch, clock|noun
пода'рък|present, gift|noun
я'дене|food, dish|noun
заку'ска|breakfast|noun
вече'ря|dinner|noun
ме'со|meat|noun
сире'не|white cheese|noun|Bulgaria's brined cheese, like feta.
кашкава'л|yellow cheese|noun
яйце'|egg|noun
мля'ко|milk|noun
ки'село мля'ко|yoghurt|noun|Literally "sour milk".
ма'сло|butter|noun
о'лио|cooking oil|noun
сол|salt|noun
пипе'р|pepper|noun
за'хар|sugar|noun|Feminine: захарта.
ори'з|rice|noun
карто'фи|potatoes|noun
дома'ти|tomatoes|noun
кра'ставица|cucumber|noun
лук|onion|noun
че'сън|garlic|noun
сала'та|salad|noun
шо'пска сала'та|shopska salad|noun|Tomato, cucumber, pepper, onion and grated сирене.
су'па|soup|noun
плод|fruit|noun
зеленчу'к|vegetable|noun
я'бълка|apple|noun
бана'н|banana|noun
портока'л|orange|noun
гро'зде|grapes|noun
я'года|strawberry|noun
то'рта|cake|noun
шокола'д|chocolate|noun
сладоле'д|ice cream|noun
сок|juice|noun
раки'я|rakia (fruit brandy)|noun
меню'|menu|noun
сме'тка|bill; account|noun
ба'ница|banitsa (cheese pastry)|noun
кеба'пче|kebapche (grilled meat roll)|noun
кюфте'|meatball|noun
боб|beans|noun
ле'ща|lentils|noun
напи'тка|drink, beverage|noun
це'нтър|centre|noun
пло'щад|square|noun
парк|park|noun
цъ'рква|church|noun
манасти'р|monastery|noun
музе'й|museum|noun
теа'тър|theatre|noun
ки'но|cinema|noun
университе'т|university|noun
о'фис|office|noun
фи'рма|company, firm|noun
ба'нка|bank|noun
по'ща|post office; mail|noun
паза'р|market|noun
лети'ще|airport|noun
спи'рка|stop (bus, tram)|noun
такси'|taxi|noun
метро'|underground, metro|noun
трамва'й|tram|noun
самоле'т|plane|noun
кора'б|ship|noun
колело'|bicycle; wheel|noun
мост|bridge|noun
сгра'да|building|noun
кварта'л|neighbourhood|noun
сто'лица|capital city|noun
държа'ва|state, country|noun
гра'ница|border|noun
ка'рта|map; card|noun
адре'с|address|noun
посо'ка|direction|noun
ъ'гъл|corner|noun
светофа'р|traffic lights|noun
па'ркинг|car park|noun
на'чин|way, manner|noun
част|part|noun
слу'чай|case, occasion|noun
иде'я|idea|noun
мне'ние|opinion|noun
причи'на|reason|noun
резулта'т|result|noun
цел|goal, aim|noun
възмо'жност|possibility, chance|noun
пра'во|right (legal)|noun
си'ла|strength, force|noun
мир|peace|noun
война'|war|noun
и'стина|truth|noun
лъжа'|lie|noun
сми'съл|sense, meaning|noun
по'мощ|help|noun
гре'шка|mistake|noun
приме'р|example|noun
информа'ция|information|noun
нови'ни|news|noun
ве'стник|newspaper|noun
пи'смо|letter|noun
съобще'ние|message|noun
сни'мка|photo|noun
филм|film|noun
му'зика|music|noun
пе'сен|song|noun
игра'|game|noun
спорт|sport|noun
фу'тбол|football|noun
сва'тба|wedding|noun
цена'|price|noun
лев|lev (old currency)|noun
е'вро|euro|noun
реше'ние|decision|noun
въ'зраст|age|noun
цвят|colour|noun
ра'змер|size|noun
тегло'|weight|noun
разстоя'ние|distance|noun
ско'рост|speed|noun
край|end|noun
нача'ло|beginning|noun
среда'|middle; environment|noun
страни'ца|page|noun
уро'к|lesson|noun
изпи'т|exam|noun
клас|class|noun
дома'шно|homework|noun
събра'ние|meeting (formal)|noun
сре'ща|meeting, date|noun
пъту'ване|trip, journey|noun
бага'ж|luggage|noun
паспо'рт|passport|noun
резерва'ция|reservation|noun
интерне'т|internet|noun
приложе'ние|app; appendix|noun
и'мейл|email|noun
прое'кт|project|noun
план|plan|noun
зада'ча|task, problem|noun
срок|deadline, term|noun
запла'та|salary|noun
да'нък|tax|noun
поли'тика|politics|noun
прави'телство|government|noun
зако'н|law|noun
избо'ри|elections|noun
наро'д|people, nation|noun
общество'|society|noun
култу'ра|culture|noun
рели'гия|religion|noun
Бог|God|noun
душа'|soul|noun
чу'вство|feeling|noun
страх|fear|noun
ра'дост|joy|noun
тъга'|sadness|noun
гняв|anger|noun
наде'жда|hope|noun
мечта'|dream, wish|noun
сън|sleep; dream|noun
шега'|joke|noun
кеф|fun, pleasure|noun|Casual. Кеф ми е. I'm enjoying it.
късме'т|luck|noun
вещ|thing, item|noun
предме'т|object; school subject|noun
кути'я|box|noun
лист|leaf; sheet of paper|noun
химика'лка|pen|noun
моли'в|pencil|noun
харти'я|paper|noun
тетра'дка|notebook|noun
ре'чник|dictionary|noun
портфе'йл|wallet|noun
температу'ра|temperature|noun
гра'дус|degree|noun
студ|cold (noun)|noun
же'га|heat (weather)|noun
дъ'лъг|long|adj
къс|short|adj
широ'к|wide|adj
те'сен|narrow|adj
дебе'л|thick, fat|adj
тъ'нък|thin|adj
те'жък|heavy; hard|adj
лек|light; easy|adj|Лека нощ! Good night!
тъ'мен|dark|adj
све'тъл|light, bright|adj
чист|clean|adj
мръ'сен|dirty|adj
пра'зен|empty|adj
пъ'лен|full|adj
си'лен|strong|adj
слаб|weak; thin|adj
бога'т|rich|adj
бе'ден|poor|adj
здрав|healthy|adj
бо'лен|ill, sick|adj
жив|alive|adj
мъ'ртъв|dead|adj
ве'сел|cheerful|adj
тъ'жен|sad|adj
до'волен|pleased, satisfied|adj
ядо'сан|angry|adj
спо'коен|calm|adj
упла'шен|scared|adj
влю'бен|in love|adj
же'нен|married (man)|adj
омъ'жена|married (woman)|adj
сам|alone|adj|сама, само, сами.
у'мен|clever|adj
глу'пав|stupid|adj
мил|sweet, dear|adj
любе'зен|kind, polite|adj
сме'шен|funny|adj
ску'чен|boring|adj
пра'вилен|correct|adj
гре'шен|wrong|adj
ве'рен|true; faithful|adj
и'стински|real|adj
възмо'жен|possible|adj
невъзмо'жен|impossible|adj
необходи'м|necessary|adj
поле'зен|useful|adj
опа'сен|dangerous|adj
безопа'сен|safe|adj
си'гурен|sure, certain|adj
гото'в|ready|adj
изве'стен|famous|adj
позна'т|familiar, known|adj
непозна'т|unknown; stranger|adj
чужд|foreign, someone else's|adj
ме'стен|local|adj
цял|whole|adj
разли'чен|different|adj
една'къв|the same, identical|adj
друг|other|adj
сле'дващ|next|adj
мина'л|last, past|adj|Миналата година = last year.
спе'шен|urgent|adj
то'чен|exact, punctual|adj
я'сен|clear|adj
сло'жен|complicated|adj
прост|simple|adj
тих|quiet|adj
шу'мен|noisy|adj
удо'бен|comfortable|adj
вку'сен|tasty|adj
сла'дък|sweet|adj
со'лен|salty|adj
лют|hot, spicy|adj
ки'сел|sour|adj
горчи'в|bitter|adj
пре'сен|fresh|adj
сух|dry|adj
мо'кър|wet|adj
мек|soft|adj
твърд|hard, firm|adj
кръ'гъл|round|adj
моде'рен|modern|adj
гро'зен|ugly|adj
бли'зък|close, near|adj
дале'чен|distant|adj
ляв|left|adj
де'сен|right (side)|adj
гла'вен|main|adj
ча'стен|private|adj
обще'ствен|public|adj
национа'лен|national|adj
междунаро'ден|international|adj
европе'йски|European|adj
англи'йски|English|adj
фре'нски|French|adj
италиа'нски|Italian|adj
гръ'цки|Greek|adj
ру'ски|Russian|adj
не'мски|German|adj
испа'нски|Spanish|adj
америка'нски|American|adj
син|blue|adj|синя, синьо, сини.
жълт|yellow|adj
кафя'в|brown|adj
сив|grey|adj
ро'зов|pink|adj
ора'нжев|orange (colour)|adj
лила'в|purple|adj
така'|so, like this|adv
ина'че|otherwise|adv
то'лкова|so much, so|adv
по'вече|more|adv
по-ма'лко|less|adv
съвсе'м|completely, quite|adv
ня'как|somehow|adv
почти'|almost|adv
то'чно|exactly|adv
осо'бено|especially|adv
вероя'тно|probably|adv
наи'стина|really, truly|adv
е'то|here is, look|adv|Ето го! There it is!
нали'|isn't it? right?|adv|Хубаво е, нали? It's nice, isn't it?
ве'днъж|once|adv
изведнъ'ж|suddenly|adv
най-накра'я|finally, at last|adv
ба'вно|slowly|adv
бъ'рзо|quickly|adv
ти'хо|quietly|adv
си'лно|strongly, loudly|adv
ху'баво|nicely, good|adv
ле'сно|easily|adv
тру'дно|with difficulty; it's hard|adv
гла'сно|aloud|adv
го'ре|up, upstairs|adv
до'лу|down, downstairs|adv
въ'тре|inside|adv
навъ'н|outside|adv
отпре'д|in front|adv
отза'д|behind|adv
наоко'ло|around|adv
ня'къде|somewhere|adv
ни'къде|nowhere|adv
навсякъде'|everywhere|adv
отту'к|from here|adv
отта'м|from there|adv
ня'кога|once, some day|adv
поня'кога|sometimes|adv
обикнове'но|usually|adv
ря'дко|rarely|adv
отно'во|again|adv
пак|again|adv
досега'|until now, so far|adv
вдру'гиден|the day after tomorrow|adv
за'вчера|the day before yesterday|adv
наско'ро|recently|adv
е'два|barely, hardly|adv
да'же|even|adv
ду'ри|even|adv
затова'|that's why|adv
оба'че|however|link
зна'чи|so, that means|link
ка'кто|as|link
ка'то|like, as|link
дока'то|while|link
щом|as soon as|link
за да|in order to|link
въ'преки|despite|link
осве'н|except, besides|link
спо'ред|according to|link
вме'сто|instead of|link
зара'ди|because of|link
о'коло|around, about|link
към|towards|link
през|through; during|link
срещу'|against, opposite|link
ни'то|neither, nor|link
все'ки|every, each (m)|pron|всяка, всяко, всеки.
ня'колко|several, a few|pron
такъ'в|such (m)|pron
кого'|whom|q
коя'|which (f)|q
кое'|which (n)|q
кои'|which (pl)|q
ме'не|me (stressed form)|pron|Also мен.
те'бе|you (stressed form)|pron|Also теб.
не'го|him; it|pron
не'я|her|pron
тях|them|pron
нас|us|pron
вас|you (plural)|pron
моя'|my (f)|pron
мое'|my (n)|pron
мои'|my (pl)|pron
свой|one's own|pron|Short form: си. Обичам семейството си. I love my family.
ну'ла|zero|num
едина'десет|eleven|num|Spoken: единайсет.
двана'десет|twelve|num|Spoken: дванайсет.
трина'десет|thirteen|num
четирина'десет|fourteen|num
петна'десет|fifteen|num
шестна'десет|sixteen|num
седемна'десет|seventeen|num
осемна'десет|eighteen|num
деветна'десет|nineteen|num
три'десет|thirty|num|Spoken: трийсет.
четири'десет|forty|num
петдесе'т|fifty|num
шестдесе'т|sixty|num|Spoken: шейсет.
седемдесе'т|seventy|num
осемдесе'т|eighty|num
деветдесе'т|ninety|num
две'ста|two hundred|num
три'ста|three hundred|num
пе'тстотин|five hundred|num
милио'н|million|num
полови'н|half (before a noun)|num|половин час = half an hour.
полови'на|half|num|час и половина = an hour and a half.
че'твърт|quarter|num
вто'ри|second|num
тре'ти|third|num
четвъ'рти|fourth|num
пе'ти|fifth|num
два'ма|two (people)|num|For groups with at least one man: двама приятели.
три'ма|three (people)|num
Ня'ма значе'ние.|it doesn't matter|phrase
Ха'йде!|come on! let's go!|phrase
Ела' тук.|come here|phrase
Внима'вай!|careful!|phrase
По'мощ!|help!|phrase
Добре' до'шли!|welcome!|phrase
Чести'т рожде'н ден!|happy birthday!|phrase
Чести'та Но'ва годи'на!|happy New Year!|phrase
Прия'тен ден!|have a nice day!|phrase
Прия'тна ве'чер!|have a nice evening!|phrase
Прия'тно пъту'ване!|have a good trip!|phrase
До'бър апети'т!|enjoy your meal!|phrase
Какво' пра'виш?|what are you doing? / how are you?|phrase
Какво' но'во?|what's new?|phrase
Ни'що осо'бено.|nothing special|phrase
Вси'чко е наре'д.|everything's fine|phrase
Ня'мам вре'ме.|I don't have time|phrase
Извиня'вай.|sorry (informal)|phrase
С удово'лствие!|with pleasure!|phrase
Зави'си.|it depends|phrase
Ко'й е?|who is it?|phrase
Къде' си?|where are you?|phrase
В ко'лко часа'?|at what time?|phrase
И'мате ли…?|do you have…?|phrase
Да'йте ми…|give me…|phrase
Ко'лко ви дъ'лжа?|how much do I owe you?|phrase
Мо'же ли да платя'^ с ка'рта?|can I pay by card?|phrase
Къде' мо'га да ку'пя биле'т?|where can I buy a ticket?|phrase
Загу'бих се.|I'm lost|phrase
Ня'мам предста'ва.|I have no idea|phrase
Съгла'сен съм.|I agree (said by a man)|phrase|A woman says: Съгласна съм.
Прав си.|you're right|phrase
Не съм си'гурен.|I'm not sure (said by a man)|phrase|A woman says: Не съм сигурна.
Чу'дно!|wonderful!|phrase
Су'пер!|great!|phrase
Жа'лко.|what a pity|phrase
На ко'лко годи'ни си?|how old are you?|phrase
На три'десет годи'ни съм.|I'm thirty|phrase
Ра'ботя ка'то…|I work as a…|phrase
Повторе'те, мо'ля.|please repeat|phrase
Ко'лко е дале'че?|how far is it?|phrase
Ня'ма ну'жда.|there's no need|phrase
Стру'ва ми се, че…|it seems to me that…|phrase
`;
