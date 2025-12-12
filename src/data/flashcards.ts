export const SUBJECTS: Record<string, {
  name: string;
  chapters: Record<string, {
    name: string;
    flashcards: { q: string; a: string }[];
  }>;
}> = {
  eco: {
    name: 'Экономика',
    chapters: {
      eco_ch1_2: {
        name: '1–2. Жалпы түшүнүктөр',
        flashcards: [
          {
            q: 'Экономика илиминин негизги изилдөө объектиси эмне?',
            a: 'Чексиз муктаждыктарды канааттандырууда чектүү (сейрек) ресурстарды эң натыйжалуу пайдалануу жолдорун изилдөө.'
          },
          {
            q: 'Экономикалык муктаждыктар деген эмне?',
            a: 'Товар же кызмат менен канааттандырууга мүмкүн болгон, сатып алууну талап кылган муктаждыктар (мисалы: тамак-аш, кийим, турак-жай).'
          },
          {
            q: 'Эркин товарлар (Free goods) деген эмне?',
            a: 'Табиятта адамдын муктаждыгынан ашыкча өлчөмдө болгон жана алуу үчүн эч кандай нарк төлөнбөгөн товарлар (мисалы: аба, күндүн нуру).'
          },
          {
            q: 'Экономикалык товарлар (Economic goods) деген эмне?',
            a: 'Муктаждыкка салыштырмалуу чектелүү болгондуктан, ээ болуу үчүн белгилүү бир баа же эмгек талап кылынган товарлар.'
          },
          {
            q: 'Өндүрүш факторлору (Ресурстар) кайсылар?',
            a: '1. Жумушчу күчү (L - Labor)\n2. Капитал (K - Capital)\n3. Табигый ресурстар (N - Natural Resources)\n4. Ишкердик жөндөм (E - Enterprise).'
          },
          {
            q: 'Альтернативдүү чыгым (Opportunity Cost) деген эмне?',
            a: 'Бир нерсени тандоодо баш тартылган эң мыкты экинчи варианттын баалуулугу. Мисалы, сабакта отуруунун альтернативдүү чыгымы - бул убакытта иштей албай калган жумуштун акысы.'
          },
          {
            q: 'Өндүрүш мүмкүнчүлүктөрү ийри сызыгы (PPF) эмнени көрсөтөт?',
            a: 'Бардык ресурстар толук жана натыйжалуу колдонулганда өндүрүлө турган эки башка товардын максималдуу комбинацияларын көрсөткөн сызык.'
          },
          {
            q: 'PPF сызыгынын ичиндеги чекит эмнени билдирет?',
            a: 'Ресурстардын толук эмес же натыйжасыз колдонулушун (жумушсуздук, бош турган заводдор).'
          },
          {
            q: 'PPF сызыгынын сыртындагы чекит эмнени билдирет?',
            a: 'Учурдагы ресурстар жана технология менен жетүүгө мүмкүн болбогон өндүрүш деңгээли.'
          },
          {
            q: 'Микроэкономика эмнени изилдейт?',
            a: 'Жеке адамдардын, үй чарбалардын жана фирмалардын чечимдерин, айрым товарлардын бааларынын түзүлүшүн.'
          },
          {
            q: 'Макроэкономика эмнени изилдейт?',
            a: 'Улуттук экономиканы бүтүндөй: ИДП, инфляция, жумушсуздук, экономикалык өсүү, мамлекеттик бюджет.'
          },
          {
            q: 'Позитивдүү экономика деген эмне?',
            a: 'Болгон фактыларды, себеп-натыйжа байланыштарын изилдейт ("Эмне болду?", "Эмне болуп жатат?"). Субъективдүү баа бербейт.'
          },
          {
            q: 'Нормативдүү экономика деген эмне?',
            a: 'Экономикалык кубулуштарга баа берет жана "Кандай болушу керек?" деген суроого жооп издейт (мисалы, "Салыкты азайтуу туурабы?").'
          },
          {
            q: 'Каалоо (Preference) менен Тандоо (Choice) ортосундагы айырма?',
            a: 'Каалоо - бул чексиз тилектер. Тандоо - бул чектелүү ресурстар менен ошол каалоолордун ичинен эң маанилүүсүн бөлүп алуу.'
          }
        ],
      },
      eco_ch3_4: {
        name: '3–4. Баа теориясы (Талап жана Сунуш)',
        flashcards: [
          {
            q: 'Талап (Demand) деген эмне?',
            a: 'Белгилүү бир убакытта, белгилүү бир баада керектөөчүлөр сатып алууну каалаган жана сатып алууга кудурети жеткен товардын саны.'
          },
          {
            q: 'Талап мыйзамы (Law of Demand) эмнени билдирет?',
            a: 'Башка шарттар өзгөрбөсө (ceteris paribus), товардын баасы өскөндө ага болгон талап азаят, ал эми баасы түшкөндө талап көбөйөт.'
          },
          {
            q: 'Талап ийри сызыгынын жантайышы кандай?',
            a: 'Терс жантайышка ээ (ылдый көздөй багытталган), анткени баа менен талаптын көлөмү тескери байланышта.'
          },
          {
            q: 'Талаптын өзгөрүшү (Change in Demand) менен Талап көлөмүнүн өзгөрүшүнүн (Change in Quantity Demanded) айырмасы?',
            a: 'Талап көлөмүнүн өзгөрүшү БААНЫН таасиринен болот (сызыктын үстүндө жылуу). Талаптын өзгөрүшү БААДАН БАШКА факторлордун таасиринен болот (сызыктын оңго же солго жылышы).'
          },
          {
            q: 'Талапка таасир этүүчү баадан башка факторлор кайсылар?',
            a: '1. Керектөөчүнүн кирешеси\n2. Атаандаш же толуктоочу товарлардын баасы\n3. Табит жана мода\n4. Күтүүлөр\n5. Керектөөчүлөрдүн саны.'
          },
          {
            q: 'Сунуш (Supply) деген эмне?',
            a: 'Белгилүү бир убакытта, ар кандай бааларда өндүрүүчүлөр сатууга даяр болгон товардын саны.'
          },
          {
            q: 'Сунуш мыйзамы (Law of Supply) эмнени билдирет?',
            a: 'Товардын баасы өскөндө, сунушталган көлөм көбөйөт (оң байланыш).'
          },
          {
            q: 'Сунуш ийри сызыгынын жантайышы кандай?',
            a: 'Оң жантайышка ээ (жогору көздөй багытталган).'
          },
          {
            q: 'Сунушка таасир этүүчү баадан башка факторлор?',
            a: '1. Ресурстардын баасы\n2. Технология\n3. Салыктар жана субсидиялар\n4. Башка товарлардын баасы\n5. Сатуучулардын саны.'
          },
          {
            q: 'Рыноктук тең салмактуулук (Market Equilibrium) деген эмне?',
            a: 'Талап кылынган көлөм Сунушталган көлөмгө барабар болгон абал (Qd = Qs). Бул чекитте тең салмактуу баа жана тең салмактуу көлөм аныкталат.'
          },
          {
            q: 'Ашыкча сунуш (Surplus) качан пайда болот?',
            a: 'Рынок баасы тең салмактуу баадан ЖОГОРУ болгондо. (Qs > Qd). Баа төмөндөөгө тенденция алат.'
          },
          {
            q: 'Ашыкча талап (Shortage/Deficit) качан пайда болот?',
            a: 'Рынок баасы тең салмактуу баадан ТӨМӨН болгондо. (Qd > Qs). Баа жогорулоого тенденция алат.'
          },
          {
            q: 'Гиффен товарлары деген эмне?',
            a: 'Баасы кымбаттаганда талабы өскөн, баасы арзандаганда талабы азайган товарлар (мисалы, жакырлар үчүн нан, картошка).'
          },
          {
            q: 'Веблен товарлары ("Сноб" эффекти) деген эмне?',
            a: 'Баасы кымбаттаган сайын аброй үчүн көбүрөөк сатылып алынган люкс товарлар.'
          }
        ],
      },
      eco_ch5: {
        name: '5. Ийкемдүүлүк (Эластичность)',
        flashcards: [
          {
            q: 'Талаптын баа ийкемдүүлүгү (Price Elasticity of Demand) эмнени өлчөйт?',
            a: 'Товардын баасынын 1%га өзгөрүшү ага болгон талаптын көлөмүн канча пайызга өзгөртөөрүн.'
          },
          {
            q: 'Ийкемдүүлүктү эсептөө формуласы кандай?',
            a: 'E = (% ΔQ) / (% ΔP) = (ΔQ/Q) / (ΔP/P).'
          },
          {
            q: 'Ийкемдүү талап (Elastic Demand) деген эмне?',
            a: 'Эгер |E| > 1 болсо. Баанын кичине өзгөрүшү талаптын чоң өзгөрүшүнө алып келет. (Люкс товарлар).'
          },
          {
            q: 'Ийкемсиз талап (Inelastic Demand) деген эмне?',
            a: 'Эгер |E| < 1 болсо. Баанын өзгөрүшү талапка аз таасир этет. (Биринчи муктаждыктагы товарлар: нан, туз, дары).'
          },
          {
            q: 'Бирдик ийкемдүүлүк (Unitary Elasticity) деген эмне?',
            a: 'Эгер |E| = 1 болсо. Баанын өзгөрүшү талапты дал ошончо пайызга өзгөртөт.'
          },
          {
            q: 'Толук ийкемсиз талаптын графиги кандай болот?',
            a: 'Вертикалдуу түз сызык (|E| = 0). Баа канча болсо да, керектелген көлөм өзгөрбөйт (мис: инсулин).'
          },
          {
            q: 'Толук ийкемдүү талаптын графиги кандай болот?',
            a: 'Горизонталдуу түз сызык (|E| = ∞). Баа бир аз эле көтөрүлсө, талап нөлгө түшөт.'
          },
          {
            q: 'Талаптын ийкемдүүлүгүнө таасир этүүчү факторлор?',
            a: '1. Ордун басуучу товарлардын бардыгы (бар болсо ийкемдүү)\n2. Товардын маанилүүлүгү (зарыл болсо ийкемсиз)\n3. Бюджеттеги үлүшү (чоң болсо ийкемдүү)\n4. Убакыт (узак мөөнөттө ийкемдүү).'
          },
          {
            q: 'Талаптын киреше ийкемдүүлүгү (Income Elasticity) эмнени көрсөтөт?',
            a: 'Керектөөчүнүн кирешеси 1%га өзгөргөндө талап канчага өзгөрөөрүн. Нормалдуу товарлар үчүн оң (+), начар товарлар үчүн терс (-).'
          },
          {
            q: 'Кайчылаш ийкемдүүлүк (Cross Elasticity) оң (+) болсо, товарлар кандай байланышта?',
            a: 'Алар бири-бирин алмаштыруучу товарлар (субституттар). Мисалы: чай жана кофе.'
          },
          {
            q: 'Кайчылаш ийкемдүүлүк терс (-) болсо, товарлар кандай байланышта?',
            a: 'Алар бири-бирин толуктоочу товарлар (комплементардуу). Мисалы: машина жана бензин.'
          }
        ],
      },
      eco_ch6: {
        name: '6. Ийкемдүүлүктүн колдонулушу',
        flashcards: [
          {
            q: 'Кинг мыйзамы (Молчулук парадоксу) деген эмне?',
            a: 'Айыл чарбасында түшүм мол болгон жылы дыйкандардын жалпы кирешесинин азайып калышы. Себеби айыл чарба товарларына талап ийкемсиз.'
          },
          {
            q: 'Жөргөмүш тору теоремасы (Cobweb Theorem) эмнени түшүндүрөт?',
            a: 'Өндүрүшү убакытты талап кылган тармактарда (мис: айыл чарба) баанын жана көлөмдүн циклдик түрдө туруксуз өзгөрүп турушун.'
          },
          {
            q: 'Минималдуу баа (Floor Price) саясатынын максаты эмне?',
            a: 'Өндүрүүчүлөрдү коргоо. Базар баасы өтө төмөн түшүп кетпеши үчүн, мамлекет тең салмактуулуктан ЖОГОРУ бааны белгилейт. Бул ашыкча сунушту жаратат.'
          },
          {
            q: 'Максималдуу баа (Ceiling Price) саясатынын максаты эмне?',
            a: 'Керектөөчүлөрдү коргоо. Баалар өтө кымбаттап кетпеши үчүн, мамлекет тең салмактуулуктан ТӨМӨН бааны белгилейт. Бул товар тартыштыгын (дефицит) жаратат.'
          },
          {
            q: 'Салыктын жүгүн ким көтөрөт?',
            a: 'Талап ийкемсиз болсо - керектөөчү көбүрөөк төлөйт. Талап ийкемдүү болсо - өндүрүүчү көбүрөөк төлөйт.'
          },
          {
            q: 'Жашыруун рынок (Black Market) качан пайда болот?',
            a: 'Мамлекет максималдуу бааны белгилеп, дефицит жаралганда. Товарлар расмий баадан кымбат баада мыйзамсыз сатылат.'
          }
        ],
      },
      eco_ch7: {
        name: '7. Керектөөчү чечими',
        flashcards: [
          {
            q: 'Пайдалуулук (Utility) деген эмне?',
            a: 'Товар же кызматтын адамдын муктаждыгын канааттандыруу жөндөмдүүлүгү. Субъективдүү түшүнүк.'
          },
          {
            q: 'Кардиналисттик (сандык) ыкманын негизги идеясы?',
            a: 'Пайдалуулукту "утиль" деген бирдик менен сан түрүндө өлчөөгө болот деп эсептейт.'
          },
          {
            q: 'Ординалисттик (кезектик) ыкманын негизги идеясы?',
            a: 'Пайдалуулукту сан менен өлчөө мүмкүн эмес, болгону товарларды артыкчылыгы боюнча иреттеп (ранжирлөө) салыштырууга болот.'
          },
          {
            q: 'Чектүү пайда (Marginal Utility - MU) деген эмне?',
            a: 'Кошумча бир бирдик товарды керектөөдөн алынган кошумча пайда.'
          },
          {
            q: 'Азаюучу чектүү пайда мыйзамы?',
            a: 'Товарды керектөө көлөмү көбөйгөн сайын, ар бир кийинки бирдиктен алынган чектүү пайда азаят (суусоо канган сайын суунун даамы азайгандай).'
          },
          {
            q: 'Керектөөчүнүн тең салмактуулук шарты (Кардиналисттик)?',
            a: 'MUx / Px = MUy / Py. Ар бир товарга сарпталган акыркы сомдун чектүү пайдалары барабар болушу керек.'
          },
          {
            q: 'Кайдыгерлик ийри сызыгы (Indifference Curve) эмнени көрсөтөт?',
            a: 'Керектөөчүгө бирдей деңгээлдеги жалпы пайданы (канааттанууну) алып келген эки товардын түрдүү комбинацияларын.'
          },
          {
            q: 'Бюджеттик сызык (Budget Line) эмнени көрсөтөт?',
            a: 'Керектөөчүнүн белгилүү бир кирешеси жана баалар менен сатып ала турган товарлардын бардык мүмкүн болгон комбинацияларын.'
          },
          {
            q: 'Керектөөчү тең салмактуулугу графикте каерде жайгашат?',
            a: 'Бюджеттик сызык кайдыгерлик ийри сызыгына жанып өткөн (тангенс болгон) чекитте.'
          }
        ],
      },
      eco_ch9: {
        name: '9. Өндүрүш жана өндүрүмдүүлүк',
        flashcards: [
          {
            q: 'Өндүрүш функциясы деген эмне?',
            a: 'Колдонулган ресурстардын (кириш) жана алынган продукциянын (чыгыш) ортосундагы техникалык байланышты көрсөткөн формула (Q = f(K, L)).'
          },
          {
            q: 'Кыска мөөнөт (Short run) менен Узун мөөнөттүн (Long run) айырмасы?',
            a: 'Кыска мөөнөттө жок дегенде бир ресурс (мис: капитал) туруктуу болот. Узун мөөнөттө бардык ресурстарды өзгөртүүгө болот.'
          },
          {
            q: 'Туруктуу жана Өзгөрмөлүү факторлор?',
            a: 'Туруктуу: Имарат, жабдыктар (кыска мөөнөттө өзгөрбөйт). Өзгөрмөлүү: Жумушчу күчү, чийки зат (өндүрүшкө жараша өзгөрөт).'
          },
          {
            q: 'Жалпы продукт (TP), Орточо продукт (AP), Чектүү продукт (MP)?',
            a: 'TP: Бардык өндүрүлгөн көлөм. AP: Бир жумушчуга туура келген продукт (TP/L). MP: Кошумча бир жумушчу кошкон кошумча продукт (ΔTP/ΔL).'
          },
          {
            q: 'Азаюучу өндүрүмдүүлүк мыйзамы (Law of Diminishing Returns)?',
            a: 'Кыска мөөнөттө туруктуу факторго өзгөрмөлүү факторду кошо бергенде, белгилүү бир чектен кийин ар бир кошумча жумушчунун кошкон салымы (MP) азая баштайт.'
          },
          {
            q: 'Өндүрүштүн 3 стадиясы (доору)?',
            a: '1-стадия: MP > AP (өндүрүмдүүлүк өсөт). 2-стадия: MP < AP, бирок MP > 0 (оптималдуу стадия). 3-стадия: MP < 0 (өндүрүш азаят, зыяндуу).'
          },
          {
            q: 'Изокванта (Isoquant) деген эмне?',
            a: 'Бирдей көлөмдөгү продукцияны өндүрүүгө мүмкүндүк берген капитал жана эмгектин түрдүү комбинацияларын көрсөткөн сызык.'
          },
          {
            q: 'Изокоста (Isocost) деген эмне?',
            a: 'Фирманын белгилүү бир бюджети менен сатып ала турган ресурстардын комбинацияларын көрсөткөн чыгым сызыгы.'
          },
          {
            q: 'Өндүрүүчүнүн тең салмактуулугу каерде?',
            a: 'Изокванта менен Изокоста сызыктары жанышкан (тийишкен) чекитте.'
          }
        ],
      },
      eco_ch10: {
        name: '10. Чыгымдар анализи',
        flashcards: [
          {
            q: 'Ачык чыгымдар (Explicit Costs) деген эмне?',
            a: 'Фирманын сырткы жактарга накталай акча түрүндө төлөгөн чыгымдары (айлык, аренда, чийки зат).'
          },
          {
            q: 'Жашыруун чыгымдар (Implicit Costs) деген эмне?',
            a: 'Фирманын өзүнө таандык ресурстарды колдонуудагы альтернативдүү чыгымдары (ишкердин өз эмгеги, өз имаратынын ижарасы).'
          },
          {
            q: 'Бухгалтердик пайда менен Экономикалык пайданын айырмасы?',
            a: 'Бухгалтердик пайда = Киреше - Ачык чыгымдар. Экономикалык пайда = Киреше - (Ачык + Жашыруун чыгымдар).'
          },
          {
            q: 'Туруктуу чыгымдар (TFC) деген эмне?',
            a: 'Өндүрүш көлөмүнө карабай төлөнүүчү чыгымдар (ижара, кредиттин пайызы, күзөт).'
          },
          {
            q: 'Өзгөрмөлүү чыгымдар (TVC) деген эмне?',
            a: 'Өндүрүш көлөмү көбөйгөндө кошо көбөйгөн чыгымдар (чийки зат, жумушчулардын айлыгы).'
          },
          {
            q: 'Жалпы чыгым (TC) формуласы?',
            a: 'TC = TFC + TVC.'
          },
          {
            q: 'Чектүү чыгым (Marginal Cost - MC) деген эмне?',
            a: 'Кошумча бир бирдик продукцияны өндүрүү үчүн кеткен кошумча чыгым. MC = ΔTC / ΔQ.'
          },
          {
            q: 'Орточо чыгымдар (AC, AVC, AFC) кантип табылат?',
            a: 'Жалпы сумманы санга (Q) бөлүү менен. AC = TC/Q; AVC = TVC/Q; AFC = TFC/Q.'
          },
          {
            q: 'MC сызыгы AC жана AVC сызыктарын кайсы жеринен кесип өтөт?',
            a: 'Алардын эң төмөнкү (минимум) чекиттеринен.'
          },
          {
            q: 'Узун мөөнөттүү орточо чыгым сызыгы (LRAC) эмнени билдирет?',
            a: 'Бардык ресурстар өзгөргөн учурдагы эң натыйжалуу өндүрүш масштабын. Ал "U" формасында болот (масштабдан үнөмдөө жана масштабдан зыян).'
          }
        ],
      },
      eco_ch11: {
        name: '11. Фирманын тең салмактуулугу',
        flashcards: [
          {
            q: 'Фирманын негизги максаты эмне?',
            a: 'Пайданы максималдаштыруу.'
          },
          {
            q: 'Жалпы киреше (TR), Орточо киреше (AR), Чектүү киреше (MR)?',
            a: 'TR = P × Q. AR = TR / Q (= Баа). MR = ΔTR / ΔQ (Кошумча сатуудан түшкөн киреше).'
          },
          {
            q: 'Пайданы максималдаштыруунун алтын эрежеси кайсы?',
            a: 'MR = MC (Чектүү киреше Чектүү чыгымга барабар болгондо).'
          },
          {
            q: 'Эгер MR > MC болсо, фирма эмне кылышы керек?',
            a: 'Өндүрүштү көбөйтүшү керек, анткени ар бир кошумча товар пайда алып келүүдө.'
          },
          {
            q: 'Эгер MR < MC болсо, фирма эмне кылышы керек?',
            a: 'Өндүрүштү азайтышы керек, анткени акыркы товарлар зыян алып келүүдө.'
          },
          {
            q: 'Нормалдуу пайда деген эмне?',
            a: 'Экономикалык пайда нөлгө барабар болгон абал. Бул ишкерди ошол бизнесте кармап турууга жетиштүү болгон минималдуу пайда (ал өзүнүн альтернативдүү чыгымын жаап жатат).'
          }
        ],
      },
      eco_ch12: {
        name: '12. Рынок моделдери',
        flashcards: [
          {
            q: 'Рыноктун 4 негизги модели кайсылар?',
            a: '1. Толук атаандаштык\n2. Монополия\n3. Олигополия\n4. Монополдук атаандаштык.'
          },
          {
            q: 'Толук атаандаштыктын 4 шарты?',
            a: '1. Майдалуулук (көп сатуучу/алуучу)\n2. Бирдейлик (товарлар окшош)\n3. Эркин кирүү/чыгуу\n4. Толук маалыматтуулук.'
          },
          {
            q: 'Толук атаандаштыкта фирма баага таасир эте алабы?',
            a: 'Жок, фирма "бааны кабыл алуучу" (price taker). Рынок баасы менен сатат.'
          },
          {
            q: 'Монополия деген эмне?',
            a: 'Бир гана сатуучу болгон, ордун басуучу товары жок жана кирүүгө тоскоолдуктар күчтүү болгон рынок.'
          },
          {
            q: 'Олигополия деген эмне?',
            a: 'Аз сандагы ири фирмалар үстөмдүк кылган рынок (мис: уюлдук операторлор, авиакомпаниялар). Бири-биринин чечимине көз каранды.'
          },
          {
            q: 'Монополдук атаандаштык деген эмне?',
            a: 'Көп фирмалар бар, бирок товарлары бири-биринен айырмаланат (дифференциация). Ар ким өз товарына бир аз монополист (мис: кафелер, кийим дүкөндөрү).'
          },
          {
            q: 'CR4 жана HHI индекстери эмнени өлчөйт?',
            a: 'Рыноктун топтолуу деңгээлин (концентрациясын). Базарда ири фирмалардын үлүшү канчалык экенин.'
          }
        ],
      },
      eco_ch13: {
        name: '13. Толук атаандаштык рыногундагы тең салмактуулук',
        flashcards: [
          {
            q: 'Толук атаандаштыктагы фирманын талап сызыгы кандай?',
            a: 'Абсолюттук ийкемдүү (горизонталдуу). Баа (P) = Орточо киреше (AR) = Чектүү киреше (MR).'
          },
          {
            q: 'Кыска мөөнөттө фирма качан ашыкча пайда алат?',
            a: 'Баа (P) орточо чыгымдан (AC) жогору болгондо.'
          },
          {
            q: 'Кыска мөөнөттө фирма качан зыян тартат?',
            a: 'Баа (P) орточо чыгымдан (AC) төмөн болгондо.'
          },
          {
            q: 'Жабылуу чекити (Shutdown Point) качан болот?',
            a: 'Баа (P) орточо өзгөрмө чыгымга (AVC) барабар болгондо. Эгер баа мындан ылдый түшсө, фирма ишин токтотот.'
          },
          {
            q: 'Узун мөөнөттө толук атаандаштык фирмалары кандай пайда алат?',
            a: 'Гана НОРМАЛДУУ пайда (нөлдүк экономикалык пайда). Анткени ашыкча пайда болсо жаңылар кирет, зыян болсо эскилер чыгат.'
          },
          {
            q: 'Толук атаандаштыкта эффективдүүлүк барбы?',
            a: 'Ооба, ресурстар эң натыйжалуу бөлүштүрүлөт жана товарлар эң төмөнкү баада (AC минимум) сатылат.'
          }
        ],
      },
      eco_ch14: {
        name: '14. Толук эмес атаандаштык рыноктору',
        flashcards: [
          {
            q: 'Монополиянын пайда болуу себептери?',
            a: '1. Табигый монополия (масштабдан үнөмдөө)\n2. Ресурстарды көзөмөлдөө\n3. Патент жана лицензиялар\n4. Мамлекеттик укуктар.'
          },
          {
            q: 'Монополисттин суроо-талап сызыгы кандай?',
            a: 'Төмөн көздөй жантайган (рыноктун талап сызыгы менен бирдей). Баа (P) > Чектүү киреше (MR).'
          },
          {
            q: 'Монополисттин тең салмактуулук шарты?',
            a: 'MR = MC. Бирок баа (P) бул чекиттен жогору коюлат. Натыйжада ашыкча пайда алат.'
          },
          {
            q: 'Монополиянын коомдук чыгымы (Deadweight Loss)?',
            a: 'Монополия атаандаштыкка караганда аз өндүрүп, кымбат саткандыктан, коомдун жалпы бакубаттуулугу азаят.'
          },
          {
            q: 'Монополдук атаандаштыкта узун мөөнөттө эмне болот?',
            a: 'Жаңы фирмалар кирип, талап азайып, ашыкча пайда жоюлат. Баа = AC болот, бирок AC минимум болбойт (ашыкча кубаттуулук).'
          },
          {
            q: '"Туткундар дилеммасы" (Game Theory) олигополияда эмнени түшүндүрөт?',
            a: 'Фирмалар кызматташса (картель) көп пайда тапмак, бирок бири-бирине ишенбегендиктен бааны түшүрүп, экөө тең азыраак пайда табышат (Нэш тең салмактуулугу).'
          }
        ],
      },
      eco_ch15: {
        name: '15. Өндүрүш факторлорунун рыногу',
        flashcards: [
          {
            q: 'Туунду талап (Derived Demand) деген эмне?',
            a: 'Өндүрүш факторлоруна (эмгек, капитал) болгон талап. Ал ошол факторлор өндүргөн товарга болгон талаптан көз каранды.'
          },
          {
            q: 'Чектүү фактор чыгымы (MFC) деген эмне?',
            a: 'Бир кошумча ресурс алуу үчүн кеткен кошумча чыгым.'
          },
          {
            q: 'Чектүү продукт кирешеси (MRP) деген эмне?',
            a: 'Кошумча бир ресурс алып келген кошумча киреше. MRP = MP × MR.'
          },
          {
            q: 'Фирма ресурсту (мис: жумушчуну) качанга чейин алат?',
            a: 'MRP = MFC болгонго чейин. (Кирешеси чыгымына теңелгенче).'
          },
          {
            q: 'Эмгек сунуш сызыгы эмне үчүн артка кайрылат?',
            a: 'Өтө жогорку айлык акыда киреше эффектиси үстөмдүк кылып, адамдар иштегендин ордуна эс алууну (бош убакытты) сатып ала башташат.'
          },
          {
            q: 'Номиналдуу жана Реалдуу эмгек акы?',
            a: 'Номиналдуу - колго тийген акча суммасы. Реалдуу - ошол акчага сатып алууга мүмкүн болгон товарлардын көлөмү (инфляция эсепке алынат).'
          },
          {
            q: 'Жер рентасы (Rent) эмнеден чыгат?',
            a: 'Жердин сунушу чектелүү (ийкемсиз) болгондуктан, ага болгон талаптын өсүшү түздөн-түз бааны (рентаны) жогорулатат.'
          },
          {
            q: 'Реалдуу пайыздык ставка деген эмне?',
            a: 'Номиналдуу пайыздык ставкадан инфляцияны кемиткендеги таза киреше.'
          }
        ],
      },
      eco_ch16: {
        name: '16. Кирешенин бөлүнүшү',
        flashcards: [
          {
            q: 'Кирешенин функционалдык бөлүнүшү?',
            a: 'Улуттук кирешенин өндүрүш факторлорунун ортосунда бөлүнүшү: Эмгек -> Айлык, Капитал -> Пайыз, Жер -> Рента, Ишкер -> Пайда.'
          },
          {
            q: 'Кирешенин жекече бөлүнүшү?',
            a: 'Улуттук кирешенин өлкөдөгү жарандар же үй чарбалары ортосунда канчалык деңгээлде тең же тең эмес бөлүштүрүлгөнү.'
          },
          {
            q: 'Лоренц ийри сызыгы (Lorenz Curve) эмнени көрсөтөт?',
            a: 'Киреше теңсиздигин графиктик сүрөттөлүшү. Диагоналдык сызыктан (абсолюттук теңдик) канчалык алыс болсо, теңсиздик ошончолук күчтүү.'
          },
          {
            q: 'Джини коэффициенти (Gini Coefficient) эмне?',
            a: 'Теңсиздиктин сандык көрсөткүчү. 0 - абсолюттук теңдик (баары бирдей алат), 1 - абсолюттук теңсиздик (бир киши баарын алат).'
          },
          {
            q: 'Киреше теңсиздигин азайтуу үчүн мамлекет эмне кылат?',
            a: '1. Прогрессивдүү салык салуу (байлардан көп алуу)\n2. Трансферттик төлөмдөр (жөлөк пул)\n3. Акысыз билим берүү жана медицина\n4. Минималдуу эмгек акыны белгилөө.'
          }
        ],
      },
    },
  },
  man: {
    name: 'Менеджмент (Introduction to Business)',
    chapters: {
      man_ch1: {
        name: 'Ch 1. What is a Business?',
        flashcards: [
          {
            q: 'What is the definition of a "Business"?',
            a: 'An organized group of people involved in professional, commercial, or industrial activities to produce goods or services for profit.'
          },
          {
            q: 'What are the main functions of a business?',
            a: '1. Management\n2. Operations\n3. Marketing/Sales\n4. Finance\n5. Research & Development.'
          },
          {
            q: 'What is a "Business Model"?',
            a: 'A plan that describes how a company creates, delivers, and captures value (e.g., Subscription, Freemium, Direct Sales).'
          },
          {
            q: 'What is a "Non-Profit Organization"?',
            a: 'A business entity focused on a social cause rather than profit. Any revenue generated is reinvested into the organization.'
          },
          {
            q: 'Who are "Internal Stakeholders"?',
            a: 'Individuals who are directly involved in the business operations, such as employees, managers, and owners.'
          },
          {
            q: 'Who are "External Stakeholders"?',
            a: 'Individuals or groups outside the business who are affected by its actions, such as customers, suppliers, community, and government.'
          },
          {
            q: 'What is the difference between "Goods" and "Services"?',
            a: 'Goods are tangible products (like a phone). Services are intangible actions performed for a customer (like consulting).'
          },
          {
            q: 'What is "B2B" (Business to Business)?',
            a: 'Transactions between two businesses, such as a manufacturer selling parts to an assembler.'
          },
          {
            q: 'What is "B2C" (Business to Consumer)?',
            a: 'Transactions where businesses sell directly to the end consumer (like a retail store).'
          }
        ]
      },
      man_ch2: {
        name: 'Ch 2. Thriving in Business',
        flashcards: [
          {
            q: 'What is a "Growth Mindset"?',
            a: 'The belief that abilities and intelligence can be developed through dedication and hard work. It views failure as a learning opportunity.'
          },
          {
            q: 'What is a "Fixed Mindset"?',
            a: 'The belief that basic qualities like intelligence or talent are fixed traits. It avoids challenges and gives up easily.'
          },
          {
            q: 'What is "Emotional Intelligence" (EQ)?',
            a: 'The ability to understand, use, and manage your own emotions in positive ways to relieve stress, communicate effectively, empathize with others, and defuse conflict.'
          },
          {
            q: 'What are the 5 components of Emotional Intelligence?',
            a: '1. Self-awareness\n2. Self-regulation\n3. Motivation\n4. Empathy\n5. Social skills.'
          },
          {
            q: 'What is "Corporate Social Responsibility" (CSR)?',
            a: 'A management concept whereby companies integrate social and environmental concerns in their business operations and interactions with stakeholders.'
          },
          {
            q: 'What is "Business Ethics"?',
            a: 'The study of appropriate business policies and practices regarding potentially controversial subjects including corporate governance, insider trading, bribery, discrimination, and fiduciary responsibilities.'
          },
          {
            q: 'What is "Adaptability" in business?',
            a: 'The ability of a business to adjust to new conditions, such as market trends, technology changes, or economic shifts.'
          },
          {
            q: 'What is "Business Myopia"?',
            a: 'A shortsighted focus on selling products and services rather than focusing on the big picture of what customers really want or need.'
          }
        ]
      },
      man_ch3: {
        name: 'Ch 3. Communication in Business',
        flashcards: [
          {
            q: 'What is the "Communication Process"?',
            a: 'Sender -> Encoding -> Message -> Channel -> Decoding -> Receiver -> Feedback (with Noise interfering).'
          },
          {
            q: 'What is "Active Listening"?',
            a: 'Fully concentrating on what is being said rather than just passively hearing the message of the speaker.'
          },
          {
            q: 'What are the 4 main Social Styles?',
            a: '1. Analytical (Focus on facts)\n2. Driver (Focus on results)\n3. Amiable (Focus on relationships)\n4. Expressive (Focus on creativity/energy).'
          },
          {
            q: 'What is an "Elevator Pitch"?',
            a: 'A brief, persuasive speech that you use to spark interest in what you or your organization does (usually 30-60 seconds).'
          },
          {
            q: 'What is "Non-verbal Communication"?',
            a: 'Transmission of messages or signals through a nonverbal platform such as eye contact, facial expressions, gestures, posture, and body language.'
          },
          {
            q: 'What is "Cultural Intelligence" (CQ) in communication?',
            a: 'The capability to relate and work effectively across cultures.'
          },
          {
            q: 'What is "Internal Communication"?',
            a: 'Communication between people within an organization (emails, meetings, memos).'
          },
          {
            q: 'What is "External Communication"?',
            a: 'Communication between the organization and the outside world (press releases, marketing, customer support).'
          }
        ]
      },
      man_ch4: {
        name: 'Ch 4. Hiring and Retaining People',
        flashcards: [
          {
            q: 'What is "Human Resource Management" (HRM)?',
            a: 'The strategic approach to the effective management of people in a company or organization such that they help their business gain a competitive advantage.'
          },
          {
            q: 'What are the key functions of HR?',
            a: 'Recruitment, Training, Compensation, Benefits, Employee Relations, Compliance, and Performance Management.'
          },
          {
            q: 'What is "Recruitment"?',
            a: 'The process of actively seeking out, finding, and hiring candidates for a specific position or job.'
          },
          {
            q: 'What is "Onboarding"?',
            a: 'The process of integrating a new employee into an organization and its culture.'
          },
          {
            q: 'What is the difference between "Equity" and "Equality"?',
            a: 'Equality means giving everyone the same resources. Equity means recognizing that each person has different circumstances and allocating the resources needed to reach an equal outcome.'
          },
          {
            q: 'What is "Diversity" in the workplace?',
            a: 'The presence of differences within a given setting (gender, race, ethnicity, religion, age, sexual orientation, etc.).'
          },
          {
            q: 'What is "Inclusion"?',
            a: 'The practice of ensuring that people feel they belong in the workplace.'
          },
          {
            q: 'What is "Employee Retention"?',
            a: 'The ability of an organization to keep its employees.'
          }
        ]
      },
      man_ch5: {
        name: 'Ch 5. Operations Management',
        flashcards: [
          {
            q: 'What is "Operations Management"?',
            a: 'The administration of business practices to create the highest level of efficiency possible within an organization. It involves converting materials and labor into goods and services.'
          },
          {
            q: 'What is the "Input-Process-Output" model?',
            a: 'Input (Resources) -> Transformation Process (Value Add) -> Output (Goods/Services).'
          },
          {
            q: 'What is the difference between "Product" and "Service" operations?',
            a: 'Products are tangible and can be stored (inventory). Services are intangible, consumed as produced, and cannot be stored.'
          },
          {
            q: 'What is "Supply Chain Management"?',
            a: 'The management of the flow of goods and services and includes all processes that transform raw materials into final products.'
          },
          {
            q: 'What is "Quality Control"?',
            a: 'A process through which a business seeks to ensure that product quality is maintained or improved.'
          },
          {
            q: 'What is "Productivity"?',
            a: 'A ratio of output volume to the volume of inputs. Productivity = Output / Input.'
          },
          {
            q: 'What is "Lean Manufacturing"?',
            a: 'A methodology that focuses on minimizing waste within manufacturing systems while simultaneously maximizing productivity.'
          },
          {
            q: 'What is the "Make or Buy" decision?',
            a: 'The act of choosing between manufacturing a product in-house or purchasing it from an external supplier.'
          }
        ]
      },
      man_ch6: {
        name: 'Ch 6. Building a Strong Supply Chain',
        flashcards: [
          {
            q: 'What is a "Supply Chain"?',
            a: 'A network of individuals, organizations, resources, activities, and technology involved in the creation and sale of a product.'
          },
          {
            q: 'What are the components of a Supply Chain?',
            a: 'Sourcing (Suppliers) -> Manufacturing -> Warehousing -> Distribution -> Retail -> Consumer.'
          },
          {
            q: 'What is "Logistics"?',
            a: 'The detailed coordination of a complex operation involving many people, facilities, or supplies.'
          },
          {
            q: 'What is "Upstream" in a supply chain?',
            a: 'Activities involved in searching for and extracting raw materials (moving towards the supplier).'
          },
          {
            q: 'What is "Downstream" in a supply chain?',
            a: 'Activities involved in processing the materials into finished products and selling them (moving towards the customer).'
          },
          {
            q: 'What is "Just-In-Time" (JIT) inventory?',
            a: 'A strategy where materials are ordered and received only as they are needed in the production process to reduce inventory costs.'
          },
          {
            q: 'What is "Sustainability" in supply chains?',
            a: 'The management of environmental, social, and economic impacts and the encouragement of good governance practices throughout the lifecycles of goods and services.'
          },
          {
            q: 'What is the "Bullwhip Effect"?',
            a: 'A distribution channel phenomenon in which demand forecasts yield supply chain inefficiencies. Small fluctuations in demand at the retail level can cause progressively larger fluctuations in demand at the wholesale, distributor, manufacturer, and raw material supplier levels.'
          }
        ]
      },
      man_ch7: {
        name: 'Ch 7. Selling Value',
        flashcards: [
          {
            q: 'What is "Value" in sales?',
            a: 'The benefit a customer gets from a product or service minus the cost. Value = Benefit - Cost.'
          },
          {
            q: 'What is a "Value Proposition"?',
            a: 'A statement that summarizes why a consumer should buy a product or use a service. It convinces a potential customer that one particular product or service will add more value or better solve a problem than other similar offerings.'
          },
          {
            q: 'What is the "Sales Process"?',
            a: '1. Prospecting\n2. Preparation\n3. Approach\n4. Presentation\n5. Handling Objections\n6. Closing\n7. Follow-up.'
          },
          {
            q: 'What is "B2B Sales"?',
            a: 'Selling products or services to other businesses. Often involves longer sales cycles and higher transaction values.'
          },
          {
            q: 'What is "B2C Sales"?',
            a: 'Selling products or services directly to individual consumers.'
          },
          {
            q: 'What is "Consultative Selling"?',
            a: 'A sales approach that prioritizes relationships and open dialogue to identify and provide solutions to a customers needs.'
          },
          {
            q: 'What is "Social Selling"?',
            a: 'The practice of using a brand\'s social media channels to connect with prospects, develop a connection with them, and engage with potential leads.'
          },
          {
            q: 'What is "Customer Relationship Management" (CRM)?',
            a: 'Technology for managing all your company\'s relationships and interactions with customers and potential customers.'
          }
        ]
      },
      man_ch8: {
        name: 'Ch 8. Marketing the Business',
        flashcards: [
          {
            q: 'What is the definition of "Marketing"?',
            a: 'The activity, set of institutions, and processes for creating, communicating, delivering, and exchanging offerings that have value for customers, clients, partners, and society at large.'
          },
          {
            q: 'What are the "4 Ps" of Marketing (Marketing Mix)?',
            a: '1. Product\n2. Price\n3. Place\n4. Promotion.'
          },
          {
            q: 'What is "Target Market"?',
            a: 'A specific group of consumers at which a company aims its products and services.'
          },
          {
            q: 'What is "Market Segmentation"?',
            a: 'Dividing a market into distinct groups of buyers who have different needs, characteristics, or behaviors.'
          },
          {
            q: 'What is "Branding"?',
            a: 'The process of creating a strong, positive perception of a company, its products or services in the customer\'s mind.'
          },
          {
            q: 'What is "Digital Marketing"?',
            a: 'Marketing of products or services using digital technologies, mainly on the Internet, but also including mobile phones, display advertising, and any other digital medium.'
          },
          {
            q: 'What is the "Product Life Cycle"?',
            a: 'The stages a product goes through from when it was first thought of until it finally is removed from the market: Introduction, Growth, Maturity, and Decline.'
          },
          {
            q: 'What is "SWOT Analysis"?',
            a: 'A strategic planning technique used to identify Strengths, Weaknesses, Opportunities, and Threats.'
          }
        ]
      },
      man_ch9: {
        name: 'Ch 9. Accounting',
        flashcards: [
          {
            q: 'What is "Accounting"?',
            a: 'The process of recording, summarizing, analyzing, and reporting financial transactions.'
          },
          {
            q: 'What is the fundamental "Accounting Equation"?',
            a: 'Assets = Liabilities + Owner\'s Equity.'
          },
          {
            q: 'What are "Assets"?',
            a: 'Resources owned by a business that have economic value (cash, inventory, property).'
          },
          {
            q: 'What are "Liabilities"?',
            a: 'Debts or obligations the business owes to outsiders (loans, accounts payable).'
          },
          {
            q: 'What is "Owner\'s Equity"?',
            a: 'The owner\'s claim to the assets of the business after liabilities are deducted.'
          },
          {
            q: 'What is a "Balance Sheet"?',
            a: 'A financial statement that reports a company\'s assets, liabilities, and shareholders\' equity at a specific point in time.'
          },
          {
            q: 'What is an "Income Statement" (Profit & Loss)?',
            a: 'A financial statement that reports a company\'s financial performance over a specific accounting period (Revenue - Expenses = Net Income).'
          },
          {
            q: 'What is a "Cash Flow Statement"?',
            a: 'A financial statement that summarizes the amount of cash and cash equivalents entering and leaving a company.'
          },
          {
            q: 'What is "Double-Entry Bookkeeping"?',
            a: 'A system where every entry to an account requires a corresponding and opposite entry to a different account.'
          }
        ]
      },
      man_ch10: {
        name: 'Ch 10. Financing the Business',
        flashcards: [
          {
            q: 'What is "Finance"?',
            a: 'The management of money, including investing, borrowing, lending, budgeting, saving, and forecasting.'
          },
          {
            q: 'What is "Debt Financing"?',
            a: 'Raising capital by borrowing money (loans, bonds) that must be repaid over time with interest.'
          },
          {
            q: 'What is "Equity Financing"?',
            a: 'Raising capital by selling shares of the business to investors (stock market, venture capital). No repayment is required, but ownership is diluted.'
          },
          {
            q: 'What is "Bootstrapping"?',
            a: 'Starting a business with little or no outside funding, using personal savings and revenue from the business.'
          },
          {
            q: 'What is "Venture Capital"?',
            a: 'A form of private equity and a type of financing that investors provide to startup companies and small businesses that are believed to have long-term growth potential.'
          },
          {
            q: 'What is an "Angel Investor"?',
            a: 'A high-net-worth individual who provides financial backing for small startups or entrepreneurs, typically in exchange for ownership equity in the company.'
          },
          {
            q: 'What is "Crowdfunding"?',
            a: 'The practice of funding a project or venture by raising small amounts of money from a large number of people, typically via the Internet.'
          },
          {
            q: 'What is "Return on Investment" (ROI)?',
            a: 'A performance measure used to evaluate the efficiency of an investment. ROI = (Net Profit / Cost of Investment) x 100.'
          }
        ]
      }
    }
  }
};
