import { useEffect, useState } from "react";
// import { BANDERA, BANDERAS_JSON } from "@/config";
import { getUrlFlagLanguage, getListFlags } from "../api/lol";
export default function Flag(props) {
    const [countries, setCountries] = useState()
    const [image, setImage] = useState()

    useEffect(() => {
        getListFlags()
            .then(list => setCountries(() => list))

        getUrlFlagLanguage(props).then(record => {
            console.log(record)
            setImage(() => record)
        })
    }, [image])

    return (<img src={image && image.url} width={image && image.size.w} height={image && image.size.h} title={countries && countries[props.code]} alt={countries && countries[props.code]} />)

}
