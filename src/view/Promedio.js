import TituloPromedio from "../components/TituloPromedio.js";

const [promedio, setPromedio] = useState(null);

<TituloPromedio promedio={promedio} />

const calcularPromedioAPI = async (lista) => {
    try {
        const response = await fetch("https://rkjc6nf21h.execute-api.us-east-2.amazonaws.com/calcularPromedio", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({ edades: lista }),
        });

        const data = await response.json();
        setPromedio(data.promedio || null);

        // una vez que se cargan las edades, llama al método de calculo con la API
        if (data.length > 0) {
            calcularPromedioAPI(data);
        }else {
            setPromedio(null);

        }
    }catch (error) {
        console.error("Error al calcular promedio en API", error);
    }
};