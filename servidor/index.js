const Conexion = require("express")
const cors = require("cors")

const App = Conexion()



App.use(cors(
    {
        origin: "*",
        methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"]


    }



)
)

const final = [
	{
		clase: "guerrero",
		atributos: {
			fuerza: 15,
			destreza: 20,
			inteligenia: 10,
			carisma: 13,
			suerte: 8
		},
		Armas:["hacha", "espada", "escudo"]	
	},
	{
		clase: "paladin",
		atributos: {
			fuerza: 14,
			destreza: 15,
			inteligenia: 16,
			carisma: 20,
			suerte: 12
		},
		Armas:["baculo", "espada", "escudo"]
	},

    {
		clase: "investigador",
		atributos: {
			fuerza: 5,
			destreza: 10,
			inteligenia: 25,
			carisma: 30,
			suerte: 100
		},
		Armas:["exigencia", "articulos", "dinero"]
	},

    {
		clase: "estudiante",
		atributos: {
			fuerza: 50,
			destreza: 10,
			inteligenia: 20,
			carisma: 5,
			suerte: 3
		},
		Armas:["cafe", "depresion", "alcohol"]
	},

    {
		clase: "postdoc",
		atributos: {
			fuerza: 14,
			destreza: 15,
			inteligenia: 16,
			carisma: 20,
			suerte: 12
		},
		Armas:["resistencia", "tolerancia", "inmunidad"]
	}



]


function Autorizado (req, res, next){
    const Token = "A1C2E3"

    const F1 = req.headers.authorization

    if (F1 === Token){
        next()
    }else{
        res.send("No hay autorizacion")
    }
}

const port = 3000

App.get("/", Autorizado, (req,res) =>{
    res.json(final)
})



App.listen(port, () => console.log("Escuchando en el puert0"))