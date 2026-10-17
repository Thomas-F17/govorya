/* Sentences, introduced into lessons as you progress.
   "@N" = these unlock once you've started N words.
   Format: bulgarian | english | note (optional)
   Stress: apostrophe after the stressed vowel. ^ = final а/я sounds like ъ. */
const BG_SENTENCES = `
@20
А'з съм тук.|I'm here.
Това' е моя'т брат.|This is my brother.
Ти си моя'т прия'тел.|You're my friend.
И'мам вре'ме.|I have time.
Ня'мам пари'.|I don't have any money.
Какво' е това'?|What is this?
Той е вкъ'щи.|He's at home.
Тя не е тук.|She isn't here.
Ни'е сме от Ло'ндон.|We're from London.
Ви'е ли сте Ма'рия?|Are you Maria?
Те са в Со'фия.|They're in Sofia.
Ня'ма вода'.|There's no water.
И'ма ли кафе'?|Is there any coffee?
Да', и'ма.|Yes, there is.
Ни'е и'скаме кафе'.|We want coffee.
А'з и'скам да спя^.|I want to sleep.
Мо'га ли да пи'там не'що?|Can I ask something?
Не мо'га да до'йда.|I can't come.
Ще до'йда у'тре.|I'll come tomorrow.
Къде' живе'еш?|Where do you live?
Живе'я в Со'фия.|I live in Sofia.
Къде' ра'ботиш?|Where do you work?
У'ча бъ'лгарски.|I'm learning Bulgarian.
Гово'риш ли бъ'лгарски?|Do you speak Bulgarian?
Гово'ря ма'лко бъ'лгарски.|I speak a little Bulgarian.
Не разби'рам какво' ка'зваш.|I don't understand what you're saying.
@60
Зна'еш ли къде' е га'рата?|Do you know where the station is?
Не зна'м къде' е.|I don't know where it is.
Ко'лко стру'ва това'?|How much does this cost?
Кога' ще до'йдеш?|When will you come?
Ще ти ка'жа у'тре.|I'll tell you tomorrow.
Ми'сля, че си прав.|I think you're right.
Оби'чам да чета'^.|I love reading.
Ви'наги пи'я кафе' су'трин.|I always drink coffee in the morning.
Ни'кога не пи'я би'ра.|I never drink beer.
Ча'кам те тук.|I'm waiting for you here.
Чу'ваш ли ме?|Can you hear me?
Ви'ждам те.|I can see you.
Кажи' ми.|Tell me.
Да'й ми вода', мо'ля.|Give me some water, please.
Помогни' ми, мо'ля.|Help me, please.
Тря'бва да тръ'гвам.|I have to go.
Ве'че е къ'сно.|It's already late.
О'ще е ра'но.|It's still early.
Сега' ня'мам вре'ме.|I don't have time now.
Мо'же би у'тре.|Maybe tomorrow.
Къде' оти'ваш?|Where are you going?
Оти'вам на ра'бота.|I'm going to work.
Си'нът ми хо'ди на учи'лище.|My son goes to school.
Тя гово'ри мно'го добре'.|She speaks very well.
Това' е мно'го ва'жно.|This is very important.
Вси'чко е добре'.|Everything is fine.
Ни'кой не зна'е.|Nobody knows.
@100
Дне'с е студе'но.|It's cold today.
Вче'ра бе'ше то'пло.|Yesterday it was warm.
Ва'ли дъжд.|It's raining.
Ва'ли сняг.|It's snowing.
Мно'го съм уморе'н.|I'm very tired.
Гла'ден ли си?|Are you hungry?
Да', мно'го съм гла'ден.|Yes, I'm very hungry.
Ми'сля, че е зае'т.|I think he's busy.
Свобо'ден ли си у'тре?|Are you free tomorrow?
Кола'та е но'ва.|The car is new.
Къ'щата им е голя'ма.|Their house is big.
Ста'ята е ма'лка, но ху'бава.|The room is small but nice.
Хля'бът е е'втин.|The bread is cheap.
Ви'ното е скъ'по.|The wine is expensive.
Хоте'лът е бли'зо до га'рата.|The hotel is near the station.
Га'рата е дале'че.|The station is far away.
Вла'кът тръ'гва в о'сем.|The train leaves at eight.
Автобу'сът ня'ма да спре' тук.|The bus won't stop here.
Къде' ми е биле'тът?|Where's my ticket?
Ма'йка ми е ле'кар.|My mother is a doctor.
Баща' ми ра'боти в Пло'вдив.|My father works in Plovdiv.
И'мам две' сестри'.|I have two sisters.
Брат ми е по-ма'лък от ме'не.|My brother is younger than me.
Деца'та са в учи'лище.|The children are at school.
Тя и'ма три' деца'.|She has three children.
@160
Отвори' прозо'реца, мо'ля.|Open the window, please.
Затвори' врата'та.|Close the door.
Къде' са ключове'те?|Where are the keys?
Ку'пих хляб и мля'ко.|I bought bread and milk.
Плати'х сме'тката.|I paid the bill.
Какво' ще пи'еш?|What will you drink?
Ще взе'ма една' би'ра.|I'll have a beer.
Уро'кът запо'чва в де'вет.|The lesson starts at nine.
Рестора'нтът затва'ря в полуно'щ.|The restaurant closes at midnight.
Магази'нът е отво'рен до о'сем.|The shop is open until eight.
Ча'сто пъту'вам за ра'бота.|I often travel for work.
Тя ста'ва ра'но.|She gets up early.
Ле'гнах къ'сно.|I went to bed late.
Оста'нах вкъ'щи.|I stayed at home.
Ще оста'на две' се'дмици.|I'll stay two weeks.
Разби'рам вси'чко.|I understand everything.
Не разбра'х.|I didn't get that.
Мо'жеш ли да повто'риш?|Can you repeat that?
Кажи' го по-ба'вно.|Say it more slowly.
Ка'к се ка'зва това' на бъ'лгарски?|What's this called in Bulgarian?
Сега' чета'^ една' мно'го интере'сна кни'га.|I'm reading a very interesting book at the moment.
Пи'ша пи'смо на еди'н прия'тел.|I'm writing a letter to a friend.
Слу'шам му'зика вся'ка ве'чер.|I listen to music every evening.
Гле'дахме филм.|We watched a film.
Ко'й е то'зи чове'к?|Who is that man?
Това' е но'вият ми коле'га.|This is my new colleague.
Ти откъде' си? Аз съм от Ита'лия.|Where are you from? I'm from Italy.
Гово'ря англи'йски, фре'нски и италиа'нски.|I speak English, French and Italian.
Тя е мно'го краси'ва.|She's very beautiful.
Мо'жеш ли да ми помо'гнеш?|Can you help me?
Ня'ма пробле'м, ще ти помо'гна.|No problem, I'll help you.
Какво' ще пра'виш дне'с?|What are you doing today?
@250
Сега' е три' и полови'на.|It's half past three.
Сре'щата е в поне'делник.|The meeting is on Monday.
В събо'та оти'ваме на мо'ре.|On Saturday we're going to the seaside.
В неде'ля почи'вам.|On Sunday I rest.
През ля'тото е мно'го горе'що.|In summer it's very hot.
През зи'мата хо'дим на планина'.|In winter we go to the mountains.
Рожде'ният ми ден е през май.|My birthday is in May.
Тя е роде'на в Бурга'с.|She was born in Burgas.
На ко'лко годи'ни е дъ'щеря ти?|How old is your daughter?
Тя е на пет годи'ни.|She's five.
Ба'ба ми живе'е на се'ло.|My grandmother lives in a village.
Дя'до ми е мно'го стар.|My grandfather is very old.
Чи'чо ми е шофьо'р.|My uncle is a driver.
Ле'ля ми го'тви мно'го вку'сно.|My aunt cooks really well.
Ко'тката спи на дива'на.|The cat is sleeping on the sofa.
Ку'чето ни е мно'го у'мно.|Our dog is very clever.
Боли' ме глава'.|I have a headache.
Боли' ме гъ'рлото.|I have a sore throat.
Тря'бва да оти'да на ле'кар.|I need to go to the doctor.
Къде' е най-бли'зката апте'ка?|Where's the nearest pharmacy?
И'мате ли не'що за глава'?|Do you have anything for a headache?
Чу'вствам се по-добре'.|I feel better.
Жена' ми е бо'лна.|My wife is ill.
Паспо'ртът ми е в ча'нтата.|My passport is in the bag.
Загу'бих си ключове'те.|I've lost my keys.
Наме'рих го!|I found it!
Ко'лко стру'ва биле'тът до Пло'вдив?|How much is the ticket to Plovdiv?
И'скам два биле'та, мо'ля.|I'd like two tickets, please.
Вла'кът и'ма закъсне'ние.|The train is delayed.
Ще взе'мем такси' до хоте'ла.|We'll take a taxi to the hotel.
И'мате ли свобо'дна ста'я?|Do you have a free room?
За две' нощу'вки, мо'ля.|For two nights, please.
Заку'ската е от се'дем до де'сет.|Breakfast is from seven to ten.
Къде' мо'га да оста'вя кола'та?|Where can I leave the car?
@350
Ще те ча'кам пред ки'ното.|I'll wait for you outside the cinema.
Да се сре'щнем в се'дем.|Let's meet at seven.
Ха'йде да оти'дем на ки'но.|Let's go to the cinema.
Ня'мам предста'ва какво' да пра'вя.|I have no idea what to do.
Тря'бва да реша'^ до у'тре.|I have to decide by tomorrow.
Предпочи'там чай.|I prefer tea.
Опи'тай та'зи ба'ница!|Try this banitsa!
Ба'ницата е мно'го вку'сна.|The banitsa is very tasty.
Шо'пската сала'та е с дома'ти, кра'ставици и сире'не.|Shopska salad has tomatoes, cucumbers and cheese.
За заку'ска я'дох ки'село мля'ко.|I had yoghurt for breakfast.
Не ям ме'со.|I don't eat meat.
Мо'же ли о'ще хляб?|Could we have some more bread?
Ня'ма за'хар в кафе'то.|There's no sugar in the coffee.
Ще платя'^ аз.|I'll pay.
Тоале'тната е наля'во.|The toilet is on the left.
Върве'те пра'во до светофа'ра.|Go straight on to the traffic lights.
По'сле зави'йте надя'сно.|Then turn right.
Спи'рката е на ъ'гъла.|The stop is on the corner.
Сли'заме на сле'дващата спи'рка.|We get off at the next stop.
Ко'лко вре'ме се пъту'ва до Ва'рна?|How long does it take to get to Varna?
О'коло шест часа' с влак.|About six hours by train.
Самоле'тът закъсня'ва.|The plane is late.
Бага'жът ми е мно'го те'жък.|My luggage is very heavy.
Мо'же ли да оста'вя бага'жа тук?|Can I leave my luggage here?
Ня'кога бил ли си в Бълга'рия?|Have you ever been to Bulgaria?
Бях там мина'лото ля'то.|I was there last summer.
Мно'го ми харе'са.|I really liked it.
Хо'рата са мно'го любе'зни.|The people are very kind.
Хра'ната е вку'сна и е'втина.|The food is tasty and cheap.
Ско'ро пак ще оти'да.|I'll go again soon.
Ня'кой гово'ри ли англи'йски тук?|Does anyone speak English here?
Изви'нете, загу'бих се.|Excuse me, I'm lost.
Мо'же ли да ми пока'жете на ка'ртата?|Could you show me on the map?
Това' е съвсе'м бли'зо.|It's very close.
@500
Отко'лко вре'ме у'чиш бъ'лгарски?|How long have you been learning Bulgarian?
У'ча от три' ме'сеца.|I've been learning for three months.
Ези'кът не е тру'ден, но ударе'нието е.|The language isn't hard, but the stress is.
Нау'чих мно'го но'ви ду'ми.|I've learned lots of new words.
Забра'вих как се ка'зва.|I've forgotten what it's called.
Се'тих се!|Now I remember!
Мо'жеш ли да ми обясни'ш?|Can you explain it to me?
Не съм си'гурен, че разби'рам.|I'm not sure I understand.
Ми'сля, че греши'ш.|I think you're wrong.
Прав си, извиня'вай.|You're right, sorry.
Съгла'сен съм с теб.|I agree with you.
Зави'си от вре'мето.|It depends on the weather.
Ако' ва'ли, ще оста'нем вкъ'щи.|If it rains, we'll stay at home.
Ако' и'маш вре'ме, оба'ди ми се.|If you have time, give me a call.
Ще ти се оба'дя, кога'то сти'гна.|I'll call you when I get there.
Изпра'тих ти съобще'ние.|I sent you a message.
Полу'чих писмо'то ти.|I got your letter.
Ня'мам интерне'т тук.|I don't have internet here.
Телефо'нът ми е счу'пен.|My phone is broken.
Ще го попра'вя у'тре.|I'll fix it tomorrow.
Взех ти пода'рък.|I got you a present.
Мно'го ти благодаря'^!|Thank you so much!
Бе'ше мно'го ху'баво.|It was really nice.
Ще ми ли'псваш.|I'll miss you.
Ка'к се чу'встваш дне'с?|How are you feeling today?
Ма'лко съм уморе'н, но съм добре'.|I'm a bit tired, but I'm fine.
Сно'щи не спах добре'.|I didn't sleep well last night.
Тря'бва да почи'вам по'вече.|I need to rest more.
Хо'дя на ра'бота пеша'.|I walk to work.
Вечерта' се разхо'ждаме в па'рка.|In the evening we walk in the park.
Ко'й филм ще гле'даме?|Which film shall we watch?
Ти избери'.|You choose.
Не ми харе'са кра'ят.|I didn't like the ending.
Му'зиката бе'ше страхо'тна.|The music was great.
@650
Вче'ра цял ден вали'.|Yesterday it rained all day.
У'тре ще е слъ'нчево.|Tomorrow will be sunny.
Температу'рата е пет гра'дуса.|The temperature is five degrees.
Ду'ха си'лен ве'тър.|A strong wind is blowing.
Вода'та в мо'рето е то'пла.|The water in the sea is warm.
Хо'дихме на пла'жа вся'ка су'трин.|We went to the beach every morning.
Плу'вах в е'зерото.|I swam in the lake.
Гора'та е мно'го краси'ва.|The forest is very beautiful.
Изка'чихме се на върха'.|We climbed to the summit.
Не оби'чам да ста'вам ра'но.|I don't like getting up early.
Обикнове'но заку'свам в о'сем.|I usually have breakfast at eight.
Обя'двам в о'фиса.|I have lunch at the office.
Вече'ряме в се'дем.|We have dinner at seven.
След ра'бота хо'дя на фи'тнес.|After work I go to the gym.
Поня'кога гле'дам телеви'зия.|Sometimes I watch TV.
Ря'дко пу'ша.|I rarely smoke.
Тъ'рся апартаме'нт под на'ем.|I'm looking for a flat to rent.
Апартаме'нтът и'ма две' спа'лни.|The flat has two bedrooms.
Ку'хнята е ма'лка, но удо'бна.|The kitchen is small but comfortable.
Съсе'дите ни са мно'го ми'ли.|Our neighbours are very nice.
Живе'ем на тре'тия ета'ж.|We live on the third floor.
Ня'ма асансьо'р.|There's no lift.
Мина'лата годи'на се ме'стихме в Со'фия.|Last year we moved to Sofia.
Ня'мам вре'ме да го'твя през се'дмицата.|I don't have time to cook during the week.
В събо'та хо'дим на паза'ра.|On Saturday we go to the market.
Плодове'те и зеленчу'ците там са пре'сни.|The fruit and vegetables there are fresh.
Ку'пихме я'годи, дома'ти и сире'не.|We bought strawberries, tomatoes and cheese.
Деца'та игра'ят в дво'ра.|The children are playing in the yard.
Съсе'дката ни и'ма голя'мо ку'че.|Our neighbour has a big dog.
Ня'ма ни'що по-ху'баво от ля'тна ве'чер.|There's nothing better than a summer evening.
@800
Ра'ботя ка'то инжене'р в една' голя'ма фи'рма.|I work as an engineer at a big company.
Ше'фът ми е строг, но справедли'в.|My boss is strict but fair.
Коле'гите ми са от ра'зни страни'.|My colleagues are from different countries.
Запла'тата не е голя'ма.|The salary isn't big.
Тря'бва да свъ'рша та'зи зада'ча до пе'тък.|I have to finish this task by Friday.
И'мам сре'ща с клие'нт в два.|I have a meeting with a client at two.
Не мо'га да гово'ря сега', зае'т съм.|I can't talk now, I'm busy.
Да гово'рим по-къ'сно.|Let's talk later.
Ще ти изпра'тя и'мейл.|I'll send you an email.
Бълга'рия е изве'стна с ро'зите си.|Bulgaria is famous for its roses.
Мно'го тури'сти хо'дят на Че'рно мо'ре.|Many tourists go to the Black Sea.
Ри'лският манасти'р е мно'го стар.|The Rila Monastery is very old.
Пло'вдив е еди'н от най-ста'рите градове' в Евро'па.|Plovdiv is one of the oldest cities in Europe.
Бъ'лгарите оби'чат да пра'знуват.|Bulgarians love to celebrate.
На Ко'леда семе'йството се съби'ра.|At Christmas the family gets together.
На пъ'рви март си подаря'ваме марте'ници.|On 1 March we give each other martenitsi.|Red and white threads worn for health until you see the first stork or blossoming tree.
Раки'ята е си'лна напи'тка.|Rakia is a strong drink.
Наздра'ве и до'бър апети'т!|Cheers, and enjoy your meal!
@950
Ка'зват, че бъ'лгарският е тру'ден, но на ме'не ми харе'сва.|They say Bulgarian is hard, but I like it.
Ве'че разби'рам по'вече, отко'лкото гово'ря.|I already understand more than I can say.
Кога'то гово'рят бъ'рзо, не разби'рам ни'що.|When they speak fast, I don't understand anything.
Ще се ра'двам да се ви'дим пак.|I'd be glad to see you again.
Надя'вам се да до'йдеш ско'ро.|I hope you come soon.
Стра'хувам се, че ня'ма да успе'я.|I'm afraid I won't make it.
Не се притесня'вай, вси'чко ще бъ'де наре'д.|Don't worry, everything will be fine.
Ня'ма значе'ние кой е прав.|It doesn't matter who's right.
Ако' бях на твое' мя'сто, щях да оти'да.|If I were you, I'd go.
Вся'ка ду'ма, ко'ято нау'ча, е ма'лка побе'да.|Every word I learn is a small victory.
`;
