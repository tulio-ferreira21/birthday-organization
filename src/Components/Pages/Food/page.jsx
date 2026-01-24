import { useState } from "react"
import { ListItems } from "../../UI/ListItems";
export default function Foods() {
    const [items] = useState([]);
    return (
        <>
            {<ListItems title={"Comidas"} data={items} />}
        </>
    )
}