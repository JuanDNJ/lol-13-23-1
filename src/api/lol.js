import {
    DEVELOPMENT_API_KEY,
    URL_SUMMONER_DATA,
    URL_LEAGUE_BY_ID,
    URL_LEAGUE_ENTRIES_BY_SUMMORNER_ID,
    PROFILE_ICON,
    BANDERA,
    BANDERAS_JSON
} from "@/config"

async function getSummonerByName(data) {
    try {
        const region = URL_SUMMONER_DATA.replace("{region}", data.region)
        const summonerName = region.replace("{summonerName}", data.summonerName)
        const url = summonerName.replace("{token}", DEVELOPMENT_API_KEY)

        const summoner = await fetch(url)

        if (summoner.status === 200) {
            return {
                region: data.region,
                language: data.language,
                ... await summoner.json()
            }
        }
        return false

    } catch (error) {
        console.error(error)
    }
}
async function getLeagueById(data) {
    try {
        const region = URL_LEAGUE_BY_ID.replace("{region}", data.region)
        const id = region.replace("{leagueId}", data.id)
        const url = id.replace("{token}", DEVELOPMENT_API_KEY)
        const league = await fetch(url)

        if (league.status === 200) {
            return league.json();
        }
        return false
    } catch (error) {
        console.error(error)
    }

}
async function getLeagueEntriesBySummonerId(data) {
    try {
        const region = URL_LEAGUE_ENTRIES_BY_SUMMORNER_ID.replace("{region}", data.region)
        const id = region.replace("{summornerId}", data.id)
        const url = id.replace("{token}", DEVELOPMENT_API_KEY)
        const league = await fetch(url)

        if (league.status === 200) {
            return league.json();
        }
        return false
    } catch (error) {
        console.error(error)
    }

}
async function getProfileIcon(data) {
    const profileiconid = PROFILE_ICON.replace("{profileiconid}", data.profileIconId)
    const fetching = await fetch(profileiconid)
    const url = fetching.url;
    return url;
}
async function getUrlFlagLanguage(data) {
    console.log(data)
    let w = 0;
    let h = 0
    const size = data.size
    const code = data.code
    if (size) {
        if (size.length === 5) {
            w = size.slice(0, 2)
            h = size.slice(3, 5)
        }
        if (size.length === 6) {
            w = size.slice(0, 3)
            h = size.slice(4, 6)
        }
        if (size.length === 7) {
            w = size.slice(0, 3)
            h = size.slice(4, 7)
        }
    }


    return {
        url: BANDERA.replace("{size}", size).replace("{code}", code),
        size: {
            w,
            h
        }
    }

}
async function getListFlags(options) {
    const fetching = await fetch(BANDERAS_JSON)
    return fetching.json()
}
export {
    getSummonerByName,
    getLeagueById,
    getLeagueEntriesBySummonerId,
    getProfileIcon,
    getUrlFlagLanguage,
    getListFlags
}
