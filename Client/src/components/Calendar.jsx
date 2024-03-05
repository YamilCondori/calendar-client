import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css"
import dayjs from "dayjs"
// import clients from '../../../clients.json'

const MyCalendar = () =>{
    const localizer = dayjsLocalizer(dayjs)

    const clientsFormed =     [
        {
            fecha_de_instalacion: "",
            ubicacion: "-38.70393474780914, -62.28732954455899",
            title: "Ana Rodríguez",
            start: dayjs("2023-10-25T00:00:00").toDate(),
            end: dayjs("2023-10-25T23:59:59").toDate()
        },
        {
            fecha_de_instalacion: "",
            ubicacion: "-38.70697821924349, -62.29130204294141",
            title: "Juan Pérez",
            start: dayjs("2024-02-08T00:00:00").toDate(),
            end: dayjs("2024-02-08T23:59:59").toDate()
        },
        {
            fecha_de_instalacion: "",
            ubicacion: "-38.696302597574565, -62.2329076452145",
            title: "María García",
            start: dayjs("2023-06-14T00:00:00").toDate(),
            end: dayjs("2023-06-14T23:59:59").toDate()
        },
        {
            fecha_de_instalacion: "",
            ubicacion: "-38.69961096325841, -62.30111755854922",
            title: "Carlos López",
            start: dayjs("2024-04-20T00:00:00").toDate(),
            end: dayjs("2024-04-20T23:59:59").toDate()
        },
        {
            fecha_de_instalacion: "",
            ubicacion: "-38.71073797924922, -62.3076687931633",
            title: "Laura Martínez",
            start: dayjs("2023-12-18T00:00:00").toDate(),
            end: dayjs("2023-12-18T23:59:59").toDate()
        },
        {
            fecha_de_instalacion: "",
            ubicacion: "-38.686978198233405, -62.29148338999912",
            title: "Pedro Fernández",
            start: dayjs("2024-01-03T00:00:00").toDate(),
            end: dayjs("2024-01-03T23:59:59").toDate()
        },
        {
            fecha_de_instalacion: "",
            ubicacion: "-38.703821389159295, -62.317688328455404",
            title: "Silvia Torres",
            start: dayjs("2023-09-30T00:00:00").toDate(),
            end: dayjs("2023-09-30T23:59:59").toDate()
        },
        {
            fecha_de_instalacion: "",
            ubicacion: "-38.69329485961121, -62.34986645141275",
            title: "Hernán Sánchez",
            start: dayjs("2024-03-04T00:00:00").toDate(),
            end: dayjs("2024-03-04T23:59:59").toDate()
        },
        {
            fecha_de_instalacion: "",
            ubicacion: "-38.657342605543114, -62.311522461000095",
            title: "Lucía Díaz",
            start: dayjs("2023-07-22T00:00:00").toDate(),
            end: dayjs("2023-07-22T23:59:59").toDate()
        }
        ]
    console.log(clientsFormed);

    return (
        <div style={{height: "100vh" , width: "70vw"}}>
            <Calendar
            localizer={localizer}
            events={clientsFormed}
            />
        </div>
    )
}

export default MyCalendar