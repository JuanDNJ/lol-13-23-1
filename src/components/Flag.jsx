import { useEffect, useState } from "react";
import { BANDERA, BANDERAS_JSON } from "@/config";

export default function Flag({ size, code }) {
    const [countries, setCountries] = useState()
    let w = 0;
    let h = 0
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
    useEffect(() => {
        fetch(BANDERAS_JSON)
            .then(record => record.json())
            .then(list => setCountries(() => list))
    }, [])

    return (<img src={BANDERA.replace("{size}", size).replace("{code}", code)} width={w} height={h} title={countries && countries[code]} alt={countries && countries[code]} />)
}