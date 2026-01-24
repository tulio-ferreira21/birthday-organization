import { useState, useEffect } from "react"
import { ListItems } from "../../UI/ListItems";
export default function Foods() {
    const [items, setItems] = useState([]);
    return (
            <>
                {<ListItems title={"Comidas"} data={items} />}
            </>
    )
}