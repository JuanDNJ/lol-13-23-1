// Constantes de entorno
const DEVELOPMENT_API_KEY = import.meta.env.VITE_DEVELOPMENT_API_KEY;
const PRODUCTION_API_KEY = import.meta.env.VITE_PRODUCTION_API_KEY;
const URL_REGION = "https://{region}.api.riotgames.com/lol";
const URL_API_EUROPE = "https://europe.api.riotgames.com/lol";
const URL_API_EUROPE_RIOT = "https://europe.api.riotgames.com/riot";

// Lenguaje del navegador
const BROWSER_LANGUAGE = window.navigator.language;


// Url del CDN https://ddragon.leagueoflegends.com/cdn
const CDN = "https://ddragon.leagueoflegends.com/cdn";
/**
 * Versiones
 * Puede encontrar todas las versiones válidas de Data Dragon en el archivo de versiones. 
 * Por lo general, solo hay una compilación de Data Dragon para un parche determinado; sin embargo, puede haber compilaciones adicionales. 
 * Esto suele ocurrir cuando hay un error en la compilación original. 
 * Como tal, siempre debe utilizar la versión más reciente de Data Dragon para un parche determinado para obtener mejores resultados.
 * https://ddragon.leagueoflegends.com/api/versions.json
 */
const VERSIONS = "https://ddragon.leagueoflegends.com/api/versions.json";
const VERSION = "/13.23.1";
/**
 * Champions
 * https://ddragon.leagueoflegends.com/cdn/13.23.1/data/en_US/Champion.json
 * https://ddragon.leagueoflegends.com/cdn/13.23.1/data/en_US/champion/Aatrox.json
 * Hay dos tipos de archivos de datos para campeones. 
 * El champion.json archivo de datos devuelve una lista de campeones con un breve resumen.
 * Los archivos JSON de campeones individuales contienen datos adicionales para cada campeón.
 */
const CHAMPIONS = CDN + VERSION + "/data/{language}/champion.json";
const CHAMPIONS_FULL = CDN + VERSION + "/data/{language}/championFull.json";
const CHAMPIONS_INDIVIDUAL = CDN + VERSION + "/data/{language}/champion/{name}.json";

/**Regiones
 * Las versiones de Data Dragon no siempre son equivalentes a la versión del cliente de League of Legends en una región. 
 * Puede encontrar la versión que utiliza cada región en los archivos de dominios.
 * https://ddragon.leagueoflegends.com/realms/na.json _ 
 * 
*/
const REGIONS = "https://ddragon.leagueoflegends.com/realms/na.json";
const ALL_REGIONS = {
    BR1: "br1",
    EUN1: "eun1",
    EUW1: "euw1",
    JP1: "jp1",
    KR: "kr",
    LA1: "lan1",
    LA2: "lan2",
    NA1: "na1",
    OC1: "oc1",
    PH2: "ph2",
    RU: "ru",
    SG2: "sg2",
    TH2: "th2",
    TR1: "tr1",
    TW2: "tw2",
    VN2: "vn2",
}
/**
 * Activos de chapoteo de campeones (Champion Splash Assets)
 * https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg
 * El número al final del nombre del archivo corresponde al número de máscara. 
 * Puedes encontrar el número de aspecto de cada aspecto en el archivo de cada campeón individual en Data Dragon. 
 * Cada campeón contiene un skins campo y el número de aspecto se indica en el numcampo.
 */
const CHAMPIONS_SPLASH = CDN + "/img/champion/splash/{splash}.jpg";
/**
 * Recursos de la pantalla de carga de campeones (Champion Loading Screen Assets)
 * https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg
 * El número al final del nombre del archivo sigue la misma convención descrita en Champion Splash Art .
 */
const CHAMPIONS_LOADING = CDN + "/img/champion/loading/{loading}.jpg";

/** Champion Square Assets
 * https://ddragon.leagueoflegends.com/cdn/13.23.1/img/champion/Aatrox.png
 */
const CHAMPIONS_SQUARE = CDN + VERSION + "/img/champion/{square}.png";

/** Activos pasivos campeones (Champion Passive Assets)
 * https://ddragon.leagueoflegends.com/cdn/13.23.1/img/passive/Anivia_P.png
 * Puedes encontrar el nombre de archivo de la pasiva de cada campeón en el archivo Data Dragon del campeón individual. 
 * El JSON contiene un passive campo con datos de imagen. El nombre del archivo está indicado por el fullcampo.
 */
const CHAMPION_PASSIVE = CDN + VERSION + "/img/passive/{passive}.png";

/** Recursos de habilidad del campeón (Champion Ability Assets)
 * https://ddragon.leagueoflegends.com/cdn/13.23.1/img/spell/FlashFrost.png
 * Puedes encontrar el nombre del archivo para las habilidades de cada campeón en el archivo Data Dragon del campeón individual. 
 * El spellscampo contiene una serie de objetos que incluyen imagedatos. El nombre del archivo está indicado por el fullcampo. 
 */
const CHAMPION_SPELL = CDN + VERSION + "img/spell/{spell}.png";

/** Elementos (Items)
 * Data Dragon también proporciona el mismo nivel de detalle para cada elemento del juego. 
 * Dentro de Data Dragon, puede encontrar información como la descripción del artículo, 
 * el valor de compra, el valor de venta, los artículos a partir de los cuales se construye, 
 * los artículos en los que se construye y las estadísticas otorgadas por el artículo.
 * https://ddragon.leagueoflegends.com/cdn/13.23.1/data/en_US/item.json
 * El effectcampo contiene una serie de variables utilizadas en scripts adicionales. 
 * Por ejemplo, en el escudo de Doran ves los siguientes datos en el effectcampo, 
 * que corresponden a los 8 daños que se bloquean de los ataques de los campeones.
 * "effect": {
        "Effect1Amount": "8"
    }

* - Convenciones de nomenclatura de estadísticas (Stat Naming Conventions)
* También puede encontrar una lista de posibles estadísticas que obtiene de elementos, runas o maestrías en Data Dragon . 
* Puedes encontrar una lista de estadísticas obtenidas por el objeto, runa o maestría buscando el statscampo. 
* A continuación se ofrecen algunos consejos a la hora de comprender qué significa una estadística y cómo se calculan:

* - Mod significa modificador. (Mod stands for modifier.)
* Una "r" al comienzo de la estadística significa que esas estadísticas se pueden encontrar en las runas.
* La visualización plana frente a porcentaje frente a 5, etc. depende de cada caso. siempre será el mismo para una estadística determinada. Por ejemplo, PercentAttackSpeedModsiempre se multiplicará por 100 y se mostrará como porcentaje.
* Las estadísticas se llaman planas si las sumas y porcentaje si las multiplicas.
* La tenacidad de un objeto NO se acumula, pero la tenacidad de una runa SÍ se acumula.
 */
const ITEMS = CDN + VERSION + "/data/{language}/item.json";

/** Activos del artículo (Item Assets)
 * https://ddragon.leagueoflegends.com/cdn/13.23.1/img/item/1001.png
 * El número agregado al nombre del archivo del artículo corresponde a la identificación del artículo. 
 * Puede encontrar una lista de los ID de los artículos en el archivo de datos del artículo. 
 */

const ITEM_ASSETS = CDN + VERSION + "/img/item/{item}.png";

/**Idiomas (languages)
 * Data Dragon proporciona versiones localizadas de cada uno de los archivos de datos en los idiomas admitidos por el cliente. 
 * A continuación se muestra una lista de los idiomas admitidos por Data Dragon, que también puede recuperar del archivo de idiomas de Data Dragon.
 * https://ddragon.leagueoflegends.com/cdn/languages.json
 */
const LANGUAGES = CDN + "/languages.json";

/** Otro (Other)
* Hechizos de invocador (Summoner Spells)
* https://ddragon.leagueoflegends.com/cdn/13.23.1/data/en_US/invocador.json
* https://ddragon.leagueoflegends.com/cdn/13.23.1/img/spell/SummonerFlash.png
 */
const SUMMONER = CDN + VERSION + "/data/{language}/invocador.json";
const SUMMONER_SPELLS = CDN + VERSION + "/img/spell/{spell}.png";

/**  Iconos de perfil (Profile Icons)
* https://ddragon.leagueoflegends.com/cdn/13.23.1/data/en_US/profileicon.json 
* https://ddragon.leagueoflegends.com/cdn/13.23.1/img/profileicon/685.png
 */
const PROFILE_ICONS = CDN + VERSION + "/data/{language}/profileicon.json";
const PROFILE_ICON = CDN + VERSION + "/img/profileicon/{profileiconid}.png";

/**Minimapas (Minimaps)
* https://ddragon.leagueoflegends.com/cdn/6.8.1/img/map/map11.png
* El número añadido al nombre del archivo del mapa corresponde a la identificación del mapa. 
* Puedes encontrar una lista de identificadores de mapas en la sección Nombres de mapas de Constantes del juego .
 */

const MINIMAP = CDN + VERSION + "/6.8.1/img/map/{mapid}.png";
/**duendes (Sprites)
* https://ddragon.leagueoflegends.com/cdn/13.23.1/img/sprite/spell0.png
 */
const SPRITE = "https://ddragon.leagueoflegends.com/cdn/13.23.1/img/sprite/{sprite}.png";

/** Iconos del marcador (versión 5.5.1) (Scoreboard Icons (version 5.5.1))
* https://ddragon.leagueoflegends.com/cdn/5.5.1/img/ui/champion.png
* https://ddragon.leagueoflegends.com/cdn/5.5.1/img/ui/items.png
* https:// ddragon.leagueoflegends.com/cdn/5.5.1/img/ui/minion.png
* https://ddragon.leagueoflegends.com/cdn/5.5.1/img/ui/score.png
* https://ddragon.leagueoflegends. com/cdn/5.5.1/img/ui/spells.png 
*/
const SCORE_BOARD_ICON_CHAMPION = CDN + "/5.5.1/img/ui/champion.png";
const SCORE_BOARD_ICON_ITEMS = CDN + "/5.5.1/img/ui/items.png";
const SCORE_BOARD_ICON_MINION = CDN + "/5.5.1/img/ui/minion.png";
const SCORE_BOARD_ICON_SCORE = CDN + "/5.5.1/img/ui/score.png";
const SCORE_BOARD_ICON_SPELLS = CDN + "/5.5.1/img/ui/spells.png";

/** Trabajar con API de LoL (Trabajar con API de LoL)
 * Constantes del juego (Game Constants)
 * Al buscar estaciones, colas, mapas y modos específicos, es importante utilizar las identificaciones correctas.
 * 
 * For example
 * 
 * Estaciones (Seasons)
 * Los ID de temporada se utilizan en el historial de partidos para indicar en qué temporada se jugó un partido. 
 * Puede encontrar una lista completa de identificadores de temporada en
 * https://static.developer.riotgames.com/docs/lol/seasons.json.
*/
const SEASONS = "https://static.developer.riotgames.com/docs/lol/seasons.json";

/** ID de cola (Queue IDs)
 * Los ID de cola aparecen en varios lugares de la API y se utilizan para indicar qué tipo de partido se jugó. 
 * Puede encontrar una lista completa de identificadores de cola en https://static.developer.riotgames.com/docs/lol/queues.json.
 * Nota : a principios de 2022, URF (anteriormente queueId900) se dividió en colas separadas: ARURF ( queueId900) y Pick URF ( queueId1900). 
 * Todos los juegos Pick URF anteriores a esta distinción seguirán estando en queueId900. 
 */
const QUEUE_IDS = "https://static.developer.riotgames.com/docs/lol/queues.json";

/** Mapas (Maps)
 * Los ID de mapa se utilizan en el historial de partidos para indicar en qué mapa se jugó un partido.
 * Puede encontrar una lista completa de ID de mapas en https://static.developer.riotgames.com/docs/lol/maps.json.
 */
const MAPS = "https://static.developer.riotgames.com/docs/lol/maps.json";

/** Modos de juego (Game Modes)
 * Puede encontrar una lista completa de modos de juego en https://static.developer.riotgames.com/docs/lol/gameModes.json. */
const GAME_MODES = "https://static.developer.riotgames.com/docs/lol/gameModes.json";

/** Tipos de juegos (Game Types)
 * Puede encontrar una lista completa de tipos de juegos en https://static.developer.riotgames.com/docs/lol/gameTypes.json.*/
const GAME_TYPES = "https://static.developer.riotgames.com/docs/lol/gameTypes.json";

/** Información clasificada
 * Tipos de cola
 * Los puntos finales de la Liga devuelven un campo llamado queueTypeque indica en qué mapa/modo jugó un jugador.
 * Dependiendo de queueType, el highestTierAchievedcampo devuelve el nivel final más alto de la temporada anterior de un grupo de colas clasificadas.
 * Aquí hay una lista de todos los queueTypey highestTierAchievedpara cada uno.
 * 
 * Grieta del Invocador
 * Unranked
    RANKED_SOLO_5x5
    RANKED_TEAM_5x5
 * Ranked Solo/Duo
    RANKED_SOLO_5x5
 * Ranked Team 5x5
    RANKED_TEAM_5x5
 */

/** Iconos y emblemas (Icons and Emblems)
 * Los activos de emblemas más recientes para todos los rangos se pueden encontrar a continuación. 
*/
const EMBLEMS_LATEST = "http://localhost:5173/ranked-emblems-latest/{emblem}.png";
const EMBLEMS_TIER_LATEST = "http://localhost:5173/ranked-emblems-latest/tier-wings/{emblem}.png";
const EMBLEMS_WINGS_LATEST = "http://localhost:5173/ranked-emblems-latest/wings/{emblem}.png";

// Los recursos de íconos de niveles más antiguos se pueden encontrar a continuación.
const EMBLEMS_OLD = "http://localhost:5173/ranked-emblems/{emblem}.png";
const EMBLEMS_TIER_OLD = "http://localhost:5173/ranked-emblems/tier/{emblem}.png";
const EMBLEMS_WINGS_OLD = "http://localhost:5173/ranked-emblems/wings/{emblem}.png";

const RANKED_EMBLEMS_POSITION = "http://localhost:5173/ranked-positions/{position}.png";
const TIERS_ICONS = "http://localhost:5173/tier-icons/tier-icons/{icon}.png";
const BASE_ICONS = "http://localhost:5173/tier-icons/base-icons/{icon}.png";

const DOWNLOADS = {
    rankedEmblemsLatest: 'https://static.developer.riotgames.com/docs/lol/ranked-emblems-latest.zip',
    rankedEmblemsOld: 'https://static.developer.riotgames.com/docs/lol/ranked-emblems.zip',
    rankedPositionsOld: 'https://static.developer.riotgames.com/docs/lol/ranked-positions.zip',
    tierIcons: 'https://static.developer.riotgames.com/docs/lol/tier-icons.zip'
};

// URL para obtener los datos del nombre de invocador del Juego
const GET_SUMMONER_DATA = URL_REGION + "/summoner/v4/summoners/by-name/{summonerName}?api_key={token}";

// https://www.banderas-mundo.es Banderas de paises (gratuitas) codigo de pais ISO 3166
// Tallas disponibles 
// 16x12,20x15,24x18,28x21,32x24,40x27,48x36,56x42,
// 60x45,64x48,80x60,84x63,96x72,108x81 112x84,
// 120x90,128x96,144x108,160x120,192x144,224x128,256x192
const BANDERA = "https://flagcdn.com/{size}/{code}.png";
const BANDERAS_JSON = "https://flagcdn.com/es/codes.json";

export {
    DEVELOPMENT_API_KEY,
    PRODUCTION_API_KEY,
    URL_REGION,
    URL_API_EUROPE,
    URL_API_EUROPE_RIOT,
    BROWSER_LANGUAGE,
    CDN,
    VERSION,
    VERSIONS,
    CHAMPIONS,
    CHAMPIONS_FULL,
    CHAMPIONS_SQUARE,
    CHAMPIONS_INDIVIDUAL,
    CHAMPIONS_SPLASH,
    CHAMPION_PASSIVE,
    CHAMPIONS_LOADING,
    CHAMPION_SPELL,
    REGIONS,
    ALL_REGIONS,
    ITEMS,
    ITEM_ASSETS,
    LANGUAGES,
    SUMMONER,
    SUMMONER_SPELLS,
    PROFILE_ICONS,
    PROFILE_ICON,
    MAPS,
    MINIMAP,
    SPRITE,
    SCORE_BOARD_ICON_CHAMPION,
    SCORE_BOARD_ICON_ITEMS,
    SCORE_BOARD_ICON_MINION,
    SCORE_BOARD_ICON_SCORE,
    SCORE_BOARD_ICON_SPELLS,
    SEASONS,
    QUEUE_IDS,
    GAME_MODES,
    GAME_TYPES,
    DOWNLOADS,
    EMBLEMS_LATEST,
    EMBLEMS_TIER_LATEST,
    EMBLEMS_WINGS_LATEST,
    EMBLEMS_OLD,
    EMBLEMS_TIER_OLD,
    EMBLEMS_WINGS_OLD,
    RANKED_EMBLEMS_POSITION,
    TIERS_ICONS,
    BASE_ICONS,
    GET_SUMMONER_DATA,
    BANDERA,
    BANDERAS_JSON
}