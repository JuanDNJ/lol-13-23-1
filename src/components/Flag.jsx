import { useEffect, useState } from "react";
import { BANDERA, BANDERAS_JSON } from "@/config";

export default function Flag({ size, code }) {
    const [countries, setCountries] = useState()
    useEffect(() => {
        fetch(BANDERAS_JSON)
            .then(record => record.json())
            .then(list => setCountries(() => list))
    }, [])

    return (<img src={BANDERA.replace("{size}", size).replace("{code}", code)} title={countries && countries[code]} alt={countries && countries[code]} />)
}