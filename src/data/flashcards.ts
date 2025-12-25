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
        name: "Chapter 10: Financing the Business",
    flashcards: [
      {
        q: "What are the two primary types of financing sources?",
        a: "1. Debt: An obligation (loan/bond) paid back with interest.\n2. Equity: Providing a portion of the business in exchange for financing."
      },
      {
        q: "What is the Small Business Administration (SBA)?",
        a: "A part of the US Federal government that provides support, resources, and financing assistance to small businesses."
      },
      {
        q: "What is a Financial Intermediary?",
        a: "An entity like a bank that acts as the middleman between two parties in a financial transaction (e.g., between savers and borrowers)."
      },
      {
        q: "What is the difference between Angel Investors and Venture Capital?",
        a: "Angel Investors are individuals who invest their own money early on. Venture Capital comes from firms investing pooled money in high-growth companies."
      },
      {
        q: "What are the Pros of Equity Financing?",
        a: "You don't have to pay the money back (no monthly payments), and it reduces leverage ratios (debts)."
      },
      {
        q: "What are the Cons of Equity Financing?",
        a: "It is expensive (giving up future profits), it dilutes your ownership/control, and may require public listing."
      },
      {
        q: "What is Net Present Value (NPV)?",
        a: "A method of calculating the value of future cash flows in today's dollars. It helps determine if a project is worth investing in."
      },
      {
        q: "What is Liquidity?",
        a: "A measure of how easily an asset can be converted into cash. Cash is the most liquid; inventory is less liquid."
      },
      {
        q: "What is Forecasting in finance?",
        a: "The process of establishing a baseline of current performance to predict future financing needs (how much debt or equity to raise)."
      },
      {
        q: "What is Break-even Analysis?",
        a: "A calculation to find the specific quantity of sales needed where Total Revenue equals Total Expenses (no profit, no loss)."
      },
      {
        q: "What makes an investment a 'Driver'?",
        a: "An investment is a driver when the revenues generated from it are greater than the expenses (quantity sold > break-even point)."
      },
      {
        q: "What are Fiduciary Duties?",
        a: "Ethical responsibilities in finance requiring professionals to act in the best interest of their company or clients with the highest standard of care."
      },
      {
        q: "How is Net Worth calculated?",
        a: "Total Assets (what you own) minus Total Debt (what you owe)."
      },
      {
        q: "What is the 'Snowballing' effect in debt?",
        a: "When debt increases rapidly and becomes unmanageable, often because interest accumulates or unexpected expenses occur."
      },
      {
        q: "What is Compounding Interest?",
        a: "Interest calculated on the initial principal AND the accumulated interest from previous periods (earning interest on interest)."
      },
      {
        q: "What is a Bull Market?",
        a: "A market condition characterized by rising stock prices and optimistic investor confidence."
      },
      {
        q: "What is a Bear Market?",
        a: "A market condition characterized by falling stock prices and pessimistic investor sentiment."
      },
      {
        q: "What is Asset Allocation?",
        a: "The strategy of balancing risk and reward by distributing investments across different categories (Stocks, Bonds, Cash)."
      },
      {
        q: "What is Risk Tolerance?",
        a: "The degree of variability in investment returns that an investor is willing to withstand. It determines how aggressive or conservative their portfolio should be."
      },
      {
        q: "What is the Kyrgyz Stock Exchange (KSE)?",
        a: "A non-state, non-profit organization founded in 1994 to provide effective conditions for the securities market in Kyrgyzstan."
      }
    ]
  },
     man_ch11: {
        name: 'Ch 11. Digital Presence',
        flashcards: [
          {
            q: 'What is a "Digital Presence"?',
            a: 'How a business appears online; it is the sum of all the identities a business creates (website, social media, emails, etc.) and the interactions those identities have with customers.'
          },
          {
            q: 'What is a "Buyer Persona"?',
            a: 'A semi-fictional representation of a business\'s ideal customer based on market research and real data about existing customers.'
          },
          {
            q: 'What is "Content Marketing"?',
            a: 'A strategic marketing approach focused on creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience.'
          },
          {
            q: 'What is "Social Media Marketing"?',
            a: 'The use of social media platforms to connect with the audience to build the brand, increase sales, and drive website traffic.'
          },
          {
            q: 'What is the "Reach" metric in social media?',
            a: 'The number of unique people who have seen a post. (Reach / Total Followers * 100).'
          },
          {
            q: 'What are "Impressions" in social media?',
            a: 'The total number of times a post shows up on a timeline or newsfeed, regardless of whether it was clicked.'
          },
          {
            q: 'What is the "Engagement Rate"?',
            a: 'A metric that measures the level of interaction (likes, comments, shares) a piece of content receives from an audience. (Total Interactions / Total Followers * 100).'
          },
          {
            q: 'What is "Social Share of Voice"?',
            a: 'It measures how many people are talking about the brand on social media compared to its competitors.'
          },
          {
            q: 'What is the "Applause Rate"?',
            a: 'The number of approval actions (likes, favorites, etc.) a post receives relative to the total number of followers.'
          },
          {
            q: 'What is the "Virality Rate"?',
            a: 'The number of people who shared a post relative to the number of unique views (impressions) it had during a period.'
          }
        ]
      }
    },
  },
  acc: {
    name: 'Бухгалтердик эсеп (Accounting)',
    chapters: {
      acc_ch1: {
        name: 'Lesson 1. Introduction',
        flashcards: [
          {
            q: 'What is "Accounting"?',
            a: 'The art of recording, classifying, and summarizing financial transactions and interpreting the results thereof.'
          },
          {
            q: 'Who are "Internal Users" of accounting information?',
            a: 'Owners, Managers, Employees.'
          },
          {
            q: 'Who are "External Users" of accounting information?',
            a: 'Investors, Creditors, Government, Public, Researchers.'
          },
          {
            q: 'What is the "Accounting Process"?',
            a: 'Identifying -> Recording -> Classifying -> Summarizing -> Analyzing -> Interpreting -> Communicating.'
          },
          {
            q: 'What is the main purpose of accounting?',
            a: 'To provide useful financial information for decision-making.'
          }
        ]
      },
      acc_ch2: {
        name: 'Lesson 2. Org Forms',
        flashcards: [
          {
            q: 'What are the 3 main forms of business ownership?',
            a: 'Sole Proprietorship, Partnership, Corporation.'
          },
          {
            q: 'What is a "Sole Proprietorship"?',
            a: 'A business owned by one person. Easiest to start, but has unlimited liability.'
          },
          {
            q: 'What is "Unlimited Liability"?',
            a: 'The owner is personally responsible for all debts and legal obligations of the business.'
          },
          {
            q: 'What is a "Partnership"?',
            a: 'A business owned by two or more people who share profits and liabilities.'
          },
          {
            q: 'What is a "Corporation"?',
            a: 'A legal entity separate from its owners. It has limited liability but is harder to set up and subject to double taxation.'
          },
          {
            q: 'What is a "Limited Liability Partnership" (LLP)?',
            a: 'A partnership where some or all partners have limited liabilities.'
          }
        ]
      },
      acc_ch3: {
        name: 'Lesson 3. Financial Position',
        flashcards: [
          {
            q: 'What is the "Balance Sheet Equation"?',
            a: 'Assets = Liabilities + Equity.'
          },
          {
            q: 'What is a "Balance Sheet"?',
            a: 'A snapshot of a company\'s financial position at a specific point in time.'
          },
          {
            q: 'What are "Current Assets"?',
            a: 'Assets expected to be converted to cash or used within one year (e.g., Cash, Inventory, Accounts Receivable).'
          },
          {
            q: 'What are "Non-Current Assets"?',
            a: 'Long-term assets used for more than one year (e.g., Property, Plant, Equipment).'
          },
          {
            q: 'What is "Accounts Receivable"?',
            a: 'Money owed to the company by customers for goods/services delivered but not yet paid for.'
          },
          {
            q: 'What is "Accounts Payable"?',
            a: 'Money the company owes to suppliers for goods/services received but not yet paid for.'
          },
          {
            q: 'What is "Equity"?',
            a: 'The residual interest in the assets of the entity after deducting all its liabilities (Net Assets).'
          }
        ]
      },
      acc_ch4: {
        name: 'Lesson 4. Double Entry',
        flashcards: [
          {
            q: 'What is the "Double Entry System"?',
            a: 'Every transaction affects at least two accounts: one is debited and another is credited.'
          },
          {
            q: 'What is the golden rule for Assets?',
            a: 'Increase -> Debit (Dr), Decrease -> Credit (Cr).'
          },
          {
            q: 'What is the golden rule for Liabilities and Equity?',
            a: 'Increase -> Credit (Cr), Decrease -> Debit (Dr).'
          },
          {
            q: 'What is a "T-Account"?',
            a: 'A visual representation of an account resembling the letter T, with Debit on the left and Credit on the right.'
          },
          {
            q: 'What is a "Journal Entry"?',
            a: 'The first recording of a transaction in chronological order.'
          },
          {
            q: 'What is "Posting"?',
            a: 'Transferring entries from the journal to the ledger accounts.'
          }
        ]
      },
      acc_ch5: {
        name: 'Lesson 5. Classification',
        flashcards: [
          {
            q: 'What are "Permanent Accounts"?',
            a: 'Accounts that are not closed at the end of the period (Assets, Liabilities, Equity). Their balances carry forward.'
          },
          {
            q: 'What are "Temporary Accounts"?',
            a: 'Accounts that are closed at the end of the period (Revenue, Expenses, Dividends). They start with a zero balance each year.'
          },
          {
            q: 'How do you increase an Expense account?',
            a: 'Debit (Dr).'
          },
          {
            q: 'How do you increase a Revenue account?',
            a: 'Credit (Cr).'
          },
          {
            q: 'What is a "Trial Balance"?',
            a: 'A list of all accounts and their balances to ensure Debits equal Credits.'
          }
        ]
      },
      acc_ch6: {
        name: 'Lesson 6. Chart of Accounts',
        flashcards: [
          {
            q: 'What is a "Chart of Accounts" (COA)?',
            a: 'A structured list of all accounts used by a company to record transactions.'
          },
          {
            q: 'What are the five main account types (Key Components) in a Chart of Accounts?',
            a: '1. Assets (Resources owned)\n2. Liabilities (Obligations owed)\n3. Equity (Owner\'s interest)\n4. Revenue (Income from operations)\n5. Expenses (Costs incurred).'
          },
          {
            q: 'What are Current Assets?',
            a: 'Short-term assets that are expected to be converted to cash or used up within one year (Account codes starting with 1000).'
          },
          {
            q: 'What are Non-Current Assets?',
            a: 'Long-term assets that are expected to be used for more than one year (Account codes starting with 2000).'
          },
          {
            q: 'What are Current Liabilities?',
            a: 'Short-term obligations that are due within one year (Account codes starting with 3000).'
          },
          {
            q: 'What are Non-Current Liabilities?',
            a: 'Long-term obligations that are due after more than one year (Account codes starting with 4000).'
          },
          {
            q: 'What is Equity?',
            a: 'The owner\'s residual interest in the assets of the company after deducting liabilities (Account codes starting with 5000).'
          },
          
          {
            q: 'What is the typical numbering for Assets?',
            a: 'Usually starts with 1 (e.g., 1000 - Cash).'
          },
          {
            q: 'What is the typical numbering for Liabilities?',
            a: 'Usually starts with 2 or 3.'
          },
          {
            q: 'What is the typical numbering for Equity?',
            a: 'Usually starts with 3 or 4.'
          },
          {
            q: 'What is the typical numbering for Revenue?',
            a: 'Usually starts with 4 or 5.'
          },
          {
            q: 'What is the typical numbering for Expenses?',
            a: 'Usually starts with 5, 6, or 7.'
          },
          {
            q: 'What is a "Synthetic Account"?',
            a: 'A general account that summarizes detailed sub-accounts (e.g., "Accounts Receivable" as a total).'
          },
          {
            q: 'What is an "Analytical Account"?',
            a: 'A detailed sub-account tracking specific items (e.g., "Accounts Receivable - Customer A").'
          },
          {
            q: 'What is the meaning of "Double-entry accounting"?',
            a: 'A system where every transaction affects at least two accounts (a debit to one and a credit to another), keeping the accounting equation (Assets = Liabilities + Equity) balanced.'
          },
          {
            q: 'Illustrate the double-entry for purchasing office supplies in cash for $100.',
            a: 'Debit: Office Supplies Expense (or Inventory) $100.\nCredit: Cash (1110) $100.'
          },
          {
            q: 'Why is it important to maintain a standardized Chart of Accounts?',
            a: 'To ensure consistent financial reporting, facilitate comparison over time, and comply with legal and tax regulations.'
          }
        ]
      },
      acc_ch7: {
        name: 'Lesson 7. Profit & Transformations',
        flashcards: [
          {
            q: 'What is "Gross Profit"?',
            a: 'Sales Revenue - Cost of Goods Sold (COGS).'
          },
          {
            q: 'What is "Net Profit"?',
            a: 'Gross Profit - Operating Expenses - Taxes - Interest.'
          },
          {
            q: 'What are "Transformation Entries"?',
            a: 'Adjusting entries made to align accounting records with economic reality (e.g., converting cash basis to accrual basis).'
          },
          {
            q: 'What is Revenue Recognition?',
            a: 'Recording revenue when earned, not just when cash is received.'
          },
          {
            q: 'What is the Matching Principle?',
            a: 'Recording expenses in the same period as the revenue they generate.'
          },
          {
            q: 'What is Deferred Revenue (Unearned Revenue)?',
            a: 'Cash received before service delivery. Liability.'
          },
          {
            q: 'What is Accrued Revenue?',
            a: 'Revenue earned but cash not received. Asset.'
          },
          {
            q: 'What is a Prepaid Expense?',
            a: 'Payment for future service. Asset.'
          },
          {
            q: 'What is an Accrued Expense?',
            a: 'Expense incurred but not paid. Liability.'
          },
          {
            q: 'How is Gross Profit calculated?',
            a: 'Sales Revenue - Cost of Goods Sold.'
          },
          {
            q: 'How is Net Profit (Net Income) calculated?',
            a: 'Gross Profit - Operating Expenses - Interest - Taxes.'
          },
          {
            q: 'What is the entry for Prepaid Rent adjustment?',
            a: 'Debit Rent Expense; Credit Prepaid Rent.'
          }
        ]
      },
      acc_ch8: {
        name: 'Lesson 8. Accrual Basis',
        flashcards: [
          {
            q: 'What is "Accrual Basis Accounting"?',
            a: 'Recording transactions when they occur, not when cash changes hands.'
          },
          {
            q: 'What is "Cash Basis Accounting"?',
            a: 'Recording transactions only when cash is received or paid.'
          },
          {
            q: 'What is "Depreciation"?',
            a: 'Allocating the cost of a tangible asset over its useful life.'
          },
          {
            q: 'What is "Accumulated Depreciation"?',
            a: 'A contra-asset account showing the total depreciation expense charged against an asset to date.'
          },
          {
            q: 'What is "Book Value"?',
            a: 'Cost of Asset - Accumulated Depreciation.'
          },
          {
            q: 'What is a "Transformed (Adjusted) Trial Balance"?',
            a: 'A trial balance prepared after all adjusting entries (for accruals, deferrals, depreciation) have been posted.'
          },
          {
            q: 'What is an "Accrued Expense"?',
            a: 'An expense incurred but not yet paid (e.g., Salaries Payable).'
          },
          {
            q: 'What are Accrued Revenues?',
            a: 'Revenues that have been earned (service performed or goods delivered) but for which payment has not yet been received.'
          },
          {
            q: 'What is a Contra-Asset Account?',
            a: 'An asset account with a credit balance that reduces the value of a related asset on the balance sheet (e.g., Accumulated Depreciation reduces Equipment).'
          },
          {
            q: 'What is a "Prepaid Expense"?',
            a: 'Payment made for goods/services to be received in the future. It is an Asset.'
          }
        ]
      },
      acc_ch9: {
        name: 'Lesson 9. Closing Cycle',
        flashcards: [
          {
            q: 'What is the Accounting Cycle?',
            a: 'The full process of recording and processing accounting events from transaction to closing.'
          },
          {
            q: 'What are the 9 steps of the Accounting Cycle?',
            a: 'Identify -> Record -> Post -> Unadjusted Trial Balance -> Adjust -> Adjusted Trial Balance -> Statements -> Close -> Post-Closing Trial Balance.'
          },
          {
            q: 'What is a "Source Document"?',
            a: 'Original records like invoices or receipts that prove a transaction happened.'
          },
          {
            q: 'What is the "Journal"?',
            a: 'A chronological record of all transactions using debits and credits.'
          },
          {
            q: 'What is a "Ledger Account"?',
            a: 'A record tracking the activity and balance of a specific account.'
          },
          {
            q: 'What is a "Trial Balance"?',
            a: 'A list of all accounts and balances to check if total debits equal total credits.'
          },
          {
            q: 'Why make "Adjustment Entries"?',
            a: 'To record revenues and expenses in the correct period (accruals/deferrals).'
          },
          {
            q: 'What is an "Adjusted Trial Balance"?',
            a: 'A trial balance made after adjusting entries, used to create financial statements.'
          },
          {
            q: 'What are "Closing Entries"?',
            a: 'Entries that reset revenue, expense, and dividend accounts to zero for the next period.'
          },
          {
            q: 'Which accounts are "Temporary"?',
            a: 'Revenue, Expense, and Dividends. They are closed at year-end.'
          },
          {
            q: 'Which accounts are "Permanent"?',
            a: 'Assets, Liabilities, and Equity. They are never closed.'
          },
          {
            q: 'What is the "Income Summary" account?',
            a: 'A temporary account to hold revenue and expenses before moving net profit to Retained Earnings.'
          },
          {
            q: 'What is a "Post-Closing Trial Balance"?',
            a: 'A final check of permanent accounts after closing entries to ensure books are balanced.'
          }
        ]
      },
      acc_ch10: {
        name: 'Lesson 10. Trade Accounting',
        flashcards: [
          {
            q: 'What is "Trade Accounting"?',
            a: 'Accounting specifically focused on buying and selling goods (inventory).'
          },
          {
            q: 'What is the formula for Gross Profit?',
            a: 'Gross Profit = Direct Revenue - Direct Expenses.'
          },
          {
            q: 'What is "Cost of Goods Sold" (COGS)?',
            a: 'The direct costs attributable to the production of the goods sold by a company.'
          },
          {
            q: 'What is the formula for COGS?',
            a: 'Opening Inventory + Purchases - Closing Inventory.'
          },
          {
            q: 'What is a "Trading Account"?',
            a: 'An account used to determine Gross Profit or Loss.'
          },
          {
            q: 'What are "Operating Expenses" (OpEx)?',
            a: 'Day-to-day expenses needed to run a business (e.g., rent, salaries, utilities) not directly linked to production.'
          },
          {
            q: 'What is "Realized Gain"?',
            a: 'Profit made from a completed trade.'
          },
          {
            q: 'What is "Unrealized Gain"?',
            a: 'Potential profit on an asset that has increased in value but has not yet been sold.'
          },
          {
            q: 'What is "Account Reconciliation"?',
            a: 'Comparing internal financial records with external statements (like bank statements) to ensure they match.'
          }
        ]
      }
    }
  },
law: {
    name: 'Укук таануу (Law)',
    chapters: {
      law_ch1: {
        name: '1. Мамлекет жана укуктун келип чыгышы',
        flashcards: [
          { q: 'Мамлекеттин келип чыгышы жөнүндөгү Теологиялык теориянын маңызы эмне?', a: 'Мамлекет жана укук кудайдын эрки менен жаратылган, мамлекеттин эрки кудайдын эркинин уландысы (Фома Аквинский).' },
          { q: 'Патриархалдык теория мамлекетти кантип түшүндүрөт?', a: 'Мамлекет - бул өсүп жетилген үй-бүлөнүн бир формасы, ал эми мамлекеттик бийлик - аталык бийликтин уландысы (Аристотель).' },
          { q: 'Келишим теориясы (Коомдук келишим) боюнча мамлекет кантип түзүлгөн?', a: 'Адамдар өз укуктарынын бир бөлүгүн мамлекетке өткөрүп берип, жалпы тартипти сактоо үчүн өз ара келишим түзүшкөн (Дж. Локк, Ж.Ж. Руссо).' },
          { q: 'Зордук-зомбулук теориясынын негизги идеясы кандай?', a: 'Мамлекет алсыз урууларды күчтүү уруулар басып алып, аларга үстөмдүк кылуу үчүн түзүлгөн (Е. Дюринг, К. Каутский).' },
          { q: 'Психологиялык теория мамлекеттин пайда болушун эмне менен байланыштырат?', a: 'Адамдардын психологиялык муктаждыгы: багынуу, баш ийүү жана лидерди ээрчүү каалоосу менен (Л.И. Петражицкий).' },
          { q: 'Марксисттик (классикалык) теория боюнча мамлекет эмне үчүн пайда болгон?', a: 'Коомдогу карама-каршы таптардын күрөшүнүн натыйжасында, бир тап экинчи тапты эзүү куралы катары (К. Маркс, Ф. Энгельс).' },
          { q: 'Алгачкы общиналык коомдун бийлиги кандай болгон?', a: 'Коомдук бийлик болгон, ал жалпы чогулушка жана аксакалдардын кадыр-баркына негизделген, атайын мажбурлоочу аппарат болгон эмес.' },
          { q: 'Социалдык нормалар (мононормалар) деген эмне?', a: 'Адамдардын ортосундагы мамилелерди жөнгө салуучу жалпы эрежелер (үрп-адаттар, салттар, диний эрежелер).' },
          { q: 'Мамлекеттин пайда болушунун негизги экономикалык себептери кайсылар?', a: 'Эмгектин бөлүнүшү (дыйканчылык, мал чарбачылык, кол өнөрчүлүк), жеке менчиктин пайда болушу жана өндүрүмдүүлүктүн өсүшү.' },
          { q: 'Мамлекеттин пайда болушунун социалдык себеби эмнеде?', a: 'Коомдун бай жана кедей болуп жиктелиши, карама-каршы таптардын пайда болушу жана уруулук байланыштардын бузулушу.' }
        ]
      },
      law_ch2: {
        name: '2. Мамлекеттин функциясы',
        flashcards: [
          { q: 'Мамлекеттин функциясы деген эмне?', a: 'Мамлекеттин ишмердүүлүгүнүн негизги багыттары жана анын коом алдындагы милдеттерин аткаруусу.' },
          { q: 'Мамлекеттин ички функцияларына эмнелер кирет?', a: 'Экономикалык, социалдык, маданий, экологиялык, салык салуу, укук тартибин сактоо жана адам укугун коргоо.' },
          { q: 'Мамлекеттин тышкы функциялары кайсылар?', a: 'Мамлекетти коргоо, эл аралык тынчтыкты сактоо, дүйнөлүк экономикага интеграциялануу, башка өлкөлөр менен кызматташуу.' },
          { q: 'Мамлекеттин саясий функциясы эмнени көздөйт?', a: 'Саясий стабилдүүлүктү сактоо, демократиялык институттарды өнүктүрүү, жарандардын бийликке катышуусун камсыз кылуу.' },
          { q: 'Мамлекеттин социалдык функциясынын максаты эмне?', a: 'Жакырчылыкты азайтуу, калкты социалдык жактан коргоо (пенсия, жөлөк пул), билим берүү жана саламаттыкты сактоону камсыздоо.' },
          { q: 'Мамлекеттин экологиялык функциясы эмнени камтыйт?', a: 'Жаратылышты коргоо, жаратылыш ресурстарын сарамжалдуу пайдалануу жана экологиялык коопсуздукту камсыз кылуу.' },
          { q: 'Мамлекеттин функциясын ишке ашыруунун укуктук формалары кайсылар?', a: 'Мыйзам чыгаруу, башкаруу (аткаруу), сот адилеттиги жана көзөмөл жүргүзүү.' },
          { q: 'Мамлекеттин функциясын ишке ашыруунун уюштуруучулук формаларына эмне кирет?', a: 'Мамлекеттик органдарды түзүү, кадрларды даярдоо, материалдык-техникалык камсыздоо.' }
        ]
      },
      law_ch3: {
        name: '3. Мамлекеттик түзүлүштүн негизги формалары',
        flashcards: [
          { q: 'Мамлекеттин формасы (түзүлүшү) кайсы үч элементтен турат?', a: 'Башкаруу формасы, мамлекеттик (аймактык) түзүлүш формасы жана саясий-укуктук режим.' },
          { q: 'Мамлекеттик башкаруу формасы деген эмне?', a: 'Жогорку мамлекеттик бийликтин уюштурулушу, алардын өз ара жана эл менен болгон мамилеси.' },
          { q: 'Монархиялык башкаруунун белгилери кайсылар?', a: 'Бийлик жеке адамга (монархка) таандык, мурас катары өтөт, мөөнөтсүз жана монарх юридикалык жоопкерчиликке тартылбайт.' },
          { q: 'Абсолюттук жана Конституциялык монархиянын айырмасы?', a: 'Абсолюттук монархияда бийлик чектелген эмес. Конституциялык монархияда бийлик парламент же конституция менен чектелген.' },
          { q: 'Республикалык башкаруунун белгилери кайсылар?', a: 'Бийлик шайлоо жолу менен түзүлөт, белгилүү мөөнөткө берилет, бийлик эл алдында жооп берет.' },
          { q: 'Президенттик республиканын өзгөчөлүгү?', a: 'Президент мамлекет жана өкмөт башчысы, эл тарабынан шайланат, өкмөттү өзү түзөт (мисалы, АКШ).' },
          { q: 'Парламенттик республиканын өзгөчөлүгү?', a: 'Өкмөт парламент тарабынан түзүлөт жана ага жооп берет, президенттин ыйгарым укуктары чектелүү (мисалы, Германия, Италия).' },
          { q: 'Унитардык мамлекет деген эмне?', a: 'Бирдиктүү, аймактык бөлүктөрү суверенитетке ээ болбогон жөнөкөй мамлекет (Кыргызстан, Япония).' },
          { q: 'Федеративдик мамлекет деген эмне?', a: 'Өз алдынча мамлекеттик түзүлүштөргө (субъектилерге) ээ болгон татаал союздук мамлекет (Россия, АКШ, Германия).' },
          { q: 'Конфедерация деген эмне?', a: 'Көз карандысыз мамлекеттердин белгилүү бир максаттар үчүн түзгөн убактылуу союзу.' },
          { q: 'Демократиялык режимдин негизги белгилери?', a: 'Эл - бийликтин булагы, адам укуктарынын корголушу, саясий плюрализм, мыйзамдуулук.' },
          { q: 'Антидемократиялык (Тоталитардык/Авторитардык) режимдин белгилери?', a: 'Бийликтин бир колго топтолушу, оппозицияга тыюу салуу, адам укуктарынын бузулушу, мамлекеттин коомду толук көзөмөлдөшү.' }
        ]
      },
      law_ch4: {
        name: '4. Мамлекеттин механизми',
        flashcards: [
          { q: 'Мамлекеттин механизми деген эмне?', a: 'Мамлекеттин функцияларын жана милдеттерин ишке ашыруучу мамлекеттик органдардын жана мекемелердин бирдиктүү системасы.' },
          { q: 'Мамлекеттик аппараттын негизги белгилери кайсылар?', a: 'Мамлекеттик бийликке ээ, атайын даярдыктагы адамдар (чиновниктер) иштейт, мыйзам чегинде иш алып барат, материалдык каражаттарга ээ.' },
          { q: 'Мамлекеттик орган деген эмне?', a: 'Мамлекеттик аппараттын өз алдынча бөлүгү, ал мамлекеттин атынан бийлик жүргүзөт жана белгилүү компетенттүүлүккө ээ.' },
          { q: 'Мамлекеттик органдар бийлик бутактары боюнча кандай бөлүнөт?', a: 'Мыйзам чыгаруучу (парламент), Аткаруучу (өкмөт, министрликтер) жана Соттук (соттор) органдар.' },
          { q: 'Мамлекеттик кызматчы (чиновник) ким?', a: 'Мамлекеттик органда кызмат өтөгөн, айлык акы алган жана мамлекеттик тапшырмаларды аткарган жаран.' },
          { q: 'Ыйгарым укук (Компетенция) деген эмне?', a: 'Мамлекеттик органдын же кызмат адамдын мыйзам менен бекитилген укуктарынын жана милдеттеринин жыйындысы.' },
          { q: 'Күч колдонуучу (укук коргоо) органдарына кимдер кирет?', a: 'Сот, прокуратура, ички иштер органдары, коопсуздук кызматы, бажы, салык полициясы.' },
          { q: 'Жергиликтүү өз алдынча башкаруу органдары мамлекеттик механизмге киреби?', a: 'Кыргызстанда алар мамлекеттик бийликтен бөлүнгөн, бирок мамлекеттик иштерди аткарууга ыйгарым укук берилиши мүмкүн.' }
        ]
      },
      law_ch5: {
        name: '5. Мамлекеттик бийликтин бутактарга бөлүнүшү',
        flashcards: [
          { q: 'Бийликтин бөлүнүү принцибинин негизги максаты эмне?', a: 'Бийликтин бир колго топтолушуна жол бербөө, диктатураны болтурбоо жана бийлик бутактарынын тең салмактуулугун камсыз кылуу.' },
          { q: 'Тең салмактуулук жана кармап туруу (сдержек и противовесов) системасы деген эмне?', a: 'Бийлик бутактарынын бири-бирин көзөмөлдөп, чектөө механизмдери (мисалы, вето, импичмент, ишеним көрсөтпөө).' },
          { q: 'Мыйзам чыгаруучу бийликтин негизги милдети?', a: 'Мыйзамдарды кабыл алуу, бюджетти бекитүү жана аткаруу бийлигине көзөмөл жүргүзүү (Кыргызстанда - Жогорку Кеңеш).' },
          { q: 'Аткаруучу бийликтин негизги милдети?', a: 'Мыйзамдарды аткаруу, мамлекетти башкаруу, социалдык-экономикалык саясатты жүргүзүү (Өкмөт).' },
          { q: 'Сот бийлигинин негизги милдети?', a: 'Сот адилеттигин ишке ашыруу, мыйзамдуулукту сактоо, укуктук талаштарды чечүү.' },
          { q: 'Депутаттык иммунитет деген эмне?', a: 'Депутаттын өз ишин тоскоолдуксуз аткаруусу үчүн берилген кол тийбестик укугу.' },
          { q: 'Кыргыз Республикасынын Президенти кайсы бийлик бутагына кирет?', a: 'Конституция боюнча Президент мамлекет башчысы, ал бийлик бутактарынын координатору болуп саналат (бирок аткаруу бийлигине таасири күчтүү).' },
          { q: 'Импичмент деген эмне?', a: 'Президентти же башка жогорку кызмат адамдарын мыйзам бузгандыгы үчүн кызматтан четтетүү процедурасы.' }
        ]
      },
      law_ch6: {
        name: '6. Укук жана анын өзгөчөлүктөрү',
        flashcards: [
          { q: 'Укук (Право) деген эмне?', a: 'Мамлекет тарабынан кабыл алынган жана корголгон, коомдук мамилелерди жөнгө салуучу жалпыга милдеттүү жүрүм-турум эрежелеринин системасы.' },
          { q: 'Укуктун негизги белгилери кайсылар?', a: 'Мамлекеттик эркти билдирет, нормативдүүлүк (эрежелер), жалпыга милдеттүүлүк, формалдуу аныкталгандык (жазуу түрүндө), мамлекет тарабынан корголот.' },
          { q: 'Укук менен Моралдын айырмасы эмнеде?', a: 'Укук мамлекет тарабынан түзүлөт жана мажбурлоо менен корголот. Морал коомдук пикир менен калыптанат жана абийир күчү менен корголот.' },
          { q: 'Укуктун жөнгө салуучулук функциясы?', a: 'Коомдук мамилелерди тартипке келтирүү, эрежелерди орнотуу.' },
          { q: 'Укуктун коргоочулук функциясы?', a: 'Коомдук мамилелерди укук бузуулардан сактоо, күнөөлүүлөрдү жазалоо.' },
          { q: 'Социалдык нормалардын түрлөрү?', a: 'Укуктук, моралдык, диний, корпоративдик нормалар жана үрп-адаттар.' },
          { q: 'Укук жана мамлекеттин байланышы?', a: 'Мамлекет укукту жаратат жана коргойт, ал эми укук мамлекеттик бийликти мыйзамдаштырат жана чектейт.' },
          { q: 'Табигый укук деген эмне?', a: 'Адамга төрөлгөндөн берилген, мамлекеттен көз карандысыз укуктар (жашоо, эркиндик).' }
        ]
      },
      law_ch7: {
        name: '7. Укуктун негизги формалары (булактары)',
        flashcards: [
          { q: 'Укуктун булагы (формасы) деген эмне?', a: 'Укуктук нормалардын сырткы көрүнүшү, алардын бекитилген расмий формасы.' },
          { q: 'Укуктук адат (Обычай) деген эмне?', a: 'Мамлекет тарабынан санкцияланган (уруксат берилген) жана юридикалык күчкө ээ болгон тарыхый калыптанган жүрүм-турум эрежеси.' },
          { q: 'Укуктук прецедент деген эмне?', a: 'Сот же административдик органдын конкреттүү иш боюнча чыгарган чечими, ал кийинки окшош иштер үчүн үлгү болуп калат (Англо-саксон системасында).' },
          { q: 'Нормативдик-укуктук акт (НПА) деген эмне?', a: 'Укуктук нормаларды камтыган, компетенттүү мамлекеттик орган тарабынан кабыл алынган расмий документ (мыйзамдар, указдар).' },
          { q: 'Нормативдик келишим деген эмне?', a: 'Эки же андан көп тараптын ортосундагы укуктук нормаларды белгилеген келишим (мисалы, эл аралык келишимдер, жамааттык келишим).' },
          { q: 'Диний тексттер укук булагы боло алабы?', a: 'Ооба, теократиялык мамлекеттерде (мисалы, Ислам укугунда Куран, Сүннөт).' },
          { q: 'Кыргыз Республикасында укуктун негизги булагы кайсы?', a: 'Нормативдик-укуктук актылар (Конституция, мыйзамдар).' },
          { q: 'Мыйзам менен мыйзам алдындагы актынын айырмасы?', a: 'Мыйзам жогорку юридикалык күчкө ээ. Мыйзам алдындагы актылар мыйзамдын негизинде жана аны аткаруу үчүн кабыл алынат.' }
        ]
      },
      law_ch8: {
        name: '8. Ченемдик укуктук актылардын юридикалык күчкө ээ болуу тартиби',
        flashcards: [
          { q: 'Мыйзамдын убакыт боюнча күчүнө кириши эмнени билдирет?', a: 'Мыйзам качан иштей баштайт жана качан күчүн жоготот. Көбүнчө расмий жарыялангандан 10 же 14 күн өткөндөн кийин.' },
          { q: 'Мыйзамдын кайтарым күчү (обратная сила) барбы?', a: 'Жалпы эреже боюнча жок. Мыйзам ал кабыл алынгандан кийинки мамилелерге гана тарайт. (Өзгөчөлүк: эгер мыйзам жоопкерчиликти жеңилдетсе же жокко чыгарса).' },
          { q: 'Мыйзамдын мейкиндиктеги күчү?', a: 'Кыргыз Республикасынын мыйзамдары анын бүткүл аймагында (жер, суу, аба мейкиндиги) күчкө ээ.' },
          { q: 'Экстерриториалдуулук деген эмне?', a: 'Кээ бир объекттерде (элчиликтер, чет өлкөлүк кемелер) жергиликтүү мыйзамдардын иштебеши.' },
          { q: 'Мыйзамдардын жарандарга карата күчү?', a: 'Мыйзамдар бардык жарандарга, чет өлкөлүктөргө жана жарандыгы жокторго тиешелүү (дипломатиялык иммунитеттен башкаларга).' },
          { q: 'Мыйзамдын күчүн жоготушунун жолдору?', a: 'Мөөнөтү бүткөндө, жокко чыгарылганда (жокко чыгаруучу акт), же жаңы мыйзам кабыл алынганда.' },
          { q: 'Расмий жарыялоо (промульгация) эмне үчүн керек?', a: 'Мыйзам күчүнө кириши үчүн ал жалпыга маалымдалышы керек ("Эркин Тоо" гезитине).' },
          { q: 'Коллизия деген эмне?', a: 'Эки же андан көп укуктук нормалардын бири-бирине карама-каршы келиши. (Чечүү жолу: жогорку күчкө ээ болгону же кийин кабыл алынганы иштейт).' }
        ]
      },
      law_ch9: {
        name: '9. Мыйзам чыгаруу же укук чыгаруу',
        flashcards: [
          { q: 'Укук чыгаруу (правотворчество) деген эмне?', a: 'Мамлекеттик органдардын укуктук нормаларды иштеп чыгуу, кабыл алуу жана өзгөртүү боюнча ишмердүүлүгү.' },
          { q: 'Мыйзам чыгаруу процессинин негизги стадиялары?', a: '1. Мыйзам чыгаруу демилгеси. 2. Долбоорду талкуулоо. 3. Кабыл алуу (добуш берүү). 4. Кол коюу жана жарыялоо.' },
          { q: 'Мыйзам чыгаруу демилгесине кимдер ээ?', a: 'Депутаттар, Өкмөт, 10 миң шайлоочу (Элдик демилге).' },
          { q: 'Референдум деген эмне?', a: 'Мамлекеттик маанилүү маселени же мыйзамды жалпы элдик добуш берүү жолу менен кабыл алуу.' },
          { q: 'Мыйзамдарды кабыл алууда кандай көпчүлүк керек?', a: 'Жөнөкөй мыйзамдар үчүн депутаттардын жарымынан көбү, конституциялык мыйзамдар үчүн квалификациялуу көпчүлүк (үчтөн экиси).' },
          { q: 'Промульгация деген эмне?', a: 'Мамлекет башчысынын мыйзамга кол коюшу жана аны расмий жарыялоосу.' },
          { q: 'Вето укугу деген эмне?', a: 'Президенттин парламент кабыл алган мыйзамга кол койбой, кайра кароого жиберүү укугу.' },
          { q: 'Кодификация деген эмне?', a: 'Укуктук нормаларды бирдиктүү, системалаштырылган жыйнакка (Кодекске) бириктирүү.' }
        ]
      },
      law_ch10: {
        name: '10. Укук нормасы',
        flashcards: [
          { q: 'Укук нормасы деген эмне?', a: 'Мамлекет тарабынан бекитилген, жалпыга милдеттүү, формалдуу аныкталган жүрүм-турум эрежеси.' },
          { q: 'Укук нормасынын классикалык структурасы (үч элемент)?', a: 'Гипотеза (эгерде...), Диспозиция (анда...), Санкция (антпесе...).' },
          { q: 'Гипотеза эмнени билдирет?', a: 'Норма ишке аша турган турмуштук шарттарды (убакыт, орун, субъект).' },
          { q: 'Диспозиция эмнени билдирет?', a: 'Субъекттин укуктарын жана милдеттерин, анын кандай аракет кылышы керектигин (эреженин өзү).' },
          { q: 'Санкция эмнени билдирет?', a: 'Эрежени бузган учурдагы жагымсыз кесепеттерди (жазаны).' },
          { q: 'Императивдик норма деген эмне?', a: 'Так, өзгөртүүгө болбой турган, милдеттүү эрежени камтыган норма (тандоо укугу жок).' },
          { q: 'Диспозитивдик норма деген эмне?', a: 'Тараптарга өз ара макулдашуу менен укуктарын жана милдеттерин аныктоого мүмкүнчүлүк берген норма (тандоо укугу бар).' },
          { q: 'Материалдык жана Процессуалдык нормалардын айырмасы?', a: 'Материалдык норма укуктарды жана милдеттерди аныктайт (эмне кылуу керек). Процессуалдык норма аларды ишке ашыруу тартибин аныктайт (кантип кылуу керек).' }
        ]
      },
      law_ch11: {
        name: '11. Укуктук мамиле',
        flashcards: [
          { q: 'Укуктук мамиле (Правоотношение) деген эмне?', a: 'Укук нормаларынын негизинде келип чыккан, катышуучулары өз ара укуктар жана милдеттер менен байланышкан коомдук мамиле.' },
          { q: 'Укуктук мамиленин структурасы?', a: 'Субъект (катышуучулар), Объект (эмнеге багытталган), Мазмуну (укуктар жана милдеттер).' },
          { q: 'Укуктук мамиленин субъектилери кимдер?', a: 'Жеке адамдар (жарандар, чет өлкөлүктөр) жана Юридикалык жактар (уюмдар, мамлекет).' },
          { q: 'Укукка жөндөмдүүлүк (Правоспособность) качан пайда болот?', a: 'Адам төрөлгөндө пайда болуп, өлгөндө токтойт.' },
          { q: 'Аракетке жөндөмдүүлүк (Дееспособность) качан толук пайда болот?', a: 'Адам 18 жашка толгондо (эрзеге жеткенде).' },
          { q: 'Деликтоспособность деген эмне?', a: 'Адамдын өзүнүн укук бузуусу үчүн юридикалык жоопкерчиликти алуу жөндөмдүүлүгү.' },
          { q: 'Юридикалык факт деген эмне?', a: 'Укуктук мамиленин пайда болушуна, өзгөрүшүнө же токтошуна негиз болгон турмуштук жагдай.' },
          { q: 'Окуя (Событие) менен Аракеттин (Действие) айырмасы?', a: 'Окуя адамдын эркинен көз каранды эмес (өрт, өлүм). Аракет адамдын эрки менен жасалат (келишим түзүү, кылмыш кылуу).' }
        ]
      },
      law_ch12: {
        name: '12. Укукту ишке ашыруу',
        flashcards: [
          { q: 'Укукту ишке ашыруу деген эмне?', a: 'Укуктук нормалардын талаптарын иш жүзүндө жүзөгө ашыруу процесси.' },
          { q: 'Укукту ишке ашыруунун формалары кайсылар?', a: 'Сактоо (соблюдение), Аткаруу (исполнение), Пайдалануу (использование), Колдонуу (применение).' },
          { q: 'Укукту сактоо (соблюдение) кандай нормаларга тиешелүү?', a: 'Тыюу салуучу нормаларга (мисалы, кылмыш кылбоо).' },
          { q: 'Укукту аткаруу (исполнение) кандай нормаларга тиешелүү?', a: 'Милдеттендирүүчү нормаларга (мисалы, салык төлөө, карызды берүү).' },
          { q: 'Укукту пайдалануу (использование) кимге тиешелүү?', a: 'Укук берүүчү нормаларга (мисалы, шайлоого катышуу, билим алуу).' },
          { q: 'Укукту колдонуу (применение) деген эмне?', a: 'Компетенттүү мамлекеттик органдын конкреттүү иш боюнча бийлик чечимин кабыл алуусу (мисалы, соттун өкүмү, приказ).' },
          { q: 'Укукту колдонуунун стадиялары?', a: '1. Иштин фактыларын изилдөө. 2. Укуктук норманы тандоо жана анализдөө. 3. Чечим кабыл алуу (акт чыгаруу).' },
          { q: 'Укук колдонуу актысы (Акт применения права) деген эмне?', a: 'Конкреттүү юридикалык ишти чечкен расмий документ (өкүм, чечим, буйрук).' }
        ]
      },
      law_ch13: {
        name: '13. Укукту чечмелөө',
        flashcards: [
          { q: 'Укукту чечмелөө (Толкование права) деген эмне?', a: 'Укуктук норманын маани-маңызын тактоо жана түшүндүрүү процесси.' },
          { q: 'Расмий чечмелөө ким тарабынан жүргүзүлөт?', a: 'Ыйгарым укуктуу мамлекеттик органдар тарабынан (мисалы, Жогорку Сот, Парламент).' },
          { q: 'Расмий эмес (доктриналдык) чечмелөө ким тарабынан жүргүзүлөт?', a: 'Окумуштуулар, юристтер тарабынан (юридикалык күчкө ээ эмес, бирок таасирдүү).' },
          { q: 'Грамматикалык чечмелөө ыкмасы?', a: 'Норманын текстин, сөздөрүн, сүйлөм түзүлүшүн тил эрежелери боюнча талдоо.' },
          { q: 'Логикалык чечмелөө ыкмасы?', a: 'Логика мыйзамдарын колдонуу менен норманын ички маанисин ачуу.' },
          { q: 'Системалык чечмелөө ыкмасы?', a: 'Норманы башка укуктук нормалар менен байланышта кароо.' },
          { q: 'Тарыхый-саясий чечмелөө ыкмасы?', a: 'Норма кабыл алынган тарыхый шарттарды жана максаттарды эске алуу.' },
          { q: 'Көлөмү боюнча чечмелөө кандай болот?', a: 'Түзмө-түз (текстке дал келүү), Кеңейтилген (тексттен кенен маани), Чектелген (тексттен тар маани).' }
        ]
      },
      law_ch14: {
        name: '14. Укуктук аң-сезим жана укуктук тарбия',
        flashcards: [
          { q: 'Укуктук аң-сезим (Правосознание) деген эмне?', a: 'Адамдардын укукка, мыйзамдарга жана сот адилеттигине болгон көз караштарынын, сезимдеринин жана түшүнүктөрүнүн жыйындысы.' },
          { q: 'Укуктук психология деген эмне?', a: 'Укуктук кубулуштарга карата болгон сезимдер, эмоциялар, маанайлар (жөнөкөй деңгээл).' },
          { q: 'Укуктук идеология деген эмне?', a: 'Укуктук теориялар, принциптер, илимий көз караштар (теориялык деңгээл).' },
          { q: 'Укуктук нигилизм деген эмне?', a: 'Укуктун социалдык баалуулугун танүү, мыйзамдарды сыйлабоо, ишенбөөчүлүк.' },
          { q: 'Укуктук идеализм деген эмне?', a: 'Укуктун мүмкүнчүлүктөрүн ашыкча баалоо, мыйзам менен баарын чечсе болот деп ишенүү.' },
          { q: 'Укуктук маданият деген эмне?', a: 'Коомдогу укуктук билимдин, аң-сезимдин жана укуктук тартиптин өнүгүү деңгээли.' },
          { q: 'Укуктук тарбия деген эмне?', a: 'Адамдардын укуктук аң-сезимин жана маданиятын жогорулатууга багытталган системалуу иш-чаралар.' },
          { q: 'Укуктук тарбиянын максаты?', a: 'Мыйзамды сыйлаган, укуктук жактан сабаттуу жаранды калыптандыруу.' }
        ]
      },
      law_ch15: {
        name: '15. Укуктук жүрүш-туруш, укук бузуучулук жана юридикалык жоопкерчилик',
        flashcards: [
          { q: 'Укуктук жүрүм-турум (Правомерное поведение) деген эмне?', a: 'Укуктук нормаларга ылайык келген, коомго пайдалуу же зыянсыз жүрүм-турум.' },
          { q: 'Укук бузуучулук (Правонарушение) деген эмне?', a: 'Укук нормаларына каршы келген, коомго зыян келтирген, күнөөлүү адамдын аракети же аракетсиздиги.' },
          { q: 'Укук бузуунун курамы (Состав правонарушения) кайсы 4 элементтен турат?', a: 'Объект, Объективдүү жагы, Субъект, Субъективдүү жагы.' },
          { q: 'Кылмыш (Преступление) менен жоруктун (Проступок) айырмасы?', a: 'Кылмыш - коомго чоң коркунуч келтирет (Кылмыш кодекси). Жорук - зыяны азыраак (административдик, дисциплинардык).' },
          { q: 'Юридикалык жоопкерчилик деген эмне?', a: 'Укук бузуучуга карата мамлекеттик мажбурлоо чараларын колдонуу, жазалоо.' },
          { q: 'Юридикалык жоопкерчиликтин максаты?', a: 'Жазалоо, тарбиялоо жана жаңы укук бузуулардын алдын алуу.' },
          { q: 'Күнөөсүздүк презумпциясы (Презумпция невиновности) деген эмне?', a: 'Адамдын күнөөсү мыйзамдуу тартипте далилденмейинче жана соттун өкүмү чыкмайынча, ал күнөөсүз деп эсептелет.' },
          { q: 'Юридикалык жоопкерчиликтин түрлөрү?', a: 'Кылмыш, административдик, жарандык-укуктук, дисциплинардык, материалдык.' }
        ]
      },
      law_ch16: {
        name: '16. Укуктук система',
        flashcards: [
          { q: 'Укуктук система деген эмне?', a: 'Белгилүү бир коомдогу укуктук кубулуштардын (укук, укуктук практика, идеология) жыйындысы.' },
          { q: 'Укуктун системасы (Система права) деген эмне?', a: 'Укуктун ички түзүлүшү: укук нормаларынын тармактарга жана институттарга бөлүнүшү.' },
          { q: 'Укуктук тармак (Отрасль права) деген эмне?', a: 'Коомдук мамилелердин белгилүү бир түрүн жөнгө салуучу укуктук нормалардын ири тобу (мисалы, жарандык укук, кылмыш укугу).' },
          { q: 'Укуктук институт деген эмне?', a: 'Укук тармагынын ичиндеги, мамилелердин тар чөйрөсүн жөнгө салуучу нормалардын тобу (мисалы, жарандык укуктагы "мурас институту").' },
          { q: 'Жеке укук (Частное право) деген эмне?', a: 'Жеке адамдардын ортосундагы тең укуктуу мамилелерди жана жеке кызыкчылыктарды коргогон укук (жарандык, үй-бүлө).' },
          { q: 'Ачык укук (Публичное право) деген эмне?', a: 'Мамлекеттик кызыкчылыктарды коргогон, бийлик жана багынуу мамилелерин жөнгө салуучу укук (конституциялык, административдик, кылмыш).' },
          { q: 'Материалдык укук деген эмне?', a: 'Укуктарды жана милдеттерди түздөн-түз бекиткен нормалар.' },
          { q: 'Процессуалдык укук деген эмне?', a: 'Материалдык укуктарды коргоо жана ишке ашыруу тартибин (процедурасын) аныктаган нормалар.' }
        ]
      },
      law_ch17: {
        name: '17. Укуктук башкаруу механизми',
        flashcards: [
          { q: 'Укуктук жөнгө салуу (Правовое регулирование) деген эмне?', a: 'Юридикалык каражаттар аркылуу коомдук мамилелерге таасир этүү процесси.' },
          { q: 'Укуктук жөнгө салуунун механизми деген эмне?', a: 'Укуктук таасир этүүчү каражаттардын (норма, мамиле, акт) системасы.' },
          { q: 'Укуктук жөнгө салуунун стадиялары?', a: '1. Укуктук норманы түзүү. 2. Укуктук мамиленин пайда болушу. 3. Укуктарды жана милдеттерди ишке ашыруу.' },
          { q: 'Укуктук жөнгө салуунун ыкмалары (методдору)?', a: 'Императивдик (бийлик, буйрук) жана Диспозитивдик (тең укуктуулук, келишим).' },
          { q: 'Укуктук режим деген эмне?', a: 'Коомдук мамилелерди жөнгө салуунун өзгөчө тартиби (мисалы, өзгөчө абал режими, жеңилдетилген режим).' },
          { q: 'Укуктук стимул деген эмне?', a: 'Укуктук жактан жагымдуу шарттарды түзүү аркылуу позитивдүү аракеттерге түрткү берүү (сыйлык, жеңилдик).' },
          { q: 'Укуктук чектөө деген эмне?', a: 'Мыйзамсыз аракеттерди болтурбоо үчүн укуктарды чектөө (тыюу салуу, милдеттендирүү).' },
          { q: 'Укуктук жөнгө салуунун натыйжалуулугу эмнеден көз каранды?', a: 'Мыйзамдардын сапатынан, укуктук маданияттан жана укукту колдонуу практикасынан.' }
        ]
      },
      law_ch18: {
        name: '18. Укуктук система же укуктук үй-бүлө',
        flashcards: [
          { q: 'Укуктук үй-бүлө (Правовая семья) деген эмне?', a: 'Окшош тарыхый өнүгүү жолуна, булактарына жана түзүлүшүнө ээ болгон улуттук укуктук системалардын тобу.' },
          { q: 'Романо-германдык (Континенталдык) укуктук үй-бүлөнүн өзгөчөлүгү?', a: 'Негизги булагы - ченемдик укуктук акт (Мыйзам). Укук жеке жана ачык болуп бөлүнөт (Европа, КМШ).' },
          { q: 'Англо-саксондук (Жалпы укук) укуктук үй-бүлөнүн өзгөчөлүгү?', a: 'Негизги булагы - соттук прецедент. Соттор укук жаратуучу ролду ойношот (Англия, АКШ).' },
          { q: 'Диний (салттуу) укуктук үй-бүлөнүн өзгөчөлүгү?', a: 'Негизги булагы - диний китептер жана догмалар (Мусулман укугу - Шарият).' },
          { q: 'Кыргызстан кайсы укуктук үй-бүлөгө кирет?', a: 'Романо-германдык укуктук үй-бүлөгө (КМШ өлкөлөрү менен бирге).' },
          { q: 'Ислам укугунун булактары?', a: 'Куран, Сүннөт, Ижма, Кияс.' },
          { q: 'Укуктук рецепция деген эмне?', a: 'Бир өлкөнүн укуктук тажрыйбасын, мыйзамдарын экинчи өлкө тарабынан кабыл алуу (өздөштүрүү).' },
          { q: 'Укуктук аккультурация деген эмне?', a: 'Бир укуктук маданияттын экинчи маданиятка таасир этиши жана аралашуусу.' }
        ]
      },
      law_ch19: {
        name: '19. Граждандык коом жана мамлекет',
        flashcards: [
          { q: 'Жарандык коом деген эмне?', a: 'Мамлекеттен көз карандысыз, эркин жарандардын жана алардын бирикмелеринин (өкмөттүк эмес уюмдар, партиялар) жыйындысы.' },
          { q: 'Жарандык коомдун негизги белгилери?', a: 'Жеке менчик, эркин базар экономикасы, сөз эркиндиги, көп партиялуулук, укуктук мамлекет.' },
          { q: 'Мамлекет жана жарандык коомдун мамилеси?', a: 'Мамлекет жарандык коомдун өнүгүшүнө шарт түзөт, ал эми жарандык коом мамлекетти көзөмөлдөйт.' },
          { q: 'Коомдук бирикмелер деген эмне?', a: 'Жарандардын жалпы кызыкчылыктарды коргоо үчүн өз ыктыяры менен түзгөн уюмдары.' },
          { q: 'Саясий партиянын максаты эмне?', a: 'Саясий бийликке жетүү жана мамлекеттик саясатка таасир этүү.' },
          { q: 'Жергиликтүү өз алдынча башкаруу деген эмне?', a: 'Жергиликтүү калктын өз маселелерин өз алдынча жана жоопкерчилик менен чечүү укугу.' },
          { q: 'Лоббизм деген эмне?', a: 'Кызыкчылык топторунун мамлекеттик чечимдерге таасир этүү аракети.' },
          { q: 'Медиа (ЖМК) жарандык коомдо кандай роль ойнойт?', a: 'Маалымат жеткирүү, коомдук пикирди жаратуу жана бийликке көзөмөл жүргүзүү ("Төртүнчү бийлик").' }
        ]
      },
      law_ch20: {
        name: '20. Укуктук мамлекеттин негизги түшүнүгү жана белгилери',
        flashcards: [
          { q: 'Укуктук мамлекет (Правовое государство) деген эмне?', a: 'Ишмердүүлүгү укук (мыйзам) менен чектелген, адам укуктарын жогорку баалуулук катары караган демократиялык мамлекет.' },
          { q: 'Укуктун үстөмдүгү (Верховенство права) деген эмне?', a: 'Мамлекетте бардык жарандар жана органдар мыйзамга баш ийет, мыйзам баарынан жогору турат.' },
          { q: 'Укуктук мамлекеттин негизги принциптери?', a: 'Адам укуктарын коргоо, бийликтин бөлүнүшү, мыйзамдуулук, көз карандысыз сот, мамлекеттин жана инсандын өз ара жоопкерчилиги.' },
          { q: 'Мамлекеттин жана инсандын өз ара жоопкерчилиги эмнени билдирет?', a: 'Мамлекет жарандын укуктарын коргоого милдеттүү, ал эми жаран мыйзамдарды сактоого милдеттүү.' },
          { q: 'Социалдык мамлекеттин максаты?', a: 'Ар бир жаранга татыктуу жашоо шартын жана социалдык коргоону камсыз кылуу.' },
          { q: 'Укуктук мамлекетте соттун ролу?', a: 'Адам укуктарын коргоо жана мыйзамдын аткарылышын көзөмөлдөөчү көз карандысыз арбитр.' },
          { q: 'Кыргызстан укуктук мамлекетпи?', a: 'Конституция боюнча - ооба, бирок иш жүзүндө бул максатка жетүү процесси жүрүп жатат.' },
          { q: 'Авторитардык мамлекет укуктук боло алабы?', a: 'Жок, анткени ал жерде укук бийликке баш ийдирилген жана адам укуктары чектелген.' }
        ]
      },
      law_ch21: {
        name: '21. Кыргыз Республикасынын конституциялык укугу',
        flashcards: [
          { q: 'Кыргыз Республикасынын Конституциясы качан кабыл алынган?', a: 'Учурдагы Конституция 2021-жылдын 11-апрелинде референдумда кабыл алынган (жаңы редакциясы).' },
          { q: 'Конституциялык түзүлүштүн негиздери?', a: 'Эгемендүүлүк, элдик бийлик, бийликтин бөлүнүшү, саясий көп түрдүүлүк.' },
          { q: 'Адамдын жана жарандын укуктары жана эркиндиктери?', a: 'Жеке (жашоо, эркиндик), саясий (шайлоо), социалдык-экономикалык (эмгек, билим), маданий укуктар.' },
          { q: 'КР Президентинин статусу?', a: 'Мамлекет башчысы, аткаруу бийлигин жетектейт, 5 жылга шайланат (2021-жылкы Конституция боюнча).' },
          { q: 'Жогорку Кеңештин курамы жана милдети?', a: '90 депутаттан турат, 5 жылга шайланат. Негизги милдети - мыйзам чыгаруу.' },
          { q: 'Министрлер Кабинетинин статусу?', a: 'Аткаруу бийлигинин жогорку органы. Президент тарабынан түзүлөт жана ага баш ийет.' },
          { q: 'Элдик Курултай деген эмне?', a: 'Коомдук-өкүлчүлүктүү жыйын, ал кеңеш берүүчү, байкоочу укуктарга ээ.' },
          { q: 'Сот бийлиги кимдерден турат?', a: 'Жогорку Сот, Конституциялык сот жана жергиликтүү соттор.' }
        ]
      }
    }
  }
};
