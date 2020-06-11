import React, {useContext} from "react"
import ThemeContext from "../Context/ThemeContext"

const Themetoggeler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext)

    return(
        <div
            onClick = {() => {
                setThemeMode(themeNode === "light"? "dark" : "light")
            }}
            >
            <span>{themeMode === "light" ? "Turn Off" : "Lights On"}</span>
        </div>
    )
}

export default Themetoggeler;